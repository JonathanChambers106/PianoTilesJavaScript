// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *  createCanvas, color, colorMode, strokeWeight, stroke, fill, HSB, noFill, WIDTH, HEIGHT, background, ellipse, rect, time, i, noLoop, textSize, text, width, height, tiles, newRow, random, mouseY, mouseX
 */

let rectiles;

function setup() {
  createCanvas(401, 601);
  colorMode(HSB, 360, 100, 100);
  rectiles = [
    new Tile(20, 300, 60, 1),
    new Tile(90, 300, 200, 1),
    new Tile(90, 300, 300, 1),
    new Tile(20, 300, 100, 1)
  ];
}

function draw() {
  background(255);
  for (
    let drawrectangle = 0;
    drawrectangle < rectiles.length;
    drawrectangle++
  ) {
    rectiles[drawrectangle].drawrectangle();
  }
}


function addScore(){}


class Tile {
  constructor(width, height, y, velocity) {
    this.width = width;
    this.height = height;
    this.x = random(10, 400);
    this.y = y;
    this.velocity = velocity;
  }
  drawrectangle() {
    fill(0, 0, 0);
    rect(this.x, this.y, this.width, this.height);
  }
}
