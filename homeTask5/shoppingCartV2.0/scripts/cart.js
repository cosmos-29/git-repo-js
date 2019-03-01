//Создаем 2 объекта наполенный и пустой еееее
var itemsCart = [
	{
		product: 'Smart Phone',
		price: 70000,
		quentity: 3,

	},
	{
		product: 'Защитное стекло',
		price: 1000,
		quentity: 6,

	},
	{
		product: 'Защитный чехол',
		price: 1500,
		quentity: 3,

	},
	
	{
		product: 'Защитный чехол',
		price: 1500,
		quentity: 3,

	},
	
	{
		product: 'Защитный чехол',
		price: 1500,
		quentity: 3,

	},
	
	{
		product: 'Защитный чехол',
		price: 1500,
		quentity: 3,

	},
	
	{
		product: 'Защитный чехол',
		price: 1500,
		quentity: 3,

	},
	
	{
		product: 'Защитный чехол',
		price: 1500,
		quentity: 3,

	},
	
	{
		product: 'Защитный чехол',
		price: 1500,
		quentity: 3,

	},

];
var ArrItemCart =Object.values(itemsCart);

var headerOfCell = ["Наименование товара", "Стоимость", "Количество" ]


//Вывод на страничку.
	var shoppingCart = document.getElementById("catalog");
	for ( var i = 0; i <= itemsCart.length; i++) {
		var row = shoppingCart.appendChild(document.createElement("div"));
		var count = 0;
		for (var products in itemsCart[1]) {
			
			var cell = row.appendChild(document.createElement("span"))
			count++;
			if (i == 0) {
				cell.textContent = headerOfCell[count - 1];
			} else {
				cell.textContent = Object.values(itemsCart[i-1])[count-1];
			}
		}
	}


