<template>
<div class="bg-darkest-purple h-screen text-white font-bronova bg-mint-image">
    <!-- START Header - supply + wallet -->
    <div class="fixed right-0">
        <div class="flex justify-end pt-2 lg:pt-5 px-2 lg:px-5">
            <div 
                @click="toggleWalletChoices"
                class="flex justify-between rounded-full items-center pt-3 pb-2 px-5 bg-gradient-to-br from-blue to-purple cursor-pointer"
            >
                <span v-if="currentAccount" class="mr-8 lg:mr-10">{{ shortenAddress(currentAccount)  }}</span>
                <span v-else class="mr-8 lg:mr-10">Connect Wallet</span>
                <div 
                    :class="[currentAccount ? 'bg-green-600' : 'bg-red-600']"
                    class="w-4 h-4 lg:w-5 lg:h-5 rounded-full"
                ></div>
            </div>
            <div 
                v-if="currentAccount && isCoinbaseWallet" 
                class="border flex items-center cursor-pointer"
                @click="disconnectCoinbase"
            >
                <span>Deconnexion</span>
            </div>
        </div>
        
        <!-- START Wallet choices -->
        <div 
            v-if="isChoicesWalletVisible"
            class="flex flex-col right-0 m-2 p-3 lg:p-4 bg-gradient-to-br from-blue to-purple rounded-lg lg:rounded-xl"
        >
            <div 
                @click="connectWithMetamask"
                class="pt-2 lg:pt-3 pb-1 lg:pb-2 px-4 lg:px-5 rounded-full bg-dark-purple-2 cursor-pointer"
            >
                <span>Connect with Metamask</span>
            </div>
            <div 
                @click="connectWithCoinbase"
                class="pt-2 lg:pt-3 pb-1 lg:pb-2 px-4 lg:px-5 mt-2 rounded-full bg-dark-purple-2 cursor-pointer"
            >
                <span>Connect with Coinbase</span>
            </div>
        </div>
        <!-- END Wallet choices -->
    </div>
    <!-- END Header - supply + wallet -->

    <!-- START Main container -->
    <div v-if="!noProvider" class="pt-20 lg:pt-4 h-full flex flex-col justify-between items-center">
        <div class="flex flex-col items-center">
            <!-- <div 
                v-if="mintMode && mintMode === 'dutch'"
                class="lg:px-20 grid grid-cols-3 lg:w-full grid-flow-row border"
            >
                <div class="flex flex-col justify-items-end items-center w-20 border rounded-full">
                    <span class="font-f56 text-4xl lg:text-5xl">{{ currentDutchTime.h < 10 ? '0' : ''}}{{ currentDutchTime.h }}</span>
                    <span class="font-akiraNorm text-xs text-pink-purple">HRS</span>
                </div>
                <div class="flex flex-col justify-items-end items-center w-20 border">
                    <span class="font-f56 text-4xl lg:text-5xl">{{ currentDutchTime.m < 10 ? '0' : ''}}{{ currentDutchTime.m }}</span>
                    <span class="font-akiraNorm text-xs text-pink-purple">MINS</span>
                </div>
                <div class="flex flex-col justify-items-end items-center w-20 border">
                    <span class="font-f56 text-4xl lg:text-5xl">{{ currentDutchTime.s < 10 ? '0' : ''}}{{ currentDutchTime.s }}</span>
                    <span class="font-akiraNorm text-xs text-pink-purple">SECS</span>
                </div>
            </div> -->
            <!-- <div
                v-if="mintMode && mintMode === 'dutch'"
                class=" flex lg:gap-10 lg:mb-2"
            >
                <div class="flex flex-col justify-center items-center w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4">
                    <span class="font-f56 text-lg lg:text-4xl">{{ currentDutchTime.h < 10 ? '0' : ''}}{{ currentDutchTime.h }}</span>
                    <span class="font-akiraNorm text-pink-purple text-sm">HRS</span>
                </div>
                <div class="flex flex-col justify-center items-center w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4">
                    <span class="font-f56 text-lg lg:text-4xl">{{ currentDutchTime.m < 10 ? '0' : ''}}{{ currentDutchTime.m }}</span>
                    <span class="font-akiraNorm text-pink-purple text-sm">MINS</span>
                </div>
                <div class="flex flex-col justify-center items-center w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4">
                    <span class="font-f56 text-lg lg:text-4xl">{{ currentDutchTime.s < 10 ? '0' : ''}}{{ currentDutchTime.s }}</span>
                    <span class="font-akiraNorm text-pink-purple text-sm">SECS</span>
                </div>
            </div> -->
            <!-- START Title -->
            <div 
                v-if="mintMode"
                class="flex flex-col justify-center"
            >
                <h1 
                    v-if="mintMode === 'dutch'"
                    class="text-3xl lg:text-7xl font-bold font-akira text-center"
                >
                        <span class="font-akiraOut">META LEGENDS</span><br>PUBLIC SALE
                </h1>
                <h1
                    v-else-if="mintMode === 'whitelist'"
                    class="text-3xl lg:text-7xl font-bold font-akira text-center"
                >
                    <span class="font-akiraOut">META LEGENDS</span><br>WHITELIST SALE
                </h1>
                <div class="flex justify-center">
                    <a href="https://opensea.io/collection/meta-legends" target="_blank"><div class="bg-twitter-blue lg:mt-12 px-5 lg:px-10 lg:text-xl pt-2 pb-1 lg:pt-3 lg:pb-2 rounded-full font-bold cursor-pointer border-2 border-opacity-80">Open Sea collection</div></a>
                </div>
            </div>
            <!-- END Title -->
        </div>
        <div class="">
            <!-- START Step countdown -->
            <!-- <div class="" v-if="mintMode && mintMode === 'dutch'">
                <h2 class="text-center mb-2 lg:text-3xl font-akira opacity-70">Next step in :</h2>
                <div
                    :class="[currentStepTime.m <= 1  ? 'text-red' : '']"
                    class="flex justify-center gap-5 lg:gap-10 mb-6"
                >
                    <div class="flex flex-col justify-center items-center w-28 h-28 lg:w-36 lg:h-36 rounded-full border-4">
                        <span class="font-f56 text-4xl lg:text-7xl">{{ currentStepTime.m < 10 ? '0' : ''}}{{ currentStepTime.m }}</span>
                        <span class="font-akiraNorm text-pink-purple">MINS</span>
                    </div>
                    <div class="flex flex-col justify-center items-center w-28 h-28 lg:w-36 lg:h-36 rounded-full border-4">
                        <span class="font-f56 text-4xl lg:text-7xl">{{ currentStepTime.s < 10 ? '0' : ''}}{{ currentStepTime.s }}</span>
                        <span class="font-akiraNorm text-pink-purple">SECS</span>
                    </div>
                </div>
            </div> -->
            <!-- END Step countdown -->

            


            <!-- START Price progression -->
            <!-- <div 
                v-if="currentPrice && dutchInfo && dutchProgressPrice != null"
                class="flex items-center mx-2 lg:w-1/2 lg:mx-auto my-2 lg:my-5"
            >
                <div>
                    <span class="lg:text-lg font-bold lg:mr-1">{{ toEth(dutchInfo.startPrice) }}</span>
                    <span class="lg:text-sm">ETH</span>
                </div>
                <div class="w-full h-4 lg:h-7 border mx-1 lg:mx-3 lg:p-1 border-purple">
                    <div 
                        :style="{width: `${dutchProgressPrice}%`}"
                        class="bg-gradient-to-l from-blue to-purple h-full"
                    ></div>
                </div>
                <div>
                    <span class="lg:text-lg font-bold lg:mr-1">{{ toEth(dutchInfo.reservePrice) }}</span>
                    <span class="lg:text-sm">ETH</span>
                </div>
            </div> -->
            <!-- END Price progression -->
            
            <div class="pb-5 lg:pb-4 lg:pt-2">
                <!-- START Supply -->
                <div 
                    v-if="supply"
                    class="flex justify-center lg:text-2xl lg:py-3">
                    Supply :<span class="text-pink font-bold ml-2 lg:ml-4">{{ supply.total - supply.current }}</span> / <span class="">{{ supply.total }}</span>
                </div>
                <!-- END Supply -->

                <!-- START Mint button -->
                <div v-if="mintMode && ((mintMode === 'whitelist' && isWhitelisted && whitelistMaxClaimable > 0) || (mintMode === 'dutch' && publicSaleMaxClaimable > 0))">
                    <div
                        v-if="currentAccount" 
                        class="flex justify-center"
                    >
                        <div
                            @click="mint" 
                            class="text-5xl lg:text-6xl font-bold bg-gradient-to-l from-blue to-purple pt-4 lg:pt-6 pb-2 lg:pb-3 px-10 lg:px-20 select-none rounded-lg cursor-pointer">
                            MINT
                        </div>
                    </div>
                    
                    <!-- END Mint button -->
                    
                    <!-- START Mint counter -->
                    <div 
                        v-if="mintMode && currentAccount && (publicSaleMaxClaimable > 0 || whitelistMaxClaimable > 0)" 
                        class="flex justify-center mt-2 lg:mt-5"
                    >
                        <div class="flex items-center">
                            <div 
                                :class="[currentMintCounter > 1 ? '' : 'opacity-0 pointer-events-none']"
                                class="border-4 lg:border-8 w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center border-purple cursor-pointer"
                                @click="updateCounterBy(-1)"
                            >
                                <span class="font-bold text-2xl lg:text-4xl flex items-center justify-center">
                                        <img class="h-5 w-5 lg:h-7 lg:w-7 select-none" src="../assets/images/icons/moins.svg" alt="">
                                    </span>
                            </div>
                            <div class="text-2xl lg:text-4xl font-akira bg-gradient-to-l from-blue to-purple p-3 mx-2 lg:mx-3 select-none">
                                {{ currentMintCounter }}
                            </div>
                            <template v-if="mintMode === 'dutch'">
                                <div 
                                    :class="[currentMintCounter < publicSaleMaxClaimable ? '' : 'opacity-0 pointer-events-none']"
                                    class="border-4 lg:border-8 w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center border-purple cursor-pointer"
                                    @click="updateCounterBy(1)"
                                >
                                    <span class="font-bold text-2xl lg:text-4xl flex items-center justify-center">
                                        <img class="h-5 w-5 lg:h-7 lg:w-7 select-none" src="../assets/images/icons/plus-mint.svg" alt="">
                                    </span>
                                </div>
                            </template>
                            <template v-else-if="mintMode === 'whitelist'">
                                <div 
                                    v-if="currentMintCounter < whitelistMaxClaimable"
                                    class="border-4 lg:border-8 w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center border-purple cursor-pointer"
                                    @click="updateCounterBy(1)"
                                >
                                    <span class="font-bold text-2xl lg:text-4xl flex items-center justify-center">
                                        <img class="h-5 w-5 lg:h-7 lg:w-7 select-none" src="../assets/images/icons/plus-mint.svg" alt="">
                                    </span>
                                </div>
                            </template>
                        </div>
                    </div>
                    <!-- END Mint counter -->
                </div>
                <div v-else-if="currentAccount && mintMode && mintMode ==='whitelist' && !isWhitelisted">
                    <p class="text-center">You are not whitelisted</p>
                </div>
                <div v-else>
                    <div
                        @click="connectWithMetamask" 
                        class="text-5xl lg:text-6xl font-bold bg-gradient-to-l from-blue to-purple pt-4 lg:pt-6 pb-2 lg:pb-3 px-10 lg:px-20 rounded-lg cursor-pointer">
                        MINT
                    </div>
                </div>

                <!-- START Current price -->
                <div 
                    v-if="currentPrice"
                    class="flex justify-center mt-20 mb-6 lg:mb-2"
                >
                    <div class="flex flex-col items-center px-5 py-2 bg-gradient-to-l from-dark-red to-red">
                        <div class="font-akira lg:pb-2">CURRENT PRICE</div>
                        <div class="lg:text-4xl py-2 px-5 lg:px-10 rounded-lg bg-dark-purple">
                            <span class="font-bold">{{ toEth(currentPrice) }}</span>
                            <span class="lg:text-lg">ETH</span>
                        </div>
                    </div>
                </div>
                <!-- END Current price -->
            </div>
        </div>
    </div>
    <div v-else class="h-full flex justify-center items-center">
        <p class="lg:text-2xl text-center border border-opacity-5 lg:w-2/3 lg:py-10 lg:px-5 rounded-lg bg-dark-purple">
            You're browser or configuration don't seem to support Metamask or other wallet, try on <span class="font-bold">Chrome</span> ( in public navigation )
        </p>
    </div>
    <!-- END Main container -->
</div>
</template>

<script>
import Web3 from 'web3';
import { ethers, providers } from "ethers";
import WalletLink from 'walletlink';
import abi from '../utils/ABI.json';
import { scale } from '../utils/helper.js';

export default {
    data(){
        return {
            isChoicesWalletVisible: false,
            currentAccount: null,
            isCoinbaseWallet: false,
            // final contract - contractAddress: '0x03a504197329C0A1BD550888f6dB1934a10621EB',
            //contractAddress: '0x53c89818BBa1F31B7CcB1aEE54C110D2a910d7FD',
            contractAddress: '0xF9c362CDD6EeBa080dd87845E88512AA0A18c615',
            mintMode: null,
            currentPrice: null,
            supply: {current: 0, total: 0},
            currentMintCounter: 1,
            noProvider: false,
            alchemyUrl : "https://eth-mainnet.alchemyapi.io/v2/toGF8Hixa2jf8A4rSbaAN4kXfW0wYDIA",
            /* ========== START DUTCH AUCTION ========== */
            dutchEndTime: null,
            dutchInfo: { startPrice: 0, reservePrice: 0, timeRange: 0},
            currentDutchTime : { h: 0, m: 0, s: 0 },
            currentStepTime : { m: 0, s: 0 },
            dutchProgressPrice: 0,
            publicSaleClaimed: null,
            totalPublicSaleClaimable: null,
            publicSaleMaxClaimable: null,
            /* ========== END DUTCH AUCTION ========== */
            /* ========== START WHITELIST ========== */
            whitelistClaimed: null,
            totalWhitelistClaimable: null,
            whitelistMaxClaimable: null,
            isWhitelisted: false,
            /* ========== END WHITELIST ========== */
            
        }
    },
    mounted(){

        if(!window.ethereum){
            // this.noProvider = true;
            // return;
            // Using web3js
            this.web3 = new Web3(this.alchemyUrl);
            this.getTotalPublicSaleClaimed();

            // Using ethers.js
            //const provider = new ethers.providers.JsonRpcProvider(url);
            
        } else {
            // Initialiser Web3
            this.web3 = new Web3(Web3.givenProvider);

            //Récupérer l'account si l'utilisateur s'était connecté auparavant
            this.isAlreadyConnected().then(result => {
                if(result.length > 0) {
                    this.currentAccount = result[0];
                    // TODO Faire un event quand il y a un account de dispo

                    console.log('Already connected')
                    // Récupérer le total de NFT que peu claim un utilisateur en public sale
                    this.getTotalPublicSaleClaimable().then(result => {
                        this.totalPublicSaleClaimable = result;
                        // Récupérer le total de NFT qu'a claim un utilisateur en public sale
                        this.getPublicSaleClaimed().then(result => {
                            this.publicSaleClaimed = result;
                            this.getMaxPublicSaleClaimable();
                        })
                    });

                    // Récupérer le total de NFT que peu claim un utilisateur en whitelist
                    this.getTotalWhitelistClaimable().then(result => {
                        this.totalWhitelistClaimable = result;
                        // Récupérer le total de NFT qu'a claim un utilisateur en whitelist
                        this.getWhitelistClaimed().then(result => {
                            this.whitelistClaimed = result;
                            this.getMaxWhitelistClaimable();
                        })
                    });

                    // Vérifier que l'utilisateur est whitlisté
                    this.getIsWhitelisted();

                    this.getTotalPublicSaleClaimed();
                }
            }).catch(error => {
                console.log('Erreur dans la récupération de l\'address');
                console.log("----------------");
                console.log(error);
                console.log("----------------");
            })

            // Ecouter si l'account de l'utilisateur change (ex: déconnexion)
            window.ethereum.on('accountsChanged', (accounts) => {
                console.log('Account changed')
                // L'utilisateur s'est déconnecté.
                if(accounts.length === 0) {
                    this.currentAccount = null;
                } else {
                    // Récupérer le total de NFT que peu claim un utilisateur en public sale
                    this.getTotalPublicSaleClaimable().then(result => {
                        this.totalPublicSaleClaimable = result;
                        // Récupérer le total de NFT qu'a claim un utilisateur en public sale
                        this.getPublicSaleClaimed().then(result => {
                            this.publicSaleClaimed = result;
                            this.getMaxPublicSaleClaimable();
                        })
                    });

                    // Récupérer le total de NFT que peu claim un utilisateur en whitelist
                    this.getTotalWhitelistClaimable().then(result => {
                        this.totalWhitelistClaimable = result;
                        // Récupérer le total de NFT qu'a claim un utilisateur en whitelist
                        this.getWhitelistClaimed().then(result => {
                            this.whitelistClaimed = result;
                            this.getMaxWhitelistClaimable();
                        })
                    });
                    
                }
            });
        }
        

        // Initialisation de walletLink pour la connexion avec Coinbase
        this.walletLink = new WalletLink({
                appName: 'Meta Legends',
        })
        this.ethereum = this.walletLink.makeWeb3Provider(Web3.givenProvider, 1);
        
        // Tester si l'utilisateur s'est connecté avec Coinbase et si oui afficher le bouton de déconnexion 
        if(Web3.givenProvider?.providers) {
            if(providers[0]?.isWalletLink) {
                console.log('connexion avec Coinbase');
                this.isCoinbaseWallet = true;
            }
        }
        

        // Récupérer le mode de mint (dutch ou whitelist)
        this.getMintMode().then(result => {
            this.mintMode = result;
            // Si c'est une dutch calculer sa date de fin pour le chrono + gestion du current price
            if(result === "dutch") {
                // Récupérer la supply en public sale
                this.getPublicSupply();

                this.getDutchAuction().then(result => {
                    const dutchDuration = this.getDutchAuctionDuration(result.startPrice, result.reservePrice, result.priceStep, result.timeRange);

                    //console.log('début de la dutch : ' + result.startTime);
                    //console.log('durée de la dutch : ' + dutchDuration);

                    // Exposé la fin de la dutch
                    this.dutchEndTime = Number(result.startTime) + Number(dutchDuration)

                    // Exposé les informations de la dutch
                    this.dutchInfo.startPrice = result.startPrice;
                    this.dutchInfo.reservePrice = result.reservePrice;
                    this.dutchInfo.timeRange = result.timeRange;
                    
                    // Récupérer une première fois le current price de la dutch
                    this.getPublicSalePriceFor(Math.floor(Date.now() / 1000)).then(result => {
                            this.currentPrice = result;
                            // Récupérer une première fois la progression du current price de la dutch
                            this.dutchProgressPrice = this.getPriceProgression(
                                this.dutchInfo.startPrice, 
                                this.dutchInfo.reservePrice, 
                                result
                            )
                    })
                    
                }).catch(error => {
                    console.log("Erreur dans le renvoit des informations de la dutch");
                    console.log("----------------");
                    console.log(error);
                    console.log("----------------");
                })
            } else if(result === 'whitelist'){
                // Récupérer la supply en whitelist
                this.getWhitelistSupply();

                // Récupérer le prix actuel
                this.getWhitelistSalePrice();
            }

        }).catch(error => {
            console.log("Erreur dans la récupération du mode de mint");
            console.log("----------------");
            console.log(error);
            console.log("----------------");
        })

        // Boucle d'update
        setInterval(() => {
            this.update();
        }, 30000);
    },
    methods: {
        update(){
            if(this.mintMode && this.mintMode === 'whitelist'){
                // Récupérer le nb total de NFT minté en whitelist
                this.getTotalWhitelistClaimed();
            }

            if(this.dutchEndTime) {
                // timestamp actuel en secondes
                const currentTimestamp = Math.floor(Date.now() / 1000);
                const difference = Number(this.dutchEndTime - currentTimestamp);

                if(difference >= 0) {
                    // Conversion en heures minutes secondes
                    this.currentDutchTime.h = Math.floor(difference / 3600);
                    this.currentDutchTime.m = Math.floor(difference % 3600 / 60);
                    this.currentDutchTime.s = Math.floor(difference % 3600 % 60);

                    // Chrono des steps
                    const nbStep = Math.floor(difference / this.dutchInfo.timeRange);
                    const tn = nbStep * this.dutchInfo.timeRange;
                    const stepRestInSeconds = difference - tn;
                    this.currentStepTime.m = Math.floor(stepRestInSeconds % 3600 / 60);
                    this.currentStepTime.s = Math.floor(stepRestInSeconds % 3600 % 60);
                }
                // Mettre à jour le currentPrice
                this.getPublicSalePriceFor(Math.floor(Date.now() / 1000)).then(result => {
                    this.currentPrice = result;
                })

                // Mettre à jour le nombre de NFT minté en public sale
                this.getTotalPublicSaleClaimed();
            }
        },
        toggleWalletChoices(){
            this.isChoicesWalletVisible = !this.isChoicesWalletVisible;
        },
        async connectWithMetamask(){
            if (typeof this.web3 !== 'undefined') {
                if (this.web3?.currentProvider?.isMetaMask === true) {
                    console.log('MetaMask is active');
                    this.currentAccount = (await window.ethereum.enable())[0];
                    this.isChoicesWalletVisible = false;
                    this.isCoinbaseWallet = false;
                } else {
                    console.log('MetaMask is not available');
                    window.open('https://metamask.io/', '_blank');
                }
            } else {
                console.log('web3 is not found');
                window.open('https://metamask.io/', '_blank');
            }
        },
        async connectWithCoinbase(){
            this.ethereum.enable().then(accounts => {
                this.currentAccount = accounts[0];
                this.isChoicesWalletVisible = false;
                this.isCoinbaseWallet = true;
            }).catch(error => {
                console.log("Erreur lors de la connexion Coinbase");
                console.log("----------------");
                console.log(error);
                console.log("----------------");
            })
        },
        async disconnectCoinbase(){
            console.log(this.ethereum)
            this.ethereum.close()
        },
        async isAlreadyConnected(){
            const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
            const accounts = await provider.listAccounts();
            return accounts;
        },
        async getMintMode(){
            const contract = await new this.web3.eth.Contract(abi, this.contractAddress);
            let mintMode = "";

            await contract.methods.whitelistSaleActivated().call()
            .then((result) => {
                if(result) {
                    mintMode = "whitelist"
                }
            })
            .catch((error) => {
                console.log("Erreur dans la récuparation de l'état de la Whitelist");
                console.log("----------------");
                console.log(error);
                console.log("----------------");
            })

            await contract.methods.publicSaleActivated().call()
            .then((result) => {
                if(result) {
                    mintMode = "dutch"
                }
            })
            .catch((error) => {
                console.log("Erreur dans la récuparation de l'état de la Dutch");
                console.log("----------------");
                console.log(error)
                console.log("----------------");
            })

            return mintMode;
        },
        async mint(){
            const contract = await new this.web3.eth.Contract(abi, this.contractAddress);
            // console.log(this.currentPrice);
            // console.log(this.currentMintCounter);
            // console.log(this.mintMode)
            //console.log(this.currentAccount);
            if(this.mintMode === 'dutch') {
                await contract.methods.publicSaleMint(this.currentMintCounter).send({from: this.currentAccount, value: this.currentPrice * this.currentMintCounter})
            } else if(this.mintMode === 'whitelist') {
                await contract.methods.whitelistSaleMint(this.currentMintCounter).send({from: this.currentAccount, value: this.currentPrice  * this.currentMintCounter})
            }
        },
        /* ========== START DUTCH AUCTION ========== */
        async getDutchAuction(){
            const contract = await new this.web3.eth.Contract(abi, this.contractAddress);
            let dutchAuction = null;

            await contract.methods.dutchAuction().call()
            .then(function(result){
                dutchAuction = result;
            })
            .catch(function(error){
                console.log('Erreur dans la récupération des infos de la Dutch');
                console.log("----------------");
                console.log(error);
                console.log("----------------");
            })
            return dutchAuction;
        },
        getDutchAuctionDuration(startPrice, reservePrice, priceStep, timeRange){
            const nbStep =  this.getNbStep(startPrice, reservePrice, priceStep);
            return nbStep * timeRange;
        },
        getNbStep(startPrice, reservePrice, priceStep){
            return (this.toEth(reservePrice) - this.toEth(startPrice)) / - this.toEth(priceStep);
        },
        async getPublicSalePriceFor(timestamp) {
            const contract = await new this.web3.eth.Contract(abi, this.contractAddress);
            let publicSalePrice = null;

            await contract.methods.getPublicSalePriceFor(timestamp).call()
            .then(function(result){
                publicSalePrice = result;
            })
            .catch(function(error){
                console.log('Erreur dans la récupération du public sale price')
                console.log("----------------");
                console.log(error);
                console.log("----------------");
            })
            return publicSalePrice;
        },
        getPriceProgression(startPrice, reservePrice, currentPrice){
            return scale(currentPrice, startPrice, reservePrice, 0, 100);
        },
        async getPublicSupply(){
            const contract = await new this.web3.eth.Contract(abi, this.contractAddress);
            await contract.methods.publicSupply().call()
            .then(result => {
                this.supply.total = result;
            }).catch(error => {
                console.log('Erreur dans la récupération de la public supply');
                console.log("----------------");
                console.log(error);
                console.log("----------------");
            })
        },
        async getTotalPublicSaleClaimed(){
            const contract = await new this.web3.eth.Contract(abi, this.contractAddress);
            await contract.methods.totalPublicSaleClaimed().call()
            .then(result => {
                this.supply.current = result;
            }).catch(error => {
                console.log('Erreur dans la récupération du nombre total de NFTs minté en public sale');
                console.log("----------------");
                console.log(error);
                console.log("----------------");
            })
        },
        async getTotalPublicSaleClaimable(){
            const contract = await new this.web3.eth.Contract(abi, this.contractAddress);
            let totalPublicSaleClaimable = null;

            await contract.methods.totalPublicSaleClaimable().call()
            .then(result =>{
                totalPublicSaleClaimable = result;
            }).catch(error => {
                console.log('Erreur dans la récupération du nombre total de NFTs que peut minté un utilisateur en public sale');
                console.log("----------------");
                console.log(error);
                console.log("----------------");
            })
            return totalPublicSaleClaimable;
        },
        async getPublicSaleClaimed(){
            const contract = await new this.web3.eth.Contract(abi, this.contractAddress);
            let publicSaleClaimed = null;

            await contract.methods.publicSaleClaimed(this.currentAccount).call()
            .then(result => {
                publicSaleClaimed = result;
            }).catch(error => {
                console.log('Erreur dans la récupération du nombre de NFTs qu\'à minté un utilisateur en public sale');
                console.log("----------------");
                console.log(error);
                console.log("----------------");
            })
            return publicSaleClaimed;
        },
        getMaxPublicSaleClaimable(){
            this.publicSaleMaxClaimable = Number(this.totalPublicSaleClaimable) - Number(this.publicSaleClaimed);
        },
        /* ========== END DUTCH AUCTION ========== */
        /* ========== START WHITELIST ========== */
        async getIsWhitelisted(){
            const contract = await new this.web3.eth.Contract(abi, this.contractAddress);

            await contract.methods.isWhitelisted(this.currentAccount).call()
            .then(result => {
                this.isWhitelisted = result;
            }).catch(error => {
                console.log('Erreur dans la récupération de la présence dans la whitelist d\'un utilisateur');
                console.log("----------------");
                console.log(error);
                console.log("----------------");
            })
        },
        async getWhitelistSupply(){
            const contract = await new this.web3.eth.Contract(abi, this.contractAddress);
            await contract.methods.whitelistSupply().call()
            .then(result => {
                this.supply.total = result;
            }).catch(error => {
                console.log('Erreur dans la récupération de la whitelist supply');
                console.log("----------------");
                console.log(error);
                console.log("----------------");
            })
        },
        async getTotalWhitelistClaimed(){
            const contract = await new this.web3.eth.Contract(abi, this.contractAddress);
            await contract.methods.totalWhitelistClaimed().call()
            .then(result => {
                this.supply.current = result;
            }).catch(error => {
                console.log('Erreur dans la récupération du nombre total de NFT minté en whitelist');
                console.log("----------------");
                console.log(error);
                console.log("----------------");
            })
        },
        async getWhitelistSalePrice(){
            const contract = await new this.web3.eth.Contract(abi, this.contractAddress);
            await contract.methods.whitelistSalePrice().call()
            .then(result => {
                this.currentPrice = result;
            }).catch(error => {
                console.log('Erreur dans la récupération du prix de la whitelist');
                console.log("----------------");
                console.log(error);
                console.log("----------------");
            })
        },
        async getTotalWhitelistClaimable(){
            const contract = await new this.web3.eth.Contract(abi, this.contractAddress);
            let totalWhitelistClaimable = null;

            await contract.methods.totalWhitelistClaimable().call()
            .then(result =>{
                totalWhitelistClaimable = result;
            }).catch(error => {
                console.log('Erreur de récupération du nombre total de NFT que peu minté un utilisateur en whitelist');
                console.log("----------------");
                console.log(error);
                console.log("----------------");
            })
            return totalWhitelistClaimable
        },
        async getWhitelistClaimed(){
            const contract = await new this.web3.eth.Contract(abi, this.contractAddress);
            let whitelistClaimed = null;

            await contract.methods.whitelistClaimed(this.currentAccount).call()
            .then(result => {
                whitelistClaimed = result;
            }).catch(error => {
                console.log('Erreur de récupération du nombre total de NFT qu\'a minté un utilisateur en whitelist');
                console.log("----------------");
                console.log(error);
                console.log("----------------");
            })

            return whitelistClaimed
        },
        getMaxWhitelistClaimable(){
            this.whitelistMaxClaimable = Number(this.totalWhitelistClaimable) - Number(this.whitelistClaimed);
        },
        /* ========== END WHITELIST ========== */
        shortenAddress(address){
            return `${address.substring(0, 6)}...${address.substr(-4,4)}`;
        },
        toEth(wei){
            return wei / 1000000000000000000;
        },
        updateCounterBy(i){
            this.currentMintCounter += i;
        }
    },
    watch: {
        currentAccount: function(value){
            if(value){
                // Vérifier que l'utilisateur est whitlisté
                this.getIsWhitelisted();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.pink-glow {
    box-shadow: 0 0 20px rgba(214, 19, 214, 0.8),
}

.frame-mint {
    background-image: url('../assets/images/frame-mint.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}
</style>