// mutiple keys and outlines 
// Troy
// 09/15/2025
//
// Extra for Experts:
// Idk what this is for fr


function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  guy();
}

function guy(){
  let size = 100;
  let shift = size /2;
  let leg = size*0.08
  let x = width/2
  let y = height/2
  strokeWeight(0);
  fill("#AAFFAA");
  rect(x - shift, y - shift, size, size,size,size,0,0);
  rect(x-shift, y + shift, leg *0.8,size*0.2);
  rect(x+ shift -(leg*0.8), y + shift, leg*0.8,size*0.2);
  strokeWeight(size*0.025);
  line(x - (shift/2.5), y + (shift/2.5),(width/2) + (shift/2.5),y + (shift/2.5));
  strokeWeight(0);
  fill("black");
  circle(x- (leg*3.5), y - (shift/30) ,leg);
  circle(x+ (leg*3.5), y - (shift/30) ,leg);
}