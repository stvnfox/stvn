<script setup>
    import gsap from "gsap";

    const props = defineProps({ blok: Object });

    const mouseColor = computed(() => {
        if (props.blok.status === "available") return "bg-green-900/80";

        return "bg-red-900/80";
    });

    const statusWrapperClass = computed(() => {
        if (props.blok.status === "available") return "bg-green-900/60";

        return "bg-red-900/60";
    });

    const statusInnerPulseClass = computed(() => {
        if (props.blok.status === "available") return "bg-green-700";
        return "bg-red-800";
    });

    const statusOuterPulseClass = computed(() => {
        if (props.blok.status === "available") return "bg-green-600";
        return "bg-red-900";
    });

    const statusTextClass = computed(() => {
        if (props.blok.status === "available") return "text-green-600";
        return "text-red-600";
    });

    const statusText = computed(() => {
        if (props.blok.status === "available")
            return "Beschikbaar voor nieuwe projecten";
        return "Niet beschikbaar voor nieuwe projecten";
    });

    onMounted(() => {
        var tl = gsap.timeline();

        tl.fromTo(
            "#title-element",
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, delay: 0.6, duration: 1, ease: "power3" }
        );

        tl.fromTo(
            "#intro-element",
            { autoAlpha: 0, y: -10 },
            { autoAlpha: 1, y: 0, duration: 1, ease: "power3" },
            "<"
        );

        tl.fromTo(
            "#status-block",
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.8 }
        );
    });
</script>

<template>
    <div
        v-editable="blok"
        class="h-screen flex items-center justify-center overflow-hidden text-neutral-200"
    >
        <MouseComponent :color="mouseColor" />
        <div class="flex flex-col items-center z-10">
            <div
                id="status-block"
                :class="statusWrapperClass"
                class="flex items-center gap-3 w-fit rounded py-3 px-4 mb-8"
            >
                <div class="relative flex h-2.5 w-2.5">
                    <span
                        :class="statusOuterPulseClass"
                        class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    />
                    <span
                        :class="statusInnerPulseClass"
                        class="relative inline-flex rounded-full h-2.5 w-2.5"
                    />
                </div>
                <p
                    :class="statusTextClass"
                    class="text-xs font-medium"
                    v-text="statusText"
                />
            </div>
            <h1
                id="title-element"
                class="text-4xl md:text-6xl font-normal mb-3"
                v-text="blok.title"
            />
            <p
                v-if="blok.intro"
                id="intro-element"
                class="w-5/6 xl:w-1/2 text-neutral-200 text-center text-sm mx-auto"
                v-text="blok.intro"
            />
        </div>
    </div>
</template>
