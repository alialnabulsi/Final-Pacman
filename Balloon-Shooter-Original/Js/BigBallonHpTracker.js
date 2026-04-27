class BigBallonHpTracker extends Sprite {
  constructor(x, y, w, h, color) {
    super();
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.alive = false;
    this.hp = 200;
  }

  update(arrayOfSprites, keys) {
    let bigBallon = arrayOfSprites.find(
      (sprite) => sprite instanceof BigBallon,
    );
    if (bigBallon) {
        this.alive=true;
      this.hp = bigBallon.hp;
    }
  }

  render(ctx) {
    if (this.alive) {
      ctx.fillStyle = "black";
      ctx.fillRect(this.x, this.y, this.w, this.h);

      ctx.fillStyle = "red";
      ctx.fillRect(this.x + 2, this.y + 2, this.hp * 2, this.h - 4);

      ctx.fillStyle = "black";
      ctx.font = "20px Arial";
      ctx.fillText("HP", 140, 45);

      ctx.fillStyle = "black";
      ctx.font = "20px Arial";
      ctx.fillText(" " + this.hp + " ",600,45);
    }
  }
}
