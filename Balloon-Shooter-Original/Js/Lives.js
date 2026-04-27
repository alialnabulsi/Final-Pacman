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
    this.lives--;
    
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.font = "24px Arial";
    ctx.fillText(this.text + " " + this.lives, this.x, this.y);
  }
}
