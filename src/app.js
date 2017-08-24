import * as PIXI from 'pixi.js'

const width = window.innerWidth * 0.8;
const height = window.innerWidth * 0.4;
const scaleFactor = width/1600;

var app = new PIXI.Application(width, height, {backgroundColor : 0x1099bb});
document.getElementById('container').appendChild(app.view);

//Development
//var ws = new WebSocket(" ws://localhost:8080/");

//Production
var ws = new WebSocket(" wss://tanks.ml/ws");
setInterval(function(){ws.send("")}, 10000);
var tanks = [];

var moveState = -1;
var turnState = -1;

function sendShoot(){
  //Send tank shot the bullet
  ws.send(0)
}

function sendMove(direction){
  //Tank moves forward (1) or backward (0)
  ws.send([1, direction]);
}

function sendRotate(direction){
  //Rotates the tank, 1 for clockwise, 0 for counter-clockwise
  ws.send([2, direction]);
}

function addObjects(data){
    for(var i = 0, n = data.length; i < n; i++){
        var tank = PIXI.Sprite.fromImage('tank.svg');
        tank.x = data[i].x*scaleFactor;
        tank.y = data[i].y*scaleFactor;
        tank.anchor.set(0.5);
        tank.rotation = (data[i].angle + 90) * (Math.PI / 180);
        tank.width = 64*scaleFactor;
        tank.height = 64*scaleFactor;
        tanks.push(tank);
        app.stage.addChild(tank);


        tank.bullets = data[i].bullets;
        for(var x = 0, y = tank.bullets.length; x < y; x++){
            var bullet = new PIXI.Graphics();
            bullet.lineStyle(0);
            bullet.beginFill(0xFFFF0B, 0.5);
            bullet.drawCircle(data[2]*scaleFacto, data[3]*scaleFactor, 10*scaleFactor);
            bullet.endFill();
            tanks[i].bullets.push(bullet);
            app.stage.addChild(bullet);
        }
    }
}

ws.onmessage = function (evt)
{
    var message = JSON.parse(evt.data);
    //Tank Join Update
    var header = message[0];
    var data = message[1];

    //Tank Sync
    if(header == 0){
      //This gets all the tanks along with all their bullets.
      addObjects(data);
    }

    else if(header == 1){

      tanks[data[0]].x = (data[1]*scaleFactor);
      tanks[data[0]].y = (data[2]*scaleFactor);
    }
    else if(header == 2){
      tanks[data[0]].rotation = (data[1] + 90) * (Math.PI / 180);
    }
    //Bullet Shot
    else if(header == 3){
      //Shoot from the given tank ID.
      var bullet = new PIXI.Graphics();
      bullet.lineStyle(0);
      bullet.beginFill(0xFFFF0B, 0.5);
      bullet.drawCircle(0, 0, 10*scaleFactor);
      bullet.endFill();
      app.stage.addChild(bullet);
      tanks[data[0]].bullets.push(bullet);


    }
    //Bullet Move
    else if (header == 4){
      //Update the position of the given bullet ID of the given tank ID.
      tanks[data[0]].bullets[data[1]].x = data[2]*scaleFactor;
      tanks[data[0]].bullets[data[1]].y = data[3]*scaleFactor;
    }

    else if (header == 5){
      var tank = PIXI.Sprite.fromImage('tank.svg');
      tank.x = data.x*scaleFactor;
      tank.y = data.y*scaleFactor;
      tank.anchor.set(0.5);
      tank.rotation = (data.angle + 90) * (Math.PI / 180);
      tank.width = 64*scaleFactor;
      tank.height = 64*scaleFactor;
      tank.bullets = data.bullets
      tanks.push(tank);
      app.stage.addChild(tank);
      console.log("aw");
    }

    else if (header == 6){
      for(var x = 0, n = tanks[data].bullets.length; x < n; x++){
        tanks[data].bullets[x].destroy();
      }
      tanks[data].destroy();
      tanks.splice(data, 1);
    }

    else if (header == 7){
      //projectile timeout
      tanks[data[0]].bullets[data[1]].destroy();
      tanks[data[0]].bullets.splice(data[1], 1);
    }

}


//This controls keypresses
function keyLoop(){
      if (turnState != -1) {
         sendRotate(turnState);
      }

      if (moveState != -1){
        sendMove(moveState);
      }
}

  keyLoop();

    document.addEventListener('keydown', function(event) {

        switch (event.keyCode) {
          case 65:
            turnState = 0;
            break;
          case 	68:
            turnState = 1;
            break;
          case 87:
            moveState = 1;
            break;
          case 	83:
            moveState = 0;
            break;
          case 32:
            sendShoot();
            break;
          default:
            break;
        }
    });

    document.addEventListener('keyup', function(event) {

        switch (event.keyCode) {
          case 65:
          turnState = -1;
            break;
          case 68:
          turnState = -1;
            break;
          case 87:
          moveState = -1;
            break;
          case 83:
          moveState = -1;
            break;
          default:
            break;
        }
    });
setInterval(function(){keyLoop()}, 1);
