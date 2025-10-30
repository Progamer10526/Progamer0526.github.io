class CircleOj extends AnimatedObject{
    constructor(x,y){
      super(x,y);
      this.size = random(20,40);
    }
  
    display(){
      stroke(0,0,0)
      
      fill(225,0,0);
      circle(this.x,this.y,this.size);
      fill(110,0,0)
      strokeWeight(2)
      circle(this.x,this.y,this.size/3)
    }
  }