var game = new Game();
var myGrid = new Grid(10, 10, 50, game.sprites); 
game.addSprite(myGrid);
var myRectangle = new Rectangle(0, 0, 50, 50);
game.addSprite(myRectangle);
game.animate();