// Project Title
// Your Name
// Date
let ball1;
let ball2;
let ball3;
let size;
let ballsize = 40



function setup() {
  createCanvas(windowWidth, windowHeight);
  size = height/3/2
  ball1 = new RoundRacer(size,20);
  ball2 = new RoundRacer(size*3, 30);
  ball3 = new RoundRacer(size*5, 40);
}

function draw() {
  background(220);
  ball1.move()
  ball1.make()
  ball2.move()
  ball2.make()
  ball3.move()
  ball3.make()
}


class RoundRacer {

constructor(Ypos,speed){
  this.speed = speed;
  this.Ypos = Ypos;
  this.Xpos = 0;
  this.clr = color(random(225),random(225),random(225));
}

make(){
  fill(this.clr);
  circle(this.Xpos,this.Ypos,ballsize);
}

move(){
 if(this.Xpos > width){
  this.Xpos = 0;
 }
 else this.Xpos += this.speed;
}
}