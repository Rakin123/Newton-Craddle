class Bob{
    constructor(x,y,r){
        var options= {
            isStatic: false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.bob = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.bob);
    }

    display(){
        var pos = this.bob.position;
        push();
        translate(pos.x,pos.y);
        strokeWeight(3)
        stroke("black")
        fill("lightgreen")
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}