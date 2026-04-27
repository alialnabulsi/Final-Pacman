class Dart extends Sprite {
  constructor(x, y, w, h, color, speed) {
    super();
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.speed = speed;
  }

  update(arrayOfSprites, keys) {
    let endScreen = arrayOfSprites.find(
      (sprite) => sprite instanceof EndScreen,
    );

    if (endScreen.active) {
      return true;
    }

    this.x += this.speed;

    let score = arrayOfSprites.find((sprite) => sprite instanceof Score);

    for (let i = 0; i < arrayOfSprites.length; i++) {
      let sprite = arrayOfSprites[i];

      if (
        sprite instanceof Ballon &&
        sprite.alive &&
        this.collidesWithBallon(sprite)
      ) {
        sprite.alive = false;
        score.incrementScore();
        return true;
      }

      if (
        sprite instanceof BigBallon &&
        sprite.alive &&
        this.collidesWithBallon(sprite)
      ) {
        sprite.decrementHp(arrayOfSprites);
        score.incrementScoreX10();
        return true;
      }
    }

    if (this.x > 800) {
      return true;
    }

    return false;
  }

  collidesWithBallon(ballon) {
    const closestX = Math.max(this.x, Math.min(ballon.x, this.x + this.w));
    const closestY = Math.max(this.y, Math.min(ballon.y, this.y + this.h));
    const dx = ballon.x - closestX;
    const dy = ballon.y - closestY;
    return dx * dx + dy * dy <= ballon.r * ballon.r;
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
