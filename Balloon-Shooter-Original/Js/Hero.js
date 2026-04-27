class Hero extends Sprite {
  constructor(x, y, w, h, color, speed) {
    super();
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.speed = speed;
    this.cooldown = 0;
  }

  update(arrayOfSprites, keys) {
    let end = arrayOfSprites.find((s) => s instanceof EndScreen);
    if (end.active) return;
    if ((keys["W"] || keys["w"]) && this.y > 50) {
      this.y -= this.speed;
    }

    if ((keys["S"] || keys["s"]) && this.y < 450) {
      this.y += this.speed;
    }

    if (this.cooldown > 0) {
      this.cooldown--;
    }

    if (keys["Enter"] && this.cooldown === 0) {
      let dart = new Dart(
        this.x + this.w,
        this.y + this.h / 2 - 3,
        20,
        6,
        "black",
        8,
      );
      game.addSprite(dart);
      this.cooldown = 30;
    }
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
