var minDigit = +0;
var maxDigit = +100;


// Функция по поиску простых чисел.
function searchSimpleDigit(x,y) {
	var arr = [];
	while (x <= y) {		
			var score = 0;
			var j = 1;
			while(j <= x) {
				if (x % j == 0) {
				score++;
		    }      
		 	j++;
		}
			if (score == 2) {
				arr.push(x);
			}		
		
		x++;
	}
	return arr;
	
}

// Вывод результатов от 1 до 100.
alert("Простые числа от 0 до" + maxDigit + " :" + searchSimpleDigit(minDigit,maxDigit));
