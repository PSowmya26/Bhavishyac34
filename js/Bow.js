class Bow {
  constructor(x, y, width, height, bowPos) {
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;

    this.image = loadImage("./assets/arrow.png");
    this.bowPosition = bowPos;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, this.bowPosition, this.width, this.height);
    pop();
  }
}
