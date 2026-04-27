class Grid extends Sprite {
    constructor(rows, cols, cellSize, pArrayOfSprites) {
        super();
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;

        this.maze = [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1],
            [1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1],
            [1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1],
            [1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1],
            [1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1],
            [1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ];

        this.createGrid(pArrayOfSprites);
    }

    createGrid(pArrayOfSprites) {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                let isWall = this.maze[row][col] === 1;
                let cell = new Cell(col * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize, isWall);
                pArrayOfSprites.push(cell);
            }
        }
    }

    isWallCell(row, col) {
        if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
            return true;
        }

        return this.maze[row][col] === 1;
    }

    collidesWithWall(x, y, width, height) {
        let leftCol = Math.floor(x / this.cellSize);
        let rightCol = Math.floor((x + width - 1) / this.cellSize);
        let topRow = Math.floor(y / this.cellSize);
        let bottomRow = Math.floor((y + height - 1) / this.cellSize);

        return this.isWallCell(topRow, leftCol) ||
            this.isWallCell(topRow, rightCol) ||
            this.isWallCell(bottomRow, leftCol) ||
            this.isWallCell(bottomRow, rightCol);
    }

    update(sprites, keys) {
    }

    draw(ctx) {
    }
}
