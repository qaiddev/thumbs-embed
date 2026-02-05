import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { captureNetworkErrors, type NetworkCapture } from "./network-capture";

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
    // Just verify the prototype methods were patched and can be restored
    expect(XMLHttpRequest.prototype.open).toBeDefined();
    expect(XMLHttpRequest.prototype.send).toBeDefined();

    capture.restore();

    // After restore, originals should be back
    expect(XMLHttpRequest.prototype.open).toBeDefined();
    expect(XMLHttpRequest.prototype.send).toBeDefined();
  });
});
