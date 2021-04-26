class Form{

    constructor(){

    }

    display(){

        var title = createElement("h2");
        title.html("CAR RACING GAME");
        title.position(130, 130);
        var input = createInput("enter your NAME");
        input.position(200, 160);
        var button = createButton("click");
        button.position(200, 150);
        var greeting = createElement("h1");
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("WELCOME! " + name);
            greeting.position(100, 100);
        })

    }

}
