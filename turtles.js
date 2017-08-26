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