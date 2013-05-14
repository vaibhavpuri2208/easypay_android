window.onload = function(){



	}


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


function update_message_box_again(message){

			var messageBox = document.getElementById('creditBox');
  			messageBox.innerHTML = window.localStorage.getItem("creditValue");
  			clearCookies();
  			
}




function recheck_credit(nfcEvent){

	try {
	
	clearCookies();
	
	some_value = nfcEvent.tag.ndefMessage[0]['payload'];
	
	credit = nfc.bytesToString(some_value);
  	
  	credit = parse_credit_string(credit);
    
  	credit = error_handle_string(credit);  

	credit_message = credit;
	
	window.localStorage.setItem("creditValue", credit);

	}
	catch (e) {
	credit_message = "No Credit Found";   
	}
	
 	update_message_box_again(credit_message);
	
}
