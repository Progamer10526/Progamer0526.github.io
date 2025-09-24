// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let img, img2;



async function setup() {
  createCanvas(windowWidth, windowHeight);
  img = await loadImage("assests/lion-left.png");
  img2 = await loadImage("assests/lion-right.png");
}

function draw() {
  background(220);
  image(img,0,0);
  image(img2,0,50);
}
