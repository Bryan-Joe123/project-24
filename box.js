class box{
    constructor(x,y,width,height){
        var box_option={
            restitution:0.8,
            friction:1.0,
            density:1.2
        }
        this.body=Bodies.circle(x,y,height/2,box_option);
        World.add(world,this.body);
        this.h=height;
    }
    display(){
        var pos = this.body.position;

        if(keyWentDown("up_arrow")){
            Matter.Body.applyForce(this.body,pos,{x:85,y:-85})
        }

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(4); 
        stroke("black");
        fill("white");
        ellipse(0,0,this.h,this.h);
        pop();
    }
}