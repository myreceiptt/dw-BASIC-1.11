// dw Spread Lines...
let dwParticles = [];

let dwInterval;
let dwFinale;
let dwPercentage;

let dwFrame = 0;
let dwIndex = 0;

// Colors scheme by Ezra Igor...
let dwVariants = [
  ["#DD1C1A", "#E4572E", "#F3A712", "#FFD400"], // 0
  ["#FFD400", "#EAD94C", "#014717", "#169873"], // 1
  ["#169873", "#6AD5CB", "#17BEBB", "#95A3A4"], // 2
  ["#95A3A4", "#06AED5", "#004C74", "#B4CDED"], // 3
  ["#B4CDED", "#340068", "#F79AD3", "#740747"], // 4
  ["#740747", "#D88C9A", "#FF6978", "#DD1C1A"], // 5
  ["#DD1C1A", "#FFD400", "#169873", "#95A3A4", "B4CDED", "740747"], // 6
  [
    "#DD1C1A",
    "#E4572E",
    "#F3A712",
    "#FFD400",
    "#EAD94C",
    "#014717",
    "#169873",
    "#6AD5CB",
    "#17BEBB",
    "#95A3A4",
    "#06AED5",
    "#004C74",
    "#B4CDED",
    "#340068",
    "#F79AD3",
    "#740747",
    "#D88C9A",
    "#FF6978",
  ], // 7
];

let dwRandom;
let dwColors;

function setup() {
  createCanvas(windowWidth, windowHeight);

  dwInterval = $fx.getParam("interval_rate");
  dwFinale = $fx.getParam("finale_number");
  dwPercentage = $fx.getParam("percentage_spread");

  dwRandom = $fx.getParam("variant_number");
  dwColors = dwVariants[dwRandom];
}

function draw() {
  dwFrame++;

  if (dwFrame >= dwInterval && dwIndex < dwFinale) {
    const colorIndex = dwIndex % dwColors.length;
    dwParticles.push(new Particle(color(dwColors[colorIndex])));
    dwFrame = 0;
    dwIndex++;
  }

  for (let particle of dwParticles) {
    particle.update();
    particle.display();
  }

  if (dwFilled()) {
    $fx.preview();
    noLoop();
  }
}

class Particle {
  constructor(color) {
    this.position = createVector($fx.rand() * width, $fx.rand() * height);
    this.rapidity = createVector(
      $fx.rand() * $fx.getParam("rapidity_x"),
      $fx.rand() * $fx.getParam("rapidity_y")
    );
    this.size = $fx.rand() * $fx.getParam("particle_size");
    this.color = color;
  }

  update() {
    this.position.add(this.rapidity);

    if (this.position.x < 0 || this.position.x > width) {
      this.rapidity.x *= -1;
    }

    if (this.position.y < 0 || this.position.y > height) {
      this.rapidity.y *= -1;
    }
  }

  display() {
    // noStroke();
    stroke("#111");
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
}

function dwFilled() {
  let dTotal = width * height;
  let wFilled = 0;

  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    if (pixels[i + 3] !== 0) {
      wFilled++;
    }
  }
  updatePixels();

  let dwFillPercentage = (wFilled / dTotal) * 100;
  return dwFillPercentage >= floor(dwPercentage) || dwFillPercentage == 100;
}
