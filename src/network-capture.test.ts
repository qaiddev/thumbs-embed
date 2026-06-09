import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  captureNetworkErrors,
  truncateBody,
  addEntry,
  type NetworkCapture,
} from "./network-capture";
import type { NetworkError } from "./types";

describe("captureNetworkErrors", () => {
  let capture: NetworkCapture;
  let originalFetch: typeof window.fetch;
  let mockFetch: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    // Save the real fetch, then replace with a mock BEFORE calling captureNetworkErrors
    originalFetch = window.fetch;
    mockFetch = vi.fn();
    window.fetch = mockFetch;

    // Now captureNetworkErrors will wrap our mock
    capture = captureNetworkErrors();
  });

  afterEach(() => {
    capture.restore();
    // Restore the real fetch
    window.fetch = originalFetch;
  });

  it("should capture fetch 4xx errors", async () => {
    const mockResponse = new Response("Not Found", {
      status: 404,
      statusText: "Not Found",
    });
    mockFetch.mockResolvedValue(mockResponse);

    await window.fetch("/api/missing", { method: "GET" });

    expect(capture.errors).toHaveLength(1);
    expect(capture.errors[0].url).toBe("/api/missing");
    expect(capture.errors[0].method).toBe("GET");
    expect(capture.errors[0].status).toBe(404);
    expect(capture.errors[0].statusText).toBe("Not Found");
    expect(capture.errors[0].timestamp).toBeGreaterThan(0);
  });

  it("should capture fetch 5xx errors", async () => {
    const mockResponse = new Response("Internal Server Error", {
      status: 500,
      statusText: "Internal Server Error",
    });
    mockFetch.mockResolvedValue(mockResponse);

    await window.fetch("/api/broken", { method: "POST", body: '{"key":"val"}' });

    expect(capture.errors).toHaveLength(1);
    expect(capture.errors[0].status).toBe(500);
    expect(capture.errors[0].method).toBe("POST");
    expect(capture.errors[0].requestBody).toBe('{"key":"val"}');
  });

  it("should not capture successful responses", async () => {
    const mockResponse = new Response("OK", { status: 200, statusText: "OK" });
    mockFetch.mockResolvedValue(mockResponse);

    await window.fetch("/api/ok");

    expect(capture.errors).toHaveLength(0);
  });

  it("should not capture 3xx responses", async () => {
    const mockResponse = new Response("", { status: 301, statusText: "Moved" });
    mockFetch.mockResolvedValue(mockResponse);

    await window.fetch("/api/redirect");

    expect(capture.errors).toHaveLength(0);
  });

  it("should limit buffer to 20 entries", async () => {
    const mockResponse = new Response("Error", { status: 500, statusText: "Error" });
    mockFetch.mockResolvedValue(mockResponse);

    for (let i = 0; i < 25; i++) {
      await window.fetch(`/api/error/${i}`);
    }

    expect(capture.errors).toHaveLength(20);
    // First entry should be #5 (0-4 were evicted)
    expect(capture.errors[0].url).toBe("/api/error/5");
    expect(capture.errors[19].url).toBe("/api/error/24");
  });

  it("should truncate large request bodies to 4KB", async () => {
    const mockResponse = new Response("Error", { status: 400, statusText: "Bad Request" });
    mockFetch.mockResolvedValue(mockResponse);

    const largeBody = "x".repeat(8000);
    await window.fetch("/api/large", { method: "POST", body: largeBody });

    expect(capture.errors).toHaveLength(1);
    expect(capture.errors[0].requestBody!.length).toBeLessThan(8000);
    expect(capture.errors[0].requestBody).toContain("…[truncated]");
  });

  it("should capture response body", async () => {
    const mockResponse = new Response('{"error":"bad request"}', {
      status: 400,
      statusText: "Bad Request",
    });
    mockFetch.mockResolvedValue(mockResponse);

    await window.fetch("/api/bad");

    expect(capture.errors).toHaveLength(1);
    expect(capture.errors[0].responseBody).toBe('{"error":"bad request"}');
  });

  it("should restore original fetch on restore()", () => {
    capture.restore();
    expect(window.fetch).toBe(mockFetch); // Restored to the mock we set before capture
  });

  it("should handle XHR prototype patching", () => {
    // Save references to the patched methods (capture was already started in beforeEach)
    const patchedOpen = XMLHttpRequest.prototype.open;
    const patchedSend = XMLHttpRequest.prototype.send;

    // The patched methods should NOT be the same as the originals that existed
    // before captureNetworkErrors() was called. We can verify this by creating
    // a fresh capture and checking the methods changed.
    // Since capture is already active, the current methods should be wrappers.
    // We can verify they are functions and that restore() changes them.
    expect(typeof patchedOpen).toBe("function");
    expect(typeof patchedSend).toBe("function");

    capture.restore();

    // After restore, the prototype methods should be different from the patched versions
    // (the originals from before captureNetworkErrors was called are restored)
    expect(XMLHttpRequest.prototype.open).not.toBe(patchedOpen);
    expect(XMLHttpRequest.prototype.send).not.toBe(patchedSend);

    // Re-create capture for afterEach cleanup
    capture = captureNetworkErrors();
  });

  it("should capture XHR 4xx errors", async () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/xhr-missing");

    // Override the internal send to simulate a response
    const originalSend = XMLHttpRequest.prototype.send;

    // We need to simulate the XHR completing with an error status
    // The patched send adds a load listener, so we fire it manually
    xhr.send();

    // Manually set status and trigger load event
    Object.defineProperty(xhr, "status", { value: 404, writable: true, configurable: true });
    Object.defineProperty(xhr, "statusText", { value: "Not Found", writable: true, configurable: true });
    Object.defineProperty(xhr, "responseText", { value: "Not Found", writable: true, configurable: true });
    xhr.dispatchEvent(new Event("load"));

    expect(capture.errors).toHaveLength(1);
    expect(capture.errors[0].url).toBe("/api/xhr-missing");
    expect(capture.errors[0].method).toBe("GET");
    expect(capture.errors[0].status).toBe(404);
    expect(capture.errors[0].statusText).toBe("Not Found");
    expect(capture.errors[0].responseBody).toBe("Not Found");
  });

  it("should capture XHR 5xx errors with request body", async () => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/xhr-broken");
    xhr.send('{"data":"test"}');

    Object.defineProperty(xhr, "status", { value: 500, writable: true, configurable: true });
    Object.defineProperty(xhr, "statusText", { value: "Internal Server Error", writable: true, configurable: true });
    Object.defineProperty(xhr, "responseText", { value: "Server Error", writable: true, configurable: true });
    xhr.dispatchEvent(new Event("load"));

    expect(capture.errors).toHaveLength(1);
    expect(capture.errors[0].method).toBe("POST");
    expect(capture.errors[0].status).toBe(500);
    expect(capture.errors[0].requestBody).toBe('{"data":"test"}');
  });

  it("should not capture successful XHR responses", async () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/xhr-ok");
    xhr.send();

    Object.defineProperty(xhr, "status", { value: 200, writable: true, configurable: true });
    Object.defineProperty(xhr, "statusText", { value: "OK", writable: true, configurable: true });
    xhr.dispatchEvent(new Event("load"));

    expect(capture.errors).toHaveLength(0);
  });

  it("should handle URL object in XHR open", async () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", new URL("http://example.com/api/test"));
    xhr.send();

    Object.defineProperty(xhr, "status", { value: 400, writable: true, configurable: true });
    Object.defineProperty(xhr, "statusText", { value: "Bad Request", writable: true, configurable: true });
    Object.defineProperty(xhr, "responseText", { value: "", writable: true, configurable: true });
    xhr.dispatchEvent(new Event("load"));

    expect(capture.errors).toHaveLength(1);
    expect(capture.errors[0].url).toBe("http://example.com/api/test");
  });

  it("should handle fetch with URL object input", async () => {
    const mockResponse = new Response("Not Found", {
      status: 404,
      statusText: "Not Found",
    });
    mockFetch.mockResolvedValue(mockResponse);

    await window.fetch(new URL("http://example.com/api/url-obj"));

    expect(capture.errors).toHaveLength(1);
    expect(capture.errors[0].url).toBe("http://example.com/api/url-obj");
  });

  it("should handle fetch with Request object input", async () => {
    const mockResponse = new Response("Not Found", {
      status: 404,
      statusText: "Not Found",
    });
    mockFetch.mockResolvedValue(mockResponse);

    const request = new Request("http://example.com/api/request-obj", { method: "PUT" });
    await window.fetch(request);

    expect(capture.errors).toHaveLength(1);
    expect(capture.errors[0].url).toBe("http://example.com/api/request-obj");
    expect(capture.errors[0].method).toBe("PUT");
  });

  it("truncateBody returns string unchanged when under limit", () => {
    expect(truncateBody("hello")).toBe("hello");
  });

  it("truncateBody stringifies non-string values", () => {
    expect(truncateBody({ a: 1 })).toBe('{"a":1}');
  });

  it("truncateBody truncates oversized strings", () => {
    const long = "x".repeat(5000);
    const result = truncateBody(long);
    expect(result.length).toBeLessThan(5000);
    expect(result.endsWith("…[truncated]")).toBe(true);
  });

  it("addEntry pushes when below capacity", () => {
    const errors: NetworkError[] = [];
    addEntry(errors, {
      url: "/a",
      method: "GET",
      status: 500,
      statusText: "x",
      timestamp: 0,
    });
    expect(errors).toHaveLength(1);
  });

  it("addEntry evicts oldest at capacity", () => {
    const errors: NetworkError[] = [];
    for (let i = 0; i < 25; i++) {
      addEntry(errors, {
        url: `/${i}`,
        method: "GET",
        status: 500,
        statusText: "x",
        timestamp: i,
      });
    }
    expect(errors).toHaveLength(20);
    expect(errors[0].url).toBe("/5");
  });

  it("should handle safeReadBody failure gracefully", async () => {
    // Create a response whose clone().text() throws
    const mockResponse = new Response("Error", {
      status: 500,
      statusText: "Error",
    });
    // Override clone to return a response that fails to read
    vi.spyOn(mockResponse, "clone").mockReturnValue({
      text: () => Promise.reject(new Error("Read failed")),
    } as unknown as Response);
    mockFetch.mockResolvedValue(mockResponse);

    await window.fetch("/api/broken-response");

    expect(capture.errors).toHaveLength(1);
    expect(capture.errors[0].responseBody).toBeUndefined();
  });
});
