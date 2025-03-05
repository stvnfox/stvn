import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_CQrnPr0W.mjs';
import { manifest } from './manifest_BADz-mjy.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/_---params_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.4.2_@types+node@22.13.9_jiti@2.4.2_rollup@4.34.9_terser@5.39.0_typescript@5.8.2_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/@sanity+astro@3.2.6_@emotion+is-prop-valid@1.2.2_@sanity+client@6.28.3_@sanity+types@3.78.0_@_u6ja46z4a4iqwjt62bqikysfam/node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3865cc9e-4bea-4949-bec2-540d406971c4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
