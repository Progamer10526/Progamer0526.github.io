// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let objects = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i =0;i<=50;i++){
    objects.push(new AnimatedObject(random(width),random(height)))
    objects.push(new CircleOj(random(width),random(height)))
    objects.push(new LineObj(random(width),random(height)))
  }
}

function draw() {
  background(110,0,0);
  for(let l of objects){
  l.move();
  l.display();
}
}








