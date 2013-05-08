
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


