<template>
<div class="bg-dark-purple font-bronova text-white lg:pb-16 overflow-hidden">
    <!-- Header -->
    <div class="flex justify-center py-5 lg:py-8 lg:mb-16 bg-darkest-purple-2">
        <img class="h-10" src="../assets/images/title-logo.svg" alt="" srcset="">
    </div>
    <!-- Rules -->
    <div class="pb-10 lg:pb-0 px-5 lg:px-28 pt-8 lg:pt-10">
        <h1 class="font-bold text-xl lg:text-4xl mb-2 lg:mb-4 text-shadow-white">Rules for the second online easter egg</h1>
        <ul class="lg:text-lg text-sm">
            <li class="py-2"><span class="font-bold">Rule 1</span> : Do not talk about online easter egg 2.</li>
            <li class="py-2"><span class="font-bold">Rule 2</span> : <span class="font-bold">DO NOT</span> talk about online easter egg 2.</li>
            <li class="py-2"><span class="font-bold">Rule 3</span> : The puzzle answer is a <span class="font-bold">word</span>. <span class="lg:hidden"><br></span> <span class="text-xs italic">( not the word "word", I see you nerd )</span></li>
            <li class="py-2"><span class="font-bold">Rule 4</span> : The answer must be sent to the channel <span class="bg-purple bg-opacity-50 p-2 rounded-lg">#🥚┃egg-online-answer</span> on Discord.</li>
            <li class="underline py-2 font-bold"><span class="font-bold">Rule 5</span> : ⚠️ WARNING ⚠️ You can give only ONE answer so think carefully.</li>
        </ul>
    </div>
    <!-- Morse -->
    <div class="lg:grid lg:grid-cols-2 lg:grid-rows-2 justify-items-center lg:px-28 lg:py-16">
        <div class="">
            <img class="lg:h-32 transform rotate-1" src="../assets/images/mysteryUO2/uo2_1.png" alt="">
        </div>
        <div class="">
            <img class="lg:h-32 transform -rotate-1" src="../assets/images/mysteryUO2/uo2_2.png" alt="">
        </div>
        <div class="">
            <img class="lg:h-32 transform -rotate-1" src="../assets/images/mysteryUO2/uo2_3.png" alt="">
        </div>
        <div class="">
            <img class="lg:h-32 transform rotate-2" src="../assets/images/mysteryUO2/uo2_4.png" alt="">
        </div>
    </div>
    <!-- Caesar-->
    <div class="flex justify-center my-20 lg:my-0">
        <img class="w-full h-full lg:w-auto lg:h-40 transform -rotate-1" src="../assets/images/mysteryUO2/uo2_5.png" alt="" srcset="">
    </div>
    <!-- Shape grid -->
    <div class="grid grid-cols-3 lg:grid-cols-8 gap-2 lg:gap-3 px-2 lg:px-28 lg:py-10 pb-10 lg:pb-0">
        <div 
            v-for="(item, index) in shuffledShapeColorWords"
            :key="`item-${index}`"
            class="flex flex-col items-center p-2 lg:p-5 bg-dark-purple-2 rounded-lg"
        >
            <div class="h-12 w-12 lg:h-20 lg:w-20" :class="[item.color, item.shape]"></div>
            <span class="text-xs lg:text-sm my-2 lg:my-5 opacity-50">( {{item.color }} )</span>
            <span class="lg:text-xl">{{ item.word }}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            shapes: ['triangle', 'circle', 'square', 'diamond', 'hexagon'],
            colors: ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'purple'],
            words: ['cracker','eggs','truck','cellar','drop','fridge','bear','afternoon','son','card','touch','tiger','locket','direction','squirrel','boy','pest','pail','authority','meal','bed','chance','sheet','road','geese','toothpaste','industry','donkey','stick','crib','land','guide','attraction','bucket','horses'],
            shuffledShapeColorWords: []
        }
    },
    mounted() {
        const shapeColorWords = this.buildShapeWordLists();
        this.shuffledShapeColorWords = this.shuffleArray(shapeColorWords);
        
    },
    methods: {
        buildShapeWordLists(){
            const shapeColorWords = []
            
            // Combine colors and shapes
            this.shapes.forEach(shape => {
                this.colors.forEach(color => {
                    shapeColorWords.push({shape, color})
                })
            })
            
            // Add word for each shape color combination
            shapeColorWords.forEach((shapeColor, index) => {
                shapeColor['word'] = this.words[index];
            });

            return shapeColorWords;
        },
        shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
    }
}
</script>

<style lang="scss" scoped>
.red {
    background: #E74C3C;
}
.green {
    background: #27AE60;
}
.blue {
    background: #3498DB;
}
.yellow {
    background: #F1C40F;
}
.orange {
    background: #E67E22;
}
.pink {
    background: #F48FB1;
}
.purple {
    background: #8E44AD;
}

.triangle {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.circle {
    border-radius: 100%;
}

.diamond {
 transform: rotate(45deg) scale(0.7);
}

.hexagon {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    transform: scaleX(1.1);
}

.text-shadow-white {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.6),
}
</style>