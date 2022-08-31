<template>
<div class="font-bronova bg-dark-purple h-screen" ref="background">
    <div class="flex flex-col items-end">
        <div 
            class="flex justify-between items-center lg:gap-5 bg-gray-200 py-2 px-5 lg:py-3 lg:px-10 lg:m-5 rounded-full lg:text-lg cursor-pointer"
            @click="toggleChoice"
        >
            <span v-if="isConnected">{{ currentAccount }}</span>
            <span v-else class="pointer-events-none">Connect</span>
            <div class="lg:w-4 lg:h-4 rounded-full" :class="[isConnected ? 'bg-green-500' : 'bg-red-500']"></div>
        </div>
        <div v-if="isChoiceActive && !isConnected" class="fixed top-20 border border-opacity-10 lg:mr-5 lg:p-5 bg-dark-purple-2 rounded-lg text-white">
            <div class="lg:py-2 lg:px-8 bg-purple rounded-full cursor-pointer" @click="connectWithCoinbase">Connect with <span class="font-bold">Coinbase</span></div>
            <div class="lg:py-2 lg:px-8 bg-purple rounded-full lg:mt-5 cursor-pointer" @click="connectWithMetamask">Connect with <span class="font-bold">Metamask</span></div>
        </div>
    </div>
    <div class="inline-flex text-white bg-darkest-purple lg:px-10 lg:py-3 cursor-pointer rounded-full" @click="disconnectCoinbase">Disconnect coinbase</div>
    <div class="flex justify-center lg:mb-10" v-if="maxClaimable && maxClaimable > 0">
        <button 
            v-if="isConnected && currentPrice && mintMode[currentMintMode]"
            class="bg-green-500 text-white font-bold text-3xl lg:pt-3 lg:pb-2 lg:px-20 lg:rounded-lg cursor-pointer" 
            @click="mint"
        >
            MINT
        </button>
    </div>
    <div v-else class="flex justify-center text-white lg:text-2xl lg:mb-10">
        <p>You can not mint</p>
    </div>
    <div v-if="isConnected && maxClaimable > 0" class="flex items-center text-white justify-center lg:mb-10">
            <div 
                v-if="currentMintCounter > 1"
                class="lg:w-14 lg:h-14 bg-purple rounded-full flex justify-center items-center cursor-pointer"
                @click="updateCounterBy(-1)"
            >
                <span class="font-bold text-3xl pointer-events-none">-</span>
            </div>
            <div class="flex items-center lg:p-5 lg:mx-10 rounded-lg bg-darkest-purple-2 border border-opacity-10">
               <span class="lg:text-3xl">{{ currentMintCounter }}</span> 
            </div>
            <div 
                v-if="maxClaimable && currentMintCounter < maxClaimable"
                class="lg:w-14 lg:h-14 bg-purple rounded-full flex justify-center items-center cursor-pointer"
                @click="updateCounterBy(1)"
            >
                <span class="font-bold text-3xl pointer-events-none">+</span>
            </div>
        </div>
    <div class="lg:w-1/2 mx-auto grid grid-cols-2 grid-flow-row auto-rows-max rounded-lg border text-white">
        <div class="border-r border-b lg:p-3">Current block</div>
        <div class="lg:p-3 border-b">{{ currentBlockNumber }}</div>
        <div class="border-r lg:p-3">Current block timestamp</div>
        <div class="lg:p-3">{{ currentBlockTimestamp }}</div>
    </div>
    <div>
        <h1 class="text-center text-white lg:mt-10 lg:mb-5 lg:text-4xl">GLOBAL</h1>
        <div class="lg:w-1/2 mx-auto grid grid-cols-2 grid-flow-row auto-rows-max rounded-lg border text-white">
            <div class="border-r lg:p-3">Supply</div>
            <div class="lg:p-3">{{ globalSupply.current }} / {{ globalSupply.total }}</div>
        </div>
    </div>
    <div v-if="mintMode[currentMintMode] === 'dutch'">
        <h1 class="text-center text-white lg:mt-10 lg:mb-5 lg:text-4xl">DUTCH</h1>
        <div class="lg:w-1/2 mx-auto grid grid-cols-2 grid-flow-row auto-rows-max rounded-lg border text-white">
            <div class="border-r border-b lg:p-3">Start time</div>
            <div class="lg:p-3 border-b">{{ dutchStartTime }}</div>
            <div class="border-r border-b lg:p-3">End time</div>
            <div class="lg:p-3 border-b">{{ dutchEndTime }}</div>
            <div class="border-r border-b lg:p-3">Current price</div>
            <div class="lg:p-3 border-b">{{ currentPrice / 1000000000000000000 }} ETH</div>
            <div class="border-r lg:p-3">Supply</div>
            <div class="lg:p-3">{{ supply.current }} / {{ supply.total }}</div>
        </div>
        <div class="mx-auto lg:w-1/2 lg:mt-5 flex items-center text-white">
            <div class="flex-none">{{ toEth(dutchStartPrice)}} ETH</div>
            <div class="w-full lg:h-5 border lg:mx-3 rounded-full overflow-hidden">
                <div class="h-full bg-gray-300" :style="{width: `${progress}%`}"></div>
            </div>
            <div class="flex-none">{{ toEth(dutchEndPrice)}} ETH</div>
        </div>
    </div>
    <div v-else-if="mintMode[currentMintMode] === 'whitelist'">
        <h1 class="text-center text-white lg:mt-10 lg:mb-5 lg:text-4xl">WHITELIST SALE</h1>
        <div class="lg:w-1/2 mx-auto grid grid-cols-2 grid-flow-row auto-rows-max rounded-lg border text-white">
            <div class="border-r border-b lg:p-3">Current price</div>
            <div class="lg:p-3 border-b">{{ currentPrice / 1000000000000000000 }} ETH</div>
            <div class="border-r lg:p-3">Supply</div>
            <div class="lg:p-3">{{ supply.current }} / {{ supply.total }}</div>
        </div>
    </div>
    <div v-else>
        <h1 class="text-center text-white lg:mt-10 lg:mb-5 lg:text-4xl">No mint mode</h1>
    </div>
    
</div>
</template>

<script>
import Web3 from 'web3';
import abi from '../utils/ABI.json';
import { scale } from '../utils/helper.js';
import { ethers } from "ethers";
import WalletLink from 'walletlink';

export default {
    data(){
        return {
            isConnected: false,
            currentBlockNumber: null,
            currentBlockTimestamp: null,
            dutchStartPrice: null,
            dutchEndPrice: null,
            dutchStartTime: null,
            dutchEndTime: null,
            currentPrice: null,
            progress: 0,
            currentAccount: null,
            mintMode: [null, 'whitelist', 'dutch'],
            currentMintMode: 0,
            isChoiceActive: false,
            ethereum: null,
            supply: { current: 0, total: 0 },
            globalSupply: { current: 0, total: 0 },
            publicSaleClaimed: null,
            whitelistClaimed: null,
            totalPublicSaleClaimable: null,
            totalWhitelistClaimable: null,
            currentMintCounter: 1,
            maxClaimable: null,
            loadedValue: 0,
            address: '0x03a504197329C0A1BD550888f6dB1934a10621EB',
        }
    },
    mounted(){
        
        this.web3 = new Web3(Web3.givenProvider);

        this.isMetaMaskConnected().then(result => {
            if(result.length === 0){
                this.isConnected = false;
            } else {
                this.isConnected = true;
            }
        }).catch(error => {console.log(error)})
            
        this.isMetaMaskConnected().then(result => {
            this.currentAccount = result[0];
            this.loadedValue += 1;
        }).catch(error => {console.log(error)})
        
        // Nombre de mint possible en Dutch et Whitelist
        this.getTotalPublicSaleClaimable();
        this.getTotalWhitelistClaimable();

        // max claimable
        // this.getWhitelistClaimed();
        
                
        window.ethereum.on('accountsChanged', (accounts) => {
            console.log('Account changed')
            console.log(accounts)
            // L'utilisateur s'est déconnecté.
            if(accounts.length === 0) {
                this.currentAccount = null;
                this.isConnected = false;
            }
        });

        //Récupérer le mode de mint (Whitelist / Dutch)
        this.getMintMode()
        .then(() => {
            if(this.mintMode[this.currentMintMode] === 'dutch') {
                this.getPublicSupply();
            } else if(this.mintMode[this.currentMintMode] === 'whitelist'){
                this.getWhitelistSalePrice();
                this.getWhitelistSupply();
            }
        }).catch(error => {console.log(error)})

        
        this.getMaxSupply();


        this.getBlockNumber().then( result => { 
            this.currentBlockNumber = result;
            this.getBlockTimestamp(); 
        }).catch(error => {console.log(error)})
        
        setInterval(() => {
            // Block info debug
            this.getBlockNumber().then( result => { this.currentBlockNumber = result } );
            this.getBlockTimestamp();

            // Dutch auction
            // TODO Sortir ça du setInterval
            this.getDutchAuction()
            .then(result => { 
                this.dutchStartTime = this.timestampToDate(result.startTime, false)

                this.dutchStartPrice = result.startPrice;
                this.dutchEndPrice = result.reservePrice;

                // Durée de la dutch en heures minutes secondes
                const dutchDuration = this.getDutchAuctionDuration(result.startPrice, result.reservePrice, result.priceStep, result.timeRange);
                const dutchEndTimeTimestamp = this.getdutchEndTime(result.startTime, dutchDuration);
                this.dutchEndTime = this.timestampToDate(dutchEndTimeTimestamp, false);
                this.progress = this.getProgression(result.startTime, dutchEndTimeTimestamp);
            })
            .catch(err => {console.log(err)})
            
            if(this.mintMode[this.currentMintMode] === 'dutch') {
                this.getPublicSalePriceFor(Math.floor(Date.now() / 1000))
                .then(result => {
                    this.currentPrice = result
                })
                .catch(err => {console.log(err)})
            }

            if(this.mintMode[this.currentMintMode] === 'dutch'){
                this.getTotalPublicSaleClaimed();
            } else if(this.mintMode[this.currentMintMode] === 'whitelist') {
                this.getTotalWhitelistClaimed();
            }
            this.getTotalSupply();
        }, 1000);
    },
    methods: {
        toggleChoice(){
            this.isChoiceActive = !this.isChoiceActive;
        },
        async isMetaMaskConnected(){
            const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
            const accounts = await provider.listAccounts();
            return accounts;
        },
        async getTotalWhitelistClaimable(){
            const contract = await new this.web3.eth.Contract(abi, this.address);

            await contract.methods.totalWhitelistClaimable().call()
            .then(result =>{
                this.totalWhitelistClaimable = result;
                this.loadedValue += 1;
                //console.log('Total whitelist claimable : ' + result)
            }).catch(error => {console.log(error)})
        },
        async getPublicSaleClaimed(){
            const contract = await new this.web3.eth.Contract(abi, this.address);
            
            await contract.methods.publicSaleClaimed(this.currentAccount).call()
            .then(result => {
                //console.log(`${result} claimed for ${this.currentAccount} in Dutch mode`);
                this.publicSaleClaimed = result;
                this.loadedValue += 1;
            }).catch(error => {console.log(error)})
        },
        async getWhitelistClaimed(){
            const contract = await new this.web3.eth.Contract(abi, this.address);
            
            await contract.methods.whitelistClaimed(this.currentAccount).call()
            .then(result => {
                //console.log(`${result} claimed for ${this.currentAccount} in Whitelist mode`)
                this.whitelistClaimed = result;
                this.loadedValue += 1;
            }).catch(error => {console.log(error)})
        },
        async getTotalPublicSaleClaimable(){
            const contract = await new this.web3.eth.Contract(abi, this.address);
            
            await contract.methods.totalPublicSaleClaimable().call()
            .then(result =>{
                this.totalPublicSaleClaimable = result;
                this.loadedValue += 1;
                //console.log('Total public sale claimable : ' + result)
            }).catch(error => {console.log(error)})
        },
        async getMaxClaimable(mintMode){
            // if(mintMode === 'dutch') {
                
            // } else if(mintMode === 'whitelist') {

            // }
        },
        async mint(){
            const accounts = await this.isMetaMaskConnected();
            const contract = await new this.web3.eth.Contract(abi, this.address);
            console.log(this.currentPrice);
            console.log(this.currentMintCounter);
            console.log(this.mintMode[this.currentMintMode])
            console.log(accounts[0]);
            if(this.mintMode[this.currentMintMode] === 'dutch') {
                await contract.methods.publicSaleMint(this.currentMintCounter).send({from: accounts[0], value: this.currentPrice * this.currentMintCounter})
            } else if(this.mintMode[this.currentMintMode] === 'whitelist') {
                await contract.methods.whitelistSaleMint(this.currentMintCounter).send({from: accounts[0], value: this.currentPrice * this.currentMintCounter})
            }
            // await contract.methods.publicSaleMint(1).send({from: accounts[0]})
            // .then(function(result){
            //     console.log('success')
            //     console.log(result)
            // })
            // .catch(function(error){
            //     console.log('error')
            //     console.log(error)
            // })
        },
        async getBlockNumber(){
            return await this.web3.eth.getBlockNumber()
        },
        async getBlockTimestamp() {
            await this.web3.eth.getBlock(this.currentBlockNumber)
            .then(result => {
                this.currentBlockTimestamp = this.timestampToDate(result.timestamp, false); 
            }).catch(error => {console.log(error)})
        },
        async getDutchAuction(){
            const contract = await new this.web3.eth.Contract(abi, this.address);
            let dutchAuction = null;

            await contract.methods.dutchAuction().call()
            .then(function(result){
                dutchAuction = result;
            })
            .catch(function(error){
                console.log('error')
                console.log(error)
            })
            return dutchAuction;
        },
        async connectWithMetamask(){
            if (typeof this.web3 !== 'undefined') {
                this.web3.eth.getAccounts((error, accounts) => {
                    console.log(accounts)
                })

                if (this.web3?.currentProvider?.isMetaMask === true) {
                    console.log('MetaMask is active');
                    this.currentAccount = (await window.ethereum.enable())[0];
                    this.isConnected = true;
                
                } else {
                    console.log('MetaMask is not available');
                    //MetamaskDisConnected();
                    window.open('https://metamask.io/', '_blank');
                }
            } else {
                console.log('web3 is not found');
                //MetamaskDisConnected();
                window.open('https://metamask.io/', '_blank');
            }
        },
        async connectWithCoinbase(){
            this.walletLink = new WalletLink({
                appName: 'Meta Legends',
            })
            this.ethereum = this.walletLink.makeWeb3Provider(Web3.givenProvider, 1);
            
            this.ethereum.enable().then(accounts => {
                console.log(`User's address is ${accounts[0]}`)
                this.currentAccount = accounts[0];
                this.isConnected = true;
                this.isChoiceActive = false;
            }).catch(error => {console.log(error)})
        },
        async disconnectCoinbase(){
            console.log(this.ethereum)
            this.ethereum.close()
        },
        async getWeb3(){
            if (typeof this.web3 !== 'undefined') {
                // console.log('web3 is enabled')
                // const walletLink = new WalletLink({
                //     appName: 'Meta Legends',
                // })
                // console.log(Web3.givenProvider)
                // const ethereum = walletLink.makeWeb3Provider(Web3.givenProvider.providers[1], 1);
                // ethereum.enable().then(accounts => {
                //     console.log(`User's address is ${accounts[0]}`)
                //     this.web3.eth.defaultAccount = accounts[0]
                // })

                // console.log(this.web3.currentProvider);
                this.web3.eth.getAccounts((error, accounts) => {
                    console.log(accounts)
                })

                if (this.web3?.currentProvider?.isMetaMask === true) {
                    console.log('MetaMask is active');
                    this.currentAccount = (await window.ethereum.enable())[0];
                    this.isConnected = true;
                
                } else {
                    console.log('MetaMask is not available');
                    //MetamaskDisConnected();
                    window.open('https://metamask.io/', '_blank');
                }
            } else {
                console.log('web3 is not found');
                //MetamaskDisConnected();
                window.open('https://metamask.io/', '_blank');
            }
        },
        async getPublicSupply(){
            const contract = await new this.web3.eth.Contract(abi, this.address);
            await contract.methods.publicSupply().call()
            .then(result => {
                this.supply.total = result;
            }).catch(error => {console.log(error)})
        },
        async getWhitelistSupply(){
            const contract = await new this.web3.eth.Contract(abi, this.address);
            await contract.methods.whitelistSupply().call()
            .then(result => {
                this.supply.total = result;
            }).catch(error => {console.log(error)})
        },
        async getTotalPublicSaleClaimed(){
            const contract = await new this.web3.eth.Contract(abi, this.address);
            await contract.methods.totalPublicSaleClaimed().call()
            .then(result => {
                this.supply.current = result;
            }).catch(error => {console.log(error)})
        },
        async getTotalWhitelistClaimed(){
            const contract = await new this.web3.eth.Contract(abi, this.address);
            await contract.methods.totalWhitelistClaimed().call()
            .then(result => {
                this.supply.current = result;
            }).catch(error => {console.log(error)})
        },
        async getTotalSupply(){
            const contract = await new this.web3.eth.Contract(abi, this.address);
            await contract.methods.totalSupply().call()
            .then(result => {
                this.globalSupply.current = result;
            }).catch(error => {console.log(error)})
        },
        async getMaxSupply(){
            const contract = await new this.web3.eth.Contract(abi, this.address);
            await contract.methods.maxSupply().call()
            .then(result => {
                this.globalSupply.total = result;
            }).catch(error => {console.log(error)})
        },
        async getPublicSalePriceFor(timestamp) {
            const contract = await new this.web3.eth.Contract(abi, this.address);
            let publicSalePrice = null;

            await contract.methods.getPublicSalePriceFor(timestamp).call()
            .then(function(result){
                publicSalePrice = result;
            })
            .catch(function(error){
                console.log('error')
                console.log(error)
            })
            return publicSalePrice;
        },
        async getWhitelistSalePrice(){
            const contract = await new this.web3.eth.Contract(abi, this.address);
            await contract.methods.whitelistSalePrice().call()
            .then(result => {
                this.currentPrice = result;
            }).catch(error => {console.log(error)})
        },

        async getMintMode(){
            // 0xf6425cA8Bb2CF5a80E0bb3b0Ae78a82D327be61e
            const contract = await new this.web3.eth.Contract(abi, this.address);
            
            await contract.methods.whitelistSaleActivated().call()
            .then((result) => {
                console.log(result)
                if(result) {
                    this.currentMintMode = 1;
                }
                this.loadedValue += 1;
            })
            .catch((error) => {
                console.log(error)
            })

            await contract.methods.publicSaleActivated().call()
            .then((result) => {
                if(result) {
                    this.currentMintMode = 2;
                }
                this.loadedValue += 1;
            })
            .catch((error) => {
                console.log(error)
            })
        },
        getDutchAuctionDuration(startPrice, reservePrice, priceStep, timeRange) {
            const nbStep =  (this.toEth(reservePrice) - this.toEth(startPrice)) / - this.toEth(priceStep);
            const durationInSeconds = nbStep * timeRange;
            return this.convertInHMS(durationInSeconds);
        },
        getdutchEndTime(startTime, duration){
            const durationInSeconds = Math.floor(duration.hours * 3600) + Math.floor(duration.minutes * 60) + Math.floor(duration.seconds);
            const total = Number(startTime) + Number(durationInSeconds); 
            // 1637257665 en secondes
            // 594000 en secondes

            return total;
        },
        convertInHMS(s) {
            const hours = Math.floor(s / 3600);
            const minutes = Math.floor(s % 3600 / 60);
            const seconds = Math.floor(s % 3600 % 60);
            return {hours, minutes, seconds}
        },
        toEth(wei){
            return wei / 1000000000000000000;
        },
        timestampToSeconds(timestamp) {
            const date = new Date(timestamp * 1000);
            return date.getSeconds();
        },
        timestampToDate(timestamp, isMs) {
            const multiplier = isMs ? 1 : 1000;
            const date = new Date(timestamp * multiplier);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = "0" + date.getMinutes();
            const seconds = "0" + date.getSeconds();
            return `${day}/${month}/${year} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
        },
        getProgression(startTime, endTime){
            const currentTimestamp = Date.now() / 1000;
            return scale(currentTimestamp, Number(startTime), Number(endTime), 0, 100)
        },
        updateCounterBy(i){
            this.currentMintCounter += i;
        }
    },
    watch: {
        currentAccount: function() {
            this.getWhitelistClaimed();
            this.getPublicSaleClaimed();
        },
        loadedValue: function(value) {
            if(value < 4) return;
            
            if(this.mintMode[this.currentMintMode] === 'dutch' && value === 6) {
                console.log('All value loaded for dutch');
                this.maxClaimable = this.totalPublicSaleClaimable - this.publicSaleClaimed;
            } else if(this.mintMode[this.currentMintMode] === 'whitelist' && value === 5) {
                console.log('All value loaded for whitelist');
                this.maxClaimable = this.totalWhitelistClaimable - this.whitelistClaimed;
                console.log(this.maxClaimable)

            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>