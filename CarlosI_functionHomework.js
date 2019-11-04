//modularity homework


var phoneA;
var phoneB;
var phoneC;
var phoneD;

function setup() {
  createCanvas(800,800);


  phoneA = new phone(350, 400, 35, 2, 5);
  phoneB = new phone(600, 200, 28, 3, 7);
  phoneC = new phone(100, 200, 8, 4, 2);
  phoneD = new phone(500, 500, 25, 4, 8);

}

function draw() {
  background(150);

  //phoneA
  phoneA.drawPhone();
  phoneA.bPower();
  phoneA.movePhone();
  phoneA.bouncePhone();
  //phoneB
  phoneB.drawPhone();
  phoneB.bPower();
  phoneB.movePhone();
  phoneB.bouncePhone();
  //phoneC
  phoneC.drawPhone();
  phoneC.bPower();
  phoneC.movePhone();
  phoneC.bouncePhone();
  //phoneD
  phoneD.drawPhone();
  phoneD.bPower();
  phoneD.movePhone();
  phoneD.bouncePhone();

  //batt power check
  textSize(25);
  text("A: " + phoneA.b, 225, 100);
  text("B: " + phoneB.b, 325, 100);
  text("C: " + phoneC.b, 425, 100);
  text("D: " + phoneD.b, 525, 100);


  //collision
  if(phoneA.isCollided(phoneB.x, phoneB.y)) {

    phoneA.bPLoss();
    phoneB.bPLoss();


    phoneA.pBounce();
    phoneB.pBounce();

    this.col = fill(random(255), random(255), random(255));

  }
  if(phoneA.isCollided(phoneC.x, phoneC.y)) {

    phoneA.bPLoss();
    phoneC.bPLoss();

    phoneA.pBounce();
    phoneC.pBounce();

    this.col = fill(random(255), random(255), random(255));
  }
  if(phoneA.isCollided(phoneD.x, phoneD.y)) {

    phoneA.bPLoss();
    phoneD.bPLoss();

    phoneA.pBounce();
    phoneD.pBounce();

    this.col = fill(random(255), random(255), random(255));
  }
  if(phoneB.isCollided(phoneD.x, phoneD.y)) {

    phoneB.bPLoss();
    phoneD.bPLoss();

    phoneB.pBounce();
    phoneD.pBounce();

    this.col = fill(random(255), random(255), random(255));
  }
  if(phoneC.isCollided(phoneD.x, phoneD.y)) {

    phoneC.bPLoss();
    phoneD.bPLoss();

    phoneC.pBounce();
    phoneD.pBounce();

    this.col = fill(random(255), random(255), random(255));
  }
  if(phoneB.isCollided(phoneC.x, phoneC.y)) {

    phoneB.bPLoss();
    phoneC.bPLoss();

    phoneB.pBounce();
    phoneC.pBounce();
    this.col = fill(random(255), random(255), random(255));
  }

  // //reset @ 0
  if(this.b <= 0) {
    phoneA.reset();
    phoneB.reset();
    phoneC.reset();
    phoneD.reset();
  }
}

function phone(phoneX, phoneY, batt, speedX, speedY) {

  this.x = phoneX;
  this.y = phoneY;
  this.b = batt;
  this.spX = speedX;
  this.spY = speedY;
  this.col = fill(255);
  //move objects
  this.movePhone = function() {
    this.x += this.spX;
    this.y += this.spY;

  }

  //collision with wall
  this.bouncePhone = function() {
    if (this.x <= 0 || this.x >= width - 75)
    this.spX = -this.spX;
     if (this.y <= 0 || this.y >= height - 150)
    this.spY = -this.spY;

  }

  //check collision with other objects
  this.isCollided = function(otherX, otherY){
      if(dist(this.x, this.y, otherX, otherY) <= 100)

          return true;
  }

  //draw phone
  this.drawPhone = function() {
  //color
  this.col
  //phone shape
  strokeWeight(2);
  stroke(0);
  rect(this.x, this.y, 75, 150);

  //home button
  ellipse(this.x+37.5, this.y+142.5, 10);

  //screen
  push();
  fill(245);
  rect(this.x+10, this.y+10, 55, 125);

  //battery box
  strokeWeight(2);
  stroke(0);
  rect(this.x+20, this.y+75, 35, 20);
  pop();

  //battery lines
  strokeWeight(2);
  stroke(0);
  line(this.x+29, this.y+75, this.x+29, this.y+95);
  line(this.x+38, this.y+75, this.x+38, this.y+95);
  line(this.x+47, this.y+75, this.x+47, this.y+95);
  }

  //battery power
  this.bPower = function() {
  push();

  if (this.b <= 10) {
    fill(200, 0, 0);

  }
  if (this.b >= 11 && this.b <= 33) {
      fill(130, 200, 0);
  }
  if (this.b >= 34) {
      fill(0, 255, 0);
  }

  if (this.b <= 0) {
    fill(0);
    this.b += 35;

  }
  if (this.b >= 36) {
    fill(0);
    this.b -= 10;

  }

  noStroke();

  rect(this.x+20, this.y+75, this.b , 20);
  pop();
  }

  //battery loss
  this.bPLoss = function() {
    this.b = this.b - 0.5;

    return;
  }

  //phone bounce off phone
  this.pBounce = function() {
    this.x = -this.x;
    this.y = -this.y;

  }

  //reset
  this.reset = function() {
    background(0);
    this.x = 300;
    this.y = 400;
    this.b = 32;
    this.spX = 3;
    this.spY = 8;
    this.col = fill(255);

  }

}
