//Создаем 2 объекта наполенный и пустой
var itemsCart = [
	{
		name: 'Smart Phone',
		price: 70000,
		quantity: 3,

	},
	{
		name: 'Защитное стекло',
		price: 1000,
		quantity: 6,

	},
	{
		name: 'Защитный чехол',
		price: 1500,
		quantity: 3,

	},
];

var emptyCart = [ {
	name: '',
	price: 0,
	quantity: 0,
	},
];
//Функция подсчета
function coinShopCart(anyItem) {
	var sum = 0;
	var msdg = '';
	for (var i = 0; i < anyItem.length; i++) {
		sum = sum + anyItem[i].price * anyItem[i].quantity;
	}
	if (sum > 0) {
	return sum;
} else {
	return msdg = ' 0';
}
}
function countCart(anyItem) {
	var stringCart = "";
	for (var i = 0; i < anyItem.length; i++) {
		stringCart = stringCart + "Вы выбрали " + anyItem[i].quantity + " шт " + anyItem[i].name + "<br>";
	}
	if (!isNaN(coinShopCart(anyItem))) {
		return stringCart;
		} else {
				return stringCart = ' Ваша Корзина пуста';
		}

}
//Вывод на страничку.
	var shoppingCart = document.getElementById("shoppingCart");
	var objectPrint = shoppingCart.appendChild(document.createElement("div"));
	objectPrint.innerHTML =  countCart(itemsCart) + "<br>" + "Общая стоимость выбранных продуктов: " + coinShopCart(itemsCart) + 'р.';
	var objectEmptyPrint = shoppingCart.appendChild(document.createElement("div"));
	objectEmptyPrint.innerHTML = "<br>" + countCart(emptyCart) + "<br>" + "Общая стоимость выбранных продуктов: " + coinShopCart(emptyCart) + 'р.';


