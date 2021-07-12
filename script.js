// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *  createCanvas, background, ellipse, rect
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
  ellipse(150, 100, 200, 200)
  
  ellipse(400, 100, 200, 200)
  
  ellipse(650, 100, 200, 200)
  
  ellipse(130, 335, 200, 200)
  
  ellipse(250, 150, 200, 200)
  
  noFill()
}