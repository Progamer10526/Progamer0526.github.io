// Planets and Moons
// Mr. Scott
// Oct 17, 2025
// Objects within Objects
// Overwriting Objects, basic transform

// Global Variables
let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width / 2, height / 2);
}

function draw() {
  fill(60,60,60,80)
  rect(0,0,width,height)
  myPlanet.display();
}

function mousePressed() {
  //regular click → add a moon
  //shift click → destroy and reset the moon
  if (keyIsPressed && keyCode === SHIFT) {
    myPlanet = new Planet(myPlanet.x, myPlanet.y);
  }
  else {
    for (let x = 0; x <= 10; x++)
      myPlanet.createMoon();
  }
}

function keyPressed() {
  if (keyCode === CONTROL) {
    myPlanet.x = mouseX;
    myPlanet.y = mouseY;
    background(60,60,60);
  }
}




class Planet {
  constructor(x, y) {
    this.x = x; this.y = y; this.s = 100;
    this.moons = [];
    this.c = color(random(0,225),random(0,225),random(0,225))
  }
  createMoon() {
    this.moons.push(new Moon(this.x, this.y));
  }
  display() {
    fill(this.c)
    circle(this.x, this.y, this.s);
    for (let m of this.moons) {
      m.update(this.x, this.y);
    }
  }
}

class Moon {
  constructor() {
    this.speed = random(5, 7);
    this.angle = 0; this.orbitRadius = random(80, 250);
    this.s = random(5, 50);
    this.c = color(random(0,225),random(0,225),random(0,225))
  }

  display(x, y) {
    push();
    translate(x, y);
    rotate(this.angle);
    fill(this.c)
    circle(this.orbitRadius, 0, this.s);
    pop();
  }

  move() {
    this.angle += this.speed;
  }

  update(x, y) {
    this.move();
    this.display(x, y);
  }


}