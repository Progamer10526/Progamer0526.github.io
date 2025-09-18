// Interactive Scene
// Troy Honeywill
// 09/16/2025
//
// Extra for Experts:
// Interactive scene with mutiple scenes and inputs.
let charX 
let CharY
let sceneHeight
function setup() {
  createCanvas(windowWidth, windowHeight);
  drawScene();
}

function draw() {

  // drawCharacter();

}

// function drawCharacter(){ //draws the alian and ship with variations
// charX = width/2
// charY = height/2
// let size = 70;
// let shift = size /2;
// let leg = size*0.08
// let x = width/2
// let y = height/2
// strokeWeight(0);
// fill("#AAFFAA");
// rect(x - shift, y - shift, size, size,size,size,0,0);
// rect(x-shift, y + shift, leg *0.8,size*0.2);
// rect(x+ shift -(leg*0.8), y + shift, leg*0.8,size*0.2);
// strokeWeight(size*0.025);
// line(x - (shift/2.5), y + (shift/2.5),x + (shift/2.5),y + (shift/2.5));
// strokeWeight(0);
// fill("black");
// circle(x- (leg*3.5), y - (shift/30) ,leg);
// circle(x+ (leg*3.5), y - (shift/30) ,leg);
// }

function drawScene(){ //Draws the first scene
  background("skyblue");
sceneHeight = height;
drawTrees();
drawGrass();

}

function drawGrass(){ //Makes the grass base to the scene
let base = sceneHeight *0.8;
let grassX;
let grassY;
fill("#4DA409"); 
rect(0,base,width,height-base);;
stroke("#7CFC00");
strokeWeight(2);
for(let loop = 0; loop <= 2900; loop++){
  grassX = random(0,width);
  grassY = random(base-15,height);
  line(grassX,grassY,grassX,grassY+15);
}
}

function drawTrees(){ // draws the 5 trees on screen
  let base = sceneHeight *0.8;
  let log =width *0.03;
  let leaves = width * 0.17;
  let loghieght = log *4;
  let treeAmount =5
let treex 
let secondx = (width/treeAmount) 
treex = secondx/1.6
  for( let tree = 1; tree<= treeAmount; tree ++){ // loop for making the trees so I can change the amount 
  fill("#654321");
  stroke("black");
  rect(secondx *tree - treex,base + 10 - loghieght,log,loghieght);
  fill("green")
  leaves = width * 0.17;
  triangle(secondx *tree - leaves/2.7- treex , base - 40, secondx*tree + leaves/1.7- treex ,base-40, secondx*tree + log/2- treex, base - 100)
  leaves = leaves*0.6
  triangle(secondx *tree- leaves/2- treex, base - 80, secondx*tree + leaves/2- treex + log ,base-80, secondx*tree + log/2- treex, base - 140)
  leaves = leaves*0.7
  triangle(secondx*tree - leaves/2- treex, base - 120, secondx*tree + leaves/2- treex + log ,base-120, secondx*tree + log/2- treex, base - 180)
  leaves = leaves*0.7
  triangle(secondx *tree- leaves/2- treex, base - 160, secondx*tree + leaves/2- treex + log ,base-160, secondx*tree + log/2- treex, base - 220)
  leaves = leaves*0.7
  triangle(secondx*tree - leaves/2- treex, base - 200, secondx*tree + leaves/2- treex + log ,base-200, secondx*tree + log/2- treex, base - 260)
  }
}