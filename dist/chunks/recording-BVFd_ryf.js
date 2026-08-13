import { b as v } from "./annotate-CMq95aXG.js";
const g = document;
function r(n, t, ...o) {
  const e = g.createElement(n);
  if (t) {
    if (t.class && (e.className = t.class), t.style && (e.style.cssText = t.style), t.html != null && (e.innerHTML = t.html), t.text != null && (e.textContent = t.text), t.attrs)
      for (const i in t.attrs) e.setAttribute(i, t.attrs[i]);
    if (t.on)
      for (const i in t.on) e.addEventListener(i, t.on[i]);
  }
  for (const i of o)
    i != null && i !== !1 && e.append(i);
  return e;
}
const R = 20, u = 4096;
function l(n) {
  const t = typeof n == "string" ? n : JSON.stringify(n);
  return t.length > u ? t.slice(0, u) + "…[truncated]" : t;
}
function f(n, t) {
  n.length >= R && n.shift(), n.push(t);
}
async function b(n) {
  try {
    const t = await n.clone().text();
    return l(t);
  } catch {
    return;
  }
}
function y() {
  const n = [], t = window.fetch;
  window.fetch = async function(i, s) {
    const d = typeof i == "string" ? i : i instanceof URL ? i.toString() : i.url, h = s?.method ?? (typeof i == "object" && "method" in i ? i.method : "GET");
    let c;
    s?.body && (c = l(s.body));
    const a = await t.apply(window, [i, s]);
    if (a.status >= 400) {
      const p = await b(a);
      f(n, {
        url: d,
        method: h.toUpperCase(),
        status: a.status,
        statusText: a.statusText,
        requestBody: c,
        responseBody: p,
        timestamp: Date.now()
      });
    }
    return a;
  };
  const o = XMLHttpRequest.prototype.open, e = XMLHttpRequest.prototype.send;
  return XMLHttpRequest.prototype.open = function(i, s, ...d) {
    return this._qaid_method = i, this._qaid_url = typeof s == "string" ? s : s.toString(), o.apply(this, [i, s, ...d]);
  }, XMLHttpRequest.prototype.send = function(i) {
    const s = this, d = i ? l(i) : void 0;
    return s.addEventListener("load", function() {
      s.status >= 400 && f(n, {
        url: s._qaid_url,
        method: s._qaid_method.toUpperCase(),
        status: s.status,
        statusText: s.statusText,
        requestBody: d,
        responseBody: l(s.responseText),
        timestamp: Date.now()
      });
    }), e.apply(this, [i]);
  }, {
    errors: n,
    restore: () => {
      window.fetch = t, XMLHttpRequest.prototype.open = o, XMLHttpRequest.prototype.send = e;
    }
  };
}
class w {
  constructor(t) {
    this.host = t;
  }
  host;
  videoRecorder = null;
  networkCapture = null;
  recordedBlob = null;
  recordingIndicator = null;
  videoPreview = null;
  isRecording = !1;
  isSendingVideo = !1;
  // Pre-recording redaction picking.
  redactPicks = [];
  redactPickerRoot = null;
  redactRafId = 0;
  boundRedactClick = (t) => this.handleRedactPickClick(t);
  /** Escape-key handler; returns true when it consumed the key. */
  handleEscape() {
    return this.isRecording ? (this.stopRecording(), !0) : this.videoPreview ? (this.cancelRecordingPreview(), !0) : this.redactPickerRoot ? (this.finishRedactionPicking(!1), !0) : !1;
  }
  destroy() {
    this.redactRafId && cancelAnimationFrame(this.redactRafId), this.redactRafId = 0, document.removeEventListener("click", this.boundRedactClick, !0), this.redactPickerRoot && (this.redactPickerRoot.remove(), this.redactPickerRoot = null), this.redactPicks = [], this.cleanupRecording(), this.removeVideoPreview();
  }
  async startRecording(t = []) {
    if (!(this.isRecording || this.host.state !== "IDLE"))
      try {
        this.networkCapture = y();
        const { createVideoRecorder: o } = await import("./video-BOYqf2Im.js");
        this.videoRecorder = o({
          maxDuration: this.host.config.videoOptions.maxDuration,
          redactionElements: t
        }), this.videoRecorder.onTick((e) => {
          this.updateRecordingTimer(e);
        }), this.videoRecorder.onStop((e) => {
          this.isRecording && (this.recordedBlob = e, this.isRecording = !1, this.host.announceMsg("Recording stopped"), this.removeRecordingIndicator(), document.removeEventListener("keydown", this.host.boundKeyDown), this.host.setButtonsDisabled(!1), e && e.size > 0 ? this.showRecordingPreview() : this.cleanupRecording());
        }), await this.videoRecorder.start(), this.isRecording = !0, this.host.announceMsg("Recording started"), this.host.setButtonsDisabled(!0), this.showRecordingIndicator(), document.addEventListener("keydown", this.host.boundKeyDown);
      } catch (o) {
        o instanceof Error && /current tab/i.test(o.message) && this.host.announceMsg(o.message), this.cleanupRecording();
      }
  }
  async stopRecording() {
    try {
      this.recordedBlob = await this.videoRecorder.stop();
    } catch {
      this.recordedBlob = null;
    }
    this.isRecording = !1, this.host.announceMsg("Recording stopped"), this.removeRecordingIndicator(), document.removeEventListener("keydown", this.host.boundKeyDown), this.recordedBlob && this.recordedBlob.size > 0 ? this.showRecordingPreview() : this.cleanupRecording();
  }
  /**
   * Pre-recording redaction picker. The user clicks page areas to blur; each
   * gets an outline that tracks its position, then "Start recording" hands the
   * picks to the recorder, which blurs their live bounding boxes so the
   * redaction follows the content as the page scrolls. "Cancel"/Escape aborts.
   */
  startPicking() {
    if (this.isRecording || this.host.state !== "IDLE") return;
    this.host.setState("REDACT_PICKING"), this.redactPicks = [];
    const t = this.host.ensureOverlayHost(), o = r("div", { style: "position:absolute;inset:0;" }), e = r(
      "div",
      { class: "qaid-redact-picker", style: "position:fixed;inset:0;pointer-events:none;" },
      o,
      // Control bar — the only pointer-interactive part of the overlay.
      r(
        "div",
        {
          style: "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);display:flex;gap:12px;align-items:center;pointer-events:auto;background:#0b1220;color:#fff;border:1px solid #ff6b6b;border-radius:9999px;padding:10px 16px;font:600 13px system-ui,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.5);"
        },
        r("span", {
          text: "Click sensitive areas to blur",
          attrs: { "data-qaid-redact-label": "" }
        }),
        r("button", {
          text: "Start recording",
          attrs: { type: "button" },
          style: "cursor:pointer;border:0;border-radius:9999px;padding:8px 14px;background:#ff6b6b;color:#0b1220;font:inherit;",
          on: { click: () => this.finishRedactionPicking(!0) }
        }),
        r("button", {
          text: "Cancel",
          attrs: { type: "button" },
          style: "cursor:pointer;border:0;background:transparent;color:#9fb3c8;font:inherit;",
          on: { click: () => this.finishRedactionPicking(!1) }
        })
      )
    );
    t.appendChild(e), this.redactPickerRoot = e;
    const i = () => {
      this.renderRedactPicks(o), this.redactRafId = requestAnimationFrame(i);
    };
    i(), document.addEventListener("click", this.boundRedactClick, !0), document.addEventListener("keydown", this.host.boundKeyDown), this.host.announceMsg("Click sensitive areas to blur, then start recording");
  }
  handleRedactPickClick(t) {
    const o = t.target instanceof Element ? t.target : null;
    if (!o || v(o) || this.redactPickerRoot?.contains(o)) return;
    t.preventDefault(), t.stopPropagation();
    const e = this.redactPicks.indexOf(o);
    e >= 0 ? this.redactPicks.splice(e, 1) : this.redactPicks.push(o);
    const i = this.redactPickerRoot?.querySelector("[data-qaid-redact-label]");
    if (i) {
      const s = this.redactPicks.length;
      i.textContent = s === 0 ? "Click sensitive areas to blur" : `${s} area${s === 1 ? "" : "s"} will be blurred`;
    }
  }
  renderRedactPicks(t) {
    t.textContent = "";
    for (const o of this.redactPicks) {
      const e = o.getBoundingClientRect();
      e.width <= 0 || e.height <= 0 || t.appendChild(
        r("div", {
          style: `position:fixed;left:${e.left}px;top:${e.top}px;width:${e.width}px;height:${e.height}px;border:2px solid #ff6b6b;border-radius:4px;background:rgba(255,107,107,.18);pointer-events:none;`
        })
      );
    }
  }
  finishRedactionPicking(t) {
    this.redactRafId && cancelAnimationFrame(this.redactRafId), this.redactRafId = 0, document.removeEventListener("click", this.boundRedactClick, !0), document.removeEventListener("keydown", this.host.boundKeyDown), this.redactPickerRoot && (this.redactPickerRoot.remove(), this.redactPickerRoot = null);
    const o = this.redactPicks;
    this.redactPicks = [], this.host.setState("IDLE"), t && this.startRecording(o);
  }
  showRecordingIndicator() {
    const t = this.host.ensureOverlayHost();
    this.recordingIndicator = r(
      "div",
      { class: "qaid-recording-indicator", style: `z-index:${this.host.config.zIndex + 100}` },
      r("div", { class: "qaid-recording-dot" }),
      r("span", {
        class: "qaid-recording-time",
        text: this.formatTime(this.host.config.videoOptions.maxDuration)
      }),
      r("button", {
        class: "qaid-recording-stop",
        text: "Stop",
        attrs: { type: "button" },
        on: { click: () => this.stopRecording() }
      })
    ), this.host.applyVars(this.recordingIndicator), this.host.overlayShadowHost && (this.host.overlayShadowHost.style.pointerEvents = "auto"), t.appendChild(this.recordingIndicator);
  }
  updateRecordingTimer(t) {
    if (!this.recordingIndicator) return;
    const o = this.recordingIndicator.querySelector(".qaid-recording-time");
    if (o) {
      const e = Math.max(0, this.host.config.videoOptions.maxDuration - t);
      o.textContent = this.formatTime(e), e > 0 && e <= 5 && this.host.announceMsg(`${e} second${e === 1 ? "" : "s"} remaining`);
    }
  }
  formatTime(t) {
    const o = Math.floor(t / 60), e = t % 60;
    return `${o}:${e.toString().padStart(2, "0")}`;
  }
  removeRecordingIndicator() {
    this.recordingIndicator && (this.recordingIndicator.remove(), this.recordingIndicator = null);
  }
  showRecordingPreview() {
    const t = this.host.ensureOverlayHost(), o = URL.createObjectURL(this.recordedBlob), e = `qaid-video-title-${this.host.uid}`, i = r("h3", { text: "Review your recording", attrs: { id: e } }), s = r("video");
    s.src = o, s.controls = !0, s.autoplay = !0, s.muted = !0;
    const d = r("textarea", {
      attrs: {
        placeholder: "Optional: Describe the issue you recorded...",
        "aria-label": "Describe the issue you recorded"
      }
    }), h = r("button", {
      class: "qaid-video-btn qaid-video-btn-send",
      text: "Send",
      attrs: { type: "button" },
      on: { click: () => this.submitVideoFeedback(d.value.trim() || null, h) }
    }), c = r(
      "div",
      { class: "qaid-video-preview-box" },
      i,
      s,
      d,
      r(
        "div",
        { class: "qaid-video-preview-actions" },
        r("button", {
          class: "qaid-video-btn qaid-video-btn-cancel",
          text: "Cancel",
          attrs: { type: "button" },
          on: { click: () => this.cancelRecordingPreview() }
        }),
        r("button", {
          class: "qaid-video-btn qaid-video-btn-rerecord",
          text: "Re-record",
          attrs: { type: "button" },
          on: {
            click: () => {
              this.cancelRecordingPreview(), this.startRecording();
            }
          }
        }),
        h
      )
    );
    this.videoPreview = r(
      "div",
      { class: "qaid-video-preview", style: `z-index:${this.host.config.zIndex + 100}` },
      c
    ), this.host.applyVars(this.videoPreview), this.host.overlayShadowHost && (this.host.overlayShadowHost.style.pointerEvents = "auto"), t.appendChild(this.videoPreview), this.host.openDialogA11y(c, { labelledbyId: i.id }), document.addEventListener("keydown", this.host.boundKeyDown);
  }
  cancelRecordingPreview() {
    this.removeVideoPreview(), this.cleanupRecording();
  }
  removeVideoPreview() {
    if (this.host.closeDialogA11y(), this.videoPreview) {
      const t = this.videoPreview.querySelector("video");
      t?.src && URL.revokeObjectURL(t.src), this.videoPreview.remove(), this.videoPreview = null;
    }
    document.removeEventListener("keydown", this.host.boundKeyDown);
  }
  async submitVideoFeedback(t, o) {
    if (!this.recordedBlob || this.isSendingVideo) return;
    this.isSendingVideo = !0, o.disabled = !0, o.textContent = "Sending...";
    const e = new FormData();
    e.append("video", this.recordedBlob, `recording.${this.recordedBlob.type.includes("mp4") ? "mp4" : "webm"}`), e.append("pageUrl", window.location.href), e.append("visitorId", this.host.visitorId), this.host.config.apiKey && e.append("apiKey", this.host.config.apiKey), t && e.append("message", t), this.host.consoleCapture && e.append("consoleErrors", JSON.stringify(this.host.consoleCapture.errors)), this.networkCapture && e.append("networkErrors", JSON.stringify(this.networkCapture.errors));
    let i = null;
    try {
      const s = await fetch(`${this.host.config.endpoint}/video`, {
        method: "POST",
        body: e
      });
      if (s.ok) {
        this.host.announceMsg("Recording sent");
        try {
          i = (await s.json())?.id ?? null;
        } catch {
        }
      } else
        console.error("Failed to submit video feedback:", await s.text()), this.host.announceMsg("Failed to send recording", !0);
    } catch (s) {
      console.error("Failed to submit video feedback:", s), this.host.announceMsg("Failed to send recording", !0);
    }
    this.isSendingVideo = !1, this.removeVideoPreview(), this.cleanupRecording(), await this.host.tryLaunchQuest("video", i);
  }
  cleanupRecording() {
    this.isRecording = !1, this.removeRecordingIndicator(), this.videoRecorder && (this.videoRecorder.destroy(), this.videoRecorder = null), this.networkCapture && (this.networkCapture.restore(), this.networkCapture = null), this.recordedBlob && (this.recordedBlob = null), this.host.setButtonsDisabled(!1), this.host.overlayShadowHost && this.host.state === "IDLE" && (this.host.overlayShadowHost.style.pointerEvents = "none");
  }
}
export {
  w as RecordingController
};
//# sourceMappingURL=recording-BVFd_ryf.js.map
