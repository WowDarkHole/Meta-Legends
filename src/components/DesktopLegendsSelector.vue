<template>
    <div class="flex flex-col items-center selector cursor-pointer z-30" @click="onClick" ref="selector">
        <div 
            class="flex flex-col items-center mb-5 selector-group relative" 
            ref="selectorGroup"
            :class="{'preselected': index === preselected, 'selected': index === preselected}"
        >
            <img 
                class="absolute transform -translate-y-4 symbolColor" 
                :class="{'opacity-0': index !== preselected}" 
                :src="symbolColor" 
                ref="selectorSymbolColor"
            >
            <img 
                class="w-20 h-20 selector-symbol"
                :class="{'opacity-1': index !== preselected}" 
                ref="selectorSymbol" 
                :src="symbol"
            >
            <span class="text-sm pt-4 uppercase selector-name" ref="selectorName">{{ name }}</span>
        </div>
        <div 
            class="w-4 h-4 bg-white transform -rotate-45 rounded-full selector-bullet" 
            ref="selectorBullet"
            :style="{backgroundColor: index === preselected ? '#6339da' : 'white'}"
        ></div>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    name: 'DesktopLegendsSelector',
    props: {
        name: String,
        filename: String,
        symbol: String,
        symbolColor: String,
        index: Number,
    },
    data(){
        return {
            preselected: 0,
        }
    },
    mounted(){
        

    },
    methods: {
        onClick(){
            const preselectedElt = document.querySelector('.preselected');
            if(preselectedElt) {
                preselectedElt.classList.remove('preselected');
            }
            
            const selectedTl = gsap.timeline();

            const oldSelected = document.querySelector('.selected');
            if(this.$refs.selectorGroup.classList.contains('selected')) return;
            if(this.$refs.selectorGroup.classList.contains('preselected')) return;

            selectedTl.to(this.$refs.selectorGroup, {
                scale: 1.2,
                duration: 0.3,
                ease: "none",
                onStart: () => {
                    this.$refs.selectorGroup.classList.add('selected');
                },
                onComplete: () => {
                    const legendEvt = new CustomEvent("legend-changed", { detail : {filename: this.filename, index: this.index}});
                    document.dispatchEvent(legendEvt);
                }
            }, 0)
            selectedTl.to(this.$refs.selectorSymbol, {
                opacity: 0,
                y: '-=10',
                duration: 0.3,
                ease: "none",
            }, 0)
            selectedTl.to(this.$refs.selectorSymbolColor, {
                opacity: 1,
                duration: 0.3,
                ease: "none",
            }, 0)
            selectedTl.to(this.$refs.selectorBullet, {
                backgroundColor: "#6339da",
                duration: 0.1,
                ease: "none",
            }, 0)


            // ========== OLD SELECTED ========== 
            if(!oldSelected) return;
            selectedTl.to(oldSelected, {
                scale: 1,
                duration: 0.2,
                ease: "power1.out",
                onComplete: () => {
                    oldSelected.classList.remove('selected');
                }
            }, 0)
            selectedTl.to(oldSelected.children[0], {
                opacity: 0,
                duration: 0.1,
                ease: "none",
            }, 0)
            selectedTl.to(oldSelected.children[1], {
                opacity: 1,
                y: '+=10',
                duration: 0.1,
                ease: "none",
            }, 0)
            selectedTl.to(oldSelected.parentNode.children[1], {
                backgroundColor: "white",
                duration: 0.1,
                ease: "none",
            }, 0)
            
        },
    }
}
</script>

<style lang="scss" scoped>
.selector .selector-group:not(.selected, .preselected){
    opacity: 0.5;
    transition-duration: 0.2s;
}
.selector:hover .selector-group:not(.selected, .preselected) {
    opacity: 1;
    transition-duration: 0.2s;
}

.symbolColor {
    height: 100px;
    width: 100px;
    max-width: none;
}

.preselected {
    transform: scale(1.2, 1.2);

}
</style>