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
  /** The definition, when it was fetched ahead of time (wins over configUrl). */
  questionnaire?: unknown;
  apiKey?: string;
  /** A promise only when the loaded module says it accepts one. */
  metadata?: Record<string, unknown> | Promise<Record<string, unknown> | undefined>;
  onComplete?: (answers: Record<string, unknown>) => void;
  onClose?: () => void;
}

interface QuestsConstructor {
  new (config: LaunchedQuestConfig): QuestInstance;
  /** quests-embed 1.7+: `asyncMetadata` means `metadata` may be a promise. */
  supports?: { asyncMetadata?: boolean };
}

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

/** Quest definitions fetched ahead of a click, by definition URL. */
const definitions = new Map<string, unknown>();
const definitionLoads = new Map<string, Promise<void>>();

/**
 * @internal Test seam: swap the dynamic importer and clear the cache.
 * Pass `null` to restore the real dynamic `import()`. Not re-exported
 * from the package entry, so it isn't public API.
 */
export function _setQuestsImporter(fn: Importer | null): void {
  importer = fn ?? defaultImporter;
  modulePromise = null;
  cachedUrl = null;
  definitions.clear();
  definitionLoads.clear();
}

/** Where the quest service serves a quest's live definition. */
export function questDefinitionUrl(base: string, questId: string): string {
  return `${base.replace(/\/+$/, "")}/${encodeURIComponent(questId)}/definition`;
}

/**
 * Fetch a quest's definition before anyone clicks, so the quest opens from
 * memory. Never rejects: a failed fetch is forgotten, and the quests widget
 * then loads the definition itself, the way it did before this existed.
 */
export function prefetchQuestDefinition(url: string): Promise<void> {
  if (definitions.has(url)) return Promise.resolve();
  const pending = definitionLoads.get(url);
  if (pending) return pending;
  const load = fetch(url, { headers: { Accept: "application/json" } })
    .then((res) => (res.ok ? res.json() : null))
    .then((def: unknown) => {
      if (def) definitions.set(url, def);
    })
    .catch(() => {})
    .finally(() => {
      definitionLoads.delete(url);
    });
  definitionLoads.set(url, load);
  return load;
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
  /**
   * Feedback record id to correlate the response with (optional). A promise
   * lets the quest open before the feedback POST has answered.
   */
  feedbackId?: string | number | null | Promise<string | number | null>;
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
  const configUrl = questDefinitionUrl(base, opts.questId);
  const toMetadata = (id: string | number | null): Record<string, unknown> | undefined =>
    id != null ? { feedbackId: id } : undefined;

  let metadata: LaunchedQuestConfig["metadata"];
  const id = opts.feedbackId;
  if (id instanceof Promise) {
    // A quests build that takes a promise opens now and sends the id when it
    // lands. An older one (a pinned moduleUrl) would serialise the promise as
    // {} and lose the id, so for it we wait, as before.
    metadata = mod.QaidQuests.supports?.asyncMetadata
      ? id.then(toMetadata, () => undefined)
      : toMetadata(await id.catch(() => null));
  } else {
    metadata = toMetadata(id ?? null);
  }

  return new mod.QaidQuests({
    endpoint: `${base}/responses`,
    configUrl,
    // Only a definition already in hand. One still loading is left to the
    // widget, which shows its own loading state instead of nothing.
    questionnaire: definitions.get(configUrl),
    apiKey: opts.apiKey || undefined,
    metadata,
    onClose: opts.onClose,
  });
}
