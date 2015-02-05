var olderKgPig = 0, olderDrPig = 0, olderKgLamb = 0, olderDrLamb = 0, olderKgGoat = 0, olderDrGoat = 0,
	olderKgChicken = 0, olderDrChicken = 0, olderKgWing = 0, olderDrWing = 0, olderKgHaunch = 0, olderDrHaunch = 0,
	olderKgPotatoes = 0, olderDrPotatoes = 0, olderKgAnvil = 0, olderDrAnvil = 0, olderKgInternal_organs = 0, olderDrInternal_organs = 0,
	olderKgEtc = 0, olderDrEtc = 0, olderAmountSpice = 0, olderDrSpice = 0, olderAmountWine = 0, olderDrWine = 0, olderAmountBeer = 0, olderDrBeer = 0,
	olderAmountJuice = 0, olderDrJuice = 0, olderAmountWater = 0, olderDrWater = 0, olderKgCucumbers = 0, olderDrCucumbers = 0, 
	olderKgEggplant = 0, olderDrEggplant = 0, olderKgOnion = 0, olderDrOnion = 0, olderKgGreen = 0, olderDrGreen = 0; 

function subTotal(name)
{
		// total price for barbecue 
	switch (name) 
    {
		case pig: 
			if (document.getElementById("pig").checked == false)
			{
				window.alert("checked == false");
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) -  
													Number(document.getElementById("kgPig").value) * Number(document.getElementById("drPig").value);
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

				window.alert("subTotal checked == true");
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
              document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) -  
													Number(document.getElementById("kgLamb").value) * Number(document.getElementById("drLamb").value);
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
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) -  
													Number(document.getElementById("kgGoat").value) * Number(document.getElementById("drGoat").value);
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
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) -  
													Number(document.getElementById("kgChicken").value) * Number(document.getElementById("drChicken").value);
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
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) -  
													Number(document.getElementById("kgWing").value) * Number(document.getElementById("drWing").value);
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
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) -  
													Number(document.getElementById("kgHaunch").value) * Number(document.getElementById("drHaunch").value);
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
	case potatoes: 
			if (document.getElementById("potatoes").checked == false)
			{
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) -  
													Number(document.getElementById("kgPotatoes").value) * Number(document.getElementById("drPotatoes").value);
				document.getElementById("drPotatoes").disabled = true;
				document.getElementById("kgPotatoes").disabled = true;
				document.getElementById("kgPotatoes").value = "";
				document.getElementById("drPotatoes").value = "";

				olderKgPotatoes = 0; 
				olderDrPotatoes = 0;
               
                price(potatoes);
			}
			else 
			{

			//	window.alert("subTotal checked == true");
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) - olderKgPotatoes * olderDrPotatoes; 
				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) +  
												Number(document.getElementById("kgPotatoes").value) * Number(document.getElementById("drPotatoes").value);

		 	 	olderKgPotatoes = Number(document.getElementById("kgPotatoes").value);
                olderDrPotatoes = Number(document.getElementById("drPotatoes").value);


				document.getElementById("drPotatoes").disabled = false;
				document.getElementById("kgPotatoes").disabled = false;

			}	
		break;
	case anvil: 
			if (document.getElementById("anvil").checked == false)
			{
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) -  
													Number(document.getElementById("kgAnvil").value) * Number(document.getElementById("drAnvil").value);
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
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) -  
													Number(document.getElementById("kgInternal_organs").value) * Number(document.getElementById("drInternal_organs").value);
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
                document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) -  
													Number(document.getElementById("kgEtc").value) * Number(document.getElementById("drEtc").value);
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

				window.alert("subTotal checked == true");
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

			 
                document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) -  
													Number(document.getElementById("amountSpice").value) * Number(document.getElementById("drSpice").value);
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
				window.alert("checked == true");
				document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) - olderAmountSpice * olderDrSpice; 
				window.alert(document.getElementById("totalDrink").value);
				document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) +  
												Number(document.getElementById("amountSpice").value) * Number(document.getElementById("drSpice").value);
				window.alert(document.getElementById("totalDrink").value);

		 	 	olderAmountSpice = Number(document.getElementById("amountSpice").value);
                olderDrSpice = Number(document.getElementById("drSpice").value);


				document.getElementById("drSpice").disabled = false;
				document.getElementById("amountSpice").disabled = false;
		}
		break;
	case secondSpice: 
			if (document.getElementById("wine").checked == false)
			{
                document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) -  
													Number(document.getElementById("amountWine").value) * Number(document.getElementById("drWine").value);
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
                document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) -  
													Number(document.getElementById("amountBeer").value) * Number(document.getElementById("drBeer").value);
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
                document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) -  
													Number(document.getElementById("amountJuice").value) * Number(document.getElementById("drJuice").value);
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
	case fifthSpice: 
			if (document.getElementById("fizzy").checked == false)
			{
                document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) -  
													Number(document.getElementById("amountFizzy").value) * Number(document.getElementById("drFizzy").value);
				document.getElementById("drFizzy").disabled = true;
				document.getElementById("amountFizzy").disabled = true;
				document.getElementById("amountFizzy").value = "";
				document.getElementById("drFizzy").value = "";

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
                document.getElementById("totalDrink").value = Number(document.getElementById("totalDrink").value) -  
													Number(document.getElementById("amountWater").value) * Number(document.getElementById("drWater").value);
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
                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) -  
													Number(document.getElementById("kgTomato").value) * Number(document.getElementById("drTomato").value);
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
                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) -  
													Number(document.getElementById("kgCucumbers").value) * Number(document.getElementById("drCucumbers").value);
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
                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) -  
													Number(document.getElementById("kgEggplant").value) * Number(document.getElementById("drEggplant").value);
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
                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) -  
													Number(document.getElementById("kgOnion").value) * Number(document.getElementById("drOnion").value);
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
                document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) -  
													Number(document.getElementById("kgGreens").value) * Number(document.getElementById("drGreens").value);
				document.getElementById("drGreens").disabled = true;
				document.getElementById("kgGreens").disabled = true;
				document.getElementById("kgGreens").value = "";
				document.getElementById("drGreens").value = "";

				olderKgGreens = 0; 
				olderDrGreens = 0;
               
                price(greens);
			}
			else 
			{

				document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) - olderKgGreens * olderDrGreens; 
				document.getElementById("totalVegetable").value = Number(document.getElementById("totalVegetable").value) +  
												Number(document.getElementById("kgGreen").value) * Number(document.getElementById("drGreen").value);

		 	 	olderKgGreen = Number(document.getElementById("kgGreen").value);
                olderDrGreen = Number(document.getElementById("drGreen").value);


				document.getElementById("drGreen").disabled = false;
				document.getElementById("kgGreen").disabled = false;

			}	
		break;

		// etc for vegetable 
			
	}
}
 
			
