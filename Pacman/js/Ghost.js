class Ghost extends Sprite {
    constructor(x, y, width, height, color, speed) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.direction = 0;
        this.dX = speed;
        this.dY = 0;
    }

    update(sprites, keys) {
        let endScreen = sprites.find((sprite) => sprite instanceof EndScreen);
        if (endScreen && endScreen.active) {
            return;
        }

        let grid = sprites.find((sprite) => sprite instanceof Grid);
        if (!grid) {
            return;
        }

        let nextX = this.x + this.dX;
        let nextY = this.y + this.dY;

        if (grid.collidesWithWall(nextX, nextY, this.width, this.height)) {
            this.chooseNewDirection(grid);
            nextX = this.x + this.dX;
            nextY = this.y + this.dY;

            if (grid.collidesWithWall(nextX, nextY, this.width, this.height)) {
                return;
            }
        }

        this.x = nextX;
        this.y = nextY;
    }

    chooseNewDirection(grid) {
        let options = [0, 1, 2, 3];

        while (options.length > 0) {
            let index = Math.floor(Math.random() * options.length);
            let dir = options[index];
            options.splice(index, 1);

            let testDX = 0;
            let testDY = 0;

            switch (dir) {
                case 0:
                    testDX = this.speed;
                    break;
                case 1:
                    testDY = this.speed;
                    break;
                case 2:
                    testDX = -this.speed;
                    break;
                case 3:
                    testDY = -this.speed;
                    break;
            }

            let nextX = this.x + testDX;
            let nextY = this.y + testDY;

            if (!grid.collidesWithWall(nextX, nextY, this.width, this.height)) {
                this.direction = dir;
                this.dX = testDX;
                this.dY = testDY;
                return;
            }
        }

        this.dX = 0;
        this.dY = 0;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
