import { Player } from "./player.js";
import { Input } from "./input.js";

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        this.running = false;
        this.lastTime = 0;

        this.input = new Input();

        this.player = new Player(
            canvas.width / 2 - 20,
            canvas.height / 2 - 20
        );
    }

    start() {
        this.running = true;

        this.resizeCanvas();

        window.addEventListener("resize", () => {
            this.resizeCanvas();
        });

        requestAnimationFrame((time) => this.gameLoop(time));
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    gameLoop(currentTime) {
        if (!this.running) return;

        const deltaTime = this.lastTime === 0
            ? 0
            : (currentTime - this.lastTime) / 1000;

        this.lastTime = currentTime;

        this.update(deltaTime);
        this.draw();

        requestAnimationFrame((time) => this.gameLoop(time));
    }

    update(deltaTime) {
        this.player.update(
            deltaTime,
            this.input,
            this.canvas
        );
    }

    draw() {
        this.ctx.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        this.player.draw(this.ctx);
    }
}
