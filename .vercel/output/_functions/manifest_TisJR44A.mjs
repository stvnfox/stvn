import { f as decodeKey } from './chunks/astro/server_6AfzjQGh.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CdhErmn0.mjs';

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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/stevenvos/Documents/Projecten/stvn/","cacheDir":"file:///Users/stevenvos/Documents/Projecten/stvn/node_modules/.astro/","outDir":"file:///Users/stevenvos/Documents/Projecten/stvn/dist/","srcDir":"file:///Users/stevenvos/Documents/Projecten/stvn/src/","publicDir":"file:///Users/stevenvos/Documents/Projecten/stvn/public/","buildClientDir":"file:///Users/stevenvos/Documents/Projecten/stvn/dist/client/","buildServerDir":"file:///Users/stevenvos/Documents/Projecten/stvn/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"blogs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blogs","isIndex":true,"type":"page","pattern":"^\\/blogs\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs/index.astro","pathname":"/blogs","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.8.0_@types+node@22.15.21_jiti@2.4.2_rollup@4.41.1_terser@5.39.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/admin/[...params]","pattern":"^\\/admin(?:\\/(.*?))?\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/.pnpm/@sanity+astro@3.2.6_@emotion+is-prop-valid@1.2.2_@sanity+client@6.29.1_@sanity+types@3.89.0_@_xslkqndo4zmaqs5vxcxe2a7cuu/node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/@sanity+astro@3.2.6_@emotion+is-prop-valid@1.2.2_@sanity+client@6.29.1_@sanity+types@3.89.0_@_xslkqndo4zmaqs5vxcxe2a7cuu/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/stevenvos/Documents/Projecten/stvn/src/pages/blogs/[blog].astro",{"propagation":"none","containsHead":true}],["/Users/stevenvos/Documents/Projecten/stvn/src/pages/blogs/index.astro",{"propagation":"none","containsHead":true}],["/Users/stevenvos/Documents/Projecten/stvn/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/.pnpm/@sanity+astro@3.2.6_@emotion+is-prop-valid@1.2.2_@sanity+client@6.29.1_@sanity+types@3.89.0_@_xslkqndo4zmaqs5vxcxe2a7cuu/node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/admin/_---params_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/blogs/index@_@astro":"pages/blogs.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/blogs/[blog]@_@astro":"pages/blogs/_blog_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.8.0_@types+node@22.15.21_jiti@2.4.2_rollup@4.41.1_terser@5.39.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/astro@5.8.0_@types+node@22.15.21_jiti@2.4.2_rollup@4.41.1_terser@5.39.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C1IgySdR.mjs","\u0000@astrojs-manifest":"manifest_TisJR44A.mjs","/Users/stevenvos/Documents/Projecten/stvn/src/components/ThemeSwitcher":"_astro/ThemeSwitcher.C7E3Dsfh.js","@astrojs/react/client.js":"_astro/client.5xwpefpL.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/@vercel+speed-insights@1.2.0_react@18.3.1/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CUqFY3xr.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.89.0_@emotion+is-prop-valid@1.2.2_@types+node@22.15.21_@types+react@18.3.22_immer@10_4t2e3ocpvnxthzq3v6mkwgqjta/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.Cx_CI-f3.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.89.0_@emotion+is-prop-valid@1.2.2_@types+node@22.15.21_@types+react@18.3.22_immer@10_4t2e3ocpvnxthzq3v6mkwgqjta/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.PEsDyRUP.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.89.0_@emotion+is-prop-valid@1.2.2_@types+node@22.15.21_@types+react@18.3.22_immer@10_4t2e3ocpvnxthzq3v6mkwgqjta/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.CZCu75-J.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.89.0_@emotion+is-prop-valid@1.2.2_@types+node@22.15.21_@types+react@18.3.22_immer@10_4t2e3ocpvnxthzq3v6mkwgqjta/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.cE3rnzSP.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.89.0_@emotion+is-prop-valid@1.2.2_@types+node@22.15.21_@types+react@18.3.22_immer@10_4t2e3ocpvnxthzq3v6mkwgqjta/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.CHsa1JST.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.89.0_@emotion+is-prop-valid@1.2.2_@types+node@22.15.21_@types+react@18.3.22_immer@10_4t2e3ocpvnxthzq3v6mkwgqjta/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.YSGugOQH.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/@sanity+client@7.3.0_debug@4.4.1/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.BhDsFart.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/@sanity+ui@2.15.18_@emotion+is-prop-valid@1.2.2_react-dom@18.3.1_react@18.3.1__react-is@18.3._e2ggkczllbeng5yat4wn6c3jam/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.DyZHIYGj.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.89.0_@emotion+is-prop-valid@1.2.2_@types+node@22.15.21_@types+react@18.3.22_immer@10_4t2e3ocpvnxthzq3v6mkwgqjta/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.BNhtpVIA.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/@sanity+vision@3.89.0_@babel+runtime@7.27.1_@codemirror+lint@6.8.5_@codemirror+theme-one-dark_zbziivlkfejmpvomf43hbzl62i/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.CVEYX7AM.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/@sanity+vision@3.89.0_@babel+runtime@7.27.1_@codemirror+lint@6.8.5_@codemirror+theme-one-dark_zbziivlkfejmpvomf43hbzl62i/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.BgC1yFXW.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.89.0_@emotion+is-prop-valid@1.2.2_@types+node@22.15.21_@types+react@18.3.22_immer@10_4t2e3ocpvnxthzq3v6mkwgqjta/node_modules/sanity/lib/_chunks-es/resources6.mjs":"_astro/resources6.DQfQ_-YP.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.89.0_@emotion+is-prop-valid@1.2.2_@types+node@22.15.21_@types+react@18.3.22_immer@10_4t2e3ocpvnxthzq3v6mkwgqjta/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.DoSPXHf2.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/sanity@3.89.0_@emotion+is-prop-valid@1.2.2_@types+node@22.15.21_@types+react@18.3.22_immer@10_4t2e3ocpvnxthzq3v6mkwgqjta/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.C7ZHElU3.js","/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/@sanity+astro@3.2.6_@emotion+is-prop-valid@1.2.2_@sanity+client@6.29.1_@sanity+types@3.89.0_@_xslkqndo4zmaqs5vxcxe2a7cuu/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.iw3G4eET.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/stevenvos/Documents/Projecten/stvn/node_modules/.pnpm/@vercel+speed-insights@1.2.0_react@18.3.1/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts","var o=\"@vercel/speed-insights\",u=\"1.2.0\",f=()=>{window.si||(window.si=function(...r){(window.siq=window.siq||[]).push(r)})};function l(){return typeof window<\"u\"}function h(){try{const e=\"production\"}catch{}return\"production\"}function d(){return h()===\"development\"}function v(e,r){if(!e||!r)return e;let n=e;try{const t=Object.entries(r);for(const[s,i]of t)if(!Array.isArray(i)){const a=c(i);a.test(n)&&(n=n.replace(a,`/[${s}]`))}for(const[s,i]of t)if(Array.isArray(i)){const a=c(i.join(\"/\"));a.test(n)&&(n=n.replace(a,`/[...${s}]`))}return n}catch{return e}}function c(e){return new RegExp(`/${g(e)}(?=[/?#]|$)`)}function g(e){return e.replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\$&\")}function m(e){return e.scriptSrc?e.scriptSrc:d()?\"https://va.vercel-scripts.com/v1/speed-insights/script.debug.js\":e.dsn?\"https://va.vercel-scripts.com/v1/speed-insights/script.js\":e.basePath?`${e.basePath}/speed-insights/script.js`:\"/_vercel/speed-insights/script.js\"}function w(e={}){var r;if(!l()||e.route===null)return null;f();const n=m(e);if(document.head.querySelector(`script[src*=\"${n}\"]`))return null;e.beforeSend&&((r=window.si)==null||r.call(window,\"beforeSend\",e.beforeSend));const t=document.createElement(\"script\");return t.src=n,t.defer=!0,t.dataset.sdkn=o+(e.framework?`/${e.framework}`:\"\"),t.dataset.sdkv=u,e.sampleRate&&(t.dataset.sampleRate=e.sampleRate.toString()),e.route&&(t.dataset.route=e.route),e.endpoint?t.dataset.endpoint=e.endpoint:e.basePath&&(t.dataset.endpoint=`${e.basePath}/speed-insights/vitals`),e.dsn&&(t.dataset.dsn=e.dsn),d()&&e.debug===!1&&(t.dataset.debug=\"false\"),t.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${n}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(t),{setRoute:s=>{t.dataset.route=s??void 0}}}function p(){try{return}catch{}}customElements.define(\"vercel-speed-insights\",class extends HTMLElement{constructor(){super();try{const r=JSON.parse(this.dataset.props??\"{}\"),n=JSON.parse(this.dataset.params??\"{}\"),t=v(this.dataset.pathname??\"\",n);w({route:t,...r,framework:\"astro\",basePath:p(),beforeSend:window.speedInsightsBeforeSend})}catch(r){throw new Error(`Failed to parse SpeedInsights properties: ${r}`)}}});"]],"assets":["/_astro/_blog_.By5UxzcH.css","/favicon.ico","/stvn.ico","/_astro/SanityVision.BgC1yFXW.js","/_astro/ThemeSwitcher.C7E3Dsfh.js","/_astro/ViteDevServerStopped.YSGugOQH.js","/_astro/browser.BLly-ZD_.js","/_astro/client.5xwpefpL.js","/_astro/client.DIGyEcf4.js","/_astro/index.CE1A8OJQ.js","/_astro/index.DoSPXHf2.js","/_astro/index2.C7ZHElU3.js","/_astro/index3.BNhtpVIA.js","/_astro/jsx-runtime.C-FE_vxu.js","/_astro/refractor.DyZHIYGj.js","/_astro/resources.CVEYX7AM.js","/_astro/resources.CZCu75-J.js","/_astro/resources2.Cx_CI-f3.js","/_astro/resources3.CHsa1JST.js","/_astro/resources4.PEsDyRUP.js","/_astro/resources5.cE3rnzSP.js","/_astro/resources6.DQfQ_-YP.js","/_astro/stegaEncodeSourceMap.BhDsFart.js","/_astro/studio-component.fTM1dni5.js","/_astro/studio-component.iw3G4eET.js","/blogs/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"vKp1ktDwEDc5NfU4iS3E9weeCUppHhsmrnK+Y1EM8Ts="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
