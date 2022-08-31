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
            <button class="relative mx-1.5 p-1.5 bg-gradient-to-br from-blue to-purple btn-discord">
                <a class="absolute top-0 left-0 w-full h-full" href="https://twitter.com/metalegendsnft" target="_blank"></a>
                <img class="w-8 h-8" src="../../../assets/images/icons/twitter.svg" alt="twitter">
            </button>
            <button class="relative mx-1.5 p-1.5 bg-gradient-to-br from-blue to-purple btn-discord">
                <a class="absolute top-0 left-0 w-full h-full" href="https://www.instagram.com/meta.legends/" target="_blank"></a>
                <img class="w-8 h-8" src="../../../assets/images/icons/instagram.svg" alt="instagram">
            </button>
            <button class="relative mx-1.5 p-1.5 bg-gradient-to-br from-blue to-purple btn-discord">
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
        When Disney and its visual-effects production house Industrial Light & Magic ramped up the fever for Star Wars and decided to make <a class="underline" href="https://mashable.com/video/the-mandalorian-epic-games-unreal-engine-set-landscape" target="_blank">The Mandalorian</a>, it became the first project to use Unreal 4 on such a scale. Audiences were treated to exceptional realism, so-called parallax environments, the illusion of depth within a 2D screen, almost infinite detail and alien backdrops which took the breath away.
        <br><br>
        The excitement coursing through my veins as I write this is palpable, because of what this means for the future of digital worlds and collective gaming on the blockchain. The Mandalorian gave us a glimpse of what a Metaverse could look like. And that reality will be here sooner than you think.
    </p>
    <div class="flex flex-col justify-center items-center my-6 lg:my-8">
        <img class="mb-2 rounded-lg lg:rounded-xl" src="../../../assets/images/blogposts/blogpost-1/image-1.png">
        <div class="text-sm lg:text-base text-center italic">( CREDIT : The Mandalorian – Disney + )</div>
    </div>
    <p class="lg:leading-8 lg:text-lg">
        Sorgan, Arvala-7, Tatooine and many of the planets and backdrops in the Mandalorian were made possible thanks to Unreal 4. The incredible news for the Metaverse is that <a class="underline" href="https://www.unrealengine.com/en-US/" target="_blank">Unreal 5</a> – its successor - is out now. Graphics, speed, and operability are about to get better. You really should be excited. But a word to the wise, that excitement needs to be tempered with a little reality. Each episode of the Mandalorian <a class="underline" href="https://www.washingtonpost.com/arts-entertainment/2019/11/14/mandalorian-is-first-tv-show-that-actually-looks-like-movie-that-might-be-problem/" target="_blank">cost</a> an estimated $15 million to produce. The future isn’t cheap.
        <br><br>
        Furthermore, The Metaverse is interactive, it’s more a video game than a movie or TV show. Fortunately, In <a class="underline" href="https://www.unrealengine.com/" target="_blank">Unreal 5</a>, Mandalorian level graphics can be used in video games. And that means the next generation of Metaverse platforms and games will be able to look that good. Oh yes. But how much will they cost?
    </p>
    <!-- image -->
    <div class="flex flex-col justify-center items-center my-6 lg:my-8">
        <img class="mb-2 rounded-lg lg:rounded-xl" src="../../../assets/images/blogposts/blogpost-1/image-2.png">
        <div class="text-xs text-center lg:text-base italic">( CREDIT : EPIC GAMES – UNREAL: Battles In The Metaverse Could Soon Look Like This )</div>
    </div>
    <p class="lg:leading-8 lg:text-lg">
        At $265 million, Grand Theft Auto V is <a class="underline" href="https://www.thegamer.com/most-expensive-games-ever-made/" target="_blank">the most expensive</a> video game of all time. The action-adventure game-changer is at the top of a roll-call of Triple-A video games which cost hundreds of millions of dollars to produce. Call of Duty Modern Warfare came in at $250 Million, Star Wars: The Old Republic $200 Million, Final Fantasy VII $145 Million and Halo 2 $120 Million.
        <br><br>
        Triple-A titles are the benchmark on which a new Metaverse should be based, the blue print for the next phase of Web 3.0. So, what is involved in making a Triple-A game, and by extension, a Triple-A Metaverse?
    </p>
    <div class="flex flex-col justify-center items-center my-6 lg:my-8">
        <img class="mb-2 rounded-lg lg:rounded-xl" src="../../../assets/images/blogposts/blogpost-1/image-3.png">
        <div class="text-xs text-center lg:text-base italic">( At 265 Million, GTA5 Is the most expensive video game ever created )</div>
    </div>

    <h2 class="text-xl lg:text-4xl mb-5 lg:mb-9 mt-16 lg:mt-36 font-bold">The Scale and Cost Of an Unreal 5 Team To Build A Triple-A Metaverse</h2>
    <p class="lg:leading-8 lg:text-lg">
        First you need a team. This is by no means exhaustive, but to produce a Triple-A Metaverse you’ll need the best in the world. Depending on the size of the project and the time you have to produce it, building a Metaverse could require anywhere between 50 and 400 specialists, in multiple fields. Triple-A games often take as long as four years to reach completion (or 17, for Half-Life 3). A Triple-A Metaverse could need the same, if not longer to create, such are the complexities of the blockchain.
        <br><br>
        This is by no means exhaustive, but you’ll need people for concept creation, game design, art production, programming, story writers, actors, voice actors, advisors, and testers. Then there is pre, post and launch marketing, and, as the Metaverse will be built with NFTs at the forefront, constant updates, alterations, roadmap expansions and programming will all be needed (and paid for) after release. The chain of tasks a production company needs to think about is almost as long as the salaries they’ll have to pay are high.
    </p>

    <h2 class="text-xl lg:text-4xl mb-5 lg:mb-9 mt-16 lg:mt-36 font-bold">Triple-A Metaverse Salaries</h2>
    <p class="lg:leading-8 lg:text-lg">
        The average <a class="underline" href="https://www.talent.com/salary?job=unreal+engine+game+programmer" target="_blank">Unreal developer</a> earns $130.000 per year, <a class="underline" href="https://www.payscale.com/research/US/Job=Senior_UX_Designer/Salary" target="_blank">UX</a> designers $104,000, a <a class="underline" href="https://www.indeed.com/career/c%2B%2B-developer/salaries" target="_blank">C++</a> developer $118,000, and <a class="underline" href="https://www.comparably.com/salaries/salaries-for-video-game-script-writer" target="_blank">script</a> writers can look to earn $65K and upwards. Then you have marketing teams on $60–$80,000 each. As a conservative estimate, building a Metaverse, using Unreal 5, with a team of 100, on an average salary of $100k, spread over two years, would be $20 million in salary expenditure alone.
        <br><br>
        And remember, these are average salaries. This is the blockchain and Unreal 5 is a new technology. Developers, programmers and specialists are not widely available. There is a drought of talent, a <a class="underline" href="https://www.blockchain-council.org/blockchain/demand-gap-for-blockchain-talent-requires-top-rated-education/" target="_blank">shortage</a> of expertise in blockchain, which means those with experience can demand much higher salaries and have their pick of employer. You could safely say, those wishing to build a Metaverse might have to triple their financial outlay just to get enough people through the doors.
    </p>
    <div class="flex flex-col justify-center items-center my-6 lg:my-8">
        <img class="mb-2 rounded-lg lg:rounded-xl" src="../../../assets/images/blogposts/blogpost-1/image-4.png">
        <div class="text-xs text-center lg:text-base italic">( CREDIT : UNREAL 5 – What the Metaverse Could Look Like Using Unreal 5)</div>
    </div>

    <h2 class="text-xl lg:text-4xl mb-5 lg:mb-9 mt-16 lg:mt-36 font-bold">The Competitive Cost of The Metaverse</h2>
    <p class="lg:leading-8 lg:text-lg">
        Salaries, a diminishing pool of talent and the uniqueness of building a Metaverse itself, what other factors influence the cost? Developing a Triple-A Metaverse on Unreal 5 means batting in the big leagues ladies and gentlemen.
        <br><br>
        The competition is Facebook (OK, Meta. Still can’t say it without a smile.) and Ubisoft, Epic Games, Google, Amazon and EA. Companies which can throw <a class="underline" href="https://about.fb.com/news/2021/09/building-the-metaverse-responsibly/" target="_blank">$50 million</a> at a project and not blink. Companies very much focused on leading the Metaverse charge, of being the platform which sets out the roadmap for the next 50, 100, 500 years of technological advancement. Small budgets just aren’t going to make a dent, because there will always be a bigger fish throwing money as a solution.
        <br><br>
        Communities are incredible, perhaps the single biggest upside from the last 24 months of the NFT culture; more varied, engaging, funny, creative and curious than we ever could have imagined. They deserve a Metaverse befitting of their ambition and passion.
    </p>
    <div class="flex flex-col justify-center items-center my-6 lg:my-8">
        <img class="mb-2 rounded-lg lg:rounded-xl" src="../../../assets/images/blogposts/blogpost-1/image-5.png">
        <div class="text-xs text-center lg:text-base italic">( Would you rather have photo realism in your Metaverse? With Unreal 5 you will )</div>
    </div>

    <h2 class="text-xl lg:text-4xl mb-5 lg:mb-9 mt-16 lg:mt-36 font-bold">What Can Unreal 5 Do For The Metaverse?</h2>
    <p class="lg:leading-8 lg:text-lg">
        Unreal 5 is the state of the art game engine on which the Metaverse can be built. There really is nothing quite like it. It gives, to quote, “photo realistic rendering, dynamic physics and effects, lifelike animation and built in tools for advanced character rigging animation and performance capture streaming. It can create believable human and animal characters, massive scale reactive environments and film quality levels of VFX. World building – including real-time landscape and terrain tools, sky cloud and environment lighting, real-time ray tracing and rasterisation, are also included.”  Everything a Metaverse needs.
        <br><br>
        Of course, there is a cheaper alternative, a trade-off between graphics and price. There are other options, engines, and routes which could be taken to build a Metaverse which anyone could pick up and play, one without the immersive experience. But would you want to be in that Metaverse?
        <br><br>
        Even if you did, it would still cost millions. The production and development costs of Fortnite are top secret, but with global servers keeping millions of players secure and a coding team of no-doubt very high calibre talent, the costs are probably into the tens of millions. League Of Legends is not a graphically demanding game and was released over 10 years ago, but even LOL obtained initial funding of $7 million from VC firms Benchmark and FirstMark Capital and a second round of $8 from Benchmark.
        <br><br>
        Besides, as awesome as these games are, would you want to repeat it? Would you want the Metaverse to be built through the lens of 10, 15, 20 years ago, envisioned through the technology which was available then? Or do you want a Metaverse built at the cutting edge? A Metaverse which is mesmerising, enticing and incredibly entertaining, which has high production quality, and has the best developers, designers and story tellers on board? A Metaverse which is unmistakeably connected to the source material? Do you want a Triple-A Metaverse?
        <br><br>
        Just as life, the best things in the Metaverse will be free, but you have to build it first.
        <br>
        In Unreal 5 the technology is available for the Metaverse to transcend the hype. But it will be expensive.
    </p>

    <div class="mt-20 lg:mt-28 w-full relative">
        <div class="absolute left-0 font-bold cursor-pointer lg:text-xl" v-if="blogposts[index - 2]" @click="goToBlogpost(index - 1)">← Previous blogpost</div>
        <div class="absolute right-0 font-bold cursor-pointer lg:text-xl" v-if="blogposts[index]" @click="goToBlogpost(index + 1)">Next blogpost →</div>
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
import { blogposts } from '../../../utils/blogposts.js'
import Countdown from '../../../components/Countdown.vue'

export default {
    data() {
        return {
            index: 1,
            info: blogposts[5],
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
    background-image: url('../../../assets/images/blogposts/blogpost-1/image-5-blur.png');
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