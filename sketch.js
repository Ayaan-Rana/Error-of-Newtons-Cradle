var roof,bob,bob2,bob3,bob4;
var pendulum1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio=pixelDensity();
	let options={
		mouse: canvasmouse
	};
	mConstraint=MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

roof = new Roof(400, 200, 400, 20);
bob = new Bob(280, 400, 60);
bob2 = new Bob(340, 400, 60);
bob3 = new Bob(400, 400, 60);
bob4 = new Bob(460, 400, 60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 roof.display();
 bob.display();
 bob2.display();
 bob3.display();
 bob4.display();
}

function mouseDragged(){
	Matter.Body.setPosition(pendulum1.body,{x:mouseX, y:mouseY})
}

