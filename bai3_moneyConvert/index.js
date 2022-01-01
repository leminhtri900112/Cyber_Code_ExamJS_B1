const factor = 23500;
var moneyInputEle = document.getElementById("moneyInput");
var moneyOutputEle = document.getElementById("moneyconvertOutput");
var factorEle = document.getElementById("factor");
factorEle.innerText = "Giá đô-la hiện nay: " + factor + " VND";

function convertMoney() {
  var money = moneyInputEle.value;
  console.log(money);
  var moneyConvert = money * factor;
  moneyOutputEle.value = moneyConvert;
}
