<template>
<svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.14 24.39">
    <polygon class="cls-1" points="0 0 0 6.1 5.58 12.2 0 18.3 0 24.39 11.15 12.2 0 0" ref="left"/>
    <polygon class="cls-1 cls-2" points="8.99 0 8.99 6.1 14.57 12.2 8.99 18.3 8.99 24.39 20.14 12.2 8.99 0" ref="right"/>
</svg>
</template>

<script>
import { gsap } from 'gsap';

export default {
    name: 'Arrow',
    mounted(){
        const tl = gsap.timeline({repeat: -1, repeatDelay: 0.4})

        tl.to(this.$refs.left, {
            opacity: 1,
            duration: 0.2,
            ease: 'none'
        })
        tl.to(this.$refs.left, {
            opacity: 0.25,
            duration: 0.2,
            ease: 'none'
        })

        tl.to(this.$refs.right, {
            opacity: 1,
            duration: 0.2,
            ease: 'none'
        })
        tl.to(this.$refs.right, {
            opacity: 0.25,
            duration: 0.2,
            ease: 'none'
        });
    }
}
</script>

<style lang="scss" scoped>
.cls-1 {
    opacity: 0.25;
    fill: #FFF;
}
</style>