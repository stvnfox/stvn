import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Oq_M4mxq.mjs';
import { manifest } from './manifest_TisJR44A.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/_---params_.astro.mjs');
const _page2 = () => import('./pages/blogs/_blog_.astro.mjs');
const _page3 = () => import('./pages/blogs.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.8.0_@types+node@22.15.21_jiti@2.4.2_rollup@4.41.1_terser@5.39.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/@sanity+astro@3.2.6_@emotion+is-prop-valid@1.2.2_@sanity+client@6.29.1_@sanity+types@3.89.0_@_xslkqndo4zmaqs5vxcxe2a7cuu/node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/blogs/[blog].astro", _page2],
    ["src/pages/blogs/index.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b6e20bb6-06c0-4ae6-9d4a-484baaf9fccb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
