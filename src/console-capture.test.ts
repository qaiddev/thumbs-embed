import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  captureConsoleErrors,
  addError,
  formatError,
  type ConsoleCapture,
} from "./console-capture";
import type { ConsoleError } from "./types";

describe("console-capture", () => {
  let originalConsoleError: typeof console.error;

  beforeEach(() => {
    originalConsoleError = console.error;
  });

  afterEach(() => {
    console.error = originalConsoleError;
  });

  describe("captureConsoleErrors", () => {
    it("should capture console.error calls", () => {
      const capture = captureConsoleErrors();

      console.error("Test error");

      expect(capture.errors).toHaveLength(1);
      expect(capture.errors[0].message).toBe("Test error");
      expect(capture.errors[0].timestamp).toBeGreaterThan(0);

      capture.restore();
    });

    it("should join multiple arguments with space", () => {
      const capture = captureConsoleErrors();

      console.error("Error:", 123, { key: "value" });

      expect(capture.errors[0].message).toBe(
        "Error: 123 [object Object]"
      );

      capture.restore();
    });

    it("should call original console.error", () => {
      const mockError = vi.fn();
      console.error = mockError;

      const capture = captureConsoleErrors();

      console.error("Test");

      expect(mockError).toHaveBeenCalledWith("Test");

      capture.restore();
    });

    it("should call onError callback when provided", () => {
      const onError = vi.fn();
      const capture = captureConsoleErrors(onError);

      console.error("Test error");

      expect(onError).toHaveBeenCalledTimes(1);
      expect(onError).toHaveBeenCalledWith(
        expect.objectContaining({
          message: "Test error",
        })
      );

      capture.restore();
    });

    it("should limit errors to max 20", () => {
      const capture = captureConsoleErrors();

      for (let i = 0; i < 25; i++) {
        console.error(`Error ${i}`);
      }

      expect(capture.errors).toHaveLength(20);
      // First 5 errors should have been removed
      expect(capture.errors[0].message).toBe("Error 5");
      expect(capture.errors[19].message).toBe("Error 24");

      capture.restore();
    });

    it("should restore original console.error", () => {
      const capture = captureConsoleErrors();
      const wrappedError = console.error;

      capture.restore();

      expect(console.error).not.toBe(wrappedError);
      expect(console.error).toBe(originalConsoleError);
    });

    it("should capture console.warn calls", () => {
      const originalWarn = console.warn;
      const capture = captureConsoleErrors();

      console.warn("Test warning");

      expect(capture.errors).toHaveLength(1);
      expect(capture.errors[0].message).toBe("Test warning");
      expect(capture.errors[0].level).toBe("warn");

      capture.restore();
      expect(console.warn).toBe(originalWarn);
    });

    it("should capture console.log calls", () => {
      const originalLog = console.log;
      const capture = captureConsoleErrors();

      console.log("Test log message");

      expect(capture.errors).toHaveLength(1);
      expect(capture.errors[0].message).toBe("Test log message");
      expect(capture.errors[0].level).toBe("log");

      capture.restore();
      expect(console.log).toBe(originalLog);
    });

    it("should capture all three levels in order", () => {
      const capture = captureConsoleErrors();

      console.error("error msg");
      console.warn("warn msg");
      console.log("log msg");

      expect(capture.errors).toHaveLength(3);
      expect(capture.errors[0].level).toBe("error");
      expect(capture.errors[1].level).toBe("warn");
      expect(capture.errors[2].level).toBe("log");

      capture.restore();
    });
  });

  describe("addError", () => {
    it("should add error to array", () => {
      const errors: ConsoleError[] = [];
      const error: ConsoleError = {
        message: "Test",
        timestamp: Date.now(),
      };

      addError(errors, error);

      expect(errors).toHaveLength(1);
      expect(errors[0]).toBe(error);
    });

    it("should remove oldest error when at max capacity", () => {
      const errors: ConsoleError[] = [];

      // Fill with 20 errors
      for (let i = 0; i < 20; i++) {
        addError(errors, { message: `Error ${i}`, timestamp: i });
      }

      // Add one more
      addError(errors, { message: "New error", timestamp: 20 });

      expect(errors).toHaveLength(20);
      expect(errors[0].message).toBe("Error 1");
      expect(errors[19].message).toBe("New error");
    });
  });

  describe("formatError", () => {
    it("should format error with time and message", () => {
      const timestamp = new Date("2024-01-15T14:30:00").getTime();
      const error: ConsoleError = {
        message: "Something went wrong",
        timestamp,
      };

      const result = formatError(error);

      // Check that it contains the time and message
      expect(result).toContain("Something went wrong");
      expect(result).toMatch(/\[\d+:\d+:\d+.*\]/);
    });
  });
});
