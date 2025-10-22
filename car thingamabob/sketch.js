// Car
// Troy
// 22/10/25

let hwight;
let eastbound = [];
let westbound = [];
let test;
let laneran;
let caretyperan = 0;
let randomchance;
let stoplight = false;
let currenttime = 0



function setup() {
  createCanvas(windowWidth, windowHeight);
  hwight = height / 8;

  for (let cars = 0; cars <= 20; cars++) { //Add the first 20 cars to the eastbound lanes
    laneran = int(random(1, 3));
    caretyperan = int(random(1, 3));
    eastbound.push(new Car(laneran, caretyperan, 1));
  }
  for (let cars = 0; cars <= 20; cars++) { //Add the first 20 cars to the westbound lanes
    laneran = int(random(1, 3));
    caretyperan = int(random(1, 3));
    westbound.push(new Car(laneran, caretyperan, 2));
  }
}

function draw() {
  background(10, 160, 10);
  road(); //Creates the road
  for (let cars of eastbound) { //Makes the eastbound lanes do stuff
    cars.action();
  }
  for (let cars of westbound) { //Makes the Westbound lanes do stuff
    cars.action();
  }
  stoplightt(); //Checks if it is a redlight and tells it to switch when done
  light();  //creates the light
 
}

function road() { //Draws the road
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

function laneLine(l, lane) { //Draws the lane lines 
  let x1 = 0;
  let length = width / 24;
  if (lane === 1) {
    length = width / 18;
    fill(225, 225, 0);
    for (let x = length / 2; x <= width; x += length) {
      if (x1 % 2 === 0) {
        rect(x, hwight * l - 5, length, 10);
      }
      x1++;
    }
  }
  else {
    fill(225, 225, 225);
    for (let x = length / 2; x <= width; x += length) {
      if (x1 % 2 === 0) {
        rect(x, hwight * l - 5, length, 10);
      }
      x1++;
    }
  }
}

function mousePressed() {  //Checks for mouse inputs and creates new cars when it detects one. 
  if (mouseButton === LEFT && !keyIsDown(SHIFT)) {
    laneran = int(random(1, 3));
    caretyperan = int(random(1, 3));
    eastbound.push(new Car(laneran, caretyperan, 1))
    print("test")
  }
  else if (mouseButton === LEFT && keyIsDown(SHIFT)) {
    laneran = int(random(1, 3));
    caretyperan = int(random(1, 3));
    westbound.push(new Car(laneran, caretyperan, 2))
    print("test")
  }
}

function keyPressed() { //Checks ffor keybourd inputs and make the light red when space is pressed
  if (keyCode === 32) {
    if (stoplight === false) {
      stoplight = true;
      currenttime = frameCount
    }
  }

}

function stoplightt() {  //switches light to red after set frames
  if (stoplight) {
    if (frameCount - currenttime >= 120)
      stoplight = false
  }
}

function light() { //The light itself 
  if (stoplight) {
    fill(225, 0, 0)
  }
  else if (stoplight === false) {
    fill(0, 225, 0)
  }
  circle(width / 2, hwight, 100)
}

class Car {
  constructor(lane, type, side) {
    this.carsize = width / 19;
    this.x1 = random(0, width);
    this.x2 = random(0, width);
    this.side = side;
    this.lane = lane;
    this.type = type;
    this.speed = 20;
    this.changeLane = false;
    if (this.side === 2) {
      this.lanelocation = this.lane * hwight + hwight;
    }
    else if (this.side === 1) {
      this.lanelocation = (this.lane * hwight) + (hwight * 3);
    }
    this.y = this.lanelocation
    this.c = color(random(0, 225), random(0, 225), random(0, 225));
  }
  move() {
    if (stoplight === false) {
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
  }

  display() {
    if (this.side === 1) {
      if (this.type === 1) {
        fill(this.c);
        rect(this.x1, this.lanelocation + 30, this.carsize, hwight - 50);
        fill(0);
        rect(this.x1 + ((this.carsize / 5) * 3.7), this.lanelocation + 40, this.carsize / 8, hwight - 70);
      }
      else if (this.type === 2) {
        fill(this.c);
        rect(this.x1, this.lanelocation + 30, this.carsize, hwight - 50);
        fill(0);
        rect(this.x1 + ((this.carsize / 5) * 3.7), this.lanelocation + 40, this.carsize / 8, hwight - 70);
        rect(this.x1 + ((this.carsize / 5) - 10), this.lanelocation + 40, this.carsize / 2, hwight - 70);
      }
    }
    else if (this.side === 2) {
      if (this.type === 1) {
        fill(this.c);
        rect(this.x2, this.lanelocation + 30, this.carsize, hwight - 50);
        fill(0);
        rect(this.x2 + ((this.carsize / 5) / 3.7), this.lanelocation + 40, this.carsize / 8, hwight - 70);
      }
      else if (this.type === 2) {
        fill(this.c);
        rect(this.x2, this.lanelocation + 30, this.carsize, hwight - 50);
        fill(0);
        rect(this.x2 + ((this.carsize / 5) / 3.7), this.lanelocation + 40, this.carsize / 8, hwight - 70);
        rect(this.x2 + ((this.carsize / 5) + 10), this.lanelocation + 40, this.carsize / 2, hwight - 70);

      }
    }
  }


  speedUp() {
    if (this.side === 1) {
      if (this.speed <= 40) {
        this.speed += 5;
      }
    }
    else if (this.side === 2) {
      if (this.speed <= 40) {
        this.speed += 5;

      }
    }
  }

  speeddown() {
    if (this.side === 1) {
      if (this.speed >= 20) {
        this.speed -= 5;
      }

    }
    else if (this.side === 2) {
      if (this.speed >= 20) {
        this.speed -= 5;
      }

    }
  }


  changeColor() {
    this.c = color(random(0, 225), random(0, 225), random(0, 225));
  }

  changelanet() {
    if (this.changeLane === false) {
      this.changeLane = true;
    }
    else if (this.changeLane) {
      if (this.side === 1) {
        if (this.lane === 1) {
          if (this.y !== (2 * hwight) + (hwight * 3)) {
            this.y += 1;
          }
          else {
            this.changeLane = false;
          }
        }
        if (this.lane === 2) {
          if (this.y !== (1 * hwight) + (hwight * 3)) {
            this.y -= 1;
          }
          else {
            this.changeLane = false;
          }
        }

      }
      if (this.side === 2) {
        if (this.lane === 1) {
          if (this.y !== (2 * hwight) + (hwight * 1)) {
            this.y += 1;
          }
          else {
            this.changeLane = false;
          }
        }
        if (this.lane === 2) {
          if (this.y !== (1 * hwight) + (hwight * 1)) {
            this.y -= 1;
          }
          else {
            this.changeLane = false;
          }
        }

      }
    }


  }

  action() {
    randomchance = int(random(0, 101))
    if (randomchance === 1) {
      this.speedUp();
    }
    else if (randomchance === 4) {
      this.speeddown();
    }
    else if (randomchance === 8) {
      this.changeColor();
    }
    else if (randomchance === 24) {
      this.changeLane = true;

    }
    this.display();
    this.move();
    this.changelanet();
  }

}