function D() {
  const e = navigator.userAgent || "";
  return /iP(hone|ad|od)/.test(e) || // iPadOS 13+ masquerades as "MacIntel" but is a multi-touch device.
  navigator.platform === "MacIntel" && (navigator.maxTouchPoints || 0) > 1;
}
function x(e, a, r, d, i) {
  const t = e >= a, c = r >= d;
  return t === c ? { width: e, height: a, rotate: 0 } : { width: a, height: e, rotate: i === 270 ? -90 : 90 };
}
function F(e, a, r) {
  if (r.rotate === 0) {
    e.drawImage(a, 0, 0, r.width, r.height);
    return;
  }
  e.save(), r.rotate === 90 ? (e.translate(r.width, 0), e.rotate(Math.PI / 2)) : (e.translate(0, r.height), e.rotate(-Math.PI / 2)), e.drawImage(a, 0, 0, r.height, r.width), e.restore();
}
function C() {
  const e = typeof screen < "u" ? screen.orientation : void 0;
  return e && typeof e.angle == "number" ? e.angle : 0;
}
function T(e) {
  return new Promise((a) => {
    if (e.videoWidth > 0) {
      a();
      return;
    }
    e.addEventListener("loadedmetadata", () => a(), { once: !0 });
  });
}
async function E(e) {
  try {
    await e.play();
  } catch {
  }
}
async function P(e, a = 15) {
  const r = document.createElement("canvas");
  if (typeof r.captureStream != "function") return null;
  const d = r.getContext("2d");
  if (!d) return null;
  const i = document.createElement("video");
  i.muted = !0, i.playsInline = !0, i.srcObject = e, await T(i);
  const t = x(
    i.videoWidth,
    i.videoHeight,
    window.innerWidth,
    window.innerHeight,
    C()
  );
  r.width = t.width, r.height = t.height, await E(i);
  let c = 0;
  const l = () => {
    F(d, i, t), c = requestAnimationFrame(l);
  };
  l();
  const n = r.captureStream(a);
  return {
    stream: n,
    stop: () => {
      c && cancelAnimationFrame(c), c = 0, n.getTracks().forEach((u) => u.stop()), i.pause(), i.srcObject = null;
    }
  };
}
function B(e, a, r, d, i) {
  const t = Math.max(0, Math.min(d, e.left * a)), c = Math.max(0, Math.min(i, e.top * r)), l = Math.max(0, Math.min(d, (e.left + e.width) * a)), n = Math.max(0, Math.min(i, (e.top + e.height) * r)), u = l - t, o = n - c;
  return u <= 0 || o <= 0 ? null : { x: t, y: c, w: u, h: o };
}
function O(e, a, r, d, i, t, c) {
  e.drawImage(a, 0, 0, d, i);
  const l = d / Math.max(1, window.innerWidth), n = i / Math.max(1, window.innerHeight);
  for (const u of r) {
    const o = B(
      u.getBoundingClientRect(),
      l,
      n,
      d,
      i
    );
    o && (e.save(), c ? (e.filter = `blur(${t}px)`, e.drawImage(a, o.x, o.y, o.w, o.h, o.x, o.y, o.w, o.h)) : (e.fillStyle = "#0b0b0b", e.fillRect(o.x, o.y, o.w, o.h)), e.restore());
  }
}
async function A(e, a, r = {}) {
  const d = r.frameRate ?? 15, i = r.blurRadius ?? 12, t = document.createElement("canvas");
  if (typeof t.captureStream != "function") return null;
  const c = t.getContext("2d");
  if (!c) return null;
  const l = "filter" in c, n = document.createElement("video");
  n.muted = !0, n.playsInline = !0, n.srcObject = e, await T(n), t.width = n.videoWidth, t.height = n.videoHeight, await E(n);
  let u = 0;
  const o = () => {
    O(
      c,
      n,
      a,
      t.width,
      t.height,
      i,
      l
    ), u = requestAnimationFrame(o);
  };
  o();
  const h = t.captureStream(d);
  return {
    stream: h,
    stop: () => {
      u && cancelAnimationFrame(u), u = 0, h.getTracks().forEach((p) => p.stop()), n.pause(), n.srcObject = null;
    }
  };
}
function L() {
  return typeof navigator < "u" && !!navigator.mediaDevices && typeof navigator.mediaDevices.getDisplayMedia == "function" && typeof MediaRecorder < "u";
}
function j() {
  if (typeof MediaRecorder > "u") return "";
  const e = [
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
    "video/mp4"
  ];
  for (const a of e)
    if (MediaRecorder.isTypeSupported(a))
      return a;
  return "";
}
function V(e = {}) {
  const a = e.maxDuration ?? 15, r = e.videoBitsPerSecond ?? 8e5, d = e.redactionElements ?? [], i = e.redactionBlurRadius;
  let t = null, c = null, l = null, n = null, u = [], o = null, h = null, p = null, M = 0, w = null, g = null, b = !1, v = null;
  function I() {
    p !== null && (clearInterval(p), p = null), v !== null && (clearTimeout(v), v = null), c && (c.stop(), c = null), l && (l.stop(), l = null), t && (t.getTracks().forEach((f) => f.stop()), t = null), n = null, u = [], o = null, h = null, w = null, g = null;
  }
  function y() {
    b || (b = !0, n && n.state !== "inactive" && n.stop());
  }
  return {
    async start() {
      b = !1, u = [];
      const f = j();
      if (!f)
        throw new Error("No supported video MIME type found");
      t = await navigator.mediaDevices.getDisplayMedia({
        video: {
          frameRate: 15,
          displaySurface: "browser"
        },
        audio: !1,
        // @ts-expect-error preferCurrentTab is not in the TS types yet
        preferCurrentTab: !0,
        selfBrowserSurface: "include",
        monitorTypeSurfaces: "exclude",
        surfaceSwitching: "exclude"
      });
      const m = t.getVideoTracks()[0], R = m?.getSettings?.()?.displaySurface;
      if (R === "monitor" || R === "window")
        throw t.getTracks().forEach((s) => s.stop()), t = null, new Error(
          "qaid records only the current tab — please share this tab, not a window or your whole screen."
        );
      m && m.addEventListener("ended", () => {
        y();
      });
      let S = t;
      if (D()) {
        const s = await P(t);
        s && (c = s, S = s.stream);
      } else if (d.length > 0) {
        const s = await A(t, d, {
          blurRadius: i
        });
        s && (l = s, S = s.stream);
      }
      n = new MediaRecorder(S, {
        mimeType: f,
        videoBitsPerSecond: r
      }), n.ondataavailable = (s) => {
        s.data.size > 0 && u.push(s.data);
      }, n.onstop = () => {
        const s = new Blob(u, { type: f });
        w && w(s), h && h(s), c && (c.stop(), c = null), l && (l.stop(), l = null), t && t.getTracks().forEach((k) => k.stop());
      }, n.onerror = () => {
        g && g(new Error("MediaRecorder error"));
      }, n.start(1e3), M = Date.now(), p = setInterval(() => {
        const s = Math.floor((Date.now() - M) / 1e3);
        o && o(s);
      }, 1e3), v = setTimeout(() => {
        y();
      }, a * 1e3);
    },
    stop() {
      return new Promise((f, m) => {
        w = f, g = m, y();
      });
    },
    onTick(f) {
      o = f;
    },
    onStop(f) {
      h = f;
    },
    destroy() {
      y(), I();
    }
  };
}
export {
  V as createVideoRecorder,
  j as getSupportedMimeType,
  L as isVideoRecordingSupported
};
//# sourceMappingURL=video-BOYqf2Im.js.map
