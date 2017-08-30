var turtles = [];
var instructionBox = [];

var Turtle = function(t) {
    this.heading = t.heading || 0;
    this.position = t.position || new p5.Vector(0, 0);
    this.penDown = true;
    this.awake = (t.awake != null) ? t.awake : true;
    if (this.awake) {
        t.instructions();
        this.states = instructionBox;
        instructionBox = [];
        turtles.push(this);
    }
};