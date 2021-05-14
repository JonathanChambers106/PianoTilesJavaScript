// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *   background, createCanvas, ellipse, noFill, stroke, strokeWeight,
 *   loadImage, image
 */

let dvdImage, x, y, masterVelocity, xVelocity, yVelocity;

function setup(){
  createCanvas(800, 600);
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  masterVelocity = 3;
  x = 50;
  xVelocity = masterVelocity;
  y = 50;
  yVelocity = masterVelocity;
}

function draw(){
  background(220);
  // Draw the logo at the new position.
  if (x > 600) {
    xVelocity = -masterVelocity;
  } else if (x < 0) {
    xVelocity = masterVelocity;
  }
  x += xVelocity;
  
  if (y > 450) {
    yVelocity = -masterVelocity;
  } else if (y < 0) {
    yVelocity = masterVelocity;
  }
  y += yVelocity;
  image(dvdImage, x, y, 200, 150);
}