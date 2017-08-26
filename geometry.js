var instructionBox;

function forward(size) {
    instructionBox.push({
        f: "forward",
        s: size
    });
}

function right(angle) {
    instructionBox.push({
        f: "right",
        s: angle
    });
}

function left(angle) {
    instructionBox.push({
        f: "left",
        s: angle
    });
}

function repeat(n, f) {
    for (var i = 1; i <= n; i++) {
        f();
    }
}

function fillInstructionBox() {
    instructionBox = [];
    for (var i = 0; i < turtles.length; i++) {
        turtles[i].instructions();
        for (var j = 0; j < instructionBox.length; j++) {
            if (instructionBox[j].origin == null) {
                instructionBox[j].origin = turtles[i];
            }
        }
    }
}

function drawTurtle() {
    var t = sketch.frameCount;
    if (instructionBox[t]) {
        sketch.beginShape();
        sketch.vertex(instructionBox[t].origin.position.x, instructionBox[t].origin.position.y);
        if (instructionBox[t].f == "forward") {
            var a = instructionBox[t].origin.heading;
            var r = instructionBox[t].s;
            var x = turtle.cos(a) * r;
            var y = turtle.sin(a) * r;
            instructionBox[t].origin.position.x += x;
            instructionBox[t].origin.position.y += y;
        } else if (instructionBox[t].f == "right") {
            var angle = instructionBox[t].s;
            instructionBox[t].origin.heading += angle;
        } else if (instructionBox[t].f == "left") {
            var angle = instructionBox[t].s;
            instructionBox[t].origin.heading -= angle;
        }
        sketch.vertex(instructionBox[t].origin.position.x, instructionBox[t].origin.position.y);
        sketch.endShape(sketch.LINE);
        // sketch.ellipse()
    }
}