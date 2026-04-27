class Pellet extends Sprite {
    constructor(x, y, radius) {
        super();
        this.x = x;
        this.y = y;
        this.r = radius;
        this.alive = true;
    }

    update(sprites, keys) {
    }

    draw(ctx) {
        if (this.alive) {
            ctx.fillStyle = '#ffd700';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
