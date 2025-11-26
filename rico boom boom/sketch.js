// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let spin = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}
function cenerCircle(x,y,d){
  noFill()
  stroke(225,150,150)
if(d>0){
  circle(x,y,d);
  cenerCircle(x,y,d-5)
}

}

function sideCircle(x,y,d,op,op2){
  noFill()
  stroke(op+50,op2+50,op-op2+50)
if(d>7){
  circle(x,y,d);
  sideCircle(x-(d/2),y,d/2,map(x,0,width,0,225),map(y,0,width,0,225))
  sideCircle(x+(d/2),y,d/2,map(x,0,width,0,225),map(y,0,width,0,225))
  sideCircle(x,y-(d/2),d/2,map(x,0,width,0,225),map(y,0,width,0,225))
  sideCircle(x,y+(d/2),d/2,map(x,0,width,0,225),map(y,0,width,0,225))
  sideCircle(x-(d/2),y-(d/2),d/2,map(x,0,width,0,225),map(y,0,width,0,225))
  sideCircle(x+(d/2),y+(d/2),d/2,map(x,0,width,0,225),map(y,0,width,0,225))
  sideCircle(x+(d/2),y-(d/2),d/2,map(x,0,width,0,225),map(y,0,width,0,225))
  sideCircle(x-(d/2),y+(d/2),d/2,map(x,0,width,0,225),map(y,0,width,0,225))
  
}

} 
function draw() {
  if(spin >= 360) spin = 0;
  background(0);
  //cenerCircle(windowWidth/2,windowHeight/2,width/20)
  translate(windowWidth/2,windowHeight/2)
  rotate(spin)
  sideCircle(0,0,width/16,225, 100)
  spin += 3
}
