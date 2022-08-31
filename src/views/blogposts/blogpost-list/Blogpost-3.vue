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
    <p class="lg:leading-8 lg:text-lg">
        This is NFT 101, for first time buyers who have been inspired to join the NFT community and swim in The Metaverse waters because of the incredible art and vision of Meta Legends.
        <br><br>
        Take a minute to reflect. You’re here, you’re early. Only <a class="underline font-bold" href="https://triple-a.io/crypto-ownership/">3.9 %</a> of the population of Earth own cryptocurrency, even fewer an NFT. But the numbers are growing. There were 265,927 active <a class="underline font-bold" href="https://economictimes.indiatimes.com/tech/technology/nft-sales-surge-to-10-7-billion-in-q3-as-crypto-asset-frenzy-hits-new-highs/articleshow/86772103.cms?from=mdr">wallets</a> trading NFTs on the Ethereum blockchain in the 3rd quarter of 2021, up from 40,000 in <a class="underline font-bold" href="https://influencermarketinghub.com/nfts-statistics/">March</a> of this year. Numbers are increasing daily, and Meta Legends is only going add to the trend. 
    </p>

    <h2 class="text-xl lg:text-4xl mb-5 lg:mb-9 mt-16 lg:mt-36 font-bold">MetaMask, Ethereum and Meta Legends</h2>
    <p class="lg:leading-8 lg:text-lg">
        With scams, rug pulls and nefarious parties trying to rip the fun out of the space, it’s important to understand how to mint an NFT safely. From the outside it can seem complex, it really isn’t. This guide will make the process safer, and easier to understand. If you’re an experienced NFT holder, this isn’t for you. If Meta Legends is your first mint, read on. And, if by publishing this article, we can help one person from the community have a better minting experience, then it has been worth it. 
    </p>
    
    <div class="grid grid-cols-2 grid-flow-row auto-rows-max gap-3 lg:gap-14 my-8 lg:my-16">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-3/ml-1.png" alt="">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-3/ml-2.png" alt="">
    </div>

    <p class="lg:leading-8 lg:text-lg">
        That said, how do you buy a Meta Legends NFT? In short, you need to have ETH in 
        a MetaMask wallet and be connected to the Meta Legends website on December 11th.
        <br><br>
        Only the Meta Legends website. Only the 11th December. This will not change.<br> 
        Fake accounts on Twitter and Discord will try to tell you otherwise. Do not listen.<br>
        The only place you will be able to buy a Meta Legends NFT is <a class="font-bold underline" href="https://www.metalegends.com">https://www.metalegends.com</a>.<br>
        We are repeating ourselves here, not to scare you, but to highlight the importance.
    </p>

    <h2 class="text-xl lg:text-4xl mb-5 lg:mb-9 mt-16 lg:mt-36 font-bold">Buy ETH on an Exchange</h2>
    <p class="lg:leading-8 lg:text-lg">
        Right, let’s go. Step one. You can buy ETH (Ethereum is the blockchain powering the cryptocurrency Ether. Many call it Ethereum. That’s fine.) on Metamask, but the fees are high. A cheaper and easier way is to buy through an exchange.
        <br><br>
        Choose from <a class="font-bold underline" href="https://www.coinbase.com">Coinbase</a>, <a class="font-bold underline" href="https://www.huobi.com/en-us/">Huobi</a>, <a class="font-bold underline" href="https://www.binance.com/en">Binance</a>, FTX, <a class="font-bold underline" href="https://www.okex.com">Okex</a>, <a class="font-bold underline" href="https://www.kraken.com/">Kraken</a>, or KuCoin. There are other cryptocurrency exchanges, but since you are buying an NFT for the first time, stick to the more known platforms. They offer step-by-step instructions, however, if you have signed up for a website or bought video games on-line, you’ll be the proud holder of ETH in no time. So you know, most crypto exchanges now need  you to fill out a KYC (Know Your Customer), so be prepared to have photographic ID to hand. 
    </p>

    <h2 class="text-xl lg:text-4xl mb-5 lg:mb-9 mt-16 lg:mt-36 font-bold">The MetaMask Wallet</h2>
    <p class="lg:leading-8 lg:text-lg">
        Exchanges allow you to turn your Dollars and Euros into shiny new ETH. But you can’t buy a Meta Legend NFT on Coinbase. The next step is to set up a MetaMask wallet. Only use  <a class="underline font-bold" href="https://metamask.io/">Metamask.io</a> for this. Having MetaMask will allow you to connect to the Meta Legends website and be part of the mint. (There are other wallets. We recommend MetaMask.
    </p>

    <p class="lg:leading-8 lg:text-lg mt-8 lg:mt-16">Go to <a href="Metamask.io"><span class="px-5 pt-3 pb-2 bg-twitter-blue rounded-full cursor-pointer">Metamask.io</span></a></p>

    <div class="grid grid-cols-1 lg:grid-cols-2 grid-flow-row auto-rows-max gap-1 lg:gap-5 mt-4 lg:mt-8">
        <div>
            <div class="lg:text-lg mb-1 lg:mb-3">Click on <span class="font-bold">Download</span> </div>
            <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-3/blog3-meta-1.png" alt="">
        </div>
        <div>
            <div class="lg:text-lg mb-1 lg:mb-3">Click on <span class="font-bold">Create a Wallet</span> </div>
            <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-3/blog3-meta-2.png" alt="">
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 grid-flow-row auto-rows-max gap-1 lg:gap-5 mt-4 lg:mt-8">
        <div>
            <div class="lg:text-lg mb-1 lg:mb-3">Agree to terms</div>
            <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-3/blog3-meta-3.png" alt="">
        </div>
        <div>
            <div class="lg:text-lg mb-1 lg:mb-3">Create a password</div>
            <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-3/blog3-meta-4.png" alt="">
        </div>
    </div>
    
    <p class="lg:leading-8 lg:text-lg my-8 lg:my-16">
        The next step is the all important seed phrase. The seed phrase is everything. The key to your cryptocurrency and NFT adventure. Lose it and you are sunk. People have lost millions of dollars because they have lost or forgotten their seed phrase. Don’t join them. Write it down on paper and store it in multiple locations. Not on your phone, or PC (unless you are a cryptographic password manager with a VPN provider bouncing connections across the globe). Don’t take a photo. Don’t email it to yourself.
    </p>
    <div class="flex justify-center">   
        <img class="rounded-md lg:rounded-lg my-5" src="../../../assets/images/blogposts/blogpost-3/blog3-meta-5.png" alt="">
    </div>
    <p class="lg:leading-8 lg:text-lg mt-4 lg:mt-8">
        You’ll be asked to confirm your secret phrase on the next page.
    </p>

    <h2 class="text-xl lg:text-4xl mb-5 lg:mb-9 mt-16 lg:mt-36 font-bold">How to Send Ethereum From Binance to MetaMask in 5 steps ?</h2>
    <p class="lg:leading-8 lg:text-lg">
        Now you need some ETH in your wallet. Sending your ETH from the exchange to your Metamask is done by clicking on ACCOUNT 1 on MetaMask. This copies your wallet address. 
    </p>
    
    <h3 class="text-lg lg:text-2xl mb-3 lg:mb-6 mt-10 lg:mt-20 font-bold">1. Copy your ETH address from MetaMask</h3>
    <div class="flex justify-center">   
        <img class="rounded-md lg:rounded-lg my-5" src="../../../assets/images/blogposts/blogpost-3/image-1.jpeg" alt="">
    </div>
    
    <h3 class="text-lg lg:text-2xl mb-3 lg:mb-6 mt-10 lg:mt-20 font-bold">2. Log in to your Binance account</h3>
    <div class="flex justify-center">
        <img class="rounded-md lg:rounded-lg my-5" src="../../../assets/images/blogposts/blogpost-3/image-2.png" alt="">
    </div>
    
    <h3 class="text-lg lg:text-2xl mb-3 lg:mb-6 mt-10 lg:mt-20 font-bold">3. Navigate to your fiat and spot wallet</h3>
    <img class="rounded-md lg:rounded-lg my-5" src="../../../assets/images/blogposts/blogpost-3/image-3.jpeg" alt="">
    
    <h3 class="text-lg lg:text-2xl mb-3 lg:mb-6 mt-10 lg:mt-20 font-bold">4. Click on “Withdraw” next to “ETH”</h3>
    <img class="rounded-md lg:rounded-lg my-5" src="../../../assets/images/blogposts/blogpost-3/image-4.jpeg" alt="">
    
    <h3 class="text-lg lg:text-2xl mb-3 lg:mb-6 mt-10 lg:mt-20 font-bold">5. Send your Ethereum to MetaMask</h3>
    <p class="lg:leading-8 lg:text-lg mt-4 lg:mt-8">
        Next, head back to your exchange. Find your ETH, click on transfer, paste your address, type the amount of ETH you would like to send, and confirm the transfer. It could take 30 minutes, but your ETH will soon be in your MetaMask wallet.
    </p>
    <div class="flex justify-center">
        <img class="rounded-md lg:rounded-lg my-5" src="../../../assets/images/blogposts/blogpost-3/image-5.jpeg" alt="">
    </div>

    <h2 class="text-xl lg:text-4xl mb-5 lg:mb-9 mt-16 lg:mt-36 font-bold">Wait for The Mint</h2>
    <p class="lg:leading-8 lg:text-lg">
        Now you can wait until the 24th November. Engage with the Meta Legends community, read our FAQs on Discord, share some tweets and get ready for launch. Oh, and here are some more sneak peaks, to raise those excitement levels. 
    </p>
    
    <div class="grid grid-cols-2 grid-flow-row auto-rows-max gap-3 lg:gap-14 mt-8 lg:mt-16">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-3/ml-3.png" alt="">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-3/ml-4.png" alt="">
    </div>

    <h2 class="text-xl lg:text-4xl mb-5 lg:mb-9 mt-16 lg:mt-36 font-bold">Minting Day</h2>
    <p class="lg:leading-8 lg:text-lg lg:pb-10 pb-5">
        You have done the hard part. What happens next will be quick and easy. As this is your first mint, be sure to enjoy the experience. You never forget your first.
    </p>
    <ul class="list-inside list-disc lg:text-lg lg:leading-8">
        <li>Go to Meta Legends (using Brave or Chrome).</li>
        <li>Click on Mint.</li>
        <li>Connect wallet.</li>
        <li>Accept the Metamask conditions to pay.</li>
        <li>Take your place at the NFT table.</li>
    </ul>
    <img class="rounded-md lg:rounded-lg my-5" src="../../../assets/images/blogposts/blogpost-3/blog3-website.png" alt="">

    <h2 class="text-xl lg:text-4xl mb-5 lg:mb-9 mt-16 lg:mt-36 font-bold">Where Can I view my Meta Legends ?</h2>
    <p class="lg:leading-8 lg:text-lg lg:pb-10 pb-5">
        Once you have successfully minted a Meta Legends NFT, you’ll want to see it in all its beauty. To do this you’ll have to first wait for reveal, which will be on Monday 13th December, then go to the OpenSea.<br>
        Signing up for OpenSea is free. You can view your NFTS and browse the collections.<br>
        If you want to trade, however, you’ll need to pay a one time “initialization” fee in Ethereum.
    </p>
    <img class="rounded-md lg:rounded-lg my-5" src="../../../assets/images/blogposts/blogpost-3/blog3-opensea.png" alt="">

    <p class="lg:leading-8 lg:text-lg">
        Viewing your NFTs on the OpenSea is very simple. Click on the wallet icon in the top right. Connect your MetaMask wallet using the password you set up (not the 12 word seed phrase). The OpenSea will ask you to confirm. Confirm. Then you click on ‘Profile’ and open the ‘Collected’ tab. And you will see your freshly minted, Meta Legends NFT.
        <br><br>
        Enjoy.
        <br><br>
        And Good Luck.
    </p>

    <div class="grid grid-cols-2 grid-flow-row auto-rows-max gap-3 lg:gap-14 mt-8 lg:mt-16">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-3/ml-5.png" alt="">
        <img class="rounded-lg" src="../../../assets/images/blogposts/blogpost-3/ml-6.png" alt="">
    </div>

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
            index: 3,
            info: blogposts[3],
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
    background-image: url('../../../assets/images/blogposts/blogpost-3/article3-blur.jpg');
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