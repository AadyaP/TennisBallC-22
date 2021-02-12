const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world; var ground; var ball;


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var options={isStatic:true};
  ground=Bodies.rectangle(200,380,15,20,options);
  World.add(world,ground);
var ball_options={isStatic:false,restitution:0.5};
  ball=Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

}

function draw() {
  background("black"); 
Engine.update(engine);
rectMode(CENTER); 
rect(ground.position.x,ground.position.y,300,10);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);

  
}