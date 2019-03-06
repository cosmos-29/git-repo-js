
// Создаем корзину для товаров выбранных, а также корзину наполненную товарами. 
var $container = document.getElementById("container2");
var userCar = []
var product = [
	        {
	            tag: 'ITEM N1'
	            , naime: 'first'
	            , price1: 29
	            , price2: 99
	            , $email: '15 Email Accounts'
	            , $volume: '100GB Space'
	            , $domain: '1 Domain Name'
	            ,  $count: 1	            
	            ,  link: 'product1'
	        }, {
	            tag: 'ITEM N2'
	            , naime: 'standard'
	            , price1: 49
	            , price2: 99
	            , $email: '15 Email Accounts'
	            , $volume: '100GB Space'
	            , $domain: '1 Domain Name'
	            , $count: 1
	            ,  link: 'product2'	            
	            
	        }, {
	            tag: 'ITEM N3'
	            , naime: 'ultimate'
	            , price1: 99
	            , price2: 99
	            , $email: '15 Email Accounts'
	            , $volume: '100GB Space'
	            , $domain: '1 Domain Name'
	            , $count: 1	            
	            ,  link: 'product3'
	        }, {
	            tag: 'ITEM N4'
	            , naime: 'nextOne'
	            , price1: 29
	            , price2: 99
	            , $email: '15 Email Accounts'
	            , $volume: '100GB Space'
	            , $domain: '1 Domain Name'
	            , $count: 1
	            ,  link: 'product1'	            
	            
	        }, {
	              tag: 'ITEM N5'
	            , naime: 'nextNextOne'
	            , price1: 49
	            , price2: 99
	            , $email: '15 Email Accounts'
	            , $volume: '100GB Space'
	            , $domain: '1 Domain Name'
	            , $count: 1
	            ,  link: 'product2'	            
	            
	        }, {
	              tag: 'ITEM N6'
	            , naime: 'nextNextNextOne'
	            , price1: 99
	            , price2: 99
	            , $email: '15 Email Accounts'
	            , $volume: '100GB Space'
	            , $domain: '1 Domain Name'
	            , $count: 1	            
	            ,  link: 'product3'
	        }]


// Вывод результата в виде текста
function mesageCart(text) {
		var cartcart = document.getElementById('cartcart')
	   cartcart.textContent = text
	}
//Подсчет суммы в корзине
	function countBasketPrice(cartUser) {
	    var countCart = 0
	    var sumPriceCart = 0
	    for (var i = 0; i < cartUser.length; i++) {
	        sumPriceCart += (cartUser[i].price1 + cartUser[i].price2/100) ;
	        countCart += cartUser[i].$count;
	    }
	    mesageCart('Итого: ' + countCart + ' шт. стоимостью ' + parseFloat(sumPriceCart.toFixed(2)) + ' $ ')
	}
//добавление товара при клике
	function addToCart(goods, cartUser) {
	    cartUser.push(goods)
	    countBasketPrice(cartUser)
	}
//Очистка корзины
	function clearCart(cartUser) {
	    mesageCart('В корзине пусто.')
	    cartUser.length = 0 /*cartUser.splice(0, cartUser.length)*/
	}
	
	function handleClearCart() {
	    clearCart(userCar)
	}
	/*$clear.setAttribute('onclick', 'clearCart(cart)')*/

//Визуализация корзины 
function catalogVisualItem(productItem, indexItem) {	    
	        
	    var $elem = document.createElement('div');	      
	    $elem.classList.add('whole');
	    $container.appendChild($elem);

	    var $type = document.createElement('div');
	    var classOfElement = productItem.naime;
	    $type.classList.add('type', classOfElement);
	    $elem.appendChild($type);


	    var $p = document.createElement('p');
	    $p.innerHTML = productItem.tag;
	    $type.appendChild($p);

	    var $plan = document.createElement('div');
	    $plan.classList.add("plan");
	    $elem.appendChild($plan);


	    var $header = document.createElement('div');
	    $header.classList.add("header");
	    $plan.appendChild($header);

	    var $content = document.createElement('div');
	    $content.classList.add("content");
	    $plan.appendChild($content);

	    
	    


	    var $$ = document.createElement('span');
	    $header.appendChild($$);
	    $$.innerHTML = "$";

	    $header.innerHTML = productItem.price1;

	    var $sup = document.createElement('sup')
	    $sup.innerHTML = productItem.price2
	    $header.appendChild($sup);

	    var $month = document.createElement('p')
	    $month.innerHTML = "per month"
	    $month.classList.add("month");
	    $header.appendChild($month);


	    var $ul = document.createElement('ul')
		$content.appendChild($ul);

	    var li = document.createElement('li');

    	for (var prop in productItem) {
	        if (prop[0] == '$') {
	        var $li=document.createElement('li');
    		$ul.appendChild($li);
    		$li.innerHTML = productItem[prop];
    		}
		}
		var $lock = document.createElement('div')
		$lock.classList.add("lock")
		$content.appendChild($lock);

		var $shim = document.createElement('div')
		$shim.classList.add("shim")
		$lock.appendChild($shim);

		var $modal = document.createElement('div')
		$modal.classList.add("modal")
		$shim.appendChild($modal);


		var $smallImages = document.createElement('img')
		$smallImages.classList.add("smallImg")
		$smallImages.src = ('img/' + productItem.link + '.jpg')
		$modal.appendChild($smallImages);

		var $price = document.createElement('div');
	    $price.classList.add("price");
	    $plan.appendChild($price);

		var $buttom = document.createElement('a')	    
	    $buttom.classList.add("buttom")
	    $price.appendChild($buttom);
	    $buttom.href = "#";
	    //тут сделать oneclick

	    var $ppp = document.createElement('p')	    
	    $ppp.classList.add("cart")
	    $ppp.innerHTML = "Add to cart"
	    $buttom.appendChild($ppp);
	    var addToCartAtribute = ('addToCart(product[' + indexItem + '],userCar)')

	    $buttom.setAttribute('onclick', addToCartAtribute)
	
	}
	//каталог визуализации
	function catalogVisual(productObject) {
	    for (i = 0; i < productObject.length; i++) {
	        catalogVisualItem(productObject[i], i)
	    }
	}

	//функция вызова модального окна


	//Функция init

	function init() {
	    mesageCart('В корзине пусто.')
	    var $clear = document.getElementById('clear')
	    $clear.textContent = 'Очистить корзину'
	    $clear.addEventListener('click', handleClearCart)
	    catalogVisual(product)
	    
	    
	}
	window.addEventListener('load', init) 

