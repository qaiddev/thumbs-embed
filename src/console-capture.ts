/**
 * Console capture utilities
 */

import type { ConsoleError } from "./types";

const MAX_MESSAGES = 20;

export interface ConsoleCapture {
  errors: ConsoleError[];
  restore: () => void;
}

type ConsoleLevel = "error" | "warn" | "log";

/**
 * Wrap console methods to capture messages
 */
export function captureConsoleErrors(
  onError?: (error: ConsoleError) => void
): ConsoleCapture {
  const errors: ConsoleError[] = [];
  const originalError = console.error;
  const originalWarn = console.warn;
  const originalLog = console.log;

  const capture = (level: ConsoleLevel, args: unknown[]) => {
    const error: ConsoleError = {
      message: args.map((arg) => String(arg)).join(" "),
      timestamp: Date.now(),
      level,
    };

    // Keep max messages
    if (errors.length >= MAX_MESSAGES) {
      errors.shift();
    }
    errors.push(error);

    // Call callback if provided
    if (onError) {
      onError(error);
    }
  };

  console.error = function (...args: unknown[]) {
    capture("error", args);
    originalError.apply(console, args);
  };

  console.warn = function (...args: unknown[]) {
    capture("warn", args);
    originalWarn.apply(console, args);
  };

  console.log = function (...args: unknown[]) {
    capture("log", args);
    originalLog.apply(console, args);
  };

  return {
    errors,
    restore: () => {
      console.error = originalError;
      console.warn = originalWarn;
      console.log = originalLog;
    },
  };
}

/**
 * Add an error to the captured errors array
 */
export function addError(errors: ConsoleError[], error: ConsoleError): void {
  if (errors.length >= MAX_MESSAGES) {
    errors.shift();
  }
  errors.push(error);
}

/**
 * Format console error for display
 */
export function formatError(error: ConsoleError): string {
  const date = new Date(error.timestamp);
  const time = date.toLocaleTimeString();
  const levelPrefix = error.level === "error" ? "ERR" : error.level === "warn" ? "WRN" : "LOG";
  return `[${time}] [${levelPrefix}] ${error.message}`;
}
