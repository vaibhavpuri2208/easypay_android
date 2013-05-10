//setting-up global variables
 initFlag=false;
 total=0;


function initialise_variables(){
	initFlag=true;
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
    
    
    
	window.location = "add_credit_tap_load.html";
 	
 	writeTag(payload);	

  	navigator.notification.alert("Existing Credit in Tag: "+ credit + "\n" + "Credit Added: "+total+"\n"+"Total Available Credit: "+payload);
	window.localStorage.clear();
	
	window.localStorage.setItem("topupValue", total);
    window.localStorage.setItem("existingValue", credit);
    window.localStorage.setItem("newValue", payload);


	initialise_variables();
		
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
  			nfc.addNdefListener(current_credit,successTagRead,failedTagRead);
}		
function onBodyLoad() {   
    		document.addEventListener("deviceready", onDeviceReady, true);			
}

