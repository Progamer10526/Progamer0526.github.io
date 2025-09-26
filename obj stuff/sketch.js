// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ball; let ball2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = {x: width/2,y: height/2,size:50, c: color(random(255),random(255),random(255)),timeX: random(100),timeY:random(100), timeOff:0.02, timeC: 0.1};
  ball2 = {x: width/2,y: height/2,size:50, c: color(random(255),random(255),random(255)),timeX: random(100),timeY:random(100), timeOff:0.1, timeC: 0.1};
}

function draw() {
  // background(220);
 moveball(ball);
 moveball(ball2)
}


function moveball(b){
  let dx = noise(b.timeX);
  dx = map(dx,0,1,-5,5);
  let dy = noise(b.timeY);
  dy = map(dy,0,1,-5,5);
  b.x += dx;
  b.y += dy;
  if(b.x >= width){
    b.x -= width;
  }
  else if(b.x <= 0){
    b.x += width;
  }
  if(b.y >= height){
    b.y -= height;
  }
  else if(b.y <= 0){
    b.y += height;
  }
 

  fill(b.c);
  circle(b.x,b.y,b.size);
  b.timeY += b.timeOff
  b.timeX += b.timeOff

}