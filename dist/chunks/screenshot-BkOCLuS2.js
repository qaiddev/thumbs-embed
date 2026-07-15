async function v(m = {}) {
  const { quality: g = 1, maxWidth: w = 1280, maxHeight: p = 800 } = m;
  try {
    if (!navigator.mediaDevices?.getDisplayMedia)
      return console.warn("Screen Capture API not available"), null;
    const a = await navigator.mediaDevices.getDisplayMedia({
      preferCurrentTab: !0,
      video: {
        displaySurface: "browser"
      }
    }), i = a.getVideoTracks()[0], r = i.getSettings(), e = document.createElement("video");
    e.srcObject = a, e.muted = !0, await new Promise((t) => {
      e.onloadedmetadata = () => {
        e.play(), t();
      };
    }), await new Promise((t) => {
      const l = () => {
        e.readyState >= 2 ? t() : requestAnimationFrame(l);
      };
      l();
    }), await new Promise((t) => setTimeout(t, 100));
    const o = r.width || e.videoWidth, c = r.height || e.videoHeight, s = Math.min(w / o, p / c, 1), d = Math.round(o * s), u = Math.round(c * s), n = document.createElement("canvas");
    n.width = d, n.height = u;
    const h = n.getContext("2d");
    return h ? (h.drawImage(e, 0, 0, d, u), i.stop(), n.toDataURL("image/webp", g)) : (i.stop(), null);
  } catch (a) {
    return console.warn("Screenshot capture failed:", a), null;
  }
}
export {
  v as captureScreenshot
};
//# sourceMappingURL=screenshot-BkOCLuS2.js.map
