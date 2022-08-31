<template>
<div class="bg-dark-purple font-bronova text-white 2xl:px-28 lg:h-screen lg:p-5">
    <div 
        v-if="hasPopup" 
        class="h-screen w-screen fixed bg-darkest-purple bg-opacity-50 top-0 left-0 z-40 backdrop-filter backdrop-blur-md cursor-pointer"
        @click="togglePopup"
    >
        <template v-if="popupToShow === 'wire-cutter'">
            <div class="bg-dark-purple-2 flex w-5/6 lg:w-1/3 p-2 lg:p-5 rounded-md lg:rounded-xl absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                
                    <div class="h-20 lg:h-40 w-20 lg:w-40 flex-none bg-dark-purple p-1 lg:p-3 mr-2 lg:mr-10 rounded-md lg:rounded-lg">
                        <img class="h-full w-full" src="../assets/images/wire-cutter.svg">
                    </div>
                    <div class="flex flex-col justify-center">
                            <h1 class="text-lg lg:text-3xl lg:mb-3">Congratulations</h1>
                            <p class="text-sm lg:text-base">
                                You have unlocked <span class="font-bold">the Meta Legends wire cutter</span> !
                            </p>
                    </div>
                
            </div>
        </template>
        <template v-else-if="popupToShow === 'manual'">
            <div class="bg-dark-purple-2 p-2 lg:p-5 rounded-md lg:rounded-xl absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <div class="grid lg:grid-flow-col lg:auto-cols-max lg:grid-rows-4 gap-1 lggap-4">
                    <div 
                        v-for="(p, index) in patternsList"
                        :key="`pattern-${index}`"
                        class="grid grid-rows-1 grid-flow-col auto-cols-max bg-dark-purple p-1 lg:p-3"
                    >
                        <div class="h-10 w-10 lg:h-20 lg:w-20 flex-none mr-5 lg:mr-10">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 27 27"
                            class="h-full w-full bg-dark-purple-2">
                            <path :d="`M${getPosFromTile(p.pattern[0]).x} ${getPosFromTile(p.pattern[0]).y} L${getPosFromTile(p.pattern[1]).x} ${getPosFromTile(p.pattern[1]).y} L${getPosFromTile(p.pattern[2]).x} ${getPosFromTile(p.pattern[2]).y} z`" fill="#5d40ae"/>
                            </svg>
                        </div>
                        
                        <div class="flex">
                            <div v-for="(c, index) in p.color" :key="`color-${index}`" :class="c" class="w-3 lg:w-5 h-full rounded-full lg:mx-2 mx-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="popupToShow === 'game-over'">
            <div class="bg-dark-purple-2 flex w-5/6 lg:w-1/3 p-2 lg:p-5 rounded-md lg:rounded-xl absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                
                    <div class="h-20 lg:h-40 w-20 lg:w-40 flex-none bg-dark-purple p-1 lg:p-3 mr-2 lg:mr-10 rounded-md lg:rounded-lg">
                        <img class="h-full w-full" src="../assets/images/bomb.svg">
                    </div>
                    <div class="flex flex-col justify-center">
                            <h1 class="text-lg lg:text-3xl lg:mb-3">Game Over</h1>
                            <p class="text-sm lg:text-base">
                                The bomb exploded ! Fortunately in the Metaverse it is always possible to have a second chance! !
                            </p>
                            <div class="cursor-pointer bg-purple lg:text-xl text-center lg:pt-2 lg:pb-1 lg:rounded-lg lg:mt-2" @click="reload()">
                                RETRY
                            </div>
                    </div>
                
            </div>
        </template>
        <template v-if="popupToShow === 'congratulation'">
            <div class="bg-dark-purple-2 flex w-full lg:w-1/2 p-2 lg:p-5 rounded-md lg:rounded-xl absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <div class="flex flex-col justify-center">
                            <h1 class="text-xl lg:text-3xl lg:mb-3">Congratulations !</h1>
                            <p>Send this keyword :<br><span class="font-bold underline">software-recording-opposition-compromise</span><br> in the following google form : </p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfAt_8XtrBJmh2eX3yJb1qA7qbJcrVGWTvdTbxV3l96Zs7hCw/viewform?usp=sf_link" target='_blank'>
                            <p class="font-bold text-xl bg-purple text-center pt-2 pb-1 rounded-lg lg:mt-5">
                                    Click me !  
                            </p>
                            </a>
                    </div>
                
            </div>
        </template>

    </div>
    <!-- grid -->
    <div class="lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-3 h-full">
        <div class="flex flex-col col-50">
            <div class="flex items-end mb-2 lg:mb-3">
                <div class="w-12 h-12 lg:h-14 lg:w-14 mr-2 lg:mr-5 border-image flex justify-center items-center text-xl lg:text-2xl font-bold">1</div>
                <h1 class="text-xl lg:text-2xl">Left to right, top to bottom</h1>
            </div>
            <div ref="canvasContainer" class="relative h-full cursor-move">
                <canvas ref="hideCanvas" class="absolute left-0 top-0"></canvas>
                <canvas ref="lightCanvas" class="absolute left-0 top-0"></canvas>
            </div>
        </div>
        <div class="flex flex-col col-50">
            <div class="flex items-end mb-2 lg:mb-3 mt-2 lg:mt-0">
                <div class="w-12 h-12 lg:h-14 lg:w-14 mr-2 lg:mr-5 border-image flex justify-center items-center text-xl lg:text-2xl font-bold">2</div>
                <h1 class="text-xl lg:text-2xl">Unlock the wire cutters</h1>
            </div>
            <div class="flex justify-center items-center h-full">
                <div class="bg-dark-purple-2 grid grid-cols-3 grid-rows-3 gap-2 p-2 lg:p-5 font-f56 rounded-lg lg:rounded-xl">
                    <div
                        v-for="n in 9" :key="`number-${n}`"
                        class="text-lg w-20 h-20 lg:w-24 lg:h-24 bg-purple rounded-lg lg:rounded-xl flex justify-center items-center cursor-pointer button-pad"
                        @click="pressButton($event, n)">
                        <span class="select-none pointer-events-none">{{ n }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col col-50">
            <div class="flex items-end mb-2 lg:mb-3 mt-2 lg:mt-0">
                <div class="w-12 h-12 lg:h-14 lg:w-14 mr-2 lg:mr-5 border-image flex justify-center items-center text-xl lg:text-2xl font-bold">3</div>
                <h1 class="text-xl lg:text-2xl">Follow the light</h1>
            </div>
            <div class="flex flex-col lg:flex-row items-center justify-between lg:justify-evenly h-full">
                <!-- light button -->
                <div class="bg-dark-purple-2 w-20 h-20 lg:w-24 lg:h-24 rounded-lg lg:rounded-xl flex justify-center items-center">
                    <div class="w-14 h-14 lg:h-20 lg:w-20 bg-red-500 rounded-full cursor-pointer" @click="playPattern()"></div>
                </div>
                <div class="bg-dark-purple-2 grid grid-cols-3 grid-rows-3 gap-1 lg:gap-2 p-2 lg:p-5 font-f56 rounded-lg lg:rounded-xl">
                    <div 
                        v-for="n in 9" :key="`light-${n}`"
                        class="text-lg w-20 h-20 lg:w-24 lg:h-24 bg-purple rounded-lg lg:rounded-xl"
                        :data-id="`light-${n - 1}`"
                    >
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col relative">
            <div v-if="!hasUnlockedWireCutter" class="">
                <div class="absolute w-full h-full z-30 bg-darkest-purple bg-opacity-50 backdrop-filter backdrop-blur-sm lg:rounded-xl"></div>
                <img class="absolute z-30 h-28 lg:h-32 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" src="../assets/images/lock.svg" alt="">
            </div>
            
            <div class="flex items-end lg:p-2 mb-2 lg:mb-3 mt-2 lg:mt-0">
                <div class="w-12 h-12 lg:h-14 lg:w-14 mr-2 lg:mr-5 border-image flex justify-center items-center text-xl lg:text-2xl font-bold">4</div>
                <h1 class="text-xl lg:text-2xl">Cut in the right order</h1>
            </div>
            <div class="flex flex-col lg:flex-row justify-between h-full">
                <!-- wires container -->
                <div class="w-full relative lg:mr-10 h-full order-2 lg:order-1">
                    <div class="absolute h-full w-10 bg-dark-purple-2 z-10"></div>
                    <div class="absolute right-0 h-full w-10 bg-dark-purple-2 z-10"></div>
                    <!-- wires -->
                    <div class="h-full relative flex flex-col justify-between z-20 px-3 py-4 lg:py-8">
                        <div 
                            v-for="(w, i) in colors" :key="`wire-${i}`" 
                            class="h-5 cursor-pointer my-5 lg:my-0 flex" @click="cutWire($event, i)"
                        >
                            <div class="h-full  w-1/2 rounded-l-full pointer-events-none origin-top-left wire" :class="w"></div>
                            <div class="h-full w-1/2 rounded-r-full pointer-events-none origin-top-right wire" :class="w"></div>
                        </div>
                    </div>
                </div>
                <div class="order-1 lg:order-2 flex flex-col items-center">
                    <div class="w-24 h-24 lg:w-32 lg:h-32 cursor-pointer lg:mb-2" @click="showPopup('manual')">
                        <img class="h-full w-full" src="../assets/images/book.svg">
                    </div>
                    <p class="text-center lg:text-sm font-bold">Wire cutting manual</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { gsap } from 'gsap';
import { isMobile, randomIntFromInterval } from '../utils/helper.js'

export default {
    data(){
        return {
            pattern: null,
            colors : ['red', 'green', 'blue', 'black', 'white'],
            patternsList: [
                { pattern: [1, 6, 8], color: ['white','red','blue','black','green']}, 
                { pattern: [0, 1, 4], color: ['green', 'black', 'blue', 'white', 'red']}, 
                { pattern:[1, 3, 4], color: ['green', 'blue', 'white', 'red', 'black']}, 
                { pattern:[4, 8, 6], color: ['black', 'red', 'green', 'blue', 'white']}, 
                {pattern: [2, 8, 6], color: ['white', 'black', 'blue', 'red', 'green']}, 
                {pattern: [3, 5, 7], color: ['red', 'green', 'blue', 'black', 'white']}, 
                {pattern: [0, 2, 8], color: ['red', 'black', 'blue', 'green', 'white']}, 
                {pattern: [4, 5, 8], color: ['blue', 'black', 'white', 'red', 'green']}, 
                {pattern: [1, 5, 7], color: ['white', 'red', 'black', 'green', 'blue']}, 
                {pattern: [3, 6, 7], color: ['red', 'blue', 'green', 'black', 'white']}, 
                {pattern: [0, 2, 6], color: ['green', 'blue', 'black', 'white', 'red']}, 
                {pattern: [2, 3, 8], color: ['black', 'red', 'green', 'white', 'blue']}
            ],
            isLock: true,
            hasUnlockedWireCutter: false,
            hasPopup: false,
            popupToShow: null,
        }
    },
    mounted() {
        this.$nextTick(() => {
            const code = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            this.hideCode = this.shuffleArray(code).slice(0,6);
            this.buttonsPressed = [],
            
            this.size = this.getContainerCanvasSize();
            
            this.setCanvasSize();
            
            this.displayNumbers();
            this.displayLightEffect();

            this.pattern = this.pickRandomPattern()
            this.order = this.getOrder();
            this.userOrder = [];
        })
    },
    methods: {
        getContainerCanvasSize(){
            return {
                width: this.$refs.canvasContainer.offsetWidth, 
                height: this.$refs.canvasContainer.offsetHeight 
            }
        },
        setCanvasSize(){
            this.$refs.hideCanvas.width = this.size.width;
            this.$refs.hideCanvas.height = this.size.height;

            this.$refs.lightCanvas.width = this.size.width;
            this.$refs.lightCanvas.height = this.size.height;
        },
        displayNumbers(){
            const hideCtx = this.$refs.hideCanvas.getContext('2d');
            
            const fontSize = this.size.height / 2;
            hideCtx.font = `${fontSize}px Arial`;
            hideCtx.fillStyle = "white";

            let xIterator = 0
            this.hideCode.forEach((nb, index) => {
                let y = index <= 2 ? fontSize : fontSize * 2;
                let x = (this.size.width / 3) * xIterator;  
                
                xIterator = xIterator >= 2 ? 0 : xIterator += 1;
                
                hideCtx.fillText(nb, x, y);
            })
        },
        displayLightEffect(){
            const lightCtx = this.$refs.lightCanvas.getContext('2d');
            lightCtx.fillStyle = 'rgb(0, 0, 0)';
            lightCtx.fillRect(0, 0, this.size.width, this.size.height);

            if(isMobile()) {
                this.$refs.lightCanvas.addEventListener('touchend', (e) => {
                    document.body.style.height = 'initial';
                    document.body.style.overflow = 'auto';
                });
                this.$refs.lightCanvas.addEventListener('touchmove', (e) => {
                    document.body.style.height = '100%';
                    document.body.style.overflow = 'hidden';
                    let touchPos = this.getTouchPos(this.$refs.lightCanvas, e);
                    this.moveLight(touchPos.x, touchPos.y, lightCtx, 40)
                });
            } else  {
                this.$refs.lightCanvas.addEventListener('mousemove', (e) => {
                    let mousePos = this.getMousePos(this.$refs.lightCanvas, e);
                    this.moveLight(mousePos.x, mousePos.y, lightCtx, 20);
                })
            }
        },
        getMousePos(canvas, evt) {
            const rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        },
        getTouchPos(canvas, evt) {
            const rect = canvas.getBoundingClientRect();
            return {
                x: evt.touches[0].clientX - rect.left,
                y: evt.touches[0].clientY - rect.top
            };
        },
        playPattern(){
            const tl = gsap.timeline();
            if(!this.pattern.pattern) return;
            this.pattern.pattern.forEach(p => {
                const el = document.querySelector(`[data-id="light-${p}"]`);
                tl.to(el, {
                    backgroundColor: '#A897D8',
                    duration: 0.3
                })
                tl.to(el, {
                    backgroundColor: '#5d40ae',
                    duration: 0.3
                })
            })
        },
        moveLight(x, y, context, lightSize) {
            context.globalCompositeOperation = 'source-over';  
            context.fillStyle = 'rgb(0, 0, 0)';
            context.fillRect(0, 0, this.size.width, this.size.height);
            context.globalCompositeOperation = 'destination-out';
            context.beginPath();
            context.arc(x, y, lightSize, 0, Math.PI * 2);
            context.fill();
        },
        pressButton(e, nb){
            const tl = gsap.timeline({ repeat: 1, yoyo:true});
            tl.to(e.target, {
                scale: 0.9,
                duration: 0.1,
                onComplete: () => {
                    e.target.classList.add('opacity');
                    e.target.style.pointerEvents = 'none';

                    this.buttonsPressed.push(nb);
                    
                    if(this.buttonsPressed.length === this.hideCode.length) {
                        if( JSON.stringify(this.buttonsPressed) == JSON.stringify(this.hideCode) ) {
                            this.hasUnlockedWireCutter = true;
                            this.showPopup('wire-cutter');
                            this.buttonsPressed = [];
                        } else {
                            this.showPopup('game-over');
                        }
                    }
                    
                }
            })
        },
        cutWire(e, nb){
            const wires = e.target.children;
            const tl = gsap.timeline({
                onStart: () => {
                    e.target.style.pointerEvents = 'none';
                }
            });
            tl.to(wires[0], {
                rotate: 5,
                opacity: 0,
            }, 0)
            tl.to(wires[1], {
                rotate: 5,
                opacity: 0,
            }, 0)
            this.userOrder.push(nb);

            if(this.order[this.userOrder.length - 1] != nb) {
                this.showPopup('game-over');
            }
            if(this.userOrder.length === this.order.length) {
                if(JSON.stringify(this.userOrder) === JSON.stringify(this.order)) {
                    this.showPopup('congratulation');
                }
            }
        },
        getPosFromTile(tile){
            const totalSize = 27;
            const tilePos = [
                {x: 0 , y: 0 },
                {x: totalSize / 2 , y: 0 },
                {x: totalSize , y: 0 },

                {x: 0 , y: totalSize / 2 },
                {x: totalSize / 2 , y: totalSize / 2 },
                {x: totalSize , y: totalSize / 2 },

                {x: 0 , y: totalSize },
                {x: totalSize / 2 , y: totalSize },
                {x: totalSize , y: totalSize },
            ]

            return tilePos[tile];
        },
        showPopup(name){

            this.hasPopup = !this.hasPopup;
            this.popupToShow = name;
        },
        pickRandomPattern(){
            return this.patternsList[randomIntFromInterval(0, this.patternsList.length - 1)]
        },
        getOrder(){
            const colorOrder = ['red', 'green', 'blue', 'black', 'white'];
            const order = [];
            this.pattern.color.forEach(color => {
                order.push(colorOrder.indexOf(color));
            });
            return order;
        },
        shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        },
        reload() {
            location.reload();
        },
        togglePopup() {
            if(this.popupToShow !== 'congratulation') { 
                this.hasPopup = !this.hasPopup 
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.border-image {
    background-image: url('../assets/images/border-gradient.svg');
    background-size: cover;
}

.stop-scrolling {
  height: 100%;
  overflow: hidden;
  border: solid 1px red;
}

.red {
    background: red;
}
.green {
    background: green;
}
.blue {
    background: blue;
}
.black {
    background: black;
    
}
.black:not(.wire) {
    border: solid 1px white;
}
.white {
    background: white;
}

.opacity {
    opacity: 0.5;
}

@media (max-width: 500px) {
    .col-50 {
        height: 50vh;
    }
}
</style>