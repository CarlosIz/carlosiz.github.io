//CSMA 101 
//Introduction to Programming
//Semester 1
//Professor Theohar
//Carlos Izaguirre
//carlos.izaguirre@woodbury.edu

var startX;
var startY;
var directionX;
var directionY;

var color;

function setup() {
    
    hue = 0;
    
    createCanvas(500, 500);
    background(150);
    
    //starting point
    startX = width/2;
    startY = height/2;
    
    //movement
    directionX = (2);
    directionY = (4);
    
    //rect
    rectH = 100;
    rectW = 20;
    rectX = 10;
    
}

function draw() {
    
    colorMode(HSL, 360);
    
    
    
    //starting point + movement
    startX += directionX;
    startY += directionY;
    
    //bounce back X
    if(startX > (width) || startX < (0)){
       
        directionX = -directionX   
        
       }

    //bounce back Y
    if(startY > (height) || startY < (0)){
       
        directionY = -directionY
        
       }
    
    //max speed
    if(directionX >= 200 || directionY >= 200) {
        
        directionX = 3
        directionY = 4
    }
    
    //color change on startX position
    color = map(startX, 0, width, 0, 255);
    
    fill(color, 200, 200);
    
//    bumper tracking
//    y = map(mouseY, 0, height, 0, height - rectH, true);
//   
//    var bumper = rect(rectX, y, rectW, rectH);
    
    //Objects 1
    triangle(startX/2, startY/2, startX, startY, startX/2, startY/4, startX/4, startY/2);
    ellipse(startX, startY, (100), (86));
    
    //Objects 2
    triangle(startY/2, startX/2, startY, startX, startY/2, startX/4, startY/4, startX/2);
    ellipse(startY, startX, (100), (86));
}