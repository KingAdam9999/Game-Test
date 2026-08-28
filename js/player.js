export class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.width = 40;
        this.height = 40;

        this.speed = 300;

        this.color = "dodgerblue";
    }

    update(deltaTime, input, canvas) {
        if (input.isKeyDown("w")) {
            this.y -= this.speed * deltaTime;
        }

        if (input.isKeyDown("s")) {
            this.y += this.speed * deltaTime;
        }

        if (input.isKeyDown("a")) {
            this.x -= this.speed * deltaTime;
        }

        if (input.isKeyDown("d")) {
            this.x += this.speed * deltaTime;
        }

        // Keep the player inside the screen.
        this.x = Math.max(
            0,
            Math.min(this.x, canvas.width - this.width)
        );

        this.y = Math.max(
            0,
            Math.min(this.y, canvas.height - this.height)
        );
    }

    draw(ctx) {
        ctx.fillStyle = this.color;

        ctx.fillRect(
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}
