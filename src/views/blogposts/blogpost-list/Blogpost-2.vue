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
    <h1 class="text-3xl lg:text-6xl font-bold absolute bottom-0 lg:mb-5" v-html="info.title"></h1>
</div>

<div class="container bg-dark-purple  min-w-full font-bronova text-white px-3 lg:px-28 xl:px-48 py-5 lg:py-16 pb-32 lg:pb-52">
    <p class="lg:leading-8 lg:text-lg">
        Less than a week before launch, I spoke with Maxime Hacquard, 3D artist and the mind behind Meta Legends. A staunch advocate of a decentralised Metaverse, governed as a DAO, Maxime’s reputation precedes him. A quick internet search throws up one of the largest motion design communities on the planet, collaborations with global brands, speaking engagements, and a treasure trove of dystopian, futuristic, surrealist art.
        <br><br>
        On the other side of the call was the inside scoop on the origins of one of the year’s most anticipated NFT drops, Maxime’s background in 3D design, his views on the Metaverse, Meta Life and what the Meta Legends community can expect over the coming months.
    </p>
    <img class="rounded-md lg:rounded-lg my-5" src="../../../assets/images/blogposts/blogpost-2/image-0.png" alt="">
    <p class="lg:leading-8 lg:text-lg">
        The first question is about inception, the ideas and inspiration for the avatars of Meta Legends. What led to the Celestials and the Burners, the Robotos and the Matrix Angels? “It’s the result of eight years of practice and experience,” Maxime says, explaining how Meta Legends is built on passion, artistry and thousands of hours of creative endeavour, an accumulation of a life’s work.
        <br><br> 
        Maxime is the art director of the project, co-founder, member of the Meta Legends council, and associate. He is the man with the vision and responsible for 90% of the art. (AA-Motion and Wild Animation lent their artistic expertise to the armour of the Meta Legends.) The team call him a genius, the ideal leader at the helm of a 3D NFT and Metaverse project. 
    </p>
    
    <div class="grid grid-cols-2 grid-flow-row auto-rows-max gap-3 lg:gap-14 mt-8 lg:mt-16">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-2/image-1.png" alt="">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-2/image-2.png" alt="">
    </div>

    <h2 class="text-xl lg:text-4xl mb-5 lg:mb-9 mt-16 lg:mt-36 font-bold">The Beginnings</h2>
    <p class="lg:leading-8 lg:text-lg">
        Although his skill-set covers post production, animation, compositing and art direction, first and foremost Maxime is a 3D digital artist and designer. From his early days as a freelance motion designer and a 3D and Cinema 4D supervisor working for world renowned brands (FIFA, UCI, Warner, Bouygues, and DropDead Clothing) to his two year stint as co-director at <a class="underline font-bold" href="https://www.instagram.com/mhsprod/?hl=en" target="_blank">MHSProd</a>, a studio working for international brands such as Hublot, McLaren, Motorola, his eye and craft have been evolving. 
        <br><br>
        MHSProd has over 100K Instagram followers, but is much more than that, putting on real world events for its members and followers. “It’s an international community,” Maxime tells me, “and not just online. We hold real events in London, Paris, Barcelona and Berlin.”
    </p>
    
    <div class="grid grid-cols-2 grid-flow-row auto-rows-max gap-3 lg:gap-14 mt-8 lg:mt-16 mb-8 lg:mb-16">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-2/image-3.png" alt="">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-2/image-4.png" alt="">
    </div>

    <p class="lg:leading-8 lg:text-lg">
        It’s part of the reason so many motion designers are familiar with Maxime’s work. That, and his passion teaching, empowering and passing on his knowledge. He is admin of the <a class="underline font-bold" href="https://www.instagram.com/motiondesigners/?hl=en" target="_blank">Motion Designers Community</a> and its 450,000 followers. He has taught at <a class="underline font-bold" href="https://www.instagram.com/omnesgroup/?hl=en" target="_blank">Omnes</a> group, <a class="underline font-bold" href="https://www.ionis-group.com/" target="_blank">Ionis Group</a> and the famous Parisian school of moving images, cinema and animation, <a class="underline font-bold" href="https://www.gobelins.fr/" target="_blank">Les Gobelins</a>. He is also an educative producer, helping artists embrace the space and take their projects further. 
        <br><br>
        Last but not least - in-case you still need convincing Meta Legends is in safe hands - as a speaker he has ticked off The Annecy Festival, Houdini Hive Paris, Video Copilot Live, IAMAG Masterclasses, and The Adobe Creative Cloud Meetup. 
    </p>

    <h2 class="text-xl lg:text-4xl mb-5 lg:mb-9 mt-16 lg:mt-36 font-bold">The Metaverse</h2>
    <p class="italic text-center lg:text-lg mb-5 lg:mb-9">
        “The purpose of Meta Legends is to create our own Metaverse: <a class="underline font-bold" href="https://www.meta-life.io/metaverse" target="_blank">META LIFE</a>.” - Meta Legends
    </p>
    <p class="lg:leading-8 lg:text-lg">
        Forget the centralised Meta rhetoric, how does Maxime think about the Metaverse, Meta Legends and Meta Life’s position in the narrative? 
        <br><br>
        “The Metaverse is the combination of a decentralised economy, and experiencing another reality. It could be on a PC, a VR headset, a motion capture suite. In the future it could be a sensitive suite. Many think of it as Player One, but the reality is that you can connect to the metaverse from your PC.”
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-2 grid-flow-row auto-rows-max gap-3 lg:gap-14 mt-8 lg:mt-16 mb-8 lg:mb-16">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-2/image-5.png" alt="">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-2/image-6.png" alt="">
    </div>

    <p class="lg:leading-8 lg:text-lg">
        How about Meta Legends? “Meta Legends and Meta Life will be a unique Metaverse. High quality, graphically incredible, [it will be] a strong, art-directed metaverse. It won’t be corporate. There will be competitive games, things your Gran will never be able to do. It’s the Metaverse for gamers. People who want to live and experience high quality, competitive games in the best looking Metaverse there is. Best of all, it will be decentralised and governed by DAO.” 
        <br><br>
        The Meta Legend community is on the same page as Maxime, a vision of a decentralised Metaverse, far from the over bearing, over reaching arms of giant corporations with ill-gotten at best – sinister and unknown at worst - motives. A Metaverse governed by the community. A Metaverse of interoperability, built on the blockchain.
        <br><br>
        “This is a long term Metaverse, upgraded and compatible with other projects. All models will be available to own. Players will be able to take their avatars and ingame items across platforms and metaverses.”
        <br><br>
        Now if that doesn’t get your blood pumping…
    </p>
    
    <div class="grid grid-cols-2 grid-flow-row auto-rows-max gap-3 lg:gap-8 mt-8 lg:mt-16 mb-8 lg:mb-16">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-2/image-7.png" alt="">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-2/image-8.png" alt="">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-2/image-9.png" alt="">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-2/image-10.png" alt="">
    </div>

    <h2 class="text-xl lg:text-4xl mb-5 lg:mb-9 mt-16 lg:mt-36 font-bold">The Green Room</h2>
    <p class="lg:leading-8 lg:text-lg">
        With seven days to go until launch, the idea of Maxime having down time, switching off or relaxing is as alien as the idea of a centralised Metaverse. “People investing will be rewarded. The asset value will only rise in the long-term, because the biggest work is yet to come. We are just getting started. This is the calm before the storm. My work is my passion, my passion is my work. 100% Meta Legends.” 
        <br><br>
        And on that, I left Maxime to put the finishes touches to the project. 
        <br>
        Before the real work begins on the 24th November.
        <br><br>
        See you at Mint.
    </p>

    <div class="mt-20 lg:mt-28 flex justify-between">
        <div class="font-bold cursor-pointer lg:text-xl" v-if="blogposts[index - 1]" @click="goToBlogpost(index - 1)">← Previous blogpost</div>
        <div class="font-bold cursor-pointer lg:text-xl" v-if="blogposts[index]" @click="goToBlogpost(index + 1)">Next blogpost →</div>
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
import Countdown from '../../../components/Countdown.vue';

export default {
    data(){
        return {
            index: 2,
            info: blogposts[4],
            blogposts,
        }
    },
    components: { Countdown },
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
    background-image: url('../../../assets/images/blogposts/blogpost-2/image-blur.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.border-gradient {
    background-image: url('../../../assets/images/border-gradient.svg');
    background-repeat: no-repeat;
}
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