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

function alertInt(x,y,z) {
	switch (z) {
		case "1":
		return exponantialInt(x,y);
		break;
		case "2":
		return logariphmInt(x,y);
		break;
		case "3":
		return averageInt(x,y);
		break;
		case "4":
		return randomBetween(x,y);
		break;
	}
}

var numberOfFunction = prompt("Какой функцией Вы хотите вопользоваться. 1 - Возведение в степень, 2 - логрифм, 3 - среднее арифметчиеское, 4 - случайное число в пределах введеных значений. Варианты ответов 1,2,3,4.");
var firstValue = parseInt(prompt("Введите первое число функции"));
var secondValue = parseInt(prompt("Введите второе число функции"));

alert("Значение функции " + numberOfFunction+": "+ alertInt(firstValue,secondValue,numberOfFunction));

