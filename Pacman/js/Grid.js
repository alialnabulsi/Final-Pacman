class Grid extends Sprite {
    constructor(rows, cols, cellSize, pArrayOfSprites) {
        super();
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.createGrid(pArrayOfSprites); 
    }

    createGrid(pArrayOfSprites) {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                let cell = new Cell(col * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize);
                pArrayOfSprites.push(cell);
            }
        }
    }

    update(sprites, keys) {
      
    }

    draw(ctx) {
      
    }
}