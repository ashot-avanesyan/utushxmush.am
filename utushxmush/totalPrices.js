var olderKgPig = 0, olderDrPig = 0, olderKgLamb = 0, olderDrLamb = 0, olderKgGoat = 0, olderDrGoat = 0,
	olderKgChicken = 0, olderDrChicken = 0, olderKgWing = 0, olderDrWing = 0, olderKgHaunch = 0, olderDrHaunch = 0,
	olderKgSausage = 0, olderDrSausage = 0, olderKgFrankfurter = 0, olderDrFrankfurter = 0,  olderKgAnvil = 0, olderDrAnvil = 0, olderKgInternal_organs = 0, olderDrInternal_organs = 0,
	olderKgEtc = 0, olderDrEtc = 0, olderAmountSpice = 0, olderDrSpice = 0, olderAmountWine = 0, olderDrWine = 0, olderAmountBeer = 0, olderDrBeer = 0,
	olderAmountJuice = 0, olderDrJuice = 0, olderAmountWater = 0, olderDrWater = 0, olderKgCucumbers = 0, olderDrCucumbers = 0, olderKgTomato = 0, olderDrTomato = 0, 
	olderKgEggplant = 0, olderDrEggplant = 0, olderKgOnion = 0, olderDrOnion = 0,  olderPunjGreen = 0, olderDrGreen = 0, olderKgPotatoes = 0, olderDrPotatoes = 0, olderKgPepper = 0, olderDrPepper = 0, olderAmountFizzy = 0, olderDrFizzy = 0,
	olderKgSweet = 0, olderDrSweet = 0, olderKgChocolates = 0, olderDrChocolates = 0, olderKgLobe = 0, olderDrLobe = 0, olderTupTea = 0, olderDrTea = 0,
	olderTupCoffee = 0, olderDrCoffee = 0, olderKgInstant = 0, olderDrInstant = 0, olderKgFruit = 0, olderDrFruit = 0, olderKgChips = 0, olderDrChips = 0, 
	olderKgBread = 0, olderDrBread = 0,  olderHatButtermilk = 0, olderDrButtermilk = 0,  olderHatEtcDrink = 0, olderDrEtcDrink = 0, olderKgEtcVegetable = 0, olderDrEtcVegetable = 0, 
	olderKgEtcDesert = 0, olderDrEtcDesert = 0, olderQanakEtcOvernight = 0, olderDrEtcOvernight = 0,  olderHamarHotel = 0, olderDrHotel = 0,
    olderQanakTent = 0, olderDrTent = 0,  olderQanakArbor = 0, olderDrArbor = 0,  olderTupSalt = 0, olderDrSalt = 0,  olderTupGround_pepper = 0, olderDrGround_pepper = 0, olderQanakUtensil = 0, olderDrUtensil = 0, olderQanakSkewer = 0, olderDrSkewer = 0, olderQanakEtcA = 0, olderHatPouch = 0, olderDrPouch = 0, olderDrEtcA = 0; 

function subTotal(name)
{
//			window.alert("TEST for pig"); 
		// total price for barbecue 
	switch (name) 
    {
		case pig:
//			window.alert("TEST for pig"); 
			if (document.getElementById("pig").checked == false)
			{
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgPig * olderDrPig; 
				document.getElementById("drPig").disabled = true;
				document.getElementById("kgPig").disabled = true;
				document.getElementById("kgPig").value = "";
				document.getElementById("drPig").value = "";

				olderKgPig = 0; 
				olderDrPig = 0;
               
                price(pig);
			}
			else 
			{

				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgPig * olderDrPig; 
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) +  
												Number(document.getElementById("kgPig").value) * Number(document.getElementById("drPig").value);

		 	 	olderKgPig = Number(document.getElementById("kgPig").value);
                olderDrPig = Number(document.getElementById("drPig").value);


				document.getElementById("drPig").disabled = false;
				document.getElementById("kgPig").disabled = false;

			}	
		
		break; 
	case lamb: 
		if (document.getElementById("lamb").checked == false)
		{
              // window.alert("subTotal checked == false");
              document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgLamb * olderDrLamb;  
			document.getElementById("drLamb").disabled = true;
			document.getElementById("kgLamb").disabled = true;
			document.getElementById("kgLamb").value = "";
			document.getElementById("drLamb").value = "";

			olderKgLamb = 0;
			olderDrLamb = 0;
               
            price(lamb);
		}
		else 
		{

			//	window.alert("subTotal checked == true");
			//	window.alert(document.getElementById("totalBarbecue").value);
			    
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgLamb * olderDrLamb;
			//	window.alert(document.getElementById("totalBarbecue").value); 
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) +  
												Number(document.getElementById("kgLamb").value) * Number(document.getElementById("drLamb").value);

				  olderKgLamb = Number(document.getElementById("kgLamb").value);
                  olderDrLamb = Number(document.getElementById("drLamb").value);


				document.getElementById("drLamb").disabled = false;
				document.getElementById("kgLamb").disabled = false;

		}	
		
		break; 
	case goat: 
			if (document.getElementById("goat").checked == false)
			{
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgGoat * olderDrGoat;  
				document.getElementById("drGoat").disabled = true;
				document.getElementById("kgGoat").disabled = true;
				document.getElementById("kgGoat").value = "";
				document.getElementById("drGoat").value = "";

				olderKgGoat = 0; 
				olderDrGoat = 0;
               
                price(goat);
			}
			else 
			{

			//	window.alert("subTotal checked == true");
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgGoat * olderDrGoat; 
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) +  
												Number(document.getElementById("kgGoat").value) * Number(document.getElementById("drGoat").value);

		 	 	olderKgGoat = Number(document.getElementById("kgGoat").value);
                olderDrGoat = Number(document.getElementById("drGoat").value);


				document.getElementById("drGoat").disabled = false;
				document.getElementById("kgGoat").disabled = false;

			}	
		
		break; 
	case chicken: 
			if (document.getElementById("chicken").checked == false)
			{
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgChicken * olderDrChicken;  
				document.getElementById("drChicken").disabled = true;
				document.getElementById("kgChicken").disabled = true;
				document.getElementById("kgChicken").value = "";
				document.getElementById("drChicken").value = "";

				olderKgChicken = 0; 
				olderDrChicken = 0;
               
                price(chicken);
			}
			else 
			{

			//	window.alert("subTotal checked == true");
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgChicken * olderDrChicken; 
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) +  
												Number(document.getElementById("kgChicken").value) * Number(document.getElementById("drChicken").value);

		 	 	olderKgChicken = Number(document.getElementById("kgChicken").value);
                olderDrChicken = Number(document.getElementById("drChicken").value);


				document.getElementById("drChicken").disabled = false;
				document.getElementById("kgChicken").disabled = false;

			}	
			break; 
	case wing: 
			if (document.getElementById("wing").checked == false)
			{
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgWing * olderDrWing; 
				document.getElementById("drWing").disabled = true;
				document.getElementById("kgWing").disabled = true;
				document.getElementById("kgWing").value = "";
				document.getElementById("drWing").value = "";

				olderKgWing = 0; 
				olderDrWing = 0;
               
                price(wing);
			}
			else 
			{

			//	window.alert("subTotal checked == true");
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgWing * olderDrWing; 
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) +  
												Number(document.getElementById("kgWing").value) * Number(document.getElementById("drWing").value);

		 	 	olderKgWing = Number(document.getElementById("kgWing").value);
                olderDrWing = Number(document.getElementById("drWing").value);


				document.getElementById("drWing").disabled = false;
				document.getElementById("kgWing").disabled = false;

			}	
		
		break; 
	case haunch: 
			if (document.getElementById("haunch").checked == false)
			{
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgHaunch * olderDrHaunch; 
				document.getElementById("drHaunch").disabled = true;
				document.getElementById("kgHaunch").disabled = true;
				document.getElementById("kgHaunch").value = "";
				document.getElementById("drHaunch").value = "";

				olderKgHaunch = 0; 
				olderDrHaunch = 0;
               
                price(haunch);
			}
			else 
			{

			//	window.alert("subTotal checked == true");
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgHaunch * olderDrHaunch; 
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) +  
												Number(document.getElementById("kgHaunch").value) * Number(document.getElementById("drHaunch").value);

		 	 	olderKgHaunch = Number(document.getElementById("kgHaunch").value);
                olderDrHaunch = Number(document.getElementById("drHaunch").value);


				document.getElementById("drHaunch").disabled = false;
				document.getElementById("kgHaunch").disabled = false;

			}	
		
		break; 
	case sausage: 
			if (document.getElementById("sausage").checked == false)
			{
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgSausage * olderDrSausage;
				document.getElementById("drSausage").disabled = true;
				document.getElementById("kgSausage").disabled = true;
				document.getElementById("kgSausage").value = "";
				document.getElementById("drSausage").value = "";

				olderKgSausage = 0; 
				olderDrSausage = 0;
               
                price(sausage);
			}
			else 
			{

			//	window.alert("subTotal checked == true");
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgSausage * olderDrSausage; 
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) +  
												Number(document.getElementById("kgSausage").value) * Number(document.getElementById("drSausage").value);

		 	 	olderKgSausage = Number(document.getElementById("kgSausage").value);
                olderDrSausage = Number(document.getElementById("drSausage").value);


				document.getElementById("drSausage").disabled = false;
				document.getElementById("kgSausage").disabled = false;

			}	
		 break;
        case frankfurter: 
                        if (document.getElementById("frankfurter").checked == false)
                        {
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgFrankfurter * olderDrFrankfurter;
                                document.getElementById("drFrankfurter").disabled = true;
                                document.getElementById("kgFrankfurter").disabled = true;
                                document.getElementById("kgFrankfurter").value = "";
                                document.getElementById("drFrankfurter").value = "";

                                olderKgFrankfurter = 0; 
                                olderDrFrankfurter = 0;

                price(frankfurter);
                        }
                        else
                        {

                        //      window.alert("subTotal checked == true");
                                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgFrankfurter * olderDrFrankfurter;  
                                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) +
                                                                                                Number(document.getElementById("kgFrankfurter").value) * Number(document.getElementById("drFrankfurter").value);

                                olderKgFrankfurter = Number(document.getElementById("kgFrankfurter").value);
                olderDrFrankfurter = Number(document.getElementById("drFrankfurter").value);


                                document.getElementById("drFrankfurter").disabled = false;
                                document.getElementById("kgFrankfurter").disabled = false;

                        }

		break;
	case anvil: 
			if (document.getElementById("anvil").checked == false)
			{
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgAnvil * olderDrAnvil; 
				document.getElementById("drAnvil").disabled = true;
				document.getElementById("kgAnvil").disabled = true;
				document.getElementById("kgAnvil").value = "";
				document.getElementById("drAnvil").value = "";

				olderKgAnvil = 0; 
				olderDrAnvil = 0;
               
                price(anvil);
			}
			else 
			{

			//	window.alert("subTotal checked == true");
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgAnvil * olderDrAnvil; 
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) +  
												Number(document.getElementById("kgAnvil").value) * Number(document.getElementById("drAnvil").value);

		 	 	olderKgAnvil = Number(document.getElementById("kgAnvil").value);
                olderDrAnvil = Number(document.getElementById("drAnvil").value);


				document.getElementById("drAnvil").disabled = false;
				document.getElementById("kgAnvil").disabled = false;

			}	
		break;
	case internal_organs: 
			if (document.getElementById("internal_organs").checked == false)
			{
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgInternal_organs * olderDrInternal_organs;                                                                                               
				document.getElementById("drInternal_organs").disabled = true;
				document.getElementById("kgInternal_organs").disabled = true;
				document.getElementById("kgInternal_organs").value = "";
				document.getElementById("drInternal_organs").value = "";

				olderKgInternal_organs = 0; 
				olderDrInternal_organs = 0;
               
                price(internal_organs);
			}
			else 
			{

			//	window.alert("subTotal checked == true");
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgInternal_organs * olderDrInternal_organs; 
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) +  
												Number(document.getElementById("kgInternal_organs").value) * Number(document.getElementById("drInternal_organs").value);

		 	 	olderKgInternal_organs = Number(document.getElementById("kgInternal_organs").value);
                olderDrInternal_organs = Number(document.getElementById("drInternal_organs").value);


				document.getElementById("drInternal_organs").disabled = false;
				document.getElementById("kgInternal_organs").disabled = false;

			}	
		break;
	case etc: 
			if (document.getElementById("etc").checked == false)
			{
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgEtc * olderDrEtc; 
				document.getElementById("drEtc").disabled = true;
				document.getElementById("kgEtc").disabled = true;
				document.getElementById("kgEtc").value = "";
				document.getElementById("drEtc").value = "";

				olderKgEtc = 0; 
				olderDrEtc = 0;
               
                price(etc);
			}
			else 
			{

			//	window.alert("subTotal checked == true");
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgEtc * olderDrEtc; 
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) +  
												Number(document.getElementById("kgEtc").value) * Number(document.getElementById("drEtc").value);

		 	 	olderKgEtc = Number(document.getElementById("kgEtc").value);
                olderDrEtc = Number(document.getElementById("drEtc").value);





				document.getElementById("drEtc").disabled = false;
				document.getElementById("kgEtc").disabled = false;

			}	
		
		break;

	case firstSpice: 
		if ( document.getElementById("spice").checked == false)
		{

			//	window.alert("checked == false");
			//	window.alert(document.getElementById("totalDrink").value); 
                document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderAmountSpice * olderDrSpice; 
			//	  window.alert(document.getElementById("totalDrink").value);

				document.getElementById("drSpice").disabled = true;
				document.getElementById("amountSpice").disabled = true;
				document.getElementById("amountSpice").value = "";
				document.getElementById("drSpice").value = "";

				olderAmountSpice = 0; 
				olderDrSpice = 0;
               
                priceDrink(firstSpice);
		
		}
		else 
		{
			//	window.alert("checked == true");
				document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderAmountSpice * olderDrSpice; 
			//	window.alert(document.getElementById("totalDrink").value);
				document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) +  
												Number(document.getElementById("amountSpice").value) * Number(document.getElementById("drSpice").value);
			//	window.alert(document.getElementById("totalDrink").value);

		 	 	olderAmountSpice = Number(document.getElementById("amountSpice").value);
                olderDrSpice = Number(document.getElementById("drSpice").value);


				document.getElementById("drSpice").disabled = false;
				document.getElementById("amountSpice").disabled = false;
		}
		break;
	case secondSpice: 
			if (document.getElementById("wine").checked == false)
			{
			//	window.alert("checked == false");
			//	window.alert(document.getElementById("totalDrink").value);
                document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderAmountWine * olderDrWine; 
			//	window.alert(document.getElementById("totalDrink").value);
				document.getElementById("drWine").disabled = true;
				document.getElementById("amountWine").disabled = true;
				document.getElementById("amountWine").value = "";
				document.getElementById("drWine").value = "";

				olderAmountWine = 0; 
				olderDrWine = 0;
               
                priceDrink(secondSpice);
			}
			else 
			{

				document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderAmountWine * olderDrWine; 
				document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) +  
												Number(document.getElementById("amountWine").value) * Number(document.getElementById("drWine").value);

		 	 	olderAmountWine = Number(document.getElementById("amountWine").value);
                olderDrWine = Number(document.getElementById("drWine").value);


				document.getElementById("drWine").disabled = false;
				document.getElementById("amountWine").disabled = false;

			}	
		break;
	case thirdSpice: 
			if (document.getElementById("beer").checked == false)
			{
                document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderAmountBeer * olderDrBeer; 
				document.getElementById("drBeer").disabled = true;
				document.getElementById("amountBeer").disabled = true;
				document.getElementById("amountBeer").value = "";
				document.getElementById("drBeer").value = "";

				olderAmountBeer = 0; 
				olderDrBeer = 0;
               
                priceDrink(thirdSpice);
			}
			else 
			{

				document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderAmountBeer * olderDrBeer; 
				document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) +  
												Number(document.getElementById("amountBeer").value) * Number(document.getElementById("drBeer").value);

		 	 	olderAmountBeer = Number(document.getElementById("amountBeer").value);
                olderDrBeer = Number(document.getElementById("drBeer").value);


				document.getElementById("drBeer").disabled = false;
				document.getElementById("amountBeer").disabled = false;

			}	
		break;
	case fourthSpice: 
			if (document.getElementById("juice").checked == false)
			{
                document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderAmountJuice * olderDrJuice; 
				document.getElementById("drJuice").disabled = true;
				document.getElementById("amountJuice").disabled = true;
				document.getElementById("amountJuice").value = "";
				document.getElementById("drJuice").value = "";

				olderAmountJuice = 0; 
				olderDrJuice = 0;
               
                priceDrink(fourthSpice);
			}
			else 
			{

				document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderAmountJuice * olderDrJuice; 
				document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) +  
												Number(document.getElementById("amountJuice").value) * Number(document.getElementById("drJuice").value);

		 	 	olderAmountJuice = Number(document.getElementById("amountJuice").value);
                olderDrJuice = Number(document.getElementById("drJuice").value);


				document.getElementById("drJuice").disabled = false;
				document.getElementById("amountJuice").disabled = false;
			} 
			break;
		   
		case  fifthSpice: 		
            if (document.getElementById("fizzy").checked == false)
            {
               document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderAmountFizzy * olderDrFizzy;
			   document.getElementById("drFizzy").disabled = true;
               document.getElementById("amountFizzy").disabled = true;
               document.getElementById("drFizzy").value = "";
               document.getElementById("amountFizzy").value = "";

               olderAmountFizzy = 0;
               olderDrFizzy = 0;

               priceDrink(fifthSpice);
            }
            else
            {

               document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderAmountFizzy * olderDrFizzy;
               document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) +
                              Number(document.getElementById("amountFizzy").value) * Number(document.getElementById("drFizzy").value);

                olderAmountFizzy = Number(document.getElementById("amountFizzy").value);
                olderDrFizzy = Number(document.getElementById("drFizzy").value);


                document.getElementById("drFizzy").disabled = false;
                document.getElementById("amountFizzy").disabled = false;

             }
             break;
	case sixthSpice: 
			if (document.getElementById("water").checked == false)
			{
                document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderAmountWater * olderDrWater;  
				document.getElementById("drWater").disabled = true;
				document.getElementById("amountWater").disabled = true;
				document.getElementById("amountWater").value = "";
				document.getElementById("drWater").value = "";

				olderAmountWater = 0; 
				olderDrWater = 0;
               
                priceDrink(sixthSpice);
			}
			else 
			{

				document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderAmountWater * olderDrWater; 
				document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) +  
												Number(document.getElementById("amountWater").value) * Number(document.getElementById("drWater").value);

		 	 	olderAmountWater = Number(document.getElementById("amountWater").value);
                olderDrWater = Number(document.getElementById("drWater").value);


				document.getElementById("drWater").disabled = false;
				document.getElementById("amountWater").disabled = false;

			}	
		break;

			// etc for drink ...

			// vegetable 
           
	case tomato: 
			if (document.getElementById("tomato").checked == false)
			{
                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) -  olderKgTomato * olderDrTomato;
				document.getElementById("drTomato").disabled = true;
				document.getElementById("kgTomato").disabled = true;
				document.getElementById("kgTomato").value = "";
				document.getElementById("drTomato").value = "";

				olderKgTomato = 0; 
				olderDrTomato = 0;
               
                price(tomato);
			}
			else 
			{

				document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) - olderKgTomato * olderDrTomato; 
				document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) +  
												Number(document.getElementById("kgTomato").value) * Number(document.getElementById("drTomato").value);

		 	 	olderKgTomato = Number(document.getElementById("kgTomato").value);
                olderDrTomato = Number(document.getElementById("drTomato").value);


				document.getElementById("drTomato").disabled = false;
				document.getElementById("kgTomato").disabled = false;

			}	
		break;
	case cucumbers: 
			if (document.getElementById("cucumbers").checked == false)
			{
                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) - olderKgCucumbers * olderDrCucumbers;
				document.getElementById("drCucumbers").disabled = true;
				document.getElementById("kgCucumbers").disabled = true;
				document.getElementById("kgCucumbers").value = "";
				document.getElementById("drCucumbers").value = "";

				olderKgCucumbers = 0; 
				olderDrCucumbers = 0;
               
                price(cucumbers);
			}
			else 
			{

				document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) - olderKgCucumbers * olderDrCucumbers; 
				document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) +  
												Number(document.getElementById("kgCucumbers").value) * Number(document.getElementById("drCucumbers").value);

		 	 	olderKgCucumbers = Number(document.getElementById("kgCucumbers").value);
                olderDrCucumbers = Number(document.getElementById("drCucumbers").value);


				document.getElementById("drCucumbers").disabled = false;
				document.getElementById("kgCucumbers").disabled = false;

			}	
		break;
	case eggplant: 
			if (document.getElementById("eggplant").checked == false)
			{
                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) - olderKgEggplant * olderDrEggplant;
				document.getElementById("drEggplant").disabled = true;
				document.getElementById("kgEggplant").disabled = true;
				document.getElementById("kgEggplant").value = "";
				document.getElementById("drEggplant").value = "";

				olderKgEggplant = 0; 
				olderDrEggplant = 0;
               
                price(eggplant);
			}
			else 
			{

				document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) - olderKgEggplant * olderDrEggplant; 
				document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) +  
												Number(document.getElementById("kgEggplant").value) * Number(document.getElementById("drEggplant").value);

		 	 	olderKgEggplant = Number(document.getElementById("kgEggplant").value);
                olderDrEggplant = Number(document.getElementById("drEggplant").value);


				document.getElementById("drEggplant").disabled = false;
				document.getElementById("kgEggplant").disabled = false;

			}	
		break;
		case onion:
                        if (document.getElementById("onion").checked == false)
                        {
                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) - olderKgOnion * olderDrOnion;
                                document.getElementById("drOnion").disabled = true;
                                document.getElementById("kgOnion").disabled = true;
                                document.getElementById("kgOnion").value = "";
                                document.getElementById("drOnion").value = "";

                                olderKgOnion = 0;
                                olderDrOnion = 0;

                price(onion);
                        }
                        else
                        {

                                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) - olderKgOnion * olderDrOnion;
                                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) +
                                                                                                Number(document.getElementById("kgOnion").value) * Number(document.getElementById("drOnion").value);

                                olderKgOnion = Number(document.getElementById("kgOnion").value);
                                olderDrOnion = Number(document.getElementById("drOnion").value);


                                document.getElementById("drOnion").disabled = false;
                                document.getElementById("kgOnion").disabled = false;

                        }
                break;
	        case greens: 
			if (document.getElementById("greens").checked == false)
			{
                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) - olderPunjGreen * olderDrGreen;
				document.getElementById("drGreens").disabled = true;
				document.getElementById("punjGreens").disabled = true;
				document.getElementById("punjGreens").value = "";
				document.getElementById("drGreens").value = "";

				olderPunjGreen = 0; 
				olderDrGreen = 0;
               
                price(greens);
			}
			else 
			{

				document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) - olderPunjGreen * olderDrGreen; 
				document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) +  
												Number(document.getElementById("punjGreens").value) * Number(document.getElementById("drGreens").value);

		 	 	olderPunjGreen = Number(document.getElementById("punjGreens").value);
                olderDrGreen = Number(document.getElementById("drGreens").value);


				document.getElementById("drGreens").disabled = false;
				document.getElementById("punjGreens").disabled = false;

			}
		 break;
        case potatoes:
                        if (document.getElementById("potatoes").checked == false)
                        {
                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) - olderKgPotatoes * olderDrPotatoes;
                                document.getElementById("drPotatoes").disabled = true;
                                document.getElementById("kgPotatoes").disabled = true;
                                document.getElementById("kgPotatoes").value = "";
                                document.getElementById("drPotatoes").value = "";

                                olderkgPotatoes = 0;
                                olderDrPotatoes = 0;

                price(potatoes);
                        }
                        else
                        {

                                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) - olderKgPotatoes * olderDrPotatoes;
                                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) +
                                                                                                Number(document.getElementById("kgPotatoes").value) * Number(document.getElementById("drPotatoes").value);

                                olderKgPotatoes = Number(document.getElementById("kgPotatoes").value);
                olderDrPotatoes = Number(document.getElementById("drPotatoes").value);


                                document.getElementById("drPotatoes").disabled = false;
                                document.getElementById("kgPotatoes").disabled = false;

                        }       
		 break;
        	 case pepper:
                        if (document.getElementById("pepper").checked == false)
                        {
                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) - olderKgPepper * olderDrPepper;
                                document.getElementById("drPepper").disabled = true;
                                document.getElementById("kgPepper").disabled = true;
                                document.getElementById("kgPepper").value = "";
                                document.getElementById("drPepper").value = "";

                                olderkgPepper = 0;
                                olderDrPepper = 0;

                price(pepper);
                        }
                        else
                        {

                                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) - olderKgPepper * olderDrPepper;
                                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) +
                                                                                                Number(document.getElementById("kgPepper").value) * Number(document.getElementById("drPepper").value);

                                olderKgPepper = Number(document.getElementById("kgPepper").value);
                		olderDrPepper = Number(document.getElementById("drPepper").value);


                                document.getElementById("drPepper").disabled = false;
                                document.getElementById("kgPepper").disabled = false;

                        }
	
		break;
   case sweetmeat: 
			if (document.getElementById("sweetmeat").checked == false)
			{
                document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderKgSweet * olderDrSweet;
				document.getElementById("drSweetmeat").disabled = true;
				document.getElementById("kgSweetmeat").disabled = true;
				document.getElementById("kgSweetmeat").value = "";
				document.getElementById("drSweetmeat").value = "";

				olderKgSweet = 0; 
				olderDrSweet = 0;
               
                price(sweetmeat);
			}
			else 
			{

				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderKgSweet * olderDrSweet; 
				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) +  
												Number(document.getElementById("kgSweetmeat").value) * Number(document.getElementById("drSweetmeat").value);

		 	 	olderKgSweet = Number(document.getElementById("kgSweetmeat").value);
                olderDrSweet = Number(document.getElementById("drSweetmeat").value);


				document.getElementById("drSweetmeat").disabled = false;
				document.getElementById("kgSweetmeat").disabled = false;

			}	
		break;
   case chocolates: 
			if (document.getElementById("chocolates").checked == false)
			{
                document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderKgChocolates * olderDrChocolates;
				document.getElementById("drChocolates").disabled = true;
				document.getElementById("kgChocolates").disabled = true;
				document.getElementById("kgChocolates").value = "";
				document.getElementById("drChocolates").value = "";

				olderKgChocolates = 0; 
				olderDrChocolates = 0;
               
                price(chocolates);
			}
			else 
			{

				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderKgChocolates * olderDrChocolates; 
				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) +  
												Number(document.getElementById("kgChocolates").value) * Number(document.getElementById("drChocolates").value);

		 	 	olderKgChocolates = Number(document.getElementById("kgChocolates").value);
                olderDrChocolates = Number(document.getElementById("drChocolates").value);


				document.getElementById("drChocolates").disabled = false;
				document.getElementById("kgChocolates").disabled = false;

			}	
		break;
   case lobe: 
			if (document.getElementById("lobe").checked == false)
			{
                document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderKgLobe * olderDrLobe;
				document.getElementById("drLobe").disabled = true;
				document.getElementById("kgLobe").disabled = true;
				document.getElementById("kgLobe").value = "";
				document.getElementById("drLobe").value = "";

				olderKgLobe = 0; 
				olderDrLobe = 0;
               
                price(lobe);
			}
			else 
			{

				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderKgLobe * olderDrLobe; 
				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) +  
												Number(document.getElementById("kgLobe").value) * Number(document.getElementById("drLobe").value);

		 	 	olderKgLobe = Number(document.getElementById("kgLobe").value);
                olderDrLobe = Number(document.getElementById("drLobe").value);


				document.getElementById("drLobe").disabled = false;
				document.getElementById("kgLobe").disabled = false;

			}	
		break;
   case tea: 
			if (document.getElementById("tea").checked == false)
			{
                document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderTupTea * olderDrTea;
				document.getElementById("drTea").disabled = true;
				document.getElementById("tupTea").disabled = true;
				document.getElementById("tupTea").value = "";
				document.getElementById("drTea").value = "";

				olderTupTea = 0; 
				olderDrTea = 0;
               
                price(tea);
			}
			else 
			{

				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderTupTea * olderDrTea; 
				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) +  
												Number(document.getElementById("tupTea").value) * Number(document.getElementById("drTea").value);

		 	 	olderTupTea = Number(document.getElementById("tupTea").value);
                olderDrTea = Number(document.getElementById("drTea").value);


				document.getElementById("drTea").disabled = false;
				document.getElementById("tupTea").disabled = false;

			}	
		break;
   case coffee: 
			if (document.getElementById("coffee").checked == false)
			{
                document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderTupCoffee * olderDrCoffee;
				document.getElementById("drCoffee").disabled = true;
				document.getElementById("tupCoffee").disabled = true;
				document.getElementById("tupCoffee").value = "";
				document.getElementById("drCoffee").value = "";

				olderTupCoffee = 0; 
				olderDrCoffee = 0;
               
                price(coffee);
			}
			else 
			{

				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderTupCoffee * olderDrCoffee; 
				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) +  
												Number(document.getElementById("TupCoffee").value) * Number(document.getElementById("drCoffee").value);

		 	 	olderTupCoffee = Number(document.getElementById("TupCoffee").value);
                olderDrCoffee = Number(document.getElementById("drCoffee").value);


				document.getElementById("drCoffee").disabled = false;
				document.getElementById("tupCoffee").disabled = false;

			}	
		break;
   case Instant_coffee: 
			if (document.getElementById("Instant_coffee").checked == false)
			{
                document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderKgInstant * olderDrInstant;
				document.getElementById("drInstant_coffee").disabled = true;
				document.getElementById("hatInstant_coffee").disabled = true;
				document.getElementById("hatInstant_coffee").value = "";
				document.getElementById("drInstant_coffee").value = "";

				olderKgInstant = 0; 
				olderDrInstant = 0;
               
                price(Instant_coffee);
			}
			else 
			{

				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderKgInstant * olderDrInstant; 
				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) +  
												Number(document.getElementById("hatInstant_coffee").value) * Number(document.getElementById("drInstant_coffee").value);

		 	 	olderKgInstant = Number(document.getElementById("hatInstant_coffee").value);
                olderDrInstant = Number(document.getElementById("drInstant_coffee").value);


				document.getElementById("drInstant_coffee").disabled = false;
				document.getElementById("hatInstant_coffee").disabled = false;

			}	
		break;
   case fruitSelector: 
			if (document.getElementById("fruitSelector").checked == false)
			{
                document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderKgFruit * olderDrFruit;
				document.getElementById("drFruit").disabled = true;
				document.getElementById("kgFruit").disabled = true;
				document.getElementById("drFruit").value = "";
				document.getElementById("kgFruit").value = "";

				olderKgFruit = 0; 
				olderDrFruit = 0;
               
                price(fruitSelector);
			}
			else 
			{

				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderKgFruit * olderDrFruit; 
				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) +  
												Number(document.getElementById("kgFruit").value) * Number(document.getElementById("drFruit").value);

		 	 	olderKgFruit = Number(document.getElementById("kgFruit").value);
                olderDrFruit = Number(document.getElementById("drFruit").value);


				document.getElementById("drFruit").disabled = false;
				document.getElementById("kgFruit").disabled = false;

			}	
		break;
   case dessertChips: 
			if (document.getElementById("dessertChips").checked == false)
			{
                document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderKgChips * olderDrChips;
				document.getElementById("drDesserts").disabled = true;
				document.getElementById("kgDesserts").disabled = true;
				document.getElementById("drDesserts").value = "";
				document.getElementById("kgDesserts").value = "";

				olderKgChips = 0; 
				olderDrChips = 0;
               
                price(dessertChips);
			}
			else 
			{

				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderKgChips * olderDrChips; 
				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) +  
												Number(document.getElementById("kgDesserts").value) * Number(document.getElementById("drDesserts").value);

		 	 	olderKgChips = Number(document.getElementById("kgDesserts").value);
                olderDrChips = Number(document.getElementById("drDesserts").value);


				document.getElementById("drDesserts").disabled = false;
				document.getElementById("kgDesserts").disabled = false;

			}	
		break;
   case breadSelector: 
			if (document.getElementById("bread").checked == false)
			{
                document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderKgBread * olderDrBread;
				document.getElementById("drBread").disabled = true;
				document.getElementById("hatBread").disabled = true;
				document.getElementById("drBread").value = "";
				document.getElementById("hatBread").value = "";

				olderKgBread = 0; 
				olderDrBread = 0;
               
                priceDrink(breadSelector);
			}
			else 
			{

				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderKgBread * olderDrBread; 
				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) +  
												Number(document.getElementById("hatBread").value) * Number(document.getElementById("drBread").value);

		 	 	olderKgBread = Number(document.getElementById("hatBread").value);
                olderDrBread = Number(document.getElementById("drBread").value);


				document.getElementById("drBread").disabled = false;
				document.getElementById("hatBread").disabled = false;

			}	
		 break;
        case buttermilk:
                        if (document.getElementById("buttermilk").checked == false)
                        {
                                document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderHatButtermilk * olderDrButtermilk;

                                document.getElementById("drButtermilk").disabled = true;
                                document.getElementById("hatButtermilk").disabled = true;
                                document.getElementById("hatButtermilk").value = "";
                                document.getElementById("drButtermilk").value = "";

                                olderHatButtermilk = 0;
                                olderDrButtermilk = 0;

               price(buttermilk);
                        }
                        else
                        {

                                document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderHatButtermilk * olderDrButtermilk;
                                document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) +
                                                                                                Number(document.getElementById("hatButtermilk").value) * Number(document.getElementById("drButtermilk").value);

                                olderHatButtermilk = Number(document.getElementById("hatButtermilk").value);
                                olderDrButtermilk = Number(document.getElementById("drButtermilk").value);


                                document.getElementById("drButtermilk").disabled = false;
                                document.getElementById("hatButtermilk").disabled = false;

                        }

		break;
	case etcDrink:
			if (document.getElementById("etcDrink").checked == false)
			{
				document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderHatEtcDrink * olderDrEtcDrink; 
				
				document.getElementById("drEtcDrink").disabled = true;
				document.getElementById("hatEtcDrink").disabled = true;
				document.getElementById("hatEtcDrink").value = "";
				document.getElementById("drEtcDrink").value = "";

				olderHatEtcDrink = 0; 
				olderDrEtcDrink = 0;
               
                price(etcDrink);
			}
			else 
			{

				document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderHatEtcDrink * olderDrEtcDrink; 
				document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) +  
												Number(document.getElementById("hatEtcDrink").value) * Number(document.getElementById("drEtcDrink").value);

		 	 	olderHatEtcDrink = Number(document.getElementById("hatEtcDrink").value);
                		olderDrEtcDrink = Number(document.getElementById("drEtcDrink").value);


				document.getElementById("drEtcDrink").disabled = false;
				document.getElementById("hatEtcDrink").disabled = false;

			}	
		
		break;
	case etcVegetable: 
			if (document.getElementById("etcVegetable").checked == false)
			{
                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) - olderKgEtcVegetable * olderDrEtcVegetable; 
				document.getElementById("drEtcVegetable").disabled = true;
				document.getElementById("kgEtcVegetable").disabled = true;
				document.getElementById("kgEtcVegetable").value = "";
				document.getElementById("drEtcVegetable").value = "";

				olderKgEtcVegetable = 0; 
				olderDrEtcVegetable = 0;
               
                price(etcVegetable);
			}
			else 
			{

				document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) - olderKgEtcVegetable * olderDrEtcVegetable; 
				document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) +  
												Number(document.getElementById("kgEtcVegetable").value) * Number(document.getElementById("drEtcVegetable").value);


		 	 	olderKgEtcVegetable = Number(document.getElementById("kgEtcVegetable").value);
                olderDrEtcVegetable = Number(document.getElementById("drEtcVegetable").value);


				document.getElementById("drEtcVegetable").disabled = false;
				document.getElementById("kgEtcVegetable").disabled = false;

			}	
		 break;
        case etcOvernight:
                        if (document.getElementById("etcOvernight").checked == false)
                        {
                                document.getElementById("totalOvernight").value = Number(document.getElementById("totalOvernight").value) - olderQanakEtcOvernight * olderDrEtcOvernight;

                                document.getElementById("drEtcOvernight").disabled = true;
                                document.getElementById("qanakEtcOvernight").disabled = true;
                                document.getElementById("drEtcOvernight").value = "";
                                document.getElementById("qanakEtcOvernight").value = "";

                                olderQanakEtcOvernight = 0;
                                olderDrEtcOvernight = 0;
		
								price(etcOvernight);
                        }
                        else
                        {

                                document.getElementById("totalOvernight").value = Number(document.getElementById("totalOvernight").value) - olderQanakEtcOvernight * olderDrEtcOvernight;
                                document.getElementById("totalOvernight").value = Number(document.getElementById("totalOvernight").value) +
                                                                                                Number(document.getElementById("qanakEtcOvernight").value) * Number(document.getElementById("drEtcOvernight").value);

                                olderQanakEtcOvernight = Number(document.getElementById("qanakEtcOvernight").value);
                		olderDrEtcOvernight = Number(document.getElementById("drEtcOvernight").value);


                                document.getElementById("drEtcOvernight").disabled = false;
                                document.getElementById("qanakEtcOvernight").disabled = false;

                        }	
		
		break;
	case etcDesert: 
			if (document.getElementById("etcDesert").checked == false)
			{
				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderKgEtcDesert * olderDrEtcDesert; 
				
				document.getElementById("drEtcDesert").disabled = true;
				document.getElementById("kgEtcDesert").disabled = true;
				document.getElementById("kgEtcDesert").value = "";
				document.getElementById("drEtcDesert").value = "";

				olderKgEtcDesert = 0; 
				olderDrEtcDesert = 0;
               
                price(etcDesert);
			}
			else 
			{

				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) - olderKgEtcDesert * olderDrEtcDesert; 
				document.getElementById("totalDesert").value = Number(document.getElementById("totalDesert").value) +  
												Number(document.getElementById("kgEtcDesert").value) * Number(document.getElementById("drEtcDesert").value);

		 	 	olderKgEtcDesert = Number(document.getElementById("kgEtcDesert").value);
                olderDrEtcDesert = Number(document.getElementById("drEtcDesert").value);


				document.getElementById("drEtcDesert").disabled = false;
				document.getElementById("kgEtcDesert").disabled = false;

			}	
		
		break;
	case hotel:
			if (document.getElementById("hotel").checked == false)
			{
				document.getElementById("totalOvernight").value = Number(document.getElementById("totalOvernight").value) - olderHamarHotel * olderDrHotel; 
				
				document.getElementById("drHotel").disabled = true;
				document.getElementById("hamarHotel").disabled = true;
				document.getElementById("drHotel").value = "";
				document.getElementById("hamarHotel").value = "";

				olderHamarHotel = 0; 
				olderDrHotel = 0;
               
                price(hotel);
			}
			else 
			{

				document.getElementById("totalOvernight").value = Number(document.getElementById("totalOvernight").value) - olderHamarHotel * olderDrHotel; 
				document.getElementById("totalOvernight").value = Number(document.getElementById("totalOvernight").value) +  
												Number(document.getElementById("hamarHotel").value) * Number(document.getElementById("drHotel").value);

		 	 	olderHamarHotel = Number(document.getElementById("hamarHotel").value);
                olderDrHotel = Number(document.getElementById("drHotel").value);


				document.getElementById("drHotel").disabled = false;
				document.getElementById("hamarHotel").disabled = false;

			}	
		
		break;
	case tent:
			if (document.getElementById("tent").checked == false)
			{
				document.getElementById("totalOvernight").value = Number(document.getElementById("totalOvernight").value) - olderQanakTent * olderDrTent; 
				
				document.getElementById("drTent").disabled = true;
				document.getElementById("qanakTent").disabled = true;
				document.getElementById("drTent").value = "";
				document.getElementById("qanakTent").value = "";

				olderQanakTent = 0; 
				olderDrTent = 0;
               
                price(tent);
			}
			else 
			{

				document.getElementById("totalOvernight").value = Number(document.getElementById("totalOvernight").value) - olderQanakTent * olderDrTent; 
				document.getElementById("totalOvernight").value = Number(document.getElementById("totalOvernight").value) +  
												Number(document.getElementById("qanakTent").value) * Number(document.getElementById("drTent").value);

		 	 	olderQanakTent = Number(document.getElementById("qanakTent").value);
                olderDrTent = Number(document.getElementById("drTent").value);


				document.getElementById("drTent").disabled = false;
				document.getElementById("qanakTent").disabled = false;

			}	
		break;
        case arbor:
                        if (document.getElementById("arbor").checked == false)
                        {
                                document.getElementById("totalOvernight").value = Number(document.getElementById("totalOvernight").value) - olderQanakArbor * olderDrArbor;

                                document.getElementById("drArbor").disabled = true;
                                document.getElementById("qanakArbor").disabled = true;
                                document.getElementById("drArbor").value = "";
                                document.getElementById("qanakArbor").value = "";

                                olderQanakArbor = 0;
                                olderDrArbor = 0;

                price(arbor);
                        }
                        else
                        {

                                document.getElementById("totalOvernight").value = Number(document.getElementById("totalOvernight").value) - olderQanakArbor * olderDrArbor;
                                document.getElementById("totalOvernight").value = Number(document.getElementById("totalOvernight").value) +
                                                                                                Number(document.getElementById("qanakArbor").value) * Number(document.getElementById("drArbor").value);

                                olderQanakArbor = Number(document.getElementById("qanakArbor").value);
                		olderDrArbor = Number(document.getElementById("drArbor").value);


                                document.getElementById("drArbor").disabled = false;
                                document.getElementById("qanakArbor").disabled = false;

                        }
                break;
         case salt:
                         if (document.getElementById("salt").checked == false)
                         {
                                 document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) - olderTupSalt * olderDrSalt;

                                 document.getElementById("drSalt").disabled = true;
                                 document.getElementById("tupSalt").disabled = true;
                                 document.getElementById("drSalt").value = "";
                                 document.getElementById("tupSalt").value = "";

                                 olderTupSalt = 0;
                                 olderDrSalt = 0;

                 price(salt);
                         }
                         else
                         {

                                 document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) - olderTupSalt * olderDrSalt;
                                 document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) +
                                                                                                 Number(document.getElementById("tupSalt").value) * Number(document.getElementById("drSalt").value);

                                 olderTupSalt = Number(document.getElementById("tupSalt").value);
                                 olderDrSalt = Number(document.getElementById("drSalt").value);


                                 document.getElementById("drSalt").disabled = false;
                                 document.getElementById("tupSalt").disabled = false;

                         }
		break;
         case ground_pepper:
                         if (document.getElementById("ground_pepper").checked == false)
                         {
                                 document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) - olderTupGround_pepper * olderDrGround_pepper;

                                 document.getElementById("drGround_pepper").disabled = true;
                                 document.getElementById("tupGround_pepper").disabled = true;
                                 document.getElementById("drGround_pepper").value = "";
                                 document.getElementById("tupGround_pepper").value = "";

                                 olderTupGround_pepper = 0;
                                 olderDrGround_pepper = 0;

                 price(ground_pepper);
                         }
                         else
                         {

                                 document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) - olderTupGround_pepper * olderDrGround_pepper;
                                 document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) +
                                                                                                 Number(document.getElementById("tupGround_pepper").value) * Number(document.getElementById("drGround_pepper").value);

                                 olderTupGround_pepper = Number(document.getElementById("tupGround_pepper").value);
                                 olderDrGround_pepper = Number(document.getElementById("drGround_pepper").value);


                                 document.getElementById("drGround_pepper").disabled = false;
                                 document.getElementById("tupGround_pepper").disabled = false;

                         }

		break;
	case utensil:
			if (document.getElementById("utensil").checked == false)
			{
				document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) - olderQanakUtensil * olderDrUtensil; 
				
				document.getElementById("drUtensil").disabled = true;
				document.getElementById("qanakUtensil").disabled = true;
				document.getElementById("drUtensil").value = "";
				document.getElementById("qanakUtensil").value = "";

				olderQanakUtensil = 0; 
				olderDrUtensil = 0;
               
                price(utensil);
			}
			else 
			{

				document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) - olderQanakUtensil * olderDrUtensil; 
				document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) +  
												Number(document.getElementById("qanakUtensil").value) * Number(document.getElementById("drUtensil").value);

		 	 	olderQanakUtensil = Number(document.getElementById("qanakUtensil").value);
                olderDrUtensil = Number(document.getElementById("drUtensil").value);


				document.getElementById("drUtensil").disabled = false;
				document.getElementById("qanakUtensil").disabled = false;

			}	
		
		break;
	case skewer:
			if (document.getElementById("skewer").checked == false)
			{
				document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) - olderQanakSkewer * olderDrSkewer; 
				
				document.getElementById("drSkewer").disabled = true;
				document.getElementById("qanakSkewer").disabled = true;
				document.getElementById("drSkewer").value = "";
				document.getElementById("qanakSkewer").value = "";

				olderQanakSkewer = 0; 
				olderDrSkewer = 0;
               
                price(skewer);
			}
			else 
			{

				document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) - olderQanakSkewer * olderDrSkewer; 
				document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) +  
												Number(document.getElementById("qanakSkewer").value) * Number(document.getElementById("drSkewer").value);

		 	 	olderQanakSkewer = Number(document.getElementById("qanakSkewer").value);
                olderDrSkewer = Number(document.getElementById("drSkewer").value);


				document.getElementById("drSkewer").disabled = false;
				document.getElementById("qanakSkewer").disabled = false;

			}	
		break;
        case pouch:
                        if (document.getElementById("pouch").checked == false)
                        {
                                document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) - olderHatPouch * olderDrPouch;
                               
                                document.getElementById("drPouch").disabled = true;
                                document.getElementById("hatPouch").disabled = true;
                                document.getElementById("drPouch").value = "";
                                document.getElementById("hatPouch").value = "";

                                olderHatPouch = 0;
                                olderDrPouch = 0;

               					 price(pouch);
                        }
                        else
                        {

                                document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) - olderHatPouch * olderDrPouch;
                                document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) +
                                                                                                Number(document.getElementById("hatPouch").value) * Number(document.getElementById("drPouch").value);

                                olderHatPouch = Number(document.getElementById("hatPouch").value);
                                olderDrPouch = Number(document.getElementById("drPouch").value);


                                document.getElementById("drPouch").disabled = false;
                                document.getElementById("hatPouch").disabled = false;

                        }
	
		break;
	case etcAccessories:
			if (document.getElementById("etcAccessories").checked == false)
			{
				document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) - olderQanakEtcA * olderDrEtcA; 
				
				document.getElementById("drEtcAccessories").disabled = true;
				document.getElementById("qanakEtcAccessories").disabled = true;
				document.getElementById("drEtcAccessories").value = "";
				document.getElementById("qanakEtcAccessories").value = "";

				olderQanakEtcA = 0; 
				olderDrEtcA = 0;
               
                price(etcAccessories);
			}
			else 
			{

				document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) - olderQanakEtcA * olderDrEtcA; 
				document.getElementById("totalAccessories").value = Number(document.getElementById("totalAccessories").value) +  
												Number(document.getElementById("qanakEtcAccessories").value) * Number(document.getElementById("drEtcAccessories").value);

		 	 	olderQanakEtcA = Number(document.getElementById("qanakEtcAccessories").value);
                olderDrEtcA = Number(document.getElementById("drEtcAccessories").value);


				document.getElementById("drEtcAccessories").disabled = false;
				document.getElementById("qanakEtcAccessories").disabled = false;

			}	
		
		break;
			
	}
}
 	

// total!!!
function total()
 {

//	window.alert("hello");
/*	window.alert(Number(document.getElementById("participantsInput2").value));   
	window.alert(document.getElementById("participantsInput3").value);   
	window.alert(document.getElementById("participantsInput4").value);   */
	document.getElementById("total").value =  Number(document.getElementById("totalAccessories").value)	+ Number(document.getElementById("totalOvernight").value) + Number(document.getElementById("totalDesert").value) + Number(document.getElementById("totalVegetable").value) +  Number(document.getElementById("totalDrink").value) + Number(document.getElementById("totalBarbecue").value);
		
	if ((document.getElementById("participantsInput2").value + document.getElementById("participantsInput3").value + document.getElementById("participantsInput4").value) != 0 )
	 	document.getElementById("totalForOne").value = Math.ceil((Number(document.getElementById("total").value) / (Number(document.getElementById("participantsInput2").value) + Number(document.getElementById("participantsInput3").value))) / 10)*10 ;
	else 
		document.getElementById("totalForOne").value = 0; 
//	window.alert("TEST-ing total() function");

}

// totalTransport
function totalTransport() 
{
	document.getElementById("totalCost").value = Number(document.getElementById("distance").value) * Number(document.getElementById("cost").value);
}
//aaa
