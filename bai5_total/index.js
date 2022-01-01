var numberInputEle = document.getElementById("numberInput");
var numberOutputEle = document.getElementById("numberOutput");

function numberTotal() {
  var number = numberInputEle.value * 1;
  var firstNumber = Math.floor(number / 10);
  var secondNumber = number % 10;

  numberOutputEle.value = firstNumber + secondNumber;
  console.log(numberOutputEle.value);
}
