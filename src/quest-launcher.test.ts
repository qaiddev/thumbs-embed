import { afterEach, describe, expect, it, vi } from "vitest";
import {
  DEFAULT_QUESTS_MODULE_URL,
  launchQuest,
  loadQuestsModule,
  prefetchQuestDefinition,
  questDefinitionUrl,
  _setQuestsImporter,
  type LaunchedQuestConfig,
} from "./quest-launcher";

class FakeQuest {
  static instances: FakeQuest[] = [];
  config: LaunchedQuestConfig;
  destroyed = false;
  constructor(config: LaunchedQuestConfig) {
    this.config = config;
    FakeQuest.instances.push(this);
  }
  destroy(): void {
    this.destroyed = true;
  }
}
const fakeModule = { QaidQuests: FakeQuest };

afterEach(() => {
  _setQuestsImporter(null); // restore real import() + clear the module cache
  FakeQuest.instances = [];
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("loadQuestsModule", () => {
  it("imports once and caches the module per URL", async () => {
    const importer = vi.fn(async () => fakeModule);
    _setQuestsImporter(importer);

    const a = await loadQuestsModule("mod.js");
    const b = await loadQuestsModule("mod.js");

    expect(a).toBe(fakeModule);
    expect(b).toBe(fakeModule);
    expect(importer).toHaveBeenCalledTimes(1);
  });

  it("re-imports when the module URL changes", async () => {
    const importer = vi.fn(async () => fakeModule);
    _setQuestsImporter(importer);

    await loadQuestsModule("a.js");
    await loadQuestsModule("b.js");

    expect(importer).toHaveBeenCalledTimes(2);
  });

  it("rejects when the module has no QaidQuests export", async () => {
    _setQuestsImporter(async () => ({}));
    await expect(loadQuestsModule("mod.js")).rejects.toThrow(/QaidQuests/);
  });

  it("clears the cache on failure so a later call retries", async () => {
    const importer = vi
      .fn()
      .mockRejectedValueOnce(new Error("network"))
      .mockResolvedValueOnce(fakeModule);
    _setQuestsImporter(importer);

    await expect(loadQuestsModule("mod.js")).rejects.toThrow("network");
    const mod = await loadQuestsModule("mod.js");

    expect(mod).toBe(fakeModule);
    expect(importer).toHaveBeenCalledTimes(2);
  });

  it("uses the built-in dynamic import() when no importer is injected", async () => {
    _setQuestsImporter(null); // fall back to the real import()
    const src = "export const QaidQuests = class { destroy() {} };";
    const dataUrl = `data:text/javascript,${encodeURIComponent(src)}`;

    const mod = await loadQuestsModule(dataUrl);
    expect(typeof mod.QaidQuests).toBe("function");
  });
});

describe("launchQuest", () => {
  it("derives endpoint + configUrl from base and passes feedbackId metadata", async () => {
    _setQuestsImporter(async () => fakeModule);

    const instance = await launchQuest({
      questId: "q-abc",
      base: "https://qaid.dev/api/quests",
      apiKey: "key-1",
      moduleUrl: "mod.js",
      feedbackId: "fb-9",
      onClose: () => {},
    });

    const cfg = FakeQuest.instances[0]!.config;
    expect(cfg.endpoint).toBe("https://qaid.dev/api/quests/responses");
    expect(cfg.configUrl).toBe("https://qaid.dev/api/quests/q-abc/definition");
    expect(cfg.apiKey).toBe("key-1");
    expect(cfg.metadata).toEqual({ feedbackId: "fb-9" });
    expect(typeof (instance as FakeQuest).destroy).toBe("function");
  });

  it("strips trailing slashes from the base URL", async () => {
    _setQuestsImporter(async () => fakeModule);

    await launchQuest({
      questId: "q1",
      base: "https://x/api/quests/",
      moduleUrl: "m",
    });

    const cfg = FakeQuest.instances[0]!.config;
    expect(cfg.endpoint).toBe("https://x/api/quests/responses");
    expect(cfg.configUrl).toBe("https://x/api/quests/q1/definition");
  });

  it("omits metadata when there is no feedbackId", async () => {
    _setQuestsImporter(async () => fakeModule);

    await launchQuest({
      questId: "q1",
      base: "https://x/api/quests",
      moduleUrl: "m",
      feedbackId: null,
    });

    expect(FakeQuest.instances[0]!.config.metadata).toBeUndefined();
  });

  it("url-encodes the quest id", async () => {
    _setQuestsImporter(async () => fakeModule);

    await launchQuest({
      questId: "a b/c",
      base: "https://x/api/quests",
      moduleUrl: "m",
    });

    expect(FakeQuest.instances[0]!.config.configUrl).toBe(
      "https://x/api/quests/a%20b%2Fc/definition",
    );
  });

  it("passes an empty apiKey through as undefined", async () => {
    _setQuestsImporter(async () => fakeModule);

    await launchQuest({
      questId: "q1",
      base: "https://x/api/quests",
      moduleUrl: "m",
      apiKey: "",
    });

    expect(FakeQuest.instances[0]!.config.apiKey).toBeUndefined();
  });
});

describe("prefetchQuestDefinition", () => {
  const url = questDefinitionUrl("https://x/api/quests/", "q 1");
  const definition = { id: "q 1", questions: [{ id: "a", type: "text", label: "A?" }] };

  function jsonResponse(body: unknown, ok = true) {
    return { ok, json: () => Promise.resolve(body) };
  }

  it("builds the definition URL the quests widget uses", () => {
    expect(url).toBe("https://x/api/quests/q%201/definition");
  });

  it("hands a fetched definition to the quest, so it opens without fetching", async () => {
    _setQuestsImporter(async () => fakeModule);
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse(definition));
    vi.stubGlobal("fetch", fetchMock);

    await prefetchQuestDefinition(url);
    await launchQuest({ questId: "q 1", base: "https://x/api/quests", moduleUrl: "m" });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(FakeQuest.instances[0]!.config.questionnaire).toEqual(definition);
  });

  it("fetches each definition once, however often it is asked", async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse(definition));
    vi.stubGlobal("fetch", fetchMock);

    await Promise.all([prefetchQuestDefinition(url), prefetchQuestDefinition(url)]);
    await prefetchQuestDefinition(url);

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("forgets a refused fetch, so the widget loads it and a later prefetch retries", async () => {
    _setQuestsImporter(async () => fakeModule);
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(jsonResponse({ error: "Quest not found" }, false))
      .mockRejectedValueOnce(new Error("offline"))
      .mockResolvedValueOnce(jsonResponse(definition));
    vi.stubGlobal("fetch", fetchMock);

    await prefetchQuestDefinition(url);
    await launchQuest({ questId: "q 1", base: "https://x/api/quests", moduleUrl: "m" });
    expect(FakeQuest.instances[0]!.config.questionnaire).toBeUndefined();

    await prefetchQuestDefinition(url);
    await prefetchQuestDefinition(url);
    expect(fetchMock).toHaveBeenCalledTimes(3);
  });

  it("leaves a definition still loading to the widget instead of waiting on it", async () => {
    _setQuestsImporter(async () => fakeModule);
    vi.stubGlobal("fetch", vi.fn(() => new Promise(() => {})));

    void prefetchQuestDefinition(url);
    await launchQuest({ questId: "q 1", base: "https://x/api/quests", moduleUrl: "m" });

    expect(FakeQuest.instances).toHaveLength(1);
    expect(FakeQuest.instances[0]!.config.questionnaire).toBeUndefined();
  });
});

describe("launchQuest with a feedback id still on its way", () => {
  class AsyncQuest extends FakeQuest {
    static supports = { asyncMetadata: true };
  }

  it("opens at once and passes a promise, when the widget takes one", async () => {
    _setQuestsImporter(async () => ({ QaidQuests: AsyncQuest }));
    let resolveId!: (id: string) => void;

    await launchQuest({
      questId: "q1",
      base: "https://x/api/quests",
      moduleUrl: "m",
      feedbackId: new Promise((r) => (resolveId = r)),
    });

    const metadata = FakeQuest.instances[0]!.config.metadata;
    expect(metadata).toBeInstanceOf(Promise);
    resolveId("fb-late");
    await expect(metadata).resolves.toEqual({ feedbackId: "fb-late" });
  });

  it("sends no metadata when the feedback POST failed", async () => {
    _setQuestsImporter(async () => ({ QaidQuests: AsyncQuest }));

    await launchQuest({
      questId: "q1",
      base: "https://x/api/quests",
      moduleUrl: "m",
      feedbackId: Promise.reject(new Error("POST failed")),
    });

    await expect(FakeQuest.instances[0]!.config.metadata).resolves.toBeUndefined();
  });

  it("waits for the id with an older widget, which would drop a promise", async () => {
    _setQuestsImporter(async () => fakeModule);
    let resolveId!: (id: number) => void;

    const launched = launchQuest({
      questId: "q1",
      base: "https://x/api/quests",
      moduleUrl: "m",
      feedbackId: new Promise((r) => (resolveId = r)),
    });
    await Promise.resolve();
    expect(FakeQuest.instances).toHaveLength(0);

    resolveId(12);
    await launched;
    expect(FakeQuest.instances[0]!.config.metadata).toEqual({ feedbackId: 12 });
  });

  it("opens an older widget without metadata when the POST failed", async () => {
    _setQuestsImporter(async () => fakeModule);

    await launchQuest({
      questId: "q1",
      base: "https://x/api/quests",
      moduleUrl: "m",
      feedbackId: Promise.reject(new Error("POST failed")),
    });

    expect(FakeQuest.instances[0]!.config.metadata).toBeUndefined();
  });
});

describe("DEFAULT_QUESTS_MODULE_URL", () => {
  it("points at the pinned unpkg quests build", () => {
    expect(DEFAULT_QUESTS_MODULE_URL).toContain("unpkg.com/@qaiddev/quests-embed");
    expect(DEFAULT_QUESTS_MODULE_URL).toMatch(/\.js$/);
  });
});
