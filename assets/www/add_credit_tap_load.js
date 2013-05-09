function revertTransaction()
{
	
	navigator.notificiation.alert("in revert function");
	
 	writeTag("100");	


}

function test()
{

}



window.onload = function(){
	
}






function onDeviceReady(){
	var results = new Array();
	results[0] = window.localStorage.getItem("existingValue");
	results[1] = window.localStorage.getItem("topupValue");
	results[2] = window.localStorage.getItem("newValue");
		
	
	existingValue.innerHTML = "Existing Value: " + results[0];
    topupValue.innerHTML = "Top up Value: " + results[1];
    newValue.innerHTML = "New Credit: " + results[2];
	
	//revertButton = document.getElementById('revert');
	//revertButton.onclick= revertTransaction;
		
  	  	
  
}