// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let smallarm = 360/60;
let bigArm = 360/12;
let size;
let size2;
let rotation = 0;
let hours;
let min;
let sec;


function setup() {
  createCanvas(windowWidth, windowHeight);
  size  = height *0.8;
  size2  = size/2;
  angleMode(DEGREES);
}

function draw() {
  translate(width/2,height/2);
  hours = hour()
  min = minute()
  sec = second()
  background(220);
  arms();
  clockOutside();
  animation()
}


function clockOutside(){
  push();
  stroke("red");
  strokeWeight(6);
  point(0,0);
  pop();
  strokeWeight(8);
  noFill();
  circle(0,0,size);
  arms();
  lines();

}

function lines(){
  push();
  strokeWeight(3)
  for(let x =0; x<=360;x += 360/60){
    line(0,size2*0.75,0,size2*0.95);
    rotate(30);
  }
  pop();
  push();
  strokeWeight(1);
  for(let x =0; x<=360;x += 360/60){
    line(0,size2*0.82,0,size2*0.95);
    rotate(360/60);
  }
  pop();
}

function arms(){
 push();
 rotation = (hours *30) +180;
 strokeWeight(5);
 if(hours >= 12){
  hours -= 12;
 }
 rotate(rotation)
 line(0,0,0,size2 *0.4)
 pop()
 push();
 rotation = (min *(360/60)) + ( 180);
 strokeWeight(3);
 rotate(rotation)
 line(0,0,0,size2 *0.67)
 pop()
 push();
 rotation = (sec *(360/60)) +180;
 strokeWeight(1);
 rotate(rotation)
 stroke("red")
 line(0,0,0,size2 *0.7)
 pop()
}

function animation(){
  resetMatrix()
  translate(width*0.8,height*0.8)
  for(let r = 0; r <=360; r += 30);
  rect
}