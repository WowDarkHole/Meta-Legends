<template>
<div class="bg-dark-purple text-white font-bronova lg:px-10">
    <img class="fixed top-0 left-0 z-0" src="../assets/images/bg-ua1.jpg">
    <div class="fixed top-0 left-0 z-0 w-full h-full bg-darkest-purple opacity-70"></div>
    <div class="relative w-full lg:grid lg:grid-cols-2 lg:grid-flow-row lg:auto-rows-max lg:gap-3 lg:pb-10">
        <div class="lg:col-span-2 bg-darkest-purple-2 flex py-3 justify-between lg:justify-start px-10 lg:px-20 clip-path-menu">
            <div class="cursor-pointer flex items-center lg:px-10" @click="toHome">
                <img class="h-5" src="../assets/images/icons/arrow.svg" alt="">
                <span class="ml-3 pt-1 hidden lg:block">Back home</span>
            </div>
            <ul class="flex lg:px-20">
                <li class="px-5 py-5 lg:px-10 lg:py-8 text-xl lg:text-3xl font-bold bg-egg-open text-white-shadow cursor-pointer" @click="scrollToEasterEgg(1)">1</li>
                <li class="px-5 py-5 lg:px-10 lg:py-8 text-xl lg:text-3xl font-bold bg-egg-open text-white-shadow cursor-pointer" @click="scrollToEasterEgg(2)">2</li>
                <li class="px-5 py-5 lg:px-10 lg:py-8 text-xl lg:text-3xl font-bold bg-egg-open text-white-shadow cursor-pointer" @click="scrollToEasterEgg(3)">3</li>
                <li class="px-5 py-5 lg:px-10 lg:py-8 text-xl lg:text-3xl font-bold bg-egg-open text-white-shadow cursor-pointer" @click="scrollToEasterEgg(4)">4</li>
                <li class="px-5 py-5 lg:px-10 lg:py-8 text-xl lg:text-3xl font-bold bg-egg opacity-50">5</li>
            </ul>
        </div>
        <div class="lg:col-span-2 text-center lg:my-32 mt-10">
            <h1 class="text-3xl lg:text-5xl font-bold text-white-shadow mb-5">IRL EASTER EGG HUNT</h1>
            <p class="lg:px-52 lg:text-xl text-sm mb-10">
                Discover <span class="font-bold">the hidden easter eggs</span> from the Meta Legend adventure !<br> 
                <span class="font-bold">5</span> lucky ones of you will become a Meta Legend hero and win <span class="font-bold">a personalised Celestial</span> !
            </p>
        </div>
        <div class="lg:col-span-2" ref="easterEgg1">
            <h1 class="text-3xl text-center lg:text-left lg:text-5xl font-bold mb-5">
                <span class="text-white-shadow">Easter egg 1</span> <span class="font-normal text-3xl lg:text-4xl">→ 🇺🇸 New York</span>
            </h1>
        </div>
        <div class="h-video mb-10">
            <h2 class="text-center lg:mb-5 lg:text-xl">Hidden video</h2>
            <iframe class="h-full w-full" src="https://player.vimeo.com/video/637981024?h=34451defee" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="h-video mb-20">
            <h2 class="text-center lg:mb-5 lg:text-xl">Solution</h2>
            <iframe class="h-full w-full" src="https://player.vimeo.com/video/639093361?h=b865802169" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col-span-2 lg:mt-20" ref="easterEgg2">
            <h1 class="text-3xl text-center lg:text-left lg:text-5xl font-bold mb-5">
                <span class="text-white-shadow">Easter egg 2</span> <span class="font-normal text-3xl lg:text-4xl">→ 🇫🇷 Paris</span>
            </h1>
        </div>
        <div class="h-video mb-10">
            <h2 class="text-center lg:mb-5 lg:text-xl">Hidden video</h2>
            <iframe class="h-full w-full" src="https://player.vimeo.com/video/640631102?h=559c7d7e82" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="h-video mb-20">
            <h2 class="text-center lg:mb-5 lg:text-xl">Solution</h2>
            <iframe class="h-full w-full" src="https://player.vimeo.com/video/640922168?h=af2495c43d" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col-span-2 lg:mt-20" ref="easterEgg3">
            <h1 class="text-3xl text-center lg:text-left lg:text-5xl font-bold mb-5">
                 <span class="text-white-shadow">Easter egg 3</span> <span class="font-normal text-3xl lg:text-4xl">→ 🇬🇧 London</span>
            </h1>
        </div>
        <div class="h-video mb-10">
            <h2 class="text-center lg:mb-5 lg:text-xl">Hidden video</h2>
            <iframe class="h-full w-full" src="https://player.vimeo.com/video/642967253?h=f621e4e2a5" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="h-video pb-10 lg:pb-0">
            <h2 class="text-center lg:mb-5 lg:text-xl">Solution</h2>
            <iframe class="h-full w-full" src="https://player.vimeo.com/video/643542539?h=4d2d54c8db" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col-span-2 lg:mt-20" ref="easterEgg4">
            <h1 class="text-3xl text-center lg:text-left lg:text-5xl font-bold mb-5">
                 <span class="text-white-shadow">Easter egg 4</span> <span class="font-normal text-3xl lg:text-4xl">→ 🇨🇳 Shanghai</span>
            </h1>
        </div>
        <div class="h-video mb-10">
            <h2 class="text-center lg:mb-5 lg:text-xl">Hidden video</h2>
            <iframe class="h-full w-full" src="https://player.vimeo.com/video/645450573?h=cfecbcefed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="h-video pb-10 lg:pb-0">
            <h2 class="text-center lg:mb-5 lg:text-xl">Solution</h2>
            <iframe class="h-full w-full" src="https://player.vimeo.com/video/645744511?h=a063c9b3f9" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col-span-2 lg:mt-20" ref="easterEgg4">
            <h1 class="text-3xl text-center lg:text-left lg:text-5xl font-bold mb-5">
                 <span class="text-white-shadow">Easter egg 5</span>
            </h1>
        </div>
        <div class="h-video mb-10">
            <iframe class="h-full w-full" src="https://player.vimeo.com/video/663647730?h=432c9e0b6b" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="h-video pb-10 lg:pb-0">
            <iframe class="h-full w-full" src="https://player.vimeo.com/video/663647879?h=f2fc5976c8" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'MysteryUA1',
    methods: {
        scrollToEasterEgg(value){
            this.$refs[`easterEgg${value}`].scrollIntoView({ behavior: 'smooth' })
        },
        toHome(){
            this.$router.push('/');
        }
    }
}
</script>

<style lang="scss" scoped>
.text-white-shadow {
      text-shadow: 0 0 32px rgba(255, 255, 255, 0.79),
}

.h-video {
    height: 500px;
}

.bg-egg-open {
    background-image: url('../assets/images/egg-open.svg');
    background-size: 60% 60%;
    background-repeat: no-repeat;
    background-position: center 80%;
}

.bg-egg {
    background-image: url('../assets/images/egg.svg');
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-position: center;
}

.clip-path-menu {
    clip-path: polygon(0 0, 100% 0%, 100% 60%, 95% 100%, 5% 100%, 0 60%);
}

@media (max-width: 500px) {
    .bg-egg-open {
        background-size: 80% 80%;
        background-position: center 100%;
    }

    .h-video {
        height: 270px;
    }

    .clip-path-menu {
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0 100%);
    }   
}
</style>