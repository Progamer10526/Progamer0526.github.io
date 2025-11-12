// Project Title
// Your Name
// Date
let tiles = []
let level = [
  [0,1,0,3,0],
  [1,0,0,1,0],
  [1,0,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,1]
]
let playerX=3;let playerY=4;
let row=level.length;
let cols=level[0].length;
let tilessize=100;
function setup() {
  createCanvas(cols*tilessize, row*tilessize);
  loadassets();
  level[playerY][playerX] = 2;
}

async function loadassets(){
 for(let i =0;i<4;i++){
  tiles.push(await loadImage("assets/"+i+".png"))
 }
}

function draw() {
 
  renderbourd();
}

function swap(x1,y1,x2,y2){
  let saveval = 0
  saveval = level[y1][x1]
level[y1][x1]=level[y2][x2];
level[y2][x2] = saveval
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    if(playerX >0){
      if(level[playerY][playerX-1] === 0){
    swap(playerX,playerY,playerX-1,playerY);
    playerX --}
  else if(level[playerY][playerX-1]===1){
    if(playerX>1 && level[playerY][playerX-2] ===0){
      swap(playerX-2,playerY,playerX-1,playerY);
      swap(playerX-1,playerY,playerX,playerY)
      playerX --
    }
  }
  }}
  if(keyCode === RIGHT_ARROW){
    if(playerX <cols-1){
      if(level[playerY][playerX+1] === 0){
    swap(playerX,playerY,playerX+1,playerY);
    playerX ++}
    else if(level[playerY][playerX+1]===1){
      if(playerX>1 && level[playerY][playerX+2] ===0){
        swap(playerX+2,playerY,playerX+1,playerY);
        swap(playerX+1,playerY,playerX,playerY)
        playerX ++
      }
    }}
  }
  if(keyCode === UP_ARROW){
    if(playerY >0){
      if(level[playerY-1][playerX] === 0){
    swap(playerX,playerY,playerX,playerY-1);
    playerY --}
    else if(level[playerY-1][playerX]===1){
      if(playerX>1 && level[playerY-2][playerX] ===0){
        swap(playerX,playerY-2,playerX,playerY-1);
        swap(playerX,playerY-1,playerX,playerY)
        playerY --
      }
    }}
  }
  if(keyCode === DOWN_ARROW){
    if(playerY < row-1){
      if(level[playerY+1][playerX] === 0){
    swap(playerX,playerY,playerX,playerY+1);
    playerY ++}
  else if(level[playerY+1][playerX]===1){
    if(playerX>1 && level[playerY+2][playerX] ===0){
      swap(playerX,playerY+2,playerX,playerY+1);
      swap(playerX,playerY+1,playerX,playerY)
      playerY ++
    }
}}}}


function renderbourd(){
  for(let x = 0;x<cols;x++){
    for( let y= 0;y<row;y++){
      let type = level[y][x];
      let currentImage = tiles[type];
      image(currentImage,x*tilessize,y*tilessize);
    }
  }
}