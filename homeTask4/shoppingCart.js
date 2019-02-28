//записываем вложенные массивы в 0-ой ячейке - наименование товара, в ячейке 1 - стоимость, в ячейке 2 - количество.
var itemsBasket = {
	product: [1, 300, 3,],

	product1: [1, 300, 3,],

	product2: [1, 300, 3,],

	product3: [1, 300, 3,],

	product4: [1, 300, 3,],

	product5: [1, 300, 3,],

	product6: [1, 300, 3,],

	product7: [1, 300, 3,],

	product8: [1, 300, 3,],

	product9: [1, 300, 3,],
};
//Функция по подсчету стоимости корзины
function arrFromObject(allData) {
	return allData = Object.values(allData);
}

function countBasketPrice(x) {
	var i = 0;
	var sum = 0;
	while(i <=(x.length - 1)) {
		var m = +x[i][1];
		var n = +x[i][2];
		var sum = sum + (m * n);
		i++;
	}
	return sum;
}
//вывод


alert(countBasketPrice(arrFromObject(itemsBasket)));