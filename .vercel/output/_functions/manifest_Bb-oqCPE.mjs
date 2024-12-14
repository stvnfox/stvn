import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BCKAB5qC.mjs';
import { f as decodeKey } from './chunks/astro/server_knBeJGNS.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/stevenvos/Documents/Projecten/stvn/","adapterName":"@astrojs/vercel","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.0.5_@types+node@22.10.2_jiti@1.21.6_rollup@4.28.1_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/admin/[...params]","pattern":"^\\/admin(?:\\/(.*?))?\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/.pnpm/@sanity+astro@3.1.6_@sanity+client@6.24.1_@sanity+visual-editing@2.1.3_@sanity+client@6.24.1__5acvjwh4bbf2zah2yvhm2nedhq/node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/@sanity+astro@3.1.6_@sanity+client@6.24.1_@sanity+visual-editing@2.1.3_@sanity+client@6.24.1__5acvjwh4bbf2zah2yvhm2nedhq/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/stevenvos/Documents/Projecten/stvn/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/.pnpm/@sanity+astro@3.1.6_@sanity+client@6.24.1_@sanity+visual-editing@2.1.3_@sanity+client@6.24.1__5acvjwh4bbf2zah2yvhm2nedhq/node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/admin/_---params_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.0.5_@types+node@22.10.2_jiti@1.21.6_rollup@4.28.1_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/astro@5.0.5_@types+node@22.10.2_jiti@1.21.6_rollup@4.28.1_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CBLO5Man.mjs","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/@astrojs+react@4.1.0_@types+node@22.10.2_@types+react-dom@18.3.5_@types+react@18.3.16__@types_2wfhfnu3dcvsfas67b5fhv7t5a/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_C1YIWAGb.mjs","\u0000@astrojs-manifest":"manifest_Bb-oqCPE.mjs","/Users/stevenvos/Documents/Projecten/stvn/src/components/ThemeSwitcher":"_astro/ThemeSwitcher.BmO_sLAe.js","@astrojs/react/client.js":"_astro/client.bew_y6Fr.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/@vercel+speed-insights@1.1.0_react@18.3.1/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CZlyGQuz.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.1_@types+node@22.10.2_@types+react@18.3.16_react-dom_irurmeg2uenmdy47zjhcdqr4yu/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.P0qWWMe6.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.1_@types+node@22.10.2_@types+react@18.3.16_react-dom_irurmeg2uenmdy47zjhcdqr4yu/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.BeKaA5eu.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.1_@types+node@22.10.2_@types+react@18.3.16_react-dom_irurmeg2uenmdy47zjhcdqr4yu/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.BrYM9Vi7.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.1_@types+node@22.10.2_@types+react@18.3.16_react-dom_irurmeg2uenmdy47zjhcdqr4yu/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.gDYv96yJ.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/@sanity+client@6.24.1_debug@4.4.0/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.DltkKQRg.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.1_@types+node@22.10.2_@types+react@18.3.16_react-dom_irurmeg2uenmdy47zjhcdqr4yu/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.BqJQbfgW.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.1_@types+node@22.10.2_@types+react@18.3.16_react-dom_irurmeg2uenmdy47zjhcdqr4yu/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.AkdZq7Hz.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/@sanity+vision@3.67.1_@babel+runtime@7.26.0_@codemirror+lint@6.8.4_@codemirror+theme-one-dark_wf2rmrvmqgpha4wxt2pudo75tu/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.WFeo8sfz.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/@sanity+vision@3.67.1_@babel+runtime@7.26.0_@codemirror+lint@6.8.4_@codemirror+theme-one-dark_wf2rmrvmqgpha4wxt2pudo75tu/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.DBBHSXii.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.1_@types+node@22.10.2_@types+react@18.3.16_react-dom_irurmeg2uenmdy47zjhcdqr4yu/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.Qo8LytHf.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.67.1_@emotion+is-prop-valid@1.2.1_@types+node@22.10.2_@types+react@18.3.16_react-dom_irurmeg2uenmdy47zjhcdqr4yu/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.BIS7Zaz1.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/@sanity+astro@3.1.6_@sanity+client@6.24.1_@sanity+visual-editing@2.1.3_@sanity+client@6.24.1__5acvjwh4bbf2zah2yvhm2nedhq/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.Cwhn-MiI.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/@vercel+speed-insights@1.1.0_react@18.3.1/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts","var u=\"@vercel/speed-insights\",l=\"1.1.0\",f=()=>{window.si||(window.si=function(...n){(window.siq=window.siq||[]).push(n)})};function v(){return typeof window<\"u\"}function p(){try{const e=\"production\"}catch{}return\"production\"}function a(){return p()===\"development\"}function w(e,n){if(!e||!n)return e;let r=e;try{const s=Object.entries(n);for(const[i,t]of s)if(!Array.isArray(t)){const o=c(t);o.test(r)&&(r=r.replace(o,`/[${i}]`))}for(const[i,t]of s)if(Array.isArray(t)){const o=c(t.join(\"/\"));o.test(r)&&(r=r.replace(o,`/[...${i}]`))}return r}catch{return e}}function c(e){return new RegExp(`/${m(e)}(?=[/?#]|$)`)}function m(e){return e.replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\$&\")}var d=\"https://va.vercel-scripts.com/v1/speed-insights\",h=`${d}/script.js`,S=`${d}/script.debug.js`,g=\"/_vercel/speed-insights/script.js\";function R(e={}){var n;if(!v()||e.route===null)return null;f();const s=!!e.dsn?h:g,i=e.scriptSrc||(a()?S:s);if(document.head.querySelector(`script[src*=\"${i}\"]`))return null;e.beforeSend&&((n=window.si)==null||n.call(window,\"beforeSend\",e.beforeSend));const t=document.createElement(\"script\");return t.src=i,t.defer=!0,t.dataset.sdkn=u+(e.framework?`/${e.framework}`:\"\"),t.dataset.sdkv=l,e.sampleRate&&(t.dataset.sampleRate=e.sampleRate.toString()),e.route&&(t.dataset.route=e.route),e.endpoint&&(t.dataset.endpoint=e.endpoint),e.dsn&&(t.dataset.dsn=e.dsn),a()&&e.debug===!1&&(t.dataset.debug=\"false\"),t.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${i}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(t),{setRoute:o=>{t.dataset.route=o??void 0}}}customElements.define(\"vercel-speed-insights\",class extends HTMLElement{constructor(){super();try{const n=JSON.parse(this.dataset.props??\"{}\"),r=JSON.parse(this.dataset.params??\"{}\"),s=w(this.dataset.pathname??\"\",r);R({route:s,...n,framework:\"astro\",beforeSend:window.speedInsightsBeforeSend})}catch(n){throw new Error(`Failed to parse SpeedInsights properties: ${n}`)}}});"]],"assets":["/_astro/index.D28Ptep1.css","/favicon.ico","/stvn.ico","/_astro/SanityVision.DBBHSXii.js","/_astro/ThemeSwitcher.BmO_sLAe.js","/_astro/ViteDevServerStopped.gDYv96yJ.js","/_astro/browser.DZvyz5_v.js","/_astro/client.DKDgFDAK.js","/_astro/client.bew_y6Fr.js","/_astro/index.Qo8LytHf.js","/_astro/index.wSCK2UMg.js","/_astro/index2.BIS7Zaz1.js","/_astro/index3.AkdZq7Hz.js","/_astro/jsx-runtime.D2iUEjI1.js","/_astro/resources.P0qWWMe6.js","/_astro/resources.WFeo8sfz.js","/_astro/resources2.BrYM9Vi7.js","/_astro/resources3.BeKaA5eu.js","/_astro/resources4.BqJQbfgW.js","/_astro/stegaEncodeSourceMap.DltkKQRg.js","/_astro/studio-component.CaWHSSO4.js","/_astro/studio-component.Cwhn-MiI.js","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Z5dx9fJc5i6UKqJ2v6uq8vlIYMdoX/UyjykoPNVC8/8="});

export { manifest };
