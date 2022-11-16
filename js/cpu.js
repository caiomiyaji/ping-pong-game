export class Cpu{
    constructor(ctx, canvas, ball){
        this.ctx = ctx;
        this.canvas = canvas;
        this.ball = ball;
        this.sizeX = 25;
        this.sizeY = 100;
        this.xPos = this.canvas.width - this.sizeX;
        this.yPos = this.canvas.height/2 - (this.sizeY/2);
        this.speed = 2;
        this.middle = this.sizeY/2;
    }

    draw () {
        this.manage();
        this.ctx.fillStyle = "#000";
        this.ctx.fillRect(this.xPos, this.yPos, this.sizeX, this.sizeY) ;
    }

    manage() {
        if(this.ball.xPos + this.ball.sizeX >= (this.canvas.width/2 + this.ball.sizeX) && this.ball.xDirection > 0){
            if(this.xPos >= this.ball.xPos + this.ball.sizeX){
                this.xPos -= this.speed;
            }
            if(this.ball.yPos + this.ball.sizeY/2 <= this.yPos + this.middle && this.yPos >= 0){
                this.yPos -= this.speed;
            }
            if(this.ball.yPos + this.ball.sizeY/2 >= this.yPos + this.middle && this.yPos + this.sizeY <= this.canvas.height){
                this.yPos += this.speed;
            }
        }else{
            if(this.xPos + this.sizeX <= this.canvas.width){
                this.xPos += this.speed; 
            }
            if(this.yPos + this.middle <= this.canvas.height/2){
                this.yPos += this.speed;
            }
            if(this.yPos + this.middle >= this.canvas.height/2){
                this.yPos -= this.speed; 
            }
        }

        if((this.xPos <= this.ball.xPos + this.ball.sizeX && this.xPos + this.sizeX >= this.ball.xPos) && (this.yPos + this.sizeY >= this.ball.yPos && this.yPos <= this.ball.yPos + this.ball.sizeY)){
            this.ball.xDirection = -1;
            this.ball.yDirection = ((this.yPos + (this.middle)) - (this.ball.yPos + (this.ball.sizeY/2)))/16;
            this.middle = Math.random()*this.sizeY;
        }
    }
}