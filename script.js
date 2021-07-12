// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *  createCanvas, color, colorMode, strokeWeight, stroke, fill, HSB, noFill, background, ellipse, rect
 */

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

function setup(){
  // Code here runs only once
  createCanvas(800, 600)
}
 // blue, yellow, black, green and red on a white background
function draw(){
  // Code here runs continuously
  background(230)

  
  stroke(color(0, 0, 255));
  strokeWeight(10);
  ellipse(150, 130, 200, 200)

  stroke('#222222');
  strokeWeight(10);
  ellipse(400, 130, 200, 200)

  stroke('red');
  strokeWeight(10);
  ellipse(650, 130, 200, 200)
  
  stroke('rgb(0,255,0)');
  strokeWeight(10);
  ellipse(525, 230, 200, 200)
  
  stroke(255, 204, 0);
  strokeWeight(10);
  ellipse(275, 230, 200, 200)
  
  noFill()
}