
function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}




function ndef_read_callback(nfcEvent){
	var appid= document.getElementById("topup_value")
    appid.innerHTML = (JSON.stringify(nfcEvent.tag.ndefMessage));
}	


function successTagWrite() {
	navigator.notification.vibrate(100);
    

}        

function failedTagWrite() {
	navigator.notification.alert("Failed Tag Write!");
}        

function successTagRead() {
console.log("Read Tag Successfully!");
}        

function failedTagRead() {
console.log("Failed Tag Read!");
}        

function parse_credit_string(stringToParse)
{
	parsed_string = stringToParse.substring(3,stringToParse.length);
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

function nfcTagStringTasks(tempValue){
	tempCredit = nfc.bytesToString(tempValue);
  
  	tempCredit = parse_credit_string(tempCredit);
    
  	tempCredit = error_handle_string(tempCredit);  
  	
  	return tempCredit; //always move variables around as strings

}


function writeTag(payload)
{

	ndefRecord = ndef.textRecord(payload);
  	ndefMessage = [];
    ndefMessage.push(ndefRecord);
    nfc.write(ndefMessage,successTagWrite, failedTagWrite );
}
