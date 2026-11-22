/**
 * Error reporting (`captureErrors`): the page's own uncaught errors and
 * unhandled promise rejections, sent to qaid even when nobody leaves feedback.
 * It feeds qaid's error triage (an Enterprise feature); for any other plan the
 * server answers 403 and this stops sending for the rest of the page.
 *
 * It must never become the page's problem: every path is wrapped, it reports
 * nothing about itself, and it holds a hard cap per page so a render loop that
 * throws every frame costs a few requests, not thousands.
 */

import { capLength, redactText, redactUrl } from "./redact";

export interface ErrorReportingOptions {
  /** Where batches go, e.g. `https://qaid.dev/api/errors`. */
  endpoint: string;
  apiKey: string;
  /** Per tab: joins these errors to feedback sent from the same tab. */
  sessionId: string;
  visitorId: string;
  /** Your build or commit, so triage can tell which deploy an error came from. */
  release?: string;
  /** e.g. `production` or `staging`. Default (server side): `production`. */
  environment?: string;
  /** 0–1: the share of pages that report. Default 1. */
  sampleRate?: number;
}

export interface ErrorReporter {
  /** Send what is queued now (also runs on pagehide). */
  flush(): void;
  /** Stop listening and send what is queued. */
  stop(): void;
}

interface QueuedEvent {
  kind: "error" | "unhandledrejection";
  message: string;
  errorType?: string;
  stack?: string;
  file?: string;
  line?: number;
  column?: number;
  occurredAt: string;
  pageUrl: string;
}

/** Events one page may send in total. */
export const MAX_EVENTS_PER_PAGE = 50;
/** Times one distinct error is sent per page. */
export const MAX_REPEATS = 3;
/** Matches the server's batch limit. */
export const MAX_BATCH = 25;
/** Quiet time before a batch goes. */
export const FLUSH_DELAY_MS = 2000;

const MAX_MESSAGE = 2000;
const MAX_STACK = 8000;

const SESSION_KEY = "qaid_session_id";

/** A per-tab id in sessionStorage, shared with feedback sent from the tab. */
export function getOrCreateSessionId(makeId: () => string): string {
  try {
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = makeId();
      sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return makeId();
  }
}

function errorParts(value: unknown): { message: string; errorType?: string; stack?: string } {
  if (value instanceof Error) {
    return { message: value.message || String(value), errorType: value.name, stack: value.stack };
  }
  if (typeof value === "string") return { message: value };
  try {
    return { message: JSON.stringify(value) ?? String(value) };
  } catch {
    return { message: String(value) };
  }
}

function clean(text: string | undefined, max: number): string | undefined {
  return text ? capLength(redactText(text.slice(0, max * 2)), max) : undefined;
}

export function startErrorReporting(options: ErrorReportingOptions): ErrorReporter {
  const noop: ErrorReporter = { flush() {}, stop() {} };
  const rate = options.sampleRate ?? 1;
  if (typeof window === "undefined" || Math.random() >= rate) return noop;

  const queue: QueuedEvent[] = [];
  const seen = new Map<string, number>();
  let sent = 0;
  let stopped = false;
  let refused = false;
  let timer: ReturnType<typeof setTimeout> | null = null;

  const send = (events: QueuedEvent[], beacon: boolean): void => {
    const body = JSON.stringify({
      apiKey: options.apiKey,
      sessionId: options.sessionId,
      visitorId: options.visitorId,
      release: options.release,
      environment: options.environment,
      pageUrl: redactUrl(window.location.href),
      events,
    });
    try {
      if (beacon && typeof navigator.sendBeacon === "function") {
        // text/plain: a simple request, no preflight, survives the unload.
        if (navigator.sendBeacon(options.endpoint, new Blob([body], { type: "text/plain" }))) return;
      }
      void fetch(options.endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body,
        keepalive: true,
        credentials: "omit",
      })
        .then((res) => {
          // Wrong key, wrong plan, archived project: nothing will ever succeed.
          if (res.status === 401 || res.status === 403 || res.status === 410) refused = true;
        })
        .catch(() => {});
    } catch {
      // Never the page's problem.
    }
  };

  const flushNow = (beacon: boolean): void => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    while (queue.length && !refused) send(queue.splice(0, MAX_BATCH), beacon);
    queue.length = 0;
  };

  const enqueue = (event: QueuedEvent): void => {
    if (stopped || refused || sent >= MAX_EVENTS_PER_PAGE) return;
    const key = `${event.kind}|${event.message}|${event.file ?? ""}|${event.line ?? 0}`;
    const count = seen.get(key) ?? 0;
    if (count >= MAX_REPEATS) return;
    seen.set(key, count + 1);
    sent++;
    queue.push(event);
    if (queue.length >= MAX_BATCH) flushNow(false);
    else if (!timer) timer = setTimeout(() => flushNow(false), FLUSH_DELAY_MS);
  };

  const base = (): Pick<QueuedEvent, "occurredAt" | "pageUrl"> => ({
    occurredAt: new Date().toISOString(),
    pageUrl: redactUrl(window.location.href),
  });

  const onError = (e: ErrorEvent): void => {
    try {
      // A failed <img>/<script> load fires a plain Event with no message.
      if (!e.message && !e.error) return;
      const parts = errorParts(e.error ?? e.message);
      enqueue({
        kind: "error",
        message: clean(parts.message || e.message, MAX_MESSAGE) ?? "Unknown error",
        errorType: parts.errorType,
        stack: clean(parts.stack, MAX_STACK),
        file: e.filename ? redactUrl(e.filename) : undefined,
        line: e.lineno || undefined,
        column: e.colno || undefined,
        ...base(),
      });
    } catch {
      // ignore
    }
  };

  const onRejection = (e: PromiseRejectionEvent): void => {
    try {
      const parts = errorParts(e.reason);
      enqueue({
        kind: "unhandledrejection",
        message: clean(parts.message, MAX_MESSAGE) ?? "Unhandled rejection",
        errorType: parts.errorType,
        stack: clean(parts.stack, MAX_STACK),
        ...base(),
      });
    } catch {
      // ignore
    }
  };

  const onPageHide = (): void => flushNow(true);
  const onVisibility = (): void => {
    if (document.visibilityState === "hidden") flushNow(true);
  };

  window.addEventListener("error", onError);
  window.addEventListener("unhandledrejection", onRejection);
  window.addEventListener("pagehide", onPageHide);
  document.addEventListener("visibilitychange", onVisibility);

  return {
    flush: () => flushNow(false),
    stop: () => {
      if (stopped) return;
      stopped = true;
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
      window.removeEventListener("pagehide", onPageHide);
      document.removeEventListener("visibilitychange", onVisibility);
      flushNow(true);
    },
  };
}
