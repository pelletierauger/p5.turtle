var turtles = [];

var Turtle = function(heading, position) {
    this.heading = heading;
    this.position = position;
    this.penDown = true;
    turtles.push(this);
};