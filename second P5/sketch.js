// User events + day 1 challenge 
// Tory
// Yes
//
// Fun user events 

let circleColor = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  challenge(); // coordunate system challenge
}

function keyPressed(){
  if(circleColor){ circleColor = false;} else circleColor = true;}


function challenge(){
  let circleSize = 90
  strokeWeight(3);
  noFill();
  if(circleColor){fill(20,50,90);}
  circle(width , height ,circleSize);
  circle(width / 2,height/ 2,circleSize);
  circle(width , 0 ,circleSize);
  circle(0 , height  ,circleSize);
  circle(0 , 0 ,circleSize);
}