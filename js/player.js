export class Player{
    constructor(ctx, keyboard, canvas){
        this.ctx = ctx;
        this.keyboard = keyboard;
        this.canvas = canvas;
        this.sizeX = 25;
        this.sizeY = 100;
        this.xPos = 0;
        this.yPos = this.canvas.height/2 - (this.sizeY/2);
        this.speed = 2;
    }

    draw () {
        this.manage();
        this.ctx.fillStyle = "#000";
        this.ctx.fillRect(this.xPos, this.yPos, this.sizeX, this.sizeY) ;
    }

    manage() {
        if(this.keyboard.up){
            if(this.yPos > 0){
                this.yPos -= this.speed
            }
        }
        if(this.keyboard.down){
            if(this.yPos + this.sizeY < this.canvas.height){
                this.yPos += this.speed
            }
        }
        if(this.keyboard.right){
            if(this.xPos + this.sizeX < this.canvas.width/2){
                this.xPos += this.speed
            }
        }
        if(this.keyboard.left){
            if(this.xPos > 0){
                this.xPos -= this.speed
            }
        }
    }
}