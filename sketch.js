var database;
var gamestate = 0;
var playercount, form, game, player;
var playerdata;
var distance;
var car1, car2, car3, car4;
var cararray;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth, displayHeight);
game = new Game();
game.getState();
game.start();
  
}

function draw(){
  if(playercount === 4){
    game.update(1);
  }
  if(gamestate == 1){
    clear();
    game.play();

  }
  
   
  
  
}

