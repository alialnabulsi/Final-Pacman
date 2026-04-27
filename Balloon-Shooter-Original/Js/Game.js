class Sprite {
    constructor() { }

    update() { }

    render(ctx) { }
}



class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.arrayOfSprites = [];
        this.keys = {};  
        this.bindKeyboardEvents();
    }

    addSprite(sprite) {
        this.arrayOfSprites.push(sprite);
    }
    update() {
        let updatedSprites = [];
        for (let i = 0; i < this.arrayOfSprites.length; i++) {
            let sprite = this.arrayOfSprites[i];
   
            if (!sprite.update(this.arrayOfSprites, this.keys)) {
                updatedSprites.push(sprite);
            }
        }
        this.arrayOfSprites = updatedSprites;
    }
 

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.arrayOfSprites.forEach(sprite => sprite.render(this.ctx));
    }

    animate() {
        this.update();
        this.render();
        requestAnimationFrame(() => this.animate());
    }

    bindKeyboardEvents() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.key] = true;  
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.key] = false;  
        });
    }
}
