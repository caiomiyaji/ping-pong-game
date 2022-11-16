export class Points{
    constructor(ctx){
        this.ctx = ctx;
        this.left = 0;
        this.right = this.ctx.canvas.width;
        this.margin = 10;
        this.width = 50;
        this.player1Points = 0;
        this.player2Points = 0;
    }

    start(){
        this.moving = true;
    }

    draw () {
        this.ctx.font = '70px arial'
        this.ctx.fillStyle = '#000'
        this.ctx.fillText(this.player1Points, this.margin, this.margin+70, this.width);
        this.ctx.fillText(this.player2Points, this.right - this.width, this.margin+70, this.width);
    }

}
