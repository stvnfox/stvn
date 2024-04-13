import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "4xy3zla7",
      dataset: "production",
      useCdn: false,
      apiVersion: "2024-04-13",
      studioBasePath: "/admin",
    }),
    react(),
  ],
});
