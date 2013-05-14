function redirect_to_display_page(message)

{
		var ref = window.open("check_credit_result.html");
		
		window.localStorage.setItem("creditValue", message);

}




function check_credit(nfcEvent){

	try {
	
	
	some_value = nfcEvent.tag.ndefMessage[0]['payload'];
	
	credit = nfc.bytesToString(some_value);
  	
  	credit = parse_credit_string(credit);
    
  	credit = error_handle_string(credit);  

	credit_message = credit;

	}
	catch (e) {
	credit_message = "No Credit Found";   
	}
	
 	redirect_to_display_page(credit_message);
	
}
