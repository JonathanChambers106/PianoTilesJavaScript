// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *  createCanvas, color, colorMode, strokeWeight, stroke, fill, HSB, noFill, WIDTH, HEIGHT, background, ellipse, rect, time, i, noLoop, textSize, text, width, height, tiles, newRow, random, mouseY, mouseX
 */

let WIDTH = 100;
let HEIGHT = 150;

let time;
let score;
let tiles = []

function setup (){
  createCanvas(401, 601);
  
  time = 0;
  for (let i = 0; i < 4; i++ )
   newRow();
 
}

function draw(){
  background(51);
  
  for (let i = 0; i < tiles.length; i++){
 
    let x = (i % 4) * WIDTH;
    let y = ((3 - Math.floor(i / 4)) * HEIGHT);
    
    
    
    fill((tiles[i] === 0) ? 0 : 255);
    noStroke()
    rect(x, y, WIDTH, HEIGHT);
  }
}



function newRow(){
  let t = Math.floor(random(4));
  
  for(let i = 0; i < 4; i++)
    tiles.unshift((t === i) ? 0 : 1);
}





