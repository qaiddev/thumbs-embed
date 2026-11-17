import { describe, it, expect, vi } from "vitest";
import { sanitizeSvg, iconNode, setIcon, isSafeValue } from "./svg-sanitize";
import {
  THUMBS_UP_ICON,
  THUMBS_DOWN_ICON,
  RECORD_ICON,
  FEEDBACK_ICON,
  DISMISS_ICON,
  RECTANGLE_ICON,
  ARROW_ICON,
  PENCIL_ICON,
  BLUR_ICON,
  UNDO_ICON,
  DONE_ICON,
  ERROR_ICON,
  SKIP_ICON,
} from "./icons";

const SVG_NS = "http://www.w3.org/2000/svg";

/** Every element and attribute name in the result. */
function inventory(el: Element): { tags: string[]; attrs: string[] } {
  const tags: string[] = [];
  const attrs: string[] = [];
  const walk = (node: Element): void => {
    tags.push(node.localName);
    for (const a of Array.from(node.attributes)) attrs.push(a.name);
    for (const c of Array.from(node.children)) walk(c);
  };
  walk(el);
  return { tags, attrs };
}

describe("sanitizeSvg", () => {
  it("keeps every built-in icon whole", () => {
    for (const icon of [
      THUMBS_UP_ICON, THUMBS_DOWN_ICON, RECORD_ICON, FEEDBACK_ICON, DISMISS_ICON,
      RECTANGLE_ICON, ARROW_ICON, PENCIL_ICON, BLUR_ICON, UNDO_ICON, DONE_ICON,
      ERROR_ICON, SKIP_ICON,
    ]) {
      const svg = sanitizeSvg(icon);
      expect(svg).not.toBeNull();
      expect(svg!.namespaceURI).toBe(SVG_NS);
      expect(svg!.firstElementChild).not.toBeNull();
    }
    const up = sanitizeSvg(THUMBS_UP_ICON)!;
    expect(up.getAttribute("class")).toBe("qaid-icon");
    expect(up.getAttribute("viewBox")).toBe("0 0 24 24");
    expect(up.querySelector("path")!.getAttribute("stroke-linecap")).toBe("round");
  });

  it("builds real SVG-namespace elements with camelCase names restored", () => {
    const svg = sanitizeSvg(
      '<SVG VIEWBOX="0 0 10 10"><defs><lineargradient id="g" gradientunits="userSpaceOnUse"><stop offset="0" stop-color="red"/></lineargradient><clippath id="c"><rect width="5" height="5"/></clippath></defs><circle cx="5" cy="5" r="4" fill="url(#g)" clip-path="url(#c)"/></SVG>'
    )!;
    expect(svg.getAttribute("viewBox")).toBe("0 0 10 10");
    const grad = svg.querySelector("defs")!.firstElementChild!;
    expect(grad.localName).toBe("linearGradient");
    expect(grad.namespaceURI).toBe(SVG_NS);
    expect(grad.getAttribute("gradientUnits")).toBe("userSpaceOnUse");
    const circle = svg.querySelector("circle")!;
    expect(circle.getAttribute("fill")).toBe("url(#g)");
    expect(circle.getAttribute("clip-path")).toBe("url(#c)");
  });

  it("drops scripts, foreignObject, use, image, style and their contents", () => {
    const svg = sanitizeSvg(
      '<svg><script>alert(1)</script><foreignObject><div onclick="x()">hi</div></foreignObject>' +
        '<use href="#a"/><image href="https://evil/x.png"/><style>*{}</style><a href="javascript:alert(1)"><path d="M0 0"/></a><path d="M1 1"/></svg>'
    )!;
    const { tags } = inventory(svg);
    expect(tags).toEqual(["svg", "path"]);
    expect(svg.textContent).toBe("");
  });

  it("drops event handlers, href, xlink:href, style and xmlns", () => {
    const svg = sanitizeSvg(
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" onload="alert(1)" style="x" ONMOUSEOVER=alert(2)><path d="M0 0" xlink:href="javascript:alert(1)" href="#x" onclick="y"/></svg>'
    )!;
    const { attrs } = inventory(svg);
    expect(attrs).toEqual(["d"]);
  });

  it("drops values with script URLs or remote url() references", () => {
    const svg = sanitizeSvg(
      '<svg><path d="M0 0" fill="url(https://evil/x)" stroke="javascript:alert(1)" class="java&#x09;script:x" opacity="url( #ok )"/><rect clip-path="inset(1px)" width="1"/><rect clip-path="none" height="1"/></svg>'
    )!;
    const path = svg.querySelector("path")!;
    expect(path.hasAttribute("fill")).toBe(false);
    expect(path.hasAttribute("stroke")).toBe(false);
    expect(path.hasAttribute("class")).toBe(false);
    expect(path.getAttribute("opacity")).toBe("url( #ok )");
    const [a, b] = Array.from(svg.querySelectorAll("rect"));
    expect(a.hasAttribute("clip-path")).toBe(false);
    expect(b.getAttribute("clip-path")).toBe("none");
  });

  it("keeps title and desc text, decoding entities, and nothing else", () => {
    const svg = sanitizeSvg(
      '<svg role="img" aria-label="Up"><title>Up &amp; &lt;away&gt; &#33;&#x21;&nbsp;&unknown; &#0;</title><desc>d</desc>stray<g>text</g></svg>'
    )!;
    expect(svg.querySelector("title")!.textContent).toBe("Up & <away> !! &unknown; ");
    expect(svg.querySelector("desc")!.textContent).toBe("d");
    expect(svg.querySelector("g")!.textContent).toBe("");
    expect(svg.getAttribute("role")).toBe("img");
  });

  it("accepts an XML prolog and comments, unquoted and bare attributes", () => {
    const svg = sanitizeSvg(
      '<?xml version="1.0"?>\n<!-- made by hand --><svg width=24 focusable aria-hidden=true><path d=M0/></svg>'
    )!;
    expect(svg.getAttribute("width")).toBe("24");
    expect(svg.getAttribute("focusable")).toBe("");
    expect(svg.getAttribute("aria-hidden")).toBe("true");
    expect(svg.querySelector("path")!.getAttribute("d")).toBe("M0");
  });

  it("keeps the content of a dropped element's siblings and closes stray tags", () => {
    const svg = sanitizeSvg("<svg><g><script><g><path/></g></script><circle r='1'/></g></rect></svg>")!;
    expect(inventory(svg).tags).toEqual(["svg", "g", "circle"]);
  });

  it("tolerates a root left open at the end of the string", () => {
    const svg = sanitizeSvg("<svg><title>Up")!;
    expect(svg.querySelector("title")!.textContent).toBe("Up");
  });

  it("ignores anything after the root closes", () => {
    const svg = sanitizeSvg('<svg></svg><img src=x onerror="alert(1)">')!;
    expect(svg.childNodes).toHaveLength(0);
    expect(sanitizeSvg("<svg/>")!.localName).toBe("svg");
  });

  it.each([
    ["not a string", 42],
    ["empty", "   "],
    ["no svg root", "<div></div>"],
    ["text before the root", "hello <svg></svg>"],
    ["an img", '<img src=x onerror="alert(1)">'],
    ["a doctype with entities", '<!DOCTYPE svg [<!ENTITY x "y">]><svg></svg>'],
    ["CDATA", "<svg><![CDATA[x]]></svg>"],
    ["an unterminated comment", "<svg><!-- x"],
    ["an unterminated prolog", "<?xml version"],
    ["a prolog after the root", "<svg><?xml ?></svg>"],
    ["a broken close tag", "<svg></ ></svg>"],
    ["a broken open tag", "<svg>< path/></svg>"],
    ["an unterminated tag", "<svg"],
    ["an unterminated attribute", '<svg width="1></svg>'],
    ["a broken attribute", "<svg ='x'></svg>"],
    ["a missing unquoted value", "<svg width= ></svg>"],
    ["too long", `<svg>${" ".repeat(60_000)}</svg>`],
    ["too many elements", `<svg>${"<g/>".repeat(1_001)}</svg>`],
  ])("returns null for %s", (_label, input) => {
    expect(sanitizeSvg(input)).toBeNull();
  });

  it("returns null without a document", () => {
    const real = globalThis.document;
    vi.stubGlobal("document", undefined);
    try {
      expect(sanitizeSvg("<svg/>")).toBeNull();
    } finally {
      vi.stubGlobal("document", real);
    }
  });
});

describe("isSafeValue", () => {
  it.each([
    ["fill", "red", true],
    ["fill", "url(#a)", true],
    ["fill", "url('#a')", true],
    ["fill", "url(#a) url(x)", false],
    ["fill", "URL(x)", false],
    ["d", "M0 0", true],
    ["class", "vbscript:x", false],
    ["class", "data:text/html,x", false],
    ["class", "expression(x)", false],
    ["clip-path", "url(#c)", true],
    ["clip-path", " none ", true],
    ["clip-path", "circle(1px)", false],
  ])("%s=%s → %s", (attr, value, ok) => {
    expect(isSafeValue(attr, value)).toBe(ok);
  });
});

describe("iconNode / setIcon", () => {
  it("draws a safe custom icon", () => {
    const svg = iconNode('<svg class="mine"><path d="M0 0"/></svg>', THUMBS_UP_ICON);
    expect(svg.getAttribute("class")).toBe("mine");
  });

  it("falls back to the built-in icon for missing or hostile markup", () => {
    expect(iconNode(undefined, THUMBS_UP_ICON).getAttribute("class")).toBe("qaid-icon");
    expect(iconNode("", THUMBS_UP_ICON).getAttribute("class")).toBe("qaid-icon");
    expect(iconNode('<img src=x onerror="alert(1)">', THUMBS_UP_ICON).getAttribute("class")).toBe(
      "qaid-icon"
    );
  });

  it("replaces the element's content", () => {
    const btn = document.createElement("button");
    btn.textContent = "old";
    setIcon(btn, null, THUMBS_DOWN_ICON);
    expect(btn.childNodes).toHaveLength(1);
    expect(btn.firstElementChild!.localName).toBe("svg");
  });
});
