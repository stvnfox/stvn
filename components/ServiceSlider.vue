<script setup lang="ts">
    const props = defineProps<{
        items: { label: string; explanation: any }[];
    }>();

    const index = ref(0);

    const selectedItem = computed(() => {
        return props.items[index.value];
    });

    const intervalMethod = () => {
        index.value === props.items.length - 1
            ? (index.value = 0)
            : index.value++;
    };

    let intervalId = setInterval(intervalMethod, 8000);

    const setSelectedItem = (idx: number) => {
        clearInterval(intervalId);

        index.value = idx;

        intervalId = setInterval(intervalMethod, 8000);
    };

    onMounted(() => {
        setSelectedItem(0);
    });
</script>

<template>
    <section class="flex flex-col md:flex-row gap-12">
        <ul class="md:w-1/2">
            <li v-for="(link, idx) in items">
                <button
                    :class="
                        link !== selectedItem
                            ? 'text-white/50 font-medium border-neutral-800'
                            : 'border-neutral-500'
                    "
                    class="transition-colors duration-500 ease-in-out text-xl py-3 md:py-6 border-b w-full text-left"
                    @click="setSelectedItem(idx)"
                >
                    {{ link.label }}
                </button>
            </li>
        </ul>
        <div class="md:w-1/2 border border-neutral-800 rounded-lg p-6">
            <div v-html="renderRichText(selectedItem.explanation)" />
        </div>
    </section>
</template>
