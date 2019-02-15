/*Functions*/
function convert() {
    var number = parseInt(document.getElementById("userAnswer").value);
    return number;
    // return +document.getElementById("userAnswer").value;
}

function getFloat(valueTemp) { //объявление функции по замене запятой на точку.
    return valueTemp.replace(/\,/g, '.');
}

function rounding(roundValue) { //объявленеи функции по округлению чисел.
    return roundValue.toFixed(2);
}
function write(text) {
        document.getElementById("userAnswer").innerHTML = text;
    }
/* Объявление переменных*/
var temperatureCel = convert();
var valueTempCel = +getFloat(temperatureCel);
var temperatureFar;
/* Solution*/
temperatureFar = (9 / 5) * valueTempCel + 32;
/*  Print */
write(rounding(temperatureFar));