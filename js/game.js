class Game{
    constructor(){

    }
    getState(){
        var gamestateref = database.ref("Gamestate");
        gamestateref.on("value",function(data){
           gamestate = data.val()
        })
    }
    update(state){
        database.ref("/").update({
            Gamestate: state
        })
    }
    async start(){
        if(gamestate === 0){
            player = new Player();
            var playercntref = await database.ref("PlayerCount").once("value");
            if(playercntref.exists()){
                playercount = playercntref.val();
                player.getCount();

            }
            form = new Form();
           
            form.display(); 
        }
        car1 = createSprite(200,200);
        car2 = createSprite(400,200); 
        car3 = createSprite(600,200);
        car4 = createSprite(800,200);
        cararray = [car1,car2,car3,car4]
        
    }

    play(){
        form.hide();
        textSize(25);
        text("Game has begun! All the Best!!",150,150)
        Player.getplayerdata();
        if(playerdata !== undefined){
            var index = 0
            var x = 200
            var y;
          
            for(var car in playerdata){
                index = index+1;
                x = x+200
                y = displayHeight - playerdata[car].distance
                cararray[index-1].x = x;
                cararray[index-1].y = y;
                if(index === player.index){
                    cararray[index-1].shapeColor = "green";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cararray[index-1].y


                }
             }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 50;
            player.updatename();
        }
        drawSprites();
    }
    
}