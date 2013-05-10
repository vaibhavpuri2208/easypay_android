cartValue = 0;


function clearCartQuantities()

{
  	// clearing the cart view quantities
  	var buttons = document.getElementsByTagName('button');
	var i;
	for(i=0; i<buttons.length; i++)
	{
		var spans, y;
		spans = buttons[i].getElementsByTagName('span');
		for(y=0; y<spans.length; y++)
			{
			spans[y].innerText = "00";
			} 
	}  	


}

function refreshCart(){
	cartValue =0;
	cartBox = document.getElementById('cartValue');
  	cartBox.innerHTML = "Empty"; 
	clearCartQuantities();  	
  	

}



function debit_tag(credit){
	creditAvail = parseFloat(credit);
	if (creditAvail<cartValue)
		{
			navigator.notification.alert("Not enough balance, please top-up");
		}
		else
		{
			newCredit = creditAvail - cartValue;
			payload = newCredit.toString();
			writeTag(payload);
			navigator.notification.alert("Amount Debited: "+ cartValue + "\n" + "Initial Credit: "+creditAvail+"\n"+"Total Available Credit: "+newCredit);		
		}


}


function current_credit(nfcEvent){
	try{
		tag_payload = nfcEvent.tag.ndefMessage[0]['payload'];
		credit = nfcTagStringTasks(tag_payload);
		debit_tag(credit);
		refreshCart();
		}
	catch(e)
		{
		navigator.notification.alert("Error Found" + e);
		}		
}



function onDeviceReady(){
	pay.onclick = function(){nfc.addNdefListener(current_credit,successTagRead,failedTagRead);}
	clearCartQuantities();
}




function add_to_cart(increment){  	
  cartValue = cartValue +parseFloat(increment);
  cartBox = document.getElementById('cartValue');
  cartBox.innerHTML = "&euro;" + cartValue.toString();
  
  var newValueString= "";
  var clickElement = event.target;
  
  currentSpan = clickElement.getElementsByTagName('span')[0];
  var newValue = (parseFloat(currentSpan.innerText) + 1.00);
  if (newValue<10)
  	{
  	newValueString = "0" + newValue.toString();
  	}
  	else
  	{
  	newValueString = newValue.toString();
  	}
  	
  currentSpan.innerText = newValueString;
  
  
}


function initialiseIds()
{

	beers = document.getElementById('beers');
	pizza = document.getElementById('pizza');
	burger = document.getElementById('burger');
	pay= document.getElementById('pay')
	refresh = document.getElementById('refreshLink');	
}
	
function registerEvents() {
	
	beers.onclick = function(){add_to_cart(beers.getAttribute('data-value'));}
	pizza.onclick = function(){add_to_cart(pizza.getAttribute('data-value'));}
	burger.onclick = function(){add_to_cart(burger.getAttribute('data-value'));}
	sausage.onclick = function(){add_to_cart(sausage.getAttribute('data-value'));}
	soda.onclick = function(){add_to_cart(soda.getAttribute('data-value'));}
	chocolate.onclick = function(){add_to_cart(chocolate.getAttribute('data-value'));}
	
	
	
	
	refresh.onclick = refreshCart;
	document.addEventListener("deviceready", onDeviceReady, true);


}



window.onload = function ()
 {
   
	initialiseIds();
	registerEvents();
}


