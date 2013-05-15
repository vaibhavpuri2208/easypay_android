



//would prefer moving this to cookie.js
function clearCookies(){
  window.localStorage.clear();
}
    

function setCookies(cookieName, cookieValue)
{
  var i, count;
  count = cookieName.length;
  
  for(i=0; i<count; i++)
    {
      window.localStorage.setItem(cookieName[i], cookieValue[i]);
    }

}    


function add_credit(credit){
  
  	var topupValue =  window.localStorage.getItem("topupValue");
	
	//topupValue =  error_handle_string(topupValue);  

	

	payload = parseFloat(topupValue) + credit;    
  	payload = payload.toString();
    
 	writeTag(payload);	

  	
	var cookieValue = [topupValue, credit, payload];
	var cookieName = ['topupValue','existingValue', 'newValue'];
	
	clearCookies();
	//setCookies(cookieName, cookieValue);
	window.localStorage.setItem("newValue", payload);
	window.localStorage.setItem("topupValue", topupValue);

	var newWindow = window.open("add_credit_confirmation.html", '_self', 'location=no');
	}


function current_credit(nfcEvent){

	try {

	tag_payload = nfcEvent.tag.ndefMessage[0]['payload'];

	credit = nfcTagStringTasks(tag_payload);

	}
	catch (e) {
	credit = "0";   
	}

 	add_credit(parseFloat(credit));


}


function onDeviceReady() {
		topupValue.innerHTML = window.localStorage.getItem("topupValue");
		nfc.addNdefListener(current_credit,successTagRead,failedTagRead);
		
	
}		


	function onBodyLoad(){
      	document.addEventListener("deviceready", onDeviceReady, true);
}

