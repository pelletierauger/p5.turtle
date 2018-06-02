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
        x: -200,
        y: 170,
        d: 300
    },
    {
        f: 0.18,
        x: -200,
        y: 170,
        d: 300
    },
    {
        f: 0.15,
        x: 0,
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

var cosineOscillator = new Turtle({
    awake: true,
    heading: 0,
    position: new p5.Vector(freq[currentFreq].x, freq[currentFreq].y),
    instructions: function() {
        let a = 0;
        for (let i = 0; i < 600; i++) {
            a = Math.cos(i * f) * 20;
            left(a);
            forward(10);
            // left(10);
        }
    }
});