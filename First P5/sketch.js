// Yes with coordinate system and user events
// Troy H 
// Some day in this week
//
// Fisrt look at interactive programs frfr
function preload() {
  heart = loadImage('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAAXNSR0IArs4c6QAAAEZJREFUGFd9jcsNACAIQ9tB2MeR3YdBMBBq8CIXPi2vBICIiOwkOedatllqWO6Y8yOWoyuNf1GZwgmf+RRG2YXr+xVFmA8HZ9Mx/KGPMtcAAAAASUVORK5CYII=');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  print(windowWidth, windowHeight, width, height);
}

function draw() {
  background(220);
  draw6Or7circle()
}
function draw6Or7circle() {
  fill("yellow");
  strokeWeight(7);
  line(mouseX,mouseY, mouseX,mouseY + 70)
  circle(mouseX, mouseY, 20);
  fill("green");
  strokeWeight(3);
  circle(mouseX + 20, mouseY, 30);
  circle(mouseX - 20, mouseY, 30);
  circle(mouseX, mouseY + 20, 30);
  circle(mouseX, mouseY - 20, 30);
}