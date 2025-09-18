// Interactive Scene
// Troy Honeywill
// 09/16/2025
//
// Extra for Experts:
// Interactive scene with mutiple scenes and inputs.
let charX 
let CharY
let sceneHeight
let x 
let y 
let gxstore =[]
let gystore =[]
let grasscolor = "#4DA409";
function setup() {
  createCanvas(windowWidth, windowHeight);
  grassNumber();
  drawScene();
  drawGrass();
  x = width/2
  y = height/2
}

function draw() {
  drawScene();
  drawCharacter();
  

}

function drawCharacter(){ //draws the alian and ship with variations
charX = width/2
charY = height/2
let size = 70;
let shift = size /2;
let leg = size*0.08
stroke("black")
if(keyIsDown(RIGHT_ARROW)){
  x += 10
}
else if(keyIsDown(LEFT_ARROW)){
  x-= 10
}
strokeWeight(0);
fill("#AAFFAA");
rect(x - shift, y - shift, size, size,size,size,0,0);
rect(x-shift, y + shift, leg *0.8,size*0.2);
rect(x+ shift -(leg*0.8), y + shift, leg*0.8,size*0.2);
strokeWeight(size*0.025);
line(x - (shift/2.5), y + (shift/2.5),x + (shift/2.5),y + (shift/2.5));
strokeWeight(0);
fill("black");
circle(x- (leg*3.5), y - (shift/30) ,leg);
circle(x+ (leg*3.5), y - (shift/30) ,leg);
}

function drawScene(){ //Draws the first scene
  background("skyblue");
sceneHeight = height;
drawback();
drawTrees();
 drawGrass();

}
function grassNumber(){
let grassX;
let grassY;
  let base = height *0.8;
 for(let loop = 0; loop <= 2900; loop++){
  grassX = random(0,width);
  grassY = random(base-15,height);
  gxstore.push(grassX);
  gystore.push(grassY);
}
}

function drawGrass(){ //Makes the grass base to the scene
  strokeWeight(1);
let base = sceneHeight *0.8;

fill(grasscolor); 
rect(0,base,width,height-base);;
stroke("#7CFC00");
strokeWeight(2);
for(let loop = 0; loop <= 2900; loop++){
  line(gxstore[loop],gystore[loop],gxstore[loop],gystore[loop]+15);
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

function drawback(){
  let base = sceneHeight *0.8;
  let mountainAmount = 3
  let mWidth = width/mountainAmount
  let size = mWidth * 2.4
  let mHieght = base*0.7
  let x1
  stroke("black")
  fill("grey");
  strokeWeight(5);
 for( let filler = 0; filler <= mountainAmount; filler++ ){
  size = mWidth * 2;
  x1 = mWidth * filler - size/2
  triangle(x1,base, x1 + size,base,x1 +(size/2),base - mHieght);
 }
}