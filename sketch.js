var looping = true;
var showTurtle = true;
var turtleSize = 25;
var turtleSpeed = 1;
var turtles = [];

var Turtle = function(heading, position) {
    this.heading = heading;
    this.position = position;
    this.penDown = true;
    turtles.push(this);
};

var bob = new Turtle(90, new p5.Vector(0, 0));
bob.name = "Bob";
bob.instructions = function() {
    var s = 10;
    repeat(3, function() {
        repeat(30, function() {
            forward(s);
            right(20);
            s += 0.1;
        });
        repeat(60, function() {
            forward(s);
            left(20);
            s += 0.1;
        });
    });
};

var irene = new Turtle(0, new p5.Vector(10, 0));
irene.name = "Irene";
irene.instructions = function() {
    var s = 10;
    repeat(30, function() {
        repeat(30, function() {
            forward(s);
            right(20);
            s += 0.1;
        });
        repeat(60, function() {
            forward(s);
            left(20);
            s += 0.1;
        });
    });
};

var turtle = new p5(function(p) {
    p.setup = function() {
        p.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        p.frameRate(30);
        p.angleMode(p.DEGREES);
        p.noStroke();
        p.fill(0, 200, 0);
        p.canvas.addClass('turtle');
        if (!looping) { p.noLoop(); }
    };
    p.draw = function() {
        p.clear();
        p.translate(p.width / 2, p.height / 2);
        for (var i = 0; i < turtles.length; i++) {
            p.push();
            p.translate(turtles[i].position.x, turtles[i].position.y);
            p.rotate(turtles[i].heading + 90);
            p.beginShape();
            p.vertex(0, -turtleSize);
            p.vertex(turtleSize / 3, 0);
            p.vertex(-turtleSize / 3, 0);
            p.endShape(p.CLOSE);
            p.pop();
        }
    };
    p.keyPressed = function() {
        if (p.keyCode === 32) {
            if (looping) {
                p.noLoop();
                sketch.noLoop();
                looping = false;
            } else {
                p.loop();
                sketch.loop();
                looping = true;
            }
        }
        if (p.key == 't' || p.key == 'T') {
            if (showTurtle) {
                showTurtle = false;
                turtle.canvas.style("display", "none");
                turtle.noLoop();
            } else {
                showTurtle = true;
                turtle.canvas.style("display", "block");
                turtle.loop();
            }
        }
    }
});

var sketch = new p5(function(p) {
    p.setup = function() {
        p.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        p.frameRate(30);
        p.background(0);
        // p.noStroke();
        p.stroke(255);
        p.fill(255);
        p.canvas.addClass('sketch');
        p.angleMode(p.DEGREES);
        if (!looping) { p.noLoop(); }
        fillInstructionBox();
    }
    p.draw = function() {
        p.translate(p.width / 2, p.height / 2);
        // p.fill(125, 0, 0);
        // p.ellipse(0, 0, turtleSize * 2);
        drawTurtle();
    };
});