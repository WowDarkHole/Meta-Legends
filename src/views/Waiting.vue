<template>
<div class="video-container">
    <video v-if="!isMobile" ref="video" autoplay="autoplay" loop="loop" muted defaultMuted oncontextmenu="return false;" playsinline id="myVideo"  preload="auto" >
        <source src="../assets/videos/trailer-desktop.mp4" type="video/mp4">
    </video>
    <video v-else ref="video" autoplay="autoplay" loop="loop" muted defaultMuted oncontextmenu="return false;" playsinline id="myVideo"  preload="auto" >
        <source src="../assets/videos/trailer-mobile.mp4" type="video/mp4">
    </video>
</div>
</template>

<script>
import { isMobile } from '../utils/helper.js'

export default {
    name: 'Waiting',
    mounted() {
        this.$nextTick(() => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        })
    },
    computed: {
        isMobile() {
            return isMobile();
        }
    },
}
</script>

<style lang="scss" scoped>
.video-container {
    background: black;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);

    video {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
    }
}
</style>