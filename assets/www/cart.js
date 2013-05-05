
total = 0
<script type="text/javascript" charset="utf-8" src=""></script>


function add_to_cart(increment){


  total = total +parseFloat(increment);

}


function decodePayload(payload) {
    


        var langCodeLength = payload[0],
        text = payload.slice((1 + langCodeLength), payload.length);
        payload = nfc.bytesToString(text);

    
    return payload;
}

window.onload = function ()
 {
   
	beers = document.getElementById('beers');
	pizza = document.getElementById('pizza');
	burger = document.getElementById('burger');
	pay= document.getElementById('pay')
	
	beers.onclick = function(){add_to_cart(beers.getAttribute('data-value'));}
	pizza.onclick = function(){add_to_cart(pizza.getAttribute('data-value'));}
	burger.onclick = function(){add_to_cart(burger.getAttribute('data-value'));}
	pay.onclick = function(){debit_tag(total);}


	var imported = document.createElement('script');
	imported.src = 'phonegap-nfc.js';
	document.head.appendChild(imported);

}




function find_payload(nfcEvent){

some_value = nfcEvent.tag.ndefMessage[0]["payload"];
test = decodeMessage(nfcEvent.tag.ndefMessage[0])

navigator.notification.alert(test);
navigator.notification.vibration(100);

navigator.notification.alert(JSON.stringify(nfcEvent.tag));

credit = nfc.bytesToString(some_value);

navigator.notification.alert(credit);
}



function debit_tag(total){
//first read tag
	nfc.addNdefListener(find_payload,successTagRead,failedTagRead);


//then write tag
	

}

