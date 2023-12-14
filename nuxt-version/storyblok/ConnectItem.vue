<script setup lang="ts">
    const props = defineProps<{
        blok: SBBlokData;
    }>();
</script>

<template>
    <a
        :href="blok.Link"
        target="_blank"
        :alt="`Click here to go to ${blok.Label}`"
        rel="noopener noreferrer"
        class="flex items-center group text-neutral-400 dark:text-neutral-700 hover:text-neutral-500 hover:dark:text-neutral-900 transition-colors mb-4 md:mb-3 w-fit"
    >
        <Icon name="{blok.Icon}" />
    </a>
</template>
