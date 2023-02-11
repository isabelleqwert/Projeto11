var sea,ship;
var seaImage,shipImage;

function preload(){
seaImage=loadImage("assets/sea.png");
shipImage=loadAnimation(
"assets/ship-1.png",
"assets/ship-2.png",
"assets/ship-3.png",
"assets/ship-4.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");
  sea=createSprite(350,150);
  sea.addImage(seaImage); 
  sea.velocityX=-4;
  sea.scale=0.4;
  ship=createSprite(120,190,40,40);
  ship.addAnimation("ship moving",shipImage);
  ship.scale=0.3;
}

function draw() {
  background("blue");
    drawSprites();
if (sea.x < 350){
  sea.x=sea.width/2;
}
 
}
