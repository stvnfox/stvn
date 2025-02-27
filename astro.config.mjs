import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "4xy3zla7",
      dataset: "production",
      useCdn: true,
      apiVersion: "2024-04-13",
      studioBasePath: "/admin",
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    icon(),
  ],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
