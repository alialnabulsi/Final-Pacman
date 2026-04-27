class Score extends Sprite {
    constructor(x, y, color, text) {
        super();
        this.x = x;
        this.y = y;
        this.color = color;
        this.text = text;
        this.score = 0;
    }

    incrementScore() {
        this.score++;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.font = '24px Arial';
        ctx.fillText(this.text + ' ' + this.score, this.x, this.y);
    }
}
