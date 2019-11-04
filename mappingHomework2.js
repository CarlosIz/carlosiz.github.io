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

var movement;

function setup() {
    
    hue = 0;
    
    createCanvas(500, 500);
    
    //starting point
    startX = width/2;
    startY = height/2;
    
    //movement
    directionX = (8);
    directionY = (5);
    
    //rect
    rectH = 100;
    rectW = 20;
    rectX = 10;
    
}

function draw() {
    
    colorMode(HSL, 360);
    
    background(150);

    
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
    if(directionX >= 30 || directionY >= 30) {
        
        directionX = 1
        directionY = 1
    }
    
    
    //movement change on startX position
    movement = map(startX, 0, width/2, 0, 245);
    
    square(random(movement), startY, 20, 20);
    
    
    //Objects 1
    ellipse(startX, startY, (30), (30));
    
}