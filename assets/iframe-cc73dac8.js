import"../sb-preview/runtime.mjs";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="modulepreload",R=function(o,_){return new URL(o,_).href},l={},t=function(_,n,c){if(!n||n.length===0)return _();const e=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=R(r,c),r in l)return;l[r]=!0;const s=r.endsWith(".css"),O=s?'[rel="stylesheet"]':"";if(!!c)for(let a=e.length-1;a>=0;a--){const m=e[a];if(m.href===r&&(!s||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${O}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":d,s||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),s)return new Promise((a,m)=>{i.addEventListener("load",a),i.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>_())},{createChannel:T}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:P}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:p}=__STORYBOOK_MODULE_PREVIEW_API__,E=T({page:"preview"});p.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;const{SERVER_CHANNEL_URL:u}=globalThis;if(u){const o=P({url:u});p.setServerChannel(o),window.__STORYBOOK_SERVER_CHANNEL__=o}const L={"./src/stories/intro.mdx":async()=>t(()=>import("./intro-9a32837d.js"),["./intro-9a32837d.js","./jsx-runtime-6eef64cc.js","./index-c013ead5.js","./_commonjsHelpers-725317a4.js","./index-dc1d5b46.js"],import.meta.url),"./src/stories/packages/shiraha-colors.mdx":async()=>t(()=>import("./shiraha-colors-d16859eb.js"),["./shiraha-colors-d16859eb.js","./jsx-runtime-6eef64cc.js","./index-c013ead5.js","./_commonjsHelpers-725317a4.js","./index-28882c24.js","./index-d475d2ea.js","./index-d37d4223.js","./index-e02d3f7d.js","./index-356e4a49.js","./index-dc1d5b46.js"],import.meta.url),"./src/stories/packages/shiraha-worklets.mdx":async()=>t(()=>import("./shiraha-worklets-810e9f33.js"),["./shiraha-worklets-810e9f33.js","./jsx-runtime-6eef64cc.js","./index-c013ead5.js","./_commonjsHelpers-725317a4.js","./index-28882c24.js","./index-d475d2ea.js","./index-d37d4223.js","./index-e02d3f7d.js","./index-356e4a49.js","./index-dc1d5b46.js"],import.meta.url),"./src/stories/packages/shiraha.mdx":async()=>t(()=>import("./shiraha-ead329bb.js"),["./shiraha-ead329bb.js","./jsx-runtime-6eef64cc.js","./index-c013ead5.js","./_commonjsHelpers-725317a4.js","./index-28882c24.js","./index-d475d2ea.js","./index-d37d4223.js","./index-e02d3f7d.js","./index-356e4a49.js","./index-dc1d5b46.js"],import.meta.url),"./src/stories/components/breadcrumb.stories.ts":async()=>t(()=>import("./breadcrumb.stories-0357ca6c.js"),["./breadcrumb.stories-0357ca6c.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/components/checkbox.stories.ts":async()=>t(()=>import("./checkbox.stories-8c1c9868.js"),["./checkbox.stories-8c1c9868.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/components/chips.stories.ts":async()=>t(()=>import("./chips.stories-94b9ea12.js"),["./chips.stories-94b9ea12.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/components/footer.stories.ts":async()=>t(()=>import("./footer.stories-55826b1b.js"),["./footer.stories-55826b1b.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/components/header.stories.ts":async()=>t(()=>import("./header.stories-95bbee0a.js"),["./header.stories-95bbee0a.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/components/pagination.stories.ts":async()=>t(()=>import("./pagination.stories-4961f436.js"),["./pagination.stories-4961f436.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/components/radio.stories.ts":async()=>t(()=>import("./radio.stories-d2fd14a4.js"),["./radio.stories-d2fd14a4.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/components/section.stories.ts":async()=>t(()=>import("./section.stories-2559dde0.js"),["./section.stories-2559dde0.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/components/table.stories.ts":async()=>t(()=>import("./table.stories-9787fe8a.js"),["./table.stories-9787fe8a.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/templates/openprops.stories.ts":async()=>t(()=>import("./openprops.stories-f6beedb7.js"),["./openprops.stories-f6beedb7.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/typography/a.stories.ts":async()=>t(()=>import("./a.stories-1742ef0f.js"),["./a.stories-1742ef0f.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/typography/details.stories.ts":async()=>t(()=>import("./details.stories-d5366b11.js"),["./details.stories-d5366b11.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/typography/list.stories.ts":async()=>t(()=>import("./list.stories-aeaee402.js"),["./list.stories-aeaee402.js","./lit-element-2d314a70.js"],import.meta.url),"./src/stories/worklets/squiggle.stories.ts":async()=>t(()=>import("./squiggle.stories-e9e8c6fb.js"),["./squiggle.stories-e9e8c6fb.js","./lit-element-2d314a70.js"],import.meta.url)};async function f(o){return L[o]()}const{composeConfigs:y,PreviewWeb:A,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,h=async()=>{const o=await Promise.all([t(()=>import("./preview-c8f038ec.js"),[],import.meta.url),t(()=>import("./config-8cd9de2f.js"),["./config-8cd9de2f.js","./index-d475d2ea.js","./index-356e4a49.js","./lit-element-2d314a70.js","./index-e02d3f7d.js","./_commonjsHelpers-725317a4.js"],import.meta.url),t(()=>import("./preview-0435c720.js"),["./preview-0435c720.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),t(()=>import("./preview-c184bc11.js"),[],import.meta.url),t(()=>import("./preview-47e5b674.js"),[],import.meta.url),t(()=>import("./preview-f96f0111.js"),["./preview-f96f0111.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-e6f1f377.js"),["./preview-e6f1f377.js","./index-d475d2ea.js"],import.meta.url),t(()=>import("./preview-62235626.js"),["./preview-62235626.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-b1164a2e.js"),["./preview-b1164a2e.js","./index-d475d2ea.js"],import.meta.url),t(()=>import("./preview-a62cc3b2.js"),[],import.meta.url),t(()=>import("./preview-061fc9b1.js"),["./preview-061fc9b1.js","./preview-a0c8dbb8.css"],import.meta.url)]);return y(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new A;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:f,getProjectAnnotations:h});export{t as _};
//# sourceMappingURL=iframe-cc73dac8.js.map
