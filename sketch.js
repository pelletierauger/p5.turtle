let keysActive = true;
let looping = true;
let socket, cnvs, ctx, canvasDOM;
let fileName = "./frames-2/cosine-demo-c";
let maxFrames = 2770;
var showTurtle = true;
var turtleSize = 30;
var turtleSpeed = 1;
let graphics;
let drawCount = 0;
let canvas;

function setup() {
    socket = io.connect('http://localhost:8080');
    canvas = createCanvas(windowWidth, windowHeight);
    ctx = canvas.drawingContext;
    canvasDOM = document.getElementById('defaultCanvas0');
    graphics = createGraphics(width * 2, height * 2);
    if (exporting) {
        frameRate(2);
    } else {
        frameRate(30);
    }
    // background(200);
    strokeWeight(2);
    noStroke();
    fill(0, 200, 0);
    graphics.background(200);
    graphics.strokeWeight(1.25);
    graphics.stroke(0);
    graphics.fill(0);
    canvas.addClass('sketch');
    angleMode(DEGREES);
    textFont("'Inconsolata', 'Baskerville', Georgia, serif");
    textSize(35);
    if (!looping) { noLoop(); }
    // Hide the SuperCollider Editor because I will not need it for this project.
    window.setTimeout(function() {
        if (!keysActive) {
            cmArea.style.width = "1200px";
            jsCmArea.style.width = "1200px";
            jsConsoleArea.setAttribute("style", "display:block;");
            scdArea.style.display = "none";
            scdConsoleArea.setAttribute("style", "display:none;");
            jsCmArea.style.height = "685px";
            jsArea.style.display = "block";
            displayMode = "js";
            autoRedraw = true;
            // displayTimeline();
            xSheetInit = true;
        }
    }, 1000);
}

function draw() {
    for (let i = 0; i < 2; i++) {
        graphics.push();
        graphics.translate(width / 2, height / 2);
        drawTurtle();
        graphics.pop();
        drawCount++;
    }

    image(graphics, 0, 0, width, height);
    // fill(0);
    // text("freq = " + f, -1, height - 7);
    fill(0, 200, 0);



    if (showTurtle) {
        translate(width / 2, height / 2);
        // stroke(0, 50);
        // strokeWeight(1);
        // line(freq[currentFreq].x, -height, freq[currentFreq].x, height);
        // line(-width, freq[currentFreq].y, width, freq[currentFreq].y);
        noStroke();
        for (var i = 0; i < turtles.length; i++) {
            push();
            translate(turtles[i].position.x, turtles[i].position.y);
            rotate(turtles[i].heading + 90);
            beginShape();
            vertex(0, -turtleSize);
            vertex(turtleSize / 3, 0);
            vertex(-turtleSize / 3, 0);
            endShape(CLOSE);
            fill(0);
            ellipse(0, 0, 5);
            fill(0, 200, 0);
            pop();
        }

    }
    if (exporting && frameCount < maxFrames) {
        frameExport();
    }
    // if (drawCount > freq[currentFreq].d) {
    //     graphics.background(255);
    //     currentFreq++;
    //     f = freq[currentFreq].f;
    //     instructionBox = [];
    //     cosineOscillator.heading = 0;
    //     cosineOscillator.position = new p5.Vector(freq[currentFreq].x, freq[currentFreq].y);
    //     let a = 0;
    //     for (let i = 0; i < 1200; i++) {
    //         a = Math.cos(i * f) * 20;
    //         left(a);
    //         forward(10);
    //     }
    //     cosineOscillator.states = instructionBox;
    //     drawCount = 0;
    // }

}

function keyPressed() {
    if (keysActive) {
        if (keyCode === 32) {
            if (looping) {
                noLoop();
                looping = false;
            } else {
                loop();
                looping = true;
            }
        }
        if (key == 't' || key == 'T') {
            if (showTurtle) {
                showTurtle = false;
            } else {
                showTurtle = true;
            }
        }
        if (key == 'r' || key == 'R') {
            window.location.reload();
        }
    }
}