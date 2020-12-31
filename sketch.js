var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=255

	land=createSprite(330,610,20,100)
	land.shapeColor = "red"

	land2 = createSprite(470, 610, 20, 100)
	land2.shapeColor = "red"

	land3 = createSprite(400,height-35 , 160, 10)
	land3.shapeColor = "blue"


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground using matter.js
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 

	land3 = Bodies.rectangle(400, height-35, 160, 10, { isStatic: true });
	World.add(world, land3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x
  packageSprite.y = packageBody.position.y-5

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // for packages
	Matter.Body.setStatic(packageBody,false)

	}
}



