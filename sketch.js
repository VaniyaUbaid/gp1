var girl,bg,girlImg
var ground1,ground

function preload(){
bg= loadImage("background.jpg")
girlImg= loadAnimation("G1.png","G2.png","G3.png")
girlStd= loadAnimation("G1.png")
}



function setup() {

  createCanvas(1600,800);

  girl=createSprite(100, 350, 50, 50);
  girl.addAnimation("standing",girlStd)
  girl.addAnimation("running",girlImg)

ground1=createSprite(100,410,200,20)

girl.debug= true
girl.setCollider("rectangle",0,0,50,90)

}

function draw() {

  background(bg);  
  girl.collide(ground1)
  
  if(keyDown("LEFT_ARROW")){
    girl.x=girl.x-8
    girl.direction=90
    girl.changeAnimation("running",girlImg)
  }
  if(keyWentUp("LEFT_ARROW")){
    girl.changeAnimation("standing",girlStd)
  }
  if(keyDown("RIGHT_ARROW")){
    girl.x=girl.x+8
    girl.changeAnimation("running",girlImg)
  }
  if(keyWentUp("RIGHT_ARROW")){
    girl.changeAnimation("standing",girlStd)
  }
  if(keyDown("UP_ARROW")){
    girl.velocityY=-5
  }
  girl.velocityY=girl.velocityY+0.5
  spawnGround()
  drawSprites();
}
function spawnGround(){
  if(frameCount%50===0){
    var ground= createSprite(1600,random(200,600),random(150,300),20)
    ground.velocityX=-10
    //girl.collide(ground)
    ground.lifetime=200
    
  }
}