/**
 * Network capture utilities
 * Intercepts fetch() and XMLHttpRequest to capture 4xx/5xx errors
 */
import type { NetworkError } from "./types";
export interface NetworkCapture {
    errors: NetworkError[];
    restore: () => void;
}
/**
 * Truncate a body to max size. Callers must guard against null/undefined.
 */
export declare function truncateBody(body: unknown): string;
/**
 * Add an error to the buffer, evicting oldest if at capacity
 */
export declare function addEntry(errors: NetworkError[], entry: NetworkError): void;
/**
 * Intercept fetch() and XMLHttpRequest to capture network errors (4xx/5xx)
 */
export declare function captureNetworkErrors(): NetworkCapture;
