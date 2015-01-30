/* Ashot_Erik */
 function  initialize() 
        {
       var mapProp = {
                     center:new google.maps.LatLng(39.8272818, 46.7625134),
                          zoom:9,
                       mapTypeId:google.maps.MapTypeId.ROADMAP
                     };
         var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
       
         google.maps.event.addDomListener(window, 'load', initialize);
        }
         google.maps.event.addDomListener(window, 'load', initialize);

  //Arman
	function hide1() {
		document.getElementById("d2").style.display = "none";
		document.getElementById("d3").style.display = "none";
		document.getElementById("d4").style.display = "none";
		document.getElementById("d").style.display = "none";
		document.getElementById("d1").style.display = "block";
	}

	function hide2() {
		document.getElementById("d1").style.display = "none";
		document.getElementById("d3").style.display = "none";
 	 	document.getElementById("d4").style.display = "none";
		document.getElementById("d").style.display = "none";
		document.getElementById("d2").style.display = "block";
	}

	function hide3() {
		document.getElementById("d1").style.display = "none";
		document.getElementById("d2").style.display = "none";
                document.getElementById("d4").style.display = "none";
		document.getElementById("d").style.display = "none";
		document.getElementById("d3").style.display = "block";
	}
        function hide4() {
                document.getElementById("d1").style.display = "none";
                document.getElementById("d2").style.display = "none";
                document.getElementById("d3").style.display = "none";
		document.getElementById("d").style.display = "none";
                document.getElementById("d4").style.display = "block";
        }
        function hide5() {
                document.getElementById("d1").style.display = "none";
                document.getElementById("d2").style.display = "none";
                document.getElementById("d3").style.display = "none";
		document.getElementById("d4").style.display = "none";
                document.getElementById("d").style.display = "block";
        }


// Armine Calculator
function participants2()
{       
		
	 	var participantsInput1 = document.getElementById('participantsInput1').value;
		var participantsInput2 = document.getElementById('participantsInput2').value;

		if (Number(participantsInput1) < Number(participantsInput2))
   		{
			 window.alert("Error: Դուք մտցրել եք սխալ տվյալ։ Մասնակիցների ընդհանուր քանակը " + Number(participantsInput1)+  " է։");
			 document.getElementById("participantsInput2").value = "";
    	}	

}

function participants3()
{
	
	 	var participantsInput1 = document.getElementById('participantsInput1').value;
		var participantsInput2 = document.getElementById('participantsInput2').value;
		var	participantsInput3 = document.getElementById('participantsInput3').value;

		var tempSum = Number(participantsInput2) + Number(participantsInput3);

		if (Number(participantsInput1) < (tempSum))
    	{ 
        	window.alert("Error: Դուք մտցրել եք սխալ տվյալ։ Մասնակիցների ընդհանուր քանակը " + Number(participantsInput1)+  " է։");
			document.getElementById("participantsInput3").value = "";
    	}
				
}

function participants4()
{ 
	
	 	var participantsInput1 = document.getElementById('participantsInput1').value;
		var participantsInput2 = document.getElementById('participantsInput2').value;
		var	participantsInput3 = document.getElementById('participantsInput3').value;
		var	participantsInput4 = document.getElementById('participantsInput4').value;

		var tempSum =Number(participantsInput2) + Number(participantsInput3) + Number(participantsInput4);

		if (Number(participantsInput1) < tempSum)
    	{
			 window.alert("Error: Դուք մտցրել եք սխալ տվյալ։ Մասնակիցների ընդհանուր քանակը " + Number(participantsInput1)+  " է։"); 
			 document.getElementById("participantsInput4").value = "";
    	}		

}

// functions for barbecue 
function initializeBarbecue(name)
{
	switch(name)
	{
		case pig:
			if (document.getElementById("pig").checked == true)	
			{
				document.getElementById("kgPig").value = 5;
				document.getElementById("drPig").value = 3800;
				document.getElementById("drPig").disabled = false;
				document.getElementById("kgPig").disabled = false;
			}
			else 
			{
				document.getElementById("kgPig").value = "";
				document.getElementById("drPig").value = "";
				document.getElementById("drPig").disabled = true;
				document.getElementById("kgPig").disabled = true;
					
			} 
            break;
		
		case lamb:
			if (document.getElementById("lamb").checked == true)	
			{
				document.getElementById("kgLamb").value = 5;
				document.getElementById("drLamb").value = 3000;
				document.getElementById("drLamb").disabled = false;
				document.getElementById("kgLamb").disabled = false;
			}
			else 
			{
				document.getElementById("kgLamb").value = "";
				document.getElementById("drLamb").value = "";
				document.getElementById("drLamb").disabled = true;
				document.getElementById("kgLamb").disabled = true;
			} 
            break;
		case goat:
			if (document.getElementById("goat").checked == true)	
			{
				document.getElementById("kgGoat").value = 5;
				document.getElementById("drGoat").value = 3500;
				document.getElementById("drGoat").disabled = false;
				document.getElementById("kgGoat").disabled = false;
			}
			else 
			{
				document.getElementById("kgGoat").value = "";
				document.getElementById("drGoat").value = "";
				document.getElementById("drGoat").disabled = true;
				document.getElementById("kgGoat").disabled = true;
			} 
            break;
        case chicken:
			if (document.getElementById("chicken").checked == true)	
			{
				document.getElementById("kgChicken").value = 5;
				document.getElementById("drChicken").value = 1600;
				document.getElementById("drChicken").disabled = false;
				document.getElementById("kgChicken").disabled = false;
			}
			else 
			{
				document.getElementById("kgChicken").value = "";
				document.getElementById("drChicken").value = "";
				document.getElementById("drChicken").disabled = true;
				document.getElementById("kgChicken").disabled = true;
			} 
            break;
	    case wing:
			if (document.getElementById("wing").checked == true)	
			{
				document.getElementById("kgWing").value = 5;
				document.getElementById("drWing").value = 3800;
				document.getElementById("drWing").disabled = false;
				document.getElementById("kgWing").disabled = false;
			}
			else 
			{
				document.getElementById("kgWing").value = "";
				document.getElementById("drWing").value = "";
				document.getElementById("drWing").disabled = true;
				document.getElementById("kgWing").disabled = true;
			} 
            break;
	    case haunch:
			if (document.getElementById("haunch").checked == true)	
			{
				document.getElementById("kgHaunch").value = 5;
				document.getElementById("drHaunch").value = 3800;
				document.getElementById("drHaunch").disabled = false;
				document.getElementById("kgHaunch").disabled = false;
			}
			else 
			{
				document.getElementById("kgHaunch").value = "";
				document.getElementById("drHaunch").value = "";
				document.getElementById("drHaunch").disabled = true;
				document.getElementById("kgHaunch").disabled = true;
			} 
            break;
	    case potatoes:
			if (document.getElementById("potatoes").checked == true)	
			{
				document.getElementById("kgPotatoes").value = 5;
				document.getElementById("drPotatoes").value = 3800;
				document.getElementById("drPotatoes").disabled = false;
				document.getElementById("kgPotatoes").disabled = false;
			}
			else 
			{
				document.getElementById("kgPotatoes").value = "";
				document.getElementById("drPotatoes").value = "";
				document.getElementById("drPotatoes").disabled = true;
				document.getElementById("kgPotatoes").disabled = true;
			} 
            break;
		case anvil: 
			if (document.getElementById("anvil").checked == true)	
			{
				document.getElementById("kgAnvil").value = 5;
				document.getElementById("drAnvil").value = 3800;
				document.getElementById("drAnvil").disabled = false;
				document.getElementById("kgAnvil").disabled = false;
			}
			else 
			{
				document.getElementById("kgAnvil").value = "";
				document.getElementById("drAnvil").value = "";
				document.getElementById("drAnvil").disabled = true;
				document.getElementById("kgAnvil").disabled = true;
			} 
            break;
		case internal_organs:
			if (document.getElementById("internal_organs").checked == true)	
			{
				document.getElementById("kgInternal_organs").value = 5;
				document.getElementById("drInternal_organs").value = 3800;
				document.getElementById("drInternal_organs").disabled = false;
				document.getElementById("kgInternal_organs").disabled = false;
			}
			else 
			{
				document.getElementById("kgInternal_organs").value = "";
				document.getElementById("drInternal_organs").value = "";
				document.getElementById("drInternal_organs").disabled = true;
				document.getElementById("kgInternal_organs").disabled = true;
			} 
            break;
		case etc: 
			if (document.getElementById("etc").checked == true)	
			{
				document.getElementById("drEtc").disabled = false;
				document.getElementById("kgEtc").disabled = false;
				document.getElementById("name").disabled = false;
			}
			else 
			{
				document.getElementById("drEtc").disabled = true;
				document.getElementById("kgEtc").disabled = true;
				document.getElementById("name").disabled = true;
			}
			break;
	   default: 
			window.alert("This is default value.");
			break;
   }
}

