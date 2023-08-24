<script setup></script>

<template>
    <footer
        data-screen-component="id"
        class="bg-gradient-to-b from-transparent via-black/70 via-30% to-black h-screen flex"
    >
        <div
            class="flex flex-col bg-black/80 border-t border-t-neutral-700/40 w-full text-white h-[50vh] self-end p-8 md:py-16 lg:px-48"
        >
            <div class="flex-grow">
                <h2 class="text-3xl md:text-5xl mb-6">
                    Samen mooie dingen maken?
                </h2>
                <h3 class="text-2xl md:text-4xl text-neutral-400">
                    hello@stvnx.nl
                </h3>
            </div>

            <div class="grid md:grid-cols-3">
                <a
                    href=""
                    class="flex items-center group mb-4 md:mb-0"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 mr-2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                    <span class="underline-hover after:bg-white">
                        LinkedIn
                    </span>
                </a>
                <a
                    href=""
                    class="flex items-center group mb-4 md:mb-0"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 mr-2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                    <span class="underline-hover after:bg-white">
                        Instagram
                    </span>
                </a>
                <div class="md:text-end text-neutral-400 text-xs">
                    © 2023 Steven
                </div>
            </div>
        </div>
    </footer>
</template>
