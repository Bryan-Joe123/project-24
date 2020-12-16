const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var box1;

function setup(){
  createCanvas(800, 700);
  engine=Engine.create();
  world=engine.world;

  box1 = new box(100,500,70,70);

  // Create a Ground
	bottom = Bodies.rectangle(600, 650, 200, 20, {isStatic:true} );
	World.add(world, bottom);
  bottomSprite=createSprite(600, 650, 200, 20);
	
	left = Bodies.rectangle(500, 600, 20, 100, {isStatic:true} );
	World.add(world, left);
	leftSprite=createSprite(500, 600, 20, 100);
	
	right = Bodies.rectangle(700, 600, 20, 100, {isStatic:true} );
	World.add(world, right);
  rightSprite=createSprite(700, 600, 20, 100);

  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
}

function draw(){
  background("blue");
  Engine.update(engine);
  drawSprites();
  box1.display();

}