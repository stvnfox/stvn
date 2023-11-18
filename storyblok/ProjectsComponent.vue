<script setup lang="ts">
    import { FadeIn } from "@/helpers/MotionAnimations";

    const props = defineProps<{
        blok: { Label: string; Projects: SBBlokData };
    }>();
</script>

<template>
    <section v-motion="FadeIn(500)">
        <h2
            class="font-medium text-2xl md:text-lg mb-4"
            v-text="blok.Label"
        />
        <StoryblokComponent
            v-for="item in blok.Projects"
            :key="item._uid"
            :blok="item"
        />
    </section>
</template>
