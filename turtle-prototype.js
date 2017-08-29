var turtles = [];
var instructionBox = [];

var Turtle = function(t) {
    this.heading = t.heading;
    this.position = t.position;
    this.penDown = true;
    t.instructions();
    this.states = instructionBox;
    instructionBox = [];
    turtles.push(this);
};