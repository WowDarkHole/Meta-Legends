<template>
    <div class="container bg-gradient-to-r from-darkest-blue to-darkest-purple min-w-full w-screen h-screen font-bronova text-white">
        <div class="grid grid-rows-3 lg:grid-cols-2 h-full mystery-grid lg:px-14 xl:px-44">
            <div class="relative lg:col-span-2 flex justify-end lg:justify-center py-4 mb-8 lg:mb-0 mr-4 lg:mr-0">
                <div class="absolute ml-4 lg:ml-0 left-0 top-0 h-full flex items-center cursor-pointer lg:text-xl btn-back" @click="toHome">
                    <img class="h-5 lg:h-8 mr-3 lg:mr-5 arrow-icon" src="../assets/images/icons/arrow.svg" alt="">
                    <span class="line-height-inherit text-sm lg:text-base">Back home</span>
                </div>
                <img class="h-8 lg:h-16" src="../assets/images/title-logo.svg" alt="">
            </div>
            <div class="flex flex-col items-center lg:items-start lg:justify-center order-1 mt-10 lg:mt-0">
                <h1 class="text-5xl lg:text-7xl font-bold">Amazing !</h1>
                <p class="text-center text-base mt-4 mx-6 lg:mx-0 lg:text-left lg:text-3xl lg:mt-6">
                    You are the <span class="font-bold">12345th</span> person being able to count from 1 to 5.<br>
                    <br>
                    You have <span class="font-bold">12345</span> attempts left to find the right path.
                </p>
                <div class="cursor-pointer" @click="toHome">
                    <div class="mt-5 py-2 px-4 lg:mt-10 xl:mt-14 inline-flex lg:py-5 lg:px-7 bg-gradient-to-r from-blue to-purple font-bold lg:text-3xl btn-glow">TRY AGAIN</div>
                </div>
                <p class="mt-5 lg:mt-8 lg:text-lg text-red anim-flash">12345 attempts remaining</p>
            </div>
            <div class="flex justify-center items-center m-3 lg:m-0 lg:order-last">
                <div class="atropos-container">
                    <atropos class="my-atropos h-full w-full mx-auto relative" :shadow="false" :highlight="false">
                        <img class="absolute h-full w-full" src="../assets/images/calculator-layer-1.png" data-atropos-offset="0">
                        <img class="absolute h-full w-full" src="../assets/images/calculator-layer-2.png" data-atropos-offset="2">
                        <img class="absolute h-full w-full" src="../assets/images/calculator-layer-3.png" data-atropos-offset="3">
                    </atropos>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Atropos from 'atropos/vue/atropos-vue.esm.js';

export default {
    name: 'MysteryUA3',
    components: {
        Atropos,
    },
    methods: {
        toHome(){
            this.$router.push(`/${process.env.VUE_APP_UA1}`);
        }
    }
}
</script>

<style lang="scss" scoped>
.atropos-container {
    height: 35vw;
    width: 35vw;
}
.btn-glow {
    transition: 0.5s;
}
.btn-glow:hover {
    box-shadow: 0 0 32px rgba(159, 55, 208, 0.79);
    transition: 0.5s;
}

.mystery-grid {
    grid-template-rows: auto 1fr;
}

.btn-back .arrow-icon {
    transition: 0.5s;
}

.btn-back:hover .arrow-icon {
    transform: translateX(-10px);
    transition: 0.5s;
}

.anim-flash {
    animation-name: flash;
    animation-iteration-count: infinite;
    animation-duration: 0.5s;
    animation-direction: alternate;
}

.line-height-inherit {
    line-height: inherit;
}

@keyframes flash {
    from {
        opacity: 0;
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.1),
    }
    to {
        opacity: 1;
        text-shadow: 0 0 10px rgba(255, 35, 35, 0.8),
    }
}

@media (max-width: 480px) {
    .mystery-grid {
        grid-template-rows: auto 1fr 1fr;
    }
    .atropos-container {
        height: 100%;
        width: 100%;
    }
}
</style>