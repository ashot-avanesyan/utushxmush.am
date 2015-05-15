 

 jQuery(document).ready(function($){
	$(":checkbox").click(function(){
		
		switch($(this).attr('id'))
		{
			case "Lolik":
				if ($("#Lolik").is(":checked"))
				{
					$("#kgLolik").val(0.5 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val())));					
					$("#drLolik").val('300'); 
					$("#kgLolik").prop('disabled', false); 
					$("#drLolik").prop('disabled',false);
				} 
				else 
				{
					$("#kgLolik").val('0'); 
					$("#drLolik").val('0'); 
					$("#kgLolik").prop('disabled',true); 
					$("#drLolik").prop('disabled',true);  
				}
			$("#LolikPrice").val(Number($("#kgLolik").val()) * Number($("#drLolik").val()));
			break;
			case "Varung":
				if ($("#Varung").is(":checked"))
				{
					$("#kgVarung").val(0.25 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val())));	 
					$("#drVarung").val('400'); 
					$("#kgVarung").prop('disabled', false); 
					$("#drVarung").prop('disabled',false);
				} 
				else 
				{
					$("#kgVarung").val('0'); 
					$("#drVarung").val('0'); 
					$("#kgVarung").prop('disabled',true); 
					$("#drVarung").prop('disabled',true);  
				}
			$("#VarungPrice").val(Number($("#kgVarung").val()) * Number($("#drVarung").val()));
			break;
			
			break; 
			case "Smbuk":
				if ($("#Smbuk").is(":checked"))
				{
					$("#kgSmbuk").val(0.2 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()))); 
					$("#drSmbuk").val('500'); 
					$("#kgSmbuk").prop('disabled',false); 
					$("#drSmbuk").prop('disabled',false);
				} 
				else 
				{
					$("#kgSmbuk").val('0'); 
					$("#drSmbuk").val('0');  
					$("#kgSmbuk").prop('disabled',true); 
					$("#drSmbuk").prop('disabled',true);
				}
			$("#SmbukPrice").val(Number($("#kgSmbuk").val()) * Number($("#drSmbuk").val()));
			break;

			case "Sox":
				if ($("#Sox").is(":checked"))
				{
					$("#kgSox").val(0.2 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val())));
					$("#drSox").val('350'); 
					$("#kgSox").prop('disabled',false); 
					$("#drSox").prop('disabled',false);
				} 
				else 
				{
					$("#kgSox").val('0'); 
					$("#drSox").val('0');  
					$("#kgSox").prop('disabled',true); 
					$("#drSox").prop('disabled',true);
				}
			$("#SoxPrice").val(Number($("#kgSox").val()) * Number($("#drSox").val()));
			break;


			case "Kanachi":
				if ($("#Kanachi").is(":checked"))
				{
					$("#punjKanachi").val('1');
					$("#drKanachi").val('250'); 
					$("#punjKanachi").prop('disabled',false); 
					$("#drKanachi").prop('disabled',false);
				} 
				else 
				{
					$("#punjKanachi").val('0'); 
					$("#drKanachi").val('0');  
					$("#punjKanachi").prop('disabled',true); 
					$("#drKanachi").prop('disabled',true);
				}
			$("#KanachiPrice").val(Number($("#punjKanachi").val()) * Number($("#drKanachi").val()));
			break;

			case "Kartofil":
				if ($("#Kartofil").is(":checked"))
				{
					$("#kgKartofil").val(0.5 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val())));
					$("#drKartofil").val('250'); 
					$("#kgKartofil").prop('disabled',false); 
					$("#drKartofil").prop('disabled',false);
				} 
				else 
				{
					$("#kgKartofil").val('0'); 
					$("#drKartofil").val('0');  
					$("#kgKartofil").prop('disabled',true); 
					$("#drKartofil").prop('disabled',true);
				}
			$("#KartofilPrice").val(Number($("#kgKartofil").val()) * Number($("#drKartofil").val()));
			break;

			case "Bibar":
				if ($("#Bibar").is(":checked"))
				{
					$("#kgBibar").val('1'); 
					$("#drBibar").val('450'); 
					$("#kgBibar").prop('disabled',false); 
					$("#drBibar").prop('disabled',false);
				} 
				else 
				{
					$("#kgBibar").val('0'); 
					$("#drBibar").val('0');  
					$("#kgBibar").prop('disabled',true); 
					$("#drBibar").prop('disabled',true);
				}
			$("#BibarPrice").val(Number($("#kgBibar").val()) * Number($("#drBibar").val()));
			break;

			case "EtcB":
				if ($("#EtcB").is(":checked")) 
				{
					$("#EtcBName").prop("disabled", false);
					$("#kgEtcB").prop("disabled",false);
					$("#drEtcB").prop("disabled",false);
				}
				else 
				{
					$("#kgEtcB").val('0');
					$("#drEtcB").val('0');
					$("#EtcBName").prop("disabled", true);
					$("#kgEtcB").prop("disabled",true);
					$("#drEtcB").prop("disabled",true);
				}
				$("#EtcBPrice").val(Number($("#kgEtcB").val()) * Number($("#drEtcB").val()));
				break;
		};
		$("#totalVegetable").val(Number($("#LolikPrice").val()) + Number($("#VarungPrice").val()) + Number($("#SmbukPrice").val()) + Number($("#SoxPrice").val()) + Number($("#KanachiPrice").val()) + Number($("#KartofilPrice").val()) + Number($("#BibarPrice").val()) + Number($("#EtcBPrice").val()));

	});
	
	$(":text").blur(function(){

		switch($(this).attr('id'))
		{
			
			case "kgLolik":
			case "drLolik":
				$("#LolikPrice").val(Number($("#kgLolik").val()) * Number($("#drLolik").val()));
			break; 
			
			case "kgVarung":
			case "drVarung":
				$("#VarungPrice").val(Number($("#kgVarung").val()) * Number($("#drVarung").val()));
			break;
			
			case "kgSmbuk":
			case "drSmbuk":
				$("#SmbukPrice").val(Number($("#kgSmbuk").val()) * Number($("#drSmbuk").val()));
			break;

                        case "kgSox":
			case "drSox":
				$("#SoxPrice").val(Number($("#kgSox").val()) * Number($("#drSox").val()));
			break;
			
			case "punjKanachi":
			case "drKanachi":
				$("#KanachiPrice").val(Number($("#punjKanachi").val()) * Number($("#drKanachi").val()));
			break;

			case "kgKartofil":
			case "drKartofil":
				$("#KartofilPrice").val(Number($("#kgKartofil").val()) * Number($("#drKartofil").val()));
			break;

			case "kgBibar":
			case "drBibar":
				$("#BibarPrice").val(Number($("#kgBibar").val()) * Number($("#drBibar").val()));
			break;	
			case "kgEtcB":
			case "drEtcB":
				$("#EtcBPrice").val(Number($("#kgEtcB").val()) * Number($("#drEtcB").val()));
			break;
		}

		$("#totalVegetable").val(Number($("#LolikPrice").val()) + Number($("#VarungPrice").val()) + Number($("#SmbukPrice").val()) + Number($("#SoxPrice").val()) + Number($("#KanachiPrice").val()) + Number($("#KartofilPrice").val()) + Number($("#BibarPrice").val()) + Number($("#EtcBPrice").val()));
  });

})



