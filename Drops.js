class Drops
{
     constructor(x,y,r){
         var options = {
             friction : 0.1
         }
         this.rain  = Bodies.circle(x,y,5,options);
         this.radius=5;
         World.add(world,this.rain);
     }
     updateY(){     
        if(this.rain.position.y >700){

            Matter.Body.setPosition(this.rain, {x:random(0,1000), y:random(0,700)})
        }
    }

     display(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
     }
}