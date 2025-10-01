// Perlin Noise
// Troy Honeywill
// 10/1/2025
//
// Extra for Experts:
// creates a smooth trerain that shits and has a flag on the peak.
let linefe
let store = [];
let changew =1
let y
let flagsize 
let timeshift = 1;
let average 
let averagechange = 1
let stroetest = 1
let test2 = 0


function setup() {
  createCanvas(windowWidth, windowHeight);
  y = height/2
  linefe = {x: 0, Ybase: height, Ytop: height/2, Lnoise: random(200), LNoiseTime: 0.01};
  average = height/2

}

function draw() { // Main loop function that makes the code reapeat
  linefe.Lnoise = timeshift  // Shifts the time so that you moves left
  background(225);
  widthcontrol();
  drawLine();
timeshift += 0.1

}

function drawLine(){ // draws the terain and stores values for the flag/average line.
  strokeWeight(changew);
  stroke("blue")
  let top = height
  let dx
  let x
  for(let w =0; w<= width; w += changew){ //Loop that fills the screen with the terain
   dx = noise(linefe.Lnoise);
    y = map(dx,0,1,height*0.2,height);
    line(w,linefe.Ybase, w,y)
    linefe.Lnoise += linefe.LNoiseTime
    if(y <= top){ // Finds the highest peak
      top = y;
      x = w;
    }
    average += averagechange
    stroetest += y
    test2 += 1
  }
  stroke("black")
  flag(x,top)  // creates the flag with the biggest peak
  average = stroetest/test2 // Finds the average of the terain
  line(0,average,width,average) 
}

function widthcontrol(){ //Makes it so I can zoom in and out of the terain
  if(keyIsDown(RIGHT_ARROW)){
    changew += 0.1;
}
else if(keyIsDown(LEFT_ARROW)){
  if(changew >= 1.5){
    changew -=0.1;
  }
}}

function flag(x,y){ // creats the flag at the top of the biggest peak 
  flagsize = 50
   stroke("black");
   strokeWeight(2);
   line(x,y,x,y-flagsize);
   triangle(x,y-flagsize,x,y-(flagsize - flagsize/3),x+(flagsize/2),y-(flagsize/1.2));
}
