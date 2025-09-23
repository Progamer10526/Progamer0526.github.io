// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  grade()
}

function draw() {
grade()
  
}


function grade(){
 let h = 1
 let y=0
  while(y<= height){
    noStroke();
    let mapped = map(y,0,height,0,255)
    let flip = 225 - mapped
    fill(flip,mapped,flip)
    rect(0,y,width,h)
    y+=h

  }
}