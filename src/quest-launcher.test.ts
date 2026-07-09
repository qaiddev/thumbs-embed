import { afterEach, describe, expect, it, vi } from "vitest";
import {
  DEFAULT_QUESTS_MODULE_URL,
  launchQuest,
  loadQuestsModule,
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

describe("DEFAULT_QUESTS_MODULE_URL", () => {
  it("points at the pinned unpkg quests build", () => {
    expect(DEFAULT_QUESTS_MODULE_URL).toContain("unpkg.com/@qaiddev/quests-embed");
    expect(DEFAULT_QUESTS_MODULE_URL).toMatch(/\.js$/);
  });
});
