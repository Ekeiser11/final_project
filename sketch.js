var r, g, b;
var bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  frameRate(25)
//Picks colors randomly
  r = random (255);
  g = random (255);
  b = random (255);
  
  for (var i = 0; i < 40; i++) {
    var x = random(width);
    var y = random(height);
    bubbles.push(new Bubble(x, y));
  }
}

function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
  }
}

function draw() {
  background(26, 26, 26,5);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}
//Bubbles
function Bubble(x, y) {
  this.x = x+1;
  this.y = y-1;
  this.col = color(255, 100);

  this.display = function() {
    stroke(random(0,255));
    noFill(random(0,255))
    fill(this.col);
    ellipse(this.x, this.y, random(5,7), random (5,7));
  }

  this.move = function() {
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5, 5);

  }
  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 1000) {
      this.col = color(random(255), random(255), random(255), 0.2 * 255 );
    }
  }

}