var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var block1, block2, block3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	//block1 = createSprite(290, 610, 20, 100);
	block1 = Bodies.rectangle(290, 610, 20, 100, { isStatic: true, restitution: 0.3 });
	block1.shapeColor = "red";
	World.add(World, block1)

	//block2 = createSprite(400, 650, 200, 20);
	block2 = Bodies.rectangle(400, 650, 200, 20, { isStatic: true, restitution: 0.3 });
	block2.shapeColor = "red";
	World.add(World, block2)

	//block3 = createSprite(500, 610, 20, 100);
	block3 = Bodies.rectangle(500, 610, 20, 100, { isStatic: true, restitution: 0.3 });
	block3.shapeColor = "red";
	World.add(World, block3)

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0.3, isStatic: true });
	World.add(World, packageBody);

	//block1 = Bodies.rectangle;
	//World.add(world, block1);

	//block2 = Bodies.rectangle;
	///World.add(world, block2);

	//block3 = Bodies.rectangle;
	//World.add(world, block3);

	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(World, ground);

	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	background(0);

	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y

	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
}