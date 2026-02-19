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
 * Intercept fetch() and XMLHttpRequest to capture network errors (4xx/5xx)
 */
export declare function captureNetworkErrors(): NetworkCapture;
