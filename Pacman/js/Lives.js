class Lives extends Sprite {
    constructor(x, y, color, text, lives) {
        super();
        this.x = x;
        this.y = y;
        this.color = color;
        this.text = text;
        this.lives = lives;
    }

    decrementLives() {
        if (this.lives > 0) {
            this.lives--;
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.font = '24px Arial';
        ctx.fillText(this.text + ' ' + this.lives, this.x, this.y);
    }
}
