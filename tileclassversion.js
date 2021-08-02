// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *  createCanvas, color, colorMode, strokeWeight, stroke, fill, HSB, noFill, WIDTH, HEIGHT, background, ellipse, rect, time, i, noLoop, textSize, text, width, height, tiles, newRow, random, mouseY, mouseX
 */

let rectiles;


function setup() {
  createCanvas(401, 601);
  rectiles = [
  new Tile(20, 80, 30, 60, 1)  
  ]
}

function draw() {
  background(51);
  for (let drawrectangle = 0; drawrectangle < rectiles.length; drawrectangle++){
    rectiles[drawrectangle]
  }

}

class Tile {
    constructor(width, height, x, y, velocity) {
      this.width = 100;
      this.height = 150;
      this.x = x;
      this.y = this.height;
      this.velocity = 1;
    }
    drawrectangle() {
    fill(255, 204, 0);
    rect(this.x, this.y, this.width, this.height);
  };
  
  
  
  
  
  }






