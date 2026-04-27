




class Rectangle extends Sprite {
    constructor(x, y, width, height) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.dX = 0;
        this.dY = 0;
        this.direction = -1;
        this.speed = 2;
    }
    update(sprites, keys) {
        this.x += this.dX;
        this.y += this.dY;

        if (keys['ArrowLeft'] && this.x > 0) {
            this.direction = 2;  // Left
        }
        if (keys['ArrowRight'] && this.x + this.width < 600) {
            this.direction = 0;  // Right
        }
        if (keys['ArrowUp'] && this.y > 0) {
            this.direction = 3;  // Up
        }
        if (keys['ArrowDown'] && this.y + this.height < 600) {
            this.direction = 1;  // Down
        }

        switch (this.direction) {
            case 0:  // Right
                this.dX = this.speed;
                this.dY = 0;
                break;
            case 1:  // Down
                this.dX = 0;
                this.dY = this.speed;
                break;
            case 2:  // Left
                this.dX = -this.speed;
                this.dY = 0;
                break;
            case 3:  // Up
                this.dX = 0;
                this.dY = -this.speed;
                break;
        }
    }

  

    draw(ctx) {
        ctx.fillStyle = '#FF0000';  
        ctx.fillRect(this.x, this.y, this.width, this.height);  
        ctx.strokeStyle = '#000';  
        ctx.strokeRect(this.x, this.y, this.width, this.height);  
    }
}