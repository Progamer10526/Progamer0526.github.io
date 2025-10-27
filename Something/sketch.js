// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let mySquareeeeeeee;let totalBounce=0;let squares = []

function setup(){createCanvas(300, 300);//squares.push(new Bouncer(width/2,height/2));
  textSize(30);textAlign(CENTER,CENTER);if(localStorage.getItem("numBounces")===null){localStorage.setItem("numBounces",0)}else{totalBounce =int(localStorage.getItem("numBounces"))}}
function draw(){
  fill(100,100,100,20);
  rect(0,0,width,height)
  for(let x of squares){
   x.display();
    x.move();}
    fill(225);
    text(totalBounce,width/2,height/2)
    // squares.push(new Bouncer(width/2,height/2))
  }

function mouseClicked(){
  totalBounce = 0;
  localStorage.setItem("numBounces",0)
}

function keyPressed(){
  for(let x =0;x<1000000;x++){
  squares.push(new Bouncer(width/2,height/2))}
}


class Bouncer{
  constructor(x,y){this.y=y;this.x=x;this.speedX=random(-5,5);this.speedY=random(-5,5);this.c = color(random(0,225),random(0,225),random(0,225))}

  display(){
  fill(this.c);
  square(this.x,this.y,30);}
 

  move(){
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x<0||this.x>width){
      this.speedX *= -1;
      totalBounce++;
      localStorage.setItem("numBounces",totalBounce)}
      if(this.y < 0||this.y > height){
        this.speedY *= -1;totalBounce++;localStorage.setItem("numBounces",totalBounce)
      }
    }
  }