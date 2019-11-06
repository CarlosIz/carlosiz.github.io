//pongExercise

//variables for ball
var ballX = 50;
var ballY = 50;
var diameter = 20;
var directionX = random(9);
var directionY = random(10);

//variables for paddle
var rectX;
var rectY;
var rectW = 60;
var rectH = 10;

var started = false;
var score = 0;
var death = false;
var timer = 0;

var lI = 3;
// //challengeUP
// var challengeUP = 0;

function setup() {

var canvas = createCanvas(500, 500);

 //html stuff
 canvas.position(550, 200);
 canvas.class("areaC");

  reset();

}

function reset() {

  //variables for ball
  ballX = 50;
  ballY = 50;
  diameter = 20;
  directionX = random(9);
  directionY = random(10);

  //variables for paddle
  rectX;
  rectY;
  rectW = 60;
  rectH = 10;

  started = false;
  score = 0;
  death = false;
  timer = 0;

  lI = 3;

  // //challengeUP
  // var challengeUP = 0;

}

function draw() {

background(0);

//

  //ball bounces off wall
  ballX += directionX;
  ballY += directionY;

  //ball bounce X
  if (ballX < 0 || ballX > width) {

      directionX = -directionX*1.02;
  }

  //ball bounce Y top
  if (ballY < 0) {

      directionY = -directionY*1.02;

  }

    //ball bounce Y DEATH
    if (ballY > 500) {

        directionY = -directionY*1.02;
        death++;
        lI--;

    }


    //death
    if (death >= 3) {

      fill(255, 0, 0);
      textSize(50);
      text("Game Over", 150, 250);
      timer++;

    }
    //restart
    if (timer >= 40) {
        reset();
    }



  //detect collision w/ paddle
  if((ballX > rectX && ballX < rectX + rectW) && (ballY + (diameter/2) >= rectY)){
       directionX *= -1.04;
       directionY *= -1.04;

       score++;

    }

//draw ball
fill(255);
ellipse(ballX, ballY, diameter, diameter);

//draw paddle
fill(255);
rect(rectX, rectY, rectW, rectH);

//update paddle location
if (!started) {

  rectX = width/2;
  rectY = height - 100;
  started = true;

  }

//lives
fill(255);
textSize(24);
text("Lives: " + lI , 400, 25);

//draw score
fill(255);
textSize(24);
text("Score: " + score, 10, 25);

//movement
  if(keyIsDown(LEFT_ARROW)) {

  rectX += -10;

  }
  if(keyIsDown(RIGHT_ARROW)) {

    rectX += 10;

  }


}
