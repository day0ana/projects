// FINAL SKETCH

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("grey");
  strokeWeight(1);
  
  // colors
  let color1 = "lightpink";
  let color2 = "lightblue";
  let color3 = "lightyellow";
   
  let x = 0;
  let y = 0;
  let w = 100
  let r = random(0,400);
  
  if (mouseIsPressed){
    fill(color1);
    rect(x,y,w + 100, 300, 20);
    
    fill(color2);
    rect(x + 200, y, 50, 400, 40);
    rect(x+250, y, 150,250,25);
    
    fill(color3);
    square(x + 250, y, 150, 100);
    rect(x,y+300, w+100, 300, 20);
    square(x+250, y+250,w+50,25);
    triangle(20, y+210, 140, y+210, 80, 40);
    
    
    fill(color1);
    circle(x +50,r,28);
    circle(x+150,r,28);
    circle(x+250, r, 28);
    circle(x+350, r, 28);
    
    
  } else {
    fill(color1);
    rect(x,y,w + 100);
    circle(x+325,y+230,w+50);
    
    fill(color2);
    rect(x + 200, y, 50, 300);
    rect(x+190,y+310,300, 100);
    
    fill(color3);
    square(x + 250, y, 150);
    ellipse(x, y, w + 200);
    rect(x,y+200,w+100);
    
    stroke(color1);
    strokeWeight(8);
    line(x+203,y+305,x+400,y+305);
    
  }

  
  
  
  
}