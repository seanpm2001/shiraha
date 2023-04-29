import"../sb-preview/runtime.mjs";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const _ of e.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&c(_)}).observe(document,{childList:!0,subtree:!0});function n(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(r){if(r.ep)return;r.ep=!0;const e=n(r);fetch(r.href,e)}})();const d="modulepreload",R=function(o,i){return new URL(o,i).href},l={},t=function(i,n,c){if(!n||n.length===0)return i();const r=document.getElementsByTagName("link");return Promise.all(n.map(e=>{if(e=R(e,c),e in l)return;l[e]=!0;const _=e.endsWith(".css"),p=_?'[rel="stylesheet"]':"";if(!!c)for(let a=r.length-1;a>=0;a--){const m=r[a];if(m.href===e&&(!_||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${p}`))return;const s=document.createElement("link");if(s.rel=_?"stylesheet":d,_||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),_)return new Promise((a,m)=>{s.addEventListener("load",a),s.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i())},{createChannel:f}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:T}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:O}=__STORYBOOK_MODULE_PREVIEW_API__,E=f({page:"preview"});O.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;const{SERVER_CHANNEL_URL:u}=globalThis;if(u){const o=T({url:u});O.setServerChannel(o),window.__STORYBOOK_SERVER_CHANNEL__=o}const P={"./src/stories/intro.mdx":async()=>t(()=>import("./intro-62f2fbf0.js"),["./intro-62f2fbf0.js","./jsx-runtime-6eef64cc.js","./index-c013ead5.js","./_commonjsHelpers-725317a4.js","./index-dc1d5b46.js"],import.meta.url),"./src/stories/packages/shiraha-colors.mdx":async()=>t(()=>import("./shiraha-colors-278e04f8.js"),["./shiraha-colors-278e04f8.js","./jsx-runtime-6eef64cc.js","./index-c013ead5.js","./_commonjsHelpers-725317a4.js","./index-af06ccad.js","./index-d475d2ea.js","./index-d37d4223.js","./index-e02d3f7d.js","./index-356e4a49.js","./index-dc1d5b46.js"],import.meta.url),"./src/stories/packages/shiraha.mdx":async()=>t(()=>import("./shiraha-4da45178.js"),["./shiraha-4da45178.js","./jsx-runtime-6eef64cc.js","./index-c013ead5.js","./_commonjsHelpers-725317a4.js","./index-af06ccad.js","./index-d475d2ea.js","./index-d37d4223.js","./index-e02d3f7d.js","./index-356e4a49.js","./index-dc1d5b46.js"],import.meta.url),"./src/stories/components/footer.stories.ts":async()=>t(()=>import("./footer.stories-55826b1b.js"),["./footer.stories-55826b1b.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/components/header.stories.ts":async()=>t(()=>import("./header.stories-fea70feb.js"),["./header.stories-fea70feb.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/components/section.stories.ts":async()=>t(()=>import("./section.stories-2559dde0.js"),["./section.stories-2559dde0.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/components/table.stories.ts":async()=>t(()=>import("./table.stories-9787fe8a.js"),["./table.stories-9787fe8a.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/templates/openprops.stories.ts":async()=>t(()=>import("./openprops.stories-f6beedb7.js"),["./openprops.stories-f6beedb7.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/typography/a.stories.ts":async()=>t(()=>import("./a.stories-1742ef0f.js"),["./a.stories-1742ef0f.js","./lit-element-2d314a70.js"],import.meta.url)};async function L(o){return P[o]()}const{composeConfigs:S,PreviewWeb:h,ClientApi:A}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const o=await Promise.all([t(()=>import("./preview-c8f038ec.js"),[],import.meta.url),t(()=>import("./config-8cd9de2f.js"),["./config-8cd9de2f.js","./index-d475d2ea.js","./index-356e4a49.js","./lit-element-2d314a70.js","./index-e02d3f7d.js","./_commonjsHelpers-725317a4.js"],import.meta.url),t(()=>import("./preview-0435c720.js"),["./preview-0435c720.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),t(()=>import("./preview-37f494bf.js"),[],import.meta.url),t(()=>import("./preview-47e5b674.js"),[],import.meta.url),t(()=>import("./preview-f96f0111.js"),["./preview-f96f0111.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-e6f1f377.js"),["./preview-e6f1f377.js","./index-d475d2ea.js"],import.meta.url),t(()=>import("./preview-62235626.js"),["./preview-62235626.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-b1164a2e.js"),["./preview-b1164a2e.js","./index-d475d2ea.js"],import.meta.url),t(()=>import("./preview-a62cc3b2.js"),[],import.meta.url),t(()=>import("./preview-50121492.js"),["./preview-50121492.js","./preview-f6807fbc.css"],import.meta.url)]);return S(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new h;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new A({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:L,getProjectAnnotations:I});export{t as _};
//# sourceMappingURL=iframe-b5bfd7d7.js.map