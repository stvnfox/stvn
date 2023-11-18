<script setup>
    useSeoMeta({
        title: "Steven Vos - Front-end Developer",
        ogTitle: "Steven Vos - Front-end Developer",
        description: "Hi, ik ben Steven. En ik maak websites en applicaties.",
        ogDescription: "Hi, ik ben Steven. En ik maak websites en applicaties.",
        // ogImage: 'https://example.com/image.png',
        twitterCard: "summary_large_image",
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
