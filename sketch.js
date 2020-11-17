var fixedRect, movingRect;
var object1,object2,object3,object4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  object1=createSprite(300,100,70,20);
  object1.shapeColor="green";

  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object2=createSprite(500,200,65,20);
  object2.shapeColor="orange";

  object3=createSprite(50,250,89,20);
  object3.shapeColor="green";

  object4=createSprite(150,450,68,20);
  object4.shapeColor="green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
   object2.velocityY=2;

 if(isTouching(movingRect,object4)){
   movingRect.shapeColor="black";
   object4.shapeColor="pink";
 }else{
   movingRect.shapeColor="green";
   object4.shapeColor="green";
 }

  bounceOff(object2,movingRect);
  
  drawSprites();
}

