const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var iss,Iss;
var hasDocked=false;
var bg,spacecraft,spaceCraft;
var spacecraft3,spaceCraft3,spacecraft4,spaceCraft4;
function preload(){
bg=loadImage("Docking-undocking/spacebg.jpg");
spacecraft=loadAnimation("Docking-undocking/spacecraft1.png","Docking-undocking/spacecraft2.png","Docking-undocking/spacecraft3.png","Docking-undocking/spacecraft4.png");
iss=loadImage("Docking-undocking/iss.png");
spacecraft3=loadImage("Docking-undocking/spacecraft3.png");
spacecraft4=loadImage("Docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(1000,800);
  engine=Engine.create();
  world=engine.world;
  spaceCraft=createSprite(450,500,50,50);
  spaceCraft.addAnimation("spacecraft",spacecraft);
  spaceCraft.scale=0.2;
  Iss=createSprite(500,300,40,20);
  Iss.addImage("iss",iss);
  Iss.scale=0.9;
  
}

function draw() {
  background(bg);
  Engine.update(engine);
  if(!hasDocked){
  if(keyDown(LEFT_ARROW)){
  spaceCraft.position.x=spaceCraft.position.x-0.3;
  }
  if(keyDown(RIGHT_ARROW)){
    spaceCraft.position.x=spaceCraft.position.x+0.3;
    }
    if(keyDown(DOWN_ARROW)){
      spaceCraft.position.x=spaceCraft.position.x;
      }
  
  }
  if(keyDown(UP_ARROW)){
    spaceCraft.position.y=spaceCraft.position.y-1;
    }


  drawSprites();
}