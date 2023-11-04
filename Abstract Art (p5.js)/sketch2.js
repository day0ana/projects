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
  
  //sketch
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