const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
hr = hour();
mn = minute();
sc = second();

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  arc(x,y,10,40, sc);
  arc(x,y,10,40, mn);
  arc(x,y,10,40, hr);


  angleMode(DEGREES)

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,24,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()
  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()
  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  drawSprites();
}