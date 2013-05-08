
 initFlag=false;
   total=0;


function initialise_variables(){
initFlag=true;


}
function add_credit(credit){
  	message = document.getElementById('user_messages');
  	message.innerHTML = 'Awaiting your tap...';
  
  	var type = "text/plain";
  	id = 123;
  	total =  getURLParameter("topup_value");
	total = error_handle_string(total);  

	if (initFlag)
	{
		total=0;
		initFlag=false;
	}	
	

	payload = parseFloat(total) + credit;  
  
  	payload = payload.toString();
        
    //ndefRecord = ndef.record(ndef.TNF_MIME_MEDIA, type, id, payload.valueOf());
  	ndefRecord = ndef.textRecord(payload);
  	ndefMessage = [];
    ndefMessage.push(ndefRecord);
    nfc.write(ndefMessage,successTagWrite, failedTagWrite );
  	navigator.notification.alert("Existing Credit in Tag: "+ credit + "\n" + "Credit Added: "+total+"\n"+"Total Available Credit: "+payload);
	message.innerHTML = '';
	//enable_event_button('add_credit_button');
	initialise_variables();
    }

function parse_credit_string(string_to_parse)
{
	parsed_string = string_to_parse.substring(3,credit.length);
  	return parsed_string;
}

function error_handle_string(test_value)
{
  
	if (isNaN(parseFloat(test_value))||test_value==="")
  		{
    		test_value ="0";
    		navigator.notification.alert("No credit was added - input was incorrect ");  
  		}
	return test_value;
}


function disable_event_button(name){
	theButton = document.getElementsByName(name)[0];
	theButton.disabled = true;
	
}


function enable_event_button(name){
	theButton = document.getElementsByName(name)[0];
	theButton.disabled = false;
	
}

function current_credit(nfcEvent){

	try {
   //	disable_event_button('add_credit_button');
	
	some_value = nfcEvent.tag.ndefMessage[0]['payload'];
	
	credit = nfc.bytesToString(some_value);
  
  	credit = parse_credit_string(credit);
    
  	credit = error_handle_string(credit);  



	}
	catch (e) {
	//navigator.notification.alert("Just so that you know  ");
	credit = "0";   
	}
	
 	add_credit(parseFloat(credit));
	
	
}
