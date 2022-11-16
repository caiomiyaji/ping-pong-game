import {Player} from './player.js'
import {Ball} from './ball.js'
import {Cpu} from './cpu.js'
import {Points} from './points.js'

const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

const startButton = document.querySelector('button');

const keyboard = {
    up: false,
    down: false,
    right: false,
    left: false
}

const player = new Player(ctx, keyboard, canvas);
const points = new Points(ctx);
const ball = new Ball (ctx, canvas, player, points);
const cpu = new Cpu(ctx, canvas, ball);

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
    cpu.draw();
    ball.draw();
    points.draw();

    requestAnimationFrame(animate);
}

document.addEventListener('keydown', (e) => {
    if(e.key === "ArrowUp"){
        player.keyboard.up = true;
    }
    
    if(e.key === "ArrowDown"){
        player.keyboard.down = true;
    }

    if(e.key === "ArrowRight"){
        player.keyboard.right = true;
    }

    if(e.key === "ArrowLeft"){
        player.keyboard.left = true;
    }
})

document.addEventListener('keyup', (e) => {
    if(e.key === "ArrowUp"){
        player.keyboard.up = false;
    }
    
    if(e.key === "ArrowDown"){
        player.keyboard.down = false;
    }

    if(e.key === "ArrowRight"){
        player.keyboard.right = false;
    }

    if(e.key === "ArrowLeft"){
        player.keyboard.left = false;
    }
})

animate();

startButton.addEventListener('click', () => {
    ball.start();
})

