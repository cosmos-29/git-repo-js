
function exponantialInt(x,y) {
 var i=1;
 var p=x;
 while (y-i>=0) {
 	p=p*x;
 	i++;
 }
 return p;
}

var firstValue = parseInt(prompt("Введите основание степенной функции"));
var secondValue = parseInt(prompt("Введите степень"));

alert("Ответ:" + exponantialInt(firstValue,secondValue));