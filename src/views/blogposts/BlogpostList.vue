<template>
<div class="container bg-darkest-purple  min-w-full font-bronova text-white px-3 lg:px-28 py-3 lg:py-10">
    <div class="flex items-center mb-12 lg:mb-20 cursor-pointer" @click="toHome">
        <img class="h-8 lg:h-10 mr-3 lg:mr-5" src="../../assets/images/icons/arrow.svg" alt="">
        <span class="text-lg lg:text-xl">Back to home</span>
    </div>
    
    <div class="flex flex-col lg:grid lg:grid-cols-2 mb-20 lg:mb-32 gap-5 lg:gap-10">
        <div class="">
            <h1 class="text-3xl lg:text-5xl mb-3 lg:mb-5 font-bold">Meta Legends news</h1>
            <p>
                Meta Legends represent a collection of 12345 legends categorized by level of rarity and generated with hundreds of elements.<br>
            </p>
        </div>
        <div class="bg-dark-purple-2 lg:p-10 p-2 rounded-md lg:rounded-lg box-shadow border-2 border-opacity-10">
            <!-- <p class="mb-2 lg:mb-5 font-bold lg:text-lg"><span class="underline font-normal text-base">Public sale : </span><span class="lg:hidden"><br></span> Wednesday, November 24, 2021</p> -->
            <div class="flex justify-between lg:justify-start">
                <a href="https://discord.gg/meta-legends" target="_blank">
                    <div class="flex items-center rounded-md lg:rounded-lg px-2 lg:px-5 py-1 lg:py-2 lg:mr-10 cursor-pointer btn-discord bg-gradient-to-br from-blue to-purple">
                        <img class="w-4 lg:w-6 mr-2 lg:mr-5" src="../../assets/images/icons/discord.svg" alt="">
                        <span>Discord</span>
                    </div>
                </a>
                <a href="https://twitter.com/metalegendsnft" target="_blank">
                    <div class="flex items-center rounded-md lg:rounded-lg px-2 lg:px-5 py-1 lg:py-2 lg:mr-10 cursor-pointer btn-twitter bg-gradient-to-br from-blue to-purple">
                        <img class="w-4 lg:w-6 mr-2 lg:mr-5" src="../../assets/images/icons/twitter.svg" alt="">
                        <span>Twitter</span>
                    </div>
                </a>
                <a href="https://www.instagram.com/meta.legends/" target="_blank">
                    <div class="flex items-center rounded-md lg:rounded-lg px-2 lg:px-5 py-1 lg:py-2 cursor-pointer btn-discord bg-gradient-to-br from-blue to-purple">
                        <img class="w-4 lg:w-6 mr-2 lg:mr-5" src="../../assets/images/icons/instagram.svg" alt="">
                        <span>Instagram</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
    
    <div class="mb-10 lg:mb-28">
        <h2 class="text-2xl lg:text-4xl mb-6 lg:mb-8">Official press release</h2>
        <div class="flex">
            <div class="py-3 lg:py-5 px-5 lg:px-10 rounded-lg lg:text-2xl cursor-pointer btn-discord bg-gradient-to-br from-blue to-purple" @click="goToPressRelease">Press release - November 27, 2021</div>
        </div>
    </div>

    <div class="mb-10 lg:mb-28">
        <h2 class="text-2xl lg:text-4xl mb-6 lg:mb-8">Our last blog posts</h2>
        <div class="flex flex-col lg:flex-row gap-3">
            <div 
                v-for="(blogpost, index) in getLastBlogpost"
                :key="`last-blogpost-${index}`"
                class="relative cursor-pointer w-full lg:w-1/3 h-52 lg:h-80 rounded-lg lg:rounded-2xl overflow-hidden"
                @mouseover="onBlogpostHover($event, 'over')"
                @mouseleave="onBlogpostHover($event, 'leave')"
                @click="redirectToBlogpost(blogpost.id)"
            >
                <div class="absolute h-full w-full bg-dark-purple opacity-50 z-20 pointer-events-none"></div>
                <img class="absolute lg:h-full lg:min-w-max xl:w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" :src="blogpost.mainPicture">
                <h3 class="absolute bottom-0 pl-3 pb-2 lg:pl-5 lg:pb-3 text-lg lg:text-xl pointer-event-none font-bold z-30" v-html="blogpost.title"></h3>
            </div>
        </div>
    </div>

    <div>
        <h2 class="text-2xl lg:text-4xl mb-6 lg:mb-8">All our blog posts</h2>
        <div class="flex flex-col lg:grid lg:grid-cols-3 lg:grid-flow-row lg:auto-rows-max gap-3">
            <div 
                v-for="(blogpost, index) in getAllBlogpost"
                :key="`last-blogpost-${index}`"
                class="relative cursor-pointer w-full h-52 lg:h-80 rounded-lg lg:rounded-2xl overflow-hidden"
                @mouseover="onBlogpostHover($event, 'over')"
                @mouseleave="onBlogpostHover($event, 'leave')"
                @click="redirectToBlogpost(blogpost.id)"
            >
                <div class="absolute h-full w-full bg-dark-purple opacity-50 z-20 pointer-events-none"></div>
                <img class="absolute lg:h-full lg:min-w-max xl:w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" :src="blogpost.mainPicture">
                <h3 class="absolute bottom-0 pl-3 pb-2 lg:pl-5 lg:pb-3 text-lg lg:text-xl pointer-events-none font-bold z-30" v-html="blogpost.title"></h3>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { blogposts } from '../../utils/blogposts.js';
import { gsap }  from 'gsap';

export default {
    methods: {
        onBlogpostHover(e, state) {
            gsap.to(e.target.children[1], {
                scale: state === 'over' ? '1.2' : '1'
            })
        },
        redirectToBlogpost(id) {
            this.$router.push(`/blog/blogpost-${id}`);
        },
        toHome(){
            this.$router.push('/');
        },
        goToPressRelease(){
            this.$router.push('/press-release')
        }
    },
    computed: {
        getLastBlogpost() {
            return blogposts.slice(0, 3);
        },
        getAllBlogpost() {
            return blogposts;
        }
    }
}
</script>

<style lang="scss" scoped>
.btn-discord, .btn-twitter {
    transition: 0.5s;
}
.btn-discord:hover {
    box-shadow: 0 0 32px rgba(159, 55, 208, 0.79);
    transition: 0.5s;
}

.btn-twitter:hover {
    box-shadow: 0 0 32px rgba(16, 166, 248, 0.79);
    transition: 0.5s;
}
</style>