// Yes
// Purple
// someday
//
// Extra for Experts:
// - it does stuff frfr

let gridesize = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  grid()
}


function grid() {
  stroke("black")
  strokeWeight(gridesize/2)
  let x = 0; let y = 0
  while(x<width){
    while(y< height){
      point(x,y);
      y+= gridesize
    }
    x += gridesize
    y = 0
  }

}