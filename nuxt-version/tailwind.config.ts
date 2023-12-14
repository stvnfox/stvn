/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
        "storyblok/**/*.{vue,js}",
    ],
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: ["Lato", "sans-serif"],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        extend: {},
    },
    important: true,
    plugins: [],
};
