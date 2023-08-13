// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        ["@storyblok/nuxt", { accessToken: "PqcWMOZyvok90r8kVplKTgtt" }],
    ],
});
