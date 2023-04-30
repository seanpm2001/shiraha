import"../sb-preview/runtime.mjs";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const _ of t.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&c(_)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const d="modulepreload",R=function(o,i){return new URL(o,i).href},l={},e=function(i,n,c){if(!n||n.length===0)return i();const r=document.getElementsByTagName("link");return Promise.all(n.map(t=>{if(t=R(t,c),t in l)return;l[t]=!0;const _=t.endsWith(".css"),p=_?'[rel="stylesheet"]':"";if(!!c)for(let a=r.length-1;a>=0;a--){const m=r[a];if(m.href===t&&(!_||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${p}`))return;const s=document.createElement("link");if(s.rel=_?"stylesheet":d,_||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),_)return new Promise((a,m)=>{s.addEventListener("load",a),s.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>i())},{createChannel:T}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:f}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:O}=__STORYBOOK_MODULE_PREVIEW_API__,E=T({page:"preview"});O.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;const{SERVER_CHANNEL_URL:u}=globalThis;if(u){const o=f({url:u});O.setServerChannel(o),window.__STORYBOOK_SERVER_CHANNEL__=o}const P={"./src/stories/intro.mdx":async()=>e(()=>import("./intro-62f2fbf0.js"),["./intro-62f2fbf0.js","./jsx-runtime-6eef64cc.js","./index-c013ead5.js","./_commonjsHelpers-725317a4.js","./index-dc1d5b46.js"],import.meta.url),"./src/stories/packages/shiraha-colors.mdx":async()=>e(()=>import("./shiraha-colors-dcf661ae.js"),["./shiraha-colors-dcf661ae.js","./jsx-runtime-6eef64cc.js","./index-c013ead5.js","./_commonjsHelpers-725317a4.js","./index-970658a3.js","./index-d475d2ea.js","./index-d37d4223.js","./index-e02d3f7d.js","./index-356e4a49.js","./index-dc1d5b46.js"],import.meta.url),"./src/stories/packages/shiraha.mdx":async()=>e(()=>import("./shiraha-09ee8ad7.js"),["./shiraha-09ee8ad7.js","./jsx-runtime-6eef64cc.js","./index-c013ead5.js","./_commonjsHelpers-725317a4.js","./index-970658a3.js","./index-d475d2ea.js","./index-d37d4223.js","./index-e02d3f7d.js","./index-356e4a49.js","./index-dc1d5b46.js"],import.meta.url),"./src/stories/components/footer.stories.ts":async()=>e(()=>import("./footer.stories-55826b1b.js"),["./footer.stories-55826b1b.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/components/header.stories.ts":async()=>e(()=>import("./header.stories-95bbee0a.js"),["./header.stories-95bbee0a.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/components/pagination.stories.ts":async()=>e(()=>import("./pagination.stories-4961f436.js"),["./pagination.stories-4961f436.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/components/section.stories.ts":async()=>e(()=>import("./section.stories-2559dde0.js"),["./section.stories-2559dde0.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/components/table.stories.ts":async()=>e(()=>import("./table.stories-9787fe8a.js"),["./table.stories-9787fe8a.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/templates/openprops.stories.ts":async()=>e(()=>import("./openprops.stories-f6beedb7.js"),["./openprops.stories-f6beedb7.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/typography/a.stories.ts":async()=>e(()=>import("./a.stories-1742ef0f.js"),["./a.stories-1742ef0f.js","./lit-element-2d314a70.js"],import.meta.url)};async function L(o){return P[o]()}const{composeConfigs:S,PreviewWeb:h,ClientApi:A}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const o=await Promise.all([e(()=>import("./preview-c8f038ec.js"),[],import.meta.url),e(()=>import("./config-8cd9de2f.js"),["./config-8cd9de2f.js","./index-d475d2ea.js","./index-356e4a49.js","./lit-element-2d314a70.js","./index-e02d3f7d.js","./_commonjsHelpers-725317a4.js"],import.meta.url),e(()=>import("./preview-0435c720.js"),["./preview-0435c720.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),e(()=>import("./preview-a3c8f708.js"),[],import.meta.url),e(()=>import("./preview-47e5b674.js"),[],import.meta.url),e(()=>import("./preview-f96f0111.js"),["./preview-f96f0111.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),e(()=>import("./preview-e6f1f377.js"),["./preview-e6f1f377.js","./index-d475d2ea.js"],import.meta.url),e(()=>import("./preview-62235626.js"),["./preview-62235626.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),e(()=>import("./preview-b1164a2e.js"),["./preview-b1164a2e.js","./index-d475d2ea.js"],import.meta.url),e(()=>import("./preview-a62cc3b2.js"),[],import.meta.url),e(()=>import("./preview-1ac68499.js"),["./preview-1ac68499.js","./preview-87ba386a.css"],import.meta.url)]);return S(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new h;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new A({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:L,getProjectAnnotations:I});export{e as _};
//# sourceMappingURL=iframe-3d56657b.js.map
