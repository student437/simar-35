var ball;
var database
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();

    var locofChild = database.ref("ball/position")
    locofChild.on("value",readOp,showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;   //100 + (-1) = 99
    ball.y = ball.y + y ;   //100  +0 = 100
}

function readOp(){

}

function showerror(){
    console.log("show error")
}
