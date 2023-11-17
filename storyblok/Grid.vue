<script setup>
    defineProps({ blok: Object });
</script>

<template>
    <div
        v-editable="blok"
        class="grid md:grid-cols-2 gap-8 md:gap-12"
    >
        <StoryblokComponent
            v-for="blok in blok.columns"
            :key="blok._uid"
            :blok="blok"
        />
    </div>
</template>
