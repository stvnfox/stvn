import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
    integrations: [
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            components: {
                page: "storyblok/Page",
            },
        }),
        tailwind({
            applyBaseStyles: false,
        }),
    ],
});
