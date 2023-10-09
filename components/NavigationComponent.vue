<script setup lang="ts">
    const props = defineProps<{
        items: { id: string; icon: string };
    }>();

    const scrollToScreen = (id: string) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView();
        }
    };
</script>

<template>
    <nav
        class="fixed top-8 right-12 w-fit rounded-full border-2 py-2 px-3 bg-neutral-700/20 border-neutral-700/50"
    >
        <ul class="flex items-center gap-4">
            <li
                v-for="item in items"
                :key="item.id"
                class="fill-white h-6"
            >
                <button
                    class="fill-white"
                    @click="scrollToScreen(item.id)"
                >
                    <div
                        class="fill-white"
                        v-html="item.icon"
                    />
                </button>
            </li>
        </ul>
    </nav>
</template>
