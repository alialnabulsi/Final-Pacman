class SpawnsGenerator extends Sprite {
  constructor(NOS, gap) {
    super();
    this.numberOfSpawns = NOS;
    this.gap = gap;
  }

  initializeSpawns() {
    let i = 0;
    while (i < this.numberOfSpawns) {
      const spawn = new Spawns(
        50 + (i * 125 + 30),
        575,
        35,
        25,
        "Black",
        i + 1,
      );
      game.addSprite(spawn);
      i++;
    }
  }
}
