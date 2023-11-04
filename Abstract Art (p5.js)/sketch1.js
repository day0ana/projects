function setup() {
  createCanvas(400, 400);
}

function draw() {
  fill("white");
  background(220);
  //fill("white");
  strokeWeight(1);
  
  // colors
  let color1 = "lightpink";
  let color2 = "lightblue";
  let color3 = "lightyellow";

  let x = 0;
  let y = 0;
  let w = 100
  

    fill(color1);
    rect(x,y,w + 100);
    circle(x+325,y+230,w+50);
  
    fill(color1);
    ellipse(x+230, y+230, w + 200);
    ellipse(x+60, y+200, w + 90);
    fill(color2);
    square(x + 70, y+300, 150);
    
    
    fill(color2);
    square(x + 250, y, 150);
    circle(x+10,y+320,w+50);
    rect(x+300,y+320,w + 200);
    
    fill(color3);
    ellipse(x, y, w + 200);
    ellipse(x+400, y+400, w + 200)
    square(x + 230, y+100, 150);
    strokeWeight(8);
    ellipse(x+100, y+120, w + 50);
    ellipse(x+300, y+120, w + 50);
    
    stroke(color1);
    strokeWeight(8);
    line(x+23,y+305,x+400,y+305);
    ellipse(x+200, y+230, w + 100);
    arc(x+200, y+230, w-70, 30, 0, radians(180), PIE);
    circle(x+170, y+200, 30);
    circle(x+230, y+200, 30);
    rect(x+200,y+330,w-80, 90);
    
  

  
}
