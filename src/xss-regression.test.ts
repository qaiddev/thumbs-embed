/**
 * XSS regression suite (2026-11 audit, after the Optimizely incident).
 *
 * This embed runs on partner sites. Nothing it is handed — icons from a public
 * qaid theme, a JSON block injected into the partner's page, a quests module
 * URL — may become script in the partner's origin. If a test here fails, a
 * hole has reopened: fix the code, never the check.
 *
 * The payload list is kept in step with qaid.dev's src/test-helpers/xss.ts
 * (the packages never depend on each other, so it is copied).
 */
import { describe, it, expect, afterEach, beforeEach, vi } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

vi.mock("./screenshot", () => ({ captureScreenshot: vi.fn() }));
vi.mock("./screenshot-dom", () => ({ captureDomScreenshot: vi.fn() }));

import { QaidFeedback } from "./embed";
import { _resetStylesState } from "./styles";
import { sanitizeSvg } from "./svg-sanitize";
import { findConfigBlock } from "./bootstrap";
import {
  DEFAULT_QUESTS_MODULE_URL,
  _resetQuestsModuleWarning,
  resolveQuestsModuleUrl,
} from "./quest-config";

const ICON_PAYLOADS: readonly string[] = [
  '<svg onload="alert(1)"><path d="M0 0"/></svg>',
  "<svg ONLOAD=alert(1)></svg>",
  "<svg/onload=alert(1)>",
  "<svg><script>alert(1)</script></svg>",
  '<svg><script href="data:,alert(1)"/></svg>',
  "<svg><foreignObject><img src=x onerror=alert(1)></foreignObject></svg>",
  '<svg><a href="javascript:alert(1)"><path d="M0 0"/></a></svg>',
  '<svg><a xlink:href="javascript:alert(1)"><text>x</text></a></svg>',
  '<svg><use href="data:image/svg+xml;base64,PHN2ZyBvbmxvYWQ9YWxlcnQoMSk+PC9zdmc+#x"/></svg>',
  '<svg><image href="https://evil.example/x.svg" onerror="alert(1)"/></svg>',
  '<svg><animate attributeName="href" to="javascript:alert(1)"/></svg>',
  '<svg><set attributeName="onmouseover" to="alert(1)"/></svg>',
  "<svg><style>@import url(https://evil.example/x.css)</style></svg>",
  '<svg><path style="background:url(https://evil.example/p)" d="M0 0"/></svg>',
  '<svg><path fill="url(https://evil.example/x.svg#a)" d="M0 0"/></svg>',
  '<svg><path d="M0 0" fill="&#106;avascript:alert(1)"/></svg>',
  "<svg><title></title><img src=x onerror=alert(1)></title></svg>",
  "<svg><desc><![CDATA[</desc><img src=x onerror=alert(1)>]]></desc></svg>",
  "<svg><!--<img src=x onerror=alert(1)>--></svg>",
  "<svg></svg><img src=x onerror=alert(1)>",
  `<svg><path d='M0 0" onload="alert(1)'/></svg>`,
  '<svg><iframe srcdoc="<script>alert(1)</script>"></iframe></svg>',
  "<svg><math><mtext><table><mglyph><style><img src=x onerror=alert(1)>",
  "<img src=x onerror=alert(1)>",
  '<a href="javascript:alert(1)">👍</a>',
  "<details open ontoggle=alert(1)>",
  '"><script>alert(1)</script>',
];

const DANGEROUS_TAGS = new Set([
  "script", "iframe", "object", "embed", "foreignobject", "use", "image", "img",
  "a", "animate", "set", "style", "details", "math", "mglyph",
]);

/** What the browser built that could run script or fetch elsewhere. */
function scriptable(root: ParentNode): string[] {
  const problems: string[] = [];
  for (const el of Array.from(root.querySelectorAll("*"))) {
    const tag = el.localName.toLowerCase();
    if (DANGEROUS_TAGS.has(tag)) problems.push(`<${tag}>`);
    for (const attr of Array.from(el.attributes)) {
      const name = attr.name.toLowerCase();
      if (name.startsWith("on")) problems.push(`<${tag}> ${name}`);
      if (name === "style" || name.endsWith("href") || name === "src") problems.push(`<${tag}> ${name}`);
      if (/javascript:|vbscript:|url\((?!["']?#)/i.test(attr.value.replace(/[\u0000- ]+/g, ""))) {
        problems.push(`<${tag}> ${name}=${attr.value}`);
      }
    }
  }
  return problems;
}

describe("icons from config (e.g. a public qaid theme) never become script", () => {
  let embed: QaidFeedback | null = null;

  beforeEach(() => {
    document.body.innerHTML = "";
    _resetStylesState();
  });

  afterEach(() => {
    embed?.destroy();
    embed = null;
  });

  it.each(ICON_PAYLOADS)("sanitizeSvg leaves nothing live for %s", (payload) => {
    const node = sanitizeSvg(payload);
    const holder = document.createElement("div");
    if (node) holder.appendChild(node);
    expect(scriptable(holder)).toEqual([]);
  });

  it.each(ICON_PAYLOADS)("thumbs, record and dismiss buttons stay inert for %s", (payload) => {
    embed = new QaidFeedback({
      endpoint: "/api/feedback",
      positiveIcon: payload,
      negativeIcon: payload,
      recordIcon: payload,
      captureVideo: true,
    });
    const shadow = document.querySelector("[data-qaid-embed]")!.shadowRoot!;
    const buttons = Array.from(shadow.querySelectorAll("button"));
    expect(buttons.length).toBeGreaterThanOrEqual(3);
    for (const b of buttons) expect(scriptable(b)).toEqual([]);
  });

  it.each(ICON_PAYLOADS)("the single Feedback button stays inert for %s", (payload) => {
    embed = new QaidFeedback({ endpoint: "/api/feedback", singleButton: true, feedbackIcon: payload });
    const shadow = document.querySelector("[data-qaid-embed]")!.shadowRoot!;
    for (const b of Array.from(shadow.querySelectorAll("button"))) expect(scriptable(b)).toEqual([]);
  });
});

describe("the quests module URL cannot be pointed at other code", () => {
  beforeEach(() => _resetQuestsModuleWarning());

  it.each([
    "https://evil.example/qaid-quests.js",
    "https://unpkg.com/evil-package/x.js",
    "https://unpkg.com/@qaiddev/quests-embed@1/dist/qaid-quests.js",
    "https://unpkg.com/@qaiddev/quests-embed@latest/dist/qaid-quests.js",
    "https://unpkg.com/@qaiddev/quests-embed/dist/qaid-quests.js",
    "https://unpkg.com/@qaiddev/quests-embed@1.11.0/../../evil-package/x.js",
    "https://unpkg.com/@qaiddev/quests-embed@1.11.0/%2e%2e/%2e%2e/evil-package/x.js",
    "https://unpkg.com/@qaiddev/quests-embed@1.11.0/..%2f..%2fevil-package/x.js",
    "http://unpkg.com/@qaiddev/quests-embed@1.11.0/dist/qaid-quests.js",
    "//evil.example/x.js",
    "javascript:alert(1)",
    "data:text/javascript,alert(1)",
    "blob:https://evil.example/123",
  ])("refuses %s", (url) => {
    vi.spyOn(console, "warn").mockImplementation(() => {});
    expect(resolveQuestsModuleUrl(url)).toBe(DEFAULT_QUESTS_MODULE_URL);
  });

  it("keeps an exact release and a same-origin self-hosted copy", () => {
    const pinned = "https://unpkg.com/@qaiddev/quests-embed@1.11.0/dist/qaid-quests.js";
    expect(resolveQuestsModuleUrl(pinned)).toBe(pinned);
    const self = new URL("/vendor/qaid-quests.js", location.href).href;
    expect(resolveQuestsModuleUrl("/vendor/qaid-quests.js")).toBe(self);
  });
});

describe("a JSON config block injected elsewhere on the partner page is ignored", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("a decoy block before the embed's own tag, not adjacent, is not used", () => {
    document.body.innerHTML =
      '<script type="application/json" data-feedback-config>{"endpoint":"https://evil.example/steal","positiveIcon":"<img src=x onerror=alert(1)>"}</script>' +
      "<p>page content</p>" +
      '<script src="https://unpkg.com/@qaiddev/thumbs-embed@1.13.0/dist/embed.js" data-endpoint="/api/feedback"></script>';
    const own = document.querySelector<HTMLScriptElement>("script[src]")!;
    expect(findConfigBlock(own)).toBeNull();
  });

  it("the block right before the embed's tag (what qaid.dev snippets produce) is used", () => {
    document.body.innerHTML =
      '<script type="application/json" data-feedback-config>{"endpoint":"/api/feedback"}</script>' +
      '<script src="https://unpkg.com/@qaiddev/thumbs-embed@1.13.0/dist/embed.js"></script>';
    const own = document.querySelector<HTMLScriptElement>("script[src]")!;
    expect(findConfigBlock(own)).not.toBeNull();
  });
});

describe("no raw-HTML or eval sink in the embed's source", () => {
  // Built DOM only (createElement / createElementNS / textContent). A string
  // handed to the HTML parser or to eval on a partner page is exactly the hole
  // this audit closed; this keeps it closed.
  const SINK = /\.innerHTML\s*=|\.outerHTML\s*=|insertAdjacentHTML|document\.write|createContextualFragment|\beval\s*\(|new Function\s*\(|\.srcdoc\s*=|setAttribute\(\s*["']on/;
  const dir = path.join(import.meta.dirname);
  const files = readdirSync(dir).filter((f) => /\.ts$/.test(f) && !/\.test\.ts$/.test(f) && !f.endsWith(".d.ts"));

  it("scans the source files", () => {
    expect(files.length).toBeGreaterThan(20);
  });

  it.each(files)("%s has no sink", (file) => {
    const hits = readFileSync(path.join(dir, file), "utf8")
      .split("\n")
      .map((line, i) => ({ line: line.trim(), at: i + 1 }))
      .filter(({ line }) => SINK.test(line) && !/^(\/\/|\*|\/\*)/.test(line))
      .map(({ line, at }) => `${file}:${at} ${line}`);
    expect(hits).toEqual([]);
  });
});
