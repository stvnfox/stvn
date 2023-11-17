<script setup lang="ts">
    const props = defineProps<{
        blok: SBBlokData;
    }>();

    const explanation = computed(() => renderRichText(props.blok.Explanation));
</script>

<template>
    <section class="mb-3">
        <a 
            :href="blok.Link"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-2 w-fit mb-2"
        >
            <span
                class="underline-hover after:bg-neutral-400 dark:after:bg-neutral-700 font-medium"
                v-text="blok.Label"
            />
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
            </svg>
        </a>
        <div
            class="text-sm text-neutral-400 dark:text-neutral-700"
            v-html="explanation"
        />
    </section>
</template>