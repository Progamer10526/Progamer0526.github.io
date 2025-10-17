
let nodes = [];
let reach = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){

  for(let i = 0; i < 12000000; i++){
  nodes.push(new csNode(mouseX, mouseY))
  }
}


function draw() {
  background(220);
  

  
  for(let n of nodes){
    n.move();
    n.display();

  }
}


class csNode{

  constructor(x, y){
    this.x = mouseX; this.y = mouseY; this.size = 20;
    this.c = color(random(255), random(255), random(255))


    this.xTime = random(10); this.yTime = random(10);
    this.timeShift = 0.01; this.maxSpeed = 5;

  }

  display(){ 
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.size);
  }

  move(){

    let xSpeed = noise(this.xTime); 
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;
    
    this.x += xSpeed;
    if(this.x < 0) this.x = width;
    else if(this.x > width) this.x = 0;


    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.yTime += this.timeShift;
    
    this.y += ySpeed;
    if(this.y < 0) this.y = height;
    else if(this.y > height) this.y = 0;
  }

}