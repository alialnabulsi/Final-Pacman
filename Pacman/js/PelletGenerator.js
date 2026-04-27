class PelletGenerator extends Sprite {
    constructor() {
        super();
        this.initialized = false;
    }

    update(sprites, keys) {
        if (this.initialized) {
            return;
        }

        let grid = sprites.find((sprite) => sprite instanceof Grid);
        if (!grid) {
            return;
        }

        for (let row = 0; row < grid.rows; row++) {
            for (let col = 0; col < grid.cols; col++) {
                if (grid.maze[row][col] === 0) {
                    let x = col * grid.cellSize + grid.cellSize / 2;
                    let y = row * grid.cellSize + grid.cellSize / 2;
                    let pellet = new Pellet(x, y, 5);
                    game.addSprite(pellet);
                }
            }
        }

        this.initialized = true;
    }

    draw(ctx) {
    }
}
