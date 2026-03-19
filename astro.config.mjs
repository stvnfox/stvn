import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  integrations: [
    sanity({
      projectId: "4xy3zla7",
      dataset: "production",
      useCdn: true,
      apiVersion: "2025-02-27",
      studioBasePath: "/admin",
    }),
    react(),
    icon(),
  ],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
