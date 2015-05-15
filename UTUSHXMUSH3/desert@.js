jQuery(document).ready(function($){
	var totalSum = function(){
		var inputs = $(".gumar"),
		    str = 0;
		$.each( inputs, function( key, value ) {
		  	str = str + Number($(value).val());
		});
		$("#totalDesert").val(str);	
	}
	$(":checkbox").click(function(){
	//	window.alert($(this).attr('id'));
		
		switch($(this).attr('id'))
		{
			case "Konfet":
				if ($("#Konfet").is(":checked"))
				{
					$("#kgKonfet").val('1'); 
					$("#drKonfet").val('2000'); 
					$("#kgKonfet").prop('disabled', false); 
					$("#drKonfet").prop('disabled',false);
				} 
				else 
				{
					$("#kgKonfet").val('0'); 
					$("#drKonfet").val('0'); 
					$("#kgKonfet").prop('disabled',true); 
					$("#drKonfet").prop('disabled',true);  
				}
				$("#KonfetPrice").val(Number($("#kgKonfet").val()) * Number($("#drKonfet").val()));
				break;
			case "Shokolad":
				if ($("#Shokolad").is(":checked"))
				{
					$("#kgShokolad").val('1'); 
					$("#drShokolad").val('2500'); 
					$("#kgShokolad").prop('disabled', false); 
					$("#drShokolad").prop('disabled',false);
				} 
				else 
				{
					$("#kgShokolad").val('0'); 
					$("#drShokolad").val('0'); 
					$("#kgShokolad").prop('disabled',true); 
					$("#drShokolad").prop('disabled',true);  
				}
				$("#ShokoladPrice").val(Number($("#kgShokolad").val()) * Number($("#drShokolad").val()));
				break;
			case "Txvacq":
				if ($("#Txvacq").is(":checked"))
				{
					$("#kgTxvacq").val('1'); 
					$("#drTxvacq").val('2000'); 
					$("#kgTxvacq").prop('disabled', false); 
					$("#drTxvacq").prop('disabled',false);
				} 
				else 
				{
					$("#kgTxvacq").val('0'); 
					$("#drTxvacq").val('0'); 
					$("#kgTxvacq").prop('disabled',true); 
					$("#drTxvacq").prop('disabled',true);  
				}
				$("#TxvacqPrice").val(Number($("#kgTxvacq").val()) * Number($("#drTxvacq").val()));
				break;
			case "Tey":
				if ($("#Tey").is(":checked"))
				{
					$("#kgTey").val('1'); 
					$("#drTey").val('600'); 
					$("#kgTey").prop('disabled', false); 
					$("#drTey").prop('disabled',false);
				} 
				else 
				{
					$("#kgTey").val('0'); 
					$("#drTey").val('0'); 
					$("#kgTey").prop('disabled',true); 
					$("#drTey").prop('disabled',true);  
				}
				$("#TeyPrice").val(Number($("#kgTey").val()) * Number($("#drTey").val()));
				break;
			case "Surch":
				if ($("#Surch").is(":checked"))
				{
					$("#kgSurch").val('1'); 
					$("#drSurch").val('400'); 
					$("#kgSurch").prop('disabled', false); 
					$("#drSurch").prop('disabled',false);
				} 
				else 
				{
					$("#kgSurch").val('0'); 
					$("#drSurch").val('0'); 
					$("#kgSurch").prop('disabled',true); 
					$("#drSurch").prop('disabled',true);  
				}
				$("#SurchPrice").val(Number($("#kgSurch").val()) * Number($("#drSurch").val()));
				break;
			case "LS":
				if ($("#LS").is(":checked"))
				{
					$("#kgLS").val(Math.round(1 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) )));
					$("#drLS").val('80'); 
					$("#kgLS").prop('disabled', false); 
					$("#drLS").prop('disabled',false);
				} 
				else 
				{
					$("#kgLS").val('0'); 
					$("#drLS").val('0'); 
					$("#kgLS").prop('disabled',true); 
					$("#drLS").prop('disabled',true);  
				}
				$("#LSPrice").val(Number($("#kgLS").val()) * Number($("#drLS").val()));
				break;
			case "Mrger":
					//window.alert("Switch");
				if ($("#Mrger").is(":checked"))
				{
					$("#drMrger").val('250');
					$("#kgMrger").prop('disabled', false); 
					$("#drMrger").prop('disabled',false);
					
					$("#kgMrger").val(Math.round(0.2 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) )));
 					
					$("#firstMrger").change(function(){	
						$("#kgMrger").val(Math.round(0.2 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) )));
						var x = $("#firstMrger").val();
						switch(x)
						{
							case "Apple":
						     	     $("#drMrger").val('250'); 
							break;
							case "Pear":
						     	     $("#drMrger").val('350');	 
							break;
							case "Banana":
						             $("#drMrger").val('450'); 
							break;
							case "Orange":
						             $("#drMrger").val('550'); 
							break;
							case "Mandarin":
						             $("#drMrger").val('650'); 
							break;
							default: 
						             $("#kgMrger").val("");
						             $("#drMrger").val("");
							break;
						}
						$("#MrgerPrice").val(Number($("#kgMrger").val()) * Number($("#drMrger").val()));
						totalSum();
					})

				} 
				else 
				{
					$("#kgMrger").val('0'); 
					$("#drMrger").val('0'); 
					$("#kgMrger").prop('disabled',true); 
					$("#drMrger").prop('disabled',true);  
				}
			$("#MrgerPrice").val(Number($("#kgMrger").val()) * Number($("#drMrger").val()));
			break;
			 case "Axander":
				//window.alert("Switch");
				if ($("#Axander").is(":checked"))
				{
					$("#kgAxander").val('1'); 
					$("#drAxander").val('450');
					$("#kgAxander").prop('disabled', false); 
					$("#drAxander").prop('disabled',false);
					
					$("#firstAxander").change(function(){
						
						var x = $("#firstAxander").val();
						switch(x)
						{
							case "Chips":
						     	     $("#drAxander").val('450'); 
							break;
							case "Sunflower":
						     	     $("#drAxander").val('250');	 
							break;
							case "Peanut":
						             $("#drAxander").val('350'); 
							break;
							case "Salt_sticks":
						             $("#drAxander").val('550'); 
							break;
							default: 
						             $("#kgAxander").val("");
						             $("#drAxander").val("");
							break;
						}
						$("#AxanderPrice").val(Number($("#kgAxander").val()) * Number($("#drAxander").val()));
						totalSum();
					})

				} 
				else 
				{
					$("#kgAxander").val('0'); 
					$("#drAxander").val('0'); 
					$("#kgAxander").prop('disabled',true); 
					$("#drAxander").prop('disabled',true);  
				}
			$("#AxanderPrice").val(Number($("#kgAxander").val()) * Number($("#drAxander").val()));
			break;
		
			case "Hac":
				//window.alert("Switch");
				if ($("#Hac").is(":checked"))
				{
					
					$("#drHac").val('370');
					$("#hatHac").prop('disabled', false); 
					$("#drHac").prop('disabled',false);
					$("#hatHac").val(Math.round(0.5 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) )));
 					
					$("#firstHac").change(function(){
					$("#hatHac").val(Math.round(0.5 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) )));	
						var x = $("#firstHac").val();
						switch(x)
						{
							case "Lavash":
						     	     $("#drHac").val('370'); 
							break;
							case "Matnaqash":
						     	     $("#drHac").val('120');	 
							break;
							case "Romashka":
						             $("#drHac").val('120'); 
							break;
							case "Baton":
						             $("#drHac").val('100'); 
							break;
							default: 
						             $("#hatHac").val("");
						             $("#drHac").val("");
							break;
						}
						$("#HacPrice").val(Number($("#hatHac").val()) * Number($("#drHac").val()));
						totalSum();
					})

				} 
				else 
				{
					$("#hatHac").val('0'); 
					$("#drHac").val('0'); 
					$("#hatHac").prop('disabled',true); 
					$("#drHac").prop('disabled',true);  
				}
			$("#HacPrice").val(Number($("#hatHac").val()) * Number($("#drHac").val()));
			break;
			case "EtcD":
                		if ($("#EtcD").is(":checked")) 
                		{
                    			$("#EtcDName").prop("disabled", false);
                    			$("#kgEtcD").prop("disabled",false);
                    			$("#drEtcD").prop("disabled",false);
                		}
                		else 
                		{
                    			$("#kgEtcD").val('0');
                    			$("#drEtcD").val('0');
                    			$("#EtcDName").prop("disabled", true);
                    			$("#kgEtcD").prop("disabled",true);
                    			$("#drEtcD").prop("disabled",true);
                		}
                		$("#EtcDPrice").val(Number($("#kgEtcD").val()) * Number($("#drEtcD").val()));
                		break;
		};
	$("#totalDesert").val(Number($("#KonfetPrice").val()) + Number($("#ShokoladPrice").val()) + Number($("#TxvacqPrice").val()) + Number($("#TeyPrice").val()) + Number($("#SurchPrice").val()) + Number($("#LSPrice").val()) + Number($("#MrgerPrice").val()) + Number($("#AxanderPrice").val()) + Number($("#HacPrice").val()) + Number($("#EtcDPrice").val()));

	});
	$(":text").blur(function(){

		switch($(this).attr('id'))
		{
			case "kgKonfet":
			case "drKonfet":
					$("#KonfetPrice").val(Number($("#kgKonfet").val()) * Number($("#drKonfet").val()));
				break; 
			case "kgShokolad":
			case "drShokolad":
					$("#ShokoladPrice").val(Number($("#kgShokolad").val()) * Number($("#drShokolad").val()));
				break; 
			case "kgTxvacq":
			case "drTxvacq":
					$("#TxvacqPrice").val(Number($("#kgTxvacq").val()) * Number($("#drTxvacq").val()));
				break;  
			case "kgTey":
			case "drTey":
					$("#TeyPrice").val(Number($("#kgTey").val()) * Number($("#drTey").val()));
				break; 
			case "kgSurch":
			case "drSurch":
					$("#SurchPrice").val(Number($("#kgSurch").val()) * Number($("#drSurch").val()));
				break; 
			case "kgLS":
			case "drLS":
					$("#LSPrice").val(Number($("#kgLS").val()) * Number($("#drLS").val()));
				break; 
			case "kgMrger":
			case "drMrger":
					$("#MrgerPrice").val(Number($("#kgMrger").val()) * Number($("#drMrger").val()));
				break; 
			case "kgAxander":
			case "drAxander":
					$("#AxanderPrice").val(Number($("#kgAxander").val()) * Number($("#drAxander").val()));
				break; 
			case "hatHac":
			case "drHac":
					$("#HacPrice").val(Number($("#hatHac").val()) * Number($("#drHac").val()));
				break; 
			case "kgEtcD":
            		case "drEtcD":
                			$("#EtcDPrice").val(Number($("#kgEtcD").val()) * Number($("#drEtcD").val()));
            			break; 
		}
		$("#totalDesert").val(Number($("#KonfetPrice").val()) + Number($("#ShokoladPrice").val()) + Number($("#TxvacqPrice").val()) + Number($("#TeyPrice").val()) + Number($("#SurchPrice").val()) + Number($("#LSPrice").val()) + Number($("#MrgerPrice").val()) + Number($("#AxanderPrice").val()) + Number($("#HacPrice").val()) + Number($("#EtcDPrice").val()));

	});
});
