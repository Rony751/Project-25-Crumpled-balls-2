const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var dustbin1, dustbin2, dustbin3, dustbinImg;
var paper, ground;
var world;

function preload() {
	dustbinImg = loadImage("dustbingreen.png");
}

function setup(){
	createCanvas(1000, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(700, 510, 200, 20);
	dustbin2 = new Dustbin(600, 435, 20, 170);
	dustbin3 = new Dustbin(800, 435, 20, 170);

	paper = new Paper(100, 100, 20);
	ground = new Ground(width/2, 530, width, 20);

	Engine.run(engine);
}

function draw() {
	background(150);

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();

	paper.display();
	ground.display();

	imageMode(CENTER);
	image(dustbinImg, 700, 432, 235, 175);
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:70,y:-70});
	}
}