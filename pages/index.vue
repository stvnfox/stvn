<script setup>
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    useSeoMeta({
        title: "Steven Vos - Front-end Developer",
        ogTitle: "Steven Vos - Front-end Developer",
        description: "Hi, ik ben Steven. En ik maak websites en applicaties.",
        ogDescription: "Hi, ik ben Steven. En ik maak websites en applicaties.",
        // ogImage: 'https://example.com/image.png',
        twitterCard: "summary_large_image",
    });

    const story = await useAsyncStoryblok("home", { version: "draft" });

    const screens = [
        {
            id: "screen-1",
            title: "Titel 1",
            intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            id: "screen-2",
            title: "Titel 2",
            intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            id: "screen-3",
            title: "Titel 3",
            intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ];

    onMounted(() => {
        gsap.registerPlugin(ScrollTrigger);

        let screenComponents = gsap.utils.toArray("[data-screen-component]");

        screenComponents.forEach((screen) => {
            ScrollTrigger.create({
                trigger: screen,
                start: "top top",
                end: "bottom 10px",
                pin: true,
                pinSpacing: false,
            });
        });
    });
</script>

<template>
    <StoryblokComponent
        v-if="story"
        :blok="story.content"
    />
    <FullScreenComponent
        v-for="item in screens"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :intro="item.intro"
    />
</template>
