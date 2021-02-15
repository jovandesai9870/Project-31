const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint  = Matter.Constraint;

var engin,world;
var drops = [];
var maxDrops=100;
var ground;
var thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame=0;

function preload(){
  thunder1 = loadImage("thunder1.png");
  thunder2 = loadImage("thunder2.png");
  thunder3 = loadImage("thunder3.png");
  thunder4 = loadImage("thunder4.png");

 
}

function setup(){
    
    engine  = Engine.create();
    world = engine.world;

     createCanvas(1000,700);
    

    umbrella = new Umbrella(200,500);

    
     if(frameCount % 150 === 0){

      for(var i=0; i<maxDrops; i++){
          drops.push(new Drops(random(0,400), random(0,400)));
      }
  }

}

function draw(){
  Engine.update(engine);
  background(0); 

  var rand = Math.round(random(1,4));
  if(frameCount%120===0){
    thunderCreatedFrame  = frameCount;
    thunder = createSprite(random(10,370));
    thunder.lifetime = 100;
    switch(rand){
      case 1: thunder.addImage(thunder1)
      break;
      case 2: thunder.addImage(thunder2);
      break;
      case 3: thunder.addImage(thunder3);
      break;
      case 4: thunder.addImage(thunder3);
      break;
      default: break;
    }
    thunder.scale = random(0.3,0.6);
  }

  if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400), random(0,400)));
    }

}
 
   umbrella.display();

  for(var i = 0; i<maxDrops; i++){
    drops[i].display();
    drops[i].updateY()
    
}


drawSprites();


}   

