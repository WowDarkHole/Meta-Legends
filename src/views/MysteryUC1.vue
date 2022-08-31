<template>
<div class="bg-dark-purple h-screen w-screen">
    <div class="h-full bg-image flex flex-col">
        <div class="flex justify-center">
            <img class="h-10 my-5" src="../assets/images/title-logo.svg" alt="">
        </div>
        <div class="h-1/3 lg:h-full lg:p-10 mt-20 lg:mt-0">
            <iframe class="h-full w-full" src="https://player.vimeo.com/video/642967253?h=f621e4e2a5" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>    
        </div>
        <p class="text-white font-bronova lg:text-2xl text-center lg:pb-10">
            <span class="font-bold">3 winners (WL)</span> will be randomly selected if they find the location and comment on it under the post on <a href="https://twitter.com/metalegendsnft" target="_blank"><span class="font-bold text-twitter-blue">twitter</span></a>.
        </p>
    </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bg-image {
    background-image: url('../assets/images/bg-ua1.jpg');
    background-size: cover;
    background-position: top center;
}

@media (max-width: 500px) {
    .bg-image {
        background-size: contain;
        background-repeat: no-repeat;
    }
}
</style>