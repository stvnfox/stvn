<script setup>
    const props = defineProps({ blok: Object });

    const articleContent = computed(() => renderRichText(props.blok.intro));

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
</script>

<template>
    <div
        v-editable="blok"
        class="h-screen flex items-center justify-center overflow-hidden text-neutral-200"
    >
        <MouseComponent :color="mouseColor" />
        <div class="flex flex-col items-center z-10">
            <div
                v-motion
                :initial="{ opacity: 0 }"
                :enter="{ opacity: 1 }"
                :delay="800"
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
                v-motion
                :initial="{ opacity: 0, y: 10 }"
                :enter="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: 'spring',
                        stiffness: 350,
                        damping: 50,
                        mass: 2.5,
                    },
                }"
                :delay="400"
                class="text-4xl md:text-6xl font-normal mb-3"
                v-text="blok.title"
            />
            <p
                v-if="blok.intro"
                v-motion
                :initial="{ opacity: 0, y: -10 }"
                :enter="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: 'spring',
                        stiffness: 350,
                        damping: 50,
                        mass: 2.5,
                    },
                }"
                :duration="400"
                :delay="400"
                class="w-5/6 xl:w-1/2 text-neutral-200 text-center text-sm mx-auto"
                v-text="blok.intro"
            />
        </div>
    </div>
</template>
