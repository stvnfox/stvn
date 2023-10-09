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

    const navigation = [
        {
            id: "screen-1",
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-neutral-500 hover:fill-neutral-400 transition-colors w-6 h-6">
                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                </svg>
            `,
        },
        {
            id: "screen-2",
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-neutral-500 hover:fill-neutral-400 transition-colors w-6 h-6">
                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                </svg>
            `,
        },
        {
            id: "screen-3",
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-neutral-500 hover:fill-neutral-400 transition-colors w-6 h-6">
                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                </svg>
            `,
        },
    ];

    onMounted(() => {
        gsap.registerPlugin(ScrollTrigger);

        let screenComponents = gsap.utils.toArray("[data-screen-component]");

        screenComponents.forEach((screen) => {
            ScrollTrigger.create({
                trigger: screen,
                start: "top top",
                end: "bottom 0",
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
    <!-- TODO: Storyblok component van maken -->
    <FullScreenComponent
        v-for="(item, index) in screens"
        :key="item.id"
        :id="item.id"
        :index="index"
        :total="screens.length"
        :title="item.title"
        :intro="item.intro"
    />
    <FooterComponent />
    <NavigationComponent :items="navigation" />
</template>
