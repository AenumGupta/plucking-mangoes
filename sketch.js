
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,50,30);
	mango2=new mango(1000,70,30);
	mango3=new mango(2050,105,30);
	mango4=new mango(1000,270,30);
	mango5=new mango(1200,130,30);
	mango6=new mango(900,170,30);
	mango7=new mango(1150,220,30);
	mango8=new mango(1025,165,30);
	mango9=new mango(1125,150,30);

	stoneObj=new stone(240,420,20);

	launcherObject=new SlingShot(stoneObj.body,{x:240,y:420});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
textSize(20);
  text ("Press Space to get a Second Chance to Play!!",10,20);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  stoneObj.display();
  launcherObject.display();
  groundObject.display();

  detectColliion(stoneObj,mango1);
  detectColliion(stoneObj,mango2);
  detectColliion(stoneObj,mango3);
  detectColliion(stoneObj,mango4);
  detectColliion(stoneObj,mango5);
  detectColliion(stoneObj,mango6);
  detectColliion(stoneObj,mango7);
  detectColliion(stoneObj,mango8);
  detectColliion(stoneObj,mango9);
}

function mouseDragged(){
  Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
      }
  
function mouseReleased(){
    //console.log("hi");
    launcherObject.fly();
}

function detectColliion(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

  var distance=dist (stoneBodyPosition.x,stoneBodyPosition.y,
    mangoBodyPosition.x,mangoBodyPosition.y);

    if(distance<=lmango.r+lstone.r){
      console.log("hi")
      Matter.Body.setStatic(lmango.body,false);
    }

}

function keyPressed(){
  if(keyCode === 32){
      //console.log("hi");
      launcherObject.attach(stoneObj.body);
  }
}
