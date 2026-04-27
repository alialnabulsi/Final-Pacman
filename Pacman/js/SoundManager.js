class SoundManager extends Sprite {
    constructor() {
        super();
        this.eatSound = new Audio('assests/eat.mp3');
        this.eatSound.volume = 0.4;
    }

    playEat() {
        this.eatSound.currentTime = 0;
        this.eatSound.play();
    }

    update(sprites, keys) {
    }

    draw(ctx) {
    }
}
