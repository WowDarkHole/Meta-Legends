<template>
<canvas class="fixed z-50" id="pixelEffect" ref="pixelEffectCanvas"></canvas>
</template>

<script>
export default {
    name: 'PixelEffect',
    mounted(){
        this.initPixelEffect()
    },
    methods: {
        initPixelEffect(){
            this.canvas = this.$refs.pixelEffectCanvas;
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.ctx = this.canvas.getContext('2d');
            this.nbColumn = window.innerWidth < 500 ? 20 : 40;
            this.rectSize = Math.round(window.innerWidth / this.nbColumn);
            this.nbRow = Math.round(window.innerHeight / this.rectSize);
            this.pickedCoords = [];
            this.pixelPerFrame = 50;
            this.drawPixelEffect();
        },
        drawPixelEffect(){
            this.ctx.fillStyle = 'rgb(0, 0, 0)';
            for (let index = 0; index < this.pixelPerFrame; index++) {
                let coord = this.pickRandomCoord();
                if(!this.alreadyPicked(coord)){
                    this.ctx.fillRect(coord.x, coord.y, this.rectSize, this.rectSize)
                    this.pickedCoords.push(coord);
                }     
            }
            if(this.pickedCoords.length < (this.nbColumn + 1) * (this.nbRow + 1)) {
                window.requestAnimationFrame(this.drawPixelEffect);
            } else {
                const endPixelEffect = new CustomEvent('endPixelEffect');
                document.dispatchEvent(endPixelEffect);
            }
        },
        pickRandomCoord(){
            return {
                x: this.randomIntFromInterval(0, this.nbColumn) * this.rectSize,
                y: this.randomIntFromInterval(0, this.nbRow) * this.rectSize,
            };
        },
        alreadyPicked(coord){
            if(this.pickedCoords.length === 0) {
                return false;
            }
            let isPicked = false;
            this.pickedCoords.forEach(pickedCoord => {
                if (pickedCoord.x === coord.x && pickedCoord.y === coord.y) {
                    isPicked = true;
                } 
            })
            return isPicked
        },
        randomIntFromInterval(min, max){ // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
    }
}
</script>

<style lang="scss" scoped>

</style>