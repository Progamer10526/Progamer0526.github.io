// Puzzle Game
// Troy
// A day 5

let winlose = 0;
let type = 0;
let grid = [
  [225, 0, 225, 0, 225],
  [0, 225, 0, 225, 0],
  [225, 0, 225, 0, 225],
  [0, 225, 0, 225, 0],
  [225, 0, 225, 0, 225],
];
let row = grid.length;
let cols = grid[0].length;
let squwaresize = 120;
let shapes = 0;
function setup() {
  createCanvas(cols * squwaresize, row * squwaresize);
  for (let y of grid) { //makes the bourd random 
    for (let x =0;x < cols ; x++) {
      type = random(0, 2);
      type = floor(type)
      if (type === 1) {
        y[x] = 225;
      }
      else {
        y[x] = 0;
      }
      print(x)
      print(type)
    }
  }
}

function draw() {
  background(220);

  rendergrid();
  if (!(winlose === (row * cols))) {  //Stops the code if you win
    hover()
  }
  win()
}

function hover() { //Allows the hover grid that displays arround the mouse 
  let x = getCurrentX();
  let y = getCurrentY();
  fill(0, 225, 0, 80);
  switch (shapes) {
    case 0:
      square(x * squwaresize, y * squwaresize, squwaresize);
      if ((x + 1) < cols) square((x + 1) * squwaresize, y * squwaresize, squwaresize);
      if ((y + 1) < row) square(x * squwaresize, (y + 1) * squwaresize, squwaresize);
      if ((x - 1) >= 0) square((x - 1) * squwaresize, y * squwaresize, squwaresize);
      if ((y - 1) >= 0) square(x * squwaresize, (y - 1) * squwaresize, squwaresize);
      break;
    case 1:
      square(x * squwaresize, y * squwaresize, squwaresize);
      if ((x + 1) < cols) square((x + 1) * squwaresize, y * squwaresize, squwaresize);
      if ((y + 1) < row) square(x * squwaresize, (y + 1) * squwaresize, squwaresize);
      if (((y + 1) < row) && ((x + 1) < cols)) square((x + 1) * squwaresize, (y + 1) * squwaresize, squwaresize);
      break;
  }



}

function keyPressed() {
  if (keyIsDown(32)) {
    if (shapes === 0) {
      shapes = 1;
    }
    else shapes = 0;

  }
}

function mousePressed() { // Checks for mouse pressed so that it can change the grid 
  let x = getCurrentX();
  let y = getCurrentY();
  switch (shapes) {
    case 0:
      flip(x, y);
      if (!keyIsDown(SHIFT)) {
        if ((x + 1) < cols) flip(x + 1, y);
        if ((y + 1) < row) flip(x, y + 1);
        if ((x - 1) >= 0) flip(x - 1, y);
        if ((y - 1) >= 0) flip(x, y - 1);
      }
      break;
    case 1:
      flip(x, y);
      if (!keyIsDown(SHIFT)) {
        if ((x + 1) < cols) flip(x + 1, y);
        if ((y + 1) < row) flip(x, y + 1);
        if (((y + 1) < row) && ((x + 1) < cols)) flip(x + 1, y + 1);
      }
      break;
  }
  if (!(winlose === (row * cols))) {
  }

}

function getCurrentX() { //Gets the X grid vlaue 
  let contrainedX = constrain(mouseX, 0, width - 1);
  return (floor(contrainedX / squwaresize))
}
function getCurrentY() {
  let contrainedY = constrain(mouseY, 0, height - 1);
  return (floor(contrainedY / squwaresize))
}

function rendergrid() { //gets the Y grid value 
  for (let y = 0; y < row; y++) {
    for (let x = 0; x < cols; x++) {
      let fillcolor = grid[y][x];
      fill(fillcolor);
      square(x * squwaresize, y * squwaresize, squwaresize)
    }
  }
}

function flip(x, y) { //flips the color 
  if (grid[y][x] === 0) grid[y][x] = 225;
  else grid[y][x] = 0;
}


function win() { //checks if you have won 
  winlose = 0;
  for (let y = 0; y < row; y++) {
    for (let x = 0; x < cols; x++)
      if (grid[y][x] === 225) {
        winlose++;
      }
  }
  print(winlose)
  if (winlose === (row * cols)) {
    textSize(70)
    fill(0, 0, 0);
    text("You win", width / 2 - 90, height / 2)
  }
}