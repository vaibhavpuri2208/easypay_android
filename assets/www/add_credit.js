//setting-up global variables
 initFlag=false;
 total=0;


function initialise_variables(){
	initFlag=true;
}



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
  
  	total =  getURLParameter("topup_value");
	total =  error_handle_string(total);  

	if (initFlag)
	{
		total=0;
		initFlag=false;
	}	
	
	payload = parseFloat(total) + credit;    
  	payload = payload.toString();
    
    
    
 	
 	writeTag(payload);	

  	
	var cookieValue = [total, credit, payload];
	var cookieName = ['topupValue','existingValue', 'newValue'];
	
	clearCookies();
	setCookies(cookieName, cookieValue);
	initialise_variables();
	}


	
	
function call_confirmation_page(){
	
	var ref = window.open("add_credit_tap_load.html");

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
//  			nfc.addNdefListener(current_credit,successTagRead,failedTagRead);

}		
function onBodyLoad() {   
    		document.addEventListener("deviceready", onDeviceReady, true);			
}

