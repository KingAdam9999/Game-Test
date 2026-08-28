export class Input {
    constructor() {
        this.keys = new Set();

        window.addEventListener("keydown", (event) => {
            this.keys.add(event.key.toLowerCase());
        });

        window.addEventListener("keyup", (event) => {
            this.keys.delete(event.key.toLowerCase());
        });
    }

    isKeyDown(key) {
        return this.keys.has(key.toLowerCase());
    }
}
