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
/** Events one page may send in total. */
export declare const MAX_EVENTS_PER_PAGE = 50;
/** Times one distinct error is sent per page. */
export declare const MAX_REPEATS = 3;
/** Matches the server's batch limit. */
export declare const MAX_BATCH = 25;
/** Quiet time before a batch goes. */
export declare const FLUSH_DELAY_MS = 2000;
/** A per-tab id in sessionStorage, shared with feedback sent from the tab. */
export declare function getOrCreateSessionId(makeId: () => string): string;
export declare function startErrorReporting(options: ErrorReportingOptions): ErrorReporter;
