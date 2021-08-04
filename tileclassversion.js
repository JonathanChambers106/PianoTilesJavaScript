// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *  createCanvas, color, hit, textAlign, CENTER, collidePointRect, colorMode, strokeWeight,
 * stroke, fill, HSB, noFill, WIDTH, HEIGHT, background, ellipse, rect, time, i, noLoop,
 * textSize, text, width, height, tiles, newRow, random, mouseY, mouseX, loop, createButton
 */

let rectiles, button, score;

function setup() {
  createCanvas(400, 700);
  colorMode(HSB, 360, 100, 100);

  score = 0;
  rectiles = [
    /*to do: change x's value to random position
     *make tiles smaller
     */
    new Tile(90, 150, 50, -300, 4),
    new Tile(90, 150, 250, 200, 2)
    // new Tile(90, 100, 300, -150, 2),
    //   new Tile(90, 100, 150, 0, 2)
  ];

  textAlign(CENTER);
  button = createButton("Reset Game");
  button.position(13, 35);
  button.mousePressed(resetGame);
}

function draw() {
  background(70);
  displayScore();
  rectanglecontrol();
}

function displayScore() {
  //Display Score
  fill(50, 100, 100);
  
  textSize(15);
  text(`Score: ${score}`, 35, 550);
  if (score % 12 == 0){
    text(`Congrats you've reached Level: ${score /12 + 1}`,35, 600)
  }
  textAlign(CENTER); 
}

function mousePressed() {
  for (let i = 0; i < rectiles.length; i++) {
    let tile = rectiles[i];
    console.log("rectiles");
    hit = collidePointRect(
      mouseX,
      mouseY,
      tile.x,
      tile.y,
      tile.width,
      tile.height
    );

    if (hit) {
      tile.hit();
      console.log("tile", tile);
    }
  }
}

function rectanglecontrol() {
  for (
    let drawrectangle = 0;
    drawrectangle < rectiles.length;
    drawrectangle++
  ) {
    rectiles[drawrectangle].drawrectangle();
    rectiles[drawrectangle].move(Tile);
    rectiles[drawrectangle].belowcanvas();
  }
}

//tiles
class Tile {
  constructor(width, height, x, y, velocity) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.velocity = velocity;
  }

  //tile movement
  move() {
    this.y += this.velocity;
    this.velocity = (score % 12) + 0.5;
  }

  belowcanvas() {
    if (this.y > height) {
      gameOver();
    }
  }

  hit() {
    this.y = -this.height;
    score++;
  }

  drawrectangle() {
    fill(0, 0, 0);
    rect(this.x, this.y, this.width, this.height);
  }
}
// reset button
function resetGame() {
  score = 0;
  loop();
  rectiles = [
    /*to do: change x's value to random position
     *make tiles smaller
     */
    new Tile(90, 150, 50, -300, 4),
    new Tile(90, 150, 250, 200, 2)
    // new Tile(90, 100, 300, -150, 2),
    //   new Tile(90, 100, 150, 0, 2)
  ];
}

//end screen fuction
function gameOver() {
  noLoop();
  fill(255, 204, 100);
  textSize(48);
  text("GAME OVER", width / 2, height / 2);
  textSize(12);
  text("Press 'Reset Game' Button to Restart", width / 4, height / 4);
}
