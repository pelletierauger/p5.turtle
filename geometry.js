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

function repeat(n, f) {
    for (var i = 1; i <= n; i++) {
        f();
    }
}

function drawTurtle() {
    for (var i = 0; i < turtles.length; i++) {
        instructionBox = [];
        turtles[i].instructions();
        for (var j = 0; j < instructionBox.length; j++) {
            if (instructionBox[j].origin == null) {
                instructionBox[j].origin = turtles[i];
            }
        }
    }
    for (var k = 0; k < instructionBox.length; k++) {
        if (instructionBox[k].f == "forward") {
            var a = instructionBox[k].origin.heading;
            var r = instructionBox[k].s;
            var x = turtle.cos(a) * r;
            var y = turtle.sin(a) * r;
            instructionBox[k].origin.position.x += x;
            instructionBox[k].origin.position.y += y;
        } else if (instructionBox[k].f == "right") {
            var angle = instructionBox[k].s;
            instructionBox[k].origin.heading += angle;
        }
    }
    instructionBox = [];
}