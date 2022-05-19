
noLoop();
looping = false;

fill(0);
background(200);
for (let i = 0; i < cedric.history.length - 0; i++) {
     ellipse(cedric.history[i].x, cedric.history[i].y, 2); 
  }


for (let j = 0; j < 100; j++) {
  nextShape = [];
  for (let i = 0; i < cedric.history.length; i++) {
    let s = cedric.history;
    let curPoint = s[i];
    let prevPoint = (i == 0) ? s[s.length - 1] : s[i - 1];
    let nextPoint = (i == s.length - 1) ? s[0] : s[i + 1];
    let midX = lerp(prevPoint.x, nextPoint.x, 0.5);
    let midY = lerp(prevPoint.y, nextPoint.y, 0.5);
    let newX = lerp(curPoint.x, midX, 1);
    let newY = lerp(curPoint.y, midY, 1);
    
    nextShape.push({x: newX, y: newY});
  }
  cedric.history = nextShape;
}
logJavaScriptConsole("Finished");
fill(0);
background(200);
beginShape();
for (let i = 0; i < cedric.history.length - 0; i++) {
     ellipse(cedric.history[i].x, cedric.history[i].y, 2); 
     // vertex(cedric.history[i].x, cedric.history[i].y); 
  }
endShape();

fill(0);
ellipse(190, 100, 10);

background(225);
