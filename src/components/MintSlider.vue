<template>
<div class="py-5 lg:py-10">
    <!-- Slider main container -->
    <div class="swiper lg:py-20">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper flex">
            <!-- Slides -->
            <div 
                v-for="(slide, index) in slides" 
                :key="`slide-${index}`" 
                class="swiper-slide flex justify-center self-stretch" 
                :class="[slide.price === '0.3' ? 'active':'']"
            >
                <div class="card bg-purple flex flex-col items-center p-2 lg:p-3">
                    <div class="card-img relative" :style="{ backgroundImage: `url(${slide.bgImage})` }">
                        <img class="absolute bottom-0 transform left-1/2 -translate-x-1/2" :src="slide.image" alt="">
                    </div>
                    <div class="price text-3xl lg:text-5xl py-2 lg:py-3 font-akiraNorm" :class="slide.gradient">{{ slide.price }} <span class="lg:text-4xl">ETH</span></div>
                    <div class="text-center font-bronova" v-html="slide.perks"></div>
                </div>
            </div>
        </div>
        <!-- If we need navigation buttons -->
        <div 
            class="button-prev cursor-pointer w-20 h-20 lg:w-28 lg:h-28 bg-no-repeat absolute top-1/2 transform -translate-y-1/2 z-50" 
            :style="{ backgroundImage: `url(${arrowLeft})`}"
        >
        </div>
        <div 
            class="button-next cursor-pointer w-20 h-20 lg:w-28 lg:h-28 bg-no-repeat bg-right absolute top-1/2 right-0 transform -translate-y-1/2 z-50" 
            :style="{ backgroundImage: `url(${arrowRight})`}"
        >
        </div>
    </div>
</div>
</template>

<script>
import { isMobile } from '../utils/helper';
import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css'

// ========== BACKGROUND ==========
import bg03 from '../assets/images/mintSlides/background-0-3.jpg';
import bg05 from '../assets/images/mintSlides/background-0-5.jpg';
import bg1 from '../assets/images/mintSlides/background-1.jpg';
import bg15 from '../assets/images/mintSlides/background-1-5.jpg';
import bg2 from '../assets/images/mintSlides/background-2.jpg';
import bg25 from '../assets/images/mintSlides/background-2-5.png';
// ================================

// ========== IMAGE ==========
import img03 from '../assets/images/mintSlides/image-0-3.png';
import img05 from '../assets/images/mintSlides/image-0-5.png';
import img1 from '../assets/images/mintSlides/image-1.png';
import img15 from '../assets/images/mintSlides/image-1-5.png';
import img2 from '../assets/images/mintSlides/image-2.png';
import img25 from '../assets/images/mintSlides/image-2-5.png';
// ===========================

import arrowLeft from '../assets/images/mintSlides/arrow-left.svg';
import arrowRight from '../assets/images/mintSlides/arrow-right.svg';

export default {
    data(){
        return {
            arrowLeft,
            arrowRight,
            slides: [
                {
                    price: '2.5',
                    bgImage: bg25,
                    image: img25,
                    perks: 'NFT + <span class="font-bold text-mint-gold">1 Land (3 x 3)</span> + 1 House + 1 Vehicle + 1 Pet + 1 Armor in the metaverse',
                    gradient: 'gradient-gold'
                },
                {
                    price: '0.3',
                    bgImage: bg03,
                    image: img03,
                    perks: '<span class="font-bold text-mint-purple">1 Meta Legends</span> NFT',
                    gradient: 'gradient-purple'
                },
                {
                    price: '0.5',
                    bgImage: bg05,
                    image: img05,
                    perks: 'NFT + <span class="font-bold text-mint-blue">1 Armor</span> in the metaverse',
                    gradient: 'gradient-blue'
                },
                {
                    price: '1',
                    bgImage: bg1,
                    image: img1,
                    perks: 'NFT + <span class="font-bold text-mint-pink">1 Pet</span> + 1 Armor in the metaverse',
                    gradient: 'gradient-pink'
                },
                {
                    price: '1.5',
                    bgImage: bg15,
                    image: img15,
                    perks: 'NFT + <span class="font-bold text-mint-white">1 Vehicle</span> + 1 Pet + 1 Armor in the metaverse',
                    gradient: 'gradient-white'
                },
                {
                    price: '2',
                    bgImage: bg2,
                    image: img2,
                    perks: 'NFT + <span class="font-bold text-mint-green">1 House</span> + 1 Vehicle + 1 Pet + 1 Armor in the metaverse',
                    gradient: 'gradient-green'
                },
            ]
        }
    },
    mounted(){
        Swiper.use(Navigation);
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            slidesPerView: isMobile() ? 1 : 3,
            loop: true,
            // Navigation arrows
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
        });

        swiper.on("slideChange", function () {
            const activeSlide = swiper.slides[swiper.activeIndex + 1];

            const prevActiveSlides = document.querySelector(".active");
            if (prevActiveSlides) {
                prevActiveSlides.classList.remove("active");
            }

            activeSlide.classList.add("active");
        });
    }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
    height: initial;
}

.card {
    width: 400px;
    background-color: #26203e;
    border-radius: 0.3rem;
}

.card-img {
    width: 100%;
    height: 400px;
    background-size: cover;

    img {
        height: 400px;
        max-width: none;
    }
}

.button-prev {
    left: 30%;
}
.button-next {
    right: 30%;
}

.gradient-gold {
    background-image: -webkit-linear-gradient(#fffea6, #eabe29);
    background-clip: text;
    color: transparent;
    will-change: transform;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.gradient-purple {
    background-image: -webkit-linear-gradient(#a371ff, #7f4bce);
    background-clip: text;
    color: transparent;
    will-change: transform;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.gradient-blue {
    background-image: -webkit-linear-gradient(#1ae1ff, #299ce5);
    background-clip: text;
    color: transparent;
    will-change: transform;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.gradient-pink {
    background-image: -webkit-linear-gradient(#d1b4cd, #d198c1);
    background-clip: text;
    color: transparent;
    will-change: transform;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.gradient-white {
    background-image: -webkit-linear-gradient(#c7d4f5, #ffffff);
    background-clip: text;
    color: transparent;
    will-change: transform;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.gradient-green {
    background-image: -webkit-linear-gradient(#14ffec, #109896);
    background-clip: text;
    color: transparent;
    will-change: transform;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.active {
    transform: scale(1.2) !important;
    transition: 0.2s;
    z-index: 9998;
}

.active .card {
    box-shadow: 
        0 0 5px rgb(157, 85, 196, 0.5),
        0 0 10px rgb(138, 70, 175),
        0 0 25px rgba(109, 58, 136, 0.5),
}

.active .card .price.gradient-purple {
}

@media screen and (max-width: 600px) {
    .button-prev {
        left: 2%;
    }
    .button-next {
        right: 2%;
    }

    .card {
        width: 300px;
    }
    .card-img{
        height: 300px;

        img {
            height: 300px;
        }
    }
}
</style>