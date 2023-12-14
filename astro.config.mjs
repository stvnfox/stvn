import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
    integrations: [
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            components: {
                page: "storyblok/Page",
                grid: "storyblok/Grid",
                connectComponent: "storyblok/ConnectComponent",
                connectItem: "storyblok/ConnectItem",
                introComponent: "storyblok/IntroComponent",
                projectComponent: "storyblok/ProjectComponent",
                projectsComponent: "storyblok/ProjectsComponent",
                workComponent: "storyblok/WorkComponent",
                workListing: "storyblok/WorkListing",
            },
        }),
        tailwind({
            applyBaseStyles: false,
        }),
        react(),
    ],
});
