<script setup lang="ts">
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    const props = defineProps<{
        id: string;
        title: string;
        intro: string;
    }>();

    onMounted(() => {
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
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.5 }
        );

        tl.fromTo(
            `#intro-${props.id}`,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.5 },
            "<"
        );
    });
</script>

<template>
    <section
        :data-screen-component="id"
        :id="id"
        class="h-screen flex flex-col items-center justify-center text-white bg-black border-t border-t-neutral-700"
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
