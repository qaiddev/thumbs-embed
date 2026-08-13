const V = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
</svg>`, N = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
</svg>`, Xt = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
</svg>`, gt = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h8M8 14h5m-9 6l3.5-3.5H18a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14z"/>
</svg>`, Yt = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <rect x="4" y="6" width="16" height="12" rx="1" stroke-linejoin="round"/>
</svg>`, Qt = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 19L19 5m0 0h-8m8 0v8"/>
</svg>`, Gt = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
</svg>`, Jt = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3s6 6.4 6 10a6 6 0 01-12 0c0-3.6 6-10 6-10z"/>
</svg>`, Zt = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 14L4 9l5-5M4 9h11a5 5 0 010 10h-4"/>
</svg>`, vt = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20 6L9 17l-5-5"/>
</svg>`, te = `<svg xmlns="http://www.w3.org/2000/svg" class="qaid-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18"/>
</svg>`, ee = "button{cursor:pointer}.qaid-buttons{display:flex;gap:.5rem}.qaid-buttons.qaid-vertical{flex-direction:column}.qaid-buttons.qaid-auto-container{position:fixed;z-index:50}.qaid-buttons.qaid-auto-container.qaid-bottom-right{bottom:1rem;right:1rem}.qaid-buttons.qaid-auto-container.qaid-bottom-left{bottom:1rem;left:1rem}.qaid-buttons.qaid-auto-container.qaid-top-right{top:1rem;right:1rem}.qaid-buttons.qaid-auto-container.qaid-top-left{top:1rem;left:1rem}.qaid-buttons.qaid-incognito{opacity:0;transition:opacity .2s ease-in-out}.qaid-buttons.qaid-incognito:hover{opacity:1}.qaid-buttons.qaid-dismissed{display:none!important}.qaid-dismiss-btn{width:20px;height:20px;padding:0;border:none;border-radius:50%;background:#0006;color:#fff;display:flex;align-items:center;justify-content:center;align-self:center;opacity:0;transition:opacity .15s,background .15s;cursor:pointer;pointer-events:auto;-webkit-appearance:none;appearance:none}.qaid-dismiss-btn:hover{background:#0009}.qaid-buttons:hover .qaid-dismiss-btn{opacity:1}button.qaid-btn-structural{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;-webkit-appearance:none;appearance:none}.qaid-icon{width:24px;height:24px}.qaid-btn-structural:not(:has(svg)),.qaid-btn:not(:has(svg)){font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-emoji-icon{font-size:var(--qaid-icon-size, 24px);line-height:1}.qaid-buttons,.qaid-buttons *,.qaid-modal-container,.qaid-modal-container *{cursor:pointer!important}.qaid-tooltip-wrapper{position:relative}.qaid-tooltip-text{position:fixed;padding:.5rem .75rem;background:#1f2937;color:#fff;font-size:1rem;font-weight:600;border-radius:.5rem;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s;z-index:99999}.qaid-tooltip-text.qaid-tooltip-visible{opacity:1}.qaid-targeting-overlay{position:fixed;inset:0;z-index:40;pointer-events:none}.qaid-capture-layer{position:fixed;inset:0;pointer-events:none;z-index:9999}@keyframes qaid-slideDown{0%{transform:translateY(-100%)}to{transform:translateY(0)}}.qaid-vignette{position:fixed;inset:0;pointer-events:none;background:radial-gradient(ellipse at center,transparent 30%,rgba(0,0,0,.3) 70%,rgba(0,0,0,.6) 100%);z-index:41}.qaid-crosshair-h,.qaid-crosshair-v{position:fixed;pointer-events:none;z-index:42}.qaid-crosshair-h{left:0;right:0;height:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-crosshair-v{top:0;bottom:0;width:1px;background:color-mix(in srgb,var(--qaid-negative) 60%,transparent)}.qaid-type-up .qaid-crosshair-h,.qaid-type-up .qaid-crosshair-v{background:color-mix(in srgb,var(--qaid-positive) 60%,transparent)}.qaid-highlight-box{position:fixed;top:0;left:0;pointer-events:none;z-index:41;display:none;border:3px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent);border-radius:2px;background:color-mix(in srgb,var(--qaid-negative) 8%,transparent);will-change:transform,width,height}.qaid-type-up .qaid-highlight-box{border-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent);background:color-mix(in srgb,var(--qaid-positive) 8%,transparent)}.qaid-scope{position:fixed;width:80px;height:80px;pointer-events:none;z-index:43;transform:translate(-50%,-50%)}.qaid-scope-ring{position:absolute;inset:10px;border:2px solid color-mix(in srgb,var(--qaid-negative) 80%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring{border-color:color-mix(in srgb,var(--qaid-positive) 80%,transparent)}.qaid-scope-ring-inner{position:absolute;inset:20px;border:1px solid color-mix(in srgb,var(--qaid-negative) 50%,transparent);border-radius:50%}.qaid-type-up .qaid-scope-ring-inner{border-color:color-mix(in srgb,var(--qaid-positive) 50%,transparent)}.qaid-scope-dot{position:absolute;top:50%;left:50%;width:4px;height:4px;background:var(--qaid-negative);border-radius:50%;transform:translate(-50%,-50%)}.qaid-type-up .qaid-scope-dot{background:var(--qaid-positive)}.qaid-selected-marker{position:fixed;border:3px solid var(--qaid-marker, #6366f1);border-radius:50%;pointer-events:none;z-index:44;animation:qaid-markerPulse 1.5s ease-in-out infinite}@keyframes qaid-markerPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.7;transform:scale(1.05)}}.qaid-backdrop{position:fixed;inset:0;z-index:45;background:#0000004d}.qaid-modal-container{position:fixed;z-index:50;display:flex;flex-direction:column;align-items:flex-start;max-height:calc(100vh - 32px);font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-modal-container.qaid-above{flex-direction:column-reverse}.qaid-modal-arrow{width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;position:relative;align-self:flex-start}.qaid-modal-container.qaid-below .qaid-modal-arrow{border-bottom:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-container.qaid-above .qaid-modal-arrow{border-top:12px solid light-dark(#ffffff,#1f2937)}.qaid-modal-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px light-dark(rgba(0,0,0,.25),rgba(0,0,0,.5));width:var(--qaid-modal-width, 400px);max-width:calc(100vw - 32px);max-height:calc(100vh - 60px);overflow-y:auto}.qaid-modal-header{display:flex;align-items:flex-start;gap:.75rem;margin-bottom:1rem}button.qaid-type-toggle{border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0;-webkit-appearance:none;appearance:none}button.qaid-type-toggle:hover{transform:scale(1.1)}button.qaid-type-toggle:not(.qaid-type-toggle-custom){width:2.5rem;height:2.5rem;border-radius:50%}button.qaid-type-toggle:not(.qaid-type-toggle-custom) svg{width:1.25rem;height:1.25rem}button.qaid-type-toggle.qaid-type-up{background:var(--qaid-positive);color:#fff}button.qaid-type-toggle.qaid-type-down{background:var(--qaid-negative);color:#fff}.qaid-type-static{width:2.5rem;height:2.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:var(--qaid-marker, #6366f1);color:var(--qaid-marker-text, white)}.qaid-type-static svg{width:1.25rem;height:1.25rem}.qaid-modal-header-text{flex:1;min-width:0}.qaid-modal-title{font-size:1.125rem;font-weight:700;margin:0 0 .25rem;color:light-dark(#1f2937,#f9fafb)}.qaid-modal-subtitle{color:light-dark(#6b7280,#9ca3af);margin:0;font-size:.875rem}.qaid-textarea{width:100%;height:6rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:1rem;resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-btn-row{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-btn-submit{padding:.5rem 1rem;background:var(--qaid-marker);color:var(--qaid-marker-text, white);border:none;border-radius:.5rem;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;appearance:none}button.qaid-btn-submit:hover{filter:brightness(.85)}button.qaid-btn-submit:focus{outline:none;box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 30%,transparent)}.qaid-bottom-sheet{position:fixed;bottom:0;left:0;right:0;z-index:50;animation:qaid-slideUpSheet .3s ease-out;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-bottom-sheet-content{background:light-dark(#ffffff,#1f2937);border-radius:1rem 1rem 0 0;padding:1.5rem;padding-bottom:max(1.5rem,env(safe-area-inset-bottom))}.qaid-bottom-sheet-handle{width:36px;height:4px;background:light-dark(rgba(0,0,0,.2),rgba(255,255,255,.2));border-radius:2px;margin:0 auto 1rem}@keyframes qaid-slideUpSheet{0%{transform:translateY(100%)}to{transform:translateY(0)}}button.qaid-btn-record:hover{background:#dc2626;color:#fff}.qaid-recording-indicator{position:fixed;top:12px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:.5rem;padding:.5rem 1rem;background:light-dark(#1f2937,#374151);color:#fff;border-radius:9999px;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:.875rem;font-weight:500;box-shadow:0 4px 12px #0000004d;z-index:99999;animation:qaid-slideDown .2s ease-out}.qaid-recording-dot{width:10px;height:10px;background:#dc2626;border-radius:50%;animation:qaid-dotPulse 1.5s ease-in-out infinite}@keyframes qaid-dotPulse{0%,to{opacity:1}50%{opacity:.3}}.qaid-recording-time{font-variant-numeric:tabular-nums;min-width:2.5rem;text-align:center}button.qaid-recording-stop{padding:.25rem .75rem;background:#dc2626;color:#fff;border:none;border-radius:9999px;font-size:.75rem;font-weight:600;cursor:pointer;transition:background-color .2s;-webkit-appearance:none;appearance:none}button.qaid-recording-stop:hover{background:#b91c1c}.qaid-video-preview{position:fixed;inset:0 0 auto;height:100vh;height:100dvh;display:flex;align-items:center;justify-content:center;padding:16px;padding-top:max(16px,env(safe-area-inset-top));padding-bottom:max(16px,env(safe-area-inset-bottom));box-sizing:border-box;background:#0009;z-index:99998;animation:qaid-fadeIn .2s ease-out}@keyframes qaid-fadeIn{0%{opacity:0}to{opacity:1}}.qaid-video-preview-box{color-scheme:inherit;background:light-dark(#ffffff,#1f2937);border-radius:1rem;padding:1.5rem;box-shadow:0 25px 50px -12px #00000080;width:560px;max-width:100%;max-height:100%;overflow-y:auto;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px)}.qaid-video-preview-box h3{font-size:1.125rem;font-weight:700;margin:0 0 1rem;color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box video{width:100%;max-height:50vh;max-height:50dvh;object-fit:contain;border-radius:.5rem;background:#000;margin-bottom:1rem}.qaid-video-preview-box textarea{width:100%;height:4rem;padding:.75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;font-family:inherit;font-size:.875rem;resize:vertical;margin-bottom:1rem;box-sizing:border-box;background:light-dark(#ffffff,#111827);color:light-dark(#1f2937,#f9fafb)}.qaid-video-preview-box textarea:focus{outline:none;border-color:var(--qaid-marker);box-shadow:0 0 0 3px color-mix(in srgb,var(--qaid-marker) 20%,transparent)}.qaid-video-preview-actions{display:flex;gap:.5rem;justify-content:flex-end}button.qaid-video-btn{padding:.5rem 1rem;border:none;border-radius:.5rem;font-size:.875rem;font-weight:500;cursor:pointer;transition:background-color .2s,filter .2s;-webkit-appearance:none;appearance:none}button.qaid-video-btn-cancel{background:light-dark(#f3f4f6,#374151);color:light-dark(#374151,#d1d5db)}button.qaid-video-btn-cancel:hover{background:light-dark(#e5e7eb,#4b5563)}button.qaid-video-btn-rerecord{background:light-dark(#fef3c7,#78350f);color:light-dark(#92400e,#fde68a)}button.qaid-video-btn-rerecord:hover{filter:brightness(.9)}button.qaid-video-btn-send{background:var(--qaid-marker);color:var(--qaid-marker-text, white)}button.qaid-video-btn-send:hover{filter:brightness(.85)}button.qaid-video-btn-send:disabled{opacity:.5;cursor:not-allowed}.qaid-video-sending{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:light-dark(#6b7280,#9ca3af)}.qaid-annotate{position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;gap:.75rem;padding:16px;padding-top:max(16px,env(safe-area-inset-top));padding-bottom:max(16px,env(safe-area-inset-bottom));box-sizing:border-box;background:#000000d9;font-family:var(--qaid-font-family, system-ui, -apple-system, sans-serif);font-size:var(--qaid-font-size, 16px);animation:qaid-fadeIn .2s ease-out}.qaid-annotate-title{margin:0;font-size:1rem;font-weight:700;text-align:center;color:#f9fafb}.qaid-annotate-desc{margin:0;font-size:.8125rem;line-height:1.4;text-align:center;color:#f9fafbbf}.qaid-annotate-stage{flex:1 1 auto;min-height:0;display:flex;align-items:center;justify-content:center;overflow:auto}.qaid-annotate-canvas{max-width:100%;max-height:100%;object-fit:contain;background:light-dark(#ffffff,#111827);border-radius:.5rem;box-shadow:0 10px 30px #00000080;touch-action:none;cursor:crosshair}.qaid-annotate-toolbar{display:flex;flex-wrap:wrap;gap:.75rem;align-items:center;justify-content:center;padding:.5rem .75rem;background:light-dark(#ffffff,#1f2937);border-radius:.75rem;box-shadow:0 10px 30px light-dark(rgba(0,0,0,.25),rgba(0,0,0,.5))}.qaid-annotate-tools,.qaid-annotate-actions{display:flex;gap:.375rem;align-items:center}button.qaid-annotate-tool,button.qaid-annotate-action{display:inline-flex;align-items:center;justify-content:center;gap:.375rem;min-width:44px;min-height:44px;padding:0 .75rem;border:1px solid light-dark(#d1d5db,#374151);border-radius:.5rem;background:light-dark(#f9fafb,#111827);color:light-dark(#1f2937,#f9fafb);font-family:inherit;font-size:.8125rem;font-weight:600;cursor:pointer;-webkit-appearance:none;appearance:none;transition:background-color .15s,color .15s,border-color .15s,filter .15s}button.qaid-annotate-tool svg,button.qaid-annotate-action svg{width:20px;height:20px}.qaid-annotate-colors{display:flex;gap:.25rem;align-items:center}button.qaid-annotate-swatch{width:28px;height:28px;min-width:28px;padding:0;border-radius:9999px;border:2px solid light-dark(#d1d5db,#4b5563);background:var(--qaid-swatch, #000);cursor:pointer;-webkit-appearance:none;appearance:none;transition:transform .1s,box-shadow .15s,border-color .15s}button.qaid-annotate-swatch:hover{transform:scale(1.12)}button.qaid-annotate-swatch[aria-pressed=true]{border-color:light-dark(#111827,#f9fafb);box-shadow:0 0 0 2px var(--qaid-swatch)}@media(forced-colors:active){button.qaid-annotate-swatch[aria-pressed=true]{outline:2px solid Highlight;outline-offset:1px}}button.qaid-annotate-tool:hover,button.qaid-annotate-action:hover{background:light-dark(#eef2ff,#312e81)}button.qaid-annotate-tool[aria-pressed=true],button.qaid-annotate-done{background:var(--qaid-marker, #6366f1);color:var(--qaid-marker-text, #fff);border-color:var(--qaid-marker, #6366f1)}button.qaid-annotate-done:hover{filter:brightness(.9);background:var(--qaid-marker, #6366f1)}button.qaid-annotate-action:disabled{opacity:.45;cursor:not-allowed}@media(forced-colors:active){button.qaid-annotate-tool[aria-pressed=true],button.qaid-annotate-done{border:2px solid Highlight}.qaid-annotate-canvas{border:1px solid CanvasText}}button:focus-visible,textarea:focus-visible,a:focus-visible,[tabindex]:focus-visible,[role=button]:focus-visible{outline:2px solid var(--qaid-marker, #6366f1);outline-offset:2px}.qaid-textarea:focus-visible,button.qaid-btn-submit:focus-visible,.qaid-video-preview-box textarea:focus-visible{outline:2px solid var(--qaid-marker, #6366f1);outline-offset:2px}.qaid-buttons.qaid-incognito:focus-within{opacity:1}.qaid-buttons:focus-within .qaid-dismiss-btn,.qaid-dismiss-btn:focus-visible{opacity:1}.qaid-dismiss-btn{min-width:24px;min-height:24px}button.qaid-recording-stop{min-height:24px}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(forced-colors:active){button:focus-visible,textarea:focus-visible,a:focus-visible,[tabindex]:focus-visible,[role=button]:focus-visible,.qaid-textarea:focus,button.qaid-btn-submit:focus,.qaid-video-preview-box textarea:focus{outline:2px solid CanvasText;outline-offset:2px}.qaid-selected-marker,.qaid-highlight-box{border-color:Highlight}}.qaid-confirm{display:flex;flex-direction:column;align-items:center;text-align:center;gap:.5rem;padding:.5rem 0}.qaid-confirm-icon{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:9999px;color:#fff;background:var(--qaid-success, #22c55e);margin-bottom:.25rem;animation:qaid-confirm-pop .28s cubic-bezier(.34,1.56,.64,1)}.qaid-confirm-icon .qaid-icon{width:24px;height:24px}.qaid-confirm-title{margin:0;font-size:1rem;font-weight:600;color:var(--qaid-text, #111827)}.qaid-confirm-title:focus-visible{outline:2px solid var(--qaid-primary, #6366f1);outline-offset:3px;border-radius:4px}.qaid-confirm-message{margin:0;font-size:.875rem;color:var(--qaid-text-muted, #6b7280)}.qaid-confirm .qaid-confirm-close{margin-top:.5rem;min-width:96px}@keyframes qaid-confirm-pop{0%{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}@media(prefers-reduced-motion:reduce){.qaid-confirm-icon{animation:none}}", ie = "body.qaid-targeting,body.qaid-targeting *{cursor:none!important}";
let I = 0;
const oe = "button.qaid-btn{width:var(--qaid-btn-size);height:var(--qaid-btn-size);border-radius:50%;border:none;background:#f3f4f6;color:#374151;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);transition:background-color .2s,color .2s,transform .2s;-webkit-appearance:none;appearance:none;--qaid-hover-up-bg:var(--qaid-positive);--qaid-hover-up-color:#fff;--qaid-hover-down-bg:var(--qaid-negative);--qaid-hover-down-color:#fff}button.qaid-btn:hover{transform:scale(1.05)}button.qaid-btn-up:hover{background:var(--qaid-hover-up-bg);color:var(--qaid-hover-up-color)}button.qaid-btn-down:hover{background:var(--qaid-hover-down-bg);color:var(--qaid-hover-down-color)}button.qaid-btn-feedback:hover{background:var(--qaid-marker,#6366f1);color:var(--qaid-marker-text,#fff)}button.qaid-btn svg{width:var(--qaid-icon-size);height:var(--qaid-icon-size)}", ne = {
  small: 36,
  medium: 48,
  large: 64
}, se = {
  small: 18,
  medium: 24,
  large: 32
};
function ae(i, t, e) {
  const [o, n, s] = [i, t, e].map((a) => (a = a / 255, a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4)));
  return 0.2126 * o + 0.7152 * n + 0.0722 * s;
}
function re(i) {
  if (i.startsWith("#")) {
    const e = i.slice(1), o = e.length === 3 ? e.split("").map((s) => s + s).join("") : e, n = parseInt(o, 16);
    return {
      r: n >> 16 & 255,
      g: n >> 8 & 255,
      b: n & 255
    };
  }
  const t = i.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  return t ? {
    r: parseInt(t[1]),
    g: parseInt(t[2]),
    b: parseInt(t[3])
  } : null;
}
function de(i) {
  const t = re(i);
  return t && ae(t.r, t.g, t.b) > 0.4 ? "black" : "white";
}
function ce(i = {}) {
  const {
    positiveColor: t = "rgb(0, 200, 83)",
    negativeColor: e = "rgb(255, 0, 0)",
    markerColor: o = "#6366f1",
    buttonSize: n = "medium",
    modalWidth: s = 400,
    backdropOpacity: a = 0.3,
    fontFamily: c = "system-ui, -apple-system, sans-serif",
    fontSize: l = 16
  } = i, d = ne[n], r = se[n], h = de(o);
  return {
    "--qaid-positive": t,
    "--qaid-negative": e,
    "--qaid-marker": o,
    "--qaid-marker-text": h,
    "--qaid-btn-size": `${d}px`,
    "--qaid-icon-size": `${r}px`,
    "--qaid-modal-width": `${s}px`,
    "--qaid-backdrop-opacity": String(a),
    "--qaid-font-family": c,
    "--qaid-font-size": `${l}px`
  };
}
function le(i, t) {
  for (const [e, o] of Object.entries(t))
    i.style.setProperty(e, o);
}
function Z() {
  return ee + oe;
}
function he() {
  if (I++, I > 1) return;
  const i = document.createElement("style");
  i.id = "qaid-styles", i.textContent = ie, document.head.appendChild(i);
}
function ue() {
  I <= 0 || (I--, I === 0 && document.getElementById("qaid-styles")?.remove());
}
const tt = "data-qaid-a11y-live", pe = "position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;", fe = [
  "a[href]",
  "button",
  "input",
  "textarea",
  "select",
  "[tabindex]"
].join(",");
function me(i) {
  return i.ownerDocument || document;
}
function be(i, t) {
  const e = t ? "assertive" : "polite", o = i.querySelector(
    `[${tt}="${e}"]`
  );
  if (o) return o;
  const s = me(i).createElement("div");
  return s.setAttribute(tt, e), s.setAttribute("role", t ? "alert" : "status"), s.setAttribute("aria-live", t ? "assertive" : "polite"), s.setAttribute("aria-atomic", "true"), s.style.cssText = pe, i.appendChild(s), s;
}
function ge(i, t, e = {}) {
  const o = be(i, !!e.assertive);
  o.textContent = "", o.textContent = t;
}
function ve(i) {
  return i.hasAttribute("disabled") ? !0 : i.disabled === !0;
}
function ye(i) {
  let t = i;
  for (; t; ) {
    if (t.hasAttribute("hidden")) return !0;
    const e = t.style;
    if (e && (e.display === "none" || e.visibility === "hidden" || e.visibility === "collapse"))
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function et(i) {
  return Array.from(
    i.querySelectorAll(fe)
  ).filter((e) => !(e.getAttribute("tabindex") === "-1" || e instanceof HTMLInputElement && e.type === "hidden" || e instanceof HTMLAnchorElement && !e.getAttribute("href") || ve(e) || ye(e)));
}
function yt(i) {
  let t = i.activeElement;
  for (; t && t.shadowRoot && t.shadowRoot.activeElement; )
    t = t.shadowRoot.activeElement;
  return t instanceof HTMLElement ? t : null;
}
function we(i) {
  const t = i.ownerDocument || document;
  let e = !1;
  const o = (s) => {
    if (s.key !== "Tab") return;
    const a = et(i);
    if (a.length === 0) {
      s.preventDefault(), i.focus();
      return;
    }
    const c = a[0], l = a[a.length - 1], d = yt(t), r = d ? a.indexOf(d) !== -1 : !1;
    s.shiftKey ? (!r || d === c) && (s.preventDefault(), l.focus()) : (!r || d === l) && (s.preventDefault(), c.focus());
  };
  i.addEventListener("keydown", o);
  const n = et(i);
  return n.length > 0 ? n[0].focus() : (i.hasAttribute("tabindex") || (i.setAttribute("tabindex", "-1"), e = !0), i.focus()), {
    release() {
      i.removeEventListener("keydown", o), e && (i.removeAttribute("tabindex"), e = !1);
    }
  };
}
function ke() {
  return yt(document);
}
function xe(i) {
  if (!(!i || typeof i.focus != "function"))
    try {
      i.focus();
    } catch {
    }
}
function qe(i, t = {}) {
  i.setAttribute("role", "dialog"), i.setAttribute("aria-modal", "true"), t.labelledbyId && i.setAttribute("aria-labelledby", t.labelledbyId), t.describedbyId && i.setAttribute("aria-describedby", t.describedbyId), t.label && i.setAttribute("aria-label", t.label);
}
function Ce(i, t) {
  let e = i;
  for (; e && e !== t; ) {
    const o = e.parentNode;
    if (o === t) return e;
    if (o && o.host) {
      e = o.host;
      continue;
    }
    if (!o) return null;
    e = o;
  }
  return null;
}
function Se(i) {
  const e = (i.ownerDocument || document).body;
  if (!e) return () => {
  };
  const o = Ce(i, e), n = [];
  return Array.from(e.children).forEach((s) => {
    if (!(s instanceof HTMLElement) || o && s === o) return;
    const a = s.inert === !0, c = s.getAttribute("aria-hidden");
    a && c === "true" || (s.inert = !0, s.setAttribute("aria-hidden", "true"), n.push({ el: s, prevInert: a, prevAriaHidden: c }));
  }), function() {
    for (; n.length; ) {
      const a = n.pop();
      a.el.inert = a.prevInert, a.prevAriaHidden === null ? a.el.removeAttribute("aria-hidden") : a.el.setAttribute("aria-hidden", a.prevAriaHidden);
    }
  };
}
const wt = {
  width: 400,
  height: 280,
  arrowHeight: 12,
  gap: 8,
  viewportPadding: 16
};
function Ee(i, t, e, o, n) {
  const s = i.y, a = t - (i.y + i.height);
  if (a >= e + o)
    return {
      top: i.y + i.height + o,
      position: "below"
    };
  if (s >= e + o)
    return {
      top: i.y - e - o,
      position: "above"
    };
  const c = a > s ? "below" : "above";
  let l;
  return c === "below" ? l = Math.min(
    i.y + i.height + o,
    t - e - n
  ) : l = Math.max(n, i.y - e - o), { top: l, position: c };
}
function Te(i, t, e, o) {
  let s = i.x + i.width / 2 - e / 2;
  return s = Math.max(o, Math.min(s, t - e - o)), s;
}
function Ae(i, t, e, o = 24, n = 24) {
  const a = i.clickX - t - n / 2;
  return Math.max(o, Math.min(a, e - o - n / 2));
}
function Le(i, t, e, o = wt) {
  const n = o.height + o.arrowHeight, s = Ee(
    i,
    e,
    n,
    o.gap,
    o.viewportPadding
  ), a = Te(
    i,
    t,
    o.width,
    o.viewportPadding
  );
  return {
    top: s.top,
    left: a,
    position: s.position
  };
}
function Ie(i, t, e, o = {}) {
  const n = o.gap ?? 8;
  let s = i.bottom + n;
  s + t.height > e.height - n && (s = i.top - t.height - n);
  let a = i.left;
  return a < n ? a = n : a + t.width > e.width - n && (a = e.width - t.width - n), s < n ? s = n : s + t.height > e.height - n && (s = e.height - t.height - n), { top: s, left: a };
}
function De(i, t, e, o = wt) {
  const n = Le(i, t, e, o), s = Ae(
    i,
    n.left,
    o.width
  );
  return {
    modal: n,
    arrow: { left: s }
  };
}
const Me = 20;
function Re(i) {
  const t = [], e = console.error, o = console.warn, n = console.log, s = (a, c) => {
    const l = {
      message: c.map((d) => String(d)).join(" "),
      timestamp: Date.now(),
      level: a
    };
    t.length >= Me && t.shift(), t.push(l), i && i(l);
  };
  return console.error = function(...a) {
    s("error", a), e.apply(console, a);
  }, console.warn = function(...a) {
    s("warn", a), o.apply(console, a);
  }, console.log = function(...a) {
    s("log", a), n.apply(console, a);
  }, {
    errors: t,
    restore: () => {
      console.error = e, console.warn = o, console.log = n;
    }
  };
}
function q(i, t, e) {
  const o = document.createElement(i);
  if (t)
    for (const [n, s] of Object.entries(t))
      n === "className" ? o.className = s : o.setAttribute(n, s);
  return o;
}
function Pe(i = 640) {
  return typeof window < "u" && window.innerWidth < i;
}
function it(i, t, e) {
  const o = e.map((s) => s.style.visibility);
  e.forEach((s) => s.style.visibility = "hidden");
  const n = document.elementFromPoint(i, t);
  return e.forEach((s, a) => s.style.visibility = o[a]), n;
}
function M(i) {
  return i ? i.hasAttribute("data-qaid-embed") || i.hasAttribute("data-qaid-embed-overlay") ? !0 : !!i.closest("[data-qaid-embed], [data-qaid-embed-overlay]") : !1;
}
function ot(i, t = 0) {
  const e = i.getBoundingClientRect();
  return {
    x: e.left - t,
    y: e.top - t,
    width: e.width + t * 2,
    height: e.height + t * 2
  };
}
const Be = "https://unpkg.com/@qaiddev/quests-embed@1/dist/qaid-quests.js", He = (i) => (
  // The URL is a runtime value, not a static specifier — keep Vite from
  // trying to analyze/bundle it.
  import(
    /* @vite-ignore */
    i
  )
);
let Oe = He, A = null, _ = null;
function $e(i) {
  return A && _ === i || (_ = i, A = Promise.resolve(Oe(i)).then((t) => {
    const e = t;
    if (!e || typeof e.QaidQuests != "function")
      throw new Error("quests module has no QaidQuests export");
    return e;
  }).catch((t) => {
    throw A = null, _ = null, t;
  })), A;
}
async function ze(i) {
  const t = await $e(i.moduleUrl), e = i.base.replace(/\/+$/, ""), o = i.feedbackId != null ? { feedbackId: i.feedbackId } : void 0;
  return new t.QaidQuests({
    endpoint: `${e}/responses`,
    configUrl: `${e}/${encodeURIComponent(i.questId)}/definition`,
    apiKey: i.apiKey || void 0,
    metadata: o,
    onClose: i.onClose
  });
}
const nt = "qaid_visitor_id", st = "qaid_hide_feedback", _e = [
  "#ef4444",
  "#f59e0b",
  "#22c55e",
  "#3b82f6",
  "#111827",
  "#ffffff"
];
function Fe() {
  return typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches;
}
function U(i) {
  return i ? `${st}_${i}` : st;
}
function Ve(i) {
  try {
    return localStorage.getItem(U(i)) === "1";
  } catch {
    return !1;
  }
}
function at(i, t = !0) {
  try {
    t ? localStorage.setItem(U(i), "1") : localStorage.removeItem(U(i));
  } catch {
  }
}
function Ne() {
  try {
    let i = localStorage.getItem(nt);
    return i || (i = crypto.randomUUID(), localStorage.setItem(nt, i)), i;
  } catch {
    return crypto.randomUUID();
  }
}
class Ue {
  config;
  state = "IDLE";
  feedbackData = {
    feedbackType: null,
    elementSelector: null,
    elementText: null,
    consoleErrors: []
  };
  selectedBounds = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    clickX: 0,
    clickY: 0,
    visible: !1
  };
  feedbackId = null;
  // A quest launched from a button (in place of the message box), if any.
  activeQuest = null;
  isMobile = !1;
  visitorId;
  // Console capture
  consoleCapture = null;
  // Video recording — the whole subsystem lives in a lazily-loaded chunk
  // (recording.ts); a thumbs-only visitor never downloads it.
  recording = null;
  // Element targeting — also a lazily-loaded chunk (targeting.ts).
  targeting = null;
  targetingPrewarmed = !1;
  // Preload-on-intent: warm the lazily-split feature chunks before first use.
  prewarmHandle = null;
  prewarmIsTimeout = !1;
  videoPrewarmed = !1;
  screenshotPrewarmed = !1;
  // Shadow DOM
  shadowHost = null;
  shadowRoot = null;
  // Overlay shadow DOM (always on document.body for full-page coverage)
  overlayShadowHost = null;
  overlayShadowRoot = null;
  // DOM elements (inside shadow root)
  buttonsContainer = null;
  isUserProvidedContainer = !1;
  // The message modal lives in a lazily-loaded chunk (modal.ts).
  modal = null;
  modalPrewarmed = !1;
  dismissBtn = null;
  // Per-instance CSS variables
  cssVars = {};
  activeThumbBtn = null;
  // Tracks whether the pending activation came from the keyboard (Enter/Space)
  // rather than a pointer, so targeting can avoid elementFromPoint(0,0).
  keyboardActivation = !1;
  // Accessibility: dialog focus management
  dialogTrigger = null;
  dialogTrap = null;
  dialogRestoreInert = null;
  // Unique id suffix for aria-labelledby/describedby references
  uid = Math.random().toString(36).slice(2, 9);
  // Bound event handlers
  boundKeyDown;
  boundResize;
  // Start with buttons slid off-screen (localStorage dismiss, no animation)
  _startDismissed = !1;
  // DOM persistence (survives framework client-side navigation)
  destroyed = !1;
  domObserver = null;
  boundBeforeSwap = null;
  constructor(t) {
    this.config = {
      endpoint: t.endpoint,
      apiKey: t.apiKey ?? "",
      container: t.container ?? "",
      buttonClass: t.buttonClass ?? "",
      direction: t.direction ?? "horizontal",
      position: t.position ?? "bottom-right",
      offset: {
        x: t.offset?.x ?? 16,
        y: t.offset?.y ?? 16
      },
      zIndex: t.zIndex ?? 50,
      skipTargeting: t.skipTargeting ?? !1,
      singleButton: t.singleButton ?? !1,
      feedbackMode: t.feedbackMode ?? "target",
      colors: {
        positive: t.colors?.positive ?? "rgb(0, 200, 83)",
        negative: t.colors?.negative ?? "rgb(255, 0, 0)",
        marker: t.colors?.marker ?? "#6366f1"
      },
      buttonSize: t.buttonSize ?? "medium",
      text: {
        tooltip: t.text?.tooltip ?? "",
        modalTitle: t.text?.modalTitle ?? "Thank you for your feedback!",
        modalSubtitle: t.text?.modalSubtitle ?? "Would you like to add a message to help us understand your feedback better?",
        placeholder: t.text?.placeholder ?? "Optional: Tell us more about your experience...",
        submitButton: t.text?.submitButton ?? "Submit",
        skipButton: t.text?.skipButton ?? "Skip",
        positiveLabel: t.text?.positiveLabel ?? "Send positive feedback",
        negativeLabel: t.text?.negativeLabel ?? "Send negative feedback",
        recordLabel: t.text?.recordLabel ?? "Record a screen recording",
        dismissLabel: t.text?.dismissLabel ?? "Hide Feedback",
        feedbackLabel: t.text?.feedbackLabel ?? "Send feedback",
        confirmationTitle: t.text?.confirmationTitle ?? "Thank you!",
        confirmationMessage: t.text?.confirmationMessage ?? "Your feedback has been received.",
        confirmationClose: t.text?.confirmationClose ?? "Close"
      },
      hideConfirmation: t.hideConfirmation ?? !1,
      modalWidth: t.modalWidth ?? 400,
      backdropOpacity: t.backdropOpacity ?? 0.3,
      fontFamily: t.fontFamily ?? "system-ui, -apple-system, sans-serif",
      fontSize: t.fontSize ?? 16,
      captureScreenshot: t.captureScreenshot ?? !1,
      annotate: t.annotate ?? !0,
      annotationColor: t.annotationColor ?? t.colors?.marker ?? "#6366f1",
      annotationPalette: t.annotationPalette ?? _e,
      screenshotMethod: t.screenshotMethod ?? "permission",
      screenshotOptions: {
        quality: t.screenshotOptions?.quality ?? 0.8,
        maxWidth: t.screenshotOptions?.maxWidth ?? 1280,
        maxHeight: t.screenshotOptions?.maxHeight ?? 800
      },
      incognito: t.incognito ?? !1,
      hideDismiss: t.hideDismiss ?? !1,
      positiveIcon: t.positiveIcon ?? "",
      negativeIcon: t.negativeIcon ?? "",
      feedbackIcon: t.feedbackIcon ?? "",
      hideThumbs: t.hideThumbs ?? !1,
      css: t.css ?? "",
      captureVideo: t.captureVideo ?? !1,
      videoOptions: {
        maxDuration: t.videoOptions?.maxDuration ?? 15,
        redaction: t.videoOptions?.redaction ?? !1
      },
      recordIcon: t.recordIcon ?? "",
      quests: {
        base: t.quests?.base ?? "",
        up: t.quests?.up ?? "",
        down: t.quests?.down ?? "",
        video: t.quests?.video ?? "",
        // Quest service reuses the feedback API key unless overridden.
        apiKey: t.quests?.apiKey ?? t.apiKey ?? "",
        moduleUrl: t.quests?.moduleUrl ?? Be
      }
    }, this.boundKeyDown = this.handleKeyDown.bind(this), this.boundResize = this.handleResize.bind(this), this.visitorId = Ne(), this.init();
  }
  applyVars(t) {
    le(t, this.cssVars);
  }
  /**
   * Announce a message via the shared visually-hidden live regions.
   * Prefer the overlay shadow root (which hosts every transient surface and
   * is never inerted by its own dialogs) so announcements are not suppressed
   * while a dialog aria-hides the main button host.
   */
  announceMsg(t, e = !1) {
    const o = this.overlayShadowRoot ?? this.shadowRoot;
    o && ge(o, t, { assertive: e });
  }
  /**
   * Turn a transient surface into an accessible modal dialog: save the
   * invoking control, apply dialog semantics, trap focus, and inert the
   * background. Paired with closeDialogA11y() on every close path.
   */
  openDialogA11y(t, e) {
    this.dialogTrigger = ke(), qe(t, e), this.dialogTrap = we(t), this.dialogRestoreInert = Se(t);
  }
  closeDialogA11y() {
    this.dialogTrap?.release(), this.dialogTrap = null, this.dialogRestoreInert && (this.dialogRestoreInert(), this.dialogRestoreInert = null), xe(this.dialogTrigger), this.dialogTrigger = null;
  }
  clearActiveThumb() {
    this.activeThumbBtn && (this.activeThumbBtn.setAttribute("aria-pressed", "false"), this.activeThumbBtn = null);
  }
  init() {
    he(), this.cssVars = ce({
      positiveColor: this.config.colors.positive,
      negativeColor: this.config.colors.negative,
      markerColor: this.config.colors.marker,
      buttonSize: this.config.buttonSize,
      modalWidth: this.config.modalWidth,
      backdropOpacity: this.config.backdropOpacity,
      fontFamily: this.config.fontFamily,
      fontSize: this.config.fontSize
    }), !this.config.hideDismiss && Ve(this.config.apiKey) && (this._startDismissed = !0), this.checkMobile(), window.addEventListener("resize", this.boundResize), this.createEmbed(), this.consoleCapture = Re((t) => {
      this.feedbackData.consoleErrors = this.consoleCapture?.errors ?? [];
    }), this.feedbackData.consoleErrors = this.consoleCapture.errors, this.observeDom(), (this.config.captureVideo && this.videoSupported() || this.config.captureScreenshot) && this.schedulePrewarm(() => {
      this.config.captureVideo && this.videoSupported() && this.prewarmVideo(), this.config.captureScreenshot && this.prewarmScreenshot();
    });
  }
  /**
   * Best-effort preload of a lazily-split feature chunk so its first use is
   * instant. Warming fetches + compiles (and defines) the module; the feature
   * modules have no load-time side effects, so this is safe. Errors are
   * swallowed — a failed preload just falls back to an on-demand load.
   */
  prewarmVideo() {
    this.videoPrewarmed || (this.videoPrewarmed = !0, Promise.resolve().then(() => pt).catch(() => {
    }), Promise.resolve().then(() => St).catch(() => {
    }));
  }
  prewarmScreenshot() {
    this.screenshotPrewarmed || (this.screenshotPrewarmed = !0, (this.shouldCaptureViaDom() ? Promise.resolve().then(() => lt) : Promise.resolve().then(() => ft)).catch(() => {
    }), this.config.annotate && Promise.resolve().then(() => ut).catch(() => {
    }));
  }
  /** Run fn when the main thread is idle; cancelled by destroy(). */
  schedulePrewarm(t) {
    const e = window, o = () => {
      this.destroyed || t();
    };
    typeof e.requestIdleCallback == "function" ? (this.prewarmIsTimeout = !1, this.prewarmHandle = e.requestIdleCallback(o, { timeout: 2e3 })) : (this.prewarmIsTimeout = !0, this.prewarmHandle = window.setTimeout(o, 1200));
  }
  /**
   * Watch for the shadow hosts being removed from the DOM by framework
   * client-side navigation (e.g. Astro View Transitions swapping <body>
   * contents, or any SPA router that replaces DOM subtrees). If the host
   * is disconnected and destroy() wasn't called, re-append it.
   *
   * Also hooks into Astro's `astro:before-swap` when available, which
   * lets us carry elements into the new document before the swap happens
   * (avoids a flash of the widget disappearing and reappearing).
   */
  observeDom() {
    this.boundBeforeSwap = (t) => {
      const e = t.newDocument;
      !e || this.destroyed || (this.shadowHost && e.body.appendChild(this.shadowHost), this.overlayShadowHost && e.body.appendChild(this.overlayShadowHost));
    }, document.addEventListener("astro:before-swap", this.boundBeforeSwap), this.domObserver = new MutationObserver(() => {
      this.destroyed || (this.shadowHost && !this.shadowHost.isConnected && document.body.appendChild(this.shadowHost), this.overlayShadowHost && !this.overlayShadowHost.isConnected && document.body.appendChild(this.overlayShadowHost));
    }), this.domObserver.observe(document.body, { childList: !0 });
  }
  checkMobile() {
    this.isMobile = Pe();
  }
  handleResize() {
    this.checkMobile();
  }
  createEmbed() {
    this.shadowHost = document.createElement("div"), this.shadowHost.setAttribute("data-qaid-embed", ""), this.shadowHost.style.position = "static", this.shadowHost.style.display = "contents";
    let t = null;
    this.config.container && (t = document.querySelector(this.config.container)), t ? (t.appendChild(this.shadowHost), this.isUserProvidedContainer = !0, this.config.hideDismiss = !0) : (this.shadowHost.style.position = "fixed", this.shadowHost.style.display = "block", this.shadowHost.style.inset = "0", this.shadowHost.style.pointerEvents = "none", this.shadowHost.style.zIndex = String(this.config.zIndex), document.body.appendChild(this.shadowHost)), this.shadowRoot = this.shadowHost.attachShadow({ mode: "open" });
    const e = document.createElement("style");
    if (e.textContent = Z(), this.shadowRoot.appendChild(e), this.config.css) {
      const d = document.createElement("style");
      d.textContent = this.config.css, this.shadowRoot.appendChild(d);
    }
    const o = this.config.direction === "vertical" ? "qaid-vertical" : "";
    if (this.isUserProvidedContainer)
      this.buttonsContainer = document.createElement("div"), this.buttonsContainer.className = `qaid-buttons qaid-${this.config.position} ${o}`.trim(), this.config.incognito && this.buttonsContainer.classList.add("qaid-incognito");
    else {
      this.buttonsContainer = document.createElement("div"), this.buttonsContainer.className = `qaid-buttons qaid-auto-container qaid-${this.config.position} ${o}${this.config.incognito ? " qaid-incognito" : ""}`.trim(), this.buttonsContainer.style.pointerEvents = "auto";
      const { x: d, y: r } = this.config.offset;
      this.config.position.includes("right") ? this.buttonsContainer.style.right = `${d}px` : this.buttonsContainer.style.left = `${d}px`, this.config.position.includes("bottom") ? this.buttonsContainer.style.bottom = `${r}px` : this.buttonsContainer.style.top = `${r}px`;
    }
    this.applyVars(this.buttonsContainer), this.shadowRoot.appendChild(this.buttonsContainer), this.buttonsContainer.addEventListener("keydown", (d) => {
      (d.key === "Enter" || d.key === " " || d.key === "Spacebar") && (this.keyboardActivation = !0);
    }), this.buttonsContainer.addEventListener("mousedown", () => {
      this.keyboardActivation = !1;
    }), this.buttonsContainer.addEventListener("pointerdown", () => {
      this.keyboardActivation = !1;
    });
    const n = !!this.config.buttonClass, s = n ? `qaid-btn-structural ${this.config.buttonClass}` : "qaid-btn", c = this.config.text.tooltip || "Feedback for us?", l = document.createElement("div");
    if (l.className = "qaid-tooltip-text", l.textContent = c, this.applyVars(l), this.shadowRoot.appendChild(l), this.tooltipElement = l, this.config.singleButton) {
      const d = document.createElement("div");
      d.className = "qaid-tooltip-wrapper";
      const r = document.createElement("button");
      r.type = "button", r.className = n ? `${s} qaid-btn-feedback` : "qaid-btn qaid-btn-feedback", r.setAttribute("aria-label", this.config.text.feedbackLabel), r.innerHTML = this.config.feedbackIcon || gt, r.addEventListener("click", (h) => this.handleThumbClick("neutral", h.currentTarget, h)), r.addEventListener("mouseenter", () => {
        this.prewarmTargeting(), this.showTooltip(r);
      }), r.addEventListener("mouseleave", () => this.hideTooltip()), d.appendChild(r), this.buttonsContainer.appendChild(d);
    } else if (!this.config.hideThumbs) {
      const d = document.createElement("div");
      d.className = "qaid-tooltip-wrapper";
      const r = document.createElement("button");
      r.type = "button", r.className = n ? `${s} qaid-btn-up` : "qaid-btn qaid-btn-up", r.setAttribute("aria-label", this.config.text.positiveLabel), r.innerHTML = this.config.positiveIcon || V, r.addEventListener("click", (b) => this.handleThumbClick("up", b.currentTarget, b)), r.addEventListener("mouseenter", () => {
        this.prewarmTargeting(), this.showTooltip(r);
      }), r.addEventListener("mouseleave", () => this.hideTooltip()), d.appendChild(r);
      const h = document.createElement("div");
      h.className = "qaid-tooltip-wrapper";
      const p = document.createElement("button");
      p.type = "button", p.className = n ? `${s} qaid-btn-down` : "qaid-btn qaid-btn-down", p.setAttribute("aria-label", this.config.text.negativeLabel), p.innerHTML = this.config.negativeIcon || N, p.addEventListener("click", (b) => this.handleThumbClick("down", b.currentTarget, b)), p.addEventListener("mouseenter", () => {
        this.prewarmTargeting(), this.showTooltip(p);
      }), p.addEventListener("mouseleave", () => this.hideTooltip()), h.appendChild(p), this.buttonsContainer.appendChild(d), this.buttonsContainer.appendChild(h);
    }
    if (this.config.captureVideo && this.videoSupported()) {
      const d = document.createElement("div");
      d.className = "qaid-tooltip-wrapper";
      const r = document.createElement("button");
      r.type = "button", r.className = n ? `${s} qaid-btn-record` : "qaid-btn qaid-btn-record", r.setAttribute("aria-label", this.config.text.recordLabel), r.innerHTML = this.config.recordIcon || Xt, r.addEventListener("click", () => {
        this.ensureRecording().then(
          (p) => this.config.videoOptions.redaction ? p.startPicking() : p.startRecording()
        );
      });
      const h = () => this.prewarmVideo();
      r.addEventListener("mouseenter", () => {
        h(), this.showTooltip(r);
      }), r.addEventListener("focus", h), r.addEventListener("touchstart", h, { passive: !0 }), r.addEventListener("mouseleave", () => this.hideTooltip()), d.appendChild(r), this.buttonsContainer.appendChild(d);
    }
    this.config.hideDismiss || (this.dismissBtn = document.createElement("button"), this.dismissBtn.type = "button", this.dismissBtn.className = "qaid-dismiss-btn", this.dismissBtn.setAttribute("aria-label", this.config.text.dismissLabel), this.dismissBtn.title = this.config.text.dismissLabel, this.dismissBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>', this.dismissBtn.addEventListener("click", (d) => {
      d.stopPropagation(), this.handleDismiss();
    }), this.buttonsContainer.insertBefore(this.dismissBtn, this.buttonsContainer.firstChild), this._startDismissed && this.buttonsContainer.classList.add("qaid-dismissed"));
  }
  /**
   * Lazily create a separate overlay shadow host on document.body.
   * This host contains all full-page elements (targeting overlay, marker,
   * backdrop, modal, recording indicator, video preview) so they escape
   * clip-path / transform containing blocks in user containers.
   */
  ensureOverlayHost() {
    if (this.overlayShadowRoot) return this.overlayShadowRoot;
    this.overlayShadowHost = document.createElement("div"), this.overlayShadowHost.setAttribute("data-qaid-embed-overlay", ""), this.overlayShadowHost.style.position = "fixed", this.overlayShadowHost.style.inset = "0", this.overlayShadowHost.style.pointerEvents = "none", this.overlayShadowHost.style.zIndex = String(this.config.zIndex), document.body.appendChild(this.overlayShadowHost), this.overlayShadowRoot = this.overlayShadowHost.attachShadow({ mode: "open" });
    const t = document.createElement("style");
    if (t.textContent = Z(), this.overlayShadowRoot.appendChild(t), this.config.css) {
      const e = document.createElement("style");
      e.textContent = this.config.css, this.overlayShadowRoot.appendChild(e);
    }
    return this.overlayShadowRoot;
  }
  tooltipElement = null;
  showTooltip(t) {
    const e = this.tooltipElement;
    e.style.visibility = "hidden", e.classList.add("qaid-tooltip-visible");
    const o = t.getBoundingClientRect(), n = e.getBoundingClientRect(), { top: s, left: a } = Ie(
      o,
      n,
      { width: window.innerWidth, height: window.innerHeight }
    );
    e.style.top = `${s}px`, e.style.left = `${a}px`, e.style.visibility = "visible";
  }
  hideTooltip() {
    this.tooltipElement.classList.remove("qaid-tooltip-visible");
  }
  handleDismiss() {
    this.buttonsContainer.classList.add("qaid-dismissed"), at(this.config.apiKey, !0);
  }
  handleThumbClick(t, e, o) {
    if (this.buttonsContainer?.classList.contains("qaid-incognito") && (this.buttonsContainer.classList.remove("qaid-incognito"), at(this.config.apiKey, !1)), this.prewarmModal(), this.config.skipTargeting || this.config.feedbackMode === "annotate")
      this.submitDirectFeedback(t, e);
    else {
      this.activeThumbBtn = e, e.setAttribute("aria-pressed", "true");
      const n = this.keyboardActivation;
      this.keyboardActivation = !1, this.ensureTargeting().then((s) => {
        this.destroyed || (n ? s.startKeyboard(t) : s.startPointer(t, o));
      });
    }
  }
  submitDirectFeedback(t, e) {
    this.feedbackData.feedbackType = t, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null;
    const o = e.getBoundingClientRect();
    this.selectedBounds = {
      x: o.left,
      y: o.top,
      width: o.width,
      height: o.height,
      clickX: o.left + o.width / 2,
      clickY: o.top + o.height / 2,
      visible: !1
    }, this.submitFeedback();
  }
  handleKeyDown(t) {
    if (t.key === "Escape") {
      if (this.recording?.handleEscape()) return;
      this.state === "TARGETING" ? this.targeting?.cancel() : this.state === "MODAL_OPEN" && this.modal?.close();
    }
  }
  /** Whether to capture the screenshot with the DOM/canvas method (html2canvas)
   *  instead of the permission-based Screen Capture API. Explicit "dom" wins;
   *  otherwise DOM is used on touch devices to avoid the getDisplayMedia prompt. */
  shouldCaptureViaDom() {
    return this.config.screenshotMethod === "dom" || Fe();
  }
  /**
   * Open the full-screen annotation editor over the captured screenshot,
   * reusing the overlay shadow host and the shared dialog a11y helpers.
   * Resolves with the composited WebP data URL, or null when the user skips
   * (caller keeps the original). Pointer events on the overlay host are
   * enabled while the editor is open and restored on close.
   */
  async openAnnotationEditor(t) {
    const e = this.ensureOverlayHost(), o = this.overlayShadowHost, n = o.style.pointerEvents;
    o.style.pointerEvents = "auto";
    try {
      const { openAnnotationEditor: s } = await Promise.resolve().then(() => ut);
      return await s({
        dataUrl: t,
        root: e,
        quality: this.config.screenshotOptions.quality,
        color: this.config.annotationColor,
        palette: this.config.annotationPalette,
        applyVars: (a) => this.applyVars(a),
        announce: (a, c) => this.announceMsg(a, c),
        openDialog: (a, c) => this.openDialogA11y(a, c),
        closeDialog: () => this.closeDialogA11y()
      });
    } catch (s) {
      return console.error("Annotation editor failed to open:", s), null;
    } finally {
      o.style.pointerEvents = n;
    }
  }
  async submitFeedback() {
    let t = null;
    if (this.config.captureScreenshot || this.config.feedbackMode === "annotate")
      try {
        if (this.shouldCaptureViaDom()) {
          const { captureDomScreenshot: a } = await Promise.resolve().then(() => lt);
          t = await a(this.config.screenshotOptions);
        } else {
          const { captureScreenshot: a } = await Promise.resolve().then(() => ft);
          t = await a(this.config.screenshotOptions);
        }
        t && this.announceMsg("Screenshot captured");
      } catch (a) {
        console.error("Screenshot capture failed:", a), t = null;
      }
    t && this.config.annotate && (t = await this.openAnnotationEditor(t) ?? t);
    const o = this.feedbackData.elementSelector ? {
      x: this.selectedBounds.x,
      y: this.selectedBounds.y,
      width: this.selectedBounds.width,
      height: this.selectedBounds.height
    } : null, n = {
      feedbackType: this.feedbackData.feedbackType,
      pageUrl: window.location.href,
      apiKey: this.config.apiKey || void 0,
      elementSelector: this.feedbackData.elementSelector,
      elementText: this.feedbackData.elementText,
      consoleErrors: [...this.feedbackData.consoleErrors],
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      clickX: this.selectedBounds.clickX,
      clickY: this.selectedBounds.clickY,
      scrollX: window.scrollX,
      scrollY: window.scrollY,
      screenshot: t,
      visitorId: this.visitorId,
      // Include element bounds and user agent for server-side screenshot fallback
      elementBounds: o,
      userAgent: navigator.userAgent
    };
    try {
      const a = await fetch(this.config.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(n)
      });
      if (a.ok) {
        const c = await a.json();
        this.feedbackId = c.id, this.announceMsg("Feedback sent");
      }
    } catch (a) {
      console.error("Failed to submit feedback:", a), this.announceMsg("Failed to send feedback", !0);
    }
    const s = this.feedbackData.feedbackType;
    if (s && s !== "neutral" && await this.tryLaunchQuest(s, this.feedbackId)) {
      this.resetFeedbackUi();
      return;
    }
    this.state = "MODAL_OPEN";
    try {
      const a = await this.ensureModal();
      if (this.destroyed) return;
      a.open(), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "auto");
    } catch (a) {
      console.error("Failed to open the feedback modal:", a), this.announceMsg("Thank you for your feedback!", !0), this.resetFeedbackUi();
    }
  }
  /**
   * Quest id linked to `type`, or "" when quest launching is disabled
   * (no `base`) or this button has no quest configured.
   */
  questIdFor(t) {
    const e = this.config.quests;
    return e.base && e[t] || "";
  }
  /**
   * Launch the quest linked to `type`, if any. Resolves `true` when a quest
   * was configured and the widget launched; `false` when no quest is
   * configured or the widget failed to load (caller falls back to its
   * normal UI). The created feedback record id is passed through so the
   * quest response can be joined back to it server-side.
   */
  async tryLaunchQuest(t, e) {
    const o = this.questIdFor(t);
    if (!o) return !1;
    try {
      return this.activeQuest?.destroy(), this.activeQuest = await ze({
        questId: o,
        base: this.config.quests.base,
        apiKey: this.config.quests.apiKey || void 0,
        moduleUrl: this.config.quests.moduleUrl,
        feedbackId: e,
        onClose: () => {
          this.activeQuest = null;
        }
      }), !0;
    } catch (n) {
      return console.error("Failed to launch quest:", n), this.activeQuest = null, !1;
    }
  }
  /**
   * Reset the thumbs targeting/marker UI back to idle without opening or
   * closing the message modal. Shared by closeModal() and the quest-launch
   * path (which bypasses the modal entirely).
   */
  resetFeedbackUi() {
    this.targeting?.hideMarker(), this.overlayShadowHost && (this.overlayShadowHost.style.pointerEvents = "none"), this.state = "IDLE", this.feedbackId = null, this.feedbackData.feedbackType = null, this.feedbackData.elementSelector = null, this.feedbackData.elementText = null, this.selectedBounds.visible = !1;
  }
  /**
   * Lazily load and instantiate the modal controller. The message modal lives
   * in a separate chunk, fetched the first time it opens (and pre-warmed while
   * the user targets an element — see prewarmModal).
   */
  async ensureModal() {
    if (!this.modal) {
      const { ModalController: t } = await Promise.resolve().then(() => mt);
      this.modal = new t(this.makeModalHost());
    }
    return this.modal;
  }
  /** Narrow view of the embed the modal controller talks back through. */
  makeModalHost() {
    const t = this;
    return {
      get config() {
        return t.config;
      },
      get uid() {
        return t.uid;
      },
      get isMobile() {
        return t.isMobile;
      },
      get state() {
        return t.state;
      },
      get boundKeyDown() {
        return t.boundKeyDown;
      },
      get feedbackData() {
        return t.feedbackData;
      },
      get selectedBounds() {
        return t.selectedBounds;
      },
      get feedbackId() {
        return t.feedbackId;
      },
      setFeedbackId: (e) => {
        t.feedbackId = e;
      },
      ensureOverlayHost: () => t.ensureOverlayHost(),
      applyVars: (e) => t.applyVars(e),
      announceMsg: (e, o) => t.announceMsg(e, o),
      openDialogA11y: (e, o) => t.openDialogA11y(e, o),
      closeDialogA11y: () => t.closeDialogA11y(),
      resetFeedbackUi: () => t.resetFeedbackUi()
    };
  }
  /** Warm the modal chunk while the user is targeting, so it opens instantly. */
  prewarmModal() {
    this.modalPrewarmed || (this.modalPrewarmed = !0, Promise.resolve().then(() => mt).catch(() => {
    }));
  }
  /**
   * Lazily load and instantiate the targeting controller. The subsystem (with
   * element-selector) lives in a separate chunk, fetched the first time the
   * user targets — pre-warmed on thumb-button hover (see prewarmTargeting).
   */
  async ensureTargeting() {
    if (!this.targeting) {
      const { TargetingController: t } = await Promise.resolve().then(() => bt);
      this.targeting = new t(this.makeTargetingHost());
    }
    return this.targeting;
  }
  /** Narrow view of the embed the targeting controller talks back through. */
  makeTargetingHost() {
    const t = this;
    return {
      get config() {
        return t.config;
      },
      get cssVars() {
        return t.cssVars;
      },
      get state() {
        return t.state;
      },
      get shadowHost() {
        return t.shadowHost;
      },
      get overlayShadowHost() {
        return t.overlayShadowHost;
      },
      get boundKeyDown() {
        return t.boundKeyDown;
      },
      get feedbackData() {
        return t.feedbackData;
      },
      get selectedBounds() {
        return t.selectedBounds;
      },
      setState: (e) => {
        t.state = e;
      },
      ensureOverlayHost: () => t.ensureOverlayHost(),
      applyVars: (e) => t.applyVars(e),
      announceMsg: (e, o) => t.announceMsg(e, o),
      clearActiveThumb: () => t.clearActiveThumb(),
      submitFeedback: () => t.submitFeedback()
    };
  }
  /** Warm the targeting chunk on thumb-button hover, before the click. */
  prewarmTargeting() {
    this.targetingPrewarmed || this.config.skipTargeting || (this.targetingPrewarmed = !0, Promise.resolve().then(() => bt).catch(() => {
    }));
  }
  // ==================== Video Recording ====================
  /**
   * Cheap synchronous capability check so the record button can render without
   * pulling in the (lazily-loaded) video subsystem. Mirrors
   * isVideoRecordingSupported() in video-capture.ts.
   */
  videoSupported() {
    return typeof navigator < "u" && !!navigator.mediaDevices && typeof navigator.mediaDevices.getDisplayMedia == "function" && typeof MediaRecorder < "u";
  }
  /**
   * Lazily load and instantiate the recording controller. The whole recording
   * subsystem lives in a separate chunk, fetched only the first time the record
   * button is used (and pre-warmed on hover — see prewarmVideo).
   */
  async ensureRecording() {
    if (!this.recording) {
      const { RecordingController: t } = await Promise.resolve().then(() => pt);
      this.recording = new t(this.makeRecordingHost());
    }
    return this.recording;
  }
  /** Narrow view of the embed the recording controller talks back through. */
  makeRecordingHost() {
    const t = this;
    return {
      get config() {
        return t.config;
      },
      get visitorId() {
        return t.visitorId;
      },
      get uid() {
        return t.uid;
      },
      get overlayShadowHost() {
        return t.overlayShadowHost;
      },
      get consoleCapture() {
        return t.consoleCapture;
      },
      get boundKeyDown() {
        return t.boundKeyDown;
      },
      get state() {
        return t.state;
      },
      setState: (e) => {
        t.state = e;
      },
      ensureOverlayHost: () => t.ensureOverlayHost(),
      applyVars: (e) => t.applyVars(e),
      announceMsg: (e, o) => t.announceMsg(e, o),
      openDialogA11y: (e, o) => t.openDialogA11y(e, o),
      closeDialogA11y: () => t.closeDialogA11y(),
      setButtonsDisabled: (e) => t.setButtonsDisabled(e),
      tryLaunchQuest: (e, o) => t.tryLaunchQuest(e, o)
    };
  }
  setButtonsDisabled(t) {
    if (!this.buttonsContainer) return;
    this.buttonsContainer.querySelectorAll("button.qaid-btn, button.qaid-btn-structural").forEach((o) => {
      t ? o.classList.contains("qaid-btn-record") || (o.disabled = !0, o.style.opacity = "0.5") : (o.disabled = !1, o.style.opacity = "");
    });
  }
  /**
   * Destroy the embed and clean up all resources
   */
  destroy() {
    if (this.destroyed = !0, this.domObserver && (this.domObserver.disconnect(), this.domObserver = null), this.boundBeforeSwap && (document.removeEventListener("astro:before-swap", this.boundBeforeSwap), this.boundBeforeSwap = null), this.targeting?.destroy(), this.targeting = null, this.clearActiveThumb(), this.closeDialogA11y(), this.prewarmHandle !== null) {
      const t = window;
      this.prewarmIsTimeout ? clearTimeout(this.prewarmHandle) : t.cancelIdleCallback?.(this.prewarmHandle), this.prewarmHandle = null;
    }
    this.recording?.destroy(), this.recording = null, this.modal?.destroy(), this.modal = null, this.activeQuest?.destroy(), this.activeQuest = null, this.consoleCapture && (this.consoleCapture.restore(), this.consoleCapture = null), window.removeEventListener("resize", this.boundResize), document.removeEventListener("keydown", this.boundKeyDown), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.shadowHost && (this.shadowHost.remove(), this.shadowHost = null, this.shadowRoot = null), this.overlayShadowHost && (this.overlayShadowHost.remove(), this.overlayShadowHost = null, this.overlayShadowRoot = null), this.buttonsContainer = null, this.dismissBtn = null, this.tooltipElement = null, ue();
  }
}
function kt(i) {
  return document.querySelector(i)?.textContent?.trim() ?? "";
}
function je() {
  const i = document.querySelector(
    'script[type="application/json"][data-feedback-config]'
  );
  if (!i) return null;
  const t = i.textContent?.trim();
  if (!t) return null;
  try {
    const e = JSON.parse(t);
    return e.cssSelector && !e.css && (e.css = kt(e.cssSelector), delete e.cssSelector), e;
  } catch {
    return null;
  }
}
function Ke(i) {
  const t = i.getAttribute("data-endpoint");
  if (!t) return null;
  const e = i.getAttribute("data-position"), o = i.getAttribute("data-zindex"), n = i.getAttribute("data-positive-color"), s = i.getAttribute("data-negative-color"), a = i.getAttribute("data-marker-color"), c = i.getAttribute("data-container"), l = i.getAttribute("data-button-class"), d = i.getAttribute("data-skip-targeting"), r = i.getAttribute("data-hide-confirmation"), h = i.getAttribute("data-single-button"), p = i.getAttribute("data-feedback-mode"), b = i.getAttribute("data-incognito"), y = i.getAttribute("data-button-size"), g = i.getAttribute("data-offset-x"), w = i.getAttribute("data-offset-y"), x = i.getAttribute("data-modal-width"), u = i.getAttribute("data-backdrop-opacity"), k = i.getAttribute("data-font-family"), v = i.getAttribute("data-font-size"), C = i.getAttribute("data-tooltip"), T = i.getAttribute("data-modal-title"), S = i.getAttribute("data-confirmation-title"), f = i.getAttribute("data-confirmation-message"), D = i.getAttribute("data-confirmation-close"), j = i.getAttribute("data-modal-subtitle"), K = i.getAttribute("data-placeholder"), W = i.getAttribute("data-submit-button"), X = i.getAttribute("data-skip-button"), Dt = i.getAttribute("data-positive-icon"), Mt = i.getAttribute("data-negative-icon"), Rt = i.getAttribute("data-feedback-icon"), Y = i.getAttribute("data-feedback-label"), Pt = i.getAttribute("data-api-key"), Bt = i.getAttribute("data-capture-screenshot"), Ht = i.getAttribute("data-annotate"), Ot = i.getAttribute("data-annotation-color"), H = i.getAttribute("data-screenshot-quality"), O = i.getAttribute("data-screenshot-max-width"), $ = i.getAttribute("data-screenshot-max-height"), $t = i.getAttribute("data-capture-video"), Q = i.getAttribute("data-video-redaction"), zt = i.getAttribute("data-hide-thumbs"), _t = i.getAttribute("data-hide-dismiss"), z = i.getAttribute("data-video-max-duration"), Ft = i.getAttribute("data-screenshot-method"), Vt = i.getAttribute("data-direction"), G = i.getAttribute("data-css-selector"), J = i.getAttribute("data-quest-base"), Nt = i.getAttribute("data-quest-up"), Ut = i.getAttribute("data-quest-down"), jt = i.getAttribute("data-quest-video"), Kt = i.getAttribute("data-quest-api-key"), Wt = i.getAttribute("data-quest-module-url");
  return {
    endpoint: t,
    css: G ? kt(G) : void 0,
    apiKey: Pt ?? void 0,
    captureScreenshot: Bt === "true" ? !0 : void 0,
    // Annotation is on by default; only an explicit "false" disables it.
    annotate: Ht === "false" ? !1 : void 0,
    annotationColor: Ot ?? void 0,
    screenshotOptions: H || O || $ ? {
      quality: H ? parseFloat(H) : void 0,
      maxWidth: O ? parseInt(O, 10) : void 0,
      maxHeight: $ ? parseInt($, 10) : void 0
    } : void 0,
    container: c ?? void 0,
    buttonClass: l ?? void 0,
    direction: Vt ?? void 0,
    position: e ?? void 0,
    zIndex: o ? parseInt(o, 10) : void 0,
    skipTargeting: d === "true" ? !0 : void 0,
    hideConfirmation: r === "true" ? !0 : void 0,
    singleButton: h === "true" ? !0 : void 0,
    feedbackMode: p ?? void 0,
    incognito: b === "true" ? !0 : void 0,
    buttonSize: y ?? void 0,
    offset: g || w ? {
      x: g ? parseInt(g, 10) : void 0,
      y: w ? parseInt(w, 10) : void 0
    } : void 0,
    modalWidth: x ? parseInt(x, 10) : void 0,
    backdropOpacity: u ? parseFloat(u) : void 0,
    fontFamily: k ?? void 0,
    fontSize: v ? parseInt(v, 10) : void 0,
    colors: {
      positive: n ?? void 0,
      negative: s ?? void 0,
      marker: a ?? void 0
    },
    text: C || T || j || K || W || X || Y || S || f || D ? {
      tooltip: C ?? void 0,
      modalTitle: T ?? void 0,
      modalSubtitle: j ?? void 0,
      placeholder: K ?? void 0,
      submitButton: W ?? void 0,
      skipButton: X ?? void 0,
      feedbackLabel: Y ?? void 0,
      confirmationTitle: S ?? void 0,
      confirmationMessage: f ?? void 0,
      confirmationClose: D ?? void 0
    } : void 0,
    positiveIcon: Dt ?? void 0,
    negativeIcon: Mt ?? void 0,
    feedbackIcon: Rt ?? void 0,
    screenshotMethod: Ft ?? void 0,
    captureVideo: $t === "true" ? !0 : void 0,
    hideThumbs: zt === "true" ? !0 : void 0,
    hideDismiss: _t === "true" ? !0 : void 0,
    videoOptions: z || Q ? {
      maxDuration: z ? parseInt(z, 10) : void 0,
      redaction: Q === "true" ? !0 : void 0
    } : void 0,
    quests: J ? {
      base: J,
      up: Nt ?? void 0,
      down: Ut ?? void 0,
      video: jt ?? void 0,
      apiKey: Kt ?? void 0,
      moduleUrl: Wt ?? void 0
    } : void 0
  };
}
function We() {
  if (typeof document > "u") return;
  const i = () => {
    const t = document.currentScript ?? document.querySelector("script[data-endpoint]"), e = je(), o = t ? Ke(t) : null, n = e ?? o;
    n?.endpoint && new Ue(n);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", i) : i();
}
const Xe = 20, rt = 4096;
function R(i) {
  const t = typeof i == "string" ? i : JSON.stringify(i);
  return t.length > rt ? t.slice(0, rt) + "…[truncated]" : t;
}
function dt(i, t) {
  i.length >= Xe && i.shift(), i.push(t);
}
async function Ye(i) {
  try {
    const t = await i.clone().text();
    return R(t);
  } catch {
    return;
  }
}
function Qe() {
  const i = [], t = window.fetch;
  window.fetch = async function(n, s) {
    const a = typeof n == "string" ? n : n instanceof URL ? n.toString() : n.url, c = s?.method ?? (typeof n == "object" && "method" in n ? n.method : "GET");
    let l;
    s?.body && (l = R(s.body));
    const d = await t.apply(window, [n, s]);
    if (d.status >= 400) {
      const r = await Ye(d);
      dt(i, {
        url: a,
        method: c.toUpperCase(),
        status: d.status,
        statusText: d.statusText,
        requestBody: l,
        responseBody: r,
        timestamp: Date.now()
      });
    }
    return d;
  };
  const e = XMLHttpRequest.prototype.open, o = XMLHttpRequest.prototype.send;
  return XMLHttpRequest.prototype.open = function(n, s, ...a) {
    return this._qaid_method = n, this._qaid_url = typeof s == "string" ? s : s.toString(), e.apply(this, [n, s, ...a]);
  }, XMLHttpRequest.prototype.send = function(n) {
    const s = this, a = n ? R(n) : void 0;
    return s.addEventListener("load", function() {
      s.status >= 400 && dt(i, {
        url: s._qaid_url,
        method: s._qaid_method.toUpperCase(),
        status: s.status,
        statusText: s.statusText,
        requestBody: a,
        responseBody: R(s.responseText),
        timestamp: Date.now()
      });
    }), o.apply(this, [n]);
  }, {
    errors: i,
    restore: () => {
      window.fetch = t, XMLHttpRequest.prototype.open = e, XMLHttpRequest.prototype.send = o;
    }
  };
}
function Ge() {
  const i = navigator.userAgent || "";
  return /iP(hone|ad|od)/.test(i) || // iPadOS 13+ masquerades as "MacIntel" but is a multi-touch device.
  navigator.platform === "MacIntel" && (navigator.maxTouchPoints || 0) > 1;
}
function Je(i, t, e, o, n) {
  const s = i >= t, a = e >= o;
  return s === a ? { width: i, height: t, rotate: 0 } : { width: t, height: i, rotate: n === 270 ? -90 : 90 };
}
function Ze(i, t, e) {
  if (e.rotate === 0) {
    i.drawImage(t, 0, 0, e.width, e.height);
    return;
  }
  i.save(), e.rotate === 90 ? (i.translate(e.width, 0), i.rotate(Math.PI / 2)) : (i.translate(0, e.height), i.rotate(-Math.PI / 2)), i.drawImage(t, 0, 0, e.height, e.width), i.restore();
}
function ti() {
  const i = typeof screen < "u" ? screen.orientation : void 0;
  return i && typeof i.angle == "number" ? i.angle : 0;
}
function xt(i) {
  return new Promise((t) => {
    if (i.videoWidth > 0) {
      t();
      return;
    }
    i.addEventListener("loadedmetadata", () => t(), { once: !0 });
  });
}
async function qt(i) {
  try {
    await i.play();
  } catch {
  }
}
async function ei(i, t = 15) {
  const e = document.createElement("canvas");
  if (typeof e.captureStream != "function") return null;
  const o = e.getContext("2d");
  if (!o) return null;
  const n = document.createElement("video");
  n.muted = !0, n.playsInline = !0, n.srcObject = i, await xt(n);
  const s = Je(
    n.videoWidth,
    n.videoHeight,
    window.innerWidth,
    window.innerHeight,
    ti()
  );
  e.width = s.width, e.height = s.height, await qt(n);
  let a = 0;
  const c = () => {
    Ze(o, n, s), a = requestAnimationFrame(c);
  };
  c();
  const l = e.captureStream(t);
  return {
    stream: l,
    stop: () => {
      a && cancelAnimationFrame(a), a = 0, l.getTracks().forEach((d) => d.stop()), n.pause(), n.srcObject = null;
    }
  };
}
function ii(i, t, e, o, n) {
  const s = Math.max(0, Math.min(o, i.left * t)), a = Math.max(0, Math.min(n, i.top * e)), c = Math.max(0, Math.min(o, (i.left + i.width) * t)), l = Math.max(0, Math.min(n, (i.top + i.height) * e)), d = c - s, r = l - a;
  return d <= 0 || r <= 0 ? null : { x: s, y: a, w: d, h: r };
}
function oi(i, t, e, o, n, s, a) {
  i.drawImage(t, 0, 0, o, n);
  const c = o / Math.max(1, window.innerWidth), l = n / Math.max(1, window.innerHeight);
  for (const d of e) {
    const r = ii(
      d.getBoundingClientRect(),
      c,
      l,
      o,
      n
    );
    r && (i.save(), a ? (i.filter = `blur(${s}px)`, i.drawImage(t, r.x, r.y, r.w, r.h, r.x, r.y, r.w, r.h)) : (i.fillStyle = "#0b0b0b", i.fillRect(r.x, r.y, r.w, r.h)), i.restore());
  }
}
async function ni(i, t, e = {}) {
  const o = e.frameRate ?? 15, n = e.blurRadius ?? 12, s = document.createElement("canvas");
  if (typeof s.captureStream != "function") return null;
  const a = s.getContext("2d");
  if (!a) return null;
  const c = "filter" in a, l = document.createElement("video");
  l.muted = !0, l.playsInline = !0, l.srcObject = i, await xt(l), s.width = l.videoWidth, s.height = l.videoHeight, await qt(l);
  let d = 0;
  const r = () => {
    oi(
      a,
      l,
      t,
      s.width,
      s.height,
      n,
      c
    ), d = requestAnimationFrame(r);
  };
  r();
  const h = s.captureStream(o);
  return {
    stream: h,
    stop: () => {
      d && cancelAnimationFrame(d), d = 0, h.getTracks().forEach((p) => p.stop()), l.pause(), l.srcObject = null;
    }
  };
}
function si() {
  return typeof navigator < "u" && !!navigator.mediaDevices && typeof navigator.mediaDevices.getDisplayMedia == "function" && typeof MediaRecorder < "u";
}
function Ct() {
  if (typeof MediaRecorder > "u") return "";
  const i = [
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
    "video/mp4"
  ];
  for (const t of i)
    if (MediaRecorder.isTypeSupported(t))
      return t;
  return "";
}
function ai(i = {}) {
  const t = i.maxDuration ?? 15, e = i.videoBitsPerSecond ?? 8e5, o = i.redactionElements ?? [], n = i.redactionBlurRadius;
  let s = null, a = null, c = null, l = null, d = [], r = null, h = null, p = null, b = 0, y = null, g = null, w = !1, x = null;
  function u() {
    p !== null && (clearInterval(p), p = null), x !== null && (clearTimeout(x), x = null), a && (a.stop(), a = null), c && (c.stop(), c = null), s && (s.getTracks().forEach((v) => v.stop()), s = null), l = null, d = [], r = null, h = null, y = null, g = null;
  }
  function k() {
    w || (w = !0, l && l.state !== "inactive" && l.stop());
  }
  return {
    async start() {
      w = !1, d = [];
      const v = Ct();
      if (!v)
        throw new Error("No supported video MIME type found");
      s = await navigator.mediaDevices.getDisplayMedia({
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
      const C = s.getVideoTracks()[0], T = C?.getSettings?.()?.displaySurface;
      if (T === "monitor" || T === "window")
        throw s.getTracks().forEach((f) => f.stop()), s = null, new Error(
          "qaid records only the current tab — please share this tab, not a window or your whole screen."
        );
      C && C.addEventListener("ended", () => {
        k();
      });
      let S = s;
      if (Ge()) {
        const f = await ei(s);
        f && (a = f, S = f.stream);
      } else if (o.length > 0) {
        const f = await ni(s, o, {
          blurRadius: n
        });
        f && (c = f, S = f.stream);
      }
      l = new MediaRecorder(S, {
        mimeType: v,
        videoBitsPerSecond: e
      }), l.ondataavailable = (f) => {
        f.data.size > 0 && d.push(f.data);
      }, l.onstop = () => {
        const f = new Blob(d, { type: v });
        y && y(f), h && h(f), a && (a.stop(), a = null), c && (c.stop(), c = null), s && s.getTracks().forEach((D) => D.stop());
      }, l.onerror = () => {
        g && g(new Error("MediaRecorder error"));
      }, l.start(1e3), b = Date.now(), p = setInterval(() => {
        const f = Math.floor((Date.now() - b) / 1e3);
        r && r(f);
      }, 1e3), x = setTimeout(() => {
        k();
      }, t * 1e3);
    },
    stop() {
      return new Promise((v, C) => {
        y = v, g = C, k();
      });
    },
    onTick(v) {
      r = v;
    },
    onStop(v) {
      h = v;
    },
    destroy() {
      k(), u();
    }
  };
}
const St = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createVideoRecorder: ai,
  getSupportedMimeType: Ct,
  isVideoRecordingSupported: si
}, Symbol.toStringTag, { value: "Module" })), ct = "https://qaid.dev/lib/html2canvas.min.js", ri = 1e4, di = 50;
let L = null;
function ci() {
  if (typeof document > "u" || typeof window > "u")
    return !1;
  const i = document.createElement("canvas");
  return typeof i.getContext == "function" && !!i.getContext("2d");
}
function li() {
  return window.html2canvas ? Promise.resolve(!0) : L || (L = new Promise((i) => {
    if (!document.querySelector(
      `script[src="${ct}"]`
    )) {
      const n = document.createElement("script");
      n.src = ct, n.async = !0, document.head.appendChild(n);
    }
    const e = Date.now(), o = () => {
      if (window.html2canvas) {
        i(!0);
        return;
      }
      if (Date.now() - e > ri) {
        L = null, i(!1);
        return;
      }
      setTimeout(o, di);
    };
    o();
  }), L);
}
async function hi(i = {}) {
  const { quality: t = 0.8, maxWidth: e = 1280, maxHeight: o = 800 } = i;
  try {
    if (!await li() || !window.html2canvas)
      return console.warn("html2canvas failed to load"), null;
    const s = await window.html2canvas(document.body, {
      useCORS: !0,
      allowTaint: !1,
      logging: !1,
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      x: window.scrollX,
      y: window.scrollY,
      ignoreElements: (d) => d instanceof HTMLElement ? d.classList.contains("qaid-buttons") || d.classList.contains("qaid-targeting-overlay") || d.classList.contains("qaid-modal-container") || d.classList.contains("qaid-bottom-sheet") || d.classList.contains("qaid-backdrop") || d.classList.contains("qaid-selected-marker") || d.classList.contains("qaid-tooltip-text") || d.classList.contains("qaid-recording-indicator") || d.classList.contains("qaid-video-preview") || d.className?.toString().startsWith?.("qaid-") : !1
    }), a = s.width, c = s.height, l = Math.min(e / a, o / c, 1);
    if (l < 1) {
      const d = Math.round(a * l), r = Math.round(c * l), h = document.createElement("canvas");
      h.width = d, h.height = r;
      const p = h.getContext("2d");
      return p ? (p.drawImage(s, 0, 0, d, r), h.toDataURL("image/webp", t)) : null;
    }
    return s.toDataURL("image/webp", t);
  } catch (n) {
    return console.warn("DOM screenshot capture failed:", n), null;
  }
}
const lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  captureDomScreenshot: hi,
  isDomScreenshotSupported: ci
}, Symbol.toStringTag, { value: "Module" })), E = 12, ui = "#ef4444", pi = ["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#111827", "#ffffff"], fi = {
  "#ef4444": "red",
  "#f59e0b": "amber",
  "#22c55e": "green",
  "#3b82f6": "blue",
  "#111827": "black",
  "#ffffff": "white",
  "#6366f1": "indigo"
};
function ht(i) {
  return fi[i.toLowerCase()] ?? i;
}
const mi = 4, bi = 0.8, gi = {
  title: "Annotate screenshot",
  instructions: "Draw on the screenshot to highlight or hide details, then choose Done to attach it or Skip to send the original.",
  rectangle: "Rectangle",
  arrow: "Arrow",
  pen: "Pen",
  blur: "Blur or redact",
  undo: "Undo last",
  skip: "Skip annotation",
  done: "Done",
  colors: "Drawing colour"
};
function P(i, t) {
  return {
    x: Math.min(i.x, t.x),
    y: Math.min(i.y, t.y),
    w: Math.abs(i.x - t.x),
    h: Math.abs(i.y - t.y)
  };
}
function vi(i) {
  if (i.type === "pen") return i.points.length < 2;
  const t = P(i.points[0], i.points[1]);
  return t.w < 3 && t.h < 3;
}
function yi(i, t, e, o) {
  i.beginPath(), i.moveTo(t.x, t.y), i.lineTo(e.x, e.y), i.stroke();
  const n = Math.atan2(e.y - t.y, e.x - t.x), s = Math.max(10, o * 3);
  i.beginPath(), i.moveTo(e.x, e.y), i.lineTo(
    e.x - s * Math.cos(n - Math.PI / 6),
    e.y - s * Math.sin(n - Math.PI / 6)
  ), i.moveTo(e.x, e.y), i.lineTo(
    e.x - s * Math.cos(n + Math.PI / 6),
    e.y - s * Math.sin(n + Math.PI / 6)
  ), i.stroke();
}
function wi(i, t) {
  if (t.length !== 0) {
    i.beginPath(), i.moveTo(t[0].x, t[0].y);
    for (let e = 1; e < t.length; e++)
      i.lineTo(t[e].x, t[e].y);
    i.stroke();
  }
}
function ki(i, t, e, o, n) {
  i.fillStyle = "rgb(15, 23, 42)", i.fillRect(t, e, o, n), i.fillStyle = "rgb(37, 47, 63)";
  for (let s = e; s < e + n; s += E)
    for (let a = t; a < t + o; a += E)
      (Math.floor((a - t) / E) + Math.floor((s - e) / E)) % 2 === 0 && i.fillRect(
        a,
        s,
        Math.min(E, t + o - a),
        Math.min(E, e + n - s)
      );
}
function B(i, t) {
  switch (i.save(), i.strokeStyle = t.color, i.fillStyle = t.color, i.lineWidth = t.strokeWidth, i.lineJoin = "round", i.lineCap = "round", t.type) {
    case "rect": {
      const e = P(t.points[0], t.points[1]);
      i.strokeRect(e.x, e.y, e.w, e.h);
      break;
    }
    case "arrow":
      yi(i, t.points[0], t.points[1], t.strokeWidth);
      break;
    case "pen":
      wi(i, t.points);
      break;
    case "blur": {
      const e = P(t.points[0], t.points[1]);
      ki(i, e.x, e.y, e.w, e.h);
      break;
    }
  }
  i.restore();
}
function Et(i) {
  return new Promise((t, e) => {
    const o = new Image();
    o.onload = () => t(o), o.onerror = () => e(new Error("Failed to load screenshot")), o.src = i;
  });
}
async function Tt(i, t, e = {}) {
  const o = e.quality ?? bi;
  let n;
  try {
    n = await Et(i);
  } catch {
    return i;
  }
  const s = document.createElement("canvas");
  s.width = n.naturalWidth || n.width || 1, s.height = n.naturalHeight || n.height || 1;
  const a = s.getContext("2d");
  if (!a) return i;
  a.drawImage(n, 0, 0, s.width, s.height);
  for (const c of t)
    B(a, c);
  return s.toDataURL("image/webp", o);
}
let xi = 0;
class At {
  shapes = [];
  tool = "rect";
  opts;
  labels;
  color;
  palette;
  strokeWidth;
  uid = `qaid-annotate-${++xi}`;
  container;
  canvas;
  ctx = null;
  toolbar;
  undoBtn;
  img = null;
  drawing = !1;
  current = null;
  settled = !1;
  // Assigned in open() before any settle() is reachable (done/skip only fire
  // after the editor is mounted).
  resolveResult;
  constructor(t) {
    this.opts = t, this.labels = { ...gi, ...t.labels ?? {} }, this.color = t.color ?? ui, this.palette = (t.palette && t.palette.length ? t.palette : pi).slice(), this.palette.some((e) => e.toLowerCase() === this.color.toLowerCase()) || this.palette.unshift(this.color), this.strokeWidth = t.strokeWidth ?? mi;
  }
  /** Mount the editor and resolve when the user commits (Done) or skips. */
  open() {
    const t = new Promise((e) => {
      this.resolveResult = e;
    });
    return this.mount(), t;
  }
  toolButton(t, e, o) {
    const n = q("button", {
      type: "button",
      class: "qaid-annotate-tool",
      "data-qaid-tool": t,
      "aria-pressed": t === this.tool ? "true" : "false",
      "aria-label": `${o} tool`,
      title: o
    });
    return n.innerHTML = `${e}<span class="qaid-annotate-btn-text">${o}</span>`, n;
  }
  /** A round colour swatch button for the toolbar's colour group. */
  swatchButton(t) {
    const e = ht(t), o = q("button", {
      type: "button",
      class: "qaid-annotate-swatch",
      "data-qaid-color": t,
      "aria-pressed": t.toLowerCase() === this.color.toLowerCase() ? "true" : "false",
      "aria-label": `Draw in ${e}`,
      title: e
    });
    return o.style.setProperty("--qaid-swatch", t), o;
  }
  actionButton(t, e, o, n) {
    const s = q("button", {
      type: "button",
      class: `qaid-annotate-action ${n}`,
      "data-qaid-action": t,
      "aria-label": o,
      title: o
    });
    return s.innerHTML = `${e}<span class="qaid-annotate-btn-text">${o}</span>`, s;
  }
  mount() {
    const t = `${this.uid}-title`, e = `${this.uid}-desc`;
    this.container = q("div", { class: "qaid-annotate" }), this.opts.applyVars?.(this.container);
    const o = q("h2", {
      id: t,
      class: "qaid-annotate-title"
    });
    o.textContent = this.labels.title;
    const n = q("p", {
      id: e,
      class: "qaid-annotate-desc"
    });
    n.textContent = this.labels.instructions;
    const s = q("div", { class: "qaid-annotate-stage" });
    this.canvas = document.createElement("canvas"), this.canvas.className = "qaid-annotate-canvas", this.canvas.width = 1, this.canvas.height = 1, this.canvas.setAttribute("role", "img"), this.canvas.setAttribute("aria-label", this.labels.title), this.ctx = this.canvas.getContext("2d"), s.appendChild(this.canvas), this.toolbar = q("div", {
      class: "qaid-annotate-toolbar",
      role: "toolbar",
      "aria-label": this.labels.title
    });
    const a = q("div", { class: "qaid-annotate-tools" });
    a.appendChild(this.toolButton("rect", Yt, this.labels.rectangle)), a.appendChild(this.toolButton("arrow", Qt, this.labels.arrow)), a.appendChild(this.toolButton("pen", Gt, this.labels.pen)), a.appendChild(this.toolButton("blur", Jt, this.labels.blur));
    const c = q("div", {
      class: "qaid-annotate-colors",
      role: "group",
      "aria-label": this.labels.colors
    });
    for (const h of this.palette) c.appendChild(this.swatchButton(h));
    this.undoBtn = this.actionButton("undo", Zt, this.labels.undo, "qaid-annotate-undo"), this.undoBtn.disabled = !0;
    const l = this.actionButton("skip", te, this.labels.skip, "qaid-annotate-skip"), d = this.actionButton("done", vt, this.labels.done, "qaid-annotate-done"), r = q("div", { class: "qaid-annotate-actions" });
    r.appendChild(this.undoBtn), r.appendChild(l), r.appendChild(d), this.toolbar.appendChild(a), this.toolbar.appendChild(c), this.toolbar.appendChild(r), this.container.appendChild(o), this.container.appendChild(n), this.container.appendChild(s), this.container.appendChild(this.toolbar), this.opts.root.appendChild(this.container), this.toolbar.addEventListener("click", this.onToolbarClick), this.canvas.addEventListener("pointerdown", this.onPointerDown), this.container.addEventListener("pointermove", this.onPointerMove), this.container.addEventListener("pointerup", this.onPointerUp), this.container.addEventListener("keydown", this.onKeyDown), this.opts.openDialog?.(this.container, {
      labelledbyId: t,
      describedbyId: e
    }), this.opts.announce?.(this.labels.instructions), Et(this.opts.dataUrl).then((h) => {
      this.img = h, this.canvas.width = h.naturalWidth || h.width || 1, this.canvas.height = h.naturalHeight || h.height || 1, this.redraw();
    }).catch(() => {
      this.img = null, this.redraw();
    });
  }
  /** Convert a pointer event's client coordinates into natural image pixels. */
  toImageCoords(t) {
    const e = this.canvas.getBoundingClientRect(), o = this.canvas.width / (e.width || this.canvas.width), n = this.canvas.height / (e.height || this.canvas.height);
    return {
      x: (t.clientX - e.left) * o,
      y: (t.clientY - e.top) * n
    };
  }
  /** Repaint the display canvas: base image (if loaded) then every shape. */
  redraw() {
    const t = this.ctx;
    if (t) {
      t.clearRect(0, 0, this.canvas.width, this.canvas.height), this.img && t.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
      for (const e of this.shapes)
        B(t, e);
      this.current && B(t, this.current);
    }
  }
  /** Select the active drawing tool and reflect it on the toolbar. */
  selectTool(t) {
    this.tool = t, this.toolbar.querySelectorAll("[data-qaid-tool]").forEach((n) => {
      n.setAttribute(
        "aria-pressed",
        n.getAttribute("data-qaid-tool") === t ? "true" : "false"
      );
    });
    const o = this.labels[qi[t]];
    this.opts.announce?.(`${o} tool selected`);
  }
  /** Set the active drawing colour; subsequent shapes use it. */
  selectColor(t) {
    this.color = t, this.toolbar.querySelectorAll("[data-qaid-color]").forEach((o) => {
      o.setAttribute(
        "aria-pressed",
        (o.getAttribute("data-qaid-color") ?? "").toLowerCase() === t.toLowerCase() ? "true" : "false"
      );
    }), this.opts.announce?.(`${ht(t)} colour selected`);
  }
  onToolbarClick = (t) => {
    const o = t.target?.closest(
      "[data-qaid-tool],[data-qaid-action],[data-qaid-color]"
    );
    if (!o) return;
    const n = o.getAttribute("data-qaid-color");
    if (n) {
      this.selectColor(n);
      return;
    }
    const s = o.getAttribute("data-qaid-tool");
    if (s) {
      this.selectTool(s);
      return;
    }
    const a = o.getAttribute("data-qaid-action");
    a === "undo" ? this.undo() : a === "skip" ? this.skip() : a === "done" && this.done();
  };
  onPointerDown = (t) => {
    t.preventDefault?.(), this.drawing = !0;
    const e = this.toImageCoords(t);
    this.current = {
      type: this.tool,
      color: this.color,
      strokeWidth: this.strokeWidth,
      points: this.tool === "pen" ? [e] : [e, { ...e }]
    }, this.redraw();
  };
  onPointerMove = (t) => {
    if (!this.drawing || !this.current) return;
    const e = this.toImageCoords(t);
    this.current.type === "pen" ? this.current.points.push(e) : this.current.points[1] = e, this.redraw();
  };
  onPointerUp = () => {
    if (!this.drawing || !this.current) return;
    this.drawing = !1;
    const t = this.current;
    if (this.current = null, vi(t)) {
      this.redraw();
      return;
    }
    this.shapes.push(t), this.undoBtn.disabled = !1, this.opts.announce?.("Annotation added"), this.redraw();
  };
  onKeyDown = (t) => {
    if (t.key === "Escape") {
      t.preventDefault(), this.skip();
      return;
    }
    if (t.key === "Enter") {
      const e = t.target;
      if (e?.getAttribute("data-qaid-tool") || e?.getAttribute("data-qaid-action"))
        return;
      t.preventDefault(), this.done();
    }
  };
  /** Remove the most recently added shape. */
  undo() {
    if (this.shapes.length === 0) {
      this.opts.announce?.("Nothing to undo");
      return;
    }
    this.shapes.pop(), this.undoBtn.disabled = this.shapes.length === 0, this.opts.announce?.("Removed last annotation"), this.redraw();
  }
  /** Composite the annotations and resolve with the new WebP data URL. */
  async done() {
    if (this.settled) return;
    const t = await Tt(this.opts.dataUrl, this.shapes, {
      quality: this.opts.quality
    });
    this.opts.announce?.("Annotated screenshot attached"), this.settle(t);
  }
  /** Discard annotations and resolve with `null` (caller keeps the original). */
  skip() {
    this.settled || (this.opts.announce?.("Annotation skipped"), this.settle(null));
  }
  settle(t) {
    this.settled = !0, this.teardown(), this.resolveResult(t);
  }
  teardown() {
    this.toolbar.removeEventListener("click", this.onToolbarClick), this.canvas.removeEventListener("pointerdown", this.onPointerDown), this.container.removeEventListener("pointermove", this.onPointerMove), this.container.removeEventListener("pointerup", this.onPointerUp), this.container.removeEventListener("keydown", this.onKeyDown), this.opts.closeDialog?.(), this.container.remove();
  }
}
const qi = {
  rect: "rectangle",
  arrow: "arrow",
  pen: "pen",
  blur: "blur"
};
function Ci(i) {
  return new At(i).open();
}
const ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnnotationEditor: At,
  compositeAnnotations: Tt,
  drawShape: B,
  openAnnotationEditor: Ci,
  rectFromPoints: P
}, Symbol.toStringTag, { value: "Module" }));
We();
const Si = document;
function m(i, t, ...e) {
  const o = Si.createElement(i);
  if (t) {
    if (t.class && (o.className = t.class), t.style && (o.style.cssText = t.style), t.html != null && (o.innerHTML = t.html), t.text != null && (o.textContent = t.text), t.attrs)
      for (const n in t.attrs) o.setAttribute(n, t.attrs[n]);
    if (t.on)
      for (const n in t.on) o.addEventListener(n, t.on[n]);
  }
  for (const n of e)
    n != null && n !== !1 && o.append(n);
  return o;
}
class Ei {
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
        this.networkCapture = Qe();
        const { createVideoRecorder: e } = await Promise.resolve().then(() => St);
        this.videoRecorder = e({
          maxDuration: this.host.config.videoOptions.maxDuration,
          redactionElements: t
        }), this.videoRecorder.onTick((o) => {
          this.updateRecordingTimer(o);
        }), this.videoRecorder.onStop((o) => {
          this.isRecording && (this.recordedBlob = o, this.isRecording = !1, this.host.announceMsg("Recording stopped"), this.removeRecordingIndicator(), document.removeEventListener("keydown", this.host.boundKeyDown), this.host.setButtonsDisabled(!1), o && o.size > 0 ? this.showRecordingPreview() : this.cleanupRecording());
        }), await this.videoRecorder.start(), this.isRecording = !0, this.host.announceMsg("Recording started"), this.host.setButtonsDisabled(!0), this.showRecordingIndicator(), document.addEventListener("keydown", this.host.boundKeyDown);
      } catch (e) {
        e instanceof Error && /current tab/i.test(e.message) && this.host.announceMsg(e.message), this.cleanupRecording();
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
    const t = this.host.ensureOverlayHost(), e = m("div", { style: "position:absolute;inset:0;" }), o = m(
      "div",
      { class: "qaid-redact-picker", style: "position:fixed;inset:0;pointer-events:none;" },
      e,
      // Control bar — the only pointer-interactive part of the overlay.
      m(
        "div",
        {
          style: "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);display:flex;gap:12px;align-items:center;pointer-events:auto;background:#0b1220;color:#fff;border:1px solid #ff6b6b;border-radius:9999px;padding:10px 16px;font:600 13px system-ui,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.5);"
        },
        m("span", {
          text: "Click sensitive areas to blur",
          attrs: { "data-qaid-redact-label": "" }
        }),
        m("button", {
          text: "Start recording",
          attrs: { type: "button" },
          style: "cursor:pointer;border:0;border-radius:9999px;padding:8px 14px;background:#ff6b6b;color:#0b1220;font:inherit;",
          on: { click: () => this.finishRedactionPicking(!0) }
        }),
        m("button", {
          text: "Cancel",
          attrs: { type: "button" },
          style: "cursor:pointer;border:0;background:transparent;color:#9fb3c8;font:inherit;",
          on: { click: () => this.finishRedactionPicking(!1) }
        })
      )
    );
    t.appendChild(o), this.redactPickerRoot = o;
    const n = () => {
      this.renderRedactPicks(e), this.redactRafId = requestAnimationFrame(n);
    };
    n(), document.addEventListener("click", this.boundRedactClick, !0), document.addEventListener("keydown", this.host.boundKeyDown), this.host.announceMsg("Click sensitive areas to blur, then start recording");
  }
  handleRedactPickClick(t) {
    const e = t.target instanceof Element ? t.target : null;
    if (!e || M(e) || this.redactPickerRoot?.contains(e)) return;
    t.preventDefault(), t.stopPropagation();
    const o = this.redactPicks.indexOf(e);
    o >= 0 ? this.redactPicks.splice(o, 1) : this.redactPicks.push(e);
    const n = this.redactPickerRoot?.querySelector("[data-qaid-redact-label]");
    if (n) {
      const s = this.redactPicks.length;
      n.textContent = s === 0 ? "Click sensitive areas to blur" : `${s} area${s === 1 ? "" : "s"} will be blurred`;
    }
  }
  renderRedactPicks(t) {
    t.textContent = "";
    for (const e of this.redactPicks) {
      const o = e.getBoundingClientRect();
      o.width <= 0 || o.height <= 0 || t.appendChild(
        m("div", {
          style: `position:fixed;left:${o.left}px;top:${o.top}px;width:${o.width}px;height:${o.height}px;border:2px solid #ff6b6b;border-radius:4px;background:rgba(255,107,107,.18);pointer-events:none;`
        })
      );
    }
  }
  finishRedactionPicking(t) {
    this.redactRafId && cancelAnimationFrame(this.redactRafId), this.redactRafId = 0, document.removeEventListener("click", this.boundRedactClick, !0), document.removeEventListener("keydown", this.host.boundKeyDown), this.redactPickerRoot && (this.redactPickerRoot.remove(), this.redactPickerRoot = null);
    const e = this.redactPicks;
    this.redactPicks = [], this.host.setState("IDLE"), t && this.startRecording(e);
  }
  showRecordingIndicator() {
    const t = this.host.ensureOverlayHost();
    this.recordingIndicator = m(
      "div",
      { class: "qaid-recording-indicator", style: `z-index:${this.host.config.zIndex + 100}` },
      m("div", { class: "qaid-recording-dot" }),
      m("span", {
        class: "qaid-recording-time",
        text: this.formatTime(this.host.config.videoOptions.maxDuration)
      }),
      m("button", {
        class: "qaid-recording-stop",
        text: "Stop",
        attrs: { type: "button" },
        on: { click: () => this.stopRecording() }
      })
    ), this.host.applyVars(this.recordingIndicator), this.host.overlayShadowHost && (this.host.overlayShadowHost.style.pointerEvents = "auto"), t.appendChild(this.recordingIndicator);
  }
  updateRecordingTimer(t) {
    if (!this.recordingIndicator) return;
    const e = this.recordingIndicator.querySelector(".qaid-recording-time");
    if (e) {
      const o = Math.max(0, this.host.config.videoOptions.maxDuration - t);
      e.textContent = this.formatTime(o), o > 0 && o <= 5 && this.host.announceMsg(`${o} second${o === 1 ? "" : "s"} remaining`);
    }
  }
  formatTime(t) {
    const e = Math.floor(t / 60), o = t % 60;
    return `${e}:${o.toString().padStart(2, "0")}`;
  }
  removeRecordingIndicator() {
    this.recordingIndicator && (this.recordingIndicator.remove(), this.recordingIndicator = null);
  }
  showRecordingPreview() {
    const t = this.host.ensureOverlayHost(), e = URL.createObjectURL(this.recordedBlob), o = `qaid-video-title-${this.host.uid}`, n = m("h3", { text: "Review your recording", attrs: { id: o } }), s = m("video");
    s.src = e, s.controls = !0, s.autoplay = !0, s.muted = !0;
    const a = m("textarea", {
      attrs: {
        placeholder: "Optional: Describe the issue you recorded...",
        "aria-label": "Describe the issue you recorded"
      }
    }), c = m("button", {
      class: "qaid-video-btn qaid-video-btn-send",
      text: "Send",
      attrs: { type: "button" },
      on: { click: () => this.submitVideoFeedback(a.value.trim() || null, c) }
    }), l = m(
      "div",
      { class: "qaid-video-preview-box" },
      n,
      s,
      a,
      m(
        "div",
        { class: "qaid-video-preview-actions" },
        m("button", {
          class: "qaid-video-btn qaid-video-btn-cancel",
          text: "Cancel",
          attrs: { type: "button" },
          on: { click: () => this.cancelRecordingPreview() }
        }),
        m("button", {
          class: "qaid-video-btn qaid-video-btn-rerecord",
          text: "Re-record",
          attrs: { type: "button" },
          on: {
            click: () => {
              this.cancelRecordingPreview(), this.startRecording();
            }
          }
        }),
        c
      )
    );
    this.videoPreview = m(
      "div",
      { class: "qaid-video-preview", style: `z-index:${this.host.config.zIndex + 100}` },
      l
    ), this.host.applyVars(this.videoPreview), this.host.overlayShadowHost && (this.host.overlayShadowHost.style.pointerEvents = "auto"), t.appendChild(this.videoPreview), this.host.openDialogA11y(l, { labelledbyId: n.id }), document.addEventListener("keydown", this.host.boundKeyDown);
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
  async submitVideoFeedback(t, e) {
    if (!this.recordedBlob || this.isSendingVideo) return;
    this.isSendingVideo = !0, e.disabled = !0, e.textContent = "Sending...";
    const o = new FormData();
    o.append("video", this.recordedBlob, `recording.${this.recordedBlob.type.includes("mp4") ? "mp4" : "webm"}`), o.append("pageUrl", window.location.href), o.append("visitorId", this.host.visitorId), this.host.config.apiKey && o.append("apiKey", this.host.config.apiKey), t && o.append("message", t), this.host.consoleCapture && o.append("consoleErrors", JSON.stringify(this.host.consoleCapture.errors)), this.networkCapture && o.append("networkErrors", JSON.stringify(this.networkCapture.errors));
    let n = null;
    try {
      const s = await fetch(`${this.host.config.endpoint}/video`, {
        method: "POST",
        body: o
      });
      if (s.ok) {
        this.host.announceMsg("Recording sent");
        try {
          n = (await s.json())?.id ?? null;
        } catch {
        }
      } else
        console.error("Failed to submit video feedback:", await s.text()), this.host.announceMsg("Failed to send recording", !0);
    } catch (s) {
      console.error("Failed to submit video feedback:", s), this.host.announceMsg("Failed to send recording", !0);
    }
    this.isSendingVideo = !1, this.removeVideoPreview(), this.cleanupRecording(), await this.host.tryLaunchQuest("video", n);
  }
  cleanupRecording() {
    this.isRecording = !1, this.removeRecordingIndicator(), this.videoRecorder && (this.videoRecorder.destroy(), this.videoRecorder = null), this.networkCapture && (this.networkCapture.restore(), this.networkCapture = null), this.recordedBlob && (this.recordedBlob = null), this.host.setButtonsDisabled(!1), this.host.overlayShadowHost && this.host.state === "IDLE" && (this.host.overlayShadowHost.style.pointerEvents = "none");
  }
}
const pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RecordingController: Ei
}, Symbol.toStringTag, { value: "Module" }));
async function Ti(i = {}) {
  const { quality: t = 1, maxWidth: e = 1280, maxHeight: o = 800 } = i;
  try {
    if (!navigator.mediaDevices?.getDisplayMedia)
      return console.warn("Screen Capture API not available"), null;
    const n = await navigator.mediaDevices.getDisplayMedia({
      preferCurrentTab: !0,
      video: {
        displaySurface: "browser"
      }
    }), s = n.getVideoTracks()[0], a = s.getSettings(), c = document.createElement("video");
    c.srcObject = n, c.muted = !0, await new Promise((g) => {
      c.onloadedmetadata = () => {
        c.play(), g();
      };
    }), await new Promise((g) => {
      const w = () => {
        c.readyState >= 2 ? g() : requestAnimationFrame(w);
      };
      w();
    }), await new Promise((g) => setTimeout(g, 100));
    const l = a.width || c.videoWidth, d = a.height || c.videoHeight, r = Math.min(e / l, o / d, 1), h = Math.round(l * r), p = Math.round(d * r), b = document.createElement("canvas");
    b.width = h, b.height = p;
    const y = b.getContext("2d");
    return y ? (y.drawImage(c, 0, 0, h, p), s.stop(), b.toDataURL("image/webp", t)) : (s.stop(), null);
  } catch (n) {
    return console.warn("Screenshot capture failed:", n), null;
  }
}
const ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  captureScreenshot: Ti
}, Symbol.toStringTag, { value: "Module" }));
class Ai {
  constructor(t) {
    this.host = t;
  }
  host;
  modalContainer = null;
  backdrop = null;
  open() {
    const t = this.host.ensureOverlayHost();
    this.backdrop = document.createElement("div"), this.backdrop.className = "qaid-backdrop", this.backdrop.style.zIndex = String(this.host.config.zIndex + 2), this.backdrop.style.background = `rgba(0, 0, 0, ${this.host.config.backdropOpacity})`, this.backdrop.addEventListener("click", () => this.close()), this.host.applyVars(this.backdrop), this.host.isMobile ? this.showBottomSheet() : this.showPositionedModal(), t.appendChild(this.backdrop), document.addEventListener("keydown", this.host.boundKeyDown);
  }
  /** Escape / external close. Runs the finalize-PATCH + teardown. */
  close() {
    this.host.state === "MODAL_OPEN" && this.host.feedbackId && fetch(`${this.host.config.endpoint}/${this.host.feedbackId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: null })
    }).catch((t) => console.error("Failed to finalize feedback:", t)), this.teardown(), this.host.resetFeedbackUi();
  }
  /** DOM/listener teardown only — no PATCH, no state reset (for embed destroy). */
  destroy() {
    this.teardown();
  }
  teardown() {
    this.host.closeDialogA11y(), this.modalContainer && (this.modalContainer.remove(), this.modalContainer = null), this.backdrop && (this.backdrop.remove(), this.backdrop = null), document.removeEventListener("keydown", this.host.boundKeyDown);
  }
  showBottomSheet() {
    const t = this.host.ensureOverlayHost(), e = document.createElement("div");
    e.className = "qaid-bottom-sheet", e.style.zIndex = String(this.host.config.zIndex + 3), e.innerHTML = `
      <div class="qaid-bottom-sheet-content">
        <div class="qaid-bottom-sheet-handle"></div>
        ${this.getModalContent()}
      </div>
    `, this.host.applyVars(e), t.appendChild(e), this.modalContainer = e, this.setupModalInteractions();
  }
  showPositionedModal() {
    const t = this.host.ensureOverlayHost(), { modal: e, arrow: o } = De(
      this.host.selectedBounds,
      window.innerWidth,
      window.innerHeight,
      {
        width: this.host.config.modalWidth,
        height: 280,
        arrowHeight: 12,
        gap: 8,
        viewportPadding: 16
      }
    );
    this.modalContainer = document.createElement("div"), this.modalContainer.className = `qaid-modal-container qaid-${e.position}`, this.modalContainer.style.top = `${e.top}px`, this.modalContainer.style.left = `${e.left}px`, this.modalContainer.style.zIndex = String(this.host.config.zIndex + 3);
    const n = document.createElement("div");
    n.className = "qaid-modal-arrow", n.style.left = `${o.left}px`;
    const s = document.createElement("div");
    s.className = "qaid-modal-box", s.innerHTML = this.getModalContent(), this.modalContainer.appendChild(n), this.modalContainer.appendChild(s), this.host.applyVars(this.modalContainer), t.appendChild(this.modalContainer), this.setupModalInteractions();
  }
  getModalContent() {
    const t = this.host.feedbackData.feedbackType, e = t === "up", o = this.host.config.positiveIcon || V, n = this.host.config.negativeIcon || N, s = this.host.config.buttonClass ? `qaid-type-toggle qaid-type-toggle-custom ${this.host.config.buttonClass} ${e ? "qaid-btn-up" : "qaid-btn-down"}` : `qaid-type-toggle ${e ? "qaid-type-up" : "qaid-type-down"}`;
    return `
      <div class="qaid-modal-header">
        ${t === "neutral" ? `<span class="qaid-type-static" aria-hidden="true">${this.host.config.feedbackIcon || gt}</span>` : `<button type="button" class="${s}" title="Click to switch" aria-pressed="${e}" aria-label="${e ? "Feedback type: positive" : "Feedback type: negative"}">
          ${e ? o : n}
        </button>`}
        <div class="qaid-modal-header-text">
          <h3 class="qaid-modal-title" id="qaid-modal-title-${this.host.uid}">${this.host.config.text.modalTitle}</h3>
          <p class="qaid-modal-subtitle" id="qaid-modal-subtitle-${this.host.uid}">${this.host.config.text.modalSubtitle}</p>
        </div>
      </div>
      <textarea class="qaid-textarea" aria-label="${this.host.config.text.modalSubtitle}" placeholder="${this.host.config.text.placeholder}"></textarea>
      <div class="qaid-btn-row">
        <button type="button" class="qaid-btn-submit">${this.host.config.text.skipButton}</button>
      </div>
    `;
  }
  setupModalInteractions() {
    this.host.openDialogA11y(this.modalContainer, {
      labelledbyId: `qaid-modal-title-${this.host.uid}`,
      describedbyId: `qaid-modal-subtitle-${this.host.uid}`
    });
    const t = this.modalContainer.querySelector(".qaid-textarea"), e = this.modalContainer.querySelector(".qaid-btn-submit");
    t && (setTimeout(() => t.focus(), 100), t.addEventListener("input", () => {
      e && (e.textContent = t.value.trim() ? this.host.config.text.submitButton : this.host.config.text.skipButton);
    })), e && e.addEventListener("click", () => {
      const n = t?.value.trim() || null;
      this.submitMessage(n);
    });
    const o = this.modalContainer.querySelector(".qaid-type-toggle");
    o && o.addEventListener("click", () => {
      const n = this.host.feedbackData.feedbackType === "up" ? "down" : "up";
      this.host.feedbackData.feedbackType = n, this.host.config.buttonClass ? (o.classList.toggle("qaid-btn-up", n === "up"), o.classList.toggle("qaid-btn-down", n === "down")) : (o.classList.toggle("qaid-type-up", n === "up"), o.classList.toggle("qaid-type-down", n === "down"));
      const s = this.host.config.positiveIcon || V, a = this.host.config.negativeIcon || N;
      o.innerHTML = n === "up" ? s : a;
      const c = n === "up" ? "Feedback type: positive" : "Feedback type: negative";
      o.setAttribute("aria-pressed", String(n === "up")), o.setAttribute("aria-label", c), this.host.announceMsg(c), this.host.feedbackId && fetch(`${this.host.config.endpoint}/${this.host.feedbackId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedbackType: n })
      }).catch((l) => console.error("Failed to update feedback type:", l));
    });
  }
  async submitMessage(t) {
    let e = !1;
    if (this.host.feedbackId) {
      try {
        await fetch(`${this.host.config.endpoint}/${this.host.feedbackId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: t })
        }), e = !0;
      } catch (o) {
        console.error("Failed to submit feedback message:", o);
      }
      this.host.setFeedbackId(null);
    }
    if (e && !this.host.config.hideConfirmation) {
      this.showConfirmation();
      return;
    }
    this.close();
  }
  /**
   * Replace the modal's contents with a checkmark and a short acknowledgement.
   *
   * The submit button that had focus is gone by this point, so focus moves to
   * the heading (WCAG 2.4.3) and the message is announced. Mirrors the quests
   * embed's thank-you screen so the two products confirm the same way.
   */
  showConfirmation() {
    const t = this.modalContainer?.querySelector(".qaid-modal-box") ?? this.modalContainer?.querySelector(".qaid-bottom-sheet-content") ?? this.modalContainer;
    if (!t) {
      this.close();
      return;
    }
    const e = this.host.config.text, o = `qaid-confirm-title-${this.host.uid}`;
    t.innerHTML = `
      <div class="qaid-confirm">
        <span class="qaid-confirm-icon" aria-hidden="true">${vt}</span>
        <h3 class="qaid-confirm-title" id="${o}" tabindex="-1">${e.confirmationTitle}</h3>
        <p class="qaid-confirm-message">${e.confirmationMessage}</p>
        <button type="button" class="qaid-btn-submit qaid-confirm-close">${e.confirmationClose}</button>
      </div>
    `, t.querySelector(".qaid-confirm-close")?.addEventListener("click", () => this.close());
    const n = t.querySelector(`#${CSS.escape(o)}`);
    requestAnimationFrame(() => n?.focus()), this.host.announceMsg(`${e.confirmationTitle} ${e.confirmationMessage}`, !0);
  }
}
const mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalController: Ai
}, Symbol.toStringTag, { value: "Module" })), Lt = ["data-comp", "data-qa", "data-testid", "data-id"];
function It(i, t = document.body) {
  let e = i;
  for (; e && e !== t; ) {
    for (const o of Lt) {
      const n = e.getAttribute(o);
      if (n)
        return `${o}="${n}"`;
    }
    e = e.parentElement;
  }
  return null;
}
function Li(i, t = 100) {
  const e = i.textContent?.trim().slice(0, t) || "";
  return e.length === t ? e + "..." : e;
}
function Ii(i) {
  let t = 1, e = i.previousElementSibling;
  for (; e; )
    t++, e = e.previousElementSibling;
  return t;
}
function Di(i) {
  const t = [];
  let e = i;
  for (; e && e !== document.body && e !== document.documentElement; ) {
    const o = e.tagName.toLowerCase(), n = Ii(e);
    t.unshift(`${o}:nth-child(${n})`), e = e.parentElement;
  }
  return t.length > 0 ? `body > ${t.join(" > ")}` : "body";
}
function Mi(i) {
  return i.replace(/([!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, "\\$1");
}
function Ri(i) {
  const t = It(i);
  return t ? `[${t}]` : i.id ? `#${Mi(i.id)}` : Di(i);
}
function F(i) {
  const t = Li(i), e = It(i);
  return { selector: Ri(i), text: t, dataAttr: e };
}
const Pi = [
  "a[href]",
  "button",
  "input:not([type=hidden])",
  "select",
  "textarea",
  "summary",
  "[tabindex]",
  "[role]",
  "img",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "li",
  "label",
  ...Lt.map((i) => `[${i}]`)
].join(","), Bi = /^(?:A|BUTTON|INPUT|SELECT|TEXTAREA|SUMMARY)$/;
function Hi(i) {
  if (i.hasAttribute("hidden") || i.getAttribute("aria-hidden") === "true") return !1;
  const t = i.ownerDocument?.defaultView;
  if (t && typeof t.getComputedStyle == "function") {
    const e = t.getComputedStyle(i);
    if (e.display === "none" || e.visibility === "hidden") return !1;
  }
  return !0;
}
function Oi(i = {}) {
  const t = i.root ?? document.body, e = i.selector ?? Pi, o = i.isExcluded ?? (() => !1), n = i.isVisible ?? Hi;
  return Array.from(t.querySelectorAll(e)).filter(
    (s) => !o(s) && n(s)
  );
}
function $i(i) {
  const t = i.candidates ?? Oi({
    root: i.root,
    selector: i.selector,
    isExcluded: i.isExcluded,
    isVisible: i.isVisible
  }), e = i.moveFocus ?? !0, o = i.eventTarget ?? document, n = /* @__PURE__ */ new Set();
  let s = -1, a = !1;
  const c = i.initial !== void 0 ? i.initial : typeof document < "u" ? document.activeElement : null;
  if (c) {
    const u = t.indexOf(c);
    u >= 0 && (s = u);
  }
  s < 0 && t.length > 0 && (s = 0);
  function l(u) {
    if (!e) return;
    const k = u;
    if (typeof k.focus == "function") {
      u.getAttribute("tabindex") === null && !Bi.test(u.tagName) && (u.setAttribute("tabindex", "-1"), n.add(u));
      try {
        k.focus();
      } catch {
      }
    }
  }
  function d() {
    const u = t[s];
    u && (l(u), i.onHighlight?.(u, s));
  }
  function r(u) {
    if (a || t.length === 0) return;
    const k = t.length;
    s = (u % k + k) % k, d();
  }
  function h() {
    r(s + 1);
  }
  function p() {
    r(s - 1);
  }
  function b() {
    return t[s] ?? null;
  }
  function y() {
    a || (a = !0, o.removeEventListener("keydown", x, !0), n.forEach((u) => u.removeAttribute("tabindex")), n.clear());
  }
  function g() {
    if (a) return;
    const u = b();
    y(), u && i.onSelect(u);
  }
  function w() {
    a || (y(), i.onCancel?.());
  }
  function x(u) {
    if (!a)
      switch (u.key) {
        case "Tab":
          u.preventDefault(), u.stopPropagation(), u.shiftKey ? p() : h();
          break;
        case "ArrowDown":
        case "ArrowRight":
          u.preventDefault(), u.stopPropagation(), h();
          break;
        case "ArrowUp":
        case "ArrowLeft":
          u.preventDefault(), u.stopPropagation(), p();
          break;
        case "Enter":
        case " ":
        case "Spacebar":
          u.preventDefault(), u.stopPropagation(), g();
          break;
        case "Escape":
        case "Esc":
          u.preventDefault(), u.stopPropagation(), w();
          break;
      }
  }
  return o.addEventListener("keydown", x, !0), s >= 0 && d(), {
    candidates: t,
    getIndex: () => s,
    getCurrent: b,
    next: h,
    prev: p,
    moveTo: r,
    select: g,
    cancel: w,
    handleKey: x,
    stop: y
  };
}
const zi = 12;
class _i {
  constructor(t) {
    this.host = t;
  }
  host;
  mousePos = { x: 0, y: 0 };
  touchStartPos = null;
  overlayContainer = null;
  captureLayer = null;
  crosshairH = null;
  crosshairV = null;
  scope = null;
  highlightBox = null;
  marker = null;
  keyboardController = null;
  boundMouseMove = (t) => this.handleMouseMove(t);
  boundClick = (t) => this.handleClick(t);
  boundTouchStart = (t) => this.handleTouchStart(t);
  boundTouchEnd = (t) => this.handleTouchEnd(t);
  startPointer(t, e) {
    this.host.setState("TARGETING"), this.host.feedbackData.feedbackType = t, this.host.feedbackData.elementSelector = null, this.host.feedbackData.elementText = null, this.host.selectedBounds.visible = !1, this.mousePos.x = e.clientX, this.mousePos.y = e.clientY, document.body.classList.add("qaid-targeting"), t === "up" ? document.body.classList.add("qaid-type-up") : document.body.classList.remove("qaid-type-up"), document.body.style.setProperty("--qaid-positive", this.host.cssVars["--qaid-positive"]), document.body.style.setProperty("--qaid-negative", this.host.cssVars["--qaid-negative"]), this.createTargetingOverlay(), document.addEventListener("keydown", this.host.boundKeyDown), document.addEventListener("mousemove", this.boundMouseMove), document.addEventListener("click", this.boundClick, !0), document.addEventListener("touchstart", this.boundTouchStart, { passive: !0 }), document.addEventListener("touchend", this.boundTouchEnd, { passive: !1 });
  }
  /**
   * Keyboard-driven targeting. Mirrors startPointer minus the mouse plumbing:
   * no `qaid-targeting` body class (keeps the cursor visible for keyboard
   * users), no mouse reticle, and no document mouse/click listeners. The
   * KeyboardTargetingController owns Tab/Arrow/Enter/Space/Escape.
   */
  startKeyboard(t) {
    this.host.setState("TARGETING"), this.host.feedbackData.feedbackType = t, this.host.feedbackData.elementSelector = null, this.host.feedbackData.elementText = null, this.host.selectedBounds.visible = !1, document.body.style.setProperty("--qaid-positive", this.host.cssVars["--qaid-positive"]), document.body.style.setProperty("--qaid-negative", this.host.cssVars["--qaid-negative"]), this.createTargetingOverlay(), this.crosshairH && (this.crosshairH.style.display = "none"), this.crosshairV && (this.crosshairV.style.display = "none"), this.scope && (this.scope.style.display = "none"), this.keyboardController = $i({
      isExcluded: (e) => M(e),
      onHighlight: (e) => {
        const o = e.getBoundingClientRect(), n = this.highlightBox;
        n && (n.style.transform = `translate(${o.left}px, ${o.top}px)`, n.style.width = `${o.width}px`, n.style.height = `${o.height}px`, n.style.display = "block");
        const { text: s } = F(e);
        this.host.announceMsg(`Targeting ${s || e.tagName.toLowerCase()}`);
      },
      onSelect: (e) => this.selectKeyboardTarget(e),
      onCancel: () => this.cancel()
    });
  }
  selectKeyboardTarget(t) {
    const e = ot(t, 8);
    Object.assign(this.host.selectedBounds, e, {
      clickX: e.x + e.width / 2,
      clickY: e.y + e.height / 2,
      visible: !0
    });
    const { selector: o, text: n } = F(t);
    this.host.feedbackData.elementSelector = o, this.host.feedbackData.elementText = n, this.removeTargetingOverlay(), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.keyboardController = null, this.host.clearActiveThumb(), this.host.setState("SELECTED"), this.showSelectedMarker(), this.host.submitFeedback();
  }
  createTargetingOverlay() {
    const t = this.host.ensureOverlayHost();
    this.overlayContainer = document.createElement("div"), this.overlayContainer.className = `qaid-targeting-overlay qaid-type-${this.host.feedbackData.feedbackType}`, this.captureLayer = document.createElement("div"), this.captureLayer.className = "qaid-capture-layer";
    const e = document.createElement("div");
    e.className = "qaid-vignette", this.crosshairH = document.createElement("div"), this.crosshairH.className = "qaid-crosshair-h", this.crosshairV = document.createElement("div"), this.crosshairV.className = "qaid-crosshair-v", this.scope = document.createElement("div"), this.scope.className = "qaid-scope", this.scope.innerHTML = `
      <div class="qaid-scope-ring"></div>
      <div class="qaid-scope-ring-inner"></div>
      <div class="qaid-scope-dot"></div>
    `, this.highlightBox = document.createElement("div"), this.highlightBox.className = "qaid-highlight-box", this.overlayContainer.appendChild(this.captureLayer), this.overlayContainer.appendChild(e), this.overlayContainer.appendChild(this.highlightBox), this.overlayContainer.appendChild(this.crosshairH), this.overlayContainer.appendChild(this.crosshairV), this.overlayContainer.appendChild(this.scope), this.crosshairH.style.top = `${this.mousePos.y}px`, this.crosshairV.style.left = `${this.mousePos.x}px`, this.scope.style.left = `${this.mousePos.x}px`, this.scope.style.top = `${this.mousePos.y}px`, this.host.applyVars(this.overlayContainer), t.appendChild(this.overlayContainer);
  }
  handleMouseMove(t) {
    this.updateReticleAt(t.clientX, t.clientY);
  }
  /** Move the crosshair/scope reticle and highlight the element under (x, y). */
  updateReticleAt(t, e) {
    if (this.mousePos.x = t, this.mousePos.y = e, this.crosshairH && (this.crosshairH.style.top = `${e}px`), this.crosshairV && (this.crosshairV.style.left = `${t}px`), this.scope && (this.scope.style.left = `${t}px`, this.scope.style.top = `${e}px`), this.captureLayer && this.host.shadowHost) {
      const o = [this.host.shadowHost, this.host.overlayShadowHost].filter(Boolean), n = it(t, e, o);
      if (n && !M(n)) {
        if (this.highlightBox) {
          const s = n.getBoundingClientRect();
          this.highlightBox.style.transform = `translate(${s.left}px, ${s.top}px)`, this.highlightBox.style.width = `${s.width}px`, this.highlightBox.style.height = `${s.height}px`, this.highlightBox.style.display = "block";
        }
      } else this.highlightBox && (this.highlightBox.style.display = "none");
    }
  }
  handleClick(t) {
    t.preventDefault(), t.stopPropagation(), this.selectAt(t.clientX, t.clientY);
  }
  // ---- Touch targeting (iOS/iPadOS) ----
  handleTouchStart(t) {
    const e = t.touches[0];
    e && (this.touchStartPos = { x: e.clientX, y: e.clientY }, this.updateReticleAt(e.clientX, e.clientY));
  }
  handleTouchEnd(t) {
    const e = t.changedTouches[0], o = this.touchStartPos;
    this.touchStartPos = null, !(!e || !o || Math.hypot(e.clientX - o.x, e.clientY - o.y) > zi) && (t.preventDefault(), this.selectAt(e.clientX, e.clientY));
  }
  /** Select the element under (x, y) and tear down targeting. */
  selectAt(t, e) {
    const o = [this.host.shadowHost, this.host.overlayShadowHost].filter(Boolean), n = it(t, e, o);
    if (!n || M(n))
      return;
    const s = ot(n, 8);
    Object.assign(this.host.selectedBounds, s, { clickX: t, clickY: e, visible: !0 });
    const { selector: a, text: c } = F(n);
    this.host.feedbackData.elementSelector = a, this.host.feedbackData.elementText = c, this.stopTargetingListeners(), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.host.setState("SELECTED"), this.host.clearActiveThumb(), this.showSelectedMarker(), this.host.submitFeedback();
  }
  stopTargetingListeners() {
    this.removeTargetingOverlay(), this.touchStartPos = null, document.removeEventListener("mousemove", this.boundMouseMove), document.removeEventListener("click", this.boundClick, !0), document.removeEventListener("touchstart", this.boundTouchStart), document.removeEventListener("touchend", this.boundTouchEnd), document.removeEventListener("keydown", this.host.boundKeyDown);
  }
  cancel() {
    this.keyboardController?.stop(), this.keyboardController = null, this.stopTargetingListeners(), document.body.classList.remove("qaid-targeting", "qaid-type-up"), document.body.style.removeProperty("--qaid-positive"), document.body.style.removeProperty("--qaid-negative"), this.host.clearActiveThumb(), this.host.setState("IDLE"), this.host.feedbackData.feedbackType = null, this.host.feedbackData.elementSelector = null, this.host.feedbackData.elementText = null, this.host.selectedBounds.visible = !1;
  }
  removeTargetingOverlay() {
    this.overlayContainer && (this.overlayContainer.remove(), this.overlayContainer = null), this.captureLayer = null, this.crosshairH = null, this.crosshairV = null, this.scope = null;
  }
  showSelectedMarker() {
    const t = this.host.ensureOverlayHost();
    this.marker = document.createElement("div"), this.marker.className = "qaid-selected-marker", this.marker.style.left = `${this.host.selectedBounds.x}px`, this.marker.style.top = `${this.host.selectedBounds.y}px`, this.marker.style.width = `${this.host.selectedBounds.width}px`, this.marker.style.height = `${this.host.selectedBounds.height}px`, this.marker.style.zIndex = String(this.host.config.zIndex + 1), this.host.applyVars(this.marker), t.appendChild(this.marker);
  }
  hideMarker() {
    this.marker && (this.marker.remove(), this.marker = null);
  }
  /** Full teardown for embed.destroy(). */
  destroy() {
    this.keyboardController?.stop(), this.keyboardController = null, this.stopTargetingListeners(), this.hideMarker();
  }
}
const bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TargetingController: _i
}, Symbol.toStringTag, { value: "Module" }));
export {
  At as AnnotationEditor,
  Ue as QaidFeedback,
  hi as captureDomScreenshot,
  Qe as captureNetworkErrors,
  Tt as compositeAnnotations,
  ai as createVideoRecorder,
  B as drawShape,
  Ct as getSupportedMimeType,
  ci as isDomScreenshotSupported,
  si as isVideoRecordingSupported,
  Ci as openAnnotationEditor,
  P as rectFromPoints
};
//# sourceMappingURL=index.js.map
