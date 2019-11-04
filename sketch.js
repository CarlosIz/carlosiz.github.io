//CSMA 101 
//Introduction to Programming
//Semester 1
//Professor Theohar
//Carlos Izaguirre
//carlos.izaguirre@woodbury.edu

function setup() {
  
  createCanvas(400, 400);
  noFill();
}

function draw() {
  noLoop();
  background(255);
}

function mousePressed() {

// Brush 3
  
  
// let location = random(15);  
// let size = random(40);
//   strokeWeight(2)
//   stroke(0);
//   fill(random(255));
//   rect(mouseX - location, mouseY - location, size, size);
    
// Brush 2
  
// fill(0, 40, 0);
// noStroke();
// square(mouseX, mouseY, 25);
   
//   Brush 1
  
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 30, 25);
  
  
}
function mouseDragged() {

// Brush 3
  
// let location = random(40);  
// let size = random(40);
//   strokeWeight(2)
//   stroke(0);
//   fill(random(255));
//   rect(mouseX - location, mouseY - location, size, size); 
  
  
//   Brush 2
  
// fill(0, 40, 0);
// noStroke();
// square(mouseX, mouseY, 25);
  
  
// Brush 1  
  
  fill(255, 0, 0);
  noStroke();
  ellipse(mouseX, mouseY, 30, 25);
  
  
}