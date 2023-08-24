<script setup lang="ts">
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    const props = defineProps<{
        id: string;
        title: string;
        intro: string;
    }>();

    onMounted(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `#${props.id}`,
                start: "top 50%",
                end: "bottom 85%",
                scrub: 1,
            },
        });

        tl.fromTo(
            `#title-${props.id}`,
            { autoAlpha: 0, y: 100 },
            { autoAlpha: 1, y: 0, duration: 0.5 }
        );

        tl.fromTo(
            `#intro-${props.id}`,
            { autoAlpha: 0, y: 100 },
            { autoAlpha: 1, y: 0, duration: 0.5 },
            "<"
        );
    });
</script>

<template>
    <section
        :data-screen-component="id"
        :id="id"
        class="h-screen flex flex-col items-center justify-center text-white bg-black border-t border-t-neutral-700/40"
    >
        <h2
            class="text-6xl mb-4"
            :id="`title-${id}`"
            v-text="title"
        />
        <div
            class="w-2/3"
            :id="`intro-${id}`"
            v-html="intro"
        />
    </section>
</template>
