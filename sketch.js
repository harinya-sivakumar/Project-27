const Engine  = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var universe, world,  roof;
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
  createCanvas(1200,800);

  roof = createSprite(600, 50, 600, 80);
  roof.shapeColor = rgb(48, 23, 7)

  universe = Engine.create();
  world = universe.world ; 

  


  ball1 = new Ball(400, 400);
  rope1 = new Rope(ball1.body, {x: 400, y: 80});

  ball2 = new Ball(480, 400);
  rope2 = new Rope(ball2.body, {x: 480, y: 80});

  ball3 = new Ball(560, 400);
  rope3 = new Rope(ball3.body, {x: 560, y: 80});

  ball4 = new Ball(640, 400);
  rope4 = new Rope(ball4.body, {x: 640, y: 80});

  ball5 = new Ball(720, 400);
  rope5 = new Rope(ball5.body, {x: 720, y: 80});
  
  
}

function draw() {
 //rectMode(CENTER);
  background(0);  
  Engine.update(universe);
  
  ball1.display();
  rope1.display();

  ball2.display();
  rope2.display();

  ball3.display();
  rope3.display();

  ball4.display();
  rope4.display();

  ball5.display();
  rope5.display();

  //roof.display();

  drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x:mouseX, y:mouseY});
}

