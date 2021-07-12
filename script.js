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

function draw(){
  // Code here runs continuously
  background(220)
  
  ellipse(170, 200, 300, 300)
  rect(100, 400, 150)
  
}