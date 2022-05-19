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
    // position: createVector(128, 35),
    // position: new p5.Vector(128, 35),
    // position: new p5.Vector(-152 - 2.8193765840340603 * 0.5, -200 - 3.531543077541045),
    // position: new p5.Vector(-152 - 2.8193765840340603 * 0.5, -200 - 2.5 - 5),
    position: new p5.Vector(-152 - 2.8193765840340603 * 0.5, -200 - 6),
            stepsPerFrame: 20,
    // stepsPerFrame: 2,
            instructions: function() {
            repeat(360 * 4, t => {
               forward(0.45);
               right(0.25);
            });
            n();
            right(90);
            forward(5);
            left(90);
            left(180);
            repeat(360 * 4, t => {
               forward(0.45);
               right(0.25);
            });
            n();
            function n() {
                repeat(300 * 4, t => {
                   forward(0.3); 
                });
                right(32 + 90);
                repeat(300 * 4, t => {
                   forward(0.4); 
                });
                left(32 + 90);
                repeat(200 * 4, t => {
                   forward(0.25); 
                });
            }
        }
        //     instructions: function() {
        //     repeat(12, function(t) {
        //         repeat(40, function(t) {
        //             forward(14 * 0.25);
        //             right(10 * 0.25);
        //         });
        //         right(145);
        //         repeat(40, function(t) {
        //             forward(14 * 0.25);
        //             left(10 * 0.25);
        //         });
        //         left(115);
        //     });
        // }
    // instructions: function() {
    //     repeat(6, function() {
    //         repeat(18, function() {
    //             forward(3);
    //             right(10);
    //         });
    //         repeat(36 + 12, function() {
    //             forward(3);
    //             left(10);
    //         });
    //     });
    // }
});

gSum = 0;

if (false) {

    cedric.reset({
        awake: true,
        position: createVector(200, 0),
        stepsPerFrame: 1,
        instructions: function() {
        repeat(6, function() {
            let s = 15;
            repeat(5, function() {
                forward(s);
                right(10);
                // penUp();
                forward(s);
                right(10);
                // penDown();
            });
            right(60);
            repeat(10, function() {
                back(s);
                left(10);
                // penUp();
                back(s);
                left(10);
                // penDown();
            });
            left(20);
        });
        }
    });


    cedric.reset({
        awake: true,
        position: createVector(100, -200),
        stepsPerFrame: 5,
        instructions: function() {
            repeat(4, function(t) {
                repeat(100, function() {
                    forward(4);
                    // left(1);
                });
                right(90);
            });
        }
    });


    cedric.reset({
        awake: true,
        position: createVector(128, 35),
        stepsPerFrame: 20,
        instructions: function() {
            repeat(12, function(t) {
                repeat(40, function(t) {
                    forward(14 * 0.25);
                    right(10 * 0.25);
                });
                right(145);
                repeat(40, function(t) {
                    forward(14 * 0.25);
                    left(10 * 0.25);
                });
                left(115);
            });
        }
    });

    cedric.reset({
        awake: true,
        position: createVector(100, -100),
        stepsPerFrame: 5,
        instructions: function() {
            repeat(9, function(t) {
                repeat(50, function() {
                    forward(4);
                    left(1);
                });
                left(135);
                repeat(25, function() {
                    forward(4);
                    left(1);
                });
                right(60);
                repeat(25, function() {
                    forward(4);
                    left(1);
                });
                right(135);
            });
        }
    });


        cedric.reset({
        awake: true,
        position: createVector(-100, -100),
        stepsPerFrame: 5,
        instructions: function() {
            repeat(300, function(t) {
                forward(2);
            });
            left(180 - 20);
            repeat(100, function(t) {
                forward(2);
            });
            right(145);
            repeat(50, function(t) {
                forward(2);
            });
             left(180 - 20);
            repeat(100, function(t) {
                forward(2);
            });
        }
    });


}


    cedric.reset({
        awake: true,
        position: createVector(128, 35),
        stepsPerFrame: 20,
        instructions: function() {
            repeat(12, function(t) {
                repeat(40, function(t) {
                    forward(14 * 0.25);
                    right(10 * 0.25);
                });
                right(145);
                repeat(40, function(t) {
                    forward(14 * 0.25);
                    left(10 * 0.25);
                });
                left(115);
            });
        }
    });

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

    cedric.reset({
        awake: true,
        heading:0,
        position: createVector(-152, -200),
        stepsPerFrame: 220,
        instructions: function() {
            repeat(360 * 4, t => {
               forward(0.45);
               right(0.25);
            });
            n();
            left(180);
            repeat(360 * 4, t => {
               forward(0.45);
               right(0.25);
            });
            n();
            function n() {
                repeat(300 * 4, t => {
                   forward(0.3); 
                });
                right(32 + 90);
                repeat(300 * 4, t => {
                   forward(0.4); 
                });
                left(32 + 90);
                repeat(200 * 4, t => {
                   forward(0.25); 
                });
            }
        }
    });