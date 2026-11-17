import { describe, expect, it } from "vitest";
import {
  capLength,
  isSensitiveUrl,
  redactConsoleMessage,
  redactResponseBody,
  redactText,
  redactUrl,
  REDACTED,
} from "./redact";

describe("redactText", () => {
  it.each([
    ["Bearer abcdefgh12345678", "Bearer [redacted]"],
    ["authorization: Basic dXNlcjpwYXNzd29yZA==", "authorization: Basic [redacted]"],
    ["jwt eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjMifQ.c2ln end", "jwt [redacted] end"],
    ["password=hunter2&next=1", "password=[redacted]&next=1"],
    ["api_key: abc123", "api_key: [redacted]"],
    ['{"password":"hun\\"ter2","user":"a"}', '{"password":"[redacted]","user":"a"}'],
    ["{ token: 'abc', ok: 1 }", "{ token: '[redacted]', ok: 1 }"],
    ["card 4111 1111 1111 1111 declined", "card [redacted] declined"],
    ["card 4111-1111-1111-1111", "card [redacted]"],
    ["key 0123456789abcdef0123456789abcdef!", "key [redacted]!"],
    [["sk", "live", "FAKEfakeFAKEfakeFAKEfakeFAKEfake00"].join("_"), "[redacted]"],
  ])("%s", (input, out) => {
    expect(redactText(input)).toBe(out);
  });

  it.each([
    "TypeError: Cannot read properties of undefined (reading 'map')",
    "at render (https://shop.example/_next/static/chunks/pages/checkout-4a8b9c1d.js:12:30)",
    "loaded at 1731859200000",
    "order 12345 shipped",
    "a-very-long-lowercase-component-name-without-secrets",
  ])("leaves %s alone", (text) => {
    expect(redactText(text)).toBe(text);
  });
});

describe("redactConsoleMessage / capLength", () => {
  it("caps after redacting", () => {
    expect(redactConsoleMessage("x".repeat(3000))).toBe(`${"x".repeat(1000)}…[truncated]`);
    expect(capLength("abc", 5)).toBe("abc");
  });
});

describe("redactUrl", () => {
  it("replaces credential-like parameters, keeps the rest", () => {
    expect(redactUrl("https://x.example/p?id=1&token=t&Signature=s&client_secret=c")).toBe(
      "https://x.example/p?id=1&token=[redacted]&Signature=[redacted]&client_secret=[redacted]",
    );
  });

  it("covers password, key, session, auth and code names", () => {
    const out = redactUrl("/cb?password=a&apikey=b&PHPSESSID=c&auth=d&code=e&page=2");
    expect(out).toBe("/cb?password=[redacted]&apikey=[redacted]&PHPSESSID=[redacted]&auth=[redacted]&code=[redacted]&page=2");
  });

  it("redacts OAuth fragments and user:password@", () => {
    expect(redactUrl("https://u:p@x.example/cb#access_token=abc&state=1&tab=2")).toBe(
      "https://x.example/cb#access_token=[redacted]&state=[redacted]&tab=2",
    );
  });

  it("leaves a URL with nothing to redact as it was", () => {
    expect(redactUrl("/api/items?page=2#top")).toBe("/api/items?page=2#top");
    expect(redactUrl("https://x.example/a")).toBe("https://x.example/a");
    expect(redactUrl("//cdn.example/a?x=1")).toBe("https://cdn.example/a?x=1");
  });

  it("falls back to text redaction when the URL does not parse", () => {
    expect(redactUrl("http://[bad?token=abc")).toBe("http://[bad?token=[redacted]");
  });
});

describe("isSensitiveUrl / redactResponseBody", () => {
  it.each(["/login", "/api/auth/callback", "https://id.example/oauth/token", "/users/sign-in", "/session", "https://auth.example/x"])(
    "%s is sensitive",
    (url) => expect(isSensitiveUrl(url)).toBe(true),
  );

  it("an ordinary API URL is not", () => {
    expect(isSensitiveUrl("/api/products/7?q=shoes")).toBe(false);
    expect(isSensitiveUrl("http://[bad")).toBe(false);
    expect(isSensitiveUrl("http://[bad/login")).toBe(true);
  });

  it("drops 401, 403 and sensitive-URL bodies; redacts others", () => {
    expect(redactResponseBody("/api/x", 401, "a")).toBe(REDACTED);
    expect(redactResponseBody("/api/x", 403, "a")).toBe(REDACTED);
    expect(redactResponseBody("/login", 500, "a")).toBe(REDACTED);
    expect(redactResponseBody("/api/x", 500, "token=abc")).toBe("token=[redacted]");
    expect(redactResponseBody("/api/x", 500, undefined)).toBeUndefined();
  });
});
