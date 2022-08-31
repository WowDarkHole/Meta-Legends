<template>
<div v-if="size === 'small'">
    <div class="w-full flex justify-center text-white">
        <div v-if="diffTime" class="grid grid-cols-7 grid-flow-row items-center justify-items-center relative py-2 px-2">
            <div class="absolute w-full h-full overlay top-0 left rounded-md lg:rounded-lg"></div>
            <div class="col-span-7 font-bronova font-bold lg:pb-1">MINT IN :</div>
            <div class="font-f56 lg:text-3xl text-white-glow">{{ diffTime.days }}</div>
            <div class="row-span-3">
                <div class="w-1 h-1 bg-pink rounded-full pink-glow"></div>
            </div>
            <div class="font-f56 lg:text-3xl text-white-glow">{{ diffTime.hours }}</div>
            <div class="row-span-3">
                <div class="w-1 h-1 bg-pink rounded-full pink-glow"></div>
            </div>
            <div class="font-f56 lg:text-3xl text-white-glow">{{ diffTime.minutes }}</div>
            <div class="row-span-3">
                <div class="w-1 h-1 bg-pink rounded-full pink-glow"></div>
            </div>
            <div class="font-f56 lg:text-3xl text-white-glow">{{ diffTime.seconds }}</div>
            <div class="font-bold font-bronova text-xs opacity-50 pt-2 lg:pt-0">DAYS</div>
            <div class="font-bold font-bronova text-xs opacity-50 pt-2 lg:pt-0">HOURS</div>
            <div class="font-bold font-bronova text-xs opacity-50 pt-2 lg:pt-0">MINUTES</div>
            <div class="font-bold font-bronova text-xs opacity-50 pt-2 lg:pt-0">SECONDS</div>
        </div>
    </div>
</div>
<div v-else>
    <div class="w-full flex justify-center lg:mb-5 text-white">
        <!-- <div v-if="diffTime" class="lg:w-2/3 grid grid-cols-7 grid-flow-row items-center justify-items-center relative py-2 px-2 lg:px-10 lg:py-5 lg:pt-3">
            <div class="absolute w-full h-full overlay top-0 left rounded-md lg:rounded-3xl"></div>
            <div class="col-span-7 text-sm lg:text-lg font-bronova font-bold lg:pb-3">MINT IN :</div>
            <div class="font-f56 text-4xl lg:text-8xl lg:mb-3 text-white-glow">{{ diffTime.days }}</div>
            <div class="row-span-3">
                <div class="w-1 h-1 lg:h-3 lg:w-3 bg-pink rounded-full pink-glow"></div>
            </div>
            <div class="font-f56 text-4xl lg:text-8xl lg:mb-3 text-white-glow">{{ diffTime.hours }}</div>
            <div class="row-span-3">
                <div class="w-1 h-1 lg:h-3 lg:w-3 bg-pink rounded-full pink-glow"></div>
            </div>
            <div class="font-f56 text-4xl lg:text-8xl lg:mb-3 text-white-glow">{{ diffTime.minutes }}</div>
            <div class="row-span-3">
                <div class="w-1 h-1 lg:h-3 lg:w-3 bg-pink rounded-full pink-glow"></div>
            </div>
            <div class="font-f56 text-4xl lg:text-8xl lg:mb-3 text-white-glow">{{ diffTime.seconds }}</div>
            <div class="font-bold font-bronova text-xs lg:text-sm opacity-50 pt-2 lg:pt-0">DAYS</div>
            <div class="font-bold font-bronova text-xs lg:text-sm opacity-50 pt-2 lg:pt-0">HOURS</div>
            <div class="font-bold font-bronova text-xs lg:text-sm opacity-50 pt-2 lg:pt-0">MINUTES</div>
            <div class="font-bold font-bronova text-xs lg:text-sm opacity-50 pt-2 lg:pt-0">SECONDS</div>
        </div> -->
        <div class="h-full overlay flex justify-center items-center rounded-3xl lg:py-10 lg:px-20">
            <a  href="https://opensea.io/collection/meta-legends" target="_blank">
                <div class="text-3xl lg:text-7xl bg-gradient-to-l from-darkest-purple to-pink-dutch-dark px-10 py-4 lg:pt-6 lg:pb-6 rounded-lg shadow-md btn-discord scale-animation">
                    <span class="font-akira mr-3 lg:mr-5">SOLD</span>
                    <span class="font-akiraOut">OUT !</span>
                </div>
            </a>
        </div>
    </div>
</div>

</template>

<script>
export default {
    props: {
        size: String,
    },
    data() {
        return {
            endDateUTC: Date.UTC(2021, 11, 11, 21, 0, 0, 0),
            diffTime: null,
        }
    },
    mounted() {
        // setInterval(() => {
        //     this.diffTime = this.countdownTimer();
        // }, 1000);
    },
    methods: {
        countdownTimer() {

            const date = new Date(); 
            const end_utc =  new Date(this.endDateUTC).getTime();
            
            const now_utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

            

            const difference = Number(end_utc) - Number(now_utc);
            
            if (difference > 0) {
                const parts = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
                parts.days = parts.days < 10 ? `0${parts.days}` : parts.days;
                parts.hours = parts.hours < 10 ? `0${parts.hours}` : parts.hours;
                parts.minutes = parts.minutes < 10 ? `0${parts.minutes}` : parts.minutes;
                parts.seconds = parts.seconds < 10 ? `0${parts.seconds}` : parts.seconds;
                return parts
            }
        },
        redirectToMint(){
            this.$router.push('/mint');
        }
    },
}
</script>

<style lang="scss" scoped>
.overlay {
    background-color: rgba(255, 255, 255, .08);  
    backdrop-filter: blur(15px);
    z-index: 10;
}
.grid *:not(.overlay) {
    z-index: 20;
}
.text-white-glow {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
}
.pink-glow {
    box-shadow: 0 0 20px rgba(214, 19, 214, 0.8),
}
.open-animation {
    animation-duration: 1s;
    animation-name: openAnimation;
    animation-iteration-count: infinite;
    animation-delay: 1s;
}

.scale-animation {
    animation-duration: 1s;
    animation-name: scaleAnimation;
    animation-iteration-count: infinite;
    animation-delay: 1s;      
}

.btn-discord {
    transition: 0.5s;
}
.btn-discord:hover {
    box-shadow: 0 0 32px rgba(159, 55, 208, 0.79);
    transition: 0.5s;
}
@keyframes openAnimation {
    0% {
        width: 0%;
    }
    50% {
        width: 100%;
    }
    100% {
        opacity: 0;
    }
}

@keyframes scaleAnimation {
    0%{
        transform: scale(1)
    }
    50%{
        transform: scale(1.1)
    }
    100%{
        transform: scale(1);
    }
}
</style>