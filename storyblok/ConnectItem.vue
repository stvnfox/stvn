<script setup lang="ts">
    const props = defineProps<{
        blok: SBBlokData;
    }>();
</script>

<template>
    <a
        :href="blok.Link"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center group text-neutral-400 dark:text-neutral-900 mb-4 md:mb-3 w-fit"
    >
        <span
            class="font-thin underline-hover after:bg-neutral-400 dark:after:bg-neutral-900"
            v-text="blok.Label"
        />
        <span v-html="blok.Icon" />
    </a>
</template>
