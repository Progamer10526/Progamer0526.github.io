// mutiple keys and outlines 
// Troy
// 09/15/2025
//
// Extra for Experts:
// Idk what this is for fr


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  guy();
}

function guy(){
  let size = 100;
  let shift = size /2;
  let leg = size*0.08
  strokeWeight(0);
  fill("#AAFFAA");
  rect((width/2) - shift, (height/2) - shift, size, size,90,90,0,0);
  rect((width/2)-shift, (height/2) + shift, size*0.08,size*0.25);
  rect((width/2)+ shift -leg, (height/2) + shift, leg,size*0.25);
  strokeWeight(2);
  line((width/2) - (shift/2), (height/2) + (shift/2.5),(width/2) + (shift/2),(height/2) + (shift/2.5))
  fill("black")
  circle((width/2)- (leg*2), (height/2) - (shift/7),leg)
}