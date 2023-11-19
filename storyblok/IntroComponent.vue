<script setup lang="ts">
    import { FadeIn } from "@/helpers/MotionAnimations";

    const props = defineProps<{
        blok: { Title: string; Introduction: ISbRichtext };
    }>();

    const introduction = computed(() =>
        renderRichText(props.blok.Introduction)
    );
</script>

<template>
    <section class="mt-24 mb-12 md:my-24">
        <h1
            v-motion="FadeIn(300)"
            class="font-medium text-2xl mb-4"
            v-text="blok.Title"
        />
        <div
            v-motion="FadeIn(400)"
            class="font-thin introduction"
            v-html="introduction"
        />
    </section>
</template>
