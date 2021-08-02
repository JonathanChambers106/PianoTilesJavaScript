// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *  createCanvas, color, colorMode, strokeWeight, stroke, fill, HSB, noFill, WIDTH, HEIGHT, background, ellipse, rect, time, i, noLoop, textSize, text, width, height, tiles, newRow, random, mouseY, mouseX
 */

function setup() {
  createCanvas(401, 601);
}

function draw() {
  background(51);

  class tile {
    constructor(WIDTH, HEIGHT, x, y, velocity) {
      this.WIDTH = 100;
      this.HEIGHT = 150;
      this.x = x;
      this.y = this.HEIGHT;
      this.velocity = 1;
    }
  }

  this.draw = function(rectangle) {
    noStroke()
    fill(255, 204, 0);
    rect(this.x, this.y, this.WIDTH, this.HEIGHT);
    
  };
}
