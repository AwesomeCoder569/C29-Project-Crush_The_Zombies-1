const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base1,base2;

var bridge, jointPoint;

var jointLink;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base1 =  new Base (200, height/2 + 50, 500, 100, true);
  base2 = new Base (width - 200, height/2 + 50, 500, 100, true);

  bridge = new Bridge(15, { x: width/2 - 400, y: height/2 });
  jointPoint = new Base(width - 600, height / 2 + 10, 40, 20, color, true);
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link (bridge, jointPoint);
}

function draw() {
  background(51);
  Engine.update(engine);

  base1.show();
  base2.show();
  bridge.show();
  //jointPoint.show();
}

