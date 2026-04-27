class Ballon extends Sprite {
  constructor(x, y, color) {
    super();
    this.x = x;
    this.y = y;
    this.r = 25;
    this.speed = 2;
    this.move = false;
    this.alive = false;
    this.color = color;
    this.exploded = false;
  }

  update(arrayOfSprites, keys) {
    let lives = arrayOfSprites.find((sprite) => sprite instanceof Lives);
    let endScreen = arrayOfSprites.find(
      (sprite) => sprite instanceof EndScreen,
    );

    if (endScreen.active) {
      return false;
    }

    if (this.move && this.alive && lives.lives > 0) {
      this.y -= this.speed;
    }

    if (this.alive && this.y <= 50) {
      this.alive = false;
      this.move = false;
      lives.decrementLives();

      let end = arrayOfSprites.find((s) => s instanceof EndScreen);

      if (lives.lives <= 0) {
        
        end.active = true;
        end.win = false;
      }

      return true;
    }

    if (!this.alive) {
      return true;
    }

    return false;
  }

  render(ctx) {
    if (this.alive) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "black";
      ctx.beginPath();
      ctx.moveTo(this.x, this.y + this.r);
      ctx.lineTo(this.x, this.y + this.r + 20);
      ctx.stroke();
    }
  }
}
