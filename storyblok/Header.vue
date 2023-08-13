<script setup>
    import { useMouseInElement } from "@vueuse/core";

    const props = defineProps({ blok: Object });

    const headerCard = ref(null);

    const articleContent = computed(() => renderRichText(props.blok.Intro));

    const cardTransform = computed(() => {
        const MAX_ROTATION = 6;

        const xRotation = (
            MAX_ROTATION / 2 -
            (elementY.value / elementHeight.value) * MAX_ROTATION
        ).toFixed(2);
        const yRotation = (
            (elementX.value / elementHeight.value) * MAX_ROTATION -
            MAX_ROTATION / 2
        ).toFixed(2);

        return isOutside.value
            ? ""
            : `perspective(${elementWidth.value}px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });

    const { elementX, elementY, isOutside, elementHeight, elementWidth } =
        useMouseInElement(headerCard);
</script>

<template>
    <div
        v-editable="blok"
        ref="headerCard"
        :style="{
            transform: cardTransform,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.25s ease-out',
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${blok.Image.filename})`,
        }"
        class="w-11/12 lg:w-3/4 xl:w-2/3 mx-auto font-sans text-neutral-200 text-center bg-cover will-change-transform py-32 lg:py-56 mt-24"
    >
        <div
            :style="{
                transform: 'translate3d(0, 0, 48px)',
                transformStyle: 'preserve-3d',
            }"
            className="position-relative z-10"
        >
            <h1
                class="text-6xl font-bold mb-3"
                v-text="blok.Title"
            />
            <div
                class="w-5/6 xl:w-1/2 text-neutral-200 mx-auto"
                v-html="articleContent"
            />
        </div>
    </div>
</template>
