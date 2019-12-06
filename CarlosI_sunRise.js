//sun Rise

var sunX, sunY;
var xSpeed, ySpeed, mxSpeed, mySpeed;
var sun;
var brightV;

var stars = [];

function setup() {
  var canvas = createCanvas(500,500);

   //html stuff
   canvas.position(600, 250);
   canvas.class("areaC");

  colorMode(HSB, 360, 100, 100);

  for (var i = 0;  i < 50; i++) {
    stars.push(new Star());

  }

  sun = new moveSun(0, height/2, 2.5, -2.5);

}

function draw() {

  brightV = map(sun.y, 0, height/2, 0, 100);
  background(239, 80, 80 - brightV);

  //sun functions
  sun.drawSun();
  sun.move();
  sun.reset();

  //stars
  for (var i = 0; i < 50; i++) {
    stars[i].draw();

  }

  //ocean
  fill(211, 100, 140 - brightV);
  rect(0, height/2, width, height/2);

}

function moveSun(sunX, sunY, xSpeed, ySpeed) {
  this.xSpd = xSpeed;
  this.ySpd = ySpeed;
  this.x = sunX;
  this.y = sunY;


  this.drawSun = function() {
    //sun
    noStroke();
    //sun back
    fill(23, 80, 80);
    ellipse(this.x, this.y, 60, 60);
    //sun front
    fill(35, 80, 80);
    ellipse(this.x, this.y, 50, 50);

  }

  this.move = function() {
    this.x += this.xSpd;
    this.y += this.ySpd;

    if (this.y <= 0) {
      this.ySpd = -this.ySpd;

    }
  }

  this.reset = function() {
    if (this.x > width + 100) {
      this.x = 0;
      this.y = height/2;
      this.ySpd = -2.5;

    }

  }
}

function Star() {
  this.sx = random(width);
  this.sy = random(height/2);
  this.w = 2;
  this.h = 2;

  Star.prototype.draw = function() {
    noStroke();
    fill(45, 80, 40);
    ellipse(this.sx, this.sy, this.w, this.h);

    if (this.w ==2) {
      this.w = 3;
      this.h = 3;
    } else {
      this.w = 2;
      this.h = 2;

    }

    this.sx += random(5);
    this.sy += random(5);

    if (this.sx >= width) {
      this.sx = 0;

    }
    if (this.sy >= height/2) {
      this.sy = 0;

    }

  }

}
