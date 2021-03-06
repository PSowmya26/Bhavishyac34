const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, backgroundImg;
var dogImg;
var bowData, bowSpritesheet, arrowImg;
var bowAnimation = [];

function preload() {
  backgroundImg = loadImage("./assets/background.jpg");
  dogImg = loadImage("./assets/dog.gif");

  bowSpriteData = loadJSON("./assets/bow_and_arrow/bow_and_arrow.json");
  bowSpritesheet = loadImage("./assets/bow_and_arrow/bow_and_arrow.png");
  arrowImg = loadImage("./assets/arrow.png");
}

function setup() {
  createCanvas(800, 600);

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  dog = Bodies.rectangle(700, 500, 100, 150, { isStatic: true });
  World.add(world, dog);

  var bowFrames = bowSpriteData.frames;
  for (var i = 0; i < bowFrames.length; i++) {
    var pos = bowFrames[i].frame;
    var img = bowSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
    bowAnimation.push(img);
  }
}

function draw() {
  background(51);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  translate(dog.position.x, dog.position.y);
  imageMode(CENTER);
  image(dogImg, 0, 0, 160, 150);
  pop();

  showBow();
}

function showBow() {
  if (bows.length > 0) {
    if (
      bows[bows.length - 1] === undefined ||
      bows[bows.length - 1].body.position.x < width + 100
    ) {
      var positions = [350,400];
      var position = random(positions);
      var bow = new Bow(100,100, 170, 170, position);

      bows.push(bow);
    }

    for (var i = 0; i < bows.length; i++) {
      if (bows[i]) {
        Matter.Body.setVelocity(bows[i].body, {
          x:9,
          y: 0,
        });

        bows[i].display();
      }
    }
  } else {
    var bow = new Bow(100, 350, 170, 170, +60);
    bows.push(bow);
  }
}
