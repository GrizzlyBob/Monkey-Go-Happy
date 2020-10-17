
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score
var stone
var survivalTime
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  FoodGroup=createGroup()
  obstaclesGroup=createGroup()
   survivalTime=0
  score=0
}


function draw() {
  background("white")
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY +0.8
  monkey.collide(ground)
  food()
  Obstacles()
drawSprites()
  stroke("white")
  textSize(20)
  fill("white")
  text("score"+score,500,50)
  if(obstaclesGroup.isTouching(monkey)){
     ground.velocityX=0
    monkey.velocityX=0
    obstaclesGroup.setVelocityXEach(0)
    obstaclesGroup.setLifetimeEach(-1)
    FoodGroup.setLifetimeEach(-1)
    FoodGroup.setVelocityXEach(0)
}
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=survivalTime+1
  text("survivalTime"+ survivalTime,100,50)
  }
function food(){
  if(frameCount %60 === 0){
    banana=createSprite(600,250,40,10)
    banana.y=random(120,200)
    banana.velocityX=-5
    banana.lifetime=300
    banana.addImage(bananaImage)
    banana.scale=0.05
    FoodGroup.add(banana)
  }
}
function Obstacles(){
  if(frameCount %300 === 0){
    stone=createSprite(800,320,10,40)
    stone.velocityX=-6
    stone.lifetime=300
    stone.addImage(obstacleImage)
    stone.scale=0.15 
    obstaclesGroup.add(stone)
  }
}




