import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DgFNbIJC.mjs';
import { manifest } from './manifest_Bb-oqCPE.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/_---params_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.0.5_@types+node@22.10.2_jiti@1.21.6_rollup@4.28.1_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/@sanity+astro@3.1.6_@sanity+client@6.24.1_@sanity+visual-editing@2.1.3_@sanity+client@6.24.1__5acvjwh4bbf2zah2yvhm2nedhq/node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a6649f24-a626-4fb9-96b5-2a8bd2b950ed",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
