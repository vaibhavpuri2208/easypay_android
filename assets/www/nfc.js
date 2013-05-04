function writeTag(nfcEvent) {


        var type = "text/plain",
        id = 123,
        payload = "1"
        ndefRecord = ndef.record(ndef.TNF_MIME_MEDIA, type, id, payload);
		ndefMessage = [];
        ndefMessage.push(ndefRecord);
        nfc.write(ndefMessage);

		} 


function ndefread(nfcEvent){
		var appid= document.getElementById("appInfo")
      appid.innerHTML = (JSON.stringify(nfcEvent.tag.ndefMessage));
}	


function successTagWrite() {
                console.log("Wrote Tag Successfully!");}        

function failedTagWrite() {
                console.log("Failed Tag Write!");}        

function successTagRead() {
                console.log("Read Tag Successfully!");}        

function failedTagWrite() {
                console.log("Failed Tag Read!");}        
