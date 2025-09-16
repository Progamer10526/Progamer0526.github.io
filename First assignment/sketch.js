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
  background("grey");
sceneHeight = height;
drawGrass();
drawTrees();
}

function drawGrass(){ //Makes the grass base to the scene
let base = sceneHeight *0.8;
let grassX;
let grassY;
fill("#4DA409"); 
rect(0,base,width,height-base);;
stroke("#7CFC00");
strokeWeight(2);
for(let loop = 0; loop <= 2500; loop++){
  grassX = random(0,width);
  grassY = random(base-15,height);
  line(grassX,grassY,grassX,grassY+15);
}
}

function drawTrees(){
  let base = sceneHeight *0.8;
  let log =width *0.1;
  let leaves = width * 0.2;
  fill("brown")
  rect(width/5,base,log,base-50)
}