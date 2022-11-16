export class Ball{
    constructor(ctx, canvas, player, points){
        this.ctx = ctx;
        this.canvas = canvas;
        this.player = player;
        this.moving = false;
        this.xDirection = -1;
        this.yDirection = 0
        this.sizeX = 20;
        this.sizeY = 20;
        this.xPos = this.canvas.width/2 - (this.sizeX/2);
        this.yPos = this.canvas.height/2 - (this.sizeY/2);
        this.speed = 2;
        this.points = points;
    }

    start(){
        this.moving = true;
    }

    resetBall(){
        this.moving = false;
        this.xPos = this.canvas.width/2 - (this.sizeX/2);
        this.yPos = this.canvas.height/2 - (this.sizeY/2);
        this.yDirection = 0;
        this.player.xPos = 0;
        this.player.yPos = (this.canvas.height/2) - (this.player.sizeY/2);
    }

    draw () {
        this.manage();
        this.ctx.fillStyle = '#ff0000';
        this.ctx.fillRect(this.xPos, this.yPos, this.sizeX, this.sizeY) ;
    }

    manage() {
        if(this.moving){

            this.xPos += this.xDirection*this.speed;
            this.yPos += this.yDirection*this.speed;

            if(this.xPos + this.sizeX >= this.canvas.width){
                this.xDirection = -1;
                this.points.player1Points ++
                this.resetBall();
            }
            if(this.xPos <= 0){
                this.xDirection = 1;
                this.points.player2Points ++
                this.resetBall();
            }
            if(this.yPos <= 0){
                this.yDirection *= -1;
            }
            if(this.yPos + this.sizeY >= this.canvas.height){
                this.yDirection *= -1;
            }
            if((this.xPos <= this.player.xPos + this.player.sizeX && this.xPos + this.sizeX >= this.player.xPos) && (this.yPos + this.sizeY >= this.player.yPos && this.yPos <= this.player.yPos + this.player.sizeY)){
                this.xDirection = 1;
                this.yDirection = ((this.yPos + (this.sizeY/2)) - (this.player.yPos + (this.player.sizeY/2)))/16;
            }
           
        }
    }
}
