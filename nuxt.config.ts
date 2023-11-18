// https://nuxt.com/docs/api/configuration/nuxt-config
import dotenv from "dotenv";

dotenv.config();

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Lato: [300, 400, 500, 700],
                },
            },
        ],
        ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_TOKEN }],
        "@vueuse/motion/nuxt",
    ],
});
