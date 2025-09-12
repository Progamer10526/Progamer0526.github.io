// User events + day 1 challenge 
// Tory
// Yes
//
// Fun user events 

let circleColor = true;
let currentColor = "white";
let spot;
let circleSize = 90;
let rectSize = 300;
let y;
let fontSize = 50;

function setup() {
  createCanvas(400, 400);
  spot = width / 2
  y = height * 0.75
}

function draw() {
  background(220);
  movement();
  challenge(); // coordunate system challenge
  mouseReport();
}

function movement(){
  if(keyIsDown(RIGHT_ARROW)) spot += 5;
  else if(keyIsDown(LEFT_ARROW)) spot -= 5;
  if (keyIsDown(UP_ARROW)) y -=5;
  else if(keyIsDown(DOWN_ARROW)) y +=5;
}

function keyPressed(){
  if(keyCode === 71) currentColor = "green";
  else if(keyIsDown(89) && keyIsDown(SHIFT)) currentColor = "yellow";
}

function challenge(){
  
  strokeWeight(20);
  noFill();
  if(circleColor){fill(currentColor);}
  circle(width , height ,circleSize);
  circle(width / 2,height/ 2,circleSize);
  circle(width , 0 ,circleSize);
  circle(0 , height  ,circleSize);
  circle(0 , 0 ,circleSize);
  rect(spot - (rectSize / 2),y, rectSize,50,20,20,20,20);
}

function mouseReport(){
  textSize(fontSize);
  text(mouseX + "x, " + mouseY + "y, " + mouseIsPressed, mouseX,mouseY);
}
function mouseReleased(){
  fontSize = random(20,60);
}