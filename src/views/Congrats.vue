<template>
<div class="w-screen h-screen bg-gradient-to-b from-darkest-purple to-darkest-blue flex justify-center lg:pt-10 relative overflow-hidden">
    <!-- <div class="absolute h-full w-full top-0 z-50 pointer-events-none" ref="door">
        <img class="absolute top-0 left-0 pointer-events-none" src="../assets/images/door/door-left.png" alt="" ref="leftDoor">
        <img class="absolute top-0 right-0 pointer-events-none" src="../assets/images/door/door-right.png" alt="" ref="rightDoor">
        <img class="absolute top-0 left-0 pointer-events-none" src="../assets/images/door/chain.png" alt="" ref="chain1">
        <img class="absolute left-1/2 lock pointer-events-none" src="../assets/images/door/lock.png" alt="" ref="lock">
        <img class="absolute left-1/2 padlock pointer-events-none" src="../assets/images/door/padlock.png" alt="" ref="padlock">
        <img class="absolute top-0 right-0 chain-right pointer-events-none" src="../assets/images/door/chain.png" alt="" ref="chain2">
    </div> -->
    <div class="absolute top-2 lg:top-8 h-20 lg:h-24 w-full flex justify-center z-40 pointer-events-none">
        <img src="../assets/images/logo-avatar-title.svg" alt="">
    </div>
    <div class="absolute bottom-24 lg:bottom-8 font-bronova text-white flex flex-col lg:w-1/2 justify-center items-center z-40 pointer-events-none">
        <h1 class="text-5xl lg:text-7xl text-center font-bold mb-5 lg:mb-3 text-shadow-white">Congrats Tiffany&nbsp;!</h1>
        <p class="font-bronova text-white w-full text-center lg:mt-3 text-base lg:text-xl xl:text-lg">
            You are the first hero ! 🌀
            <br>
            The council is very proud of you !
            <br>
        </p> 
    </div>
</div>
</template>

<script>
import Atropos from 'atropos/vue/atropos-vue.esm.js';
//import { gsap } from 'gsap';

export default {
    name: 'Congrats',
    components: {
        Atropos,
    },
    mounted() {
        document.addEventListener('keyup', (e) => {
            if (e.code === "Space") {
                this.reveal();
            }
        });
    },
    methods: {
        // reveal(){
        //     const tl = new gsap.timeline({
        //         onComplete: () => {
        //             this.$refs.door.style.display = 'none';
        //         }
        //     });
        //     tl.to(this.$refs.lock, {
        //         y: '-=100',
        //         opacity: 0,
        //     })
        //     tl.to(this.$refs.padlock, {
        //         y: '+=100',
        //         opacity: 0,
        //     })
        //     tl.to(this.$refs.chain1, {
        //         y: '+=100',
        //         opacity: 0,
        //     }, 1)
        //     tl.to(this.$refs.chain2, {
        //         y: '+=100',
        //         opacity: 0,
        //     }, 1.2)
        //     tl.to(this.$refs.leftDoor, {
        //         xPercent: -100,
        //         duration: 5
        //     }, 2)
        //     tl.to(this.$refs.rightDoor, {
        //         xPercent: 100,
        //         duration: 5
        //     }, 2)
        // }
    }
}
</script>

<style lang="scss" scoped>
.atropos-desktop {
    width: 1300px;
    height: 711px;
}
.atropos-mobile {
    width: 340px;
    height: 307px;
}

.atropos-inner {
    border-radius: 50px;
}

.text-shadow-white {
      text-shadow: 0 0 32px rgba(255, 255, 255, 0.79),
}

.chain-right {
    transform: scaleX(-1);
}
.lock {
    transform: translateX(-50%);
    top: 40%;
}
.padlock {
    transform: translateX(-50%);
    top: 50%
}

@media (max-width: 1330px) {
    .atropos-desktop {
        width: 1100px;
        height: 611px;
    }
}
@media (min-width: 480px) {
    .atropos-mobile {
        display: none;
    }
}
@media (max-width: 480px) {
    .atropos-desktop {
        display: none;
    }
    .atropos-mobile {
        display: block;
    }
}
</style>