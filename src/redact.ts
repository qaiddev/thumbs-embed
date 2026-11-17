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

export const REDACTED = "[redacted]";

/** Longest console message kept, in characters. */
export const MAX_CONSOLE_MESSAGE = 1000;

/** URL path or host that suggests sign-in or credentials. */
const SENSITIVE_URL = /login|log-in|signin|sign-in|signup|sign-up|auth|token|password|passwd|session|oauth|2fa|mfa|credential/i;

/** Query parameter names whose values are credentials. */
const SENSITIVE_PARAM = /token|key|secret|pass(word|wd)?|pwd|code|sess|auth|sig|otp|jwt|credential|ticket|nonce|state/i;

/** Key names in `key=value` / `"key": "value"` text whose values are secrets. */
const SECRET_KEY =
  "(?:password|passwd|pwd|pass|secret|token|access_token|refresh_token|id_token|api[_-]?key|apikey|client_secret|private[_-]?key|session(?:id)?|auth(?:orization)?|cookie|set-cookie|otp|pin|cvv|cvc|ssn)";

const TEXT_RULES: Array<[RegExp, string | ((m: string, ...g: string[]) => string)]> = [
  // Authorization header values.
  [/\b(Bearer|Basic|Token|Digest)\s+[A-Za-z0-9._~+/=-]{8,}/gi, (_m, scheme: string) => `${scheme} ${REDACTED}`],
  // JWTs (header.payload[.signature]).
  [/\beyJ[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}(?:\.[A-Za-z0-9_-]*)?/g, REDACTED],
  // "password": "x"  /  'token': 'x'  (JSON and JS object text).
  [
    new RegExp(`(["']?${SECRET_KEY}["']?\\s*:\\s*)(["'])(?:\\\\.|(?!\\2).)*\\2`, "gi"),
    (_m, head: string, q: string) => `${head}${q}${REDACTED}${q}`,
  ],
  // password=x  /  token: x  (query strings, form bodies, log lines).
  [
    // The value is not a quote (the rule above) and not an auth scheme
    // (the Bearer rule already kept the scheme and cut the credential).
    new RegExp(`(\\b${SECRET_KEY}\\s*[=:]\\s*)(?!["'\\s]|(?:Bearer|Basic|Token|Digest)\\s|\\[redacted\\])[^\\s&;,"'}]+`, "gi"),
    (_m, head: string) => `${head}${REDACTED}`,
  ],
  // Card-number-like runs: 13 to 19 digits, optionally grouped by spaces or
  // dashes, that pass the Luhn check (so a Date.now() stays readable).
  [/\b\d(?:[ -]?\d){12,18}\b/g, (m) => (luhn(m.replace(/\D/g, "")) ? REDACTED : m)],
  // Long hex strings (API keys, hashes, session ids).
  [/\b[A-Fa-f0-9]{32,}\b/g, REDACTED],
  // Long base64 / base64url / prefixed keys (sk_live_…, ghp_…): 32+
  // characters mixing upper case, lower case and digits. `/` is left out so
  // a script path in a stack trace stays readable.
  [/[A-Za-z0-9_+-]{32,}={0,2}/g, (m) => (/\d/.test(m) && /[a-z]/.test(m) && /[A-Z]/.test(m) ? REDACTED : m)],
];

function luhn(digits: string): boolean {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let d = Number(digits[digits.length - 1 - i]);
    if (i % 2 === 1) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
  }
  return sum % 10 === 0;
}

/** Replace obvious secrets in free text. */
export function redactText(text: string): string {
  let out = text;
  for (const [re, replacement] of TEXT_RULES) {
    out = out.replace(re, replacement as never);
  }
  return out;
}

/** Cut `text` to `max` characters, marking the cut. */
export function capLength(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max)}…[truncated]` : text;
}

/** A console message, safe to send: secrets replaced, then capped. */
export function redactConsoleMessage(text: string): string {
  // Cap a little above the limit first so a huge log line is cheap to scan.
  return capLength(redactText(text.slice(0, MAX_CONSOLE_MESSAGE * 2)), MAX_CONSOLE_MESSAGE);
}

function redactParams(params: URLSearchParams): boolean {
  let changed = false;
  for (const name of Array.from(new Set(params.keys()))) {
    if (SENSITIVE_PARAM.test(name)) {
      params.set(name, REDACTED);
      changed = true;
    }
  }
  return changed;
}

/**
 * A URL with credential-like query and fragment parameters replaced and any
 * user:password@ removed. A relative URL stays relative.
 */
export function redactUrl(raw: string): string {
  let url: URL;
  const base = "https://qaid.invalid";
  try {
    url = new URL(raw, base);
  } catch {
    return redactText(raw);
  }
  url.username = "";
  url.password = "";
  if (redactParams(url.searchParams)) {
    // URLSearchParams encodes the brackets; keep the marker readable.
    url.search = url.search.replace(/%5Bredacted%5D/g, REDACTED);
  }
  if (url.hash.includes("=")) {
    const hash = new URLSearchParams(url.hash.slice(1));
    if (redactParams(hash)) url.hash = hash.toString().replace(/%5Bredacted%5D/g, REDACTED);
  }
  const out = url.href;
  const relative = !/^[a-z][a-z0-9+.-]*:/i.test(raw) && !raw.startsWith("//");
  return relative && out.startsWith(base) ? out.slice(base.length) : out;
}

/** True when a URL looks like sign-in, auth or credentials. */
export function isSensitiveUrl(raw: string): boolean {
  try {
    const url = new URL(raw, "https://qaid.invalid");
    return SENSITIVE_URL.test(url.hostname) || SENSITIVE_URL.test(url.pathname);
  } catch {
    return SENSITIVE_URL.test(raw);
  }
}

/**
 * A failed response's body, safe to send: REDACTED for auth failures and
 * sign-in-ish URLs, otherwise with obvious secrets replaced.
 */
export function redactResponseBody(
  url: string,
  status: number,
  body: string | undefined,
): string | undefined {
  if (body === undefined) return undefined;
  if (status === 401 || status === 403 || isSensitiveUrl(url)) return REDACTED;
  return redactText(body);
}
