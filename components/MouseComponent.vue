<script setup lang="ts">
    import { useMouse, useWindowSize } from "@vueuse/core";

    const props = defineProps<{ color: string }>();

    const { x, y } = useMouse();
    const { width, height } = useWindowSize();

    const distanceX = computed(() => Math.abs(x.value - width.value / 2));
    const distanceY = computed(() => Math.abs(y.value - height.value / 2));

    const distance = computed(() =>
        Math.sqrt(distanceX.value ** 2 + distanceY.value ** 2)
    );

    const size = computed(() => Math.max(400 - distance.value, 200));
    const opacity = computed(() =>
        Math.min(Math.max(size.value / 300, 0.7), 0.8)
    );
</script>

<template>
    <div
        :class="color"
        class="hidden lg:block absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none blur-3xl"
        :style="{
            left: `${x}px`,
            top: `${y}px`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacity,
        }"
    />
</template>
