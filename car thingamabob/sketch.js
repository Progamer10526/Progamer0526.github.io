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
let laneran
let carspawn = 0
let caretyperan = 0
let randomchance


function setup() {
  createCanvas(windowWidth, windowHeight);
  hwight = height / 8;

  for (let cars = 0; cars <= 20; cars++) {
    laneran = int(random(1, 3))
    caretyperan = int(random(1, 3))
    eastbound.push(new Car(laneran, caretyperan, 1))
  }
  for (let cars = 0; cars <= 20; cars++) {
    laneran = int(random(1, 3))
    caretyperan = int(random(1, 3))
    westbound.push(new Car(laneran, caretyperan, 2))
  }
}

function draw() {
  background(10, 160, 10);
  road();
  carspawn = int(random(1, 21))
  for (let cars of eastbound) {
    randomchance = int(random(0, 101))
    if (randomchance === 1){
      cars.speedUp()
    }
    else if (randomchance === 4){
      cars.speeddown()
    }
    else if (randomchance === 8){
      cars.changeColor()
    }
    cars.display()
    cars.move()
  }
  for (let cars of westbound) {
    randomchance = int(random(0, 101))
    if (randomchance === 1){
      cars.speedUp()
    }
    else if (randomchance === 4){
      cars.speeddown()
    }
    else if (randomchance === 8){
      cars.changeColor()
    }
    cars.display()
    cars.move()
  }


}

function road() {
  fill(0);
  rect(0, hwight * 5, width, hwight);
  fill(0);
  rect(0, hwight * 4, width, hwight);
  laneLine(5, 4);
  fill(0);
  rect(0, hwight * 3, width, hwight);
  laneLine(4, 1);
  fill(0);
  rect(0, hwight * 2, width, hwight);
  laneLine(3, 2);

}

function laneLine(l, lane) {
  let x1 = 0
  let length = width / 24;
  if (lane === 1) {
    length = width / 18
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

function mousePressed(){
  if()
}

class Car {
  constructor(lane, type, side) {
    this.carsize = width / 19
    this.x1 = random(0, width)
    this.x2 = random(0, width)
    this.side = side;
    this.lane = lane;
    this.type = type;
    this.speed = 20;
    this.c = color(random(0, 225), random(0, 225), random(0, 225))
  }
  move() {
    if (this.side === 1) {
      if (this.x1 <= width) {
        this.x1 += this.speed;
      }
      else this.x1 = 0;
    }
    else if (this.side === 2) {
      if (this.x2 >= 0) {
        this.x2 -= this.speed;
      }
      else this.x2 = width;
    }
  }

  display() {
    if (this.side === 1) {
      if (this.type === 1) {
        fill(this.c)
        rect(this.x1, (this.lane * hwight) + (hwight * 3) + 30, this.carsize, hwight - 50)
        fill(0)
        rect(this.x1 + ((this.carsize / 5) * 3.7), (this.lane * hwight) + (hwight * 3) + 40, this.carsize / 8, hwight - 70)
      }
      else if (this.type === 2) {
        fill(this.c)
        rect(this.x1, (this.lane * hwight) + (hwight * 3) + 30, this.carsize, hwight - 50)
        fill(0)
        rect(this.x1 + ((this.carsize / 5) * 3.7), (this.lane * hwight) + (hwight * 3) + 40, this.carsize / 8, hwight - 70)
        rect(this.x1 + ((this.carsize / 5) - 10), (this.lane * hwight) + (hwight * 3) + 40, this.carsize / 2, hwight - 70)
      }
    }
    else if (this.side === 2) {
      if (this.type === 1) {
        fill(this.c)
        rect(this.x2, (this.lane * hwight) + (hwight * 1) + 30, this.carsize, hwight - 50)
        fill(0)
        rect(this.x2 + ((this.carsize / 5) / 3.7), (this.lane * hwight) + (hwight * 1) + 40, this.carsize / 8, hwight - 70)
      }
      else if (this.type === 2) {
        fill(this.c)
        rect(this.x2, (this.lane * hwight) + (hwight * 1) + 30, this.carsize, hwight - 50)
        fill(0)
        rect(this.x2 + ((this.carsize / 5) / 3.7), (this.lane * hwight) + (hwight * 1) + 40, this.carsize / 8, hwight - 70)
        rect(this.x2 + ((this.carsize / 5) + 10), (this.lane * hwight) + (hwight * 1) + 40, this.carsize / 2, hwight - 70)

      }
    }
  }


  speedUp() {
    if (this.side === 1) {
      if(this.speed <= 40){
        this.speed += 5;
      }
    }
    else if (this.side === 2) {
      if(this.speed <= 40){
        this.speed += 5;
      
    }
  }}

  speeddown(){
    if (this.side === 1) {
      if(this.speed >=20){
        this.speed -= 5;}
      
    }
    else if (this.side === 2) {
      if(this.speed >=20){
        this.speed -= 5;}
      
    }
  }


  changeColor(){
    this.c = color(random(0, 225), random(0, 225), random(0, 225))
  }


  
}