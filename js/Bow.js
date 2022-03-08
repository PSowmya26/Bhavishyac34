class Bow {
    constructor(x, y, width, height, bowPos, bowAnimation) {
        
        this.animation = bowAnimation;
        this.speed = 0.05;
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;

        this.bowPosition = bowPos;

        World.add(world,this.body);

    }

    animate() {
        this.speed += 0.05;
    }

    display() {
        var pos = this.body.position;
        var index = floor(this.speed % this.animation.length);

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.animation[index], 0, this.bowPosition, this.width, this.height);
        noTint();
        pop();
    }
}