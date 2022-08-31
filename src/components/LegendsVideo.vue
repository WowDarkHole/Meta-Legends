<template>
<div class="row-span-3 col-span-3 lg:col-span-3 lg:row-span-3 clip-path relative">
    <div class="w-full h-full relative">
        <div 
            class="hidden lg:block bg-black bg-opacity-60 absolute w-full h-full overlay z-10"  
            @mouseover="deleteOverlay" 
            ref="overlay"
            :class="{'lg:hidden': isLoad}"
        >
            <img class="absolute transform left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" src="../assets/images/rotation-3D.svg" alt="">
            <Arrow class="w-11 h-11 absolute right-8 top-1/2 transform -translate-y-1/2" />
            <Arrow class="w-11 h-11 absolute left-8 bottom-1/2 top-1/2 origin-top arrow-left" />
        </div>
        <div v-if="isLoad" class="absolute w-full h-full z-10 bg-dark-purple bg-opacity-40 flex justify-center items-center">
            <img class="absolute w-20 h-20 z-20" src="../assets/images/head-logo.svg" alt="">
            <div class="absolute w-36 h-36 rounded-full radial-gradient-white custom-animation-pulse opacity-50 z-10"></div>
        </div>
        <video 
            class="hidden lg:block absolute w-auto h-full z-0"
            muted
            @loadedmetadata="onLoadedMetadata" 
            @mousemove="onMouseMove" 
            @mouseleave="onMouseLeave" 
            ref="legendsVideo"
        >
        </video>
        <img :src="`${bucketUrl}${currentLegend}-${currentVersion}.gif`" class="lg:hidden gif" @load="onLoad">
    </div>
</div>
</template>

<script>
import Arrow from '../components/Arrow';
import { scale, isMobile } from '../utils/helper';
import { gsap } from 'gsap'; 

export default {
    name: 'LegendsVideo',
    components: { Arrow},
    data(){
        return {
            /* TODO Renseigner la variable d'env sur la prod */
            bucketUrl: `https://${process.env.VUE_APP_BUCKETEER_BUCKET_NAME}.s3.amazonaws.com/public/`,
            duration: null,
            currentLegend: 'celestial',
            currentVersion: 1,
            isLoading: true,
        }
    },
    mounted() {
        if(!isMobile()) {
            this.addSource()
        }

        document.addEventListener('version-changed', ({detail}) => {
            if(this.currentVersion === detail) return;
            this.currentVersion = detail;
  
            if(!isMobile()) {
                this.removeSource();
                this.addSource();
            } 
            if(isMobile) {
                this.updateGif()
            }
        });

        document.addEventListener('legend-changed', ({detail}) => {
            if(this.currentLegend === detail.filename) return;
            this.currentVersion = 1;
            this.currentLegend = detail.filename;
            if(!isMobile()) {
                this.removeSource();
                this.addSource();
            } 
            if(isMobile) {
                this.updateGif(); 
            }
        });
    },
    methods: {
        isReady(){
        },
        addSource() {
            this.isLoading = true;
            const source = document.createElement('source');
            source.setAttribute('src', `${this.bucketUrl}${this.currentLegend}-${this.currentVersion}.mp4`);
            source.setAttribute('type', 'video/mp4');

            this.$refs.legendsVideo.appendChild(source);
            this.$refs.legendsVideo.load();
        },
        removeSource() {
            const sourceDom = document.querySelector('source');
            this.$refs.legendsVideo.removeChild(sourceDom);
        },
        updateGif() {
            this.isLoading = true;
            const gif = document.querySelector('.gif');
            const parent = gif.parentNode;
            parent.removeChild(gif);


            const img = document.createElement('img');
            img.setAttribute('src', `${this.bucketUrl}${this.currentLegend}-${this.currentVersion}.gif`);
            img.classList.add('lg:hidden', 'gif')
            parent.appendChild(img);
            
        },
        deleteOverlay() {
            this.$refs.overlay.style.opacity = 0;
            this.$refs.overlay.style.display = 'none';
        },
        onLoadedMetadata(e) {
            this.isLoading = false;
            this.duration = e.target.duration;
            e.target.currentTime = this.duration / 2;
        },
        onMouseMove(e) {
            if(this.duration === null) return;
            const newCurrentTime = scale(e.offsetX, 0, 520, 0, this.duration);
            gsap.to(e.target, { currentTime: newCurrentTime, duration: 0.1, ease: "none" });
        },
        onMouseLeave(){
            if(this.duration === null) return;
            gsap.to(this.$refs.legendsVideo, { currentTime: this.duration / 2, duration: 0.5 });
        },
        onLoad(){
            this.isLoading = false
        }
    },
    computed: {
        isMobile() {
            return isMobile();
        },
        isLoad(){
            return this.isLoading;
        }
    }
}
</script>

<style lang="scss" scoped>
.arrow-left {
    transform: scaleX(-1) translateY(-50%);
}

.radial-gradient-white {
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 14%, rgba(255,255,255,0) 60%);
}

.custom-animation-pulse {
    animation-duration: 0.8s;
    animation-name: pulse;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
@keyframes pulse {
  from {
    transform: scale(1);
    opacity: 0.1;
  }

  to {
    transform: scale(1.2);
    opacity: 0.5;
  }
}
</style>