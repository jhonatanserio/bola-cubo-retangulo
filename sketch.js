const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var cube;
var rentagulo;
var ground;
var angle=60;
var poly;


function setup() {
  createCanvas(400,400);
  

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir: 0.05
   }
   var cube_options = {
     restitution: 0.25,
     frictionAir: 0.001
   }
   var rentagulo_options = {
     restitution: 0.65,
     frictionAir: 0.05
   }
   
   var ground_options ={
     isStatic: true
   };
  
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball);

  cube = Bodies.rectangle(100,10,40,40,cube_options)
  World.add(world,cube)

  rentagulo = Bodies.rectangle(350,5,80,40,rentagulo_options)
  World.add(world,rentagulo)
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  fill("SteelBlue")
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(cube.position.x,cube.position.y,40,40)
  rect(rentagulo.position.x,rentagulo.position.y,80,40)
 


  
  
}

