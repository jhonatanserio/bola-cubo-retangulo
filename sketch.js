const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var bolada;
var chao;
var bolls;
var cha



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var bolls_options={
    restituntion:0.95
    
  }
  var bolada_options={
      restituntion:0.01,
      frinction:1,
      frinctionAir:0.3
      
  };
  var chao_options ={
    isStatic: true
  };
  var cha_options ={
    isStatic: true
  }
  bolada=Bodies.circle(100,10,20,bolada_options);
  World.add(world,bolada);

  bolls=Bodies.circle(250,10,20,bolls_options);
  World.add(world,bolls);

  chao=Bodies.rectangle(200,390,400,20,chao_options);
  World.add(world,chao);

  cha=Bodies.rectangle(300,200,200,20,cha_options);
  World.add(world,cha)
  rectMode(CENTER)
  ellipseMode(RADIUS)
}
function draw() 
{
 background(51)
 Engine.update(engine)
 ellipse(bolada.position.x,bolada.position.y,20)
 ellipse(bolls.position.x,bolls.position.y,20)
 rect(chao.position.x,chao.position.y,400,20)
 rect(cha.position.x,cha.position.y,400,20)
}

