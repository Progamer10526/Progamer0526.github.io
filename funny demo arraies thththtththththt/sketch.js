// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let winlose = 0;
let type = 0;
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
  for(let y = 0; y<row;y++){
    for(let x = 0; x<cols;x++)
      type =random(0,1);
      type = int(type)
      if(type= 1){
        grid[y][x] = 225;
      }
      else{
        grid[y][x] = 0;
      }
      
  }
}

function draw() {
  background(220);

  rendergrid();
  if(!(winlose === (row*cols))){
  hover()}
  win()
}

function hover(){
  let x =getCurrentX();
  let y = getCurrentY();
  fill(0,225,0,80);
  square(x*squwaresize,y*squwaresize,squwaresize);
  if((x+1) < cols)  square((x+1)*squwaresize,y*squwaresize,squwaresize);
  if((y+1) < row) square(x*squwaresize,(y+1)*squwaresize,squwaresize);
  if((x-1) >= 0) square((x-1)*squwaresize,y*squwaresize,squwaresize);
  if((y-1) >= 0) square(x*squwaresize,(y-1)*squwaresize,squwaresize);
  
 
  
  
}


function mousePressed(){
  let x =getCurrentX();
  let y = getCurrentY();
  if(!(winlose === (row*cols))){
  flip(x,y);
  if(!keyIsDown(SHIFT)){
  if((x+1) < cols) flip(x+1,y);
  if((y+1) < row) flip(x,y+1);
  if((x-1) >= 0) flip(x-1,y);
  if((y-1) >= 0) flip(x,y-1);
  }}
  print(x)
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


function win(){
  winlose = 0;
  for(let y = 0; y<row;y++){
    for(let x= 0; x<cols;x++)
      if(grid[y][x] === 225){
        winlose ++;
      }
  }
  print(winlose)
  if(winlose === (row*cols)){
    textSize(70)
    fill(0,0,0);
    text("You win",width/2-90,height/2)
  }
}