/**
 * Lazy loader + launcher for `@qaiddev/quests-embed`.
 *
 * `thumbs-embed` links a button to a quest but owns no questionnaire code
 * and takes no build-time dependency on the quests package. Instead the
 * quests widget is imported from a CDN the first time a quest is triggered,
 * so the shipped bundle stays zero-dependency and small.
 *
 * Only the tiny slice of the quests public API that we actually use is
 * modelled here structurally, so a version bump of the quests package that
 * keeps this surface stable needs no change in thumbs-embed.
 */

/** Default ES-module URL, pinned to a compatible major on unpkg. */
export const DEFAULT_QUESTS_MODULE_URL =
  "https://unpkg.com/@qaiddev/quests-embed@1/dist/qaid-quests.js";

/** The bit of a QaidQuests instance we hold onto. */
export interface QuestInstance {
  destroy(): void;
}

/** The bit of QaidQuests config we pass. Mirrors QuestsConfig loosely. */
export interface LaunchedQuestConfig {
  endpoint: string;
  configUrl: string;
  apiKey?: string;
  metadata?: Record<string, unknown>;
  onComplete?: (answers: Record<string, unknown>) => void;
  onClose?: () => void;
}

type QuestsConstructor = new (config: LaunchedQuestConfig) => QuestInstance;

/** Shape of the quests module's default/entry exports. */
export interface QuestsModule {
  QaidQuests: QuestsConstructor;
}

type Importer = (url: string) => Promise<unknown>;

const defaultImporter: Importer = (url) =>
  // The URL is a runtime value, not a static specifier — keep Vite from
  // trying to analyze/bundle it.
  import(/* @vite-ignore */ url);

let importer: Importer = defaultImporter;
let modulePromise: Promise<QuestsModule> | null = null;
let cachedUrl: string | null = null;

/**
 * @internal Test seam: swap the dynamic importer and clear the cache.
 * Pass `null` to restore the real dynamic `import()`. Not re-exported
 * from the package entry, so it isn't public API.
 */
export function _setQuestsImporter(fn: Importer | null): void {
  importer = fn ?? defaultImporter;
  modulePromise = null;
  cachedUrl = null;
}

/**
 * Import the quests module, caching the promise per URL. A failed load
 * clears the cache so a later trigger can retry (e.g. after a transient
 * network error) rather than being stuck with a rejected promise.
 */
export function loadQuestsModule(moduleUrl: string): Promise<QuestsModule> {
  if (modulePromise && cachedUrl === moduleUrl) return modulePromise;
  cachedUrl = moduleUrl;
  modulePromise = Promise.resolve(importer(moduleUrl))
    .then((mod) => {
      const m = mod as Partial<QuestsModule>;
      if (!m || typeof m.QaidQuests !== "function") {
        throw new Error("quests module has no QaidQuests export");
      }
      return m as QuestsModule;
    })
    .catch((err) => {
      modulePromise = null;
      cachedUrl = null;
      throw err;
    });
  return modulePromise;
}

export interface LaunchQuestOptions {
  /** Quest id to launch (the `[id]` in `{base}/{id}/definition`). */
  questId: string;
  /** Quest-service base URL, e.g. "https://qaid.dev/api/quests". */
  base: string;
  /** API key for the quest service (optional). */
  apiKey?: string;
  /** ES-module URL to load the quests widget from. */
  moduleUrl: string;
  /** Feedback record id to correlate the response with (optional). */
  feedbackId?: string | number | null;
  /** Called when the quest embed is torn down. */
  onClose?: () => void;
}

/**
 * Load the quests widget (if not already loaded) and open the given quest
 * as its own centered modal. Rejects if the module can't be loaded — the
 * caller should fall back to its normal UI.
 */
export async function launchQuest(opts: LaunchQuestOptions): Promise<QuestInstance> {
  const mod = await loadQuestsModule(opts.moduleUrl);
  const base = opts.base.replace(/\/+$/, "");
  const metadata =
    opts.feedbackId != null ? { feedbackId: opts.feedbackId } : undefined;
  return new mod.QaidQuests({
    endpoint: `${base}/responses`,
    configUrl: `${base}/${encodeURIComponent(opts.questId)}/definition`,
    apiKey: opts.apiKey || undefined,
    metadata,
    onClose: opts.onClose,
  });
}
