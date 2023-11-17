<script setup lang="ts">
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    const props = defineProps({ blok: Object });

    onMounted(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `#${props.blok?.id}`,
                start: "top 60%",
                end: "bottom 85%",
                scrub: 1,
            },
        });

        tl.fromTo(
            `#title-${props.blok?._uid}`,
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, duration: 0.5 }
        );

        tl.fromTo(
            `#intro-${props.blok?._uid}`,
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, duration: 0.5 },
            "<"
        );

        tl.fromTo(
            `#service-slider`,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.5 },
            "<0.5"
        );
    });
</script>

<template>
    <section
        v-if="blok"
        :data-screen-component="blok.id"
        :id="blok.id"
        class="min-h-screen flex flex-col md:justify-center text-white bg-black border-t border-t-neutral-700/40 pt-12 pb-2 md:py-0"
    >
        <div class="container flex flex-col">
            <div class="md:w-1/2">
                <h2
                    class="text-6xl mb-4"
                    :id="`title-${blok._uid}`"
                    v-text="blok.title"
                />
                <div
                    v-if="blok.intro"
                    :id="`intro-${blok._uid}`"
                    v-html="blok.intro"
                />
            </div>
            <div
                id="service-slider"
                class="mt-16"
            >
                <service-slider :items="blok.services" />
            </div>
        </div>
    </section>
</template>
