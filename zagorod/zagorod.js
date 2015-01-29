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
			document.getElementById("kgPig").value = 5;
			document.getElementById("drPig").value = 3800;
			break;
		case lamb:
			document.getElementById("kgLamb").value = 5;
			document.getElementById("drLamb").value = 3000;
			break;
		case goat:
			document.getElementById("kgGoat").value = 5;
			document.getElementById("drGoat").value = 3500;
			break;
	   default: 
			window.alert("This is default value.");
			break;
   }
}

