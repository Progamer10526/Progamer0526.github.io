// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let angle = 55;
let start = 350

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function branch(leg) {
  if(leg > start/2 ){
    stroke(101, 67, 33);
  }
  if(leg < start/3 ){
    stroke(0, 130, 0)
  }
  strokeWeight(map(leg,2,300,1,30))
  line(0, 0, 0, -leg)
  translate(0, -leg)
  if (leg > 0.5) {
    push();
    rotate(angle);
    branch(leg * 0.63); 
    pop();
    push();
    rotate(-angle);
    branch(leg * 0.63);
    pop() ;
  }
}

function draw() {
  background(220);
  translate(width/2,height)
  branch(start)
}
