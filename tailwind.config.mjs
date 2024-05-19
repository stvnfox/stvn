/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'selector',
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
        extend: {
            keyframes: {
                fade: {
                    '0%': { opacity: '0', transform: "translateY(10px)" },
                    '100%': { opacity: '1', transform: "translateY(0)" },
                }
            }
        },
    },
	plugins: [require("tailwindcss-animate")],
}
