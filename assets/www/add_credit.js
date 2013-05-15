//setting-up global variables
 initFlag=true;
 total=0;


function initialise_variables(){
	initFlag=false;
}



function clearCookies(){
  window.localStorage.clear();
}
    




	
	
function call_confirmation_page(){
	
	var topupValue =  document.getElementById("add_credit_bt").value;//getURLParameter("topup_value");	
	window.localStorage.setItem("topupValue", topupValue);
	
	var temp = window.localStorage.getItem("topupValue");
	var ref = window.open("add_credit_tap_load.html");
}



function onDeviceReady(){
	var target = document.forms[0];
	target.addEventListener("onsubmit", call_confirmation_page, false);
}		


function onBodyLoad(){   
   document.addEventListener("deviceready", onDeviceReady, false);	
}

