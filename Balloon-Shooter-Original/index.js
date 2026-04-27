const game = new Game();
const score = new Score(20, 30, "Green", "Score:");
const lives = new Lives(680, 30, "Red", "Lives:", 10);
const hero = new Hero(0, 250, 20, 100, "Black", 4);
const spawnGenerator = new SpawnsGenerator(6, 30);
const ballonGenerator = new BallonGenerator(20);
const endScreen = new EndScreen();
const bigBallonHpTracker = new BigBallonHpTracker(200,25,400,25,"Red");

game.addSprite(score);
game.addSprite(lives);
game.addSprite(hero);
game.addSprite(spawnGenerator);
spawnGenerator.initializeSpawns();
game.addSprite(ballonGenerator);

game.addSprite(endScreen);
game.addSprite(bigBallonHpTracker);
game.animate();
