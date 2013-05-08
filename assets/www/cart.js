window.onload = function ()
 {
   
	beers = document.getElementById('beers');
	pizza = document.getElementById('pizza');
	burger = document.getElementById('burger');
	pay= document.getElementById('pay')
	
	beers.onclick = function(){add_to_cart(beers.getAttribute('data-value'));}
	pizza.onclick = function(){add_to_cart(pizza.getAttribute('data-value'));}
	burger.onclick = function(){add_to_cart(burger.getAttribute('data-value'));}
	sausage.onclick = function(){add_to_cart(sausage.getAttribute('data-value'));}

	pay.onclick = function(){debit_tag();}


	var imported = document.createElement('script');
	imported.src = 'phonegap-nfc.js';
	document.head.appendChild(imported);

	


}




function add_to_cart(increment){
  total = total +parseFloat(increment);
}

