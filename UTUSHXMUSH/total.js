jQuery(document).ready(function($){

	$("input").blur(function(){  
		calculator();
	});

	$("input").change(function(){  
		calculator();
	});

	function calculator() {
		$("#total").val(Number($("#totalAccessories").val()) + 
			Number($("#totalOvernight").val()) + Number($("#totalDesert").val()) + 
			Number($("#totalVegetable").val()) +  Number($("#totalKhimchq").val()) + 
			Number($("#totalMsamterq").val()));
		var count = Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) + Number($("#inputChildren3").val());
		if (count != 0) {
		 	$("#totalForOne").val(Math.ceil((Number($("#total").val()) / (Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()))) / 10)*10);
		} else {
			$("#totalForOne").val(0); 
		}
	}
});

//check amount of participants and display toottip 
/*function checkAmount(name)
{

	if (($("#inputMenl3").val() + $("#inputWomen3").val())
		return true;

	//window.alert("name");
    switch(name)
	{ 
		 case butTransport: 
			$('#toolTipID').style.left='33.3%';
	
			break; 
		case butDinner: 
			$('#toolTipID').class='extra';
			$('#toolTipID').style.left='40.7%';
			break; 
		case butOvernight:
			$('#toolTipID').class='extra';
			$('#toolTipID').style.left='48.4%';
			break; 
		case butAccessories: 
			$('#toolTipID').class='extra';
			$('#toolTipID').style.left='56.35%';
			break;
	} 
	
	$('#toolTipID').style.display='block';
	
	return false;
}

// Input field let only numbers (integer and float types)
function numbersOnlyFloat( myField, e )
{
	var key, keyChar; 

	if ( window.event )
		key = window.event.keyCode; 
	else 
		if ( e )
			key = e.which; 
		else 
			return true; 

	keyChar = String.fromCharCode( key );
	
	// control keys 
	if ( (key == null) || (key == 0) || (key == 8)
		|| (key == 9) || (key == 13) || (key == 27))
		return true; 

	// numbers 
	else if ( (("0123456789").indexOf(keyChar)) > -1 )
			return true;
	
	// decimal point jump 
	else if ( keyChar == "." )
			return true; 

	return false; 
}

// Input field let only numbers ( integer and float types)
// Only  INTEGERS 
function numbersOnly( myField, e )
{
	var key, keyChar; 

	if ( window.event )
		key = window.event.keyCode; 
	else 
		if ( e )
			key = e.which; 
		else 
			return true; 

	keyChar = String.fromCharCode( key );
	
	// control keys 
	if ( (key == null) || (key == 0) || (key == 8)
		|| (key == 9) || (key == 13) || (key == 27))
		return true; 

	// numbers 
	else if ( (("0123456789").indexOf(keyChar)) > -1 )
			return true;
	
	// decimal point jump 
/*	else if ( keyChar == "." )
			return true; */
/*
	return false; 
}

// initialize transport 
function initializeTransport() 
{
//	window.alert("testing initializeTransport function");
	$("#cost").value = 200; 
}*/


