class Box{
    constructor(x,y,w,h){
     var options={
            isStatic:false,
}
       this.width = w;
       this.height = h;
       this.body = Bodies.rectangle(x,y,w,h,options);
       World.add(world,this.body);
    }

    display(){
       rectMode(CENTER);
       var angle = this.body.angle;
       push();
       translate(this.body.position.x,this.body.position.y);
       rotate(angle);
       rect(0,0,this.width,this.height)
       pop();

    }
}