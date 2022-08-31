<template>
<div class="container bg-dark-purple  min-w-full font-bronova text-white px-3 lg:px-28 xl:px-48 py-3 lg:py-10">
    <div class="flex justify-center lg:hidden mb-5 lg:mb-0">
        <img class="h-8" src="../../../assets/images/title-logo.svg" alt="meta legends logo">
    </div>
    <div class="flex justify-between items-center">
        <div class="inline-flex items-center cursor-pointer" @click="backToBlogpostList">
            <img class="h-8 lg:h-10 mr-3 lg:mr-5" src="../../../assets/images/icons/arrow.svg" alt="">
            <span class="hidden lg:block lg:text-xl">Back to blogpost list</span>
        </div>
        <img class="hidden lg:block lg:h-16" src="../../../assets/images/title-logo.svg" alt="meta legends logo">
        <div>
            <button class="relative mx-1.5 p-1.5 bg-gradient-to-br from-blue to-purple btn-discord rounded-md lg:rounded-lg">
                <a class="absolute top-0 left-0 w-full h-full" href="https://twitter.com/metalegendsnft" target="_blank"></a>
                <img class="w-8 h-8" src="../../../assets/images/icons/twitter.svg" alt="twitter">
            </button>
            <button class="relative mx-1.5 p-1.5 bg-gradient-to-br from-blue to-purple btn-discord rounded-md lg:rounded-lg">
                <a class="absolute top-0 left-0 w-full h-full" href="https://www.instagram.com/meta.legends/" target="_blank"></a>
                <img class="w-8 h-8" src="../../../assets/images/icons/instagram.svg" alt="instagram">
            </button>
            <button class="relative mx-1.5 p-1.5 bg-gradient-to-br from-blue to-purple btn-discord rounded-md lg:rounded-lg">
                <a class="absolute top-0 left-0 w-full h-full" href="https://discord.gg/meta-legends" target="_blank"></a>
                <img class=" w-8 h-8" src="../../../assets/images/icons/discord.svg" alt="discord">
            </button>
        </div>
    </div>
</div>

<div class="h-52 lg:h-80 relative header-image font-bronova text-white px-3 lg:px-28 xl:px-48">
    <div class="lg:hidden absolute h-full w-full bg-black opacity-40 left-0"></div>
    <h1 class="text-3xl lg:text-6xl font-bold absolute bottom-0 lg:mb-5 xl:px-28" v-html="info.title"></h1>
</div>

<div class="container bg-dark-purple  min-w-full font-bronova text-white px-3 lg:px-28 xl:px-72 py-5 lg:py-16 pb-32 lg:pb-52">

    <h2 class="lg:leading-8 lg:text-4xl text-xl lg:my-5 mb-10 font-bronova text-center">
        Own the Future of the Gaming Metaverse
    </h2>

    <p class="lg:leading-8 lg:text-lg my-5">
        A new world is awakening, a universe of endless opportunity in which you can be the player, the builder, the earner, and the creator. A new era of cinematic gaming is coming, a universe which you can build in your own vision. 
        <br><br>
        We present to you:
    </p>

    <h3 class="lg:text-3xl text-lg font-bold mt-10 lg:mt-20 mb-5 text-center">
        The Metaverse
    </h3>

    <p class="lg:leading-8 lg:text-lg my-5">
        On <span class="font-bold">December 11th</span>, the doors of the Metaverse shall open to those fortunate few bestowed with the opportunity to <span class="font-bold">mint Meta Legends</span> and be among the first to own parts of the Metaverse. You will have <span class="font-bold">exclusive access</span> to lands, armors, weapons, and mecha pets. 
        <br><br>
        Each piece of land is a <span class="font-bold">unique customizable</span> domain, a hive of resources and mesmerizing utility. <span class="font-bold">Open worlds</span> of light and shadow, plots and intrigue, wealth and divinity. 
        <br><br>
        The rage of fire, the freedom of air, the serenity of water, and the stability of earth; the elements themselves will be yours to harness and use at will. You will establish cities, raise spiraling towers of light or dark power high into the sky, and channel crackling energy of inescapable beauty. 
        <br><br>
        <span class="font-bold">Meta Life is yours</span>. You’ll be able to <span class="font-bold">farm resources</span>, and plunder those of others in fun game modes. Your land will give you the freedom <span class="font-bold">to create your own world</span>, a place of shops, bars, meeting points and entertainment, a place to meet friends and plot for future battles and adventure.  
        <br><br>
        As we approach the launch date, let us share with you our vision. What you’re about to see is <span class="font-bold">exclusive, behind-the-scenes concept art not usually available for non-developers</span>. However, we want to show you, those that will build the Metaverse with us, the drawings and paintings that are the origin of the Metaverse.
        <br><br>
        <span class="font-bold">The following work-in-progress images are the inspiration</span> that our team will evolve into stunning 3D assets, rendered in incomprehensible beauty in the Unreal 5 game engine. What you are witnessing is akin to the first sketches of Darth Vader, the early vision of BladeRunner and Dune, the spark from which the world is built. 
    </p>

    <h3 class="lg:text-3xl text-lg font-bold mt-10 lg:mt-20 mb-5 text-center">
        The Celestial City
    </h3>

    <p class="lg:leading-8 lg:text-lg my-5">
        For thousands of years the Celestials built and razed land, terra-formed the planet surface to match their ethics and morals. They created a lush landscape of rivers and streams, lakes and caves, a garden of Eden hidden amongst the charcoal of space.
    </p>

    <img class="lg:my-10 my-5 rounded-lg" src="../../../assets/images/blogposts/blogpost-6/celestial-city-1.jpg" alt="">

    <p class="lg:leading-8 lg:text-lg my-5">
        Rising up from the planet surface, the glistening towers of chrome and glass are unmistakably the <span class="font-bold">home of the greatest Meta Legends</span>. Peaceful parks are scattered amongst the Elysian Fields, the long thoroughfares which carry the populace around. Portals connect you to the rest of Meta Life, crystals of energy give a sense of serenity and calm, protecting the focused minds of the Celestials and giving them the freedom to rule. 
    </p>
    
    <img class="lg:my-10 my-5 rounded-lg" src="../../../assets/images/blogposts/blogpost-6/celestial-city-2.jpg" alt="">

    <p class="lg:leading-8 lg:text-lg my-5">
        The Celestial City is <span class="font-bold">the most advanced city imaginable</span>, an exquisite land where technology and architecture merge with the wisdom and hope of the Celestials. 
    </p>

    <img class="lg:my-10 my-5 rounded-lg" src="../../../assets/images/blogposts/blogpost-6/celestial-city-3.jpg" alt="">

    <p class="lg:leading-8 lg:text-lg my-5">
        It is the core of Meta Legends, the home of the great ones. You will be able to buy land here. It will be an honour, one with great responsibility.
    </p>

    <h3 class="lg:text-3xl text-lg font-bold mt-10 lg:mt-20 mb-5 text-center">
        The Burner Territories
    </h3>

    <p class="lg:leading-8 lg:text-lg my-5">
        A dark, luminous energy pulsates, casting reds and oranges across the sky, as if the Apocalypse is being orchestrated from the depths of the city. The Burners terra formed the planet surface so as to build their vision of citadels and towers. Now the energy from their dark architecture influences the Burners, and anyone else who visits, instilling awe and wonder in the depths of their soul. 
    </p>

    <img class="lg:my-10 my-5 rounded-lg" src="../../../assets/images/blogposts/blogpost-6/burner-1.png" alt="">

    <p class="lg:leading-8 lg:text-lg my-5">
        Towering above the tenements and living quarters of the Burners is <span class="font-bold">the Power Centre</span>, a crushing building of power and energy, the driving force behind the Burners power. Magnetic, monstrous, pulling avatars into the city walls to either join and control, or be sent to the mines to work. Large avenues criss-cross the city, circumvented by narrow through fares and dangerous, narrow streets.
    </p>

    <img class="lg:my-10 my-5 rounded-lg" src="../../../assets/images/blogposts/blogpost-6/burner-2.png" alt="">

    <h3 class="lg:text-3xl text-lg font-bold mt-10 lg:mt-20 mb-5 text-center">
        The Rough Valleys
    </h3>

    <p class="lg:leading-8 lg:text-lg my-5">
        Venturing away from the megalopolis of the Celestial City can be infused with danger. But for the Roughs, this is home. The cities of <span class="font-bold">the Rough Valleys</span> reflect the heat. They are cool and neon, the low roofs and narrow streets a place of camaraderie and battle, where soldiers and bounty hunters drink and eat and tell tales of adventure and danger in the lost lands of the Metaverse. 
        <br><br>
        The Rough Valleys are <span class="font-bold">home to music and parties</span>, but <span class="font-bold">laced with danger and subplot</span>, a <span class="font-bold">meeting point for vagabonds and hitmen</span>. Is anything as it seems?   
    </p>

    <img class="lg:my-10 my-5 rounded-lg" src="../../../assets/images/blogposts/blogpost-6/rough.jpg" alt="">

    <h3 class="lg:text-3xl text-lg font-bold mt-10 lg:mt-20 mb-5 text-center">
        The Matrix Angels Heights
    </h3>

    <p class="lg:leading-8 lg:text-lg my-5">
        Technology is silent. The raucous outside world of hackers and pirates who code furiously, trying to hack the Metaverse, trying to breach the code of the Matrix Angels, is muted by the magnificence of the lands of this corner of Meta Life. 
        <br><br>
        A sense of quiet serenity springs from the monumental towers at the heart of the city, the vacuum sealed <span class="font-bold">Computer Labs</span> where the Matrix Angels work forming a <span class="font-bold">curtain of defense</span> at the centre of the domain. 
    </p>

    <img class="lg:my-10 my-5 rounded-lg" src="../../../assets/images/blogposts/blogpost-6/matrix-angel.jpg" alt="">

    <h3 class="lg:text-3xl text-lg font-bold mt-10 lg:mt-20 mb-5 text-center">
        The Goldbois Golden Valley
    </h3>

    <p class="lg:leading-8 lg:text-lg my-5">
        Like Midas himself, <span class="font-bold">the Golden Valley</span> is one of infinite riches, incomparable wealth. Walking down its marble streets, admiring the ornate beauty of the store fronts and showrooms, you will feel powerful, rich, comfortable. Your enemies will be intimidated by the show of power and the life such wealth can bring.
    </p>

    <img class="lg:my-10 my-5 rounded-lg" src="../../../assets/images/blogposts/blogpost-6/goldboi-1.jpg" alt="">

    <p class="lg:leading-8 lg:text-lg my-5">
        The mines of Meta Life were exploited, the treasures and precious stones of asteroids and the centre of stars harvested to decorate the palaces and castles.
    </p>

    <img class="lg:my-10 my-5 rounded-lg" src="../../../assets/images/blogposts/blogpost-6/goldboi-2.jpg" alt="">

    <p class="lg:leading-8 lg:text-lg my-5">
        With <span class="font-bold">only days left</span> until Mint, now is the <span class="font-bold">time to make your decision, to decide whether you want an amazing land, property, weapons and armour, or just a Meta Legend</span>. 
        <br><br>
        Over the next few days we will be releasing more concept art, both to get you excited, but also to keep you in the process. For exciting purposes we also have to keep some of them secret.
        <br><br>
        To conclude, we love creating these assets and worlds, but we love even more sharing them with the Meta Legends community. 
        <br><br>
        <span class="font-bold">It’s now in your power to own a really rare Meta Life Land before everyone else by minting the DEC 11.</span>
    </p>


    <div class="mt-20 lg:mt-28 flex justify-between">
        <div class="font-bold cursor-pointer lg:text-xl" v-if="blogposts[index - 1]" @click="goToBlogpost(index - 1)">← Previous blogpost</div>
        <div class="font-bold cursor-pointer lg:text-xl" v-if="blogposts[index + 1]" @click="goToBlogpost(index + 1)">Next blogpost →</div>
    </div>
</div>

<div class="container lg:min-w-full md:w-auto antialiased bg-darkest-purple-2 px-4 py-8 lg:px-40 lg:py-16 relative">
    <div class="flex justify-between">
        <img class="h-16 lg:h-40 w-auto" src="../../../assets/images/logo-avatar-title.svg" alt="" srcset="">
        <div class="flex flex-col items-end">
            <!-- <a class="text-sm lg:text-2xl font-bronova text-blue " href="">Terms & Conditions</a> -->
            <div class="flex  lg:gap-x-5 mt-2 lg:mt-10">
                <a href="https://discord.gg/meta-legends" target="_blank">
                    <button class="ml-2 p-2 lg:p-5 btn-footer btn-discord border-gradient">
                        <img class="h-4 w-4 lg:h-11 lg:w-11" src="../../../assets/images/icons/discord.svg" alt="" srcset="">
                    </button>
                </a>
                <a href="https://twitter.com/metalegendsnft" target="_blank">
                    <button class="ml-2 p-2 lg:p-5 btn-footer btn-twitter border-gradient">
                        <img class="h-4 w-4 lg:h-11 lg:w-11" src="../../../assets/images/icons/twitter.svg" alt="" srcset="">
                    </button>
                </a>
                <a href="https://www.instagram.com/meta.legends/" target="_blank">
                    <button class="ml-2 p-2 lg:p-5 btn-footer btn-discord border-gradient">
                        <img class="h-4 w-4 lg:h-11 lg:w-11" src="../../../assets/images/icons/instagram.svg" alt="" srcset="">
                    </button>
                </a>
            </div>
        </div>
    </div>
    <p class="text-light-purple text-xs lg:text-xl text-right mt-3 lg:mt-8">©2021 Meta-Legends. All rights reserved.</p>
</div>
</template>

<script>
import { blogposts } from '../../../utils/blogposts.js';

export default {
    data(){
        return {
            index: 6,
            info: blogposts[0],
            blogposts,
        }
    },
    methods: {
        backToBlogpostList(){
            this.$router.push('/blog');
        },
        goToBlogpost(index){
            this.$router.push(`/blog/blogpost-${index}`)
        }
    }
}
</script>

<style lang="scss" scoped>
.header-image {
    background-image: url('../../../assets/images/blogposts/blogpost-6/burner-blur.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.border-gradient {
    background-image: url('../../../assets/images/border-gradient.svg');
    background-repeat: no-repeat;
}

.btn-discord {
    transition: 0.5s;
}
.btn-discord:hover {
    box-shadow: 0 0 32px rgba(159, 55, 208, 0.79);
    transition: 0.5s;
}
</style>