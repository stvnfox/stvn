<script setup lang="ts">
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    const props = defineProps<{
        id: string;
        title: string;
        intro: string;
        total: number;
        index: number;
    }>();

    onMounted(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `#${props.id}`,
                start: "top 60%",
                end: "bottom 85%",
                scrub: 1,
            },
        });

        tl.fromTo(
            `#title-${props.index}-${props.id}`,
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, duration: 0.5 }
        );

        tl.fromTo(
            `#intro-${props.index}-${props.id}`,
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, duration: 0.5 },
            "<"
        );

        const sTl = gsap.timeline({
            scrollTrigger: {
                trigger: `#${props.id}`,
                start: "top 30%",
                end: "top 10%",
                scrub: 1,
            },
        });

        sTl.fromTo(
            `#card-${props.index}-0`,
            { autoAlpha: 0, scale: 0.2 },
            { autoAlpha: 1, scale: 1, duration: 1 },
            "<"
        );

        for (let i = 0; i <= props.total; i++) {
            sTl.fromTo(
                `#card-${props.index}-${i}`,
                { autoAlpha: 0, scale: 0.2 },
                { autoAlpha: 1, scale: 1, duration: 1 },
                i === 1 ? "<" : ">-0.5"
            );
        }
    });
</script>

<template>
    <section
        :data-screen-component="id"
        :id="id"
        class="h-screen flex flex-col justify-center text-white bg-black border-t border-t-neutral-700/40"
    >
        <div class="container flex flex-col">
            <div class="w-1/2">
                <h2
                    class="text-6xl mb-4"
                    :id="`title-${props.index}-${id}`"
                    v-text="title"
                />
                <div
                    v-if="intro"
                    :id="`intro-${props.index}-${id}`"
                    v-html="intro"
                />
            </div>
            <div class="grid grid-cols-3 gap-12 flex-grow mt-16">
                <card-component
                    v-for="i in 6"
                    :id="`card-${props.index}-${i}`"
                    :key="`card-${props.index}-${i}`"
                />
            </div>
        </div>
    </section>
</template>
