var objectFromDigit = {
	digits: "Единицы",
	tens: "Десятки",
	hundreds: "сотни",
	addDigitToObject: function(inputAllData) {
			var i =  inputAllData.length - 1;
			if (i == 0) {
				this.digits = inputAllData[0];
				this.tens = '';
				this.hundreds = '';
				} else if (i = 1) {
				this.hundreds = '';
				this.tens = inputAllData[0];
				this.digits = inputAllData[1];

				}
				 else {
				this.hundreds = inputAllData[0];
				this.tens = inputAllData[1];
				this.digits = inputAllData[2];
				}
			} 

		}
	


function addDigit() {
	var p = "";
	p = p + prompt("Введите число от 1 до 1000");
	return p;
}

function checkDigit() {
	var t = addDigit()
	while (t.length > 3) {
		t = addDigit();
	}
	return t;
}

function inputToArray(anyData) {
	var arr = []
	for( var j = 0; j < anyData.length; j++) {
		arr.push(anyData[j]);		
	}
	return arr;
}

var inputData = checkDigit();

objectFromDigit.addDigitToObject((inputToArray(inputData)));




