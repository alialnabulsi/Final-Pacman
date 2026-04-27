class BallonGenerator extends Sprite {
  constructor(noOfBallons) {
    super();
    this.noOfBallons = noOfBallons;
    this.counter = 0;
    this.finished = false;
    this.timer = 0;
    this.start = false;
    this.bigBallonSpawned = false;
    this.colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  }

  update(arrayOfSprites, keys) {
    let lives = arrayOfSprites.find((sprite) => sprite instanceof Lives);
    let endScreen = arrayOfSprites.find((sprite) => sprite instanceof EndScreen);

    if (endScreen.active) {
      return false;
    }

    if (keys[" "]) {
      this.start = true;
    }

    if (this.start) {
      this.generateBallons(arrayOfSprites);
    }

    let normalBallonsLeft = arrayOfSprites.some(
      (sprite) => sprite instanceof Ballon && sprite.alive
    );

    if (
      this.start &&
      this.counter == this.noOfBallons &&
      !normalBallonsLeft &&
      lives.lives > 0 &&
      !this.bigBallonSpawned
    ) {
      let bigBallon = new BigBallon(760, 300, "Purple");
      game.addSprite(bigBallon);
      this.bigBallonSpawned = true;
    }

    return false;
  }

  generateBallons(arrayOfSprites) {
    let lives = arrayOfSprites.find((sprite) => sprite instanceof Lives);

    this.timer++;
    if (lives.lives != 0) {
      if (this.counter < this.noOfBallons && this.timer % 60 === 0) {
        let targetSpawn = Math.floor(Math.random() * 6) + 1;
        let spawn = arrayOfSprites.find(
          (sprite) => sprite instanceof Spawns && sprite.id == targetSpawn
        );

        if (spawn) {
          let x = spawn.x + spawn.w / 2;
          let y = spawn.y;
          this.spawnBallon(arrayOfSprites, x, y);
        }
      }
    }
  }

  spawnBallon(arrayOfSprites, x, y) {
    this.counter++;
    let ballon = new Ballon(
      x,
      y,
      this.colors[Math.floor(Math.random() * this.colors.length)]
    );
    ballon.alive = true;
    ballon.move = true;
    game.addSprite(ballon);
  }
}