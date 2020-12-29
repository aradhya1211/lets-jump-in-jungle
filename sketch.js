 var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score ;
var survivalTime ;
var jungleImg;

function preload(){
    
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  background1 = loadImage("P.jfif");
  
}

function setup() {
  createCanvas(600,600);
score = 0;
  background = createSprite(400,300,600,600);
  background.addImage(background1);
  background.scale = 1.9;
  
  monkey = createSprite(40,470,10,10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;
  

  ground = createSprite(400,550,900,10);
ground.visible = false;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
 

}

function draw() {  
  console.log("ground.x" + " " + background.x)
  background.velocityX = -6;
 
    if (background.x < 135){
      background.x = background.width/2;
    }  

  ground.x = ground.width /2;
   ground.velocityX = -5; 
  
 


  banana();
  obstacle();
  
  
  
  if(keyDown("space")){
    monkey.velocityY = -9;
      }
  
  monkey.velocityY = monkey.velocityY + 0.45;
  monkey.collide(ground);
   
  drawSprites();
  stroke("white");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime,100,50);
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score,500,50);
}

function banana(){
  if(World.frameCount%80 === 0){
 bananas = createSprite(700,200,10,10);  
  bananas.addImage(bananaImage);
    bananas.scale = 0.1;
    bananas.y = Math.round(random(120,450));
  bananas.velocityX = -4;
    bananas.lifetime = 500;
  
    FoodGroup.add(bananas);
  }
}
function obstacle(){
  if(World.frameCount % 300 === 0){
  rock = createSprite(700,500,10,10);
    rock.addImage(obstaceImage);
    rock.scale = 0.3;
    rock.velocityX = -8;
    rock.lifetime = 500;
    
    obstacleGroup.add(rock);
}}

