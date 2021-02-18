const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var box1;
var bin1;

function setup(){
  createCanvas(800, 700);
  engine=Engine.create();
  world=engine.world;

  bin1 = new bin();

  box1 = new box(100,500,70,70);

  // Create a Ground
	

  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
}

function draw(){
  background("blue");
  Engine.update(engine);
  drawSprites();
  box1.display();

}