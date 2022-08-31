<template>
    <div class="overflow-y-hidden w-full text-white font-bronova my-3 lg:my-7" ref="faqContainer">
        <div 
            class="flex justify-between relative items-center py-2 px-1 lg:py-4 lg:px-16 test cursor-pointer question-container" 
            ref="questionContainer" 
            @click="onPlusBtnClick"
        >
            <div class="absolute opacity-0 w-full h-full left-0 bg-gradient-to-r from-blue to-purple z-10" ref="bgGradient"></div>
            <h2 class="text-sm lg:text-xl font-bold z-20">{{ question }}</h2>
            <button class="bg-dark-purple p-1 lg:p-4 z-20">
                <img class="w-2 h-2 lg:w-5 lg:h-5" src="../assets/images/icons/plus.svg" ref="plus">
            </button>
        </div>
        <p class="text-sm lg:text-xl py-2 px-1 lg:py-5 lg:px-16 bg-dark-purple-2" ref="answer" v-html="answer">
        </p>
    </div> 
</template>

<script>
import { gsap } from 'gsap';

export default {
    name: 'FAQItem',
    props: {
        question: String,
        answer: String,
    },
    data() {
        return {
            height: 0,
            totalHeight: 0,
            hasClick: false
        }
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.height = this.$refs.questionContainer.offsetHeight;
                this.$refs.faqContainer.style.height = `${this.height}px`; 
            }, 800);
        })
           
    },
    methods: {
        onPlusBtnClick() {
            const answerHeight = this.$refs.answer.scrollHeight;
            this.totalHeight = this.height + answerHeight;
            
            const tl = gsap.timeline();
            tl.to(this.$refs.faqContainer, {
                height: this.hasClick ? this.height : this.totalHeight,
                onComplete: () => {
                    this.hasClick = !this.hasClick;
                }
            }, 0)
            tl.to(this.$refs.bgGradient, {
                opacity: this.hasClick ? 0 : 1,
            },0)
            tl.to(this.$refs.plus, {
                rotate: this.hasClick ? '-=45deg' : '+=45deg',
            }, 0)
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    background-image: url('../assets/images/border-gradient-btn.svg');
    background-repeat: no-repeat;
}

@media (min-width: 768px) {
    .question-container:hover button{
        box-shadow: 0 0 10px rgba(159, 55, 208, 0.79);
        transition: 0.5s;
    }
    .question-container button{
        transition: 0.5s;
    }

    .question-container:hover h2{
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.79);
        transition: 0.5s;
    }
    .question-container h2{
        transition: 0.5s;
    }
}
</style>