// ==== TOWER DEFENSE GAME ====

let path = [];
let enemies = [];
let towers = [];
let bullets = [];
let money = 300;
let health = 20;
let wave = 1;
let spawnTimer = 0;
let selectedTowerType = 0;

const towerNames = ["Basic", "Sniper", "Splash", "Freeze", "Laser", "Missile"];
const towerBaseCosts = [100, 150, 200, 250, 300, 350];
const towerColors = ["#4da6ff", "#b84dff", "#ffaa33", "#66ffff", "#ff3366", "#ffcc00"];



function setup() {
  createCanvas(1200, 800);

  // Large map path
  path = [
    createVector(0, 150), createVector(300, 150),
    createVector(300, 400), createVector(600, 400),
    createVector(600, 200), createVector(900, 200),
    createVector(900, 500), createVector(1200, 500)
  ];
}

function draw() {
  background(40, 120, 40);
  drawPath();

  spawnTimer++;
  if (spawnTimer > 60) {
    spawnEnemy();
    spawnTimer = 0;
  }

  for (let e of enemies) e.update();
  for (let e of enemies) e.show();

  for (let t of towers) t.update();
  for (let t of towers) t.show();

  for (let b of bullets) b.update();
  for (let b of bullets) b.show();

  enemies = enemies.filter(e => e.alive);
  bullets = bullets.filter(b => !b.remove);

  drawHUD();

  if (health <= 0) {
    noLoop();
    textSize(50);
    fill(255, 50, 50);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2);
  }
}

// ==== SPAWN ====
function spawnEnemy() {
  if (random() < 0.8 + wave * 0.02) enemies.push(new Enemy());
  if (frameCount % 600 === 0) wave++;
}

function draw() {
  background(80, 160, 80);

  drawPath();
  handleEnemies();
  handleTowers();
  handleBullets();

  // ✅ drawHUD is inline here — not a separate function
  // ==== HUD ====
  fill(30, 30, 30, 230);
  rect(0, 0, width, 90);

  textAlign(LEFT);
  fill(255);
  textSize(18);
  text(`💰 Money: $${money}    🏆 Level: ${level}`, 20, 25);

  // Tower icons and labels
  let startX = 100;
  let spacing = 110;
  textSize(14);

  for (let i = 0; i < towerNames.length; i++) {
    let x = startX + i * spacing;
    let y = 55;

    // box background
    fill(50);
    rect(x - 35, y - 25, 70, 70, 10);

    // tower preview
    fill(towerColors[i]);
    rect(x - 15, y - 10, 30, 30, 6);

    // selection highlight
    if (selectedTowerType === i) {
      noFill();
      stroke(255, 220, 100);
      strokeWeight(3);
      rect(x - 37, y - 27, 74, 74, 10);
      noStroke();
    }

    // labels
    fill(255);
    textAlign(CENTER);
    textSize(12);
    text(`${towerNames[i]} ($${towerBaseCosts[i]})`, x, y + 50);
  }
}



// ==== PATH ====
function drawPath() {
  noFill();
  stroke(180, 120, 60);
  strokeWeight(50);
  beginShape();
  for (let p of path) vertex(p.x, p.y);
  endShape();
}

// ==== INPUT ====
function mousePressed() {
  let cost = towerBaseCosts[selectedTowerType];
  if (money >= cost) {
    towers.push(new Tower(mouseX, mouseY, selectedTowerType));
    money -= cost;
  }
}

function keyPressed() {
  if (key >= '1' && key <= '4') selectedTowerType = int(key) - 1;
  if (key === 'u' || key === 'U') {
    for (let t of towers) {
      if (dist(mouseX, mouseY, t.x, t.y) < 25) {
        t.upgrade();
        break;
      }
    }
  }
}

// ==== ENEMY ====
class Enemy {
  constructor() {
    this.type = random([0, 0, 1, 2, 3]);
    this.pos = path[0].copy();
    this.pathIndex = 0;
    this.alive = true;

    if (this.type === 0) {
      this.speed = 1.4;
      this.hp = 80 + wave * 10;
      this.color = color(255, 100, 100);
      this.size = 22;
    } else if (this.type === 1) {
      this.speed = 2.2;
      this.hp = 60 + wave * 8;
      this.color = color(255, 220, 100);
      this.size = 18;
    } else if (this.type === 2) {
      this.speed = 0.8;
      this.hp = 200 + wave * 15;
      this.color = color(100, 200, 255);
      this.size = 28;
    } else {
      this.speed = 1.0;
      this.hp = 400 + wave * 25;
      this.color = color(180, 60, 255);
      this.size = 35;
    }

    this.maxHP = this.hp;
    this.distanceTravelled = 0; // for accurate progress tracking
  }

  // Total progress (0 = start, 1 = end)
  progress() {
    return this.distanceTravelled / this.totalPathLength();
  }

  // Precompute total path distance
  totalPathLength() {
    let len = 0;
    for (let i = 0; i < path.length - 1; i++) {
      len += p5.Vector.dist(path[i], path[i + 1]);
    }
    return len;
  }

  update() {
    if (!this.alive) return;

    let target = path[this.pathIndex + 1];
    if (!target) {
      this.alive = false;
      health--;
      return;
    }

    let dir = p5.Vector.sub(target, this.pos);
    if (dir.mag() < this.speed) {
      // Move to next segment
      this.distanceTravelled += dir.mag();
      this.pathIndex++;
    } else {
      dir.setMag(this.speed);
      this.pos.add(dir);
      this.distanceTravelled += this.speed;
    }

    if (this.hp <= 0) {
      this.alive = false;
      money += 10;
    }
  }

  show() {
    if (!this.alive) return;

    push();
    translate(this.pos.x, this.pos.y);
    let bob = sin(frameCount * 0.2 + this.pos.x * 0.05) * 2;

    noStroke();
    fill(red(this.color), green(this.color), blue(this.color), 230);
    ellipse(0, bob, this.size);

    noFill();
    stroke(red(this.color), green(this.color), blue(this.color), 120);
    strokeWeight(3);
    ellipse(0, bob, this.size + 6);

    fill(30);
    ellipse(0, bob, this.size / 3);

    let hpWidth = map(this.hp, 0, this.maxHP, 0, this.size);
    fill(0);
    rect(-this.size / 2, bob - this.size * 0.8, this.size, 5);
    fill(0, 255, 0);
    rect(-this.size / 2, bob - this.size * 0.8, hpWidth, 5);
    pop();
  }
}


// ==== TOWER ====
// ==== TOWER ====
class Tower {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;

    // Base stats per tower type
    this.range = [140, 260, 180, 200, 220, 240][type];
    this.fireRate = [50, 80, 45, 70, 10, 100][type]; // Laser fires fast, Missile slower
    this.damage = [35, 90, 25, 10, 4, 120][type];

    this.level = 1;
    this.timer = 0;
    this.angle = 0;
  }

  update() {
    this.timer++;
    let target = this.getTarget();
    if (target) {
      this.angle = atan2(target.pos.y - this.y, target.pos.x - this.x);
      if (this.type === 4) {
        // Laser deals constant damage over time
        if (frameCount % 5 === 0) target.hp -= this.damage;
        bullets.push(new Bullet(this.x, this.y, target, this)); // For beam effect
      } else if (this.timer > this.fireRate) {
        bullets.push(new Bullet(this.x, this.y, target, this));
        this.timer = 0;
      }
    }
  }

  getTarget() {
    let best = null;
    let highestProgress = -1;
    for (let e of enemies) {
      if (!e.alive) continue;
      let d = dist(this.x, this.y, e.pos.x, e.pos.y);
      if (d < this.range) {
        let prog = e.progress();
        if (prog > highestProgress) {
          highestProgress = prog;
          best = e;
        }
      }
    }
    return best;
  }

  upgradeCost() {
    return 120 * this.level;
  }

  upgrade() {
    let cost = this.upgradeCost();
    if (money >= cost) {
      money -= cost;
      this.level++;
      this.damage = floor(this.damage * 1.6);
      this.range = floor(this.range * 1.15);
      this.fireRate = max(10, this.fireRate * 0.9);
    }
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    // Range indicator
    if (dist(mouseX, mouseY, this.x, this.y) < 25) {
      noFill();
      stroke(255, 255, 255, 60);
      ellipse(0, 0, this.range * 2);
    }

    noStroke();

    if (this.type === 0) { // Basic
      fill("#4da6ff");
      rectMode(CENTER);
      rect(0, 0, 28, 28, 5);
      fill(200);
      rect(12, 0, 18, 6, 2);
    } else if (this.type === 1) { // Sniper
      fill("#b84dff");
      rectMode(CENTER);
      rect(0, 0, 20, 38, 4);
      fill(255);
      rect(20, 0, 30, 4);
    } else if (this.type === 2) { // Splash
      fill("#ffaa33");
      ellipse(0, 0, 32, 32);
      fill(255, 180, 0);
      ellipse(0, 0, 18, 18);
    } else if (this.type === 3) { // Freeze
      fill("#66ffff");
      beginShape();
      vertex(0, -15);
      vertex(10, 0);
      vertex(0, 15);
      vertex(-10, 0);
      endShape(CLOSE);
      fill(255);
      triangle(15, 0, 5, -4, 5, 4);
    } else if (this.type === 4) { // Laser
      fill("#ff3366");
      rectMode(CENTER);
      rect(0, 0, 30, 20, 4);
      fill(255, 150, 150);
      rect(15, 0, 30, 4);
    } else if (this.type === 5) { // Missile
      fill("#ffcc00");
      rectMode(CENTER);
      rect(0, 0, 28, 28, 6);
      fill(80);
      triangle(20, 0, 5, -5, 5, 5);
    }

    rotate(-this.angle);
    fill(255);
    textSize(10);
    textAlign(CENTER);
    text(`Lv${this.level}`, 0, 25);
    pop();
  }
}

// ==== BULLET ====
class Bullet {
  constructor(x, y, target, tower) {
    this.pos = createVector(x, y);
    this.prevPos = this.pos.copy();
    this.target = target;
    this.speed = 6;
    this.tower = tower;
    this.remove = false;
  }

  update() {
    this.prevPos = this.pos.copy();

    if (!this.target.alive) {
      this.remove = true;
      return;
    }

    if (this.tower.type === 4) {
      // Laser beams stay visible, don't move
      return;
    }

    let dir = p5.Vector.sub(this.target.pos, this.pos);
    if (dir.mag() < 10) {
      this.hit();
      this.remove = true;
    } else {
      dir.setMag(this.speed);
      this.pos.add(dir);
    }
  }

  hit() {
    if (this.tower.type === 2 || this.tower.type === 5) { // Splash or Missile
      for (let e of enemies) {
        if (dist(e.pos.x, e.pos.y, this.target.pos.x, this.target.pos.y) < 60) {
          e.hp -= this.tower.damage;
        }
      }
    } else if (this.tower.type === 3) { // Freeze
      this.target.speed *= 0.5;
      this.target.hp -= this.tower.damage;
    } else if (this.tower.type !== 4) {
      this.target.hp -= this.tower.damage;
    }
  }

  show() {
    push();
    if (this.tower.type === 0) { // Basic
      stroke(100, 200, 255);
      strokeWeight(5);
      line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
      fill(200, 240, 255);
      ellipse(this.pos.x, this.pos.y, 10);
    } else if (this.tower.type === 1) { // Sniper
      stroke(200, 100, 255);
      strokeWeight(2);
      line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
      fill(255, 180, 255);
      ellipse(this.pos.x, this.pos.y, 6);
    } else if (this.tower.type === 2) { // Splash
      noStroke();
      fill(255, 150, 0);
      ellipse(this.pos.x, this.pos.y, 16);
      fill(255, 255, 100, 120);
      ellipse(this.pos.x, this.pos.y, 25);
    } else if (this.tower.type === 3) { // Freeze
      noStroke();
      fill(150, 255, 255);
      ellipse(this.pos.x, this.pos.y, 14);
      fill(255, 255, 255, 150);
      ellipse(this.pos.x, this.pos.y, 24);
    } else if (this.tower.type === 4) { // Laser beam
      stroke(255, 80, 80, 180);
      strokeWeight(3);
      line(this.tower.x, this.tower.y, this.target.pos.x, this.target.pos.y);
      noStroke();
      fill(255, 50, 50, 120);
      ellipse(this.target.pos.x, this.target.pos.y, 20);
    } else if (this.tower.type === 5) { // Missile
      stroke(255, 180, 0, 150);
      strokeWeight(6);
      line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
      fill(255, 100, 0);
      ellipse(this.pos.x, this.pos.y, 14);
    }
    pop();
  }
}
