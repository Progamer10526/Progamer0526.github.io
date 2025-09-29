// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let linef
let store = [];
let changew =1
function setup() {
  createCanvas(windowWidth, windowHeight);
  linef = {x: 0, Ybase: height, Ytop: height/2, Lnoise: random(200), LNoiseTime: 0.01};
  drawLine();
}

function draw() {
  linef.Lnoise = 1
  background(225);
  widthcontrol();
  drawLine();
  flag();

}

function drawLine(){
  strokeWeight(changew);
  stroke("blue")
  let dx
  let y = height/2
  for(let w =0; w<= width; w += changew){
   dx = noise(linef.Lnoise);
    y = map(dx,0,1,height*0.2,height);
    line(w,linef.Ybase, w,y)
    linef.Lnoise += linef.LNoiseTime
    store.push(y)
  }
  
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

function flag(){
  let high = 1
  for( let x in store){
    if(store[x] < high){
      high = store[x];
    }

  }
}
