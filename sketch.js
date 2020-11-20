const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pendulum,pendulum2,pendulum3,pendulum4,pendulum5;
var string,string2,string3,string4,string4,string5;

function setup(){
  var canvas = createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  
  pendulum  = new Pendulum(500,500,"red");
  pendulum2 = new Pendulum(500,530,"red");
  pendulum3 = new Pendulum(500,560,"red");
  pendulum4 = new Pendulum(500,590,"red");
  pendulum5 = new Pendulum(500,620,"red");
  string    = new Sling(pendulum.body,{x:200,y:200});
  string2   = new Sling(pendulum2.body,{x:275,y:200});
  string3   = new Sling(pendulum3.body,{x:350,y:200});
  string4   = new Sling(pendulum4.body,{x:425,y:200});
  string5   = new Sling(pendulum5.body,{x:500,y:200});
}
function draw(){
  background(0);
  Engine.update(engine);

  pendulum.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  string.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
}
function mouseDragged(){
  Matter.Body.setPosition(pendulum.body,{x:mouseX,y:mouseY});
  
}