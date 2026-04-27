class EndScreen extends Sprite {
  constructor() {
    super();
    this.active = false;
    this.win = false;
  }

  render(ctx) {
    if (this.active) {
      let score = game.arrayOfSprites.find(s => s instanceof Score);
      let lives = game.arrayOfSprites.find(s => s instanceof Lives);

      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.fillRect(180, 180, 440, 220);

      ctx.fillStyle = "black";
      ctx.font = "40px Arial";
      ctx.fillText(this.win ? "YOU WIN" : "YOU LOST", 260, 250);

      ctx.font = "24px Arial";
      ctx.fillText("Score: " + score.score, 300, 300);
      ctx.fillText("Lives: " + lives.lives, 300, 330);
    }
  }
}