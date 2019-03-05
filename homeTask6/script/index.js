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
	            , email: '15 Email Accounts'
	            , volume: '100GB Space'
	            , domain: '1 Domain Name'
	            , count: 1	            
	            
	        , }

var $wholes = document.getElementsByTagName("whole");
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
	    var content = ''	    
	    var $elem = document.createElement('div')
	    
	    $elem.classList.add('whole')

	    var $type = document.createElement('div')

	    $type.classList.add(productItem[indexItem].name)


	    var $p = document.createElement('p')
	    $p.innerHTML = productItem[indexItem].tag

	    var $plan = document.createElement('div')
	    $plan.classList.add("plan")

	    var $header = document.createElement('div')
	    $header.classList.add("header")





	    $elem.setAttribute('tabindex', indexItem)
	    catalog.appendChild($elem)
	        /* -------- Кнопка объекта "Купить"  --------*/
	    var $button = document.createElement('button')
	    $button.textContent = 'Купить ' + productItem['_price'] + ' руб.'
	    var addToCartAtribute = ('addToCart(product[' + indexItem + '],cart)')
	    $button.setAttribute('onclick', addToCartAtribute)
	    $elem.appendChild($button)
	        /* -------- Маленькая картинка в каталоге  --------*/
	    var $smallImg = document.createElement('img')
	    $smallImg.classList.add('smallImg')
	    var src = 'img/small/' + productItem['_name'] + '_' + productItem['_color'] + '.jpg'
	    $smallImg.src = src
	    $elem.insertBefore($smallImg, $button)
	}

