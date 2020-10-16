
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width /2;

 
  foodGroup = new Group();
   obstaclesGroup=new Group();

  
}


function draw() {
 background(120,154,202);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
   
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    if (keyDown("space")&& monkey.y>314){
        monkey.velocityY = -12;
     }
   monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  food();
  obstacles();
 
  if(foodGroup.isTouching(monkey)){
    foodGroup.destroyEach();
  }
  
  if(obstaclesGroup.isTouching(monkey)){
 foodGroup.setVelocityXEach(0);        obstaclesGroup.setVelocityXEach(0);
  ground.velocityY = 0;
  monkey.velocityY = 0;
  foodGroup.velocityY=0;
  obstaclesGroup.setLifetimeEach(-1);          foodGroup.setLifetimeEach(-1);
  
  }
  
  
  drawSprites();
}
function food(){
   if (frameCount % 80 === 0){
   banana = createSprite (400,243,20,20);
    banana.addImage("banana",bananaImage);
     banana.scale=0.1;
     banana.y = Math.round(random(235,270));
      banana.velocityX=-7;
    banana.setLimetime=100;
    foodGroup.add(banana);
   }
}


function obstacles(){
    if(frameCount%300===0){
    obstacle = createSprite(250,329,20,20);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-5
    obstaclesGroup.add(obstacle);
  }
}
  
  
  
  






