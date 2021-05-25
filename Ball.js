class Ball {
    constructor(x, y){

        var options = {
            frictionAir:0.0004,
            density:12.1
        }
        
        this.body = Bodies.circle(x, y, 40, options);
        World.add(world, this.body);

        this.r = 40;
        
    }

    display(){
       
        var angle = this.body.angle;
        push ();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);

        fill(200, 100, 150);
        ellipseMode(CENTER)
        ellipse(0, 0, 80, 80);
        pop ();
    }
}