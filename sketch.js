var database;

var playerCount, gameState, player, game, form;

function setup(){
  createCanvas(500,500);

  database = firebase.database()
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  
}
