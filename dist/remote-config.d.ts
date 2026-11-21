/**
 * Settings fetched at start-up instead of pasted into the page.
 *
 * Two sources, both optional, fetched in parallel:
 *
 * - `remoteConfig: true` → `GET {endpoint}/config?apiKey=…`, the project's
 *   saved Customize settings.
 * - `themeUrl` → a `ThumbsThemeDocument`: the look only.
 *
 * Layers, lowest first: built-in defaults ← project config ← theme ← the
 * host's own config. So a snippet can still pin any one setting.
 *
 * Whatever comes back is filtered to known keys of the right type. Nothing
 * fetched can change where feedback goes (`endpoint`, `apiKey`), where the
 * embed mounts (`container`), or which code it loads (`quests.moduleUrl`).
 * A quest `base` is kept only on the endpoint's own origin. Icons and CSS go
 * through the same sanitizer and shadow root as pasted ones.
 *
 * Every failure (network, status, bad JSON, timeout) is a warning and the
 * embed draws with what the host gave it.
 */
import type { FeedbackConfig } from "./types";
export declare const DEFAULT_REMOTE_TIMEOUT_MS = 3000;
/**
 * Keep only the settings a fetched document may set, each of the right type.
 * `endpoint` decides which quest `base` is trusted.
 */
export declare function sanitizeRemoteConfig(raw: unknown, endpoint: string): Partial<FeedbackConfig>;
/** Keep only the look: what a theme document may set. */
export declare function sanitizeThemeDocument(raw: unknown, endpoint: string): Partial<FeedbackConfig>;
/**
 * Layer configs, lowest first. A later layer's defined value wins; nested
 * objects merge one level deep, so a host's `colors.positive` keeps a
 * theme's `colors.negative`. `undefined` never overwrites.
 */
export declare function mergeConfigs(...layers: Array<Partial<FeedbackConfig> | null | undefined>): Partial<FeedbackConfig>;
/** `GET {endpoint}/config?apiKey=…` */
export declare function remoteConfigUrl(endpoint: string, apiKey: string): string;
/** True when the config asks for anything fetched. */
export declare function wantsRemote(config: FeedbackConfig): boolean;
/**
 * The host's config with the fetched layers under it. Never rejects.
 */
export declare function resolveRemoteConfig(config: FeedbackConfig): Promise<FeedbackConfig>;
