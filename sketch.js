
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(width/2, 90, 500, 50);

	bobObject1 = new Bob(240,600,40);
	bobObject2 = new Bob(320,600,40);
	bobObject3 = new Bob(400,600,40);
	bobObject4 = new Bob(480,600,40);
	bobObject5 = new Bob(560,600,40);

	

	bobDiameter = 40 *2
	
	rope1 = new Rope (bobObject1.bob, roof.body,-160,0);
	rope2 = new Rope (bobObject2.bob, roof.body, -80, 0);
	rope3 = new Rope (bobObject3.bob, roof.body,0,0);
	rope4 = new Rope (bobObject4.bob,roof.body,80,0);
	rope5 = new Rope (bobObject5.bob, roof.body, 160 , 0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);


  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(bobObject5.bob, {x: mouseX , y: mouseY});
}
	




