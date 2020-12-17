function setup() {
  createCanvas(800,400);
  movingrect= createSprite(400,200,80,150);
  movingrect.shapeColor="red";
 fixedrect= createSprite(200,300,130,80);
 fixedrect.shapeColor="red";
shape1=createSprite(100,100,60,60);
shape1.shapeColor="gold";

shape2=createSprite(500,300,90,60);
shape2.shapeColor="indigo";


shape3=createSprite(350,350,60,60);
shape3.shapeColor="orange";


fixedrect.velocityX=1;
movingrect.velocityX=-1;
shape3.velocityX=1;
shape2.velocityX=-1;
}

function draw() {
  background("cyan"); 
  //movingrect.x = World.mouseX; //
  //movingrect.y = World.mouseY;

if(isTouching(movingrect,shape3)==true){
  movingrect.shapeColor="blue";
  shape3.shapeColor="blue";
  
}
else{
  
  shape3.shapeColor="green";
  movingrect.shapeColor="red";
}


bounceOff(movingrect,fixedrect)

bounceOff(shape2,shape3)
  drawSprites();
}















