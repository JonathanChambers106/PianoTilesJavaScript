// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *  createCanvas, colorMode, strokeWeight, stroke, fill, HSB, noFill, background, ellipse, rect
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
  background(220)
  //      hrz, vrtc, h,  w
  colorMode(HSB);
  strokeWeight(4);
  stroke(255, 204, 100)
  ellipse(150, 130, 200, 200)
  
  
  // R, G & B integer values
  stroke(255, 204, 0);
  strokeWeight(4);
  ellipse(400, 130, 200, 200)
  
  
  
  
  ellipse(650, 130, 200, 200)
  
  ellipse(525, 230, 200, 200)
  
  ellipse(275, 230, 200, 200)
  
  noFill()
}