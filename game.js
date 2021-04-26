class Game{

    constructor(){

    }

    getState(){

        var gameStateref = database.ref("gameState");
        gameStateref.on("value", function(avni){
           gameState = avni.val();
        })

    }

    update(state){

        database.ref("/").update({
            gameState:state
        })

    }

    start(){

        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }

    }

}
