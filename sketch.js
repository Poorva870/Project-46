var road, roadImg;
var car, carImg;
var edges;
var obstacle1, obstacle2;
var obstacle1Img, obstacle2Img;
var stone, stoneImg;
var obstacle1G, obstacle2G, stoneG;
var fuel, fuelImg, fuelG;
var life, lifeImg, lifeG;
var stump, stumpImg, stumpG;
var coin, coinImg, coinG;

function preload(){
  roadImg = loadImage("Images/Road.png");
  carImg = loadImage("Images/Car.png");
  stoneImg = loadImage("Images/stone.png");
  obstacle1Img = loadImage("Images/obstacle1.png");
  obstacle2Img = loadImage("Images/obstacle2.png");;
  fuelImg = loadImage("Images/fuel.png");
  lifeImg = loadImage("Images/life.png");
  stumpImg = loadImage("Images/stump.png");
  coinImg = loadImage("Images/coin.png");
}

function setup() {
  createCanvas(800,800);
  road = createSprite(400, 200, 50, 50);
  road.addImage("road", roadImg);
  road.scale = 0.478;
  road.velocityY = 10;

  car = createSprite(400, 700, 50, 50);
  car.addImage("carRunning", carImg);
  car.scale = 0.3;

  stoneG = new Group();
  obstacle1G = new Group();
  obstacle2G = new Group();
  fuelG = new Group();
  lifeG = new Group();
  stumpG = new Group();
  coinG = new Group();

  edges = createEdgeSprites();
}

function draw() {
  background(0);

  if(keyDown("Right_Arrow")){
    car.x = car.x + 10;
  }

  if(keyDown("Left_Arrow")){
    car.x = car.x - 10;
  }

  if(keyDown("Up_Arrow")){
    car.y = car.y - 10;
  }
  
  if(keyDown("Down_Arrow")){
    car.y = car.y + 10;
  }

  if(road.y > 400 ){
    road.y = 300;
   }

  car.collide(edges);

  spawnObstacles();
  spawnLife();

  drawSprites();
}

function spawnObstacles(){
  if(frameCount %200 === 0){
    stone = createSprite(random(100, 600), -100, 50, 50);
    stone.addImage(stoneImg);
    stone.scale = 0.09;
    stoneG.setVelocityYEach(7);
    stone.lifetime = 800;
    stoneG.add(stone);
  }
  if(frameCount %150 === 0){
    obstacle1 = createSprite(random(50, 700), -100, 50, 50);
    obstacle1.addImage(obstacle1Img);
    obstacle1.scale = 0.05;
    obstacle1G.setVelocityYEach(7);
    obstacle1.lifetime = 800;
    obstacle1G.add(obstacle1);
  }
  if(frameCount %250 === 0){
    obstacle2 = createSprite(random(80, 700), -100, 50, 50);
    obstacle2.addImage(obstacle2Img);
    obstacle2.scale = 0.05;
    obstacle2G.setVelocityYEach(7);
    obstacle2.lifetime = 800;
    obstacle2G.add(obstacle2);
  }

 if(frameCount %300 === 0){
    stump = createSprite(random(80, 750), -100, 50, 50);
    stump.addImage(stumpImg);
    stump.scale = 0.4;
    stumpG.setVelocityYEach(7);
    stump.lifetime = 800;
    stumpG.add(stump);
  }
}

function spawnLife(){
  if(frameCount %500 === 0){
    fuel = createSprite(random(100, 700), -100, 50, 50);
    fuel.addImage(fuelImg);
    fuel.scale = 0.02;
    fuelG.setVelocityYEach(7);
    fuel.lifetime = 800;
    fuelG.add(fuel);
  }

  if(frameCount %600 === 0){
    life = createSprite(random(100, 700), -100, 50, 50);
    life.addImage(lifeImg);
    life.scale = 0.09;
    lifeG.setVelocityYEach(7);
    life.lifetime = 800;
    lifeG.add(life);
  }

  if(frameCount %100 === 0){
    coin = createSprite(random(100, 700), -100, 50, 50);
    coin.addImage(coinImg);
    coin.scale = 0.05;
    coinG.setVelocityYEach(7);
    coin.lifetime = 800;
    coinG.add(coin);
  }
}