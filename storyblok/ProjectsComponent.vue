<script setup lang="ts">
    interface IContent {
        type: string;
        content: IContent[];
    }

    interface IWorkExplanation {
        type: string;
        content: IContent[];
    }

    interface IWork {
        _uid: string;
        Label: string;
        Explanation: IWorkExplanation;
    }

    const props = defineProps<{
        blok: { Label: string; Projects: SBBlokData };
    }>();
</script>

<template>
    <section>
        <h2
            class="font-medium text-2xl md:text-lg mb-4" 
            v-text="blok.Label"
        />
        <StoryblokComponent
            v-for="item in blok.Projects"
            :key="item._uid"
            :blok="item"
        />
    </section>
</template>