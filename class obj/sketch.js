let myBall;
let ballcol = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBall =  new Ball(200,200);
}

function draw() {
  background(220);
  myBall.move()
  myBall.ballcreate();

  if(mouseIsPressed){
    ballcol.push(new Ball(mouseX,mouseY))
  }

for(let x of ballcol){
  x.move()
  x.ballcreate()
}

}
class Ball {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.c = color(random(225),random(225),random(225));
    this.size = 15;
    this.speed = random(2,10)
  }
   ballcreate(){
    fill(this.c);
    circle(this.x,this.y,this.size)
   }

   move(){
    this.x += this.speed;
    if(this.x>width){
      this.x=0
    }
   }
}