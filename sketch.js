function setup() {
  createCanvas(1000,800);
  background("black");
}
function draw() {
 
 fill (".rgb(123,38,155)");
  stroke (".lightblue");

 if (mouseIsPressed)
 circle(mouseX, mouseY, 30,50);
}
