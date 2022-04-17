var pathImg,running
function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  running = loadAnimation("Runner-1.png","Runner-2.png","Runner-1.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=4
  path.scale=1.2
  boy=createSprite(200,200,40,40)
  boy.addAnimation("running",running)
  boy.scale=0.1
  boundary1=createSprite(380,200,30,400)
  boundary2=createSprite(25,200,30,400)
  
  boundary1.visible=false
  boundary2.visible=false
  
  
}

function draw() {
  background(0);
if(path.y>400){
path.y=height/2
}

boy.x=World.mouseX
boy.collide(boundary1)
boy.collide(boundary2)


drawSprites()
}
