// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let guis
let s
let c
let shared = {painting:[],invert: false}
const colors = [
  "#ee6666",
  "#eee666",
  "#eeee66",
  "#e6eee6",
  "e66eeee",
]
function preload(){
  partyConnect(    "wss://demoserver.p5party.org", "cs30party2")
shared = partyLoadShared("shared",shared)
}
function pickColor(){
  return random(colors)
}
function mousePressed(){
   c = pickColor()
  shared.painting.push([mouseX,mouseY,c])
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  // guis = createGui()
  // s = createSlider("size",width/2.2,height/4,128,32,50,500)
}
function Renderpaint(){
  for(let p of shared.painting){
    fill(p[2])
    circle(p[0],p[1],30)
  }
}
function draw() {
  background(220);
 Renderpaint()
  // circle(width/2, height/2,s.val )
  // drawGui()
  
}
