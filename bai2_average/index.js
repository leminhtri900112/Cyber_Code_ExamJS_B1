var number1Ele = document.getElementById("number1Input");
var number2Ele = document.getElementById("number2Input");
var number3Ele = document.getElementById("number3Input");
var number4Ele = document.getElementById("number4Input");
var number5Ele = document.getElementById("number5Input");
var averageOutputEle = document.getElementById("averageOutput");

function averageTotal() {
  var number1 = number1Ele.value * 1;
  var number2 = number2Ele.value * 1;
  var number3 = number3Ele.value * 1;
  var number4 = number4Ele.value * 1;
  var number5 = number5Ele.value * 1;
  //   console.log(number1);
  var averageTotalNumber =
    (number1 + number2 + number3 + number4 + number5) / 5;
  console.log(averageTotalNumber);
  averageOutputEle.value = averageTotalNumber;
}
