// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *   background, createCanvas, ellipse, noFill, stroke, strokeWeight 
 */

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

function setup(){
  // Code here runs only once
  createCanvas(800, 600);
}

function draw(){
  // Code here runs continuously
  background(220);

  noFill();
  strokeWeight(5);

  stroke(10, 160, 255);
  ellipse(50, 50, 50, 50);

  stroke(0, 0, 0);
  ellipse(110, 50, 50, 50);

  stroke(255, 0, 0);
  ellipse(170, 50, 50, 50);

  stroke(240, 210, 0);
  ellipse(80, 80, 50, 50);

  stroke(0, 180, 0);
  ellipse(140, 80, 50, 50);
}
