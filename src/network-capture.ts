/**
 * Network capture utilities
 * Intercepts fetch() and XMLHttpRequest to capture 4xx/5xx errors
 *
 * What is kept goes to qaid's server with a report, so (see redact.ts):
 * request bodies are never captured, credential-like URL parameters are
 * replaced, and a response body is dropped for 401/403 and sign-in-ish URLs.
 */

import type { NetworkError } from "./types";
import { redactResponseBody, redactUrl } from "./redact";

const MAX_ENTRIES = 20;
const MAX_BODY_SIZE = 4096; // 4KB

export interface NetworkCapture {
  errors: NetworkError[];
  restore: () => void;
}

/**
 * Truncate a body to max size. Callers must guard against null/undefined.
 */
export function truncateBody(body: unknown): string {
  const str = typeof body === "string" ? body : JSON.stringify(body);
  if (str.length > MAX_BODY_SIZE) {
    return str.slice(0, MAX_BODY_SIZE) + "…[truncated]";
  }
  return str;
}

/**
 * Add an error to the buffer, evicting oldest if at capacity
 */
export function addEntry(errors: NetworkError[], entry: NetworkError): void {
  if (errors.length >= MAX_ENTRIES) {
    errors.shift();
  }
  errors.push(entry);
}

/**
 * Read response body as text, with size limit
 */
async function safeReadBody(response: Response): Promise<string | undefined> {
  try {
    const text = await response.clone().text();
    return truncateBody(text);
  } catch {
    return undefined;
  }
}

/**
 * Intercept fetch() and XMLHttpRequest to capture network errors (4xx/5xx)
 */
export function captureNetworkErrors(): NetworkCapture {
  const errors: NetworkError[] = [];
  const originalFetch = window.fetch;

  // Monkey-patch fetch
  window.fetch = async function (input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    const url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
    const method = init?.method ?? (typeof input === "object" && "method" in input ? input.method : "GET");

    const response = await originalFetch.apply(window, [input, init]);

    if (response.status >= 400) {
      const responseBody = redactResponseBody(url, response.status, await safeReadBody(response));
      addEntry(errors, {
        url: redactUrl(url),
        method: method.toUpperCase(),
        status: response.status,
        statusText: response.statusText,
        responseBody,
        timestamp: Date.now(),
      });
    }

    return response;
  };

  // Monkey-patch XMLHttpRequest
  const originalXHROpen = XMLHttpRequest.prototype.open;
  const originalXHRSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function (method: string, url: string | URL, ...rest: unknown[]) {
    (this as XMLHttpRequest & { _qaid_method: string; _qaid_url: string })._qaid_method = method;
    (this as XMLHttpRequest & { _qaid_url: string })._qaid_url = typeof url === "string" ? url : url.toString();
    return originalXHROpen.apply(this, [method, url, ...rest] as Parameters<typeof originalXHROpen>);
  };

  XMLHttpRequest.prototype.send = function (body?: Document | XMLHttpRequestBodyInit | null) {
    const xhr = this as XMLHttpRequest & { _qaid_method: string; _qaid_url: string };

    xhr.addEventListener("load", function () {
      if (xhr.status >= 400) {
        addEntry(errors, {
          url: redactUrl(xhr._qaid_url),
          method: xhr._qaid_method.toUpperCase(),
          status: xhr.status,
          statusText: xhr.statusText,
          responseBody: redactResponseBody(xhr._qaid_url, xhr.status, truncateBody(xhr.responseText)),
          timestamp: Date.now(),
        });
      }
    });

    return originalXHRSend.apply(this, [body]);
  };

  return {
    errors,
    restore: () => {
      window.fetch = originalFetch;
      XMLHttpRequest.prototype.open = originalXHROpen;
      XMLHttpRequest.prototype.send = originalXHRSend;
    },
  };
}
