//записываем вложенные массивы в 0-ой ячейке - наименование товара, в ячейке 1 - стоимость, в ячейке 2 - количество.
var itemsBasket = [
{
	product: [ 300, 3,],
},
{
	product: [ 300, 3,],
},
{
	product: [ 300, 3,],
},
{
	product: [ 300, 3,],
},
{
	product: [ 300, 3,],
},
{
	product: [ 300, 3,],
},
{
	product: [ 300, 3,],
},
{
	product: [ 300, 3,],
},
{
	product: [ 300, 3,],
},
{
	product: [ 300, 3,],
},
];
//Функция по подсчету стоимости корзины
function arrFromObject(allData) {
	return allData = Array.from(allData);
}

function countBasketPrice(x) {
	var i = 0;
	var sum = 0;
	while(i <=(x.length - 1)) {
		var m = +x.product[i][0];
		var n = +x.product[i][1];
		var sum = sum + (m * n);
		i++;
	}
	return sum;
}
//вывод


alert(countBasketPrice(arrFromObject(itemsBasket)));