function subTotal( name )
{
		// total price for barbecue 
	switch ( name ) 
    {
		case pig: 
			if (document.getElementById("pig").checked == false)
			{
				document.getElementById("drPig").disabled = true;
				document.getElementById("kgPig").disabled = true;

				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) -  Number(document.getElementById("kgPig").value) * Number(documen     t.getElementById("drPig").value);
		
				document.getElementById("kgPig").value = "";
				document.getElementById("drPig").value = "";
			}
			else 
			{
				document.getElementById("drPig").disabled = true;
				document.getElementById("kgPig").disabled = true;

				document.getElementById("totalBarbecue").value = Number(document.getElementById("totalBarbecue").value) -  Number(document.getElementById("kgPig").value) * Number(documen     t.getElementById("drPig").value);
			}	
		
		break; 
	}
}
 
			
