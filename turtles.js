// var bob = new Turtle(90, new p5.Vector(0, 0));
// bob.name = "Bob";
// bob.instructions = function() {
//     var s = 10;
//     repeat(3, function() {
//         repeat(30, function() {
//             forward(s);
//             right(20);
//             s += 0.1;
//         });
//         repeat(60, function() {
//             forward(s);
//             left(20);
//             s += 0.1;
//         });
//     });
// };

// var irene = new Turtle(0, new p5.Vector(10, 0));
// irene.name = "Irene";
// irene.instructions = function() {
//     var s = 5;
//     repeat(4, function() {
//         repeat(60, function() {
//             forward(s);
//             right(20);
//             s += 0.1;
//         });
//         repeat(60, function() {
//             forward(s);
//             left(20);
//             s -= 0.1;
//         });
//         forward(90);
//         left(90);
//         forward(90);
//     });
//     forward(s);
// };

// var nina = new Turtle({
//     heading: 0,
//     position: new p5.Vector(0, 0),
//     instructions: function() {
//         var s = 5;
//         var times = 4;
//         repeat(times, function() {
//             repeat(60, function() {
//                 forward(s);
//                 right(20);
//                 s += 0.1;
//             });
//             repeat(60, function() {
//                 forward(s);
//                 left(20);
//                 s -= 0.1;
//             });
//             forward(60);
//             repeat(4, function() {
//                 forward(s);
//                 left(360 / times / 4);
//             });
//             forward(60);
//         });
//         forward(s);
//     }
// });

// var num = 10;
// for (var i = 0; i < num; i++) {
//     var a = 360 / num;
//     var bob = new Turtle({
//         heading: i * a,
//         position: new p5.Vector(0, 0),
//         instructions: function() {
//             var j = 1;
//             repeat(8, function() {
//                 repeat(10, function() {
//                     forward(5);
//                     right(4);
//                 });
//                 if (j < 0) {
//                     repeat(10, function() {
//                         forward(5);
//                         right(4);
//                     });
//                 } else {
//                     repeat(10, function() {
//                         forward(5);
//                         left(4);
//                     });
//                 }
//                 j *= -1;
//             });
//         }
//     });
// }

var zyg = new Turtle({
    heading: 0,
    position: new p5.Vector(0, 0),
    instructions: function() {
        repeat(5, function() {
            repeat(10, function() {
                forward(10);
            });
            repeat(10, function() {
                back(10);
            });
        });
    }
});