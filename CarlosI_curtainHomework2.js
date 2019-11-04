//curatin exercise

var img1;
var img2;
var totalCircles;
var x, y;
var desiredColor;
var c;
var angle1 = 0;
var speed1 = 1;
function preload() {
  img1 = loadImage ("data/ADraw.png");
    img2 = loadImage ("data/Ae.png");

}

function setup() {
  createCanvas(640, 480);
  background(0);

  //loading image data
  img1.loadPixels();
  img2.loadPixels();

  //initialize values
  totalCircles = 50;
  y = 0;
  c = 1;

}

function draw() {

  //set circle size based off totalCircles
  var circleSize = width/totalCircles;

  //draw circles
    var currentCircles = 0;

  //keeps the size proportional to your width
    while(currentCircles < totalCircles) {
        x = currentCircles * circleSize;


    //get color
    var desiredColor1 = getColor1();
    var desiredColor2 = getColor2();

    if(c > 0) {

      fill((desiredColor1));

    }
    if(c < 0) {

      fill((desiredColor2));

    }
    push();
    angle1;
    translate(random(100));
    rotate(radians(10));
    ellipse(x, y, circleSize, circleSize);
    currentCircles++;

  }

    //move down a row
    y = y + circleSize;

    //start over at top
    if(y > height) {
      totalCircles = random(5, 75);
      c = -c;
      y= 0;

    }
    pop();

}

///////////////////////////////////////////////////////////
function getColor1() {
  var desiredColor1 = img1.get(floor(x), floor(y));
  return desiredColor1;

}

function getColor2() {
  var desiredColor2 = img2.get(floor(x), floor(y));
  return desiredColor2;

}
