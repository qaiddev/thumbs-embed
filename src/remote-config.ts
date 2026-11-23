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
import type { FeedbackConfig, ThumbsThemeDocument } from "./types";

export const DEFAULT_REMOTE_TIMEOUT_MS = 3000;

type Kind = "string" | "number" | "boolean" | readonly string[];

const SCALARS: Record<string, Kind> = {
  buttonClass: "string",
  direction: ["horizontal", "vertical"],
  position: ["bottom-right", "bottom-left", "top-right", "top-left"],
  zIndex: "number",
  skipTargeting: "boolean",
  singleButton: "boolean",
  toolButtons: "boolean",
  feedbackMode: ["target", "annotate"],
  buttonSize: ["small", "medium", "large"],
  hideConfirmation: "boolean",
  modalWidth: "number",
  backdropOpacity: "number",
  fontFamily: "string",
  fontSize: "number",
  captureScreenshot: "boolean",
  annotate: "boolean",
  annotationColor: "string",
  captureVideo: "boolean",
  recordIcon: "string",
  incognito: "boolean",
  hideDismiss: "boolean",
  positiveIcon: "string",
  negativeIcon: "string",
  feedbackIcon: "string",
  targetIcon: "string",
  annotateIcon: "string",
  hideThumbs: "boolean",
  css: "string",
  screenshotMethod: ["dom", "permission"],
};

const OBJECTS: Record<string, Record<string, Kind> | "strings"> = {
  offset: { x: "number", y: "number" },
  colors: { positive: "string", negative: "string", marker: "string" },
  text: "strings",
  videoOptions: { maxDuration: "number", redaction: "boolean" },
  screenshotOptions: { quality: "number", maxWidth: "number", maxHeight: "number" },
  quests: { base: "string", up: "string", down: "string", video: "string" },
};

/** The keys a theme document may set. */
const THEME_KEYS = new Set([
  "positiveIcon",
  "negativeIcon",
  "targetIcon",
  "annotateIcon",
  "css",
  "buttonClass",
  "colors",
  "buttonSize",
  "text",
]);

const isRecord = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

function fits(value: unknown, kind: Kind): boolean {
  if (Array.isArray(kind)) return typeof value === "string" && kind.includes(value);
  if (kind === "number") return typeof value === "number" && Number.isFinite(value);
  return typeof value === kind;
}

function pickObject(raw: unknown, shape: Record<string, Kind> | "strings"): Record<string, unknown> | undefined {
  if (!isRecord(raw)) return undefined;
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(raw)) {
    if (shape === "strings" ? typeof v === "string" : k in shape && fits(v, shape[k])) out[k] = v;
  }
  return Object.keys(out).length > 0 ? out : undefined;
}

function sameOrigin(a: string, b: string): boolean {
  try {
    const base = typeof location !== "undefined" ? location.href : undefined;
    return new URL(a, base).origin === new URL(b, base).origin;
  } catch {
    return false;
  }
}

/**
 * Keep only the settings a fetched document may set, each of the right type.
 * `endpoint` decides which quest `base` is trusted.
 */
export function sanitizeRemoteConfig(raw: unknown, endpoint: string): Partial<FeedbackConfig> {
  if (!isRecord(raw)) return {};
  const out: Record<string, unknown> = {};
  for (const [key, kind] of Object.entries(SCALARS)) {
    if (fits(raw[key], kind)) out[key] = raw[key];
  }
  for (const [key, shape] of Object.entries(OBJECTS)) {
    const picked = pickObject(raw[key], shape);
    if (picked) out[key] = picked;
  }
  const palette = raw.annotationPalette;
  if (Array.isArray(palette) && palette.length > 0 && palette.every((c) => typeof c === "string" && c.trim())) {
    out.annotationPalette = palette;
  }
  const quests = out.quests as Record<string, string> | undefined;
  if (quests?.base && !sameOrigin(quests.base, endpoint)) {
    console.warn("[thumbs-embed] Ignoring a fetched quest base on another origin than the endpoint.");
    delete out.quests;
  }
  return out as Partial<FeedbackConfig>;
}

/** Keep only the look: what a theme document may set. */
export function sanitizeThemeDocument(raw: unknown, endpoint: string): Partial<FeedbackConfig> {
  const all = sanitizeRemoteConfig(raw, endpoint) as Record<string, unknown>;
  return Object.fromEntries(Object.entries(all).filter(([k]) => THEME_KEYS.has(k))) as ThumbsThemeDocument;
}

/**
 * Layer configs, lowest first. A later layer's defined value wins; nested
 * objects merge one level deep, so a host's `colors.positive` keeps a
 * theme's `colors.negative`. `undefined` never overwrites.
 */
export function mergeConfigs(...layers: Array<Partial<FeedbackConfig> | null | undefined>): Partial<FeedbackConfig> {
  const out: Record<string, unknown> = {};
  for (const layer of layers) {
    if (!layer) continue;
    for (const [key, value] of Object.entries(layer)) {
      if (value === undefined) continue;
      if (key in OBJECTS && isRecord(value)) {
        const prev = isRecord(out[key]) ? (out[key] as Record<string, unknown>) : {};
        const next = { ...prev };
        for (const [k, v] of Object.entries(value)) if (v !== undefined) next[k] = v;
        out[key] = next;
      } else {
        out[key] = value;
      }
    }
  }
  return out as Partial<FeedbackConfig>;
}

/** `GET {endpoint}/config?apiKey=…` */
export function remoteConfigUrl(endpoint: string, apiKey: string): string {
  return `${endpoint.replace(/\/+$/, "")}/config?apiKey=${encodeURIComponent(apiKey)}`;
}

async function fetchJson(url: string, timeoutMs: number, what: string): Promise<unknown> {
  const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
  let timer: ReturnType<typeof setTimeout> | undefined;
  // One timer both aborts the request and settles the wait, so a fetch that
  // ignores the signal still cannot hold the buttons back.
  const timedOut = new Promise<never>((_, reject) => {
    timer = setTimeout(() => {
      controller?.abort();
      reject(new Error(`timed out after ${timeoutMs} ms`));
    }, timeoutMs);
  });
  try {
    const res = await Promise.race([
      fetch(url, {
        headers: { Accept: "application/json" },
        credentials: "omit",
        signal: controller?.signal,
      }),
      timedOut,
    ]);
    if (!res.ok) {
      console.warn(`[thumbs-embed] ${what} fetch failed (${res.status}); drawing without it.`);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.warn(`[thumbs-embed] ${what} fetch error; drawing without it.`, err);
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/** True when the config asks for anything fetched. */
export function wantsRemote(config: FeedbackConfig): boolean {
  return config.remoteConfig === true || !!config.themeUrl;
}

/**
 * The host's config with the fetched layers under it. Never rejects.
 */
export async function resolveRemoteConfig(config: FeedbackConfig): Promise<FeedbackConfig> {
  const timeout = config.remoteTimeoutMs ?? DEFAULT_REMOTE_TIMEOUT_MS;
  let projectUrl: string | null = null;
  if (config.remoteConfig) {
    if (config.apiKey) projectUrl = remoteConfigUrl(config.endpoint, config.apiKey);
    else console.warn("[thumbs-embed] remoteConfig needs an apiKey; drawing without it.");
  }
  const [project, theme] = await Promise.all([
    projectUrl ? fetchJson(projectUrl, timeout, "Project config") : null,
    config.themeUrl ? fetchJson(config.themeUrl, timeout, "Theme") : null,
  ]);
  return mergeConfigs(
    project ? sanitizeRemoteConfig(project, config.endpoint) : null,
    theme ? sanitizeThemeDocument(theme, config.endpoint) : null,
    config,
  ) as FeedbackConfig;
}
