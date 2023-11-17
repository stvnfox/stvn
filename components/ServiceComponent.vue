<script setup lang="ts">
    const props = defineProps<{
        item: { label: string; explanation: any };
    }>();

    const explanation = computed(() => {
        return renderRichText(props.item.explanation);
    });
</script>

<template>
    <div
        class="border-b border-text-neutral-200 text-neutral-200 w-5/12 h-fit pb-6 mb-6"
    >
        {{ item.label }}
        {{ explanation }}
    </div>
</template>
