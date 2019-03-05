/*
$('.header').click(function(){
  
  var $this = $(this);
  $this.closest(".whole").find(".content").slideToggle();
  
  
});

$("input").on("mouseenter",function(){
  event.preventDefault();
  
  $(this).animate(
    
    {opacity:1}
  
  
  );

});

$(".whole").on("click","a",function(){
  event.preventDefault();
  $(".plan").removeClass("selected");
  $(this).closest(".whole").find(".plan").addClass("selected");


});
*/
// Создаем корзину для товаров выбранных, а также корзину наполненную товарами. 
var userCar = []
var product = [
	        {
	            tag: 'ITEM N1'
	            , name: 'type'
	            , price1: 29
	            , price2: 99
	            , email: '15 Email Accounts'
	            , volume: '100GB Space'
	            , domain: '1 Domain Name'
	            ,  uantity: 1	            
	            
	        }, {
	            tag: 'ITEM N2'
	            , name: 'type standard'
	            , price1: 49
	            , price2: 99
	            , email: '15 Email Accounts'
	            , volume: '100GB Space'
	            , domain: '1 Domain Name'
	            , count: 1	            
	            
	        }, {
	            tag: 'ITEM N3'
	            , name: 'type ultimate'
	            , price1: 99
	            , price2: 99
	            , email: '15 Email Accounts'
	            , volume: '100GB Space'
	            , domain: '1 Domain Name'
	            , count: 1	            
	            
	        }, {
	            tag: 'ITEM N4'
	            , name: 'type nextOne'
	            , price1: 29
	            , price2: 99
	            , email: '15 Email Accounts'
	            , volume: '100GB Space'
	            , domain: '1 Domain Name'
	            , count: 1	            
	            
	        }, {
	            tag: 'ITEM N5'
	            , name: 'type nextNextOne'
	            , price1: 49
	            , price2: 99
	            , email: '15 Email Accounts'
	            , volume: '100GB Space'
	            , domain: '1 Domain Name'
	            , count: 1	            
	            
	        , }, {
	              tag: 'ITEM N6'
	            , name: 'type nextNextNextOne'
	            , price1: 99
	            , price2: 99
	            , $email: '15 Email Accounts'
	            , $volume: '100GB Space'
	            , $domain: '1 Domain Name'
	            , $count: 1	            
	            
	        , }

var $container = document.getElementsByTagName("container");
// Вывод результата в виде текста
function messageCart(text) {
	    document.getElementById('cartShoppingPrint').textContent = text
	}
//Подсчет суммы в корзине
	function countBasketPrice(cartUser) {
	    var countCart = 0
	    var sumPriceCart = 0
	    for (var i = 0; i < cartUser.length; i++) {
	        sumPriceCart += cartUser[i]._price;
	        countCart += cartUser[i]._quantity;
	    }
	    messageCart('Итого: ' + countCart + ' шт. стоимостью ' + sumPriceCart + ' рублей. ')
	}
//добавление товара при клике
	function addToCart(goods, cartUser) {
	    cartUser.push(goods)
	    countBasketPrice(cartUser)
	}
//Очистка корзины
	function clearCart(cartUser) {
	    messageCart('В корзине пусто.')
	    cartUser.length = 0 /*cartUser.splice(0, cartUser.length)*/
	}
	
	function handleClearCart() {
	    clearCart(cart)
	}
	/*$clear.setAttribute('onclick', 'clearCart(cart)')*/

//Визуализация корзины 
function catalogVisualItem(productItem, indexItem) {
	    /* ------- Вывод атрибутов объекта без префикса '_' -------*/
	        
	    var $elem = document.createElement('div');	      
	    $elem.classList.add('whole');
	    $container.appendChild($elem);

	    var $type = document.createElement('div');
	    $type.classList.add(productItem[indexItem].name);
	    $elem.appendChild($type);


	    var $p = document.createElement('p');
	    $p.innerHTML = productItem[indexItem].tag;
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

	    var $price = document.createElement('div');
	    $price.classList.add("price");
	    $plan.appendChild($price);
	    $price.innerHTML = productItem[indexItem].price1;


	    var $$ = document.createElement('span');
	    $header.appendChild($$);
	    $$.innerHTML = "$";


	    var $sup = document.createElement('sup')
	    $sup.innerHTML = productItem[indexItem].price2
	    $header.appendChild($sup);

	    var $month = document.createElement('p')
	    $month.innerHTML = "per month"
	    $header.appendChild($month);

	    var $ul = document.createElement('ul')
		$content.appendChild($ul);

	    var li=document.createElement('li');

    	for (var prop in productItem) {
	        if (prop[0] == '$') {
	        var $li=document.createElement('li');
    		$ul.appendChild($li);
    		$li.innerHTML = productItem[prop];
    		}
		}
		var $buttom = document.createElement('a')	    
	    $buttom.classList.add("buttom")
	    $price.appendChild($buttom);
	    //тут сделать oneclick

	    var $ppp = document.createElement('p')	    
	    $ppp.classList.add("cart")
	    $ppp.innerHTML = "Add to cart"
	    $buttom.appendChild($ppp);
	
	}

	function catalogVisual(productObject) {
	    for (i = 0; i < productObject.length; i++) {
	        catalogVisualItem(productObject[i], i)
	    }
	}

	function init() {
	    
	    catalogVisual(product);
	    
	}
	window.addEventListener('load', init) 

