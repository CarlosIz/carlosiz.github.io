//data exercise

var gameTable = [];
var names = [];
var hueVal = [];
var activeP = [];
var category = [];
var time = [];
var sz = [];
var legend;
var legA = true;

function preload() {
  gameTable = loadTable("assets/CI_Table.csv");

}

function setup() {
  createCanvas(1000, 600);
  colorMode(HSB, 360, 100, 100);
  noStroke();

  for (i = 0; i < gameTable.getRowCount(); i++) {
    names[i] = gameTable.getString(i, 0);
    hueVal[i] = gameTable.getNum(i, 1);
    activeP[i] = gameTable.getNum(i, 2);
    category[i] = gameTable.getString(i, 3);
    time[i] = gameTable.getString(i, 4);
    sz[i] = map(activeP[i]/3, 1, 10, 10, 80);

  }
}

function draw() {

  background(0, 0, 36);

    for (var i = 0; i < gameTable.getRowCount(); i++) {


    //bar size and color
    fill(hueVal[i], 80, 80);
    push();
    translate(-150, 0);
    rect(197.5 * (i+1), height, 100, -sz[i]);
    pop();

    //info in bar
    fill(0);
    textSize(15);
    push();
    translate(-110, 0);
    push();
    translate(0, height);
    text(names[i], 190 * (i+1), -sz[i] + 30);
    text(activeP[i], 190 * (i+1), -sz[i] + 70);
    text(category[i], 190 * (i+1), -sz[i ]+ 90);
    text(time[i], 190 * (i+1), -sz[i] + 110);
    pop();
    pop();
    }

if(legA == true) {
  fill(0);
  textSize(20);
  text("Press SHIFT for legend", 760, 50);
}
if(keyIsDown(SHIFT)) {
  //legend
  fill(0);
  textSize(24);
  text("1. Game Name\n2. Active Players\n3. Category\n4. Run Time", 800, 50);
  legA = false;
    }
    else {
        legA = true;
  }
}
