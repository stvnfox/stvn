<script setup>
    const props = defineProps({ blok: Object });

    const articleContent = computed(() => renderRichText(props.blok.Intro));
</script>

<template>
    <div
        v-editable="blok"
        class="py-32 text-6xl text-[#50b0ae] font-bold text-center"
    >
        {{ blok.Title }}
        <div v-html="articleContent" />
        {{ blok.Image.filename }}
    </div>
</template>
