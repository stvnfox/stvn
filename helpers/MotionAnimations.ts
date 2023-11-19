export const FadeIn = (delay: number) => {
    return {
        initial: {
            opacity: 0,
            y: 5,
        },
        enter: {
            opacity: 1,
            y: 0,
            transition: {
                delay,
                duration: 500,
                type: "keyframes",
                ease: "easeInOut",
            },
        },
    };
};
