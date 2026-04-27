class Background extends Sprite {
    constructor(imagePath, fallbackColor) {
        super();
        this.image = null;
        this.imageLoaded = false;
        this.fallbackColor = fallbackColor || 'black';

        if (imagePath) {
            this.image = new Image();
            this.image.onload = () => {
                this.imageLoaded = true;
            };
            this.image.src = imagePath;
        }
    }

    update(sprites, keys) {
    }

    draw(ctx) {
        if (this.image && this.imageLoaded) {
            ctx.drawImage(this.image, 0, 0, 800, 400);
            return;
        }

        ctx.fillStyle = this.fallbackColor;
        ctx.fillRect(0, 0, 800, 400);
    }
}
