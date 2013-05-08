window.onload = function ()
 {
   


}







function add_credit(credit){
  message = document.getElementById('user_messages');
  message.innerHTML = 'Awaiting your tap...';
  
  var type = "text/plain";
    id = 123;
  total =  getURLParameter("topup_value");
    


  
    payload = parseFloat(total) + credit;  
  
  payload = payload.toString();
        
  
    //ndefRecord = ndef.record(ndef.TNF_MIME_MEDIA, type, id, payload.valueOf());
  ndefRecord = ndef.textRecord(payload);
  ndefMessage = [];
    ndefMessage.push(ndefRecord);
    nfc.write(ndefMessage,successTagWrite, failedTagWrite );
  navigator.notification.alert("Total Credit in Tag: "+ payload);
  
    message.innerHTML = '';
    }

function parse_credit_string(string_to_parse)
{
  parsed_string = string_to_parse.substring(3,credit.length);
  return parsed_string;
}

function error_handle_credit_string(test_value)
{
  
  if (isNaN(parseFloat(test_value))||test_value==="")
  {
    test_value ="0";
    navigator.notification.alert("errror detected");  
  }
return test_value;
}



function current_credit(nfcEvent){


  some_value = nfcEvent.tag.ndefMessage[0]['payload'];

  credit = nfc.bytesToString(some_value);
  
  credit = parse_credit_string(credit);
    
  credit = error_handle_credit_string(credit);  

  add_credit(parseFloat(credit));
  
}






