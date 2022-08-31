<template>
<!-- Header section -->
<div class="container lg:min-w-full md:w-auto relative overflow-hidden antialiased">
    <!-- <div class="hidden lg:h-screen lg:w-screen lg:block lg:bg-black relative  z-10">
        <iframe class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" width="1920" height="1080" src="https://player.vimeo.com/video/635048296?h=7b0825ff36"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen ref="iframe"></iframe>
    </div> -->

    <!-- Mobile video -->
    <!-- <div class="h-auto w-full lg:hidden" style="padding:56.25% 0 0 0;position:relative;">
        <iframe src="https://player.vimeo.com/video/635048296?h=7b0825ff36" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="VERSION DEF.m4v"></iframe>
    </div> -->
    <!-- <div class="w-full lg:hidden">
        <img src="../assets/images/background-home.jpeg" alt="">
    </div> -->
    <!-- Mobile menu -->
    <div class="fixed lg:hidden top-0 w-9/12 bg-dark-purple-2 z-50 clip-path-mobile menu-mobile" ref="menuMobile">
        <div class="flex justify-between items-center bg-gradient-to-r from-blue to-purple px-4 py-3">
            <img class="w-24" src="../assets/images/title-logo-black.svg">
            <button class="bg-dark-purple" @click="toggleMenuMobile">
                <img class="m-3 w-4 h-4 transform rotate-45" src="../assets/images/icons/plus.svg" alt="">
            </button>
        </div>
        <div class="flex flex-col justify-between font-bronova text-white text-xl">
            <button class="relative mx-4 px-2 py-2 flex items-center bg-gradient-to-r from-blue to-purple btn-discord mt-3">
                    <a class="absolute top-0 left-0 w-full h-full" href="https://discord.gg/meta-legends" target="_blank"></a>
                    <img class=" w-8 h-8 mr-4" src="../assets/images/icons/discord.svg" alt="discord">
                    <p class="font-bronova pt-1 font-bold text-white text-base">JOIN OUR DISCORD</p>
            </button>
            <div class="pt-4 pb-3 px-4 border-b-2 border-purple border-opacity-40" @click="onMenuClick('design')">DESIGNS</div>
            <div class="pt-4 pb-3 px-4 border-b-2 border-purple border-opacity-40" @click="onMenuClick('metaverse')">METAVERSE</div>
            <div class="pt-4 pb-3 px-4 border-b-2 border-purple border-opacity-40" @click="onMenuClick('roadmap')">ROADMAP</div>
            <div class="pt-4 pb-3 px-4 border-b-2 border-purple border-opacity-40" @click="goToEasterEgg(1)">EASTER EGGS</div>
            <div class="pt-4 pb-3 px-4 border-b-2 border-purple border-opacity-40" @click="onMenuClick('faq')">FAQ</div>
            <a href="https://medium.com/@metalegends"><div class="pt-4 pb-3 px-4 border-b-2 border-purple border-opacity-40">BLOG</div></a>
            <a :href="pdfurl" target="_blank"><div class="py-4 px-4 border-b-2 border-purple border-opacity-40">LITE PAPER META LEGENDS</div></a>
            <a :href="pdfMetaUrl" target="_blank"><div class="py-4 px-4 border-b-2 border-purple border-opacity-40">LITE PAPER META LIFE</div></a>
            
            <div class="flex px-4 mt-3">
                <button class="relative p-1.5 w-1/2 border-2 border-purple  btn-discord flex mr-1.5 items-center">
                    <a class="absolute top-0 left-0 w-full h-full" href="https://twitter.com/metalegendsnft" target="_blank"></a>
                    <img class="w-6 h-6 mr-2" src="../assets/images/icons/twitter.svg" alt="twitter">
                    <p class="font-bronova font-bold text-white text-xs text-left">
                        JOIN OUR<br>TWITTER
                    </p>
                </button>
                <button class="relative p-1.5 w-1/2 border-2 border-purple btn-discord flex ml-1.5 items-center">
                    <a class="absolute top-0 left-0 w-full h-full" href="https://www.instagram.com/meta.legends/" target="_blank"></a>
                    <img class="w-6 h-6 mr-2" src="../assets/images/icons/instagram.svg" alt="instagram">
                    <p class="font-bronova font-bold text-white text-xs text-left">
                        JOIN OUR<br>INSTAGRAM
                    </p>
                </button>
            </div>
            <div class="px-4 mb-6">
                <button class="relative px-2 py-2 w-full flex items-center border-2 border-purple btn-discord mt-3">
                    <a class="absolute top-0 left-0 w-full h-full" href="https://opensea.io/collection/meta-legends" target="_blank"></a>
                    <img class=" w-8 h-8 mr-4" src="../assets/images/icons/opensea.svg" alt="opensea">
                    <p class="font-bronova font-bold text-white text-base">OPEN SEA COLLECTION</p>
                </button>
            </div>
        </div>
    </div>
</div>
<!-- <div class="bg-dark-purple lg:hidden px-5 pt-5 flex flex-col justify-center">
    <button class="relative mx-6 px-2 py-2 flex justify-center items-center bg-gradient-to-r from-blue to-purple btn-discord rounded-lg mb-5">
        <a class="absolute top-0 left-0 w-full h-full" href="https://discord.gg/meta-legends" target="_blank"></a>
        <img class=" w-8 h-8 mr-4" src="../assets/images/icons/discord.svg" alt="discord">
        <p class="font-bronova pt-1 font-bold text-white text-base">JOIN OUR DISCORD</p>
    </button>
</div> -->

<!-- <div class="bg-dark-purple pt-8 lg:pt-12 lg:pb-10"> -->
    <!-- <button class="mx-auto lg:mt-10 relative px-8 py-2 lg:py-4 flex items-center bg-gradient-to-r from-blue to-purple btn-discord rounded-lg">
            <a class="absolute top-0 left-0 w-full h-full" href="https://opensea.io/collection/meta-legends" target="_blank"></a>
            <img class="w-8 h-8 lg:w-16 lg:h-16 mr-5 lg:mr-12" src="../assets/images/icons/opensea.svg" alt="discord">
            <p class="font-bronova font-bold text-white text-base lg:text-5xl lg:pt-2">VIEW ON OPENSEA</p>
    </button> -->
<!-- </div> -->

<div>
    <!-- Start menu -->
    <div 
        class="bg-darkest-purple relative px-6 w-full lg:h-auto lg:max-w-7xl lg:absolute lg:left-2/4 lg:transform lg:-translate-x-2/4 lg:pb-2 lg:px-20 clip-path-menu z-30" 
        ref="mainContainer"
    >
        <nav class="h-full py-4 lg:py-5 flex justify-between items-center">
            <img class="h-8 lg:hidden" src="../assets/images/head-logo.svg" alt="">
            <div class="flex flex-col items-center">
                <img class="h-8 lg:h-12" src="../assets/images/title-logo.svg" alt="Title logo">
                <span class="text-pink-purple font-akira text-xs lg:text-base pt-1">SEASON 1</span>
            </div>
            <div class="lg:hidden cursor-pointer" @click="toggleMenuMobile">
                <img class="h-6" src="../assets/images/burger-icon.svg" alt="">
            </div>
            <ul class="hidden lg:flex lg:justify-between flex-grow px-14 font-bronova font-bold text-white text-base">
                <li class="cursor-pointer" @click="onMenuClick('design')">DESIGNS</li>
                <li class="cursor-pointer" @click="onMenuClick('metaverse')">METAVERSE</li>
                <li class="cursor-pointer" @click="onMenuClick('roadmap')">ROADMAP</li>
                <!-- <li class="cursor-pointer" @click="goToEasterEgg(1)" >EASTER EGGS</li>
                <li class="cursor-pointer" @click="onMenuClick('faq')">FAQ</li> -->
                <li class="cursor-pointer gap-2 flex items-center" @click="unfoldedSubmenu">
                    <span>INFORMATION</span>
                    <img class="mb-1 w-4 h-4 transform rotate-90" src="../assets/images/icons/submenu.svg" ref="submenuIcon">
                </li>
            </ul>
            <div class="hidden lg:flex">
                <button class="relative mx-1.5 p-1.5 bg-gradient-to-br from-blue to-purple btn-discord rounded-lg">
                    <a class="absolute top-0 left-0 w-full h-full" href="https://twitter.com/metalegendsnft" target="_blank"></a>
                    <img class="w-8 h-8" src="../assets/images/icons/twitter.svg" alt="twitter">
                </button>
                <button class="relative mx-1.5 p-1.5 bg-gradient-to-br from-blue to-purple btn-discord rounded-lg">
                    <a class="absolute top-0 left-0 w-full h-full" href="https://www.instagram.com/meta.legends/" target="_blank"></a>
                    <img class="w-8 h-8" src="../assets/images/icons/instagram.svg" alt="instagram">
                </button>
                <button class="relative mx-1.5 p-1.5 bg-gradient-to-br from-blue to-purple btn-discord rounded-lg">
                    <a class="absolute top-0 left-0 w-full h-full" href="https://opensea.io/collection/meta-legends" target="_blank"></a>
                    <img class="w-8 h-8" src="../assets/images/icons/opensea.svg" alt="instagram">
                </button>
                <button class="relative mx-1.5 px-2  flex items-center bg-gradient-to-br from-blue to-purple btn-discord rounded-lg">
                    <a class="absolute top-0 left-0 w-full h-full" href="https://discord.gg/meta-legends" target="_blank"></a>
                    <img class=" w-8 h-8 mr-4" src="../assets/images/icons/discord.svg" alt="discord">
                    <p class="font-bronova pt-1 font-bold text-white">DISCORD</p>
                </button>
            </div>
        </nav>
    </div>
    <div 
        class="hidden w-2/3 2xl:w-1/2 lg:block absolute bg-dark-purple-2 left-1/2 transform -translate-x-1/2 z-20 text-white font-bronova font-bold clip-path-menu"
        ref="submenu"
    >
        <div class="flex justify-center items-center py-2 px-5">
            <a href="https://medium.com/@metalegends"><div class="px-10 pt-4 pb-3 submenu-item cursor-pointer relative">BLOG</div></a>
            <div class="px-10 pt-4 pb-3 submenu-item cursor-pointer relative" @click="goToEasterEgg(1)">EASTER EGGS</div>
            <div class="px-10 pt-4 pb-3 submenu-item cursor-pointer relative" @click="onMenuClick('faq')">FAQ</div>
            <a :href="pdfurl" target="_blank"><div class="px-10 pt-4 pb-3 cursor-pointer submenu-item text-center relative">
                <span class="font-bold text-xs">LITE PAPER</span><br>META LEGENDS
            </div></a>
            <a :href="pdfMetaUrl" target="_blank"><div class="px-10 pt-4 pb-3 cursor-pointer text-center">
                <span class="font-bold text-xs">LITE PAPER</span><br>META LIFE
            </div></a>
        </div>
    </div>
    <!-- End menu -->
</div>

<div class="container px-6 pt-11 relative lg:min-w-full md:w-auto bg-dark-purple antialiased main-container">
    <img class="absolute top-0 left-0 lg:w-auto pointer-events-none z-20" src="../assets/images/bg-image-1.png">
    
    <div class="container mx-auto pt-10 lg:pt-64 pb-5 lg:pb-8 2xl:px-36 2xl:min-w-full">
        
        <!-- Text image block 1 -->
        <div class="grid grid-rows-3 lg:items-center justify-items-center pb-10 lg:grid-rows-1 lg:grid-cols-2 gap-x-20 lg:pb-20 relative" ref="childTest">
            <div class="text-white order-last row-span-2 text-center lg:text-left lg:order-1">
                <h1 class="font-bronova font-bold text-xl mt-7 lg:mt-0 mb-7 lg:text-4xl 2xl:text-5xl lg:mb-20 text-shadow-white">
                    <span class="block bg-clip-text text-transparent bg-gradient-to-r from-purple to-pink text-shadow text-gradient">12345 UNIQUE META LEGENDS</span>
                    <span>TO SAVE HUMANITY</span>
                </h1>
                <p class="font-bronova text-sm lg:text-lg 2xl:text-xl">
                    Meta Legends represent a collection of <span class="font-bold">12345 legends</span> categorized by level of rarity and generated with hundreds of elements.
                    <br>
                    The Legends are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
                    <br><br>
                    Our <span class="font-bold">goal</span> is to create a <span class="font-bold underline">complete ecosystem</span>.<br> 
                    First, we are developing an <span class="font-bold">application <a href="https://www.meta-connect.io/app" target="_blank">( <span class="text-twitter-blue">Meta-Connect</span> )</a></span>  that will connect all of our community members. You will be able to <span class="font-bold">locate each other on the map, store your NFTs & get an estimation of their value.</span><br>
                    Then, we are going to develop <span class="font-bold">our own Metaverse <a href="https://www.meta-life.io/metaverse" target="_blank">( <span class="text-twitter-blue">Meta-Life</span> )</a></span>.<br>
                    Within this Metaverse, you will be able to <span class="font-bold">stack cryptos, own property, items,</span> and explore the Meta Legends Universe.<br> 
                    <br>
                    <span class="font-bold">Our ambition with Meta Legend is to <span class="underline">create an entertainment licence</span>.</span>   

                </p>
            </div>
            <div class="clip-path h-56 w-56 lg:h-auto lg:w-auto lg:order-2">
                <img src="../assets/images/celestial.png" alt="">
            </div>
            <!-- <img class="w-16 lg:w-20 absolute left-0 -bottom-14 cursor-pointer opacity-50" src="../assets/images/crown.svg" @click="pickCrown($event, 1)"> -->
        </div>
        <!-- <button class="mx-auto relative px-8 py-2 lg:py-4 flex items-center bg-gradient-to-r from-blue to-purple btn-discord rounded-lg">
            <a class="absolute top-0 left-0 w-full h-full" :href="pdfurl" target="_blank"></a>
            <img class="w-8 h-8 lg:w-16 lg:h-16 mr-5 lg:mr-12" src="../assets/images/head-logo.svg" alt="discord">
            <p class="font-bronova font-bold text-white text-base lg:text-3xl">LITE PAPER META LEGENDS</p>
        </button> -->

        <button class="mx-auto lg:mt-10 relative px-8 py-2 lg:py-4 flex items-center bg-opensea-blue btn-twitter rounded-lg">
            <a class="absolute top-0 left-0 w-full h-full" href="https://opensea.io/collection/meta-legends" target="_blank"></a>
            <p class="font-bronova text-white text-xs lg:text-4xl lg:pt-2"><span class="font-bold">SOLD OUT</span> - BUY ON <span class="font-bold">OPENSEA</span></p>
            <img class="w-8 h-8 lg:w-14 lg:h-14 ml-5 lg:ml-8" src="../assets/images/icons/opensea.svg" alt="discord">
        </button>
    </div>
</div>

<!-- <div class="bg-dark-purple text-white font-bronova pt-10 lg:pt-20">
    <h1 class="text-center font-bronova font-bold text-xl lg:text-4xl 2xl:text-5xl py-6 lg:py-8">
        <span class="block bg-clip-text text-transparent bg-gradient-to-r from-purple to-pink text-shadow text-gradient">MINT INFORMATION</span>
    </h1> -->
    <!-- Etape 1 -->
    <!-- <div>
        <div class="flex flex-col lg:flex-row items-center justify-center lg:py-10">
            <div class="w-14 h-14 lg:w-20 lg:h-20 mb-5 lg:mb-0 bg-date-image flex items-center justify-center">
                <span class="text-2xl lg:text-5xl font-f56 text-purple">1</span>
            </div>
            <div class="lg:ml-5 text-center lg:text-left">
                <div>Saturday, December 11, 2021, at 9pm UTC</div>
                <div class="font-bold text-xl lg:text-4xl">Public Sale <span class="font-normal">(5400 NFT)</span></div>
            </div>
        </div>
        <p class="lg:text-xl text-center px-3 lg:px-0 mt-5 lg:mt-0">
            On mint day, you will have several price options for mint : The perks will be unlocked at the prices paid.
        </p>

        <MintSlider />
        
        <div class="flex justify-center mt-5 lg:mt-10">
            <img src="../assets/images/land.png" alt="">
        </div> -->

        <!-- <div class="flex flex-col items-center lg:pb-20 bg-image-bonus mx-5 lg:mx-0">
            <div 
                class="w-full lg:w-1/2 mt-10 lg:mt-20 mb-2 lg:mb-4 text-center text-2xl lg:text-5xl font-bold block bg-clip-text text-transparent bg-gradient-to-r from-purple to-pink text-shadow text-gradient"
            >
                BONUS
            </div>
            <div class="w-full lg:w-1/2 p-4 lg:p-8 bg-blur rounded-md lg:rounded-2xl">
                <p class="text-sm text-center lg:text-base font-bold mb-3">The top rewards unlock all the bottom ones</p>
                <p class="text-sm text-center lg:text-base pb-4 underline">If you mint first :</p>
                <div class="relative">
                    <div class="h-full absolute grid grid-rows-5 top-6 lg:top-4 -left-5 lg:-left-12 w-7 lg:w-10 rounded-t-full rounded-b-full overflow-hidden">
                        <div class="w-full relative bg-gradient-to-b from-purple-dutch-dark to-purple-dutch-light arrow-dutch flex items-center justify-center">
                            <img class="h-4" src="../assets/images/icons/open.svg">
                        </div>
                        <div class="w-full relative bg-gradient-to-b from-purple-dutch-dark to-purple-dutch-light arrow-dutch flex items-center justify-center">
                            <img class="h-4" src="../assets/images/icons/lock.svg">
                        </div>
                        <div class="w-full relative bg-gradient-to-b from-purple-dutch-dark to-purple-dutch-light arrow-dutch flex items-center justify-center">
                            <img class="h-4" src="../assets/images/icons/lock.svg">
                        </div>
                        <div class="w-full relative bg-gradient-to-b from-purple-dutch-dark to-purple-dutch-light arrow-dutch flex items-center justify-center">
                            <img class="h-4" src="../assets/images/icons/lock.svg">
                        </div>
                        <div class="w-full relative bg-gradient-to-b from-pink-dutch-dark to-pink-dutch-light flex items-center justify-center">
                            <img class="h-4" src="../assets/images/icons/lock.svg">
                        </div>
                    </div>

                    <div class="flex flex-col border-b-2 border-opacity-40 border-purple py-5 pl-5 lg:pl-0">
                        <span class="font-bold text-center 2xl:text-xl lg:pb-2">0 - 1080</span>
                        <span class="text-sm text-center lg:text-base 2xl:text-xl"><span class="underline">3D figure</span> + Signed Paintings on brushed aluminum plate + Tshirt legends + Cap + Physical Legend Token</span>
                    </div>
                    <div class="flex flex-col border-b-2 border-opacity-40 border-purple py-5 pl-5 lg:pl-0">
                        <span class="font-bold text-center 2xl:text-xl lg:pb-2">1080 - 2160</span>
                        <span class="text-sm text-center lg:text-base 2xl:text-xl"><span class="underline">Signed Paintings on brushed aluminum plate</span> + Tshirt legends + Cap + Physical Legend Token</span>
                    </div>
                    <div class="flex flex-col border-b-2 border-opacity-40 border-purple py-5 pl-5 lg:pl-0">
                        <span class="font-bold text-center 2xl:text-xl lg:pb-2">2160 - 3240</span>
                        <span class="text-sm text-center lg:text-base 2xl:text-xl"><span class="underline">Tshirt legends</span> + Cap + Physical Legend Token</span>
                    </div>
                    <div class="flex flex-col border-b-2 border-opacity-40 border-purple py-5 pl-5 lg:pl-0">
                        <span class="font-bold text-center 2xl:text-xl lg:pb-2">3240 - 4320</span>
                        <span class="text-sm text-center lg:text-base 2xl:text-xl"><span class="underline">Cap</span> + Physical Legend Token</span>
                    </div>
                    <div class="flex flex-col py-5 pl-5 lg:pl-0">
                        <span class="font-bold text-center 2xl:text-xl lg:pb-2">4320 - 5400</span>
                        <span class="text-sm text-center lg:text-base 2xl:text-xl"><span class="underline">Physical Legend Token</span></span>
                    </div>
                </div>
            </div>
        </div> -->
    <!-- </div> -->

    <!-- Etape 2 -->
    <!-- <div class="flex flex-col lg:flex-row py-10 lg:py-24 items-center lg:justify-center">
        <div class="w-14 h-14 lg:w-20 lg:h-20 mb-5 lg:mb-0 bg-date-image flex items-center justify-center">
            <span class="text-2xl lg:text-5xl font-f56 text-purple">2</span>
        </div>
        <div class="lg:ml-10 text-center lg:text-left">
            <div class="">Sunday, December 12, 2021, at 9pm UTC (possibility of mint within 24h)</div>
            <div class="font-bold text-xl lg:text-4xl">WL : 1 000 NFT price 0.3 ETH</div>
        </div>
    </div> -->

    <!-- Etape 3 -->
    <!-- <div class="flex flex-col lg:flex-row lg:pt-20 lg:pb-28 items-center lg:justify-center">
        <div class="w-14 h-14 lg:w-20 lg:h-20 mb-5 lg:mb-0 bg-date-image flex items-center justify-center">
            <span class="text-2xl lg:text-5xl font-f56 text-purple">3</span>
        </div>
        <div class="lg:ml-10 text-center lg:text-left">
            <div>Wednesday, December 15, 2021</div>
            <div class="font-bold text-xl lg:text-4xl">Reveal</div>
        </div>
    </div> -->
<!-- </div> -->

<!-- <div class="container lg:min-w-full bg-dark-purple flex flex-col lg:pb-10 py-5 lg:pt-0">
    <div class="lg:flex keynote-video">
        <iframe class="h-full lg:h-auto w-full" :src="keynoteLinks[currentLanguage]" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div 
        class="text-white self-center lg:text-3xl pt-2 lg:pt-5 pb-1 lg:pb-3 px-5 lg:px-8 mt-2 lg:mt-5 font-bronova bg-gradient-to-r from-blue to-purple btn-discord cursor-pointer rounded-lg"
        @click="currentLanguage = currentLanguage === 0 ? 1 : 0">
        <span v-if="currentLanguage == 0">Watch the french version</span>
        <span v-else>Watch the english version</span>
    </div>
</div> -->

<div class="container px-6 pt-11 relative lg:min-w-full md:w-auto bg-dark-purple lg:pt-32 pb-10 lg:pb-20 overflow-hidden antialiased main-container" ref="designsAnchor">
    <img class="w-16 lg:w-20 absolute top-0 left-0 cursor-pointer opacity-50 z-40" src="../assets/images/crown.svg" @click="pickCrown($event, 2)">
    <div class="container mx-auto 2xl:px-36 2xl:min-w-full">
        <!-- Designs block -->
        <div class="flex flex-col items-center lg:flex-row lg:justify-between text-white font-bronova relative">
            <!-- Slider legends menu mobile -->
            <!-- <div class="w-screen pl-16 h-20 mb-11 flex border relative lg:hidden">
                <div class="absolute w-full h-full bottom-0 left-0 right-0 bg-gradient-to-l from-pink-2 to-purple-2 z-0"></div>
                <div 
                    class="h-full flex items-center w-16 bg-dark-purple-2 absolute left-0  z-20"
                    :class="{'opacity-0': currentLegend + 1 === 2, 'pointer-events-none': currentLegend + 1 === 2}"
                >
                    <Arrow class="h-1/2 arrow-left" @click="slideTo(1)" />
                </div>
                <div class="flex mb-10 items-baseline absolute cursor-pointer" ref="sliderMobile">
                    <div 
                        v-for="(symbol, index) in symbols"
                        :key="`symbol-${index}`" 
                        class="px-4 w-32 text-sm z-10 flex flex-col items-center"
                        @click="onSelectorClick(index)"
                        :id="`slider-item-${index}`"
                        :class="{'slider-preselected': index === 0}"
                    >
                        <img 
                            class="mb-1.5 w-10 h-10" 
                            :src="symbol.symbol"
                        >
                        <div class="uppercase">{{ symbol.name }}</div>
                    </div>
                </div>
                <div class="h-full flex justify-end items-center w-16 bg-dark-purple-2 absolute right-0 z-20">
                    <Arrow class="h-1/2" @click="slideTo(-1)"/>
                </div>
            </div> -->
            <!-- Version 2 -->
            <div class="w-screen mb-8 lg:hidden flex items-center justify-between relative">
                <div class="absolute w-full h-1/2 bottom-0 left-0 right-0 bg-gradient-to-l from-pink-2 to-purple-2 z-0"></div>
                <Arrow 
                    class="w-12 h-12 self-end mb-4 ml-2 arrow-left z-10 cursor-pointer" 
                    :class="{'opacity-0': currentLegend === 0, 'pointer-events-none': currentLegend === 0}" 
                    @click="onArrowClick(-1)"
                />
                <div class="flex flex-col items-center justify-center mb-3 z-10" ref="sliderMobileLegend">
                    <div class="border w-28 h-28 p-5 mb-3 rounded-full bg-dark-purple">
                        <img :src="legends[currentLegend].symbol" alt="" srcset="">
                    </div>
                    <div class="text-lg font-bold uppercase">{{ legends[currentLegend].name }}</div>
                </div>
                <Arrow 
                    class="w-12 h-12 self-end mb-4 mr-2 z-10 cursor-pointer" 
                    :class="{'opacity-0': currentLegend === 6, 'pointer-events-none': currentLegend === 6}" 
                    @click="onArrowClick(1)" 
                />
            </div>
            <!-- ================= -->
            <!-- <div class="w-screen mb-11 lg:hidden flex items-center justify-between relative">
                <div class="absolute w-full h-1/2 bottom-0 left-0 right-0 bg-gradient-to-l from-pink-2 to-purple-2 z-0"></div>
                <Arrow 
                    class="w-12 h-12 self-end mb-2 ml-2 arrow-left z-10 cursor-pointer" 
                    :class="{'opacity-0': currentLegend === 0, 'pointer-events-none': currentLegend === 0}" 
                    @click="onArrowClick(-1)"
                />
                <div class="flex w-7/12 justify-between" ref="sliderMobileLegend">
                    <div class="flex flex-col items-center justify-center mb-3 z-10">
                        <div class="border w-20 h-20 p-4 mb-3 rounded-full bg-dark-purple">
                            <img :src="legends[currentLegend].symbol" alt="" srcset="">
                        </div>
                        <div class="text-base font-bold uppercase">{{ legends[currentLegend].name }}</div>
                    </div>
                    <div class="flex flex-col items-center justify-center mb-3 z-10">
                        <div class="border w-20 h-20 p-4 mb-3 rounded-full bg-dark-purple">
                            <img :src="legends[currentLegend + 1].symbol" alt="" srcset="">
                        </div>
                        <div class="text-base font-bold uppercase">{{ legends[currentLegend + 1].name }}</div>
                    </div>
                </div>
                <Arrow 
                    class="w-12 h-12 self-end mb-2 mr-2 z-10 cursor-pointer" 
                    :class="{'opacity-0': currentLegend + 1 === 6, 'pointer-events-none': currentLegend + 1 === 6}" 
                    @click="onArrowClick(1)" 
                />
            </div> -->
            <div class="grid grid-rows-3 grid-cols-4 gap-4 mb-8 lg:mb-0 lg:grid-cols-3 lg:grid-rows-4 lg:z-20 interactive-video">
                <!-- video or GIF here -->
                <LegendsVideo />

                <div class="col-span-1 lg:w-32 lg:h-32 row-span-1 p-1.5 lg:p-3.5 border-gradient cursor-pointer" :class="{'border-gradient-selected': currentVersion === 1}" @click="onVersionClicked(1)">
                    <img :src="legends[currentLegend].avatars[0]" alt="">
                </div>
                <div class="col-span-1 lg:w-32 lg:h-32  row-span-1 p-1.5 lg:p-3.5 border-gradient cursor-pointer" :class="{'border-gradient-selected': currentVersion === 2}" @click="onVersionClicked(2)">
                    <img :src="legends[currentLegend].avatars[1]" alt="">
                </div>
                <div class="col-span-1 lg:w-32 lg:h-32  row-span-1 p-1.5 lg:p-3.5 border-gradient cursor-pointer" :class="{'border-gradient-selected': currentVersion === 3}" @click="onVersionClicked(3)">
                    <img :src="legends[currentLegend].avatars[2]" alt="">
                </div>
            </div>
            <div class="lg:w-7/12 z-10 relative">
                <div class="hidden lg:flex lg:justify-between lg:relative mb-20">
                    <DesktopLegendsSelector 
                        v-for="(legend, index) in legends" 
                        :key="`legend-${index}`" 
                        :name="legend.name"
                        :filename="legend.filename"
                        :symbol="legend.symbol"
                        :symbolColor="legend.symbolColor"
                        :index="index" 
                    />
                    <div class="absolute bottom-2 opacity-50 -left-32  bg-white h-px w-screen"></div>
                </div>
                <div class="flex justify-between items-center mb-6 lg:mb-10">
                    <h1 class="text-3xl flex-grow lg:flex-none lg:text-6xl font-bold" ref="legendName">{{ legends[currentLegend].name }}</h1>
                    <div class="flex items-center">
                        <span class="text-xl mr-1 lg:text-4xl lg:mr-2.5 text-pink font-bold" ref="legendCopies" v-html="legends[currentLegend].copies"></span>
                        <span class="text-xs lg:text-sm text-pink" ref="legendCopiesLabel">Units</span>
                    </div>
                </div>
                <div class="mb-10 lg:mb-28 text-sm text-left lg:text-base " ref="legendDescription" v-html="legends[currentLegend].description"></div>
                <div class="flex justify-center lg:absolute lg:bottom-0">
                    <a href="https://discord.gg/meta-legends" target="_blank">
                        <div class="btn-discord cursor-pointer bg-gradient-to-r from-blue to-purple text-xs py-2 px-2.5 lg:py-3 lg:px-5 flex items-center mr-3.5 rounded-lg">
                            <img class="h-6 w-6 lg:h-10 lg:w-10 mr-1.5 lg:mr-4" src="../assets/images/icons/discord.svg" alt="">
                            <span>JOIN US <br>ON DISCORD</span>
                        </div>
                    </a>
                    <a href="https://twitter.com/metalegendsnft" target="_blank">
                        <div class="btn-twitter cursor-pointer bg-twitter-blue text-xs py-2 px-2.5 lg:py-3 lg:px-5 flex items-center rounded-lg">
                            <img class="h-6 w-6 lg:h-10 lg:w-10 mr-1.5 lg:mr-4" src="../assets/images/icons/twitter.svg" alt="">
                            <span>JOIN US <br>ON TWITTER</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="flex flex-col items-center justify-center pt-14 lg:pt-44 relative z-30">
        <h1 class="font-bronova font-bold text-xl lg:text-4xl 2xl:text-5xl lg:mb-4">
            <span class="block bg-clip-text text-transparent bg-gradient-to-r from-purple to-pink text-shadow text-gradient">
                Meta Legends keynote
            </span>
        </h1>
        <iframe class="keynote-youtube" src="https://www.youtube.com/embed/_IlIDbGZ9zY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div> -->
</div>


    
<div class="lg:pt-20 lg:pb-10 bg-dark-purple font-bronova text-white" ref="metaverse">
    <img src="../assets/images/metaverse-section.png" alt="">
    <p class="px-2 lg:px-36 font-bronova text-center lg:text-left text-sm lg:text-lg 2xl:text-xl">
        <span class="font-bold">The purpose of Meta Legends is to <span class="underline">create our own Metaverse :</span> <a href="https://www.meta-life.io/metaverse" target="_blank"><span class="text-twitter-blue">META LIFE</span></a>.</span>
        <br><br>
        You will be the <span class="font-bold">instigators</span> of this new world thanks to a <span class="font-bold">future DAO.</span>
        <br><br>
        You will be a <span class="font-bold">member of the community</span>, and will decide about <span class="font-bold">the future of META LIFE.</span>
        <br><br>
        You will be able to <span class="font-bold">incarnate your own Legend in this Metaverse</span> where the possibilities will be infinite similarly to the gaming world (FPS games, competitions, Spatial races, Easter eggs) as well as events like concerts, festivals etc.
        <br><br>
        You will also have the possibility to <span class="font-bold">generate income</span> in this Metaverse thanks to the <span class="font-bold">Play to Earn technology.</span>
        <br><br>
        You will be the <span class="font-bold">owner of your own Land, house, vehicles, and several other incredible assets !</span><br>We are also working on a proprietary system where a land will have a real value (we are very well aware and sensitive about supply and ownership problems in virtual worlds, and definitely aim to solve this).
        <br><br>
        Discover all the possibilities that Meta Life will propose by clicking there.
    </p>
    <!-- <h1 class="text-center text-2xl lg:text-4xl font-bold lg:mb-5 mb-2 mt-10 lg:mt-20">Trailer video</h1>
    <div class="lg:flex keynote-video">
        <iframe class="h-full lg:h-auto w-full" src="https://player.vimeo.com/video/649166035?h=c3df0b9282" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="flex flex-col gap-8 lg:gap-0 lg:flex-row mt-10 lg:justify-evenly">
        <button class="mx-10 lg:mx-0 relative px-8 py-4 flex items-center bg-gradient-to-r from-blue to-purple btn-discord rounded-lg">
            <a class="absolute top-0 left-0 w-full h-full" href="https://www.meta-life.io/metaverse" target="_blank"></a>
            <img class="w-10 h-10 lg:w-16 lg:h-16 mr-5" src="../assets/images/icons/metalife.svg" alt="discord">
            <p class="font-bronova font-bold text-white text-sm lg:text-3xl">DISCOVER META-LIFE</p>
        </button>
        <button class="mx-10 lg:mx-0 relative px-8 py-4 flex justify-center items-center bg-gradient-to-r from-blue to-purple btn-discord rounded-lg">
            <a class="absolute top-0 left-0 w-full h-full" :href="pdfMetaUrl" target="_blank"></a>
            <p class="font-bronova font-bold text-white text-base lg:text-3xl">LITE PAPER META-LIFE</p>
        </button>
    </div> -->

    <button class="mx-auto mt-10 lg:mt-20 relative px-8 py-2 lg:py-4 flex items-center bg-purple btn-discord rounded-lg">
        <a class="absolute top-0 left-0 w-full h-full" href="https://www.meta-life.io/metaverse" target="_blank"></a>
        <p class="font-bronova text-white text-base lg:text-4xl lg:pt-2">DISCOVER <span class="font-bold">META LIFE</span></p>
        <img class="w-8 h-8 lg:w-14 lg:h-14 ml-5 lg:ml-8" src="../assets/images/icons/metalife.svg" alt="metalife">
    </button>
</div>

<div class="container bg-dark-purple lg:min-w-full md:w-auto font-bronova pt-10 lg:pt-0 pb-20 lg:pb-52">
    <div class="text-center font-bronova py-5 lg:py-16">
        <div class="bg-clip-text text-transparent bg-gradient-to-r from-pink to-darkest-purple text-2xl lg:text-3xl">
            KEY
        </div>
        <div class="bg-clip-text text-transparent bg-gradient-to-r from-pink to-darkest-purple text-5xl lg:text-7xl font-bold">
            FEATURES
        </div>
    </div>
    <div class="text-white flex flex-col lg:flex-row lg:justify-center">
        <div 
            class="bg-gradient-to-t from-purple to-darkest-purple text-center px-5 lg:px-10 pt-5 lg:pt-10 pb-32 lg:pb-60 mx-10 lg:mx-3 mb-28 lg:mb-0 lg:w-1/4 relative"
        >
            <h3 class="font-bold text-xl lg:text-3xl mb-5 lg:mb-14">Playable avatar in multiple metaverses.</h3>
            <div class="lg:text-xl">
                Use your NFT to explore other metaverses.
            </div>
            <img class="absolute w-48 h-48 lg:w-80 lg:h-80 -bottom-20 lg:-bottom-32 left-1/2 transform -translate-x-1/2" src="../assets/images/CircleA.png">
        </div>
        <div 
            class="bg-gradient-to-t from-purple to-darkest-purple text-center px-5 lg:px-10 pt-5 lg:pt-10 pb-32 lg:pb-0 mx-10 lg:mx-3 lg:w-1/4 relative"
        >
            <h3 class="font-bold text-xl lg:text-3xl mb-5 lg:mb-14">Full commercial rights.</h3>
            <div class="lg:text-xl">
                You'll own all commercial rights of your Meta-Legends.
            </div>
            <img class="absolute w-48 h-48 lg:w-80 lg:h-80 -bottom-20 lg:-bottom-32 left-1/2 transform -translate-x-1/2" src="../assets/images/CircleB.png">
        </div>
    </div>

    <div class="mt-32 lg:mt-40 lg:pt-20 text-white">
        <div class="text-center">
            <div class="bg-clip-text text-transparent bg-gradient-to-r from-pink to-darkest-purple font-bold text-3xl lg:text-5xl lg:pb-5">Tokenomics.</div>
            <div class="lg:text-xl">Stake your NFT to earn tokens (Incoming)</div>
        </div>
        <!-- Desktop Version -->
        <div class="hidden lg:grid custom-grid lg:mx-20 lg:px-10 lg:pb-10 lg:mt-36 bg-gradient-to-t from-purple-2 to-darkest-purple lg:h-80">
            <div class="h-full relative">
                <img class="h-full lg:h-auto lg:absolute lg:bottom-0 token-img" src="../assets/images/Circle1.png">
            </div>
            <div class="h-full relative lg:px-5 flex justify-center">
                <img class="h-full lg:h-auto" src="../assets/images/arrows-token.svg">
            </div>
            <div class="h-full relative">
                <img class="h-full lg:h-auto lg:absolute lg:bottom-0 token-img" src="../assets/images/Circle2.png">
            </div>
            <div class="h-full relative lg:px-5 flex justify-center">
                <img class="h-full lg:h-auto" src="../assets/images/arrows-token.svg">
            </div>
            <div class="h-full relative">
                <img class="h-full lg:h-auto lg:absolute lg:bottom-0 token-img" src="../assets/images/Circle3.png">
            </div>
            <div class="h-full relative lg:px-5 flex justify-center">
                <img class="h-full lg:h-auto" src="../assets/images/arrows-token.svg">
            </div>
            <div class="h-full relative">
                <img class="h-full lg:h-auto lg:absolute lg:bottom-0 token-img" src="../assets/images/Circle4.png">
            </div>
        </div>

        <!-- Mobile version -->
        <div class="lg:hidden mt-5 mx-10">
            <div class="flex justify-center">
                <img class="h-72" src="../assets/images/Circle1.png">
            </div>
            <div class="flex justify-center mt-9">
                <img class="h-14 w-14 transform rotate-90" src="../assets/images/arrows-token.svg">
            </div>
            <div class="flex justify-center">
                <img class="h-72" src="../assets/images/Circle2.png">
            </div>
            <div class="flex justify-center mt-9">
                <img class="h-14 w-14 transform rotate-90" src="../assets/images/arrows-token.svg">
            </div>
            <div class="flex justify-center">
                <img class="h-72" src="../assets/images/Circle3.png">
            </div>
            <div class="flex justify-center mt-9">
                <img class="h-14 w-14 transform rotate-90" src="../assets/images/arrows-token.svg">
            </div>
            <div class="flex justify-center">
                <img class="h-72" src="../assets/images/Circle4.png">
            </div>
        </div>
    </div>
</div>

<div class="container px-6 relative lg:min-w-full md:w-auto bg-dark-purple overflow-hidden antialiased main-container">
    <div class="container mx-auto 2xl:px-26 2xl:min-w-full">
        <!-- Text image block 2 -->
        <!-- <div class="grid grid-rows-3 grid-cols-1 lg:items-center justify-items-center lg:grid-rows-1 lg:grid-cols-2 gap-x-20 text-white mt-20 lg:mt-32 relative z-30" ref="textImageBlock">
            <div class="text-image-block-bg absolute top-20 lg:top-auto lg:left-auto lg:right-0 w-screen lg:w-screen h-full z-0 bg-gradient-to-l from-purple-2 to-transparent transform rotate-6"></div>
            <div class="order-last lg:order-1 pt-7 lg:mt-0 row-span-2 z-10">
                <h1 class="font-bronova font-bold text-xl text-center lg:text-left lg:text-4xl 2xl:text-5xl mb-7 lg:mb-20 text-shadow">
                    <span class="block bg-clip-text text-transparent bg-gradient-to-tl from-purple to-pink">THE HEROES OF META LEGENDS</span>  
                </h1>
                <p class="font-bronova text-center self-start lg:text-left text-sm lg:text-lg 2xl:text-xl">
                    Thanks to different challenges, <span class="font-bold">5 very lucky ones</span> of you will experience <span class="font-bold">the great power of becoming a Celestial :</span> one of the great guardians of the Metaverse. 
                    <br><br>
                    And not a random one.
                    <br><br>
                    <span class="font-bold">A Celestial hero created in your image</span>, holding the power of a <span class="font-bold">legendary celestial stone</span>.
                    <br><br>
                    Getting a hero means <span class="font-bold">taking your life</span> (and that of your be loved ones) <span class="font-bold">to the next level</span> and changing it forever.
                </p>
            </div>
            <div class="h-56 w-56 z-10 lg:h-auto lg:w-auto clip-path lg:order-2">
                <img src="../assets/images/mystery.jpg" alt="">
            </div>
        </div> -->
    
        <!-- Roadmap Heading -->
        <div class="lg:pt-20 text-white font-bronova flex justify-around lg:justify-around relative" ref="roadmapTitle">
            <div 
                class="flex flex-col items-center transition-all" 
                :class="{'opacity-30': !isRoadmapSelected(0), 'hover:opacity-100': !isRoadmapSelected(0), 'cursor-pointer': !isRoadmapSelected(0)}"
                @click="changeForRoadmap(0)"
            >
                <span class="text-sm lg:text-3xl">ROADMAP</span>
                <h1 class="text-xl lg:text-5xl font-bold mb-3 lg:mb-8 text-shadow-white">LAUNCH</h1>
                <div 
                    class="w-11 lg:w-32 h-1 lg:h-3 bg-white"
                    :class="{'bg-pink': isRoadmapSelected(0), 'box-shadow': isRoadmapSelected(0)}"
                ></div>
            </div>
            <div 
                class="flex flex-col items-center transition-all" 
                :class="{'opacity-30': !isRoadmapSelected(1), 'hover:opacity-100': !isRoadmapSelected(1), 'cursor-pointer': !isRoadmapSelected(1)}"
                @click="changeForRoadmap(1)"
            >
                <span class="text-sm lg:text-3xl">ROADMAP</span>
                <h1 class="text-xl lg:text-5xl font-bold mb-3 lg:mb-8 text-shadow-white">GROWTH</h1>
                <div 
                    class="w-11 lg:w-32 h-1 lg:h-3 bg-white"
                    :class="{'bg-pink': isRoadmapSelected(1), 'box-shadow': isRoadmapSelected(1)}"
                ></div>
            </div>
            <div class="absolute bottom-0 w-screen h-px bg-purple-gray left-1/2 transform -translate-x-1/2"></div>
        </div>
    </div>
</div>
<!-- Roadmap Content -->
<div class="bg-dark-purple relative pb-10" ref="roadmapTop">
    <img class="absolute right-0 top-0 bg-image-2 pointer-events-none z-10" src="../assets/images/bg-image-2.png" ref="bgImage2">
    <img class="absolute bottom-0 left-0 z-0 opacity-20 pointer-events-none" src="../assets/images/bg-image-4.png">
    <div v-if="roadmapSelected === 0" class="container px-5 mx-auto relative pt-5 lg:pt-10" ref="roadmap">
        <!-- <div class="absolute bg-pink box-shadow h-4 w-4 lg:h-6 lg:w-6 -top-3 left-1/2 transform -translate-x-1/2 rounded-full"></div> -->
        <RoadmapItem v-for="(item, index) in roadmaps[0]" :key="`roadmap-1-${index}`" :percent="item.percent" :description="item.description" />
    </div>
    <div v-else class="container px-5 mx-auto relative z-10 pt-5 lg:pt-10">
        <!-- <div class="absolute bg-pink box-shadow h-4 w-4 lg:h-6 lg:w-6 -top-3 left-1/2 transform -translate-x-1/2 rounded-full"></div> -->
        <RoadmapItem v-for="(item, index) in roadmaps[1]" :key="`roadmap-2-${index}`" :description="item.description" :index="index" />
        <!-- <img class="pt-10 lg:w-1/2 lg:h-1/2" src="../assets/images/roadmap-locked.png" alt=""> -->
        <!-- <h1 class="text-center font-bronova text-white text-xl lg:text-4xl -mt-20 lg:-mt-36">
            <span class="font-bold text-2xl lg:text-5xl">CHECK</span> OUR <span class="font-bold text-2xl lg:text-5xl">DISCORD</span>
        </h1>
        <p class="font-bronova text-white text-base lg:text-3xl mt-1 lg:mt-4" >to discover the <span class="font-bold">challenges</span></p>
        
        <div class="relative lg:w-2/12 btn-discord cursor-pointer bg-gradient-to-r from-blue to-purple text-xs py-2 px-2.5 lg:py-3 lg:px-5 flex items-center mt-8">
            <a class="absolute w-full h-full left-0 top-0" href="https://discord.gg/meta-legends" target="_blank"></a>
            <img class="h-6 w-6 lg:h-14 lg:w-14 mr-1.5 lg:mr-6" src="../assets/images/icons/discord.svg" alt="">
            <span class="text-white lg:text-base">JOIN US <br>ON DISCORD</span>
        </div> -->
    </div>
</div>
<div class="container relative px-6 pt-16 lg:min-w-full md:w-auto bg-dark-purple lg:pt-10 overflow-hidden antialiased" ref="faqAnchor">
    <img class="absolute bottom-0 left-0 z-0" src="../assets/images/bg-image-3.png">
    
    <div class="container mx-auto 2xl:px-36 2xl:min-w-full z-20">
        <!-- FAQ -->
        <!-- <div class="container mx-auto flex flex-col items-center relative lg:px-40 z-40 ">
            <img class="w-16 lg:w-20 absolute top-0 left-0 cursor-pointer opacity-50 z-40" src="../assets/images/crown.svg" @click="pickCrown($event, 3)">
            <h1 class="block mb-9 lg:mb-16 text-6xl lg:text-8xl font-bold text-shadow">
                <span class="bg-clip-text text-transparent bg-gradient-to-tl from-purple to-pink  ">FAQ</span>
            </h1>
            <FAQItem v-for="(question, index) in questions" :key="`question-${index}`" :question="question.question" :answer="question.answer" />
        </div> -->

        <!-- Team -->
        <div class="container mx-auto 2xl:px-36 2xl:min-w-full text-white flex flex-col items-center font-bronova relative pt-10 lg:pt-32" ref="team">
            <span class="flex flex-col items-center mb-8 lg:mb-20">
                <span class="bg-clip-text text-transparent bg-gradient-to-tl from-purple to-pink text-3xl lg:text-5xl">OUR</span>
                <span class="bg-clip-text text-transparent bg-gradient-to-tl from-purple to-pink text-6xl lg:text-8xl font-bold text-shadow">TEAM</span>
            </span>

            <p class="text-center text-base lg:text-lg 2xl:text-2xl lg:mx-40 mb-10 lg:mb-20">
                The tremendous amount of work from our incredible team of 12 Angels Legends, allowed Meta Legends to be born.
            </p>
        </div>
        <div class="grid grid-cols-2 grid-rows-2 gap-3 lg:gap-5 lg:grid-cols-4 mb-11 lg:mb-0">
            <CardTeam 
                v-for="(team, index) in teams" 
                :key="`team-${index}`"
                :name="team.name"
                :role="team.role"
                :image="team.image"
                :imageReflection="team.imageReflection"
                :links="team.links"
                :letter="letters[index]"
                :index="index"
            />
        </div>
    </div>
</div>
<div class="container lg:min-w-full md:w-auto antialiased bg-darkest-purple-2 px-4 py-8 lg:px-14 2xl:px-40 lg:py-16 relative font-bronova" ref="lastComment">
    <img class="w-16 lg:w-20 absolute -top-4 left-6 lg:top-0 lg:left-0 cursor-pointer opacity-50 z-40" src="../assets/images/crown.svg" @click="pickCrown($event, 4)">
    <div class="flex flex-col items-center">
        <img class="w-32 lg:w-40" src="../assets/images/logo-avatar-title.svg" alt="Logo Meta Legends">
        <ul class="text-white flex flex-col items-center gap-5 lg:gap-0 lg:flex-row lg:justify-evenly w-full lg:text-xl my-10 lg:my-16">
            <li class="opacity-70 hover:opacity-100 transition-opacity">
                <a href="https://medium.com/@metalegends" target="_blank">Blog</a>
            </li>
            <li class="opacity-70 hover:opacity-100 transition-opacity">
                <a :href="pdfurl" target="_blank">Lite Paper - Meta Legends</a>
            </li>
            <li class="opacity-70 hover:opacity-100 transition-opacity">
                <a :href="pdfMetaUrl" target="_blank">Lite Paper - Meta Life</a>
            </li>
            <li class="opacity-70 hover:opacity-100 transition-opacity underline">
                <a href="mailto:contact@meta-legends.com">contact@meta-legends.com</a>
            </li>
            <li class="opacity-70 hover:opacity-100 transition-opacity">
                <a href="https://www.meta-legends.com/terms-and-conditions" target="_blank">Terms & conditions</a>
            </li>
        </ul>
        <div class="flex gap-10 items-center lg:gap-16 mb-5 lg:mb-10">
            <a href="https://www.instagram.com/meta.legends/" target="_blank">
                <img class="w-10 lg:w-12 lg:opacity-70 hover:opacity-100 transition-opacity" src="../assets/images/icons/instagram.svg" alt="Logo Instagram">
            </a>
            <a href="https://discord.gg/meta-legends" target="_blank">
                <img class="w-10 lg:w-12 lg:opacity-70 hover:opacity-100 transition-opacity" src="../assets/images/icons/discord.svg" alt="Logo Discord">
            </a>
            <a href="https://twitter.com/metalegendsnft">
                <img class="w-10 lg:w-12 lg:opacity-70 hover:opacity-100 transition-opacity" src="../assets/images/icons/twitter.svg" alt="Logo Twitter">
            </a>
        </div>
        <p class="text-light-purple text-xs lg:text-xl">
            ©2021 Meta-Legends. All rights reserved.
        </p>
    </div>
    <!-- <div class="flex justify-evenly mb-5 lg:mb-10">
        <div>
            <img class="h-8 lg:h-20" src="../assets/images/partner/partner-1.png">
        </div>
        <div>
            <img class="h-8 lg:h-20" src="../assets/images/partner/partner-2.png">
        </div>
        <div>
            <img class="h-8 lg:h-20" src="../assets/images/partner/partner-3.png">
        </div>
        <div>
            <img class="h-8 lg:h-20" src="../assets/images/partner/partner-4.png">
        </div>
    </div>
    <div class="flex justify-between">
        <img class="h-16 lg:h-40 w-auto" src="../assets/images/logo-avatar-title.svg" alt="" srcset="">
        <div class="flex flex-col items-end">
            <div class="flex  lg:gap-x-5 mt-2 lg:mt-10">
                <a href="https://discord.gg/meta-legends" target="_blank">
                    <button class="ml-2 p-2 lg:p-5 btn-footer btn-discord">
                        <img class="h-4 w-4 lg:h-11 lg:w-11" src="../assets/images/icons/discord.svg" alt="" srcset="">
                    </button>
                </a>
                <a href="https://twitter.com/metalegendsnft" target="_blank">
                    <button class="ml-2 p-2 lg:p-5 btn-footer btn-discord">
                        <img class="h-4 w-4 lg:h-11 lg:w-11" src="../assets/images/icons/twitter.svg" alt="" srcset="">
                    </button>
                </a>
                <a href="https://www.instagram.com/meta.legends/" target="_blank">
                    <button class="ml-2 p-2 lg:p-5 btn-footer btn-discord">
                        <img class="h-4 w-4 lg:h-11 lg:w-11" src="../assets/images/icons/instagram.svg" alt="" srcset="">
                    </button>
                </a>
            </div>
        </div>
    </div>
    <div class="flex justify-end">
        <div 
            class="py-2 lg:py-4 px-6 lg:px-10 font-bronova text-white font-bold lg:text-xl btn-discord bg-gradient-to-br from-blue to-purple rounded-md lg:rounded-lg cursor-pointer"
            @click="toBlog"
        >
            Meta Legends News
        </div>
    </div>
    <div class="flex justify-end text-white font-bronova lg:text-xl font-bold">
        <div class="pt-3 lg:pt-5 cursor-pointer" @click="toTermsConditions">Terms & Conditions</div>
    </div>
    <p class="text-light-purple text-xs lg:text-xl text-right mt-3">©2021 Meta-Legends. All rights reserved.</p> -->
</div>
</template>

<script>
import CardTeam from '../components/CardTeam';
import DesktopLegendsSelector from '../components/DesktopLegendsSelector';
import LegendsVideo from '../components/LegendsVideo';
import FAQItem from '../components/FAQItem';
import RoadmapItem from '../components/RoadmapItem';
import Arrow from '../components/Arrow';
import PixelEffect from '../components/PixelEffect';
import FakeConsole from '../components/FakeConsole';
import Countdown from '../components/Countdown';
import MintSlider from '../components/MintSlider';

// ========== SYMBOL ==========
import burnersSymbol from '../assets/images/symbols/burners.svg'
import burnersSymbolColor from '../assets/images/symbols/burners-color.svg'
import celestialsSymbol from '../assets/images/symbols/celestials.svg'
import celestialsSymbolColor from '../assets/images/symbols/celestials-color.svg'
import cybersSymbol from '../assets/images/symbols/cybers.svg'
import cybersSymbolColor from '../assets/images/symbols/cybers-color.svg'
import goldboisSymbol from '../assets/images/symbols/goldbois.svg'
import goldboisSymbolColor from '../assets/images/symbols/goldbois-color.svg'
import matrixangelsSymbol from '../assets/images/symbols/matrixangels.svg'
import matrixangelsSymbolColor from '../assets/images/symbols/matrixangels-color.svg'
import robotersSymbol from '../assets/images/symbols/roboters.svg'
import robotersSymbolColor from '../assets/images/symbols/roboters-color.svg'
import roughsSymbol from '../assets/images/symbols/roughs.svg'
import roughsSymbolColor from '../assets/images/symbols/roughs-color.svg'
// ============================

// ========== AVATARS ==========
import aBurner1 from '../assets/images/avatars/burner-1.png'
import aBurner2 from '../assets/images/avatars/burner-2.png'
import aBurner3 from '../assets/images/avatars/burner-3.png'
import aCelestial1 from '../assets/images/avatars/celestial-1.png'
import aCelestial2 from '../assets/images/avatars/celestial-2.png'
import aCelestial3 from '../assets/images/avatars/celestial-3.png'
import aCyber1 from '../assets/images/avatars/cyber-1.png'
import aCyber2 from '../assets/images/avatars/cyber-2.png'
import aCyber3 from '../assets/images/avatars/cyber-3.png'
import aGoldboi1 from '../assets/images/avatars/goldboi-1.png'
import aGoldboi2 from '../assets/images/avatars/goldboi-2.png'
import aGoldboi3 from '../assets/images/avatars/goldboi-3.png'
import aMatrixangel1 from '../assets/images/avatars/matrixangel-1.png'
import aMatrixangel2 from '../assets/images/avatars/matrixangel-2.png'
import aMatrixangel3 from '../assets/images/avatars/matrixangel-3.png'
import aRoboter1 from '../assets/images/avatars/roboter-1.png'
import aRoboter2 from '../assets/images/avatars/roboter-2.png'
import aRoboter3 from '../assets/images/avatars/roboter-3.png'
import aRough1 from '../assets/images/avatars/rough-1.png'
import aRough2 from '../assets/images/avatars/rough-2.png'
import aRough3 from '../assets/images/avatars/rough-3.png'
// =============================

// ========== CARDS ==========
import robin from '../assets/images/cards/robin.png'
import robinR from '../assets/images/cards/robin-r.png'
import creator from '../assets/images/cards/creator.png'
import creatorR from '../assets/images/cards/creator-r.png'
import maxime from '../assets/images/cards/max.png'
import maximeR from '../assets/images/cards/max-r.png'
import nathan from '../assets/images/cards/nathan.png'
import nathanR from '../assets/images/cards/nathan-r.png'
import alex from '../assets/images/cards/alex.png'
import alexR from '../assets/images/cards/alex-r.png'
import arthur from '../assets/images/cards/arthur.png'
import arthurR from '../assets/images/cards/arthur-r.png'
import dara from '../assets/images/cards/dara.png'
import daraR from '../assets/images/cards/dara-r.png'
import dorian from '../assets/images/cards/dorian.png'
import dorianR from '../assets/images/cards/dorian-r.png'
import maxence from '../assets/images/cards/maxence.png'
import maxenceR from '../assets/images/cards/maxence-r.png'
import mouad from '../assets/images/cards/mouad.png'
import mouadR from '../assets/images/cards/mouad-r.png'
import roze from '../assets/images/cards/roze.png'
import rozeR from '../assets/images/cards/roze-r.png'
import theo from '../assets/images/cards/theo.png'
import theoR from '../assets/images/cards/theo-r.png'
// ===========================

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SwipeListener from '../utils/SwipeListener';
import Konami from 'konami';

export default {
    name: 'Home',
    components: { CardTeam, DesktopLegendsSelector, LegendsVideo, FAQItem, RoadmapItem, Arrow, PixelEffect, FakeConsole, Countdown, MintSlider },
    data(){
        return {
            pdfurl: `https://${process.env.VUE_APP_BUCKETEER_BUCKET_NAME}.s3.amazonaws.com/public/lite-paper.pdf`,
            pdfMetaUrl: `https://${process.env.VUE_APP_BUCKETEER_BUCKET_NAME}.s3.amazonaws.com/public/lite-paper-metaverse.pdf`,
            displayButtons: false,
            konami: false,
            canDisplayFakeConsole: false,
            isSubmenuUnfolded: false,
            legends: [
                { 
                    name:'Celestials',
                    description: 'Great guardians of the Metaverse, <span class="font-bold">the Celestials are the most powerful</span> with an influence and a power that is close to the Gods.<br><br><span class="font-bold">Their mission is to govern the Metaverse</span>.<br>As they are greatly evolved, they developed a deep sense of ethics and morals, that exists in symbiosis with their vision. They managed to coexist with Burners, even though they are superior.',
                    copies: '11 <span class="font-bold">(+5)</span>',
                    filename: 'celestial',
                    symbol: celestialsSymbol,
                    symbolColor: celestialsSymbolColor,
                    avatars: [ aCelestial1, aCelestial2, aCelestial3 ] 
                },
                { 
                    name:'Burners',
                    description: '<span class="font-bold">The burners are just below the Celestials</span>.<br>They accepted alliances and pacts with the evil in order to improve their power.<br><span class="font-bold">They have control over all the classes</span> under them and thanks to this domination, they obtained peace.<br><br>They are inspired from all the great villains from pop culture, like Darth Vader, Magneto, The Joker, Sauron, Thanos, and many others.',
                    copies: '33',
                    filename: 'burner',
                    symbol: burnersSymbol,
                    symbolColor: burnersSymbolColor,
                    avatars: [ aBurner1, aBurner2, aBurner3 ] 
                },
                { 
                    name:'Roboters',
                    description: '<span class="font-bold">The Roboters are technology stealers and they obtained a power level close to the gods power, by stealing precious materials from the Celestials.</span><br><br>That is why their armor is entirely forged in mystical materials. <span class="font-bold">They also absorbed the energy from the burners</span>, without absorbing it totally.<br><br>They will remind you of the dark versions of your favorite heroes.',
                    copies: '111',
                    filename: 'roboter',
                    symbol: robotersSymbol,
                    symbolColor: robotersSymbolColor,
                    avatars: [ aRoboter1, aRoboter2, aRoboter3 ] 
                },
                { 
                    name:'Goldbois',
                    description: '<span class="font-bold">The Goldbois is the richest class of the Metaverse. They own unlimited wealth and influence.</span><br><br>However, they never tried to fight with the higher classes, and simply enjoy their current position.<br><br>They will be inspired from divinities, celebrities (real or fictional) and they will represent absolute abundance (intellectual and financial).<br><br><span class="underline font-bold">References</span> : Mythology, Religions, Entrepreneurs, etc...',
                    copies: '444',
                    filename: 'goldboi',
                    symbol: goldboisSymbol,
                    symbolColor: goldboisSymbolColor,
                    avatars: [ aGoldboi1, aGoldboi2, aGoldboi3 ] 
                },
                { 
                    name:'Matrix Angels',
                    description: '<span class="font-bold">The Matrix Angels are the greatest coders and developers of the metaverse.</span><br>They have the power to influence, create, or hack any powerful entity.<br><br>However, they have very strict morals and ethics, preventing them from stealing knowledge from immoral elites and Goldbois money.<br><br><span class="font-bold">They are taking care of the Metaverse</span>, improving its space, and fighting the evil hackers.<br><br>The Matrix Angels are inspired from the Tech world and the 80’s.',
                    copies: '1777',
                    filename: 'matrixangel',
                    symbol: matrixangelsSymbol,
                    symbolColor: matrixangelsSymbolColor,
                    avatars: [ aMatrixangel1, aMatrixangel2, aMatrixangel3 ] 
                },
                { 
                    name:'Cybers',
                    description: '<span class="font-bold">The Cybers represent all people who managed to succeed in the metaverse after the end of our current world.</span><br><br>Famous artists, talented developers, child prodigies, early adopters, and crypto believers that were lucky enough to have sufficient resources to dive into the metaverse, and continue enjoying their lives.<br><br><span class="font-bold">They can easily upgrade their appearances.</span><br>We will find on them famous attributes from the crypto sphere, and references, from other projects: laser eyes, companions, punk hats, cigarettes, etc...',
                    copies: '4666',
                    filename: 'cyber',
                    symbol: cybersSymbol,
                    symbolColor: cybersSymbolColor,
                    avatars: [ aCyber1, aCyber2, aCyber3 ] 
                },
                { 
                    name:'Roughs',
                    description: '<span class="font-bold">Roughs are survivors.<br> The majority of them sacrificed everything they had in the physical world, to join the metaverse and save their consciousness in order to continue existing.</span><br><br>However, they are well established and respected inside the metaverse.<br><br>Something that all the other above classes understood : in this after world you need to work hand in hand with everybody. As the Roughs are not all well educated, there is sometimes some tension because they’ve been brought there by their survival instinct.<br><br><span class="font-bold">They are also a bit against the hierarchy already in place.</span><br><br>But they don’t have any choice : this is just a reflection of the old world.',
                    copies: '5298',
                    filename: 'rough',
                    symbol: roughsSymbol,
                    symbolColor: roughsSymbolColor,
                    avatars: [ aRough1, aRough2, aRough3 ] 
                },
            ],
            currentLegend: 0,
            currentVersion: 1,
            symbols: [
                { 
                    name: 'Celestials',
                    symbol: celestialsSymbol,
                },
                { 
                    name: 'Burners',
                    symbol: burnersSymbol,
                },
                {
                    name: 'Roboters',
                    symbol: robotersSymbol,
                },
                {
                    name: 'Goldbois',
                    symbol: goldboisSymbol,
                },
                {
                    name: 'Matrix angels',
                    symbol: matrixangelsSymbol,
                },
                {
                    name: 'Cybers',
                    symbol: cybersSymbol,
                },
                {
                    name: 'Roughs',
                    symbol: roughsSymbol,
                }
            ],
            symbolDisplay: [0, 1, 2],
            roadmaps: [
                [
                    { 
                        percent: '0',
                        description: '<span class="font-bold">Humanity is about to go extinct</span>.<br>While waiting for their consciousness to be uploaded , humans have taken shelter on Discord.<span class="font-bold">The council of the Legends has been created.</span>', 
                    },
                    { 
                        percent: 10,
                        description: '<span class="font-bold">Creation of a 54321$ community wallet</span> to support the Legends project and to organize events with Holders.' 
                    },
                    { 
                        percent: 20,
                        description: '<span class="font-bold">The Month Of the Legends</span> : Tons of gifts and 1234$ bonuses will go to some Holders every day.<br>The community will get to pick when they want the Month of the Legends to happen.' 
                    },
                    { 
                        percent: 30,
                        description: 'Legend holders can <span class="font-bold">participate in the design</span> of the next class collaboratively.<br>The latter’s upgrade will solely depend on the votes of the community.', 
                    },
                    { 
                        percent: 40,
                        description: 'Creation of a <span class="font-bold">Celestial temple</span> where each holder from season 1 will be able to leave their mark.',
                    },
                    { 
                        percent: 50,
                        description: '54321$ will go to an <span class="font-bold">environmental NGO</span> ( The community will get to  pick which charity).' 
                    },
                    { 
                        percent: 60,
                        description: 'Creation of a <span class="font-bold">Legend filter on snapchat/instagram</span> representing each class.<br>New Communication in the Metaverse <span class="font-bold">starts now</span>.', 
                    },
                    { 
                        percent: 70,
                        description: '<span class="font-bold">Creation of the Eshop/Merch, and 3D miniatures</span> ( only one per class: the most rare) sent directly to a hundred holders randomly selected , each miniature representing a Legend.',
                    },
                    { 
                        percent: 80,
                        description: '<span class="font-bold">70% OFF exclusive merch</span> for all Holders legends.<br>Creating high quality and environmental friendly clothes.',
                    },
                    { 
                        percent: 90,
                        description: 'Creation of the first <span class="font-bold">NFT community app</span> :<br><a href="https://www.meta-connect.io/app" target="_blank"><span class="font-bold text-twitter-blue">Meta-Connect</span></a>.<br>The Legends Holders will be able to <span class="font-bold">appear on a world map</span> ( only if they want to ) and <span class="font-bold">meet each other in the real world.</span><br><br>Get your NFTs to <span class="font-bold">appear in the real world thanks to augmented reality</span> and complete challenges with your friends.<br><br><span class="font-bold">Events/meetings/seminars</span> both online and in real life will be offered on the app.<br><br>Exclusive news featuring the Legends will be available on the app.<br><span class="font-bold">Partnership with other NFT projects</span> will be created to become the <span class="font-bold">world’s best community app</span>.<br><br><span class="font-bold underline">We will become the first NFT Social Network in the World.</span>',  
                    },
                    { 
                        percent: 100,
                        description: '<span class="font-bold">The ultimate purpose of the Meta Legends</span> : <br>Creation of our Metaverse <a href="https://www.meta-life.io/metaverse" target="_blank"><span class="font-bold text-twitter-blue">META-LIFE</span></a>'
                    },
                ],
                [
                    {
                        description: '<span class="font-bold underline">Drop of a legendary stone NFT for all Legend holders from season 1</span>.<br><br>A new page is opening up for humanity in the Metaverse and it\'s you, Meta Legends from season 1 who will get to write history!'
                    },
                    {
                        description: '<span class="font-bold">Collaboration with other NFT artists</span> so as <span class="font-bold">to create new and unique characters</span> for the next seasons'
                    },
                    {
                        description: 'The future of the Metaverse is not immutable.<br>Your legends could upgrade themselves. <span class="font-bold">New categories/ classes might appear...</span>'
                    },
                    {
                        description: 'Partnership with a producer for a film/anime adaptation.<br><span class="font-bold">One of our ultimate dreams would be to watch the Meta Legend on a movie screen someday</span>. <br>To make this wish come true, we will need you.<br><span class="font-bold">YOU will carry the project to a global level.</span>'
                    }
                ]
            ],
            menuMobileOpen: false,
            teams: [
                {
                    name: "The Creator",
                    role: "",
                    image: creator,
                    imageReflection: creatorR,
                    links: [
                        'https://twitter.com/metalegendsnft',
                        'https://www.instagram.com/meta.legends/',
                    ],
                },
                {
                    name: "Max",
                    role: "3D Magician artist",
                    image: maxime,
                    imageReflection: maximeR,
                    links: [
                        'https://twitter.com/HacquardMaxime',
                        'https://www.instagram.com/mhsmax/'
                    ],
                },
                {
                    name: "Robin",
                    role: "Founder - Metaverse Architect",
                    image: robin,
                    imageReflection: robinR,
                    links: [
                        'https://twitter.com/Robin_Janssens_',
                        'https://www.instagram.com/robj_x/'
                    ],
                },
                {
                    name: "Mouad",
                    role: "COO",
                    image: mouad,
                    imageReflection: mouadR,
                    links: [],
                },
                {
                    name: "Alex",
                    role: "Discord & Community Manager",
                    image: alex,
                    imageReflection: alexR,
                    links: [],
                },
                {
                    name: "Nathan",
                    role: "Discord Development & Security",
                    image: nathan,
                    imageReflection: nathanR,
                    links: [],
                },
                {
                    name: "Arthur",
                    role: "Discord Development & Security",
                    image: arthur,
                    imageReflection: arthurR,
                    links: [],
                },
                {
                    name: "Maxence",
                    role: "Discord Projects Manager",
                    image: maxence,
                    imageReflection: maxenceR,
                    links: [],
                },
                {
                    name: "Dara",
                    role: "Operation Communication Manager",
                    image: dara,
                    imageReflection: daraR,
                    links: [],
                },
                {
                    name: "Théo",
                    role: "Partnership Manager",
                    image: theo,
                    imageReflection: theoR,
                    links: [],
                },
                {
                    name: "Dorian",
                    role: "Social Media Manager",
                    image: dorian,
                    imageReflection: dorianR,
                    links: [],
                },
                {
                    name: "Roze",
                    role: "Podcast & Social Media Management",
                    image: roze,
                    imageReflection: rozeR,
                    links: [],
                },
            ],
            roadmapSelected: 0,
            questions: [
                {
                    question: 'How do I become a Meta Legend ?',
                    answer: 'Meta Legends will be available to mint at <a href="https://www.meta-legends.com/" target="_blank"><span class="text-twitter-blue font-bold">https://www.meta-legends.com/</span></a>'
                },
                {
                    question: 'How many Meta Legends will be available ?',
                    answer: '12345',
                },
                {
                    question: 'When am I going to be able to mint my NFTs ?',
                    answer: '<span class="font-bold">PUBLIC SALES</span> : SATURDAY, DECEMBER 11, 2021 9PM UTC.<br><span class="font-bold">WHITELIST</span> : SUNDAY, DECEMBER 12, 2021 9PM UTC.'
                },
                {
                    question: 'What is the price ?',
                    answer: 'There are two possibilities regarding the public sale :<br>Mint a Meta Legend at 0.3 (fixed price)<br>Mint a Meta Legend + Meta life perks (price varies depending on perks)'
                },
                {
                    question: 'When is the reveal ?',
                    answer: 'MONDAY, DECEMBER 13, 2021.',
                },
                {
                    question: 'Where can I view my NFTs ?',
                    answer: 'Once minted, you\'ll just need to login into your OpenSea account to view your NFTs.',
                },
                {
                    question: 'What blockchain will you be using ?',
                    answer: 'The Ethereum Blockchain.',
                },
                {
                    question: 'What are your secondaries royalties fees',
                    answer: '5%.',
                },
                {
                    question: 'Do you have a long term roadmap ? What is the future of Meta Legends ?',
                    answer: 'Discover our <a href="https://discord.gg/qCFfgVEy7s" target="_blank">📜 | roadmap</a> or on this website',
                },
                {
                    question: 'What is the team ?',
                    answer: 'The team consists of a renowned 3D designer.<br>( <a href="https://twitter.com/HacquardMaxime" target="_blank">https://twitter.com/HacquardMaxime</a> )<br><br>2 French entrepreneurs at the head of more than 12 companies in 4 different countries.<br>( <a href="https://www.instagram.com/robj_x/" target="_blank">https://www.instagram.com/robj_x/</a> & <a href="https://www.instagram.com/sa_limitless" target="_blank">https://www.instagram.com/sa_limitless</a>)<br><br>1 Expert advisor in crypto Sphere. ( <a href="https://www.instagram.com/quentin.riviera" target="_blank">https://www.instagram.com/quentin.riviera</a> )<br><br>9 full-time collaborators on design, communication and development.',
                },
                {
                    question: 'Will there be a pre-sale?',
                    answer: 'We actually do a Presale : spots will be available and will be capped at 1000 members. (Go to ⚪┃how-to-whitelist-me for have your place).<br><br>If you want to have a chance to be in WhiteList, invite your friends in our server Discord : <a class="underline" href="https://discord.gg/meta-legends">https://discord.gg/meta-legends</a>  <br><br>Being whitelisted offers you the possibility to get a pre-mint.'
                },
                {
                    question: 'Will there be giveaways?',
                    answer: 'Yes of course ! We have very original and interesting ideas in terms of giveaways.<br>Check out  the <a class="underline" href="https://discord.gg/342CdmTQ">#Give aways channel in Discord</a>.',
                },
                {
                    question: 'How do I communicate with people from my country ?',
                    answer: 'We created language specific channels :<br>Please go to <a href="https://discord.gg/Q3RU9TupMn" target="_blank"><span class="underline">🌍 ┃ languages</span></a> for find your language',
                },
            ],
            crownsPicked: [],
            keynoteLinks: ['https://player.vimeo.com/video/646381727?h=c140034e50', 'https://player.vimeo.com/video/642984573?h=9647dfa685'],
            currentLanguage: 0,
            letters: ['B', 'O', 'A', 'R', 'D', '(9/12)', ' ', '💡 META-CONNECT']
        }
    },
    created(){
        gsap.registerPlugin(ScrollTrigger);
    },
    mounted(){
        new SwipeListener();
        this.correctInput = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right'];
        this.currentInput = [];
        this.correctLetter = ['B', 'A'];
        this.currentInputLetter = [];

        new Konami(() => {
            this.konami = true;
        })

        document.addEventListener('endPixelEffect', () => { this.displayFakeConsole() })

        document.addEventListener('swipe', e => {
            if(this.currentInput.length < this.correctInput.length){
                this.currentInput.push(e.detail);
                if(JSON.stringify(this.correctInput) === JSON.stringify(this.currentInput)) {
                    this.displayButtons = true;
                }
            }
            if(this.currentInput[this.currentInput.length - 1] !== this.correctInput[this.currentInput.length - 1]){
                this.currentInput = [];
            }
        })

        const comment1 = document.createComment(`
 _____ ______   _______  __________  ________          ___       _______   ________  _______   ________   ________  ________      
|\\   _ \\  _   \\|\\  ___ \\|\\0x687A745A\\\\   __  \\        |\\  \\     |\\  ___ \\ |\\   ____\\|\\  ___ \\ |\\   ___  \\|\\   ___ \\|\\   ____\\
\\ \\  \\\\\\__\\ \\  \\ \\   __/\\|___ \\  \\_ \\ \\  \\|\\  \\       \\ \\  \\    \\ \\   __/|\\ \\  \\___|\\ \\   __/|\\ \\  \\\\ \\  \\ \\  \\_|\\ \\ \\  \\___|_    
 \\ \\  \\\\|__| \\  \\ \\  \\_|/__  \\ \\  \\  \\ \\   __  \\       \\ \\  \\    \\ \\  \\_|/_\\ \\  \\  __\\ \\  \\_|/_\\ \\  \\\\ \\  \\ \\  \\ \\\\ \\ \\_____  \\   
  \\ \\  \\    \\ \\  \\ \\  \\_|\\ \\  \\ \\  \\  \\ \\  \\ \\  \\       \\ \\  \\____\\ \\  \\_|\\ \\ \\  \\|\\  \\ \\  \\_|\\ \\ \\  \\\\ \\  \\ \\  \\_\\\\ \\|____|\\  \\  
   \\ \\__\\    \\ \\__\\ \\_______\\  \\ \\__\\  \\ \\__\\ \\__\\       \\ \\_______\\ \\_______\\ \\_______\\ \\_______\\ \\__\\\\ \\__\\ \\_______\\____\\_\\  \\ 
    \\|__|     \\|__|\\|_______|   \\|__|   \\|__|\\|__|        \\|_______|\\|_______|\\|_______|\\|_______|\\|__| \\|__|\\|_______|\\_________\\
                                                                                                                      \\|_________|        
        `);
        // this.$refs.mainContainer.appendChild(comment1);

        const comment2 = document.createComment(`
;~~~~~~~~~__:_~~~;;!^r+=====><<<<==+^;':^<***<>+^~'_;,'!*ii\\cv777777vTTc\\|<,,;~'~^*?|LLL|<~,!*iT7zzJsInu{}}ffjjjjyy5ooaaZSSmmwEEEkX
;~~~~~_:::,,::~~~;;!^^^+++++++++r^^;~'_!^+==+r^;,'_~',;=*Lii\\\\cTTTvTccc\\i|*^,'~~',!+<*|||*+;'~<|ic77zztsYn{}}ffjjjyy5ooaZZSSSSSmmwE
;;~~~~_:::::__~~~~;;!!^^^^^^^^^!!;~,.,;!^^^^^;~''_,.,;^<*|LLiii\\\\ccc\\\\\\iiL?>^~.,~,';^=<****+;'~+*|ic77zzxIn{}}ffjjjyyy5oooooo5ooaZS
!;;;~~~~__::__~~~~~;;;;;!!!!!;;;~~'.,;!!!!!;;,.':,.:;^=<*|LLLii\\\\\\\\\\iiiiLL|*=^~''~,._!+><**<+!',^<|L\\v7zztsYnu}}ffjjjjjyjjjjjjy5aSm
+^!!;;;~~~~~~~~~~~~~~~;;;;;;;;;~,.':~;;;;;;~,.,,'.~;^r=**||LLLiiiiiiiiiiLL|?<=^;''_,.,;^+><<<+;,';=*Lic77zJxIYu{}}ffffjjjjjjjjyoZmw
<=+r^^!!;;;~~~~~~~~~~~;;;;;;;~~,.'_~;;;;;~:'.,,.'~;!^+><*?|||LLLiiiiiiiiLLL|*<+^;,.,_'';!r=><<+!:'~+*|ic7zzJxIYnu}ffffjjjjjyy5aZmmw
*<<>=++^^^!!;;;;;;;;;;;;;;~~~,'.'_~~~;;~~,..,'\`'~;!^^+><*??|||LLiiiiiiiiLLL|?*<+^;,.,~'.~!^+><>+^~'_^<|ic7zzztsYu}ffjjjjjyy5oaZSmww
***<<>==+++^^^^!!!!;;;;;~~~,'\`.,,_~~~~_,'\`''.\`,~;;!^^+><<***??|LLLiiiLLLLLLL|?*<=^!~'.:,.,;!r=<<=r;,';+?L\\v7zztsY{}fjjjjyyyoaaSSmmw
|??***<<<>=++^^^^!!!;;;;~~,'\`',,_~~~_:,.\`''\`.,~~;!!^^+++=+^^r===*?*>=*??||??****<+^!;'\`,,.'~!r=<<>+!:'~r*|iT7zztxYu}ffjjjyy5oaaSSmm
||||??***<<==+r^^^!!;;;~~,.\`',_~~~~_,,\`\`'.\`',:~~~;;;;;;;;;;;;;;;;!;;;!!!!!!;;;;;!!;;;~,\`,~'.~!+<<<<+^~.:^<|L\\7zzztInu}}fjjjyyooaaZS
L|||||?***<<=++^^^!!;;~~,..,_~~~~~~_,\`.''.',~~;!^+<*|Lic77ztxYnnnnnnnYIstz77\\i|?*=^!;~~,',,'\`_^=<<<<+^;'';+*|iT7zzJxsYu{}ffjjyyyy5o
|||||??***<>=+r^^^!;;~~,\`',~~~~~~:,,,,~;!^>*Li\\cTTvTvvvc\\iL||?|Tz7z7i*?|L\\vzzzz7vvv77Ti|*=^!~~~~;!===+^;,'~r<|L\\v77zztsYnu{{}}fffff
*******<<>=++^^^!!;;~:'\`':~~~~_:_~!^^^^+===+=>>+r^+*|||||*<r+*LLiiLLL?=^^<?Li\\i|+^^^^^<||?<^^><+^;~;;^+^;:._!=*|L\\T777zzzJttxttJzzz
====+++++^^^^^!!!;;~,\`.,~~~_~;!!;;~~,\`'~;;!^==^^!^|LiiiLL<+|i\\\\cccc\\\\iiL<^*L\\Tv7\\<^^^!!!^^;:\`';~:;^++!;;^!;'';^<*|Li\\\\cv7777777T\\\\\\
+++r^^^^^^^!!!!;;~~'\`',~~~,~;;~,\`.'.\`'_~;!^+=!^r!?iccc\\iL=\\c7777zz77777Tc|^|iv777c**+^^!;!!;_.','\`,~!^^;~!!;,.~!+*?|Lii\\\\cTv7vTcccT
rr^^^^^^^!!!;;;~~:'\`',~~~,~;~,.\`.'\`\`':~;;^+=^^*^+\\cvvv\\i*\\777zzzzzzzzzzz77??iv7zzz\\\\\\*?=+!;!;~\`.,'\`'~~;!~~^!;,.,;r>*||LLiii\\c\\ccT77
^^^^!!!;;;;;;~~_,.\`,:~~~~,~~'\`\`'.\`\`,:~;;!+**;+L<|\\T777vc|77zzJJttxttJJJzzz7|\\77zzz7v7iL??=!;!;_.\`',\`.',;~~!;;;:.';!r=<**?||LLii\\cTv
^!!;;;;~~~~~~~,,.\`':~~~~~,,~_''.\`.,_~~;;^*?L?*Lci7zzzzz7czJtsIYnnnnunYYIsxt\\7zzJxxzTTL|i|*r;;;;_'\`',.,~~:~;;;;~,.'~;!^+=<<*?||Li\\\\c
;;~~~:,,::_:,,'\`.,,:___:,,..,~:'',,~~;^^+||=<?|\\7TzzzJJz7JxIIYnuuuuuunnYYYYzJttxsz7z|?*=?L=^!;~~,'.,~~,':~~~~~~~_.._;!^r=><*?|Li\\\\T
~,,,,'''',,,'.\`.,,,,,,,,'\`\`...,~;~~::~^^<|=<*|iT7zzzzJz\\znYYnnnnnnnuuuuuuu}7zxJtxsxz7\\L?>|?+^~:~~;;:''.\`.,,_~~~~~:'.,~!^r=<*?|LLii\\
,''''''''''.\`\`'',,,,,,'.\`\`.\`\`\`',,:~;!;!+<!!^<|iT7t{jyyjjj}uunYYYnnnnuu{}}fjoooooj}IJz7i*^^*=!!!;~,'.\` \`.\`\`.',,_~~~:,\`'~;!^+><*??||L
,'''......\`\`\`'''',''''\`\`\`\`\`\`\`'',,,,,,~;^;~;^*z5wUKDRgN8%bEyjf}{{uuu{}fjjyaXDgNN8gDKUEy7?!~;+;:''''''.\` \`\`\`\`\`'',,,,,,,..,~;!^+=<*?||
,''''....\`\`\`.'''''''.\`\`\`\`\`\`.'',,,,,,,,!;,~;|jjusY{fjyZXbgQgwyjjf{{{fjjyok8QNDqkSa5yj5mw}^~,!;,,,'''''.\`\`\`\`\`\`\`.',,,,,,,.\`,~;!^+<**?|
,''''...\`\`...'''''.\`\`\`\`\`\`\`\`.''',,,,,,,~,,~;<|cJn}jy55yoaSwEZyjffunn}jyoSEUXEwSaZZayj}xz7r~,,,','''''''.\`\`\`\`\`\`\`.',,,___:'\`'~;^+<**??
,,'''.\`\`\`.........\`\`\`\`\` \`\`.''''''''',',',_;|}jJ=;^L7ImPwZo5yjfuxzzzx{joaSmwwkXZzzi+rvjys=~,'''',',,'''''.\` \`\`\`\`.',:~~~~~,.'~!^=**?|
:,,''\`\`\`.......\`\`\`\`\`\`\`\`\`\`..''''''''''''.,~<Sy|' ,;^~~?ufkajfnJ7T\\iic7sfyoZPUyfi,~^;' ;uk}~'''',,,,,,,,,,''\`\`\`.\`\`.,,~~~;;;~'.~!r<*||
~_,'\`\`'''...\`\`\`\`\`\`\`\` \`\`\`..'''''''''''''.':;!^!'\`,~!^=\\7YwE}x7\\|?|**?<Lzsfa6wfJ7=r;~'\`,^+!_.',,,,,,,:::::,,,'\`\`..\`.,~~;;!!!;_.,;+*?|
~,'\`.','''.\`\`\`\`\`\`\`\` \`\`\`\`...'''''''''''''',~;^+r^r+=**|Lic7TiL|??*<<**|ii\\77v\\i|*<+^^^++^;,.,:__~~~~~~~~~~~~:,.\`.'\`.:~;!^^^^!~',;+*L
,.\`.''''..\`\`\`\`\`\`\`\`\`\`\`\`..'''''''''''',^^!;~~;^=<*?|||||||||?*<*L?*<<<?L<^r<*|||??||????*^~_;^==;;;;;;;;;;;;;;~:'\`.,..:;!^^++r^;,';=?
.\`.....\`\`\`\`\`\`\`\`\`\` \`\`\`\`..''''''''''''_7i*+;~;r<*?||LL|||||||?<*?|c7zvL|*>*?|||||LLiLLL||r~;*\\IY;;!!!!^^^^^^!!;;~,\`','\`,;!^r+==+^~'~+
.....\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`......'''''',\\|*|^~;+*?|LLLLLLLLLL||?vjSSmwEEoz||LLLiiiiii\\cciL^~^Tcxz!!^^^^^^^^^^^^!!;~_\`.,,\`,;!^+><<>r;':
''...\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`..'''''''^*<7v~;^*Li\\\\\\iiiiLLLL|vjSSSXXPEwoziLiii\\\\cv77z7v|!~7J|z|^^^^^^^^r++++r^^!!;_..,,.'~!^=<***<^~
'''...\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`..''''''',==TT!~^<icTTTc\\iiiLLLLiT77xuuxz77ciLii\\cT77zJJzv<;!s7<i^^^^^^r+++++===++^^!;~'\`,:'.~!r<*|LLL\\
,,'''..\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`..',,'''''~^*+<!!=izzzz77Tc\\\\iLLLii\\\\\\iiiiiii\\cv77zJIn{{J|^!*<|+^^^^^!;!^+=><<<<<<<=+^!;:\`'_,.,;^<?|iv7
,,''..\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`,~!+<*!'''''_^=z<^^*cztJJzz777Tc7t}j5aoaaayfYz77zJxYu}ffu\\<^cyL=^^r++*|*=^!!=<*******<=+^;~'._:.';r*|ivz
,''.\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`'~^*LiLii+''''''~,'~*|i7tIYsxJz7z}mXkmayjjyZEX6mjstY{fjjj}zi|r^>*+++=>?7777vL>;^***????**<=r^;,.:~'';+*Lcz
''.\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`,;+\\sYziii\\^'''''''''~zfusnunYxtzz}}Jzsn}fjf}uxYj}sY}fjyjjjoy*^^^+++==*T777s5o{|^+|?|||||||**>^!:.,~,.~+?i7
'.\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`'^<=*????||LL|!''''''''',io5jjf}unn{}}}ffyZSSSyyyjjjjjjy5aZwkj=^^^^^^r++|\\\\\\iii\\\\\\|T7<||||||||?*<+^~',~~'~^*i
.\`\`.\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`~L7!+>=+++?ImEqD!''''''''''+oSa5jjjff}nnYxj}uuf}{}}jjyoaZmPXXt^!!^^^^^^^L%KkEjL<<**?<Zy\\?????|???**=^;''~~',^*
\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`,zLr^!!!!!!!^=JbN;'''''',;?TzoKqEZyyyjfuIJznzzzxss{fj5aSwEUKKyxzL^;!!!!!^|QQd\\^^!!^^r+*fb\\******?||?*<+!_':;:';
\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`~*^;!^!=+^+|to}x5;'_^ifSPEmkRBQNgKmynjyjf}ufnnuffjy5aSyjwKg#QNqPPXkwj7*^!!gk{yw7*^^<^^^+ut**??|||||L||?<^;',;~'
\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`_!!;;^+7EXAk7;,;|L7qB&WRRgN####N8RXXkyyoZaowSSSmSmwwZowU6R8#BBBBNg%8QQQNk|\\|!~<5DDUk|+^;^<*|||LLLiiiiiiL?>!,,!r
\`\`\`\`\`.....\`\`\`\`\`\`\`\`.;r+!;;+XNKyzi^~;=L7u5q8&#NN##8g8NN#do//...NOT-HERE...//5aDNN8ggNB&&BQQQQgUyzL+~,^7}k#Qj;;!*||LLiii\\\\cTTvT\\L?+~,!
....''''...\`\`\`\`\`\`';**^^;^E#6jjfnJ7zxuf}fXR#Q&NNN#BB##NgmyoaaSmwEPPEEwmSaaayw%8N###N8N#QQQQ#RyzsntzzJ}yomWQJ;^+\\i?i\\cTv7777zzz77\\?;,
'''''''''.....\`.,!*=!!!^o8XokSSmwSy}nstxYwDNQQQQB&#NN8WXjjyy555555yyyyyyjjfkRggWN#BQQQQQQ#DfLLi7xfSX6XkAPRQi!!^|L|i\\\\cTv77zzzJttJ7i
~_,,,,,,'''',,,;=*!!;rxqRXXdUPXUAKbUa{uuuujXRNBBB&##Ngdmfy5yjj}nstJzJxY{fjj5omURNN#BBQBNRwz\\\\\\\\7aD8gRdKDgqDNP|!!^??|LLiii\\c77zJxIu}
!;;;~~~~~~~~~~^cac;;ogqXU6666AqKDDR%%RXajj5mUD%8#%qUkEayjj{zc|*>+^^^^+=*|vzIzzsZU6q%BNgDm}tzzjb#QQB&Ng%DDDDDD##|;7f??iii\\\\cv7zzJxIY
;;;;;~~~~~~~^sXR%z+zKnzwkUqqKKdDRR%%%RDD6XXAKDDKDm}j5mmajJi>_'.\`\`\`\`\`\`\`\`.'~>cJ}owPmjaDD%DqUEPK8#BQQQB#Ng%%RDbq}EX+}Q8mz777zzztsIYnu}
;~~~~~~~~~_~aDDDDRDb{t\\IEXXAKbDR%%%%RDqXaTzaUqbdDP}fjjyfIi>~\`            \`~*csjoSZjmDDDbqEjYXDgN&BBB&NNW%DKbov{kQQQQQBjzzzJtxIIYu}f
!^^<;~~~~~~_!}6KbdDZT}\\v{EkwXKDR%%%%DKkj!\` ~}ZPX6wffff}uz|^,              ,=iJfyaayS6Xkwy;\`\`=Sd%N#B&#NN%KKbwJ7azgQQQgo7777zzJ7iIxzJ
XXXdKI+~_:,,,,^75wwaLT\\7tjwajZqRggggRbk{~\` ;IymEXSyyjf}Yz|^'              '=itfyZSZSXaawy^ \`~yd%N&B#N8qZXK6yYzIxgNba7icT77zz7nKQDKq
KqqRNgDo;''''''',;?}7iTz{5wSjjywAdDRRRDAw{\\fSEkkk6XkSyfutL+,              ,*vYjZwX6qm5UKUacfXDW8ggRdUafjERDXof{yaT??|LLic7j%QQQQ%dD
N8gg8DKEz,..\`\`\`\`\`\`\`._<zuy5mkXwaaSwEkkkX6qKKAAA66UXA6XwofIT*;\`            \`~|z}ymXqqEwbDDRR%DqkZaSZaaoyaKNNW%d6y!~~~~~;;;!|DBQQQQQQQ
QQ#88Rbku^..\`\`\`\`\`\`\`\`\`,<cnamPUKK6XkXXXXXPwmE6bKKKqq6q6Xwofti=,            '+7YymXAK66D%%ggdSfjoZmwwwwkD&QBN8%bkL_::::_~~~;fD&QQQQQQQ
QQ#88RKkjL,..\`\`\`\`\`\`\`\`\`:*7}ZPUqdDRb6XkPEwmSaaw6ddbKKKq6kmo}zL^'          .^LsjSk6KKdR%g8Dw}}fjyoZmwU%QQQQB#WRAn~,,,,,,:_~\\K8QQQQQQQQ
QQQ&#WRqms+'..\`\`\`\`\`\`\`\`,*zjSXKDRgW88%KXkPEwmmmSkKDDDddKUkwo}z|;\`         ~|zySk6KdRg8NgXjfjjyyoamqNQQQQQQQQQ#gw!;;;;!!^^Lb#QQQ@@@Q@@
QQQQBN%dXyv~...\`\`\`\`\`\`\`:|xywUKRg8N####8KXXkkkPEEEUDRRDDqUXEZf7r\`        \`;7fmX6KD%g8gqayyyyooamKBQQQQQQQQQQQQQR<++++=<**XQQQQ@@@@@@@
#QBBBNgDqwu+'....\`\`\`\`\`'^IaXqD%N#&BQQQQQNDq6666AqKdD%WgRDDdqXS{?=++=++++*sSXbD%g8#NRAXPEwwmwEANQQ@@@@@@@QQQQQ#o+^^^^r+>zQQQQQ@@@@Q@@
+XRgNWgRKXy7~.........,^75Xdg#QQQQQQQQQQQ&%ddDDDR%gg#Ngg8gRdqk}=x5oao}<xkqD%8NNNN8RDDKq66UKNQQ@@@@@@@@@@QQQ6*!!!!;;!!^PBQQQQQQQ@QQQ
;!wb%DUSy}z\\+'......_+7ykAdDRgW%%NQQQQQQQQQQ&888NN##NNN88NW%DAL\`LX6AXz.=UDgNNWgggWWWgg%%WQQ@@@@@@@QQBQQQQQQQ8m+~~_~~~|aaSmEk6DBQBD*
},76RKyz7Ti|<!'...,^\\jXmmk6KDRg8NBQQQQQQQQQQQQQQBQQQBB#&N888gDz'7dDDdj'|DgNWg8NNN####NBQQQQQQQQ@QQQQQB#8gRDdqKKc~,,,!Liii\\c7zyR#%j~
D|vgQQB#8%Db6S|'_+cnkR%gW8NNNNNN8Q@@@@@QQQQQQQQQQQQQQQQQQQQB&N%KR8NN8%KRN##BBQQQQQQQQQQ@@@@@@@@@@@@QNN&QQQQQQQQQUz=\\R8NN#&BQQQQQQj*
@QQQQQQQQQQQB8Kj5Swk%QQQQQQQQQQQ@@@@@@@@@@QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ@@@@@@@@@@@@@@@@@@@@@@@@@@@@NKqDQQQQQ@@@@@@@@@@
@@@@@@@@@QQQQ%DbKKKDQQQQQQQQ@@@@@@@@@@@@@@@@@@QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@QRR%WQ@@@@@@@@@@@@@
@@@@@@@@@@QQN8g%%%gNQ@@Q@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@QQQQQQQQQQQQQQQQQQQQQQQQQQ@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@QN88N#QQ@@@@@@@@@@@
        `);
        // this.$refs.textImageBlock.appendChild(comment2);

        const comment3 = document.createComment(`
                                                                                         \`',,,,,,,,,'.\`\`\`\`\`\`       \`\`...''''''''',
                                                                                          \`.'''',,,,'\`\` \`\`\`\`\`       \`\`...''''''''''
                                                                                           \`\`.......\`     \`\`\`       \`\`....'''''''''
                                                                                                           \`\`       \`\`....'''''''''
                                                                                           \`\`\`\`\`\`\`\`\`\`\`\`\`\`  \`\`       \`\`\`...'''''''''
                                                                                           \`'''',,,,''.\`\`  \`\`       \`\`\`......''''''
                                                                                          \`.,,,,,,,,,,'.\`\`  \`        \`\`.......'''''
\`\`\`\`\`\`\`\`                                                                                  \`.,,,::::::,'.\`\`  \`        \`\`.......'''''
yun}}Yz+'\`                                                                                \`.,:__~_~~_,'.\`\`  \`        \`\`........''''
DbKK6XEI;\`                                                                                \`.,_~~~~~~~,'.\`\`  \`\`       \`\`\`.....''''''
q66UhmSj^,\`                                                        \`\`\`\`\`\`\`\`               \`.,~~~~~~~~:,'\`\`  \`       \`\`\`\`....'''''''
kwSa55aZL~.\`                                        \`,~~,.\`         \`\`\`\`\`\`\`\`\`\`\`           \`.,~~~~~~~~_,'\`\`  \`\`      \`\`\`....''''''''
Zy}nn}yS{!'\`                                     \`~*tszi|^~'.'.'.''',,,,,,,'''.\`\`         \`.,~~~~~~~~~,'\`\`  \`\`      \`\`....'''''''''
wj}}}fymEv~'\`                                \`';Lzi<^!!^!;;;;;;;;;;;;;;;;;;;~~~_,'\`\`\`\`    \`.,~;;;;;;~~,'.\`  \`\`     \`.....''''''''''
AojjjyowXa=,\`\`                             \`:?{z<^^++===+^^;!;!;;;;;!;!;!;;;;;;;~~,'.\`\`   \`.,;;;;;;;;~:'.\`  \`\`\`  \`\`.....'''''''''''
gXojjj5SkXz;'\`                            .;tf*+++<><>*=*>=+^!;~,',~;!!!!!!!!;;;;;~_,'\`\`  \`.,;;;;;;;;;~,.\`  \`\`  \`\`....'''''''''''''
QgqSyy5ZEk{;'\`                           .;sI>>=*<?<******>*L?!'\`  \`,+*<^^^^!!!!!;;~~:'\`\` \`.,;;;;;;;;;~,'\`  \`\`\`\`\`...'''''''''''''''
@Q#DXwZZmwx;.                            _Lf*<>*???|*|*|*||\\}yjIv=>ixYJi=++^^^!!!!!;~~:.\`\`\`.,;;;!!;;;;~,'\`  \`\`\`.....'''''''''''''''
@@QQNDqkwmy*,\`                          '^}L***i|L|L|L|LL|i|iii|????|||?*=>++^^^!^!!;~~,\` \`.,;;!!!!!!;~,'\`  \`.......'''''''''''''''
QQ@QQQWd6hSn^'\`                         ,iJ?**|iiiiL\\LTLTiiLiLL?*<<*??|?*<<*<<=+^^^^!;~~.  \`,;!!!!!!!;;,'\`\` \`\`....''''''''''''''',,
QQQQQQQ#gDqh}^,\`                       '!yi||?7vzzf{fxJ7zzTzi7Li*?*|?L|L|L|L|LLiL*<++^~~,  \`,;!^^^^^!!;:'\`\` \`\`....'''''''''''''''''
QQQQQQQBN%Dqwz;'\`                      ,^J*iijK%#QQQQQQBDEss7zcc|L|LLiic\\zjK8QQQQ&gdku^~_\` \`,;^^^^^^^^;~'.\` \`\`...''''''''''''''''''
QQQQQQQB8%Dd6mc~\`                      _=L?fqdXwZwwkXbWQQ@QjfJxvviiivczzyQ@Q8Kwoffn}yEa\\;'.\`,;^^++++^^!~,.\` \`\`...''''''''''','''',,
QQQ##BQB8%DdKXZ|:\`                    .;|<izjamKKDdb6XAbDDDaau}7zLii77sYS66wa55SPkhSjzi<!,' ,;^+==+++^!~,.\`  \`\`..'''''''''''',',,,,
QB8%%WNNWRDdK6ky*,\`           \`       ,;J=\\//...507D6Ae3...//y}zc||Li7tuj5ZEK%NQQWNQ@QR{^,, ';+=<>===+^;,.\`  \`...''''''''''''',,,,,
&N%DDRggg%%RDqUEf^'           \`       ,^}*jQQQDD%SW@gxXd#bqXSyt7?=+=>|7I}aUWXou%NSzS}RQQU~!..;+<<<<<<=^;,'\`  \`....'''''''''',,,''''
&NgRDDR%%gWgDqXwyz;\`                  '=y*Lvt}x5DEn5m5uS%Dmou7i?^!!!^=*LzagDZuoP5zyq<^*!;,L:.;=*****<<+;:'\`  \`...''''''''''''''''''
#NW%RR%%%%%RD6wZy{c,\`                 .;c|<7civ7iL|*+=<*|i\\iiL|*^!!!^^+=<**<==+++=^+^^;;~,!'';<*?|?**<=!_'\`  \`...''''''''''''''''''
N8Wg%%%%DDDDDbUEZjs='               \`~<7*z<7L\\7ciLL|*=+^+<?|Lii?=^!!^+^^^^^^^^^^^^^^^^~;,~+!;;<?||||?*<^~'\`  \`...''''''''''''''''''
#N8Wgg%RdbDDRRdqE5{L~\`      \`\`      'ciISy?ii|7cTLi||||??||Licc7ic??++^^^^^^^^+^+^^^^^~;_^\\<*L<|LLL||?*^~'\`  \`...''''''''''''''''',
##N88WgRDDDR%RDKP5}L~\`\`.\`\`  \`\`\`     \`*v7SSL|vLz7vTiiLi|i|iivz}oqXmy5aY|=^^^+^+^^^^^^+^;;~=?^?**LiiiL||*+~'\`  \`...''''''''''''''',,,
&#NNN8W%DDRR%Rdqh5uL~\`\`~_'\`\`\`\`\`      ;7zfmn?zc7z7z\\7i\\L\\ii7zjw6DRUXEXZIL++^^++++^+==<!!~~|*=<=?Li\\iiL|?=;,.  \`..'''.'''''''''''',,,
B#NNN8WRDDDDRRDqka}L~\`\`;<+;~,.\`      \`L77jyiiz\\tYzzv7ivivi7cJJ{}}uYJTi?<=++^+^=+=<<<+^^~!<^^^;?icT\\iiL|<;,.\` \`.......'''''''''',,,,
QQNN88gDdDDDRDdAEafL~ \`;?7zz^,\`       ~Li\\nfLvztYzn7J\\z\\7T\\7TvT\\|**?**+=++>==><<***<+^;;^!;;,~?iTvT\\iL|*;,.\` \`..........'''''',,,,,
QQQ&NW%DdDRRRDbUwoji_ .!|7tx+,\`        ,^|||zi7xzI}tzz7z7JcxsjfSoayyuzvL**<*<*****<=+;;;^;_.\`~?iv7vTii|*!,'\` \`\`\`...........'''',,,,
@//...A3B63049...//i_ '!Lzss*~'\`            ;z77xzjsnn7Y7tukKdXkSyjyawkUfv?*<***?>=+;;'     \`:*i777T\\iL*^_'\` \`\`\`......\`\`........',,
QQQQQQWRDR%RDdqXmay\\: '^L7YfJ+,.\`\`           _7s7xYtjIIYtzjynzstszJ7ciL\\x7|<<***==^!;'      \`,*i777vciL?^~'\` \`\`\`....\`\`\`\`\`\`\`\`\`\`\`\`\`',
QQQQQQNggNNW%DKkmaov: '+cYyox=~,'.\`           '|}?JsY}}jjJ{z}njuojyjYv7iTLi****=+;!;\`       \`,*i777vciL|+~'\` \`\`\`\`..\`\`\`\`         \`',
QQQQQQB###Ng%DqPZao7, ,<zywPn^,.\`\`             \`;*=}{st5ffIsJIzJzz7Yz|LLLLi|*<==~~,\`        \`,<iv77v\\iL|=~'\`  \`\`\`\`\`\`\`           \`',
QQQQQQQQQ&Ng%D6waoo\\, ,<zymEt!,\`\`\`\`\`\`\`\`         \`\`,;Tyfjyyf}zYi7iiL7T???||L*>=!,\`           \`,>L\\cTciiL|=;'\`  \`\`.\`\`             \`',
QQQBBQ&#NNNN8RqPSZyL, :<z}yon*;,,,,,,,''...'''''''',~^c5ZySyfjzz77iJ7LLLiiL<!,\`             \`,=|LiiiL||*=;'\`  \`\`\`\`              \`'~
QQQBBB#8%R%W8gD6kwy|' :=\\zs{n7?+^!!;;~:,,:~~_,,,,,,,,,~=jPwkmwZyyf}5uz77T\\|~.               \`'^*?????**<+;,\`                    \`.~
QQQQBB#gDdbdR%Rdqhy*' ,^*||L|*>^!;~~_,,,:~!;_,'''''''\`\`i6R%DDDdqXq6qEEoayjz;                 ';^^^^^^^^!;~'\`                    \`\`_
QQQQQBNWRDbKKdDdbUZ?' \`',,,,,'''...\`\`\`\`\`\`.'.\`\`\`\`\`\`\`\`\`  ~yb%WgNNNBQ&NDKhSyx|'                 \`'''''''''''.\`\`                    \`\`:
@@QQQNg%%DDbKKbdDbU}!\`........\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`   .|kqgWBQQQ#NRDXPjfL^\`                  \`\`\`\`\`\`\`\`\`\`\`\`\`\`                    \`._
Q@@QQgDDDDDDdbdDDRDKS;<|LLL|*+^!!^^^!;;;;!!!!!;;~_,,'\` 'i5hqgN#NN%RbKXaI7*^\`                 \`~;;!!!!!!!!;,'\`                 \`\`.'~
Q@@Q&dUAKDRDDDDR%W8N%TYawwmZ}\\<^+*|?=^+<?|LL|?**<^;~,\` ,Eq6ER%%RdK6UESsIcc*\`  \`\`\`\`          \`'!|Liiiiiiii*!~'\`\`              \`\`'_!*
Q@@QDEyjaXKDRR%WN&QQQyaAbdbKXy7||iTi*=<|7ztJ7i**||*+~.\`://...19236aec...//<\` \`\`',,'.\`        '^vzttxxxtJzv*;,\`\`         \`\`\`   \`';LZ
Q@@QdZntJ{5w6b%NQQQQQPPD%%%%dXou{jyni?|TxIunsv?*?TvL=!;|yXkXw6Ukayy5ynJii|+~,:_~~~;,\`        .+J}fjjjf}YzT?!,\`        \`.,,.\`  \`';tK
Q@QWKqDNN%KUkPXbgQQQQRKW&QQQ8D6k6bDdAkmZ5I/}z=!7yayyyYT\\xmwEwEESfY}{}zzLi<=!>zfyjz^,\`        .+ny5ooyjY7|>!~,\`\`    \`\`.',:,.\`  \`';zX
Q@QWKqDNN%KUkPXbgQQQQRKW&QQQ8D6k6bDdAkmZ5I|!~_~aqE5ucL7zjyooaoojxzxxx7viL||<=?JaUb|,'.\`      .=}aSSo}7*!;_,'.\`\`\`.'..',~~:,'..''~^7k
QQQRqq8Q@@@QQ#%RgBQ@@ND#QQQQWKwomUdDDKjL^~:~:~~~?7\\L=L|i7tY{}}unxJJz77ciiLLL*||xs^,,,'''.\`  \`'<jmEmn|^~,,''\`\`\`',~;~~~;;~~~;;!^=+=\\h
#QNd6q8Q@@@@@@@QQQQ@@QgQQQQQQNKkkko7=~:::___~~~~~~;;^|L|iii\\\\v7zzz777vc\\\\\\c7i?!~,,,,,,,,''''.';L}Sj|!~,'''.\`..,;=|LL|?+!;!+=^^!;!=I
%8%qk6WQ@@@@@@@@@@@@@QNQQQQQQNP7=~,,,,,:,,:_~~~~;;;;;;;!^<*|Liiii\\cTTTiL|<+;~:::,,,,,,,,,,'''''',~^!;:,''''',,!|iT\\|*+!!+*|^;;;;^*}
N#g6wPRQ@@@@@@@@@@@@@QQQQbov^_,,,,,,,,,,,,,:_~~;;;;;;;;;;~~~;;;;;;;;;;~~~~~~~_:,:,,,,,,,,,'''''''''''''''',,;!i}\\;~;++^+*7{i=+*iz}X
QQ#KwEDQQ@@@@@@@@@@@QP\\+~,,,,,,,,,,,,,,,,,,,,,,_~~;;;;;;;;;~~~~~~~~~~~~~~~~~_:,,,,,,,,,,,,,,''''''''''''.'',;!i7!'',!TvvsymofjSX6qR
QQQD6UDBQ@@@@@@@QDj^:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:__~~~~~~~~~~~;;~~~~~_::,,,,,,,,,,,,',,,,,,,'''''''''''''''';<>!;=zZqKDR%RdD%WggN
QQQWDdD8QQ@@@Qq7;:__::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:::__::,,,,,,,,'''''''''''''''''''''''''''''''..''//...a9c33E21...//
QQQW%DDgBQQQy^~~~~~~~_::_:::,,,,,,,,,,,,,,''',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,''''''''''''''''''''''',''''''''',''''''~iK#NBQQQQ&B&##Q
@QQ8%R%&QR7;;;~~~~~~~~~~~~~~_::,,,,,,,,,,,,,',',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,''''''''''''''''''',,,,,,,,,,,,',,,,,''^XQQQQNN##QQQ
@@QQ#8#Nf^;;;;;;;;;;;;~~~~~~~__:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,''''''''''''',,,,,,,,,,,,,,,,:,,,,,,,c#QQ##BQQQQ
@@@QQQq|!^^!;!^!;^;;;;;~;;~~~~~_::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,''',,,,,,,,,,:,:::,~~~___,,,,;hQQQQQQQQ
@@@Q#f+!^>+^;^<+^=!!!!;;;;;~~~~~__::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',,,,,,,,:_~~~~:~~;;~~~~~~~_cNQQQQQ@
@@Qh*+=^^*?<!^?|<?+^^^!;;;;;~~~~~~_:::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,_~~~~~~;;;;~;;~;~~_;SQ@QQQ
@DT+<<?|>*Ti=^*Ti7L==+^;;;;;~~~~~~~__:::,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:::~~;;~!^!!^+^;!!;;;~_=UQQQ
        `);
        // this.$refs.lastComment.appendChild(comment3);

        document.addEventListener('legend-changed', ({detail}) => {
            this.currentLegend = detail.index;
            this.currentVersion = 1;

            // ========== ANIMATION TEXTS ==========
            const textTl = gsap.timeline();
            textTl.from(this.$refs.legendName, {
                opacity: 0,
            }, 0)
            textTl.to(this.$refs.legendName, {
                opacity: 1,
                duration: 0.8,
            }, 0)
            textTl.from(this.$refs.legendCopies, {
                opacity: 0,
            }, 0)
            textTl.to(this.$refs.legendCopies, {
                opacity: 1,
                duration: 0.8,
            }, 0)
            textTl.from(this.$refs.legendCopiesLabel, {
                opacity: 0,
            }, 0)
            textTl.to(this.$refs.legendCopiesLabel, {
                opacity: 1,
                duration: 0.8,
            }, 0)
            textTl.from(this.$refs.legendDescription, {
                opacity: 0,
            }, 0)
            textTl.to(this.$refs.legendDescription, {
                opacity: 1,
                duration: 0.8,
            }, 0)
            // =====================================
        });
    },
    methods: {
        onKButtonClicked(letter){
            this.currentInputLetter.push(letter);
            if(JSON.stringify(this.currentInputLetter) === JSON.stringify(this.correctLetter)) {
                this.konami = true;
            }
        },
        onVersionClicked(version) {
            this.currentVersion = version;

            const versionEvt = new CustomEvent("version-changed", { detail : version});
            document.dispatchEvent(versionEvt)
        },
        onArrowClick(value) {
            this.currentLegend += value;

            const sliderTl = gsap.timeline();
            sliderTl.from(this.$refs.sliderMobileLegend, {
                opacity: 0,
                x: 100 * value,
            })
            sliderTl.to(this.$refs.sliderMobileLegend, {
                opacity: 1,
                x: 0,
                ease: 'power3.out',
                onStart: () => {
                    const legendEvt = new CustomEvent("legend-changed", { detail : {filename: this.legends[this.currentLegend].filename, index: this.currentLegend}});
                    document.dispatchEvent(legendEvt);
                }
            })
        },
        onSelectorClick(index){
            this.currentLegend = index;

            const legendEvt = new CustomEvent("legend-changed", { detail : {filename: this.legends[this.currentLegend].filename, index}});
            document.dispatchEvent(legendEvt);
        },
        slideTo(value) {
            gsap.to(this.$refs.sliderMobile, {
                x: `+=${128 * value}px`,
            })
        },
        toggleMenuMobile(){
            gsap.to(this.$refs.menuMobile, {
                right: this.menuMobileOpen ? '-100%' : '0%',
                onStart: () => {
                    this.menuMobileOpen = !this.menuMobileOpen;
                }
            })
        },
        onMenuClick(to) {
            if(this.menuMobileOpen) {
                gsap.to(this.$refs.menuMobile, {
                    right: '-100%',
                    duration: 0.6,
                    onStart: () => {
                        this.menuMobileOpen = !this.menuMobileOpen;
                    }
                })
            }

            const anchors = {
                design: this.$refs.designsAnchor,
                roadmap: this.$refs.roadmapTitle,
                faq: this.$refs.faqAnchor,
                team: this.$refs.team,
                metaverse: this.$refs.metaverse,
            }

            anchors[to].scrollIntoView({behavior: "smooth"});
        },
        isRoadmapSelected(index) {
            return index === this.roadmapSelected;
        },
        changeForRoadmap(index) {
            if(index === this.roadmapSelected) return;
            this.roadmapSelected = index;
        },
        goToEasterEgg(nb){
            this.$router.push(`/easter-eggs-${nb}`);
        },
        displayFakeConsole() {
            this.canDisplayFakeConsole = true;
        },
        pickCrown(e, nb) {
            gsap.to(e.target, {
                scale: 1.3,
                duration: 0.3,
                opacity: 0,
                display: 'none',
                ease: 'power2.out',
                onComplete: () => {
                    if(this.crownsPicked.includes(nb)) return;
                    this.crownsPicked.push(nb);
                    if(this.crownsPicked.length === 4) {
                        this.$router.push('/cyber-punk');
                    }
                }
            })
        },
        toBlog() {
            this.$router.push('/blog');
        },
        toTermsConditions() {
            this.$router.push('/terms-and-conditions');
        },
        unfoldedSubmenu(){
            // Jouer l'animation de dépliage
            const submenuTl = new gsap.timeline({
                onComplete: () => {
                    this.isSubmenuUnfolded = !this.isSubmenuUnfolded;
                }
            });
            
            if(!this.isSubmenuUnfolded) {
                submenuTl.to(this.$refs.submenu, {
                    top: '7rem',
                }, 0)
                submenuTl.to(this.$refs.submenuIcon, {
                    rotate: '+=90',
                }, 0)
            } else {
                submenuTl.to(this.$refs.submenu, {
                    top: 0,
                }, 0)
                submenuTl.to(this.$refs.submenuIcon, {
                    rotate: '-=90',
                }, 0)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.video-desktop {
    background-image: url('../assets/images/video-desktop.jpg');
    background-size: cover;
    background-position: center;
}

.video-mobile {
    background-image: url('../assets/images/video-desktop.jpg');
    background-size: cover;
    background-position: center;
}

.clip-path {
    clip-path: polygon(80% 0, 100% 30%, 100% 100%, 0 100%, 0 0);
}

.text-shadow {
      text-shadow: 0 0 32px rgba(159, 55, 208, 0.79),
}

.text-shadow-white {
      text-shadow: 0 0 32px rgba(255, 255, 255, 0.79),
}

.box-shadow {
    box-shadow: 0 0 32px rgba(159, 55, 208, 0.79);
}

.border-gradient {
    background-image: url('../assets/images/border-gradient.svg');
    background-repeat: no-repeat;
}

.border-gradient-selected {
    background-image: url('../assets/images/border-gradient-selected.svg');
    background-repeat: no-repeat;
}

.overlay {
    transition: all 250ms ease-out;
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

.btn-footer {
    background-image: url('../assets/images/border-gradient-btn.svg');
}

#slider-item-4 {
    font-size: 0.7rem;
}

.slider-preselected {
    transform: scale(1.3);
}

.clip-path-mobile {
    clip-path: polygon(100% 0, 100% 100%, 11% 100%, 0 95%, 0 0);
}

.menu-mobile {
    right: -100%;
}

iframe {
    resize: both;
}

.clip-path-menu {
    clip-path: polygon(0 0, 100% 0%, 100% 60%, 95% 100%, 5% 100%, 0 60%);
}

.arrow-left {
    transform: scaleX(-1);
}

.bg-date-image {
    background-image: url('../assets/images/border-gradient.svg');
    background-repeat: no-repeat;
}

.bg-blur {
    background-color: rgba(255, 255, 255, .05);  
    backdrop-filter: blur(10px);
}

.keynote-video {
    height: 650px;
}

.keynote-youtube {
    width: calc(560px * 1.7);
    height: calc(315px * 1.7);
}

.bg-miniature {
    background-image: url('../assets/images/background-home.jpeg');
    background-size: cover;
}

.arrow-dutch {
    
}

.arrow-dutch::after{
    content: ' ';
    position: absolute;
    clip-path: polygon(50% 30%, 0 0, 100% 0);
    background: #5600D8;
    bottom: -40px;
    width: 100%;
    height: 40px;
    z-index: 20;
    
}

.coin-animation{
    animation-duration: 1s;
    animation-name: coinAnimation;
    animation-iteration-count: infinite;
    animation-delay: 2.5s;    
}

.coin-shadow {
    border-radius: 100%;
    animation-duration: 1s;
    animation-name: coinShadowAnimation;
    animation-iteration-count: infinite;
    animation-delay: 1s;
}

.submenu-item::after {
    content: " ";
    width: 2px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 4rem;
    background: white;
    opacity: 0.1;
}

.custom-grid {
    grid-template-columns: 20% 6.6% 20% 6.6% 20% 6.6% 20%; 
}

.token-img {
    transition: 0.2s;
}
.token-img:hover {
    transform: scale(1.2);
    transition: 0.2s;
}

@keyframes coinAnimation {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes coinShadowAnimation {
    0% {
        transform: scaleX(1.1);
    }
    50% {
        transform: scaleX(1);
    }
    100% {
        transform: scaleX(1.1);
    } 
}

.bg-image-bonus {
    
}

@media screen and (max-width: 600px) {
    .keynote-youtube {
        width: 100%;
        height: calc(315px * 1);
    }

    .custom-grid {
        grid-template-columns: 100%;
        grid-template-rows: 10% 2% 10% 2% 10% 2% 10%;
    }
}

@media (max-width: 480px) {
    .main-container {
        background-image: none;
    }

    .text-image-block-bg {
        width: 200%;
        height: 35rem;
    }

    .clip-path-menu {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%);
    }

    .keynote-video {
        height: 300px;
    }
}

@media (min-width: 1650px) {
    .interactive-video {
        transform: scale(1.25, 1.25);
        transform-origin: left;
    }
}
</style>