window.onload = function ()
 {
   
	beers = document.getElementById('beers');
	pizza = document.getElementById('pizza');
	burger = document.getElementById('burger');
	pay= document.getElementById('pay')
	
	beers.onclick = function(){add_to_cart(beers.getAttribute('data-value'));}
	pizza.onclick = function(){add_to_cart(pizza.getAttribute('data-value'));}
	burger.onclick = function(){add_to_cart(burger.getAttribute('data-value'));}
	pay.onclick = function(){debit_tag();}


	var imported = document.createElement('script');
	imported.src = 'phonegap-nfc.js';
	document.head.appendChild(imported);

	
credit = 0;
total = 0;


}




function add_to_cart(increment){


  total = total +parseFloat(increment);

}







function find_payload(nfcEvent){

  	navigator.notification.alert("Amount to debit: " + total);

	some_value = nfcEvent.tag.ndefMessage[0]["payload"];

	credit = nfc.bytesToString(some_value);
navigator.notification.alert("Credit Available prior to debit: " + credit);

//	credit = credit.substring(3,credit.length);

  	

	credit = parseFloat(credit);

	credit = credit - total;
	navigator.notification.alert("Net Balance: " + credit);


	var type = "text/plain";
    id = 123;

	payload =  credit.toString();
    ndefRecord = ndef.record(ndef.TNF_MIME_MEDIA, type, id, payload);
	ndefMessage = [];
    ndefMessage.push(ndefRecord);
    nfc.write(ndefMessage,successTagWrite, failedTagWrite );
credit = 0;
total = 0;
}



function debit_tag(){
//first read tag
	nfc.addNdefListener(find_payload,successTagRead,failedTagRead);


	
	
	
	
	
	

}

