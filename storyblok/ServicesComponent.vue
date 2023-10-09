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

        // const sTl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: `#${props.id}`,
        //         start: "top 30%",
        //         end: "top 10%",
        //         scrub: 1,
        //     },
        // });

        // sTl.fromTo(
        //     `#service-${props.index}-0`,
        //     { autoAlpha: 0, scale: 0.2 },
        //     { autoAlpha: 1, scale: 1, duration: 1 },
        //     "<"
        // );

        // for (let i = 0; i <= props.total; i++) {
        //     sTl.fromTo(
        //         `#service-${props.index}-${i}`,
        //         { autoAlpha: 0, scale: 0.2 },
        //         { autoAlpha: 1, scale: 1, duration: 1 },
        //         i === 1 ? "<" : ">-0.5"
        //     );
        // }
        onMounted(() => {
            console.log(props.blok);
        });
    });
</script>

<template>
    <section
        v-if="blok"
        :data-screen-component="blok.id"
        :id="blok.id"
        class="min-h-screen flex flex-col justify-center text-white bg-black border-t border-t-neutral-700/40"
    >
        <div class="container flex flex-col">
            <div class="w-1/2">
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
            <div class="mt-16">
                <service-slider :items="blok.services" />
                <!-- <service-component
                    v-for="service in blok.services"
                    :id="`service-${blok._uid}`"
                    :key="`service-${blok._uid}`"
                    :item="service"
                /> -->
            </div>
        </div>
    </section>
</template>
