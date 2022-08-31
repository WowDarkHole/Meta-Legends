<template>
    <div class="opacity-0 flex text-white font-bronova" ref="roadmapItem">
        <!-- <div class=" w-px bg-pink h-10 lg:h-16 box-shadow mb-4 lg:mb-9"></div>
        <span v-if="percent" class="text-pink-2 text-lg lg:text-xl text-shadow font-mandatory">{{ percent }}%</span>
        <div v-if="percent" class="bg-progress bg-progress-image" :style="{backgroundPosition: `center ${percent === 99 ? 90 : percent}%`}"></div>
        <p class="text-base lg:text-lg 2xl:text-2xl text-center mt-5 lg:mt-14" v-html="description"></p>
        <div v-if="percent === 90">
            <button class="mx-auto relative px-10 py-2 lg:py-4 flex items-center bg-gradient-to-r from-blue to-purple btn-discord mt-5 lg:mt-8">
                <a class="absolute top-0 left-0 w-full h-full" href="https://www.meta-connect.io/app" target="_blank"></a>
                <img class="w-10 h-10 lg:w-16 lg:h-16 mr-5" src="../assets/images/icons/metaconnect.svg" alt="discord">
                <p class="font-bronova font-bold text-white text-left text-base lg:text-2xl">DISCOVER <br>META-CONNECT</p>
            </button>
        </div> -->
        <div class="flex flex-col">
            <div v-if="percent" class="w-12 h-12 lg:w-20 lg:h-20 flex-none flex items-center justify-center bg-border-image lg:text-2xl font-bold lg:pt-2">{{ percent }}%</div>
            <div v-else class="w-12 h-12 lg:w-20 lg:h-20 flex-none flex items-center justify-center bg-border-image lg:text-4xl font-bold lg:pt-2">{{ index + 1 }}</div>
            
            <div v-if="percent !== 100 && index !== 3" class="w-1 bg-blue h-full self-center my-2"></div>
        </div>
        <div :class="{'pb-20': percent !== 100 && index !== 3}">
            <div v-if="percent" class="bg-progress bg-progress-image" :style="{backgroundPosition: `center ${percent === 99 ? 90 : percent}%`}"></div>
            <p class="text-base lg:text-lg 2xl:text-xl pl-2 lg:pl-5 pt-2 lg:pt-5" v-html="description"></p>
            <div v-if="percent === 90">
                <button class="lg:ml-5 relative px-10 py-2 lg:py-4 flex items-center bg-gradient-to-r from-blue to-purple btn-discord mt-5 lg:mt-8 rounded-lg">
                    <a class="absolute top-0 left-0 w-full h-full" href="https://www.meta-connect.io/app" target="_blank"></a>
                    <img class="w-10 h-10 lg:w-16 lg:h-16 mr-5" src="../assets/images/icons/metaconnect.svg" alt="discord">
                    <p class="font-bronova font-bold text-white text-left text-base lg:text-2xl">DISCOVER <br>META-CONNECT</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: 'RoadmapItem',
    props: {
        percent: Number,
        description: String,
        index: Number
    },
    data() {
        return {
        }
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(this.$refs.roadmapItem, {
            scrollTrigger: {
                trigger: this.$refs.roadmapItem,
                start: 'top 80%',
                scrub: true,
            },
            opacity: 1
        });
    }
}
</script>

<style lang="scss" scoped>

.bg-progress {
    height: 70px;
    width: 600px;
}
.bg-progress-image {
    background-image: url('../assets/images/progress-bar.png');    
    background-size: cover
}
.bg-border-image {
    background-image: url('../assets/images/border-gradient.svg');
    background-size: cover;
}

.btn-discord {
    transition: 0.5s;
}
.btn-discord:hover {
    box-shadow: 0 0 32px rgba(159, 55, 208, 0.79);
    transition: 0.5s;
}

@media (max-width: 480px) {
    .bg-progress {
        height: 35px;
        width: 300px;
    }
}
</style>