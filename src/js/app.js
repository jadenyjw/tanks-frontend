import Konva from 'konva';

var width = window.innerWidth;
var height = window.innerHeight;

var Vel = 0;
var Rotate = 0;


var stage = new Konva.Stage({
  container: 'container',
  width: width * 0.9,
  height: width * 0.45
});

var layer = new Konva.Layer();
var dragLayer = new Konva.Layer();

var arrow = new Konva.Arrow({
      x: width/2,
      y: 15,
      points: [0,0, 25, 0],
      pointerLength: 10,
      pointerWidth : 6,
      fill: 'black',
      stroke: 'black',
      strokeWidth: 4
    });

    layer.add(arrow);
    // add the layer to the stage
    stage.add(layer);


    function updateArrow(frame){
      var x = arrow.getX();
      var y = arrow.getY();
      var vel = Vel;
      var rotate = Rotate;

      var rotation = arrow.getRotation() * Math.PI/ 180;
      

      x += vel * Math.cos(rotation);
      y += vel * Math.sin(rotation);;

      arrow.rotate(rotate);
      arrow.setPosition({x:x, y:y});
    }

     var anim = new Konva.Animation(function(frame) {
        updateArrow(frame);
    }, layer);


    anim.start();
    


    document.addEventListener('keydown', function(event) {

    switch (event.keyCode) {
      case 37:
        Rotate = -5;
        break;
      case 39:
        Rotate = 5;
        break;
      case 38:
        Vel = 2;
        break;
      case 40:
        Vel = -1;
        break;  
    
      default:
        break;
    }
    anim.start();
});

document.addEventListener('keyup', function(event) {

    switch (event.keyCode) {
      case 37:
      Rotate = 0;
        break;
      case 39:
      Rotate = 0;  
        break;
      case 38:
      Vel = 0;  
        break;
      case 40:
      Vel = 0;    
        break;  
    
      default:
        break;
    }
    anim.start();
});


var tanksml = new WebSocket(" wss://tanks.ml/ws");
tanksml.onopen = function (event) {
  tanksml.send("hi beat boy"); 
};