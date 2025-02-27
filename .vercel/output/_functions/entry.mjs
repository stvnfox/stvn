import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DRzytyr0.mjs';
import { manifest } from './manifest_L1J2yj01.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/_---params_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.3.1_@types+node@22.13.5_jiti@2.4.2_rollup@4.34.8_terser@5.39.0_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/@sanity+astro@3.2.5_@emotion+is-prop-valid@1.2.1_@sanity+client@6.28.1_@sanity+types@3.77.2_@_7elbkwlqzmpeq2imtb7jwl6eyq/node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3f6f4efb-9b10-4a1a-aed3-db384da2d62b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
