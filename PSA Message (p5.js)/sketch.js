let myFont = "Cinzel";
let myFont2 = "Space Mono";

let aColors = ['rgb(100,54,29)','rgb(61,24,3)','rgb(87,38,12)'];
let bColors = ['rgba(139,69,19,.5)','rgba(189,63,3,0.5))','rgba(123,63,0,.5)'];

let frameRateNum = 0;


let x = 0;
let y = 10;
let downSpeed = 2;
let verticalSpeed = 6;
let gravity = .95;

function setup() {
  frameRate(frameRateNum+5);
  createCanvas(1920, 1080);
  
}

let myImage1;
let bottle;
let bottle2;
let bottle3;
let bottle4;
let bottle5;
let bottle6;
let bottle7;

function preload(){
  myImage1 = loadImage('45d.png');
  bottle = loadImage('bottle.png');
  bottle2 = loadImage('bottle.png');
  bottle3 = loadImage('bottle.png');
  bottle4 = loadImage('bottle.png');
  bottle5 = loadImage('bottle.png');
  bottle6 = loadImage('bottle.png');
  bottle7 = loadImage('bottle.png');
}

function draw() {
  background('#F5F5DC');
  myImage1.resize(1902, 1080);
  image(myImage1,0,0);
  //texture(myImage1);
  
  // typography
  //fill('red');
  fill('rgba(60,42,30,0.1)');
  for (let y = 50; y < 1080; y += 50) {
    for (let x = 30; x < 1920; x += 30) {
      circle(x, y, 10)
    }
  }
  
  
  if (mouseIsPressed){
    stroke('red');
    strokeWeight(15);
    line(mouseX, mouseY, mouseX+100, mouseY+100);
    line(mouseX, mouseY+100, mouseX+100, mouseY);
  
    line(mouseX, mouseY+150, mouseX+100, mouseY+250);
    line(mouseX, mouseY+250, mouseX+100, mouseY+150);
  
    line(mouseX, mouseY+300, mouseX+100, mouseY+400);
    line(mouseX, mouseY+400, mouseX+100, mouseY+300);
  
    line(mouseX, mouseY+450, mouseX+100, mouseY+550);
    line(mouseX, mouseY+550, mouseX+100, mouseY+450);
  
    line(mouseX, mouseY+600, mouseX+100, mouseY+700);
    line(mouseX, mouseY+700, mouseX+100, mouseY+600);
    
    

  
  
  
  

    line(mouseX+200, mouseY+200, mouseX+300, mouseY+300)
    line(mouseX+200, mouseY+300, mouseX+300, mouseY+200);
  
    line(mouseX+400, mouseY+400, mouseX+500, mouseY+500);
    line(mouseX+400, mouseY+500, mouseX+500, mouseY+400);
  
    line(mouseX-100, mouseY-100, mouseX-200, mouseY-200);
    line(mouseX-100, mouseY-200, mouseX-200, mouseY-100);
    
    
    // bottle
    image(bottle, x+5, y);
    image(bottle2, x+100, y-10);
    image(bottle3, x+150, y-200);
    image(bottle4, x+340, y-500);
    image(bottle5, x+600, y+300);
    image(bottle6, x+700, y-100);
    image(bottle7, x+100, y+600);
    
    downSpeed += gravity;
    y += downSpeed*3;
    
    x += verticalSpeed*2;
    
  } else {
    stroke('red');
    strokeWeight(10);
    line(mouseX, mouseY, mouseX+100, mouseY+100);
    line(mouseX, mouseY+100, mouseX+100, mouseY);
  
  }
  
  
  
  
  
  // PART 1  
  fill(random(bColors));
  strokeWeight(2);
  textSize(150);
  textStyle(BOLDITALIC);
  text("DON'T", 860, 340);
  text("DRINK & DRINK", 1060, 540);
  
  textStyle(NORMAL);
  textAlign(CENTER,CENTER);
  textFont(myFont2);
  fill(random(aColors));
  textSize(150);
  text("DON'T", 860, 340);
  text("DRINK & DRINK", 1060, 540);
  
  // PART 2
  fill(random(bColors));
  textSize(50);
  textStyle(BOLDITALIC);
  text("PLEASE", 790, 640);
  
  textStyle(NORMAL);
  textAlign(CENTER,CENTER);
  textFont(myFont2);
  fill(random(aColors));
  textSize(50);
  text("PLEASE", 790, 640);
  
  
  //stroke('brown');
  //circle(mouseX, mouseY, 200);

  //while(mouseX<=540){
  //  
  //}
  
  
}

//start and stop looping/drawing when you press your mouse
function mousePressed() {
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}

//save a copy of your drawing when you hit the 's' key
function keyTyped() {
  if (key === 's') {
  saveCanvas('poster', 'png');
  }
}