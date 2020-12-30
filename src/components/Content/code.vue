<template>
  <div class="canvas">
      <canvas @click="refresh" :width="width" :height="height" ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
    data() {
        return {
            code : "",
            colors: [
                '#FF6347',
                '#FFFF00',
                '#B0E0E6',
                '#00FF7F',
            ],
            width: 120,
            height: 50,
            codeNum: 5,
            chars: "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM"
        }
    },
    methods: {
        refresh(e){
            let canvas = e.target
            let context = canvas.getContext("2d")
            this.code = ""
            context.clearRect(0, 0, this.width, this.height)
            context.font = '45px STheiti, SimHei'
            context.fillStyle = this.genRandomColor()
            for (let i = 0;i<this.codeNum; i++){
                this.code += this.genRandomChar()
            }
            context.fillText(this.code,0,this.height*2/3)
            for (let i=0;i<10;i++){
                this.genRandomLine(context)
            }
            console.log(context)
        },
        genRandomColor(){
            return this.colors[Math.round(Math.random()*(this.colors.length-1))]
        },
        genRandomChar(){
            return this.chars.charAt(Math.round(Math.random()*this.chars.length))
        },
        genRandomLine(context){
            console.log(context)
            context.strokeStyle = this.genRandomColor()
            context.beginPath()
            let x1 = this.genRandomX()
            let x2 = this.genRandomX()
            let y1 = this.genRandomY()
            let y2 = this.genRandomY()
            context.moveTo(x1,y1)
            context.lineTo(x2,y2)
            context.stroke()
        },
        genRandomX(){
            return Math.round(Math.random()*(this.width-1))
        },
        genRandomY(){
            return Math.round(Math.random()*(this.height-1))
        }
    },
    mounted(){
            let canvas = this.$refs.canvas
            let context = canvas.getContext("2d")
            this.code = ""
            context.clearRect(0, 0, this.width, this.height)
            context.font = '45px STheiti, SimHei'
            context.fillStyle = this.genRandomColor()
            for (let i = 0;i<this.codeNum; i++){
                this.code += this.genRandomChar()
            }
            context.fillText(this.code,0,this.height*2/3)
            for (let i=0;i<10;i++){
                this.genRandomLine(context)
            }
            
    }
}
</script>

<style>
    .canvas{
        width: 120px;
        border:1px solid #adadad ;
        border-radius: 5px;
    }
</style>