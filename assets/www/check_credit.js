window.onload = function ()
 {
   current_credit=0;


}

function initialise_variables(){
current_credit=0;

}

function update_message_box(message)

{
messageBox = document.getElementById('creditBox');

messageBox.innerHTML= "Current credit on this wristband is:" +  message;
tryAgainBox.innerHTML = "Tap another band to check credit";


}






function check_credit(nfcEvent){

	try {
	tryAgainBox.innerHTML = "";
	
	
	some_value = nfcEvent.tag.ndefMessage[0]['payload'];
	
	credit = nfc.bytesToString(some_value);
  	
  	credit = parse_credit_string(credit);
    
  	credit = error_handle_string(credit);  

	credit_message = credit;

	}
	catch (e) {
	credit_message = "No Credit Found";   
	}
	
 	update_message_box(credit_message);
	
}
