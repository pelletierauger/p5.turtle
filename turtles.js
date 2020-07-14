let freq = [{
        f: 1,
        x: -350,
        y: 170,
        d: 175
    },
    {
        f: 0.5,
        x: -350,
        y: 170,
        d: 175
    },
    {
        f: 0.3,
        x: -350,
        y: 170,
        d: 225
    },
    {
        f: 0.2,
        x: -350,
        y: 170,
        d: 300
    },
    {
        f: 0.18,
        x: -350,
        y: 170,
        d: 300
    },
    {
        f: 0.15,
        x: -350,
        y: 170,
        d: 400
    },
    // {
    //     f: 0.14,
    //     x: 200,
    //     y: 100,
    //     d: 350
    // },
    {
        f: 0.12,
        x: 400,
        y: 170,
        d: 450
    },
    {
        f: 0.05,
        x: -200,
        y: 170,
        d: 450
    },
    {
        f: 0.025,
        x: -200,
        y: 170,
        d: 450
    },
    {
        f: 0.0125,
        x: 100,
        y: 200,
        d: 600
    },
    {
        f: 0.0125 * 0.5,
        x: 0,
        y: -225,
        d: 2000
    }
];
let currentFreq = 0;
let f = freq[currentFreq].f;

// var cosineOscillator = new Turtle({
//     awake: true,
//     heading: 0,
//     position: new p5.Vector(freq[currentFreq].x, freq[currentFreq].y),
//     instructions: function() {
//         let a = 0;
//         for (let i = 0; i < 600; i++) {
//             a = Math.cos(i * f) * 20;
//             left(a);
//             forward(10);
//             // left(10);
//         }
//     }
// });

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
    awake: true,
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

gSum = 0;

if (false) {

    cedric.reset({
        awake: true,
        position: createVector(200, -200),
        stepsPerFrame: 180,
        instructions: function() {
            repeat(360, function(t) {
                // repeat(18, function() {
                let f = 2;
                let r = 1;
                if (t == 90) {
                    r += -90;
                } else if (t == 179) {
                    r += -90;
                }
                if (t >= 90 && t < 180) {
                    r += 180 / 90; 
                    gSum += 180 / 90;
                    f += 4;
                }
                forward(f);
                right(r);
                // });
                // repeat(36 + 12, function() {
                //     forward(3);
                //     left(10);
                // });
            });
        }
    });

}

var jolene = new Turtle({
    awake: false,
    instructions: function() {
        repeat(12, function() {
            square(150);
            right(30);
        });

        function square(size) {
            repeat(4, function() {
                repeat(4, function() {
                    forward(size / 4);
                });
                right(90);
            });
        }
    }
});