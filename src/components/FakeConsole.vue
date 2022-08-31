<template>
<div class="fixed z-50 w-screen h-screen bg-black">
    <div class="w-full h-full flex relative">
        <div class="lg:w-2/5 p-2 lg:p-5 font-vt323 text-matrix-green lg:text-2xl green-text-glow lg:leading-8" ref="typedContent"></div>
        <div class="hidden lg:w-3/5 lg:flex lg:items-center lg:justify-center pr-10">
            <iframe v-if="canDisplayVideo"  class="w-full h-full" src="https://player.vimeo.com/video/640631102?h=559c7d7e82" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="absolute lg:hidden w-full h-96 top-1/2 transform -translate-y-1/2">
            <iframe v-if="canDisplayVideo"  class="w-full h-full" src="https://player.vimeo.com/video/640631102?h=559c7d7e82" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'FakeConsole',
    data(){
        return {
            instructionsList: [
                '>> Search for a breach in the hard drive ............',
                '>> .......................................... Success',
                '>> cd user/root_directory',
                '>> Hans software installation .......................',
                '>> /!\\ An error has occurred /!\\',
                '>> Firewall destruction .............................',
                '>> ..................................................',
                '>> Firewall successfully destroyed :-)',
                '>> Resuming Hans software installation ..............',
                '>> .......................................... Success',
                '000...000....000000000....000.....000....000000000...',
                '000...000....000000000....00000...000....000000000...',
                '000...000....000...000....000000..000....000.........',
                '000000000....000000000....000.000.000....000000000...',
                '000000000....000000000....000..000000....000000000...',
                '000...000....000...000....000...00000..........000...',
                '000...000....000...000....000.....000....000000000...',
                '000...000....000...000....000.....000....000000000...',
                '_____________________________________________________',
                '>>...............IS.WATCHING.YOU.....................',
                '_____________________________________________________',
                '>> Initialization of the connection with the Metaverse',
                '>> ........................................... Success',
                '>> cd ARTEFACT-2/',
                '>> ls',
                '>> artefact_2.mp4',
                '>> play artefact_2.mp4'
            ],
            canDisplayVideo: false,
        }
    },
    mounted(){
        let i = 0;
        let j = 0;
        const interval = setInterval(() => {
            let splittedText = this.instructionsList[j].split('');
            this.$refs.typedContent.innerHTML += splittedText[i];
            
            if(i < splittedText.length - 1) {
                i++;
            } else {
                this.$refs.typedContent.innerHTML += '</br>'
                j++;
                i = 0;
            }
            if(j > this.instructionsList.length - 1) {
                clearInterval(interval)
                this.canDisplayVideo = true;
            }
        }, 15)
    },
}
</script>

<style lang="scss" scoped>
.green-text-glow {
    text-shadow: 0 0 10px rgba(13, 212, 133, 0.79),
}
</style>