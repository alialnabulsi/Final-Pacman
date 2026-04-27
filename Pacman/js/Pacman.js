class Pacman extends Sprite {
    constructor(x, y, width, height, color, speed) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.dX = 0;
        this.dY = 0;
        this.direction = -1;
    }

    update(sprites, keys) {
        if (keys['ArrowLeft']) {
            this.direction = 2;
        }
        if (keys['ArrowRight']) {
            this.direction = 0;
        }
        if (keys['ArrowUp']) {
            this.direction = 3;
        }
        if (keys['ArrowDown']) {
            this.direction = 1;
        }

        switch (this.direction) {
            case 0:
                this.dX = this.speed;
                this.dY = 0;
                break;
            case 1:
                this.dX = 0;
                this.dY = this.speed;
                break;
            case 2:
                this.dX = -this.speed;
                this.dY = 0;
                break;
            case 3:
                this.dX = 0;
                this.dY = -this.speed;
                break;
        }

        let nextX = this.x + this.dX;
        let nextY = this.y + this.dY;
        let grid = sprites.find((sprite) => sprite instanceof Grid);

        if (!grid || !grid.collidesWithWall(nextX, nextY, this.width, this.height)) {
            this.x = nextX;
            this.y = nextY;
        }

        if (this.x < 0) {
            this.x = 0;
        }
        if (this.y < 0) {
            this.y = 0;
        }
        if (this.x + this.width > 800) {
            this.x = 800 - this.width;
        }
        if (this.y + this.height > 400) {
            this.y = 400 - this.height;
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x + this.width / 2, this.y + this.height / 2, this.width / 2, 0, Math.PI * 2);
        ctx.fill();
    }
}
