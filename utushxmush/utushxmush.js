/* Ashot_Erik */
  //Arman
	function hide1() {
		document.getElementById("d2").style.display = "none";
		document.getElementById("d3").style.display = "none";
		document.getElementById("d4").style.display = "none";
		document.getElementById("d").style.display = "none";
		
	//	document.getElementById("d1").style.display = "block";

		if (checkAmount())
			document.getElementById("d1").style.display = "block";
		else 
			document.getElementById("d").style.display = "block";
//button background color
			document.getElementById("butAccessories").style.backgroundColor = "#E6F5FF";
			document.getElementById("butTransport").style.backgroundColor = "#90F17A";
			document.getElementById("butDinner").style.backgroundColor = "#E6F5FF";
			document.getElementById("butOvernight").style.backgroundColor = "#E6F5FF";
			document.getElementById("butparticipants").style.backgroundColor = "#E6F5FF";
//button  boreer color
			document.getElementById("butAccessories").style.borderColor = "#E6F5FF";
			document.getElementById("butTransport").style.borderColor = "#90F17A";
			document.getElementById("butDinner").style.borderColor = "#E6F5FF";
			document.getElementById("butOvernight").style.borderColor = "#E6F5FF";
			document.getElementById("butparticipants").style.borderColor = "#E6F5FF";
	}

	function hide2() {
		document.getElementById("d1").style.display = "none";
		document.getElementById("d3").style.display = "none";
 	 	document.getElementById("d4").style.display = "none";
		document.getElementById("d").style.display = "none";
		
		if (checkAmount())
			document.getElementById("d2").style.display = "block";
		else 
			document.getElementById("d").style.display = "block";
//button background color
			document.getElementById("butAccessories").style.backgroundColor = "#E6F5FF";
			document.getElementById("butTransport").style.backgroundColor = "#E6F5FF";
			document.getElementById("butDinner").style.backgroundColor = "#90F17A";
			document.getElementById("butOvernight").style.backgroundColor = "#E6F5FF";
			document.getElementById("butparticipants").style.backgroundColor = "#E6F5FF";
//button  boreer color
			document.getElementById("butAccessories").style.borderColor = "#E6F5FF";
			document.getElementById("butTransport").style.borderColor = "#E6F5FF";
			document.getElementById("butDinner").style.borderColor = "#90F17A";
			document.getElementById("butOvernight").style.borderColor = "#E6F5FF";
			document.getElementById("butparticipants").style.borderColor = "#E6F5FF";
	}
	function hide3() {
		document.getElementById("d1").style.display = "none";
		document.getElementById("d2").style.display = "none";
        document.getElementById("d4").style.display = "none";
		document.getElementById("d").style.display = "none";
		
		if (checkAmount())
			document.getElementById("d3").style.display = "block";
		else 
			document.getElementById("d").style.display = "block";
//button background color
			document.getElementById("butAccessories").style.backgroundColor = "#E6F5FF";
			document.getElementById("butTransport").style.backgroundColor = "#E6F5FF";
			document.getElementById("butDinner").style.backgroundColor = "#E6F5FF";
			document.getElementById("butOvernight").style.backgroundColor = "#90F17A";
			document.getElementById("butparticipants").style.backgroundColor = "#E6F5FF";
//button  boreer color
			document.getElementById("butAccessories").style.borderColor = "#E6F5FF";
			document.getElementById("butTransport").style.borderColor = "#E6F5FF";
			document.getElementById("butDinner").style.borderColor = "#E6F5FF";
			document.getElementById("butOvernight").style.borderColor = "#90F17A";
			document.getElementById("butparticipants").style.borderColor = "#E6F5FF";
	}
        function hide4() {
    		document.getElementById("d1").style.display = "none";
        	document.getElementById("d2").style.display = "none";
        	document.getElementById("d3").style.display = "none";
			document.getElementById("d").style.display = "none";
		
			if (checkAmount())
				document.getElementById("d4").style.display = "block";
			else 
				document.getElementById("d").style.display = "block";
//button background color
			document.getElementById("butAccessories").style.backgroundColor = "#90F17A";
			document.getElementById("butTransport").style.backgroundColor = "#E6F5FF";
			document.getElementById("butDinner").style.backgroundColor = "#E6F5FF";
			document.getElementById("butOvernight").style.backgroundColor = "#E6F5FF";
			document.getElementById("butparticipants").style.backgroundColor = "#E6F5FF";
//button  boreer color
			document.getElementById("butAccessories").style.borderColor = "#90F17A";
			document.getElementById("butTransport").style.borderColor = "#E6F5FF";
			document.getElementById("butDinner").style.borderColor = "#E6F5FF";
			document.getElementById("butOvernight").style.borderColor = "#E6F5FF";
			document.getElementById("butparticipants").style.borderColor = "#E6F5FF";
    	}
    	function hide5() {
    		document.getElementById("d1").style.display = "none";
        	document.getElementById("d2").style.display = "none";
        	document.getElementById("d3").style.display = "none";
			document.getElementById("d4").style.display = "none";
        	document.getElementById("d").style.display = "block";
//button background color
			document.getElementById("butparticipants").style.backgroundColor = "#90F17A";
			document.getElementById("butTransport").style.backgroundColor = "#E6F5FF";
			document.getElementById("butDinner").style.backgroundColor = "#E6F5FF";
			document.getElementById("butOvernight").style.backgroundColor = "#E6F5FF";
			document.getElementById("butAccessories").style.backgroundColor = "#E6F5FF";
//button  boreer color
			document.getElementById("butparticipants").style.borderColor = "#90F17A";
			document.getElementById("butTransport").style.borderColor = "#E6F5FF";
			document.getElementById("butDinner").style.borderColor = "#E6F5FF";
			document.getElementById("butOvernight").style.borderColor = "#E6F5FF";
			document.getElementById("butAccessories").style.borderColor = "#E6F5FF";
    }
function hide20_1() {
                document.getElementById("d_2_2_tabs").style.display = "none";
                document.getElementById("d_2_3_tabs").style.display = "none";
                document.getElementById("d_2_4_tabs").style.display = "none";
                document.getElementById("d_2_1_tabs").style.display = "block";
//button background color
				document.getElementById("colorBarbecue").style.backgroundColor = "#90E17A";
				document.getElementById("colorDesert").style.backgroundColor = "#E6F5FF";
				document.getElementById("colorDrink").style.backgroundColor = "#E6F5FF";
				document.getElementById("colorVegetable").style.backgroundColor = "#E6F5FF";
//button border color
				document.getElementById("colorBarbecue").style.borderColor = "#90E17A";
				document.getElementById("colorDesert").style.borderColor = "#E6F5FF";
				document.getElementById("colorDrink").style.borderColor = "#E6F5FF";
				document.getElementById("colorVegetable").style.borderColor = "#E6F5FF";
//input background color
				document.getElementById("InputColorBarbecue").style.backgroundColor = "#90E17A";
				document.getElementById("InputColorDrinkt").style.backgroundColor = "#E6F5FF";
				document.getElementById("InputColorVegetable").style.backgroundColor = "#E6F5FF";
				document.getElementById("InputColorDesert").style.backgroundColor = "#E6F5FF";
}
function hide20_2() {
                document.getElementById("d_2_1_tabs").style.display = "none";
                document.getElementById("d_2_3_tabs").style.display = "none";
                document.getElementById("d_2_4_tabs").style.display = "none";
                document.getElementById("d_2_2_tabs").style.display = "block";
//button background color
				document.getElementById("colorDrink").style.backgroundColor = "#90E17A";
				document.getElementById("colorDesert").style.backgroundColor = "#E6F5FF";
				document.getElementById("colorBarbecue").style.backgroundColor ="#E6F5FF";
				document.getElementById("colorVegetable").style.backgroundColor = "#E6F5FF";
//button border color
				document.getElementById("colorDrink").style.borderColor = "#90E17A";
				document.getElementById("colorDesert").style.borderColor = "#E6F5FF";
				document.getElementById("colorBarbecue").style.borderColor = "#E6F5FF";
				document.getElementById("colorVegetable").style.borderColor = "#E6F5FF";
}
function hide20_3() {
                document.getElementById("d_2_1_tabs").style.display = "none";
                document.getElementById("d_2_2_tabs").style.display = "none";
                document.getElementById("d_2_4_tabs").style.display = "none";
                document.getElementById("d_2_3_tabs").style.display = "block";
//button background color
				document.getElementById("colorVegetable").style.backgroundColor = "#90E17A";
				document.getElementById("colorDesert").style.backgroundColor = "#E6F5FF";
				document.getElementById("colorBarbecue").style.backgroundColor = "#E6F5FF";
				document.getElementById("colorDrink").style.backgroundColor = "#E6F5FF";
//button border color
				document.getElementById("colorVegetable").style.borderColor = "#90E17A";
				document.getElementById("colorDesert").style.borderColor = "#E6F5FF";
				document.getElementById("colorBarbecue").style.borderColor = "#E6F5FF";
				document.getElementById("colorDrink").style.borderColor = "#E6F5FF";
}
function hide20_4() {
                document.getElementById("d_2_1_tabs").style.display = "none";
                document.getElementById("d_2_2_tabs").style.display = "none";
                document.getElementById("d_2_3_tabs").style.display = "none";
                document.getElementById("d_2_4_tabs").style.display = "block";
//button background color
				document.getElementById("colorDesert").style.backgroundColor = "#90E17A";
				document.getElementById("colorBarbecue").style.backgroundColor = "#E6F5FF";
				document.getElementById("colorDrink").style.backgroundColor = "#E6F5FF";
				document.getElementById("colorVegetable").style.backgroundColor = "#E6F5FF";
//button border color
				document.getElementById("colorDesert").style.borderColor = "#90E17A";
				document.getElementById("colorVegetable").style.borderColor = "#E6F5FF";
				document.getElementById("colorBarbecue").style.borderColor = "#E6F5FF";
				document.getElementById("colorDrink").style.borderColor = "#E6F5FF";
}

                
             


// Armine Calculator

/*function participants2()
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
	 var participantsInput3 = document.getElementById('participantsInput3').value;

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
	 var participantsInput3 = document.getElementById('participantsInput3').value;
	 var participantsInput4 = document.getElementById('participantsInput4').value;

	 var tempSum =Number(participantsInput2) + Number(participantsInput3) + Number(participantsInput4);

		if (Number(participantsInput1) < tempSum)
    	        {
			 window.alert("Error: Դուք մտցրել եք սխալ տվյալ։ Մասնակիցների ընդհանուր քանակը " + Number(participantsInput1)+  " է։"); 
			 document.getElementById("participantsInput4").value = "";
    		}		

}*/ 

// functions for barbecue

// define global variables for initialize totalParticipants  
function initializeDinner(name)
{
	switch(name)
	{
		case pig:
			if (document.getElementById("pig").checked == true)	
			{
				document.getElementById("kgPig").value = Math.round(0.25*(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))*2)/2; 
//				document.getElementById("kgPig").value = 1; 		
				document.getElementById("drPig").value = 3800;
				document.getElementById("drPig").disabled = false;
				document.getElementById("kgPig").disabled = false;
				
			}
			else 
			{
				document.getElementById("kgPig").value = "0";
				document.getElementById("drPig").value = "";
				document.getElementById("drPig").disabled = true;
				document.getElementById("kgPig").disabled = true;
					
			} 
            break;
	    case lamb:
			if (document.getElementById("lamb").checked == true)	
			{
				document.getElementById("kgLamb").value = Math.round(0.25 *(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))*2)/2;
//				document.getElementById("kgLamb").value = 1;
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
                		document.getElementById("kgGoat").value = Math.round(0.25 *(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))*2)/2;
//				document.getElementById("kgGoat").value = 1;
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
				document.getElementById("kgChicken").value = Math.round(0.25 *(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))*2)/2;
//				document.getElementById("kgChicken").value = 1;
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
				document.getElementById("kgWing").value = Math.round(0.25 *(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))*2)/2;
//				document.getElementById("kgWing").value = 1;
				document.getElementById("drWing").value = 1600;
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
				document.getElementById("kgHaunch").value = Math.round(0.25 *(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))*2)/2;
//				document.getElementById("kgHaunch").value = 1;
				document.getElementById("drHaunch").value = 1600;
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
	    case sausage:
			if (document.getElementById("sausage").checked == true)	
			{
				document.getElementById("kgSausage").value = Math.round(0.2*(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))*2)/2;
//				document.getElementById("kgSausage").value = 1;
				document.getElementById("drSausage").value = 1700;
				document.getElementById("drSausage").disabled = false;
				document.getElementById("kgSausage").disabled = false;
			}
			else 
			{
				document.getElementById("kgSausage").value = "";
				document.getElementById("drSausage").value = "";
				document.getElementById("drSausage").disabled = true;
				document.getElementById("kgSausage").disabled = true;
			} 
	     break;
             case frankfurter:
                        if (document.getElementById("frankfurter").checked == true) 
                        {
                                document.getElementById("kgFrankfurter").value = Math.round(0.2*(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))*2)/2;
//				document.getElementById("kgFrankfurter").value = 1;
                                document.getElementById("drFrankfurter").value = 1000;
                                document.getElementById("drFrankfurter").disabled = false;
                                document.getElementById("kgFrankfurter").disabled = false;
                        }
                        else
                        {
                                document.getElementById("kgFrankfurter").value = "";
                                document.getElementById("drFrankfurter").value = "";
                                document.getElementById("drFrankfurter").disabled = true;
                                document.getElementById("kgFrankfurter").disabled = true;
                        }

            break;
	    case anvil: 
			if (document.getElementById("anvil").checked == true)	
			{
				document.getElementById("kgAnvil").value = Math.round(0.2*(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))*2)/2;
//				document.getElementById("kgAnvil").value = 1;
				document.getElementById("drAnvil").value = 1000;
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
				document.getElementById("kgInternal_organs").value = Math.round(0.25 *(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))*2)/2;
//				document.getElementById("kgInternal_organs").value = 1;
				document.getElementById("drInternal_organs").value = 1000;
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
			        document.getElementById("kgEtc").value = "";
				document.getElementById("drEtc").value = "";	
				document.getElementById("name").value = "";
				document.getElementById("drEtc").disabled = true;
				document.getElementById("kgEtc").disabled = true;
				document.getElementById("name").disabled = true;
			}
	   break;
       	   case tomato:
             		if (document.getElementById("tomato").checked == true)
            		{
            	        	document.getElementById("kgTomato").value = 0.5 *(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value));
//				document.getElementById("kgTomato").value = 1;
                		document.getElementById("drTomato").value = 300;
                		document.getElementById("drTomato").disabled = false;
                		document.getElementById("kgTomato").disabled = false;
            		}	
            		else
            		{
            			document.getElementById("kgTomato").value = "";
               	 		document.getElementById("drTomato").value = "";
                		document.getElementById("drTomato").disabled = true;
                		document.getElementById("kgTomato").disabled = true;
            		}	
            break;
       	    case cucumbers:
           	 	if (document.getElementById("cucumbers").checked == true)
            		{
            			document.getElementById("kgCucumbers").value = Math.round(0.25 *(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))*2)/2;
//				document.getElementById("kgCucumbers").value = 1;
            			document.getElementById("drCucumbers").value = 400;
            			document.getElementById("drCucumbers").disabled = false;
            			document.getElementById("kgCucumbers").disabled = false;
            		}
            		else
            		{
            			document.getElementById("kgCucumbers").value = "";
            			document.getElementById("drCucumbers").value = "";
            			document.getElementById("drCucumbers").disabled = true;
            			document.getElementById("kgCucumbers").disabled = true;
            		}	
            break;
       	    case eggplant:
           		if (document.getElementById("eggplant").checked == true)
            		{
            			document.getElementById("kgEggplant").value = Math.round(0.2*(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))*2)/2;
//			document.getElementById("kgEggplant").value = 1;
            		document.getElementById("drEggplant").value = 500;
            		document.getElementById("drEggplant").disabled = false;
            		document.getElementById("kgEggplant").disabled = false;
            		}
            		else
            		{
            		document.getElementById("kgEggplant").value = "";
            		document.getElementById("drEggplant").value = "";
            		document.getElementById("drEggplant").disabled = true;
            		document.getElementById("kgEggplant").disabled = true;
            		}
            break;
       	    case onion:
           	 	if (document.getElementById("onion").checked == true)
            		{
//            		document.getElementById("kgOnion").value = 1; 
            		document.getElementById("drOnion").value = 350;
            		document.getElementById("drOnion").disabled = false;
            		document.getElementById("kgOnion").disabled = false;
            		}
            		else
            		{
            		document.getElementById("kgOnion").value = "";
            		document.getElementById("drOnion").value = "";
            		document.getElementById("drOnion").disabled = true;
            		document.getElementById("kgOnion").disabled = true;
            		}
            break;
       	    case greens:
            		if (document.getElementById("greens").checked == true)
            		{
            		document.getElementById("punjGreens").value = Math.round(0.1 *(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))*2)/2; 
//			document.getElementById("punjGreens").value = 1;
            		document.getElementById("drGreens").value = 250;
            		document.getElementById("drGreens").disabled = false;
            		document.getElementById("punjGreens").disabled = false;
            		}
            		else
            		{
            		document.getElementById("punjGreens").value = "";
            		document.getElementById("drGreens").value = "";
            		document.getElementById("drGreens").disabled = true;
            		document.getElementById("punjGreens").disabled = true;
            		}
	     break;
             case potatoes:
                        if (document.getElementById("potatoes").checked == true)
                        {
                        document.getElementById("kgPotatoes").value = Math.round(0.1 *(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))*2)/2;
//			document.getElementById("kgPotatoes").value = 1;
                        document.getElementById("drPotatoes").value = 200;
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
            case pepper:
                        if (document.getElementById("pepper").checked == true)
                        {
                        document.getElementById("kgPepper").value = Math.round(0.1 *(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))*2)/2;
//			document.getElementById("kgPepper").value = 1;
                        document.getElementById("drPepper").value = 450;
                        document.getElementById("drPepper").disabled = false;
                        document.getElementById("kgPepper").disabled = false;
                        }
                        else
                        {
                        document.getElementById("kgPepper").value = "";
                        document.getElementById("drPepper").value = "";
                        document.getElementById("drPepper").disabled = true;
                        document.getElementById("kgPepper").disabled = true;
                        }


            break;
       	    case etcVegetable:
            		if (document.getElementById("etcVegetable").checked == true)
            		{
            		document.getElementById("drEtcVegetable").disabled = false;
            		document.getElementById("kgEtcVegetable").disabled = false;
            		document.getElementById("nameVegetable").disabled = false;
            		}
            		else
            		{
            		document.getElementById("kgEtcVegetable").value = "";
			document.getElementById("drEtcVegetable").value = "";
			document.getElementById("nameVegetable").value = "";
        	    	document.getElementById("drEtcVegetable").disabled = true;
            		document.getElementById("kgEtcVegetable").disabled = true;
            		document.getElementById("nameVegetable").disabled = true;
            		}
	    break;
            case sweetmeat:
            		if (document.getElementById("sweetmeat").checked == true)
            		{
//            		document.getElementById("kgSweetmeat").value = 1;
            		document.getElementById("drSweetmeat").value = 2300;
            		document.getElementById("drSweetmeat").disabled = false;
            		document.getElementById("kgSweetmeat").disabled = false;
            		}
            		else
            		{
            		document.getElementById("kgSweetmeat").value = "";
            		document.getElementById("drSweetmeat").value = "";
            		document.getElementById("drSweetmeat").disabled = true;
            		document.getElementById("kgSweetmeat").disabled = true;
            		}	
            break;
            case chocolates:
            		if (document.getElementById("chocolates").checked == true)
            		{
            		document.getElementById("kgChocolates").value = 1;
            		document.getElementById("drChocolates").value = 3000;
            		document.getElementById("drChocolates").disabled = false;
            		document.getElementById("kgChocolates").disabled = false;
            		}
            		else
            		{
            		document.getElementById("kgChocolates").value = "";
            		document.getElementById("drChocolates").value = "";
            		document.getElementById("drChocolates").disabled = true;
            		document.getElementById("kgChocolates").disabled = true;
            		}
	    break;
       	    case lobe:
            		if (document.getElementById("lobe").checked == true)
            		{
//            		document.getElementById("kgLobe").value = 1;
            		document.getElementById("drLobe").value = 450;
            		document.getElementById("drLobe").disabled = false;
            		document.getElementById("kgLobe").disabled = false;
            		}
            		else
            		{
            		document.getElementById("kgLobe").value = "";
            		document.getElementById("drLobe").value = "";
            		document.getElementById("drLobe").disabled = true;
            		document.getElementById("kgLobe").disabled = true;
            		}
            break;
            case tea:
            		if (document.getElementById("tea").checked == true)
            		{
//            		document.getElementById("tupTea").value = 1;
            		document.getElementById("drTea").value = 450;
            		document.getElementById("drTea").disabled = false;
            		document.getElementById("tupTea").disabled = false;
            		}
            		else
            		{
            		document.getElementById("tupTea").value = "";
           	 	document.getElementById("drTea").value = "";
           	 	document.getElementById("drTea").disabled = true;
           	 	document.getElementById("tupTea").disabled = true;
           		 }
            break;
       	    case coffee:
         		if (document.getElementById("coffee").checked == true)
            		{
//            		document.getElementById("tupCoffee").value = 1;
            		document.getElementById("drCoffee").value = 350;
            		document.getElementById("drCoffee").disabled = false;
            		document.getElementById("tupCoffee").disabled = false;
            		}	
            		else
            		{
            		document.getElementById("tupCoffee").value = "";
            		document.getElementById("drCoffee").value = "";
            		document.getElementById("drCoffee").disabled = true;
            		document.getElementById("tupCoffee").disabled = true;
            		}
	    break;
       	    case Instant_coffee:
            		if (document.getElementById("Instant_coffee").checked == true)
            		{
            		document.getElementById("hatInstant_coffee").value =(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value));
//			document.getElementById("hatInstant_coffee").value = 1;
            		document.getElementById("drInstant_coffee").value = 70;
            		document.getElementById("drInstant_coffee").disabled = false;
            		document.getElementById("hatInstant_coffee").disabled = false;
            		}
            		else
            		{
            		document.getElementById("hatInstant_coffee").value = "";
            		document.getElementById("drInstant_coffee").value = "";
            		document.getElementById("drInstant_coffee").disabled = true;
            		document.getElementById("hatInstant_coffee").disabled = true;
            		}
            break;
            case hotel:
            		if (document.getElementById("hotel").checked == true)
            		{
            		document.getElementById("hamarHotel").value = 1;
            		document.getElementById("drHotel").value = 0;
            		document.getElementById("drHotel").disabled = false;
            		document.getElementById("hamarHotel").disabled = false;
            		}
            		else
            		{
            		document.getElementById("hamarHotel").value = "";
            		document.getElementById("drHotel").value = "";
            		document.getElementById("drHotel").disabled = true;
            		document.getElementById("hamarHotel").disabled = true;
            		}
	    break;
            case tent:
            		if (document.getElementById("tent").checked == true)
            		{
            		document.getElementById("qanakTent").value = 1;
            	        document.getElementById("drTent").value = 0 ;
                	document.getElementById("drTent").disabled = false;
                	document.getElementById("qanakTent").disabled = false;
            		}
            		else
            		{
            		document.getElementById("qanakTent").value = "";
                	document.getElementById("drTent").value = "";
                	document.getElementById("drTent").disabled = true;
                	document.getElementById("qanakTent").disabled = true;
            		}	
	    break;
            case etcOvernight:
            		if (document.getElementById("etcOvernight").checked == true)
            		{
                	document.getElementById("drEtcOvernight").disabled = false;
                	document.getElementById("qanakEtcOvernight").disabled = false;
                	document.getElementById("nameOvernight").disabled = false;
            		}
            		else
            		{
                	document.getElementById("qanakEtcOvernight").value = "";
                	document.getElementById("drEtcOvernight").value = "";
                	document.getElementById("drEtcOvernight").disabled = true;
                	document.getElementById("qanakEtcOvernight").disabled = true;
                	document.getElementById("nameOvernight").disabled = true;
            		}
	    break;
            case salt:
                        if (document.getElementById("salt").checked == true)
                        {
                        document.getElementById("tupSalt").value =2*(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value));
//			document.getElementById("tupSalt").value = 1;
                        document.getElementById("drSalt").value = 200;
                        document.getElementById("drSalt").disabled = false;
                        document.getElementById("tupSalt").disabled = false;
                        }
                        else
                        {
                        document.getElementById("tupSalt").value = "";
                        document.getElementById("drSalt").value = "";
                        document.getElementById("drSalt").disabled = true;
                        document.getElementById("tupSalt").disabled = true;
                        }
	    break;
            case ground_pepper:
                        if (document.getElementById("ground_pepper").checked == true)
                        {
                        document.getElementById("tupGround_pepper").value =2*(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value));
//			document.getElementById("tupGround_pepper").value = 1;
                        document.getElementById("drGround_pepper").value = 150;
                        document.getElementById("drGround_pepper").disabled = false;
                        document.getElementById("tupGround_pepper").disabled = false;
                        }
                        else
                        {
                        document.getElementById("tupGround_pepper").value = "";
                        document.getElementById("drGround_pepper").value = "";
                        document.getElementById("drGround_pepper").disabled = true;
                        document.getElementById("tupGround_pepper").disabled = true;
                        }

            break; 			
	    case utensil:
            		if (document.getElementById("utensil").checked == true)
            		{
                	document.getElementById("qanakUtensil").value=3*(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value));
//			document.getElementById("qanakUtensil").value = 1;
                	document.getElementById("drUtensil").value = 5000;
                	document.getElementById("drUtensil").disabled = false;
                	document.getElementById("qanakUtensil").disabled = false;
            		}
            		else
            		{
                	document.getElementById("qanakUtensil").value = "";
                	document.getElementById("drUtensil").value = "";
                	document.getElementById("drUtensil").disabled = true;
                	document.getElementById("qanakUtensil").disabled = true;
            		}
            break;
	    case skewer:
            		if (document.getElementById("skewer").checked == true)
            		{
                	document.getElementById("qanakSkewer").value =2*(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value));
                	document.getElementById("drSkewer").value =0;
                	document.getElementById("drSkewer").disabled = false;
                	document.getElementById("qanakSkewer").disabled = false;
            		}
            		else
            		{
                	document.getElementById("qanakSkewer").value = "";
                	document.getElementById("drSkewer").value = "";
                	document.getElementById("drSkewer").disabled = true;
                	document.getElementById("qanakSkewer").disabled = true;
            		}
	     break;
            case pouch:
                        if (document.getElementById("pouch").checked == true)
                        {
//                        document.getElementById("hatPouch").value = 1;
                        document.getElementById("drPouch").value =100;
                        document.getElementById("drPouch").disabled = false;
                        document.getElementById("hatPouch").disabled = false;
                        }
                        else
                        {
                        document.getElementById("hatPouch").value = "";
                        document.getElementById("drPouch").value = "";
                        document.getElementById("drPouch").disabled = true;
                        document.getElementById("hatPouch").disabled = true;
                        }
	
            break; 
	    case etcAccessories:
            		if (document.getElementById("etcAccessories").checked == true)
            		{
                	document.getElementById("drEtcAccessories").disabled = false;
                	document.getElementById("qanakEtcAccessories").disabled = false;
                	document.getElementById("nameAccessories").disabled = false;
            		}
            		else
            		{
                	document.getElementById("qanakEtcAccessories").value = "";
                	document.getElementById("drEtcAccessories").value = "";
					document.getElementById("nameAccessories").value = '';
                	document.getElementById("drEtcAccessories").disabled = true;
                	document.getElementById("qanakEtcAccessories").disabled = true;
                	document.getElementById("nameAccessories").disabled = true;
            		}
	    break;
            case buttermilk:
                        if (document.getElementById("buttermilk").checked == true)
                        {
                        document.getElementById("hatButtermilk").value =2*(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value));
//			document.getElementById("hatButtermilk").value = 1;
                        document.getElementById("drButtermilk").value = 180;
                        document.getElementById("drButtermilk").disabled = false;
                        document.getElementById("hatButtermilk").disabled = false;
                        }
                        else
                        {
                        document.getElementById("hatButtermilk").value = "";
                        document.getElementById("drButtermilk").value = "";
                        document.getElementById("drButtermilk").disabled = true;
                        document.getElementById("hatButtermilk").disabled = true;
                        }

	   break;
           case etcDrink:
                        if (document.getElementById("etcDrink").checked == true)
                        {
                        document.getElementById("drEtcDrink").disabled = false;
                        document.getElementById("hatEtcDrink").disabled = false;
                        document.getElementById("nameEtcDrink").disabled = false;
                        }
                        else
                        {
                        document.getElementById("hatEtcDrink").value = "";
                        document.getElementById("drEtcDrink").value = "";
						document.getElementById("nameEtcDrink").value = '';
                        document.getElementById("drEtcDrink").disabled = true;
                        document.getElementById("hatEtcDrink").disabled = true;
                        document.getElementById("nameEtcDrink").disabled = true;
                        }
	   break;
           case etcDesert:
                        if (document.getElementById("etcDesert").checked == true)
                        {
                        document.getElementById("drEtcDesert").disabled = false;
                        document.getElementById("kgEtcDesert").disabled = false;
                        document.getElementById("nameEtcDesert").disabled = false;
                        }
                        else
                        {
                        document.getElementById("kgEtcDesert").value = "";
                        document.getElementById("drEtcDesert").value = "";
						document.getElementById("nameEtcDesert").value = '';
                        document.getElementById("drEtcDesert").disabled = true;
                        document.getElementById("kgEtcDesert").disabled = true;
                        document.getElementById("nameEtcDesert").disabled = true;
                        }
            break;
	    default: 
			window.alert("This is default value.");
			break;
   	}
}

// price function returns = kg*dr
function price(name) 
{
	switch(name)
	{
		case pig:
				document.getElementById("pig_price").value = "= " + document.getElementById("kgPig").value * document.getElementById("drPig").value;
		break;
		case lamb:
			document.getElementById("lamb_price").value = "= " + document.getElementById("kgLamb").value * document.getElementById("drLamb").value;
			break;
		case goat:
			document.getElementById("goat_price").value = "= " + document.getElementById("kgGoat").value * document.getElementById("drGoat").value;
			break;
		case chicken: 
			document.getElementById("chicken_price").value = "= " + document.getElementById("kgChicken").value * document.getElementById("drChicken").value;
			break;
		case wing: 
			document.getElementById("wing_price").value = "= " + document.getElementById("kgWing").value * document.getElementById("drWing").value;
			break;
		case haunch: 
			document.getElementById("haunch_price").value = "= " + document.getElementById("kgHaunch").value * document.getElementById("drHaunch").value;
			break;
		case sausage: 
			document.getElementById("sausage_price").value = "= " + document.getElementById("kgSausage").value * document.getElementById("drSausage").value;
		 case frankfurter: 
                        document.getElementById("frankfurter_price").value = "= " + document.getElementById("kgFrankfurter").value * document.getElementById("drFrankfurter").value;
			break;
		case anvil: 
			document.getElementById("anvil_price").value = "= " + document.getElementById("kgAnvil").value * document.getElementById("drAnvil").value;
			break;
		case internal_organs: 
			document.getElementById("internal_organs_price").value = "= " + document.getElementById("kgInternal_organs").value * document.getElementById("drInternal_organs").value;
			break;
		case etc:
			document.getElementById("etc_price").value = "= " + document.getElementById("kgEtc").value * document.getElementById("drEtc").value;
			break;
        	case tomato:
            		document.getElementById("tomato_price").value = "= " + document.getElementById("kgTomato").value * document.getElementById("drTomato").value;
            		break;
        	case cucumbers:
            		document.getElementById("cucumbers_price").value = "= " + document.getElementById("kgCucumbers").value * document.getElementById("drCucumbers").value;
            		break;
        	case eggplant:
            		document.getElementById("eggplant_price").value = "= " + document.getElementById("kgEggplant").value * document.getElementById("drEggplant").value;
            		break;
        	case onion:
            		document.getElementById("onion_price").value = "= " + document.getElementById("kgOnion").value * document.getElementById("drOnion").value;
            		break;
        	case greens:
            		document.getElementById("greens_price").value = "= " + document.getElementById("punjGreens").value * document.getElementById("drGreens").value;
			 break;
                case potatoes:
                        document.getElementById("potatoes_price").value = "= " + document.getElementById("kgPotatoes").value * document.getElementById("drPotatoes").value;
			 break;
                case pepper:
                        document.getElementById("pepper_price").value = "= " + document.getElementById("kgPepper").value * document.getElementById("drPepper").value;
            		break;
        	case etcVegetable:
            		document.getElementById("etcVegetable_price").value = "= " + document.getElementById("kgEtcVegetable").value * document.getElementById("drEtcVegetable").value;
            		break;
		case sweetmeat:
            		document.getElementById("sweetmeat_price").value = "= " + document.getElementById("kgSweetmeat").value * document.getElementById("drSweetmeat").value;
            		break;
        	case chocolates:
            		document.getElementById("chocolates_price").value = "= " + document.getElementById("kgChocolates").value * document.getElementById("drChocolates").value;
            		break;
        	case lobe:
            		document.getElementById("lobe_price").value = "= " + document.getElementById("kgLobe").value * document.getElementById("drLobe").value;
            		break;
        	case tea:
            		document.getElementById("tea_price").value = "= " + document.getElementById("tupTea").value * document.getElementById("drTea").value;
            		break;
        	case coffee:
            		document.getElementById("coffee_price").value = "= " + document.getElementById("tupCoffee").value * document.getElementById("drCoffee").value;
            		break;
        	case Instant_coffee:
            		document.getElementById("Instant_coffee_price").value = "= " + document.getElementById("hatInstant_coffee").value * document.getElementById("drInstant_coffee").value;
            		break;
		case hotel:
      	    		document.getElementById("hotel_price").value = "= " + document.getElementById("hamarHotel").value * document.getElementById("drHotel").value;
            		break; 
		case tent:
      	    		document.getElementById("tent_price").value = "= " + document.getElementById("qanakTent").value * document.getElementById("drTent").value;
            		break; 
		case etcOvernight:
      	    		document.getElementById("etcOvernight_price").value = "= " + document.getElementById("qanakEtcOvernight").value * document.getElementById("drEtcOvernight").value;
			 break;
                case salt:
                        document.getElementById("salt_price").value = "= " + document.getElementById("tupSalt").value * document.getElementById("drSalt").value;	                 break;
                case ground_pepper:
                        document.getElementById("ground_pepper_price").value = "= " + document.getElementById("tupGround_pepper").value * document.getElementById("drGround_pepper").value;
            	
			break;
		case utensil:
            		document.getElementById("utensil_price").value = "= " + document.getElementById("qanakUtensil").value * document.getElementById("drUtensil").value;
            		break;
	 	case skewer:
            		document.getElementById("skewer_price").value = "= " + document.getElementById("qanakSkewer").value * document.getElementById("drSkewer").value;
		 case pouch:
                        document.getElementById("pouch_price").value = "= " + document.getElementById("hatPouch").value * document.getElementById("drPouch").value;

            		break;
	 	case etcAccessories:
            		document.getElementById("etcAccessories_price").value = "= " + document.getElementById("qanakEtcAccessories").value * document.getElementById("drEtcAccessories").value;
			break;
                case buttermilk:
                        document.getElementById("buttermilk_price").value = "= " + document.getElementById("hatButtermilk").value * document.getElementById("drButtermilk").value;

            		break;
		case etcDrink:
                        document.getElementById("etcDrink_price").value = "= " + document.getElementById("hatEtcDrink").value * document.getElementById("drEtcDrink").value;
                        break;
		case etcDesert:
                        document.getElementById("etcDesert_price").value = "= " + document.getElementById("kgEtcDesert").value * document.getElementById("drEtcDesert").value;
                        break;
	   	default: 
		window.alert("This is default value.");
		break;
	}
}


function initializeDrink(name)
{
        switch(name)
        {
                case firstSpice:
                        if (document.getElementById("spice").checked == true)
                        {
                                document.getElementById("drSpice").disabled = false;
                                document.getElementById("amountSpice").disabled = false;

                        }
                        else
                        {
                                document.getElementById("amountSpice").value = "";
                                document.getElementById("drSpice").value = "";
                                document.getElementById("drSpice").disabled = true;
                                document.getElementById("amountSpice").disabled = true;
								
							    return;

                        }
                      	
						 document.getElementById("amountSpice").value = Math.round(0.5 *(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value)));		 
						 var x = document.getElementById("firstSpice").value;
						 switch(x)
						{
							case "Nemiroff": 
//                                document.getElementById("amountSpice").value = 1;
                                document.getElementById("drSpice").value = 2700;
						    break;
                            
							case "Talka":
//                                document.getElementById("amountSpice").value = 1;
                                document.getElementById("drSpice").value = 1850;
					        break;

							case "5_ozer":
//                                document.getElementById("amountSpice").value = 1;
                                document.getElementById("drSpice").value = 800;
					        break;
						
							case "Artsakh":	
//                                document.getElementById("amountSpice").value = 1;
                                document.getElementById("drSpice").value = 1400;
					        break;

							case "Zima":
//                                document.getElementById("amountSpice").value = 1;
								document.getElementById("drSpice").value =1680 ;
							break;
							case "EtcSpice":
                                document.getElementById("drSpice").disabled = false;
                                document.getElementById("amountSpice").disabled = false;
                                document.getElementById("amountSpice").value = "";
								document.getElementById("drSpice").value = "";
					        break;
					        
								
							default: 
								window.alert("Nemiroff forever!");
								break;
                     
						}
				break;


                  case secondSpice:
                        if (document.getElementById("wine").checked == true)
                        {
                                document.getElementById("drWine").disabled = false;
                                document.getElementById("amountWine").disabled = false;

                        }
                        else
                        {
                                document.getElementById("amountWine").value = "";
                                document.getElementById("drWine").value = "";
                                document.getElementById("drWine").disabled = true;
                                document.getElementById("amountWine").disabled = true;
								
							    return;

                        }
                       
						 document.getElementById("amountWine").value = Math.round(0.25 *(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value)));
						 x = document.getElementById("secondSpice").value;
						 switch(x)
						{
							case "Armenia": 
//                                document.getElementById("amountWine").value = 1;
                                document.getElementById("drWine").value = 1720;
						    break;
                            
							case "Areni":
        //                        document.getElementById("amountWine").value = 1;
                                document.getElementById("drWine").value = 1600;
					        break;

							case "Kagor":
        //                        document.getElementById("amountWine").value = 1;
                                document.getElementById("drWine").value = 1700;
					        break;
						
							case "Sapiravi":	
//                                document.getElementById("amountWine").value = 1;
                                document.getElementById("drWine").value = 1450;
					        break;

							case "Shushi":
//                                document.getElementById("amountWine").value = 1;
                                document.getElementById("drWine").value = 1750;
					        break;
							
                            case "EtcWine":
                                document.getElementById("drWine").disabled = false;
                                document.getElementById("amountWine").disabled = false;
                                document.getElementById("amountWine").value = "";
								document.getElementById("drWine").value = "";
								break; 
							default: 
								window.alert("Nemiroff forever!");
								break;
                     
						}
        	    break;
                  case thirdSpice:
                        if (document.getElementById("beer").checked == true)
                        {
                                document.getElementById("drBeer").disabled = false;
                                document.getElementById("amountBeer").disabled = false;

                        }
                        else
                        {
                                document.getElementById("amountBeer").value = "";
                                document.getElementById("drBeer").value = "";
                                document.getElementById("drBeer").disabled = true;
                                document.getElementById("amountBeer").disabled = true;
								
							    return;

                        }
                     	 document.getElementById("amountBeer").value =(Number(document.getElementById("participantsInput2").value)*3 + Number(document.getElementById("participantsInput3").value));  
						 x = document.getElementById("thirdSpice").value;
						 switch(x)
						{
							case "Gyumri": 
//                                document.getElementById("amountBeer").value = 1;
                                document.getElementById("drBeer").value = 430;
						    break;
                            
							case "Miller":
//                                document.getElementById("amountBeer").value = 1;
                                document.getElementById("drBeer").value = 440;
					        break;

							case "Kilikia":
//                              document.getElementById("amountBeer").value =1 ;
                                document.getElementById("drBeer").value = 370;
					        break;
						
							case "Kotayk":	
//                              document.getElementById("amountBeer").value = 1;
                                document.getElementById("drBeer").value = 360;
					        break;

							case "Kellers_Gold":
//                                document.getElementById("amountBeer").value = 1;
                                document.getElementById("drBeer").value = 370;
					        break;
							
                            case "EtcBeer":
                                document.getElementById("drBeer").disabled = false;
                                document.getElementById("amountBeer").disabled = false;
                                document.getElementById("amountBeer").value = "";
								document.getElementById("drBeer").value = "";
								break; 
							default: 
								window.alert("Nemiroff forever!");
								break;
                     
						}
        	    break;
                  case fourthSpice:
                        if (document.getElementById("juice").checked == true)
                        {
                                document.getElementById("drJuice").disabled = false;
                                document.getElementById("amountJuice").disabled = false;

                        }
                        else
                        {
                                document.getElementById("amountJuice").value = "";
                                document.getElementById("drJuice").value = "";
                                document.getElementById("drJuice").disabled = true;
                                document.getElementById("amountJuice").disabled = true;
								
							    return;

                        }
                      
						 document.getElementById("amountJuice").value = Math.round(0.5 *(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))); 
						 x = document.getElementById("fourthSpice").value;
						 switch(x)
						{
							case "Menq": 
//                                document.getElementById("amountJuice").value = 1;
                                document.getElementById("drJuice").value = 450;
						    break;
                            
							case "Noy":
//                                document.getElementById("amountJuice").value = 1;
                                document.getElementById("drJuice").value = 720;
					        break;

							case "Ararat":
//                               document.getElementById("amountJuice").value = 1;
                                document.getElementById("drJuice").value = 620;
					        break;
						
							case "Sis":	
//                                document.getElementById("amountJuice").value = 1;
                                document.getElementById("drJuice").value = 460;
					        break;

							case "J7":
//                                document.getElementById("amountJuice").value = 1;
                                document.getElementById("drJuice").value = 850;
					        break;
							
                            case "EtcJuice":
                                document.getElementById("drJuice").disabled = false;
                                document.getElementById("amountJuice").disabled = false;
                                document.getElementById("amountJuice").value = "";
								document.getElementById("drJuice").value = "";
								break; 
							default: 
								window.alert("Nemiroff forever!");
								break;
                     
						}
        	    break;
                  case fifthSpice:
                        if (document.getElementById("fizzy").checked == true)
                        {
                                document.getElementById("drFizzy").disabled = false;
                                document.getElementById("amountFizzy").disabled = false;

                        }
                        else
                        {
                                document.getElementById("amountFizzy").value = "";
                                document.getElementById("drFizzy").value = "";
                                document.getElementById("drFizzy").disabled = true;
                                document.getElementById("amountFizzy").disabled = true;
								
							    return;

                        }
                      
						 document.getElementById("amountFizzy").value = Math.round(0.5 *(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value)));
 
						 x = document.getElementById("fifthSpice").value;
						 switch(x)
						{
							case "Coca_Cola": 
//                                document.getElementById("amountFizzy").value = 1;
                                document.getElementById("drFizzy").value = 390;
						    break;
                            
							case "Fanta":
//                                document.getElementById("amountFizzy").value = 1;
                                document.getElementById("drFizzy").value = 390;
					        break;

							case "Sprite":
//                                document.getElementById("amountFizzy").value = 1;
                                document.getElementById("drFizzy").value = 390;
					        break;
						
							case "Papa_Karlo":	
//                               document.getElementById("amountFizzy").value = 1;
                                document.getElementById("drFizzy").value = 230;
					        break;

							case "Tnjri":
//                                document.getElementById("amountFizzy").value = 1;
                                document.getElementById("drFizzy").value = 190;
					        break;
							
                            case "EtcFizzy":
                                document.getElementById("drFizzy").disabled = false;
                                document.getElementById("amountFizzy").disabled = false;
                                document.getElementById("amountFizzy").value = "";
								document.getElementById("drFizzy").value = "";
								break; 
							default: 
								window.alert("Nemiroff forever!");
								break;
                     
						}
        	    break;
                  case sixthSpice:
                        if (document.getElementById("water").checked == true)
                        {
                                document.getElementById("drWater").disabled = false;
                                document.getElementById("amountWater").disabled = false;

                        }
                        else
                        {
                                document.getElementById("amountWater").value = "";
                                document.getElementById("drWater").value = "";
                                document.getElementById("drWater").disabled = true;
                                document.getElementById("amountWater").disabled = true;
								
							    return;

                        }
                      
						 document.getElementById("amountWater").value = Math.round(0.25 *(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))); 
						 x = document.getElementById("sixthSpice").value;
						 switch(x)
						{
							case "Jermuk": 
//                               document.getElementById("amountWater").value = 1;
                                document.getElementById("drWater").value = 250;
						    break;
                            
							case "Bjni":
//                                document.getElementById("amountWater").value = 1;
                                document.getElementById("drWater").value = 170;
					        break;

							case "Byuregh":
//                                document.getElementById("amountWater").value = 1;
                                document.getElementById("drWater").value = 150;
					        break;
						
							case "Noy":	
//                                document.getElementById("amountWater").value = 1;
                                document.getElementById("drWater").value = 230;
					        break;

							case "Arzni":
//                                document.getElementById("amountWater").value = 1;
                                document.getElementById("drWater").value = 170;
					        break;
							
                            case "EtcWater":
                                document.getElementById("drWater").disabled = false;
                                document.getElementById("amountWater").disabled = false;
                                document.getElementById("amountWater").value = "";
								document.getElementById("drWater").value = "";
								break; 
							default: 
								window.alert("Nemiroff forever!");
								break;
                     
			}
        	    break;
                  case fruitSelector:
                        if (document.getElementById("fruit").checked == true)
                        {
//                                document.getElementById("kgFruit").value = 1;
                                document.getElementById("drFruit").value = 1000;
                                document.getElementById("drFruit").disabled = false;
                                document.getElementById("kgFruit").disabled = false;

                        }
                        else
                        {
                                document.getElementById("kgFruit").value = "";
                                document.getElementById("drFruit").value = "";
                                document.getElementById("drFruit").disabled = true;
                                document.getElementById("kgFruit").disabled = true;
								
							    return;

                        }
                      
						 document.getElementById("kgFruit").value = Math.round(0.2*(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))*2)/2; 
						 x = document.getElementById("fruitSelector").value;
						 switch(x)
						{
							case "Apple": 
//                                document.getElementById("kgFruit").value = 1;
                                document.getElementById("drFruit").value = 250;
						    break;
                            
							case "Pear":
//                                document.getElementById("kgFruit").value = 1;
                                document.getElementById("drFruit").value = 350;
					        break;

							case "Banana":
//                                document.getElementById("kgFruit").value = 1;
                                document.getElementById("drFruit").value = 450;
					        break;
						
							case "Orange":	
//                                document.getElementById("kgFruit").value = 1;
                                document.getElementById("drFruit").value = 550;
					        break;

							case "Mandarin":
//                                document.getElementById("kgFruit").value = 1;
                                document.getElementById("drFruit").value = 650;
					        break;

							case "Cherry":
//                                document.getElementById("kgFruit").value = 1;
                                document.getElementById("drFruit").value = 750;
							break;	
							
                            case "etcFruit":
								window.alert("this is etc for Fruit!!!");
								break; 
                  		}
					break;
					
					case dessertChips:
                        if (document.getElementById("desserts").checked == true)
                        {
//                                document.getElementById("kgDesserts").value = 1;
                                document.getElementById("drDesserts").value = 1000;
                                document.getElementById("drDesserts").disabled = false;
                                document.getElementById("kgDesserts").disabled = false;

                        }
                        else
                        {
                                document.getElementById("kgDesserts").value = "";
                                document.getElementById("drDesserts").value = "";
                                document.getElementById("drDesserts").disabled = true;
                                document.getElementById("kgDesserts").disabled = true;
								
							    return;

                        }
                       
						 document.getElementById("kgDesserts").value = 1;
						 x = document.getElementById("dessertChips").value;
						 switch(x)
						{
							case "Sunflower": 
//                                document.getElementById("kgDesserts").value = 1;
                                document.getElementById("drDesserts").value = 250;
						    break;
                            
							case "Peanut":
//                                document.getElementById("kgDesserts").value = 1;
                                document.getElementById("drDesserts").value = 350;
					        break;

							case "Chips":
//                                document.getElementById("kgDesserts").value = 1;
                                document.getElementById("drDesserts").value = 450;
					        break;
						
							case "Salt_sticks":	
//                                document.getElementById("kgDesserts").value = 1;
                                document.getElementById("drDesserts").value = 550;
					        break;

							case "Popcorn":
//                                document.getElementById("kgDesserts").value = 1;
                                document.getElementById("drDesserts").value = 200;
					        break;
					/*	case "Cherry":
                                document.getElementById("kgFruit").value = 1;
                                document.getElementById("drFruit").value = 0;
							break;	*/
						
							default:	
								window.alert("Nemiroff forever!");
								break;
                     
						}
        //	    break;

		  break;
                  case breadSelector:
                        if (document.getElementById("bread").checked == true)
                        {
                                document.getElementById("drBread").disabled = false;
                                document.getElementById("hatBread").disabled = false;

                        }
                        else
                        {
                                document.getElementById("hatBread").value = "";
                                document.getElementById("drBread").value = "";
                                document.getElementById("drBread").disabled = true;
                                document.getElementById("hatBread").disabled = true;

                                return;
                                   
                        }                          

			  x = document.getElementById("breadSelector").value;
			  document.getElementById("hatBread").value = Math.round(0.5*(Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value)));

			switch(x) 
			{
			case "Lavash":
//                                document.getElementById("hatBread").value = 1;
                                document.getElementById("drBread").value = 370;
                         break;

                         case "Matnaqash":
//                                document.getElementById("hatBread").value = 1;
                                document.getElementById("drBread").value = 130;
                         break;

                         case "Romashka":
//                                document.getElementById("hatBread").value = 1;
                                document.getElementById("drBread").value = 250;
                         break;

                         case "Baton":
//                                document.getElementById("hatBread").value = 1;
                                document.getElementById("drBread").value = 40;
                         break;
                                                     

                         case "etcBread":
                                document.getElementById("drBread").disabled = false;
                                document.getElementById("hatBread").disabled = false;
                                document.getElementById("hatBread").value = "";
								document.getElementById("drBread").value = "";
                         break;
                                }
					


            break;
		default: 
		     window.alert("..");
		break;
		
   }
}


// price function returns = kg*dr
function priceDrink(name)
{
        switch(name)
        {
				case firstSpice: 
                    document.getElementById("spice_price").value = "= " + document.getElementById("amountSpice").value * document.getElementById("drSpice").value;
				    break;
				case secondSpice: 
                        	 document.getElementById("wine_price").value = "= " + document.getElementById("amountWine").value * document.getElementById("drWine").value;
							break;
				case thirdSpice: 
                        	 document.getElementById("beer_price").value = "= " + document.getElementById("amountBeer").value * document.getElementById("drBeer").value;
							break;
				case fourthSpice: 
                        	 document.getElementById("juice_price").value = "= " + document.getElementById("amountJuice").value * document.getElementById("drJuice").value;
							break;
				case fifthSpice:
                        	document.getElementById("fizzy_price").value = "= " + document.getElementById("amountFizzy").value * document.getElementById("drFizzy").value;
							break;
				case sixthSpice:
                        	document.getElementById("water_price").value = "= " + document.getElementById("amountWater").value * document.getElementById("drWater").value;
							break;
				case fruitSelector:
                        	document.getElementById("fruit_price").value = "= " + document.getElementById("kgFruit").value * document.getElementById("drFruit").value;
							break;
				case dessertChips:
                        	document.getElementById("desserts_price").value = "= " + document.getElementById("kgDesserts").value * document.getElementById("drDesserts").value;
							break;
				case breadSelector:
                        	document.getElementById("bread_price").value = "= " + document.getElementById("hatBread").value * document.getElementById("drBread").value;
							break;

		}
 } 

//check amount of participants and display toottip 
function checkAmount(name)
{

	if ((document.getElementById("participantsInput2").value + document.getElementById("participantsInput3").value))
		return true;

	//window.alert("name");
    switch(name)
	{ 
		 case butTransport: 
			document.getElementById('toolTipID').style.left='33.3%';
	//		window.alert("transport default");
			break; 
		case butDinner: 
			document.getElementById('toolTipID').class='extra';
			document.getElementById('toolTipID').style.left='40.7%';
	//		window.alert("dinner");
			break; 
		case butOvernight:
			document.getElementById('toolTipID').class='extra';
			document.getElementById('toolTipID').style.left='48.4%';
	//		window.alert("overnight");
			break; 
		case butAccessories: 
			document.getElementById('toolTipID').class='extra';
			document.getElementById('toolTipID').style.left='56.35%';
	  //  	window.alert("accessories");
			break;
	} 
	
	document.getElementById('toolTipID').style.display='block';
	
	return false;
}
