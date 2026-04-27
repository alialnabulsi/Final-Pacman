class Cell extends Sprite {
    constructor(x, y, width, height, isWall) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isWall = isWall;
    }

    update(sprites, keys) {
    }

    draw(ctx) {
        if (this.isWall) {
            ctx.fillStyle = '#1f3a93';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

        ctx.strokeStyle = '#000';
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}
