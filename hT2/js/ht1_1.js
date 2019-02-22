/*Functions*/
function getFloat(valueTemp){ //объявление функции по замене запятой на точку.
  return valueTemp.replace(/\,/g,'.');
  }
function rounding(roundValue) { //объявленеи функции по округлению чисел.
	return roundValue.toFixed(2);
}
/* Объявление переменных*/
var temperatureCel = prompt("Введите температуру °C");
var valueTempCel = + getFloat(temperatureCel);
var temperatureFar;

/* Solution*/
temperatureFar = (9/5)*valueTempCel + 32;

/*  Print */
alert(rounding(temperatureFar) + " °F");