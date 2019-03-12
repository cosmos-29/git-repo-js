
/* Создаем корзину для товаров выбранных, а также корзину наполненную товарами.  Для товаров, которые будут отображены в HTML 
в блоке. */
var $container = document.getElementById("container2");
var userCar = [];
var refreshIntervalId;
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
	            ,  link: ['product1','product2','product3',]
	        }, {
	            tag: 'ITEM N2'
	            , naime: 'standard'
	            , price1: 49
	            , price2: 99
	            , $email: '15 Email Accounts'
	            , $volume: '100GB Space'
	            , $domain: '1 Domain Name'
	            , $count: 1
	            ,  link: ['product2','product1','product3',]            
	            
	        }, {
	            tag: 'ITEM N3'
	            , naime: 'ultimate'
	            , price1: 99
	            , price2: 99
	            , $email: '15 Email Accounts'
	            , $volume: '100GB Space'
	            , $domain: '1 Domain Name'
	            , $count: 1	            
	            ,  link: ['product3','product1','product2',]
	        }, {
	            tag: 'ITEM N4'
	            , naime: 'nextOne'
	            , price1: 29
	            , price2: 99
	            , $email: '15 Email Accounts'
	            , $volume: '100GB Space'
	            , $domain: '1 Domain Name'
	            , $count: 1
	            ,  link: ['product1','product2','product3']            
	            
	        }, {
	              tag: 'ITEM N5'
	            , naime: 'nextNextOne'
	            , price1: 49
	            , price2: 99
	            , $email: '15 Email Accounts'
	            , $volume: '100GB Space'
	            , $domain: '1 Domain Name'
	            , $count: 1
	            ,  link: ['product2','product1','product3',]	            
	            
	        }, {
	              tag: 'ITEM N6'
	            , naime: 'nextNextNextOne'
	            , price1: 99
	            , price2: 99
	            , $email: '15 Email Accounts'
	            , $volume: '100GB Space'
	            , $domain: '1 Domain Name'
	            , $count: 1	            
	            ,  link: ['product3','product1','product2',]
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
		
		var $smallImages = document.createElement('img')
		$smallImages.classList.add("smallImg")
		$smallImages.id = ("smallImg" + indexItem);
		$smallImages.src = ('img/' + productItem.link[0] + '.jpg')
		$content.appendChild($smallImages);

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
	    //делаем кнопку и присваиваем ей клик и функцию.
	    $buttom.setAttribute('onclick', addToCartAtribute)


	    //заполняем объектами для модального окна;
		var $template = document.querySelector('#template');
		var $addItemContent = document.getElementById('itemContent' + indexItem)
		var $thumbnails = document.getElementById('thumbnails' + indexItem);



	   for (var j = 0; j < productItem.link.length; j++) {
	   		var $itemPic = $template.children[0].cloneNode(true);
	    	$itemPic.querySelector('.link').src = ('img/' + productItem.link[j] + '.jpg');	    	
	    	$thumbnails.appendChild($itemPic);
	    }
	
	} 


	//каталог визуализации
	var $itemContent = document.getElementById('itemContent');
	var $modalModal = document.getElementById('modalModal');

	function catalogVisual(productObject) {
	    for (var i = 0; i < productObject.length; i++) {
	        var $modalModalGlobal = $modalModal.cloneNode(true);
	        $modalModalGlobal.classList.remove("modal-content",);
	        $modalModalGlobal.classList.add("modal-content", "modal-content" + i)
	        $modalModalGlobal.style.display="none";
	        var $bigPic = $modalModalGlobal.querySelector('.preview');
	        
	        var bigPicImg = document.createElement("img");        	

	        bigPicImg.src = "img/" + productObject[i].link[0] + '.jpg';
	        bigPicImg.classList.add("hugePic")
	        $modalModalGlobal.id = "modal-content" + i;
	        $modalModalGlobal.querySelector('#thumbnails').id = ('thumbnails' + i); 	
	        modal.appendChild($modalModalGlobal);
	        /*$bigPic.appendChild(bigPicImg);*/
	        var $preview = document.class
	        catalogVisualItem(productObject[i], i);
	        

	    }
	}

	

	//функция вызова модального окна


	//Функция init


	// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn1 = document.getElementsByClassName("smallImg");
var btn2 = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal 
document.addEventListener('click', handleModalDisplay)


function handleModalDisplay(event) {
		var eventClick;
	for (var k = 0; k < product.length; k++) {
		eventClick = event.target.id;
		if(eventClick == ('smallImg' + k)) {
		console.log('smallImg' + k);
		var modalShow = document.getElementById('modal-content' + k);
		var elementShow = modalShow.querySelector('.template2');
		modalShow.style.display = "block";
		modal.style.display = "block";
		elementShow.style.display = "block";
	}  	 
	}

	var $thumbnails = document.getElementsByClassName('modal-content');
	    for (var i = 0; i < $thumbnails.length; i++) {
	    	if ($thumbnails[i].style.display == "block") {
	    		$thumbnails = $thumbnails[i];
	    		var activeIndex = 0;
	      refreshIntervalId = setInterval( function()  {
          var $aa = $thumbnails.querySelector('.thumbnails');
          console.log($aa);
          var $a = $aa.children[activeIndex].children[0];
          var path = $a.src;

          var $image = document.createElement('img');
          $image.src = path;

          var $preview = $thumbnails.querySelector('.preview');
          $preview.innerHTML = '';

          $preview.appendChild($image);
          activeIndex++;
          if(activeIndex == $aa.children.length) {
            activeIndex = 0;
          }
        }, 1000);	    			
	    	} else {
	    		clearInterval(refreshIntervalId);
	    	}

	    }
	         
      
	
}



document.addEventListener('click', handleModalDisplayNone);

var modalContentNails = isActive(document.getElementsByClassName('modal-content'));



function isActive(anyContent) {
	for ( var t = 0; t < anyContent.length; t ++) {
		if (anyContent[t].style.display == "block") {
			return anyContent[t];
		} else if (anyContent[t].style.display != "block" && t == anyContent.length -1) {
			return 0;
		}
	}
}






			
   
   


function handlePictureFill(productImages) {
	
}

document.addEventListener('click', handleModalRoller)

var numberImg = 0;

function handleModalRoller(event) {
	var imgBig = document.getElementsByClassName('hugePic');
	var count = 0;
			
	var number = +(event.target.parentNode.id + '')[13];
	if (event.target.className == 'left') {
		console.log('left');
		imgBig.src =  "img/" + product[number].link[numberImg++] + '.jpg';
		console.log(imgBig.src);
		return numberImg

	} else if (event.target.className == 'right') {
		console.log('right');
	}
}


btn2.onclick = function() {
  modal.style.display = "block";
}


function handleModalDisplayNone(event) {
	var $closeElement = document.getElementsByClassName("close");

	if (event.target.className == 'close') {
		modal.style.display = "none";
		clearInterval(refreshIntervalId);
		for (var i = 0; i <= product.length; i++) {
			modal.children[i].style.display = "none";
		}
	}

}
// When the user clicks on <span> (x), close the modal
/*
span.onclick = function() {
  modal.style.display = "none";
}
*/
// When the user clicks anywhere outside of the modal, close it

/*var activeIndex = 0;
        function handleTimerUp() {
          var $thumbnails = document.getElementsByClassName('thumbnails');
          var $a = $thumbnails.children[activeIndex].children[0];
          var path = $a.href;

          var $image = document.getElementsByClassName('link');
          $image.src = path;

          var $preview = document.getElementsByClassName('preview');
          $preview.innerHTML = '';

          $preview.appendChild($image);
          activeIndex++;
          if(activeIndex > $thumbnails.children.length - 1) {
            activeIndex = 0;
          }
        }*/

        function handleThumbnailsClick(event) {
          event.preventDefault();
          if(event.target.tagName === 'IMG') {
            var $a = event.target.parentElement;
            var path = $a.href;

            var $image = document.getElementsByClassName('link');
            $image.src = path;

            var $preview = document.getElementsByClassName('preview');
            $preview.innerHTML = '';

            $preview.appendChild($image);
          }
        }


 addEventListener("click", kdfhgdfkhgkdfhgk);
 
function kdfhgdfkhgkdfhgk(event) {
modalContentNails = isActive(document.getElementsByClassName('modal-content')); 
 if (modalContentNails != 0) {
          event.target;
          if(event.target.tagName == 'IMG') {
            var $aaa = event.target;
            var path = $aaa.src;

            var $image = document.createElement('img');
            $image.src = path;

            var $preview = $aaa.parentElement.parentElement.parentElement.querySelector('.preview');
            $preview.innerHTML = '';
            $preview.appendChild($image);
            //$preview.appendChild($image);
          }
        }
	
} 

 



window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    clearInterval(refreshIntervalId);
    for (var i = 0; i <= product.length; i++) {
			modal.children[i].style.display = "none";
		}
  }
}

	function init() {
	    mesageCart('В корзине пусто.')
	    var $clear = document.getElementById('clear')
	    $clear.textContent = 'Очистить корзину'
	    $clear.addEventListener('click', handleClearCart)
	    catalogVisual(product);



	        
	}

window.addEventListener('load', init);


