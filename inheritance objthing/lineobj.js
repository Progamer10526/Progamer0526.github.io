class LineObj extends AnimatedObject{
    constructor(){
    super(random(width),random(height));
  
    }
  
    move(){
      super.move();
      this.x-=5;
      
  
    }
  
    display(){
      if(mouseIsPressed){
        strokeWeight(12)
      }
      else strokeWeight(2);
      line(this.x,this.y,this.x + 35,this.y);
    }
  }