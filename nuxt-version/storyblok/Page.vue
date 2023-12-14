<script setup>
    defineProps({ blok: Object });
</script>

<template>
    <section class="min-h-screen w-screen bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-950 transition-colors">
        <div 
            class="flex flex-col mx-auto w-4/5 md:w-1/2 xl:w-1/3"
            v-editable="blok"
        >
            <StoryblokComponent
                v-for="blok in blok.body"
                :key="blok._uid"
                :blok="blok"
            />
        </div>
        <FooterComponent />
    </section>
</template>
