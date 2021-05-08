class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x: offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        var Anchor2X=pointB.x+this.offsetX
		var Anchor2Y=pointB.y+this.offsetY
        line(pointA.x, pointA.y, Anchor2X, Anchor2Y);
    }
    
}