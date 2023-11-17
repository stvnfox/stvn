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
        blok: { Label: string; Introduction: ISbRichtext; Items: SBBlokData };
    }>();

    const introduction = computed(() => renderRichText(props.blok.Introduction));
</script>

<template>
    <section class="my-8 md:my-24">
        <h2 
            class="font-medium text-2xl md:text-lg mb-4"
            v-text="blok.Label"
        />
        <div 
            class="mb-6"
            v-html="introduction"
        />
        <StoryblokComponent
            v-for="item in blok.Items"
            :key="item._uid"
            :blok="item"
        />
    </section>
</template>