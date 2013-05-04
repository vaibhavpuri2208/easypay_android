

function write_payload(nfcEvent){
	var type = "text/plain";
    id = 123;

	payload =  getURLParameter("topup_value");
    ndefRecord = ndef.record(ndef.TNF_MIME_MEDIA, type, id, payload);
	ndefMessage = [];
    ndefMessage.push(ndefRecord)
    nfc.write(ndefMessage,successTagWrite, failedTagWrite );
  //
     navigator.notification.alert("Credit Added: " + payload );
}

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
    navigator.notification.alert("Credit Added: " + payload );

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
