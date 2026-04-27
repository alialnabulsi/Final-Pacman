class EndScreen extends Sprite {
    constructor() {
        super();
        this.active = false;
        this.win = false;
    }

    update(sprites, keys) {
        if (this.active) {
            return;
        }

        let lives = sprites.find((sprite) => sprite instanceof Lives);
        if (lives && lives.lives <= 0) {
            this.active = true;
            this.win = false;
            return;
        }

        let pellets = sprites.filter((sprite) => sprite instanceof Pellet);
        if (pellets.length > 0) {
            let anyAlive = pellets.some((pellet) => pellet.alive);
            if (!anyAlive) {
                this.active = true;
                this.win = true;
            }
        }
    }

    draw(ctx) {
        if (!this.active) {
            return;
        }

        let score = game.sprites.find((sprite) => sprite instanceof Score);
        let lives = game.sprites.find((sprite) => sprite instanceof Lives);

        ctx.fillStyle = 'rgba(255,255,255,0.85)';
        ctx.fillRect(180, 110, 440, 180);

        ctx.fillStyle = 'black';
        ctx.font = '40px Arial';
        ctx.fillText(this.win ? 'YOU WIN' : 'GAME OVER', 250, 170);

        ctx.font = '24px Arial';
        ctx.fillText('Score: ' + (score ? score.score : 0), 300, 215);
        ctx.fillText('Lives: ' + (lives ? lives.lives : 0), 300, 245);
    }
}
