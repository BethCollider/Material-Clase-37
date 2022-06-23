var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");

  //Carga las imagenes de los carros y la pista 
  
  /* car1_img = 
  car2_img = 
  track = 
  */

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);

  //Se actualiza el estado de juego cuando entran dos jugadores
  
  /*if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }*/
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
