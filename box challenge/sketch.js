// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let boxsize = 100;
let wall = 0;
let boxX = 0;let boxY = 0;
let sped = boxsize*0.1

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawbox()
}

function wallcalc(){
  switch(wall){
    case 0:
      if (boxX <= (width - boxsize)){
        boxX += sped
      }
      else{
        boxX = width - boxsize
        wall++}
    break;
    case 1:
      if(boxY <= (height - boxsize)){
        boxY += sped
      }
      else {
        boxY = height - boxsize
        wall++;}
    break;
    case 2:
      if(boxX >= 0){
        boxX -= sped
      }
      else wall++;
    break;
    case 3:
      if(boxY >= 0){
        boxY -= sped
      }
      else wall=0;
    break;
  }
}

function drawbox(){
  rect(boxX,boxY,boxsize);
  wallcalc();
}
