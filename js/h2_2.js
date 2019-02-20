
function alertValue(t,m) {
	while (t<=m) {
		alert(t);
		t++;
	}
}
function printValue(a, b) {
	var i=0;
	switch (a<b) {
		case true:
		alertValue(a,b);				
	    case false:
	    break;
	}
}
function valueInt() {
	var x = + prompt("Введите число от 0 до 15");
	if (x >= 0 && x <= 15) {
		return x;
	} else {
		x= + prompt("Вы ввели ошибочное значение. Введите число от 0 до 15");
	}
}
var firstValue = valueInt();
var secondValue = +15;
printValue(firstValue,secondValue);