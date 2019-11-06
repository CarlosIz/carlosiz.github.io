function setup() {
  var canvas = createCanvas(400, 400);

  //  //html stuff
  //  canvas.position(600, 300);
  //  canvas.class("areaC");

  noFill();

}

function draw() {
  noLoop();
  background(255);
}

function mousePressed() {
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 30, 25);
  
  
}
function mouseDragged() {
  fill(255, 0, 0);
  noStroke();
  ellipse(mouseX, mouseY, 30, 25);
  
}