<script setup lang="ts">
    import { FadeIn } from "@/helpers/MotionAnimations";

    const currentYear = new Date().getFullYear();
</script>

<template>
    <footer
        class="bg-neutral-900 text-neutral-400 dark:text-neutral-700 dark:bg-neutral-50 transition-colors pb-16"
    >
        <div
            v-motion="FadeIn(800)"
            class="mx-auto w-4/5 md:w-1/2 xl:w-1/3 font-thin text-sm"
        >
            © {{ currentYear }} Steven
        </div>
    </footer>
</template>
