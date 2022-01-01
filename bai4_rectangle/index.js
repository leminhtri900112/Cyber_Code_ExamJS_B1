var lengthInputEle = document.getElementById("lengthInput");
var widthInputEle = document.getElementById("widthInput");
var acreageOutputEle = document.getElementById("acreageOutput");
var perimeterOutputEle = document.getElementById("perimeterOutput");

function rectangle() {
  var length = lengthInputEle.value * 1;
  var width = widthInputEle.value * 1;
  var acreage = length * width;
  var perimeter = (length + width) * 2;
  acreageOutputEle.value = acreage;
  perimeterOutputEle.value = perimeter;
}
