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
export declare const DEFAULT_QUESTS_MODULE_URL = "https://unpkg.com/@qaiddev/quests-embed@1/dist/qaid-quests.js";
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
    supports?: {
        asyncMetadata?: boolean;
    };
}
/** Shape of the quests module's default/entry exports. */
export interface QuestsModule {
    QaidQuests: QuestsConstructor;
}
type Importer = (url: string) => Promise<unknown>;
/**
 * @internal Test seam: swap the dynamic importer and clear the cache.
 * Pass `null` to restore the real dynamic `import()`. Not re-exported
 * from the package entry, so it isn't public API.
 */
export declare function _setQuestsImporter(fn: Importer | null): void;
/** Where the quest service serves a quest's live definition. */
export declare function questDefinitionUrl(base: string, questId: string): string;
/**
 * Fetch a quest's definition before anyone clicks, so the quest opens from
 * memory. Never rejects: a failed fetch is forgotten, and the quests widget
 * then loads the definition itself, the way it did before this existed.
 */
export declare function prefetchQuestDefinition(url: string): Promise<void>;
/**
 * Import the quests module, caching the promise per URL. A failed load
 * clears the cache so a later trigger can retry (e.g. after a transient
 * network error) rather than being stuck with a rejected promise.
 */
export declare function loadQuestsModule(moduleUrl: string): Promise<QuestsModule>;
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
export declare function launchQuest(opts: LaunchQuestOptions): Promise<QuestInstance>;
export {};
