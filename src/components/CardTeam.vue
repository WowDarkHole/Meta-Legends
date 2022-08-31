<template>
    <div class="card">
                <div class="card relative" @mouseleave="resetRotation">
                    <div 
                        class="absolute w-full text-white lg:text-base font-bold"
                        :class="[ index === 7 ? 'lg:text-left' : 'lg:text-center', index === 7 ? 'text-sm' : 'text-base']"
                    >
                            <p>{{ letter }}</p>
                    </div>
                    <div class="relative card" @mousemove="rotateCard"   ref="card">
                        <img class="card" :src="image" alt="" ref="image1">
                        <div class="absolute lg:w-2/3 top-0 left-0 ml-2.5 mt-1.5 lg:m-4" ref="nom">
                            <h1 class="text-xl lg:text-4xl font-montserrat font-black text-purple">{{ name }}</h1>
                            <h2 class="text-sm lg:text-xl font-montserrat  text-purple" v-html="role"></h2>
                        </div>
                        <div v-if="links.length > 0" class="absolute flex flex-col lg:flex-row bottom-0 left-0">
                            <a class="bg-purple w-10 h-10 p-3 m-1 ml-2.5 lg:w-14 lg:h-14 lg:p-4 lg:m-4 shadow-3xl cursor-pointer btn rounded-lg" :href="links[0]" target="_blank">
                                <img class="h-full" src="../assets/images/icons/twitter.svg" alt="">
                            </a>
                            <a class="bg-purple w-10 h-10 p-3 m-1 ml-2.5 lg:w-14 lg:h-14 lg:p-4 lg:m-4 lg:ml-0 shadow-3xl cursor-pointer btn rounded-lg" :href="links[1]" target="_blank">
                                <img src="../assets/images/icons/instagram.svg" alt="" >
                            </a>
                        </div>
                    </div>
                </div>
                <img class="hidden lg:block card" :src="imageReflection" alt="" ref="image2">                
            </div>
</template>

<script>
import { scale } from '../utils/helper.js';

export default {
    name: 'CardTeam',
    props: {
        name: String,
        role: String,
        image: String,
        imageReflection: String,
        links: Array,
        letter: String,
        hasLetter: Boolean,
        index: Number,
    },
    methods: {
        rotateCard(e){
            const card = this.$refs.card;
            let layerX = e.clientX - card.getBoundingClientRect().left;
            let layerY = e.clientY- card.getBoundingClientRect().top;
            
            let rotationY = scale(layerX, 0, card.offsetWidth, -20, 20);
            let rotationX = scale(layerY, 0, card.offsetHeight, 20, -20);
            let brightness = scale(layerY, 0, card.offsetHeight, 1.5, 0.5);
            
            this.$refs.card.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`; 
            this.$refs.image2.style.transform = `rotateX(${-rotationX}deg) rotateY(${rotationY}deg)`;
            this.$refs.image1.style.filter = `brightness(${brightness})`; 
        },
        resetRotation(){
            console.log()
            this.$refs.card.style.transform = 'rotateX(0deg) rotateY(0deg)';
            this.$refs.image2.style.transform = 'rotateX(0deg) rotateY(0deg)';
            this.$refs.image1.style.filter = 'brightness(1)';
        },
    }
}
</script>

<style lang="scss" scoped>
.card {
    perspective: 600px;
    transition: all 250ms ease-out;
}

.btn {
    transition: 0.5s;
}
.btn:hover {
    box-shadow: 0 0 32px rgba(159, 55, 208, 0.79);
    transition: 0.5s;
}
</style>