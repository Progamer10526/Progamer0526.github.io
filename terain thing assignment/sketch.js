// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let linefe
let store = [];
let changew =1
let y
let flagsize 
let timeshift = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  y = height/2
  linefe = {x: 0, Ybase: height, Ytop: height/2, Lnoise: random(200), LNoiseTime: 0.01};

}

function draw() {
  linefe.Lnoise = timeshift
  background(225);
  widthcontrol();
  drawLine();
//  frameRate(1)
timeshift += 0.1

}

function drawLine(){
  strokeWeight(changew);
  stroke("blue")
  let top = height
  let dx
  let x
  for(let w =0; w<= width; w += changew){
   dx = noise(linefe.Lnoise);
    y = map(dx,0,1,height*0.2,height);
    line(w,linefe.Ybase, w,y)
    linefe.Lnoise += linefe.LNoiseTime
    if(y <= top){
      top = y;
      x = w;
    }
  }
  flag(x,top)
  
}
function widthcontrol(){
  if(keyIsDown(RIGHT_ARROW)){
    changew += 1;
}
else if(keyIsDown(LEFT_ARROW)){
  if(changew >= 2){
    changew -=1;
  }
}}

function flag(x,y){
  flagsize = 50
   stroke("black");
   strokeWeight(2);
   line(x,y,x,y-flagsize);
   triangle(x,y-flagsize,x,y-(flagsize - flagsize/3),x+(flagsize/2),y-(flagsize/1.2));
}
