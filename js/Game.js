class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    
    // Se diseñan los sprites de los autos
    /*
    car1 = createSprite(width /2 -50, height -100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width /2 + 100, height -100);
    car2.addImage("car1", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
    */
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  // la funcion play permite mostrar los autos y la pista

  /*play() {
    this.handleElements()

    Player.getPlayersInfo();
    
    //Esta condicional nos ayuda a ocultar el formularia
    
    if(allPlayers != undefined){
      image (track, 0, -height*5, width, height*6); 
      drawSprites();
    }
  }*/

// Para actualizar el estado de juego --GameState-- se utiliza la funcion  update
  
/*update(state){
    database.ref("/").update ({
      gameState: state
    });
  }*/

}
