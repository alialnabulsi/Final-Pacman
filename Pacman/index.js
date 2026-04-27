var game = new Game();
var myGrid = new Grid(8, 16, 50, game.sprites); 
game.addSprite(myGrid);
var myPacman = new Pacman(50, 50, 40, 40, 'yellow', 2);
game.addSprite(myPacman);
game.animate();