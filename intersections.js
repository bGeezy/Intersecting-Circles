var circle = $('#circles').get(0).getContext('2d');
//Define class Circle with Intersect and SetColor methods
function Circle (){
  this.x = Math.random()*150+80;
  this.y = Math.random()*150+80;
  this.r = Math.random()*50;
  this.c = "Blue";
  this.getX = function () { return this.x; }
  this.getY = function () { return this.y; }
  this.getR = function () { return this.r; }
  this.SetColor = function (color) {
    if (color === "Blue" || color === "Red") {
      this.c = color;
      drawCircle(this);
    }
  },
  this.Intersect = function (circle) {
    var dx = this.x - circle.getX();
    var dy = this.y - circle.getY();
    var distanceBetweenCenters = Math.sqrt(dx * dx + dy * dy);
    if (distanceBetweenCenters < this.r + circle.getR()) {
      return true
    } else{
      return false
    }
  }
}
//Function takes an arguement, per requirements
function ColorizeCircles (listOfCircles){
  var i, j;
  for (i=0; i<listOfCircles.length; i++){
    for (j=0; j<listOfCircles.length; j++){
      var first = listOfCircles[i];
      var second = listOfCircles[j];
      var intersection = first.Intersect(second);
      //If they are intersecting on the canvas and not the same circle
      if (intersection && i!=j) { first.SetColor('Red');}
    }
  }
}
window.ColorizeCircles = ColorizeCircles;
//Canvas function for rendering test cases on load and again after func is applied
function drawCircle(data) {
    circle.beginPath();
    circle.arc(data.x, data.y, data.r, 0, Math.PI * 2);
    circle.fillStyle = data.c;
    circle.fill();
}
//Create 5 or x randomly size and placed circles for test cases
//I let the list be global in this case for the fun of calling 
//func with a button and an arg
listOfCircles = [];
for (var i = 0;i<5;i++){
  var obj = new Circle();
  listOfCircles.push(obj);
  drawCircle(obj);
}
