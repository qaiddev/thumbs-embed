/**
 * Redaction for captured debugging context (2026-11 audit).
 *
 * The embed attaches console messages and failed network calls to a report so
 * a team can see what broke. That context comes from the partner's page and
 * goes to qaid's server, so it must not carry the visitor's secrets. The aim is
 * to keep what helps debugging (which call failed, with what status, and what
 * the app logged) and drop what nobody needs to see:
 *
 *  - Request bodies are never captured (a 401 on a login form would carry the
 *    password).
 *  - A response body is replaced by REDACTED when the status is 401 or 403, or
 *    the URL looks like sign-in, auth, token, password, session or OAuth.
 *  - URL query (and fragment) parameters named like a credential have their
 *    values replaced, and any user:password@ is removed.
 *  - Console messages and kept response bodies have obvious secrets replaced:
 *    Bearer/Basic credentials, JWTs, password=… style pairs, long hex or
 *    base64 keys, and card-number-like digit runs. Each is then capped.
 */
export declare const REDACTED = "[redacted]";
/** Longest console message kept, in characters. */
export declare const MAX_CONSOLE_MESSAGE = 1000;
/** Replace obvious secrets in free text. */
export declare function redactText(text: string): string;
/** Cut `text` to `max` characters, marking the cut. */
export declare function capLength(text: string, max: number): string;
/** A console message, safe to send: secrets replaced, then capped. */
export declare function redactConsoleMessage(text: string): string;
/**
 * A URL with credential-like query and fragment parameters replaced and any
 * user:password@ removed. A relative URL stays relative.
 */
export declare function redactUrl(raw: string): string;
/** True when a URL looks like sign-in, auth or credentials. */
export declare function isSensitiveUrl(raw: string): boolean;
/**
 * A failed response's body, safe to send: REDACTED for auth failures and
 * sign-in-ish URLs, otherwise with obvious secrets replaced.
 */
export declare function redactResponseBody(url: string, status: number, body: string | undefined): string | undefined;
