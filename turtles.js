var irene = new Turtle({
    sleeping: true,
    heading: 0,
    position: new p5.Vector(10, 0),
    instructions: function() {
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
    }
});

var nina = new Turtle({
    sleeping: true,
    heading: 0,
    position: new p5.Vector(0, 0),
    instructions: function() {
        var s = 5;
        var times = 4;
        repeat(times, function() {
            repeat(60, function() {
                forward(s);
                right(20);
                s += 0.1;
            });
            repeat(60, function() {
                forward(s);
                left(20);
                s -= 0.1;
            });
            forward(60);
            repeat(4, function() {
                forward(s);
                left(360 / times / 4);
            });
            forward(60);
        });
        forward(s);
    }
});

var num = 10;
for (var i = 0; i < num; i++) {
    var a = 360 / num;
    var bob = new Turtle({
        sleeping: true,
        heading: i * a,
        position: new p5.Vector(0, 0),
        instructions: function() {
            var j = 1;
            repeat(8, function() {
                repeat(10, function() {
                    forward(5);
                    right(4);
                });
                if (j < 0) {
                    repeat(10, function() {
                        forward(5);
                        right(4);
                    });
                } else {
                    repeat(10, function() {
                        forward(5);
                        left(4);
                    });
                }
                j *= -1;
            });
        }
    });
}

var zyg = new Turtle({
    sleeping: true,
    instructions: function() {
        repeat(6, function() {
            repeat(5, function() {
                forward(10);
                right(10);
                penUp();
                forward(10);
                right(10);
                penDown();
            });
            right(60);
            repeat(10, function() {
                back(10);
                left(10);
                penUp();
                back(10);
                left(10);
                penDown();
            });
            left(20);
        });
    }
});

var cedric = new Turtle({
    sleeping: true,
    instructions: function() {
        repeat(6, function() {
            repeat(18, function() {
                forward(3);
                right(10);
            });
            repeat(36 + 12, function() {
                forward(3);
                left(10);
            });
        });
    }
});