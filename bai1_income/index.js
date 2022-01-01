const factor = 100000;
var inputIncomeEle = document.getElementById("daysInput");
var inputTotalEle = document.getElementById("incomeOutput");
var factorEle = document.getElementById("factor");
factorEle.innerText = "Số tiền lương trong 1 ngày: " + factor;

function incomeTotal() {
  var day = inputIncomeEle.value;
  var incomeTotal = day * factor;
  inputTotalEle.value = incomeTotal;
}
