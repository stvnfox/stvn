<script setup lang="ts">
    const props = defineProps<{
        blok: SBBlokData;
    }>();

    const explanation = computed(() => renderRichText(props.blok.Explanation));
</script>

<template>
    <section class="mb-3">
        <h3
            class="font-medium"
            v-text="blok.Label"
        />
        <div
            class="text-sm font-thin text-neutral-400 dark:text-neutral-700"
            v-html="explanation"
        />
    </section>
</template>
