var dataTable = [];

//Free To Play Arrays
var ftPCheck = [],
    ftP = [];
var ftPCheckT = [];

//paid array
var paid = [];

//size and name
var names = [];
var sz = [],
    sz2 = [],
    sz3 = [];

//check for genre arrays
var genreCheckN = [],
    genreCheckI = [],
    genreCheckA = [],
    genreCheckAd = [],
    genreCheckC = [],
    genreCheckS = [],
    genreCheckR = [],
    genreCheckSi = [],
    genreCheckE = [],
    genreCheckSp = [],
    genreCheckRa = [],
    genreCheckM = [];

var genreNf = [],
    genreIf = [],
    genreAf = [],
    genreAdf = [],
    genreCf = [],
    genreSf = [],
    genreRf = [],
    genreSif = [],
    genreEf = [],
    genreSpf = [],
    genreRaf = [],
    genreMf = [];

var genreNp = [],
    genreIp = [],
    genreAp = [],
    genreAdp = [],
    genreCp = [],
    genreSp = [],
    genreRp = [],
    genreSip = [],
    genreEp = [],
    genreSpp = [],
    genreRap = [],
    genreMp = [];

//images
var logo, img;

//change graph
var sceneSwitchF = false;
sceneSwitchP = false, sceneSwitchT = false;

function preload() {
    dataTable = loadTable("assets/games-featuresPTEST.csv");
    img = loadImage("data/steamLogo.png");

}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(RGB, 255, 255, 255);

    for (var i = 0; i < dataTable.getRowCount(); i++) {
        if (i <= 11) {
            sz[i] = new graphF(dataTable, i);
            sz2[i] = new graphP(dataTable, i);
            sz3[i] = new graphT(dataTable, i);
            names[i] = sz[i].names;

        }
    }

    for (var i = 0; i < dataTable.getRowCount(); i++) {
        ftPCheckT[i] = dataTable.getNum(i, 1);


        genreCheckN[i] = dataTable.getNum(i, 2);
        genreCheckI[i] = dataTable.getNum(i, 3);
        genreCheckA[i] = dataTable.getNum(i, 4);
        genreCheckAd[i] = dataTable.getNum(i, 5);
        genreCheckC[i] = dataTable.getNum(i, 6);
        genreCheckS[i] = dataTable.getNum(i, 7);
        genreCheckR[i] = dataTable.getNum(i, 8);
        genreCheckSi[i] = dataTable.getNum(i, 9);
        genreCheckE[i] = dataTable.getNum(i, 10);
        genreCheckSp[i] = dataTable.getNum(i, 11);
        genreCheckRa[i] = dataTable.getNum(i, 12);
        genreCheckM[i] = dataTable.getNum(i, 13);

    }

    ftPChecker();

    //checking numbers in console
    console.log("Nf: " + genreNf.length);
    console.log("If: " + genreIf.length);
    console.log("Af: " + genreAf.length);
    console.log("Adf: " + genreAdf.length);
    console.log("Cf: " + genreCf.length);
    console.log("Sf: " + genreSf.length);
    console.log("Rf: " + genreRf.length);
    console.log("Sif: " + genreSif.length);
    console.log("Ef: " + genreEf.length);
    console.log("Spf: " + genreSpf.length);
    console.log("Raf: " + genreRaf.length);
    console.log("Mf: " + genreMf.length);
    console.log("Np: " + genreNp.length);
    console.log("Ip: " + genreIp.length);
    console.log("Ap: " + genreAp.length);
    console.log("Adp: " + genreAdp.length);
    console.log("Cp: " + genreCp.length);
    console.log("Sp: " + genreSp.length);
    console.log("Rp: " + genreRp.length);
    console.log("Sip: " + genreSip.length);
    console.log("Ep: " + genreEp.length);
    console.log("Spp: " + genreSpp.length);
    console.log("Rap: " + genreRap.length);
    console.log("Mp: " + genreMp.length);

}

function draw() {
    background(0);
    //draw selector
    if (sceneSwitchF == false && sceneSwitchP == false && sceneSwitchT == false) {
        ftPDraw();

    }

    if (sceneSwitchF == true) {
        sceneChangeF();
        sceneSwitchP = false;

    }

    if (sceneSwitchP == true) {
        sceneChangeP();
        sceneSwitchF = false;

    }

    if (sceneSwitchT == true) {
        sceneChangeT();

    }

}

function ftPChecker() {
    for (var i = 0; i < dataTable.getRowCount(); i++) {
        if (ftPCheckT[i] == 2) {
            ftP.push('f');

        } else {
            paid.push('p');

        }

    }
    genreCheck();
}

function ftPDraw() {
    var x = width;

    image(img, x / 4, 300, 300, 300);
    fill(360);
    textSize(20);
    text("Press 'c' to view", x / 3.55, 650);
    text("FTP", x / 3.55, 350)
    image(img, x / 1.5, 300, 300, 300);
    text("Press 'v' to view", x / 1.43, 650);
    text("Paid", x / 1.43, 350)

}

function genreCheck() {
    for (var i = 0; i < dataTable.getRowCount(); i++) {
        if (genreCheckN[i] == 2 && ftPCheckT[i] == 2) {
            genreNf.push('y');
        } else if (genreCheckN[i] == 2 && ftPCheckT[i] == 1) {
            genreNp.push('y');
        } else if (genreCheckI[i] == 2 && ftPCheckT[i] == 2) {
            genreIf.push('y');
        } else if (genreCheckN[i] == 2 && ftPCheckT[i] == 1) {
            genreIp.push('y');
        } else if (genreCheckA[i] == 2 && ftPCheckT[i] == 2) {
            genreAf.push('y');
        } else if (genreCheckA[i] == 2 && ftPCheckT[i] == 1) {
            genreAp.push('y');
        } else if (genreCheckAd[i] == 2 && ftPCheckT[i] == 2) {
            genreAdf.push('y');
        } else if (genreCheckAd[i] == 2 && ftPCheckT[i] == 1) {
            genreAdp.push('y');
        } else if (genreCheckC[i] == 2 && ftPCheckT[i] == 2) {
            genreCf.push('y');
        } else if (genreCheckC[i] == 2 && ftPCheckT[i] == 1) {
            genreCp.push('y');
        } else if (genreCheckS[i] == 2 && ftPCheckT[i] == 2) {
            genreSf.push('y');
        } else if (genreCheckS[i] == 2 && ftPCheckT[i] == 1) {
            genreSp.push('y');
        } else if (genreCheckR[i] == 2 && ftPCheckT[i] == 2) {
            genreRf.push('y');
        } else if (genreCheckR[i] == 2 && ftPCheckT[i] == 1) {
            genreRp.push('y');
        } else if (genreCheckSi[i] == 2 && ftPCheckT[i] == 2) {
            genreSif.push('y');
        } else if (genreCheckSi[i] == 2 && ftPCheckT[i] == 1) {
            genreSip.push('y');
        } else if (genreCheckE[i] == 2 && ftPCheckT[i] == 2) {
            genreEf.push('y');
        } else if (genreCheckE[i] == 2 && ftPCheckT[i] == 1) {
            genreEp.push('y');
        } else if (genreCheckSp[i] == 2 && ftPCheckT[i] == 2) {
            genreSpf.push('y');
        } else if (genreCheckSp[i] == 2 && ftPCheckT[i] == 1) {
            genreSpp.push('y');
        } else if (genreCheckRa[i] == 2 && ftPCheckT[i] == 2) {
            genreRaf.push('y');
        } else if (genreCheckRa[i] == 2 && ftPCheckT[i] == 1) {
            genreRap.push('y');
        } else if (genreCheckM[i] == 2 && ftPCheckT[i] == 2) {
            genreMf.push('y');
        } else if (genreCheckM[i] == 2 && ftPCheckT[i] == 1) {
            genreMp.push('y');
        }
    }
}

function keyTyped() {
    if (key === 'c') {
        sceneSwitchF = true;

    }

    if (key === 'v') {
        sceneSwitchP = true;

    }

    if (key === 'z') {
        sceneSwitchF = false;
        sceneSwitchP = false;
        sceneSwitchT = false;

    }

    if (key === 't') {
        sceneSwitchT = true;


    }
}

function sceneChangeF() {
    for (var i = 0; i < dataTable.getRowCount(); i++) {
        if (i <= 11) {
            sz[i].graphF();
            sz[i].mouseHovered();

        }

    }

}

function sceneChangeP() {
    for (var i = 0; i < dataTable.getRowCount(); i++) {
        if (i <= 11) {
            sz2[i].graphP();
            sz2[i].mouseHovered2();

        }

    }

}

function sceneChangeT() {
    for (var i = 0; i < dataTable.getRowCount(); i++) {
        if (i <= 11) {
            sz3[i].graphT();

        }

    }

}

function graphF(dataTable, index) {
    this.x = 35;
    this.y = dataTable.getNum(index, 14);
    this.name = dataTable.getString(index, 15);
    console.log("this.y: " + this.y);

    this.mouseHovered = function() {
        if (dist(mouseX, mouseY, this.x, this.y) <= 20) {
            this.showInfo();
        }
    }

    this.showInfo = function() {
        stroke(255);
        rect(width - 300, height - 300, 100, 100);
        textSize(20);
        text(this.name, width - 300, height - 300);

        push();
        fill(0);
        if (this.y === 100) {
            text(genreNf.length, width - 255, height - 240);

        }
        if (this.y === 150) {
            text(genreIf.length, width - 255, height - 240);

        }
        if (this.y === 200) {
            text(genreAf.length, width - 255, height - 240);

        }
        if (this.y === 250) {
            text(genreAdf.length, width - 255, height - 240);

        }
        if (this.y === 300) {
            text(genreCf.length, width - 255, height - 240);

        }
        if (this.y === 350) {
            text(genreSf.length, width - 255, height - 240);

        }
        if (this.y === 400) {
            text(genreRf.length, width - 255, height - 240);

        }
        if (this.y === 450) {
            text(genreSif.length, width - 255, height - 240);

        }
        if (this.y === 500) {
            text(genreEf.length, width - 255, height - 240);

        }
        if (this.y === 550) {
            text(genreSpf.length, width - 255, height - 240);

        }
        if (this.y === 600) {
            text(genreRaf.length, width - 255, height - 240);

        }
        if (this.y === 650) {
            text(genreMf.length, width - 255, height - 240);

        }
        pop();

    }

    this.graphF = function() {
        push();
        fill(255);
        textSize(20);
        text("Press 'z' to go back\nPress 't' to overlay PAID", 35, height / 1.1);
        pop();

        noStroke();
        //steam colors
        //(199, 213, 224); (102, 192, 244);
        if (genreNf.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 100, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreNf.length / 2; j++) {
                fill(102, 192, 244);
                ellipse(this.x * (j + 1), 100, 30, 30);

            }

        }
        if (genreIf.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 150, 5, 20);
            pop();

        } else {
            for (j = 0; j < genreIf.legnth / 2; j++) {
                fill(102, 192, 244);
                ellipse(this.x * (j + 1), 150, 30, 30);

            }
        }
        if (genreAf.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 200, 5, 20);
            pop();

        } else {
            for (j = 0; j < genreAf.length / 2; j++) {
                fill(199, 213, 224);
                ellipse(this.x * (j + 1), 200, 30, 30);

            }
        }
        if (genreAdf.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 250, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreAdf.length / 2; j++) {
                fill(102, 192, 244);
                ellipse(this.x * (j + 1), 250, 30, 30);

            }
        }
        if (genreCf.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 300, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreCf.length / 2; j++) {
                fill(199, 213, 224);
                ellipse(this.x * (j + 1), 300, 30, 30);

            }
        }
        if (genreSf.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 350, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreSf.length / 2; j++) {
                fill(199, 213, 224);
                ellipse(this.x * (j + 1), 350, 30, 30);

            }
        }
        if (genreRf.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 400, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreRf.length / 2; j++) {
                fill(199, 213, 224);
                ellipse(this.x * (j + 1), 400, 30, 30);

            }
        }
        if (genreSif.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 450, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreSif.length / 2; j++) {
                fill(199, 213, 224);
                ellipse(this.x * (j + 1), 450, 30, 30);

            }
        }
        if (genreEf.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 500, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreEf.length / 2; j++) {
                fill(199, 213, 224);
                ellipse(this.x * (j + 1), 500, 30, 30);

            }
        }
        if (genreSpf.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 550, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreSpf.length / 2; j++) {
                fill(199, 213, 224);
                ellipse(this.x * (j + 1), 550, 30, 30);

            }
        }
        if (genreRaf.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 600, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreRaf.length / 2; j++) {
                fill(199, 213, 224);
                ellipse(this.x * (j + 1), 600, 30, 30);

            }
        }
        if (genreMf.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 650, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreMf.length / 2; j++) {
                fill(199, 213, 224);
                ellipse(this.x * (j + 1), 650, 30, 30);

            }

        }

    }

}

function graphP(dataTable, index) {
    this.x = 35;
    this.y = dataTable.getNum(index, 14);
    this.name = dataTable.getString(index, 15);

    this.mouseHovered2 = function() {
        if (dist(mouseX, mouseY, this.x, this.y) <= 20) {
            this.showInfo2();
        }
    }

    this.showInfo2 = function() {
        stroke(255);
        rect(width - 300, height - 300, 100, 100);
        textSize(20);
        text(this.name, width - 300, height - 300);

        push();
        fill(0);
        if (this.y == 100) {
            text(genreNp.length, width - 255, height - 240);

        }
        if (this.y == 150) {
            text(genreIp.length, width - 255, height - 240);

        }
        if (this.y == 200) {
            text(genreAp.length, width - 255, height - 240);

        }
        if (this.y == 250) {
            text(genreAdp.length, width - 255, height - 240);

        }
        if (this.y == 300) {
            text(genreCp.length, width - 255, height - 240);

        }
        if (this.y == 350) {
            text(genreSp.length, width - 255, height - 240);

        }
        if (this.y == 400) {
            text(genreRp.length, width - 255, height - 240);

        }
        if (this.y == 450) {
            text(genreSip.length, width - 255, height - 240);

        }
        if (this.y == 500) {
            text(genreEp.length, width - 255, height - 240);

        }
        if (this.y == 550) {
            text(genreSpp.length, width - 255, height - 240);

        }
        if (this.y == 600) {
            text(genreRap.length, width - 255, height - 240);

        }
        if (this.y == 650) {
            text(genreMp.length, width - 255, height - 240);

        }
        pop();

    }

    this.graphP = function() {
        push();
        fill(255);
        textSize(20);
        text("Press 'z' to go back", 35, height / 1.1);
        pop();

        noStroke();
        //steam colorsc
        //(199, 213, 224); (102, 192, 244);
        if (genreNp.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 100, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreNp.length / 2; j++) {
                fill(102, 192, 244);
                ellipse(this.x * (j + 1), 100, 30, 30);

            }
        }
        if (genreIp.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 150, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreIp.length / 2; j++) {
                fill(102, 192, 244);
                ellipse(this.x * (j + 1), 150, 30, 30);

            }
        }
        if (genreAp.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 200, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreAp.length / 2; j++) {
                fill(199, 213, 224);
                ellipse(this.x * (j + 1), 200, 30, 30);

            }
        }
        if (genreAp.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 250, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreAdp.length / 2; j++) {
                fill(199, 213, 224);
                ellipse(this.x * (j + 1), 250, 30, 30);

            }
        }
        if (genreCp.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 300, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreCp.length / 2; j++) {
                fill(199, 213, 224);
                ellipse(this.x * (j + 1), 300, 30, 30);

            }
        }
        if (genreSp.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 350, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreSp.length / 2; j++) {
                fill(102, 192, 244);
                ellipse(this.x * (j + 1), 350, 30, 30);

            }
        }
        if (genreRp.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 400, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreRp.length / 2; j++) {
                fill(102, 192, 244);
                ellipse(this.x * (j + 1), 400, 30, 30);

            }
        }
        if (genreSip.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 450, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreSip.length / 2; j++) {
                fill(199, 213, 224);
                ellipse(this.x * (j + 1), 450, 30, 30);

            }
        }
        if (genreEp.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 500, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreEp.length / 2; j++) {
                fill(102, 192, 244);
                ellipse(this.x * (j + 1), 500, 30, 30);


            }
        }
        if (genreSpp.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 550, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreSpp.length / 2; j++) {
                fill(199, 213, 224);
                ellipse(this.x * (j + 1), 550, 30, 30);

            }
        }
        if (genreRap.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 600, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreRap.length / 2; j++) {
                fill(102, 192, 244);
                ellipse(this.x * (j + 1), 600, 30, 30);

            }
        }
        if (genreMp.length / 2 < 1) {
            fill(199, 213, 224);
            push();
            stroke(360);
            rect(25, 650, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreMp.length / 2; j++) {
                fill(102, 192, 244);
                ellipse(this.x * (j + 1), 650, 30, 30);

            }

        }

    }

}

function graphT(dataTable, index) {
    this.x = 35;
    this.y = dataTable.getNum(index, 14);

    this.graphT = function() {
        noStroke();
        //steam colors
        //(23, 26, 33); (102, 192, 244); (27, 40, 56); (199, 213, 224);

        if (genreNp.length / 2 < 1) {
            fill(199, 213, 224, 65);
            push();
            stroke(360);
            rect(25, 100, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreNp.length / 2; j++) {
                fill(199, 213, 224, 65);
                ellipse(this.x * (j + 1), 100, 30, 30);

            }
        }
        if (genreIp.length / 2 < 1) {
            fill(199, 213, 224, 65);
            push();
            stroke(360);
            rect(25, 150, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreIp.length / 2; j++) {
                fill(199, 213, 224, 65);
                ellipse(this.x * (j + 1), 150, 30, 30);

            }
        }
        if (genreAp.length / 2 < 1) {
            fill(23, 26, 33, 65);
            push();
            stroke(360);
            rect(25, 200, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreAp.length / 2; j++) {
                fill(199, 213, 224, 65);
                ellipse(this.x * (j + 1), 200, 30, 30);

            }
        }
        if (genreAp.length / 2 < 1) {
            fill(102, 192, 244, 65);
            push();
            stroke(360);
            rect(25, 250, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreAdp.length / 2; j++) {
                fill(102, 192, 244, 65);
                ellipse(this.x * (j + 1), 250, 30, 30);

            }
        }
        if (genreCp.length / 2 < 1) {
            fill(23, 26, 33, 65);
            push();
            stroke(360);
            rect(25, 300, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreCp.length / 2; j++) {
                fill(102, 192, 244, 65);
                ellipse(this.x * (j + 1), 300, 30, 30);

            }
        }
        if (genreSp.length / 2 < 1) {
            fill(23, 26, 33, 65);
            push();
            stroke(360);
            rect(25, 350, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreSp.length / 2; j++) {
                fill(102, 192, 244, 65);
                ellipse(this.x * (j + 1), 350, 30, 30);

            }
        }
        if (genreRp.length / 2 < 1) {
            fill(23, 26, 33, 65);
            push();
            stroke(360);
            rect(25, 400, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreRp.length / 2; j++) {
                fill(199, 213, 224, 65);
                ellipse(this.x * (j + 1), 400, 30, 30);

            }
        }
        if (genreSip.length / 2 < 1) {
            fill(23, 26, 33, 65);
            push();
            stroke(360);
            rect(25, 450, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreSip.length / 2; j++) {
                fill(199, 213, 224, 65);
                ellipse(this.x * (j + 1), 450, 30, 30);

            }
        }
        if (genreEp.length / 2 < 1) {
            fill(23, 26, 33, 65);
            push();
            stroke(360);
            rect(25, 500, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreEp.length / 2; j++) {
                fill(102, 192, 244, 65);
                ellipse(this.x * (j + 1), 500, 30, 30);


            }
        }
        if (genreSpp.length / 2 < 1) {
            fill(23, 26, 33, 65);
            push();
            stroke(360);
            rect(25, 550, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreSpp.length / 2; j++) {
                fill(206, 11, 88, 65);
                ellipse(this.x * (j + 1), 550, 30, 30);

            }
        }
        if (genreRap.length / 2 < 1) {
            fill(23, 26, 33, 65);
            push();
            stroke(360);
            rect(25, 600, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreRap.length / 2; j++) {
                fill(199, 213, 224, 65);
                ellipse(this.x * (j + 1), 600, 30, 30);

            }
        }

        if (genreMp.length / 2 < 1) {
            fill(23, 26, 33, 65);
            push();
            stroke(360);
            rect(25, 650, 5, 20);
            pop();

        } else {
            for (var j = 0; j < genreMp.length / 2; j++) {
                fill(206, 11, 88, 65);
                ellipse(this.x * (j + 1), 650, 30, 30);

            }
        }

    }

}