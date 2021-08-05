// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *  createCanvas, color, hit, textAlign, CENTER, collidePointRect, colorMode, strokeWeight,
 * stroke, fill, HSB, noFill, WIDTH, HEIGHT, background, ellipse, rect, time, i, noLoop,
 * textSize, loadImage, text, width, height, clear, tiles, newRow, random, mouseY, mouseX, loop, createButton, loaded, loadSound, createSlider, LEFT
 * keyCode, keyPressed, ENTER
*/

/*Stretch Work
* Themes for background image: Space, Funny face, dollar bill,
*change music in each level
*change background in each level
*add start screen
*reset button appears only at the end?
*pause and play button
*change x's value to random position
*If we add double xp score tile, use push to move new tile and then pop to remove it.
*Add another parameter to the constructor to change the value of each tile (Stretch).
*/

let rectiles,
  button,
  score,
  song,
  slider,
  frameNumber,
  backgroundImage,
  backgroundImage2;

var mode;
function setup() {
  mode = 0;
  createCanvas(400, 700);
  colorMode(HSB, 360, 100, 100);
  backgroundImage = loadImage(
    "https://cdn.glitch.com/c70bf76c-483f-4d41-8fbe-0bde4c8749a4%2F797185.png?v=1628118251470"
  );
  backgroundImage2 = loadImage(
    "https://cdn.glitch.com/c70bf76c-483f-4d41-8fbe-0bde4c8749a4%2Fwp5679196.jpeg?v=1628186061490"
  );

  song = loadSound(
    "https://cdn.glitch.com/c70bf76c-483f-4d41-8fbe-0bde4c8749a4%2Fpeaches.mp3?v=1628104909186",
    loaded
  );
  slider = createSlider(0, 1, 0.5, 0.01);
  score = 0;
  rectiles = [
    new Tile(90, 150, 50, -300, 1),
    new Tile(90, 150, 250, 200, 1)
    // new Tile(90, 100, 300, -150, 2),
    //   new Tile(90, 100, 150, 0, 2)
  ];

    //Hit button to play song
    button = createButton("Play Song");
    button.position(330, 10);
    button.mousePressed(togglePlaying);

}

function loaded() {
  console.log("loaded");
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.8);
    button.html("Stop Song");
  } else {
    song.pause();
    button.html("Play Song");
  }
}

function draw() {
  clear();
  if (mode == 0) {
    background(backgroundImage2);
    fill("rgb(0,255,0)");
    textSize(50);
    text("Crazy Tiles", 90, 100);
    textSize(15);
    text("by The 8-Ballers", 100, 130);
    textSize(20);
    text('Press "Enter/Return" key to start', 70, 600);
  }

  if (mode == 1) {
    background(backgroundImage);
    song.setVolume(slider.value());
    rectanglecontrol();
    displayScore();
    textAlign(CENTER);
    button = createButton("Reset Game");
    button.position(10, 10);
    button.mousePressed(resetGame);
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    mode = 1;
  }
}

function displayScore() {
  //Display Score
  textAlign(LEFT);
  textSize(15);
  fill(55, 200, 100);
  text(`Score: ${score}`, 90, 10);
  if (score % 12 == 0) {
    text(`Congrats you've reached Level: ${score / 12 + 1}`, 90, 50);
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
    this.velocity = ((score % 12) + score / 12 + 1) / 2;
  }

  belowcanvas() {
    if (this.y > height) {
      gameOver();
    }
  }

  frame() {
    if (frameNumber < 100) {
      frameNumber++;
    } else {
      this.hue = random(0, 360);
      fill(this.hue, 200, 100);
      frameNumber = 0;
    }
  }

  hit() {
    this.y = -this.height;
    score++;
  }

  drawrectangle() {
    this.frame();
    fill(this.hue, 200, 100);
    rect(this.x, this.y, this.width, this.height);
  }
}
// reset button
function resetGame() {
  score = 0;
  loop();
  rectiles = [
    new Tile(90, 150, 50, -300, 4),
    new Tile(90, 150, 250, 200, 2)
    // new Tile(90, 100, 300, -150, 2),
    //   new Tile(90, 100, 150, 0, 2)
  ];
}

//end screen fuction
function gameOver() {
  noLoop();
  fill("red");
  textSize(48);
  text("GAME OVER", width / 2, height / 2);
  textSize(14);
  text("Press 'Reset Game' Button to Restart", width / 2, 370);
}
