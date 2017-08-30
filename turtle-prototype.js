var turtles = [];
var instructionBox = [];

var Turtle = function(t) {
    this.heading = t.heading || 0;
    this.position = t.position || new p5.Vector(0, 0);
    this.penDown = true;
    this.sleeping = t.sleeping || false;
    if (!this.sleeping) {
        t.instructions();
        this.states = instructionBox;
        instructionBox = [];
        turtles.push(this);
    }
};