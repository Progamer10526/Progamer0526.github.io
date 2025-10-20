// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let hwight;
let eastbound = []//20
let westbound = []
let test


function setup() {
  createCanvas(windowWidth, windowHeight);
  hwight = height / 6;
  test = new Car(1,1,2);
}

function draw() {
  background(10, 160, 10);
  road();
  test.display();
}

function road() {
  fill(0);
  rect(0, hwight * 4, width, hwight);
  fill(0);
  rect(0, hwight * 3, width, hwight);
  laneLine(4,4);
  fill(0);
  rect(0, hwight * 2, width, hwight);
  laneLine(3,1);
  fill(0);
  rect(0, hwight * 1, width, hwight);
  laneLine(2,2);

}

function laneLine(l, lane) {
  let x1 = 0
  let length = width / 24;
  if (lane === 1) {
    length = width /18
    fill(225, 225, 0);
    for (let x = length / 2; x <= width; x += length) {
      if (x1 % 2 === 0) {
        rect(x, hwight * l - 5, length, 10)
      }
      x1++
    }
  }
  else {
    fill(225, 225, 225);
    for (let x = length / 2; x <= width; x += length) {
      if (x1 % 2 === 0) {
        rect(x, hwight * l - 5, length, 10)
      }
      x1++
    }
  }
}

class Car {
  constructor(lane, type, side) {
    this.x1 = 0
    this.x2 = width
    this.side = side;
    this.lane = lane;
    this.type = type;
    this.speed = 60;
    this.c = color(random(0, 225), random(0, 225), random(0, 225))
  }
  move() {

  }

  display() {
    if(this.side === 1){
      if(this.type === 1){
        fill(this.c)
      rect(this.x1,(this.lane * hwight) + (hwight*2) +30, width/12,hwight - 50 )
      fill(0)
      rect(this.x1 + (width/12 - 40),(this.lane * hwight) + (hwight*2) +50, 20,hwight - 90  )
      }
      else if(type === 2){
       fill(this.c)
      rect(this.x1,(this.lane * hwight) + (hwight*2) +30, width/12,hwight - 50 )
      fill(0)
      rect(this.x1 + (width/12 - 40),(this.lane * hwight) + (hwight*2) +50, 20,hwight - 90  )

      }
    }
    else if(this.side === 2){
      if(this.type === 1){
        fill(this.c)
      rect(this.x2,(this.lane * hwight) + (hwight*2) +30, -(width/12),hwight - 50 )
      fill(0)
      rect(this.x2 + (width/12 - 40),(this.lane * hwight) + (hwight*2) +50, 20,hwight - 90  )
      }
      else if(type === 2){
       fill(this.c)
      rect(this.x2,(this.lane * hwight) + (hwight*2) +30, width/12,hwight - 50 )
      fill(0)
      rect(this.x2 + (width/12 - 40),(this.lane * hwight) + (hwight*2) +50, 20,hwight - 90  )

      }
    }
  }


}