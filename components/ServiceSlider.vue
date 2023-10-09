<script setup lang="ts">
    const props = defineProps<{
        items: { label: string; explanation: any }[];
    }>();

    const index = ref(0);

    const selectedItem = computed(() => {
        return props.items[index.value];
    });

    const startSlides = () => {
        setInterval(() => {
            index.value === props.items.length - 1
                ? (index.value = 0)
                : index.value++;
        }, 8000);
    };

    const setSelectedItem = (idx: number) => {
        index.value = idx;
    };

    onMounted(() => {
        startSlides();
    });
</script>

<template>
    <section class="flex">
        <ul class="w-1/2">
            <li v-for="(link, idx) in items">
                <button
                    :class="{
                        'text-white/50 font-medium': link !== selectedItem,
                    }"
                    @click="setSelectedItem(idx)"
                >
                    {{ link.label }}
                </button>
            </li>
        </ul>
        <div class="w-1/2">
            <pre>
                {{ selectedItem }}
            </pre>
        </div>
    </section>
</template>
