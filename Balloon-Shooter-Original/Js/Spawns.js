class Spawns extends Sprite {
  constructor(x, y, w, h, color, id) {
    super();
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.id = id;
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.fillRect(this.x - 10, this.y - 10, this.w + 20, this.h - 10);
  }
}
