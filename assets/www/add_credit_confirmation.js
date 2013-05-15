
function reDrawForm(){

	var results = new Array();
	var revertFlag = false;
	results[0] = window.localStorage.getItem("existingValue");
	results[1] = window.localStorage.getItem("topupValue");
	results[2] = window.localStorage.getItem("newValue");

	
	var newValue = document.getElementById("newValue");		
	var topupValue = document.getElementById("topupValue");		

	
	//existingValue.innerHTML = "Existing Value: " + results[0];
    topupValue.innerHTML =results[1];
    newValue.innerHTML =  results[2];
	
			  	
  	window.localStorage.clear();



}



function onDeviceReady(){
  reDrawForm();
}



function onBodyLoad(){
      	document.addEventListener("deviceready", onDeviceReady, false);
}