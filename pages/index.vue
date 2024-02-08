<script setup>
    useHead({
        htmlAttrs: {
            lang: "en",
        },
    })

    useSeoMeta({
        title: "Steven Vos - Front-end Developer",
        ogTitle: "Steven Vos - Front-end Developer",
        description: "Hi, I'm Steven. And I create websites and applications.",
        ogDescription:
            "Hi, I'm Steven. And I create websites and applications.",
    });

    const story = await useAsyncStoryblok("home", { version: "draft" });
</script>

<template>
    <StoryblokComponent
        v-if="story"
        :blok="story.content"
    />
    <ColorModeSwitcher />
</template>
