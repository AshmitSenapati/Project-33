var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle

var divisionHeight=300;
var score =0;
var turn = 0
var gameState = "play"

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  
  push()
  fill("yellow")
  textSize(40)
  text("_______________________________________", 0, 450)
  pop()
  textSize(20)
  text("Score : "+score,20,30);
  text("Turn : "+turn, 700,30);

  
  text("100",109,520)
  text("100",30,520)

  text("80",268,520)
  text("80",189,520)

  text("60",422,520)
  text("60",341.5,520)

  text("40",588,520)
  text("40",510,520)

  text("20",668,520)
  text("20",750,520)

  Engine.update(engine);
  ground.display()
  
  
  if(gameState === "end"){
    textSize(40)
    text("GAME OVER", 450,450)
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
    if (particle != null){
        particle.display()

      if (particle.body.position.y >= 760) {
        if(particle.body.position.x < 160 ){
          score = score + 100;
          particle = null;

          if(turn >=5 ){
            gameState = "end";
          }

        }

        else if(particle.body.position.x >160 && particle.body.position.x <320){
          score = score + 80;
          particle = null;

          if(turn >=5 ){
            gameState = "end";
          }

        }
       
        else if(particle.body.position.x >320 && particle.body.position.x <480){
          score = score + 60;
          particle = null;

          if(turn >=5 ){
            gameState = "end";
          }

        }

        else if(particle.body.position.x >480 && particle.body.position.x <640){
          score = score + 40;
          particle = null;

          if(turn >=5 ){
            gameState = "end";
          }

        }

        else if(particle.body.position.x >640 && particle.body.position.x <800){
          score = score + 20;
          particle = null;

          if(turn >=5 ){
            gameState = "end";
          }

        }
      }
    }
 
   
   
}
function mousePressed(){
  if(gameState!== "end"){
    particle = new Particle(mouseX,10,10,10)
    turn++
  }
}
