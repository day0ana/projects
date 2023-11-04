// PONG GAME

class Paddle {
  constructor(source, x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 100;
    this.source = source;
  }

  update(k) {
    if (k) {
      // use keyboard
      this.y += moveAmount;
      this.y = constrain(this.y, 0, height);
    } else {
      // use mouse/pad
      this.y = mouseY - this.h / 2;
    }
  }

  show() {
    image(this.source, this.x, this.y, 20, 100);
  }
}

class Ball {
  constructor(source) {
    this.x = 320;
    this.y = 240;
    this.w = 20;
    this.h = 20;
    this.xSpeed = 10;
    this.ySpeed = 0;
    this.source = source;
  }

  show() {
    image(this.source, this.x, this.w/2 + 90, this.y - this.h/2 - 100);
    this.source.resize(200, 200);

  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > width - 25) {
      let dist = abs(paddleRight.y + 50 - this.y);
      if (dist < 50) {
        this.x = width - 25;
        // hits paddle within 50
        this.xSpeed = -this.xSpeed;
        let factor = random(0.8, 1.2);
        this.xSpeed += factor;
        // min speed of 6
        if (this.xSpeed < -6) {
          this.xSpeed = -6;
        }
        goodScore++;

        let mouseSpeed = pmouseY - mouseY;
        if (abs(mouseSpeed) > 5) {
          this.ySpeed -= mouseSpeed * 0.25;
        } else {
          this.ySpeed *= 0.5;
        }

        // if missed the paddle, increase bad score
      } else {
        this.x = width / 2;
        this.y = height / 2;
        this.xSpeed = random(5, 12);
        this.ySpeed = random(-6, 6);
        badScore++;
      }
    }
    
    // if moving off to the left
  if(this.x < 15) {
    this.xSpeed = -this.xSpeed;
  }
  
  // if off the top or bottom
  if(this.y < 15 || this.y > height - 15) {
    this.ySpeed = -this.ySpeed;
  }
    
    
  } // end of update method
}

let bx, by, py;
let bxSpeed, bySpeed;

let goodScore = 0;
let badScore = 0;

bx = 50;
by = 240;
py = 100;

bxSpeed = 10;
bySpeed = 2;

let moveAmount = 0;

let soundBG;

let paddleImage, paddleImage2, pongBGImage, ballImage;
let paddleRight, paddleLeft;
let ballSlap;

function preload() {
  paddleImage = loadImage("paddle1.jpg");
  paddleImage2 = loadImage("paddle2.PNG");
  pongBGImage = loadImage("pongBG.PNG");
  ballImage = loadImage("ball.PNG");
  
  soundBG = loadSound("gameMusic.mp3");
}

function setup() {
  createCanvas(640, 480);
  soundBG.play();

  paddleRight = new Paddle(paddleImage, width - 25, 50);
  paddleLeft = new Paddle(paddleImage2, 5, 100);

  ballSlap = new Ball(ballImage);

  textFont("Arial");
  textSize(24);
  textAlign(CENTER, BASELINE);
}

function draw() {
  background(pongBGImage);

  text(goodScore, width / 2 + 30, 25);
  text(badScore, width / 2 - 30, 25);
  drawCourt();

  py = mouseY - 50;
  bx += bxSpeed;
  by += bySpeed;

  ball();
  paddle();
  checkBall();

  ballSlap.update();
  ballSlap.show();

  // if not use keyboard
  paddleRight.update(false);
  paddleRight.show();

  // if use keyboard
  paddleLeft.update(true);
  paddleLeft.show();
}

function checkBall() {
  if (bx > width - 25) {
    let dist = abs(py + 50 - by);
    if (dist < 50) {
      bx = width - 25;
      // hits paddle within 50
      bxSpeed = -bxSpeed;
      let factor = random(0.8, 1.2);
      bxSpeed += factor;
      // min speed of 6
      if (bxSpeed < -6) {
        bxSpeed = -6;
      }
      goodScore++;

      let mouseSpeed = pmouseY - mouseY;
      if (abs(mouseSpeed) > 5) {
        bySpeed -= mouseSpeed * 0.25;
      } else {
        bySpeed *= 0.5;
      }

      // if missed the paddle, increase bad score
    } else {
      bx = width / 2;
      by = height / 2;
      bxSpeed = random(5, 15);
      bySpeed = random(-6, 6);
      badScore++;
    }
  }

  // if moving off to the left
  if (bx < 15) {
    bxSpeed = -bxSpeed;
  }

  // if off the top or bottom
  if (by < 15 || by > height - 15) {
    bySpeed = -bySpeed;
  }
}

function drawCourt() {
  noFill();
  stroke(0);
  strokeWeight(1);
  rect(5, 5, width - 10, height - 10);
  line(width / 2, 5, width / 2, height - 10);
}

// ball
function ball() {
  fill("pink");
  noStroke();
  circle(bx, by, 20);
}

function paddle() {
  fill(0);
  noStroke();
  rect(width - 25, py, 20, 100);
  //image(paddleImage, width-25, py, 20, 100);
}

function keyPressed() {
  if (key == "a") {
    // move paddle up
    moveAmount += -5;
  } else if (key == "z") {
    // move paddle down
    moveAmount += 5;
    //paddleLeft.y += 5; goes wackly with the not smooth movement
  }
}
