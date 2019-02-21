function exponantialInt(x,y) {
 var i=1;
 var p=x;
 while (y-i>=0) {
 	p=p*x;
 	i++;
 }
 return p;
}
function logariphmInt(x,y) {
	
  return Math.log(y) / Math.log(x);

}
function averageInt(x,y) {
return  (x+y)/2;
}
function randomBetween(x,y) {
  return Math.floor(Math.random() * (Math.max.apply(null, [x,y]) - Math.min.apply(null, [x,y]) + 1)) + Math.min.apply(null, [x,y]);
}
var firstValue = parseInt(prompt("Введите первое число функции"));
var secondValue = parseInt(prompt("Введите второе число функции"));

alert("Первое число в степени второго числа =" + exponantialInt(firstValue,secondValue));
alert("Логарифм первого числа по второму =" + logariphmInt(firstValue,secondValue));
alert("Среднее арифметическое 2-чисел =" + averageInt(firstValue,secondValue));
alert("случайное число в промежутке между введенными =" + randomBetween(firstValue,secondValue));