class BigBallon extends Sprite {
  constructor(x, y, color) {
    super();
    this.x = x;
    this.y = y;
    this.r = 60;
    this.speed = 1;
    this.alive = true;
    this.color = color;
    this.hp = 200;
  }

  update(arrayOfSprites, keys) {
    let hero = arrayOfSprites.find(s => s instanceof Hero);
    let end = arrayOfSprites.find(s => s instanceof EndScreen);

    if (end.active) {
      return false;
    }

    this.x -= this.speed;

    if (hero && this.collidesWithRect(hero)) {
      end.active = true;
      end.win = false;
      return true;
    }

    if(this.x<=0){
      end.active = true;
      end.win = false;
      return true;
    }

    return false;
  }

  decrementHp(arrayOfSprites){
    
    if(this.hp > 0){
       this.hp -=10;  
       console.log(this.hp);
    }else{
      let end = arrayOfSprites.find(s => s instanceof EndScreen);
      this.alive = false;
      end.active = true;
      end.win = true;
    }
   
  }

  collidesWithRect(rect) {
    const closestX = Math.max(rect.x, Math.min(this.x, rect.x + rect.w));
    const closestY = Math.max(rect.y, Math.min(this.y, rect.y + rect.h));
    const dx = this.x - closestX;
    const dy = this.y - closestY;
    return dx * dx + dy * dy <= this.r * this.r;
  }

  render(ctx) {
    if (this.alive) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}