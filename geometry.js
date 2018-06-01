function forward(size) {
    instructionBox.push({
        f: "forward",
        s: size
    });
}

function back(size) {
    instructionBox.push({
        f: "back",
        s: size
    });
}

function right(angle) {
    instructionBox.push({
        f: "right",
        a: angle
    });
}

function left(angle) {
    instructionBox.push({
        f: "left",
        a: angle
    });
}

function penUp() {
    instructionBox.push({
        f: "penUp"
    });
}

function penDown() {
    instructionBox.push({
        f: "penDown"
    });
}

function repeat(n, f) {
    for (var i = 1; i <= n; i++) {
        f(i - 1);
    }
}

function drawTurtle() {
    var t = sketch.drawCount;
    for (var i = 0; i < turtles.length; i++) {
        if (turtles[i].states[t]) {
            var penDown = (turtles[i].penDown) ? true : false;
            if (turtles[i].states[t].f == "forward" || turtles[i].states[t].f == "back") {
                if (penDown) {
                    graphics.beginShape();
                    graphics.vertex(turtles[i].position.x, turtles[i].position.y);
                }
            }
            if (turtles[i].states[t].f == "forward") {
                var a = turtles[i].heading;
                var r = turtles[i].states[t].s;
                var x = sketch.cos(a) * r;
                var y = sketch.sin(a) * r;
                turtles[i].position.x += x;
                turtles[i].position.y += y;
            } else if (turtles[i].states[t].f == "back") {
                var a = turtles[i].heading;
                var r = turtles[i].states[t].s;
                var x = sketch.cos(a) * r;
                var y = sketch.sin(a) * r;
                turtles[i].position.x -= x;
                turtles[i].position.y -= y;
            } else if (turtles[i].states[t].f == "right") {
                var angle = turtles[i].states[t].a;
                turtles[i].heading += angle;
            } else if (turtles[i].states[t].f == "left") {
                var angle = turtles[i].states[t].a;
                turtles[i].heading -= angle;
            } else if (turtles[i].states[t].f == "penUp") {
                turtles[i].penDown = false;
            } else if (turtles[i].states[t].f == "penDown") {
                turtles[i].penDown = true;
            }
            if (turtles[i].states[t].f == "forward" || turtles[i].states[t].f == "back") {
                if (penDown) {
                    graphics.vertex(turtles[i].position.x, turtles[i].position.y);
                    graphics.endShape(sketch.LINE);
                }
            }
        }
    }
}