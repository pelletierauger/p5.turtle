var looping = true;
var showTurtle = true;
var turtleSize = 25;
var turtleSpeed = 1;
let graphics;
let drawCount = 0;
let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    graphics = createGraphics(width * 2, height * 2);
    frameRate(30);
    background(255);
    strokeWeight(2);
    noStroke();
    fill(0, 200, 0);
    graphics.background(255);
    graphics.strokeWeight(2);
    graphics.stroke(0);
    graphics.fill(0);
    canvas.addClass('sketch');
    angleMode(DEGREES);
    // textFont("'Inconsolata', 'Baskerville', Georgia, serif");
    // textSize(25);
    if (!looping) { noLoop(); }
}

function draw() {
    if (looping) {
        graphics.push();
        graphics.translate(width / 2, height / 2);
        drawTurtle();
        graphics.pop();
        image(graphics, 0, 0, width, height);
        // fill(0);
        // text("f = " + f, width / 2, height * 0.75);
        // fill(0, 200, 0);
        if (showTurtle) {
            translate(width / 2, height / 2);
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
        drawCount++;
    }
}

function keyPressed() {
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