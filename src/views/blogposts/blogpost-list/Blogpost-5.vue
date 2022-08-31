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

    <p class="lg:leading-8 lg:text-lg my-5">
        On the <span class="font-bold">11th December</span> we finish what we started. The DDoS attack will not hold us back, the belief in the Meta Legends community is too strong, too powerful. Through obstacles we learn. Together we move forward, to the Meta Legends Metaverse, to Meta-Life. That journey begins with the completion of the Meta Legends mint.
    </p>
    
    <ul class="lg:leading-8 lg:text-lg my-5 list-disc list-inside">
        <li>Public Mint - Saturday, <span class="font-bold">December 11</span> at 9PM UTC (10PM CET)</li>
        <li>Whitelist Mint - Sunday, <span class="font-bold">December 12</span> at 9PM ( 10PM CET). Those on the whitelist will have 24 hours to mint.</li>
        <li>Reveal: Monday, <span class="font-bold">December 13</span>, 2021</li>
    </ul>

    <p class="lg:leading-8 lg:text-lg my-5">
        Inspired by the Cyberpunk universe and Ready Player One, designed by the renowned artist <a class="font-bold underline" href="https://www.meta-legends.com/blog/blogpost-2" target="_blank">Maxime Hacquard</a>, Meta Legends is a collection of 12345 NFTs, They are stunning, but that is only the beginning. Each Meta Legend is an extension of the owner, a key to the Meta Legends ecosystem and community. After launch on December 11th, Meta Legends begin their journey to the Metaverse. Meta-Life, a Triple A <a class="font-bold underline" href="https://www.meta-life.io/metaverse" target="_blank">Metaverse</a> built on <a class="font-bold underline" href="https://www.meta-legends.com/blog/blogpost-1" target="_blank">Unreal 5</a> awaits. Furthermore, every Meta Legend holder will be linked together by <a class="font-bold underline" href="https://www.meta-connect.io/app" target="_blank">Meta-Connect</a>.
        <br><br>
        If you haven’t already, check out our sneak peak of Meta-Life.
    </p>

    <div class="lg:flex keynote-video lg:my-20">
        <iframe class="h-full lg:h-auto w-full" src="https://player.vimeo.com/video/649166035?h=c3df0b9282" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>

    <p class="lg:leading-8 lg:text-lg my-5">
        Back to the Meta Legends mint and how it links to the Metaverse. When you join the public sale on December 11th, you will be presented this choice.
    </p>

    <div class="lg:px-32 lg:my-14">
        <p class="lg:leading-8 lg:text-lg my-5">
            Mint a Meta Legend starts at <span class="font-bold">0.3 ETH</span> (5 max per wallet) without Meta-Life perks.
        </p>
        <p class="lg:leading-8 lg:text-lg my-5">
            Minting from 0.5 ETH will give you a range of additional NFT items connected to the Meta-Life Metaverse. (Gain more perks by minting at higher price)<br>
            To get Meta-Life NFTs the price is between 0.5 and 2.5 ETH (With 0,5 ETH Steps). This is not an auction, you can choose.
        </p>
    </div>

    <p class="lg:leading-8 lg:text-lg my-5">
        Minting at 2.5 ETH, for example, gives you the following NFTs : land in the Metaverse, residence, vehicle, pet and armor for your Meta Legend.
    </p>

    <!-- image 1 -->
    <div class="flex justify-center">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-5/image-1.png">
    </div>

    <h4 class="lg:text-lg font-bold mt-10 lg:mt-20 mb-5">What you need to know about Meta Life perks and future NFT drops</h4>

    <p class="lg:leading-8 lg:text-lg lg:my-5 mb-10">
        All Meta Life perks NFT drops are attached to the wallet address, not the Meta Legends PFP NFT itself.<br>
        As such you will be able to see, buy and trade them individually on the secondary market. Our design team is working on these additions and we will release sneak peaks and more news as we head into 2022. The same applies to the rewards for original holders
        <br><br>
        In addition to the options at mint, there are Meta Legends physical goods for all buyers.
    </p>

    <!-- image 2 -->
    <div class="flex justify-center lg:mb-32">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-5/image-2.png">
    </div>

    <h2 class="text-xl lg:text-4xl font-bold mt-10 lg:mb-2">The Whitelist</h2>

    <p class="lg:leading-8 lg:text-lg my-5">
        If you were Whitelisted for the original mint, this is not changed.<br>
        The exclusive mint will be the day after the public mint.
    </p>

    <ul class="lg:leading-8 lg:text-lg my-5 list-disc list-inside lg:mb-32">
        <li>Sunday, <span class="font-bold">December 12</span>, 2021, at 9PM UTC (you will have 24 hours to mint)</li>
        <li>Whitelist price – <span class="font-bold">0.3 ETH</span></li>
        <li>Whitelist mints will also receive Meta-Life 1 armor + 1 vehicle + 1 pet (<span class="font-bold">1.5 ETH mint value</span>) by holding their Legend</li>
        <li>People who mint via the whitelist and hold their NFT for one month will be able to mint a FREE Meta Legend PFP NFT.</li>
        <li>10 most active Whitelisted members in the discord will also receive a residence after they minted.</li>
    </ul>

    <h2 class="text-xl lg:text-4xl font-bold lg:mt-10 lg:mb-2">The Reveal</h2>
    <p class="lg:leading-8 lg:text-lg my-5 lg:mb-10">
        Monday, December 13, 2021.<br>
        The time of reveal will be randomly announced.
    </p>

    <!-- image 3 -->
    <div class="flex justify-center mb-20 lg:mb-32">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-5/image-3.png">
    </div>

    <h2 class="text-xl lg:text-4xl font-bold lg:mt-10 lg:mb-2">The Rewards</h2>
    <p class="lg:leading-8 lg:text-lg my-5 lg:mb-20">
        To reward your loyalty, increasing the value of Meta Legends and encourage diamond hands, we have introduced a selection of rewards as we head towards mint.
    </p>
    
    <h3 class="text-lg lg:text-3xl lg:mt-10 lg:mb-2">The Sweeper Role</h3>
    <p class="lg:leading-8 lg:text-lg my-5 lg:mb-20">
        If you buy a Meta Legend on the secondary market for less than 1 ETH and hold or re-list above 1 ETH, hold it for a month, then you will unlock the Angel Sweeper role. This will entitle you to receive one weapon to use in Meta-Life. There will be one weapon for every Meta Legend you sweep.
    </p>
    
    <h3 class="text-lg lg:text-3xl lg:mt-10 lg:mb-2">OG Buyers (Formerly known as Genesis)</h3>
    <p class="lg:leading-8 lg:text-lg my-5 lg:mb-20">
        Anyone who minted a Meta Legend before November 25th is considered an OG Buyer.<br>
        Hold your minted Meta Legend until the 25th December and you will have the opportunity to mint (you're responsible for gas fees only) a second Meta Legend NFT and get 1 armor + 1 vehicle + 1 pet for free per each Legend held.
        <br><br>
        People who minted from 0.5 in the first public sale NOV 24 will also receive additional Meta-Life bonuses,
    </p>
    
    <h3 class="text-lg lg:text-3xl lg:mt-10 lg:mb-2">Council Members</h3>
    <p class="lg:leading-8 lg:text-lg my-5 lg:mb-32">
        All the NFTs minted by the first 300 wallets, including the ones sold on opensea, are part of the council and will be able to claim a council stone.
        <br><br>
        One council stone offers the right to claim one council seat. 
        <br><br>
        The unclaimmed stones after 1 year will be held my Meta Legends treasury for future use.
        <br><br>
        The 5 celestials Heroes (Winners of our easter eggs) are also part of the council.
        <br><br>
        <span class="font-bold">IMPORTANT INFO :</span> Id of the token linked to Stones:  1 to 5 and from 20 to 346 (The in between 6 to 19 were NFT dropped to marketing partners when we launched)
    </p>

    <h2 class="text-xl lg:text-4xl font-bold lg:mt-10 lg:mb-2">First timers</h2>
    <p class="lg:leading-8 lg:text-lg my-5">
        For those who will be minting for the first time and have questions, we made this <a class="font-bold underline" href="https://www.meta-legends.com/blog/blogpost-3" target="_blank">easy to follow guide</a> with everything you need to know. It outlines the steps you need to take to set up a MetaMask wallet, fund it with Ethereum, and mint your Meta Legend. The Discord and Twitter community is also your network, 24 hours-a-day, so if you have further questions, ask away.
        <br><br>
        <span class="font-bold">See you on December 11th</span>
        <br><br>
        Our gratitude for your belief in our project, our art and the Meta Legends Metaverse energies us. We would never have given up, your belief just amplifies our mindset, drives us on.<br>
        On the 11th December, the journey begins. And this time we won’t be stopped.
        <br><br>
        The Meta Legends Team
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

export default {
    data(){
        return {
            index: 5,
            info: blogposts[1],
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
    background-image: url('../../../assets/images/blogposts/blogpost-5/image-blur.png');
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

.keynote-video {
    height: 650px;
}

@media (max-width: 480px) {
    .keynote-video {
        height: 300px;
    }
}
</style>