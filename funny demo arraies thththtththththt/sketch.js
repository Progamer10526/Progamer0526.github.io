// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [
  [225,0,225,0,225],
  [0,225,0,225,0],
  [225,0,225,0,225],
  [0,225,0,225,0],
  [225,0,225,0,225],
];
let row= grid.length;
let cols=grid[0].length;
let squwaresize = 120;
function setup() {
  createCanvas(cols*squwaresize,row*squwaresize);
}

function draw() {
  background(220);
  rendergrid();
  text(int(mouseX/squwaresize),mouseX,mouseY)

}

function mousePressed(){
 
  flip(getCurrentX(),getCurrentY())
  
  
  
}

function getCurrentX(){
  let contrainedX = constrain(mouseX,0,width-1);
  return(floor(contrainedX/squwaresize))
}
function getCurrentY(){
  let contrainedY = constrain(mouseY,0,height-1);
  return(floor(contrainedY/squwaresize))
}

function rendergrid(){
  for(let y = 0; y<row;y++){
    for(let x=0;x<cols;x++){
      let fillcolor = grid[y][x];
      fill(fillcolor);
      square(x*squwaresize,y*squwaresize,squwaresize)
    }
  }
}

function flip(x,y){
  if(grid[y][x] === 0)grid[y][x] = 225;
  else grid[y][x] = 0;
}