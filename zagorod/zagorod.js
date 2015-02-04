/* Ashot_Erik */
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
function hide1_6() {
                document.getElementById("a").style.display = "none";
                document.getElementById("BARBECUE").style.display = "none";
}
function hide20_1() {
                document.getElementById("a").style.display = "block";
                document.getElementById("BARBECUE").style.display = "none";
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
		var participantsInput3 = document.getElementById('participantsInput3').value;
		var participantsInput4 = document.getElementById('participantsInput4').value;

		var tempSum =Number(participantsInput2) + Number(participantsInput3) + Number(participantsInput4);

		if (Number(participantsInput1) < tempSum)
    	{
			 window.alert("Error: Դուք մտցրել եք սխալ տվյալ։ Մասնակիցների ընդհանուր քանակը " + Number(participantsInput1)+  " է։"); 
			 document.getElementById("participantsInput4").value = "";
    	}		

}

// functions for barbecue 
function initializeDinner(name)
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
			    document.getElementById("kgEtc").value = "";
				document.getElementById("drEtc").value = "";	
				document.getElementById("drEtc").disabled = true;
				document.getElementById("kgEtc").disabled = true;
				document.getElementById("name").disabled = true;
			}
	   		break;
       case tomato:
            if (document.getElementById("tomato").checked == true)
            {
            	document.getElementById("kgTomato").value = 1;
                document.getElementById("drTomato").value = 1000;
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
            	document.getElementById("kgCucumbers").value = 1;
            	document.getElementById("drCucumbers").value = 1000;
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
            	document.getElementById("kgEggplant").value = 1;
            	document.getElementById("drEggplant").value = 1000;
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
            	document.getElementById("kgOnion").value = 1;
            	document.getElementById("drOnion").value = 1000;
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
            	document.getElementById("kgGreens").value = 5;
            	document.getElementById("drGreens").value = 1000;
            	document.getElementById("drGreens").disabled = false;
            	document.getElementById("kgGreens").disabled = false;
            }
            else
            {
            	document.getElementById("kgGreens").value = "";
            	document.getElementById("drGreens").value = "";
            	document.getElementById("drGreens").disabled = true;
            	document.getElementById("kgGreens").disabled = true;
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
            	document.getElementById("drEtcVegetable").disabled = true;
            	document.getElementById("kgEtcVegetable").disabled = true;
            	document.getElementById("nameVegetable").disabled = true;
            }
	        break;
       case sweetmeat:
            if (document.getElementById("sweetmeat").checked == true)
            {
            	document.getElementById("kgSweetmeat").value = 1;
            	document.getElementById("drSweetmeat").value = 1000;
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
            	document.getElementById("drChocolates").value = 1000;
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
            	document.getElementById("kgLobe").value = 1;
            	document.getElementById("drLobe").value = 1000;
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
            	document.getElementById("kgTea").value = 1;
            	document.getElementById("drTea").value = 1000;
            	document.getElementById("drTea").disabled = false;
            	document.getElementById("kgTea").disabled = false;
            }
            else
            {
            	document.getElementById("kgTea").value = "";
            	document.getElementById("drTea").value = "";
            	document.getElementById("drTea").disabled = true;
            	document.getElementById("kgTea").disabled = true;
            }
            break;
       case coffee:
            if (document.getElementById("coffee").checked == true)
            {
            	document.getElementById("kgCoffee").value = 1;
            	document.getElementById("drCoffee").value = 1000;
            	document.getElementById("drCoffee").disabled = false;
            	document.getElementById("kgCoffee").disabled = false;
            }
            else
            {
            	document.getElementById("kgCoffee").value = "";
            	document.getElementById("drCoffee").value = "";
            	document.getElementById("drCoffee").disabled = true;
            	document.getElementById("kgCoffee").disabled = true;
            }
	        break;
       case Instant_coffee:
            if (document.getElementById("Instant_coffee").checked == true)
            {
            	document.getElementById("hatInstant_coffee").value = 1;
            	document.getElementById("drInstant_coffee").value = 1000;
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
            	document.getElementById("drHotel").value = 2100;
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
                document.getElementById("drTent").value = 2100;
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
		case potatoes: 
			document.getElementById("potatoes_price").value = "= " + document.getElementById("kgPotatoes").value * document.getElementById("drPotatoes").value;
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
           document.getElementById("greens_price").value = "= " + document.getElementById("kgGreens").value * document.getElementById("drGreens").value;
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
         document.getElementById("tea_price").value = "= " + document.getElementById("kgTea").value * document.getElementById("drTea").value;
         break;
      case coffee:
         document.getElementById("coffee_price").value = "= " + document.getElementById("kgCoffee").value * document.getElementById("drCoffee").value;
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
                                document.getElementById("amountSpice").value = 1;
                                document.getElementById("drSpice").value = 1000;
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
                       
						 var x = document.getElementById("firstSpice").value;
						 switch(x)
						{
							case "Nemiroff": 
                                document.getElementById("amountSpice").value = 2;
                                document.getElementById("drSpice").value = 250;
						    break;
                            
							case "Talka":
                                document.getElementById("amountSpice").value = 3;
                                document.getElementById("drSpice").value = 350;
					        break;

							case "5_ozer":
                                document.getElementById("amountSpice").value = 4;
                                document.getElementById("drSpice").value = 450;
					        break;
						
							case "Artsakh":	
                                document.getElementById("amountSpice").value = 5;
                                document.getElementById("drSpice").value = 550;
					        break;

							case "Zima":
                                document.getElementById("amountSpice").value = 6;
                                document.getElementById("drSpice").value = 650;
					        break;
							default: 
								window.alert("Nemiroff forever!");
								break;
                     
						}
				break;


                  case secondSpice:
                        if (document.getElementById("wine").checked == true)
                        {
                                document.getElementById("amountWine").value = 1;
                                document.getElementById("drWine").value = 1000;
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
                       
						 x = document.getElementById("secondSpice").value;
						 switch(x)
						{
							case "Armenia": 
                                document.getElementById("amountWine").value = 2;
                                document.getElementById("drWine").value = 250;
						    break;
                            
							case "Areni":
                                document.getElementById("amountWine").value = 3;
                                document.getElementById("drWine").value = 350;
					        break;

							case "Kagor":
                                document.getElementById("amountWine").value = 4;
                                document.getElementById("drWine").value = 450;
					        break;
						
							case "Sapiravi":	
                                document.getElementById("amountWine").value = 5;
                                document.getElementById("drWine").value = 550;
					        break;

							case "Shushi":
                                document.getElementById("amountWine").value = 6;
                                document.getElementById("drWine").value = 650;
					        break;
							
                            case "etcWine":
								window.alert("this is etc for wine!!!");
								break; 
							default: 
								window.alert("Nemiroff forever!");
								break;
                     
						}
        	    break;
                  case thirdSpice:
                        if (document.getElementById("beer").checked == true)
                        {
                                document.getElementById("amountBeer").value = 1;
                                document.getElementById("drBeer").value = 1000;
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
                       
						 x = document.getElementById("thirdSpice").value;
						 switch(x)
						{
							case "Gyumri": 
                                document.getElementById("amountBeer").value = 2;
                                document.getElementById("drBeer").value = 250;
						    break;
                            
							case "Miller":
                                document.getElementById("amountBeer").value = 3;
                                document.getElementById("drBeer").value = 350;
					        break;

							case "Kilikia":
                                document.getElementById("amountBeer").value = 4;
                                document.getElementById("drBeer").value = 450;
					        break;
						
							case "Kotayk":	
                                document.getElementById("amountBeer").value = 5;
                                document.getElementById("drBeer").value = 550;
					        break;

							case "Kellers_Gold":
                                document.getElementById("amountBeer").value = 6;
                                document.getElementById("drBeer").value = 650;
					        break;
							
                            case "etcBeer":
								window.alert("this is etc for Beer!!!");
								break; 
							default: 
								window.alert("Nemiroff forever!");
								break;
                     
						}
        	    break;
                  case fourthSpice:
                        if (document.getElementById("juice").checked == true)
                        {
                                document.getElementById("amountJuice").value = 1;
                                document.getElementById("drJuice").value = 1000;
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
                       
						 x = document.getElementById("fourthSpice").value;
						 switch(x)
						{
							case "Menq": 
                                document.getElementById("amountJuice").value = 2;
                                document.getElementById("drJuice").value = 250;
						    break;
                            
							case "Noy":
                                document.getElementById("amountJuice").value = 3;
                                document.getElementById("drJuice").value = 350;
					        break;

							case "Ararat":
                                document.getElementById("amountJuice").value = 4;
                                document.getElementById("drJuice").value = 450;
					        break;
						
							case "Sis":	
                                document.getElementById("amountJuice").value = 5;
                                document.getElementById("drJuice").value = 550;
					        break;

							case "J7":
                                document.getElementById("amountJuice").value = 6;
                                document.getElementById("drJuice").value = 650;
					        break;
							
                            case "etcJuice":
								window.alert("this is etc for Juice!!!");
								break; 
							default: 
								window.alert("Nemiroff forever!");
								break;
                     
						}
        	    break;
                  case fifthSpice:
                        if (document.getElementById("fizzy").checked == true)
                        {
                                document.getElementById("amountFizzy").value = 1;
                                document.getElementById("drFizzy").value = 1000;
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
                       
						 x = document.getElementById("fifthSpice").value;
						 switch(x)
						{
							case "Coca_Cola": 
                                document.getElementById("amountFizzy").value = 2;
                                document.getElementById("drFizzy").value = 250;
						    break;
                            
							case "Fanta":
                                document.getElementById("amountFizzy").value = 3;
                                document.getElementById("drFizzy").value = 350;
					        break;

							case "Sprite":
                                document.getElementById("amountFizzy").value = 4;
                                document.getElementById("drFizzy").value = 450;
					        break;
						
							case "Papa_Karlo":	
                                document.getElementById("amountFizzy").value = 5;
                                document.getElementById("drFizzy").value = 550;
					        break;

							case "Tnjri":
                                document.getElementById("amountFizzy").value = 6;
                                document.getElementById("drFizzy").value = 650;
					        break;
							
                            case "etcFizzy":
								window.alert("this is etc for Fizzy Juice!!!");
								break; 
							default: 
								window.alert("Nemiroff forever!");
								break;
                     
						}
        	    break;
                  case sixthSpice:
                        if (document.getElementById("water").checked == true)
                        {
                                document.getElementById("amountWater").value = 1;
                                document.getElementById("drWater").value = 1000;
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
                       
						 x = document.getElementById("sixthSpice").value;
						 switch(x)
						{
							case "Jermuk": 
                                document.getElementById("amountWater").value = 2;
                                document.getElementById("drWater").value = 250;
						    break;
                            
							case "Bjni":
                                document.getElementById("amountWater").value = 3;
                                document.getElementById("drWater").value = 350;
					        break;

							case "Byuregh":
                                document.getElementById("amountWater").value = 4;
                                document.getElementById("drWater").value = 450;
					        break;
						
							case "Noy":	
                                document.getElementById("amountWater").value = 5;
                                document.getElementById("drWater").value = 550;
					        break;

							case "Arzni":
                                document.getElementById("amountWater").value = 6;
                                document.getElementById("drWater").value = 650;
					        break;
							
                            case "etcWater":
								window.alert("this is etc for water!!!");
								break; 
							default: 
								window.alert("Nemiroff forever!");
								break;
                     
						}
        	    break;
                  case fruitSelector:
                        if (document.getElementById("fruit").checked == true)
                        {
                                document.getElementById("kgFruit").value = 1;
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
                       
						 x = document.getElementById("fruitSelector").value;
						 switch(x)
						{
							case "Apple": 
                                document.getElementById("kgFruit").value = 2;
                                document.getElementById("drFruit").value = 250;
						    break;
                            
							case "Pear":
                                document.getElementById("kgFruit").value = 3;
                                document.getElementById("drFruit").value = 350;
					        break;

							case "Banana":
                                document.getElementById("kgFruit").value = 4;
                                document.getElementById("drFruit").value = 450;
					        break;
						
							case "Orange":	
                                document.getElementById("kgFruit").value = 5;
                                document.getElementById("drFruit").value = 550;
					        break;

							case "Mandarin":
                                document.getElementById("kgFruit").value = 6;
                                document.getElementById("drFruit").value = 650;
					        break;

							case "Cherry":
                                document.getElementById("kgFruit").value = 7;
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
                                document.getElementById("kgDesserts").value = 1;
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
                       
						 x = document.getElementById("dessertChips").value;
						 switch(x)
						{
							case "Sunflower": 
                                document.getElementById("kgDesserts").value = 2;
                                document.getElementById("drDesserts").value = 250;
						    break;
                            
							case "Peanut":
                                document.getElementById("kgDesserts").value = 3;
                                document.getElementById("drDesserts").value = 350;
					        break;

							case "Chips":
                                document.getElementById("kgDesserts").value = 4;
                                document.getElementById("drDesserts").value = 450;
					        break;
						
							case "Salt_sticks":	
                                document.getElementById("kgDesserts").value = 5;
                                document.getElementById("drDesserts").value = 550;
					        break;

							case "Popcorn":
                                document.getElementById("kgDesserts").value = 6;
                                document.getElementById("drDesserts").value = 650;
					        break;

							case "Cherry":
                                document.getElementById("kgFruit").value = 7;
                                document.getElementById("drFruit").value = 750;
							break;	
						
							default:	
								window.alert("Nemiroff forever!");
								break;
                     
						}
        	    break;
            case breadSelector:
                        if (document.getElementById("bread").checked == true)
                        {
                                document.getElementById("hatBread").value = 1;
                                document.getElementById("drBread").value = 1000;
                                document.getElementById("drBread").disabled = false;
                                document.getElementById("hatBread").disabled = false;
                        }
                        else
                        {
                                document.getElementById("hatBread").value = "";
                                document.getElementById("drBread").value = "";
                                document.getElementById("drBread").disabled = true;
                                document.getElementById("hatBread").disabled = true;
                        }
						x = document.getElementById("breadSelector").value; 
						switch(x) 
						{
							case "Lavash":
                                document.getElementById("hatBread").value = 2;
                                document.getElementById("drBread").value = 350;
					        break;
							
							case "Matnaqash":
                                document.getElementById("hatBread").value = 5;
                                document.getElementById("drBread").value = 550;
					        break;
						
							default: 
								window.alert("mnacacner@ der haytni chen.");
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
			/*		var x = document.getElementById("firstSpice").value;
					switch(x)
					{
                		 case "Nemiroff": case "Talka": case "5_ozer": case "Artsakh": case "Zima": case "EtcSpice":
                        	 document.getElementById("spice_price").value = "= " + document.getElementById("amountSpice").value * document.getElementById("drSpice").value;
                         break;
               			
        			}*/
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
				default: 
							window.alert("Welcome to default ...");
							break;
							

		}
 } 
