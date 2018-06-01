var irene = new Turtle({
    awake: false,
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
    awake: false,
    heading: 0,
    position: new p5.Vector(-500, 250),
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
        awake: false,
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
    awake: false,
    position: new p5.Vector(475, -150),
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
    awake: false,
    position: new p5.Vector(500, 200),
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

var jolene = new Turtle({
    awake: false,
    position: new p5.Vector(-450, -200),
    instructions: function() {
        repeat(12, function() {
            square(100);
            right(30);
        });

        function square(size) {
            repeat(4, function() {
                repeat(8, function() {
                    forward(size / 8);
                });
                right(90);
            });
        }
    }
});

var witold = new Turtle({
    awake: false,
    position: new p5.Vector(100, -150),
    instructions: function() {
        let n = 20;
        // left(45 /  2);
        let m = 7;
        repeat(4, function() {
            repeat(2, function() {
                let stair1 = 100;
                repeat(4, function() {
                    forward(stair1);
                    right(90);
                    forward(m);
                    right(90);
                    forward(stair1);
                    left(90);
                    forward(m);
                    left(90);
                    stair1 -= 100 / 4;
                });
                forward(110);
                left(90);
                let len = 126;
                repeat(8, function() {
                    forward(len);
                    right(90);
                    forward(m);
                    right(90);
                    forward(len);
                    left(90);
                    forward(m);
                    left(90);
                    len -= 100 / 8;
                });
                right(180);
                forward(m);
                right(90);
                forward(230);
                right(90);
                forward(100);
                // left(90);
                // left(90);
                // right(45 / 4);
            });
            // left(90);
            forward(m);
            // left(90);
            // forward(m);
        });


    }
});

var curve = new Turtle({
    awake: true,
    heading: 0,
    position: new p5.Vector(0, 0),
    instructions: function() {
        let a = 0;
        for (let i = 0; i < 300; i++) {
            a = Math.cos(i * 0.025) * 20;
            left(a);
            forward(10);
            // left(10);
        }

        // repeat(3, function() {
        //     repeat(30, function() {
        //         forward(s);
        //         right(20);
        //         s += 0.1;
        //     });
        //     repeat(60, function() {
        //         forward(s);
        //         left(20);
        //         s += 0.1;
        //     });
        // });
    }
});