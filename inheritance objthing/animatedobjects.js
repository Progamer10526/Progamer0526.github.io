class AnimatedObject{
    constructor(x,y){
      this.x = x;this.y=y;this.size=6;
      this.c = color(225)
    }
  
    move(){
      this.x-=5;
      this.y += random(-2,2);
      if(this.x<0)this.x=width;
    }
  
    display(){
      stroke(this.c)
      strokeWeight(this.size);
      point(this.x,this.y);
    }
  }