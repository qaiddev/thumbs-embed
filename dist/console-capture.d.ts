/**
 * Console capture utilities
 */
import type { ConsoleError } from "./types";
export interface ConsoleCapture {
    errors: ConsoleError[];
    restore: () => void;
}
/**
 * Wrap console methods to capture messages
 */
export declare function captureConsoleErrors(onError?: (error: ConsoleError) => void): ConsoleCapture;
/**
 * Add an error to the captured errors array
 */
export declare function addError(errors: ConsoleError[], error: ConsoleError): void;
/**
 * Format console error for display
 */
export declare function formatError(error: ConsoleError): string;
