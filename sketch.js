var terx,ground,edges



function setup() 
{

  createCanvas(600,200);
  trex = createSprite(50, 180, 20, 40);
  trex.shapeColor="green"
   edges=createEdgeSprites()
    ground=createSprite(300,190,600,30)
ground.shapeColor="brown"
}
function draw() 
{
background(51);
trex.collide(ground)
if(keyDown("space")){
  trex.velocityY = -10

}
trex.velocityY +=0.4
ground.velocityX= -5
if(ground.x <0){
  ground.x=300
}
drawSprites()
}

