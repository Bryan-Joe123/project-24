class bin{
    constructor(){
        this.bottom = Bodies.rectangle(600, 650, 200, 20, {isStatic:true});
	    World.add(world, this.bottom);
        this.bottomSprite=createSprite(600, 650, 200, 20);
	
        this.left = Bodies.rectangle(500, 600, 20, 100, {isStatic:true});
	    World.add(world, this.left);
    	this.leftSprite=createSprite(500, 600, 20, 100);
	
	    this.right = Bodies.rectangle(700, 600, 20, 100, {isStatic:true});
    	World.add(world, this.right);
        this.rightSprite=createSprite(700, 600, 20, 100);
    }
}