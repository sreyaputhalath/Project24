const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(width-150, height - 200, 180, 150);
  player = new Player(width-150, playerBase.body.position.y - 153, 50, 180);

  playerArcher = new PlayerArcher(
    width-550,
    playerBase.body.position.y-165,
    80,
    80
  );
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 600,
    height - 200,
    180,
    150
  );
  computer = new Computer(
    width - 600,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 203,
    computerBase.body.position.y - 165,
    80,
    80
  );
  
  //Create an arrow Object
  arrow = new PlayerArrow(playerArcher.body.position.x,playerArcher.body.position.y,100,10)
  
}

function draw() {
  background("#82CAFF");

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()


  //Display arrow();
  arrow.display()
  //if Space (32) key is pressed call shoot function of playerArrow
  
  
  
  if(keyCode === 32){
    arrow.shoot(playerArcher.body.angle);

  }
  





}
  


