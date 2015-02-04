var olderKgPig = 0, olderDrPig = 0, olderKgLamb = 0, olderDrLamb = 0, olderKgGoat = 0, olderDrGoat = 0,
	olderKgChicken = 0, olderDrChicken = 0, olderKgWing = 0, olderDrWing = 0, olderKgHaunch = 0, olderDrHaunch = 0,
	olderKgPotatoes = 0, olderDrPotatoes = 0, olderKgAnvil = 0, olderDrAnvil = 0, olderKgInternal_organs = 0, olderDrInternal_organs = 0,
	olderKgEtc = 0, olderDrEtc = 0; 

function subTotal(name)
{
		// total price for barbecue 
	switch (name) 
    {
		case pig: 
			if (document.getElementById("pig").checked == false)
			{
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

			//	window.alert("subTotal checked == true");
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
		
	}
}
 
			
