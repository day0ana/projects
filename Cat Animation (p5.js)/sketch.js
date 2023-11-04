// variables
let gifBG;
let foodHeart;
let cookie;
let catMeh;
let catHappy;
let arch;

let soundMunching;
let soundWaves;
let soundMeow;
let soundAngry;

let x,y,w,h;
x = 170;
y = 180;
w = 35;
h = 40;

let cookieX = -5;
let foodHeartX = -5;
//350
let archX = 600;

let cat1X = 190, cat1Y = 15, cat1W = 350, cat1H = 350;
let cat2X = -300, cat2Y = 15, cat2W = 350, cat2H = 350;



function preload() {
  // gifs
  gifBG = loadImage('gifBG.gif');
  foodHeart = loadImage('foodHeart.gif');
  
  // images
  catMeh = loadImage('catMeh.PNG');
  cookie = loadImage('cookie.PNG');
  catHappy = loadImage('catHappy.PNG');
  arch = loadImage('arch.PNG');
  
  // sounds
  soundMunching = loadSound('munching-1.mp3');
  soundWaves = loadSound('waves.mp3');
  soundMeow = loadSound('meow.mp3');
  soundAngry = loadSound('angry.mp3');
}

function setup() {
  createCanvas(500, 300);
  foodHeart.pause();
  foodHeart.setFrame(0);
  //soundMunching.loop();
  soundWaves.loop();
  soundWaves.play();
  
}

function draw() {
  background(gifBG);
  image(foodHeart, foodHeartX, -20, 400, 400);
  image(cookie, cookieX, -20, 400, 400);
  image(catMeh, cat1X, cat1Y, cat1W, cat1H);
  image(catHappy, cat2X, cat2Y, cat2W, cat2H);
  image(arch, archX, 100, 50, 50);
  
  //fill(255,128);
  //circle(180,200,45);
  //rect(170, 180, 35, 40)
  //circle(x,y,w);
  
  if(mouseIsPressed == true && mouseX>=x && mouseY>=y && mouseX<=x+w && mouseY<=y+h){
    cookieX = -500;
    
    foodHeart.play();
    //soundMunching.rate(20);
    //soundMunching.loop();
    soundMunching.play();
    //circle(0,0,100);
     } else {
       foodHeart.pause();
       soundMunching.pause();
     }
  
  //rect(280, 190, 22, 31);
  if(mouseX>=x+180 && mouseY>=y-80 && mouseX<=x+225 && mouseY<=y-30){
    cat2X = 190;
    cat1X = -300;
    if(mouseIsPressed == true){
      soundMeow.play();
    }
  } else {
    cat1X = 190;
    cat2X = -300;
  }
  
  // if on cat tail, cat get angry
  if(mouseIsPressed == true && mouseX>=x+110 && mouseX<=x+132 && mouseY>=y+10 && mouseY<=y+41){
    soundAngry.play();
    archX = 350;
  } else {
    archX = 600;
  }


}
