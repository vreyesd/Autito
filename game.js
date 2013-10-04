'use strict';
var PRESSING=[];
var fittipaldi;
var canvas;
var ctx;
var lastPress=null;

function init()
{
    canvas = document.getElementById("canvas");

    if (canvas.getContext)
    {
       ctx = canvas.getContext("2d");
       fittipaldi  = new Autito(80, 80);
       run();
    }
}

function run()
{
   setTimeout(run,50);
   move();
   paint();
}

function move()
{
   fittipaldi.move();
}

function paint()
{
   ctx.clearRect(0,0,canvas.width,canvas.height);
   ctx.fillStyle = "black";
   ctx.rect(0, 0, 300, 150);
   
   ctx.fillStyle='#fff';
   ctx.fillText('Pilot: '+fittipaldi.name,5,10);
   ctx.fillText('Last Press: '+lastPress,5,25);
   
   //data
   ctx.fillText('Speed: '+fittipaldi.speed,150,10);
   ctx.fillText('Accel: '+fittipaldi.accel,150,20);
   ctx.fillText('x, y: '+fittipaldi.x+" "+fittipaldi.y,150,30);
   ctx.fillText('Angle: '+(fittipaldi.angle*(180/Math.PI)).toFixed(1),150,40);  
   
   paintAutito();
}


document.addEventListener('keydown',function(evt){
 lastPress=evt.keyCode;
 PRESSING[evt.keyCode]=true;
},false);

document.addEventListener('keyup',function(evt){
 PRESSING[evt.keyCode]=false;
},false);