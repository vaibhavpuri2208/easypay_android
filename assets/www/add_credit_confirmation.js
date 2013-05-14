function revertTransaction()
{
	
	navigator.notificiation.alert("in revert function");
	
 	writeTag("100");	


}




window.onload = function(){
	
}






function onDeviceReady(){
	var results = new Array();
	var revertFlag = false;
	results[0] = window.localStorage.getItem("existingValue");
	results[1] = window.localStorage.getItem("topupValue");
	results[2] = window.localStorage.getItem("newValue");
		
	
	//existingValue.innerHTML = "Existing Value: " + results[0];
    topupValue.innerHTML = "Top up Value: " + results[1];
    newValue.innerHTML = "New Credit: " + results[2];
	
	//document.getElementById("revert").addEventListener("onChange", revertTransaction, false);
	//revertButton = document.getElementById('revert');
	//revertButton.click(revertTransaction);
			  	
  	window.localStorage.clear();
  
}