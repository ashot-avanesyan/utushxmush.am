jQuery(document).ready(function($){
	var totalSum = function(){
		var inputs = $(".gumar"),
		    str = 0;
		$.each( inputs, function( key, value ) {
		  	str = str + Number($(value).val());
		});
		$("#totalKhimchq").val(str);	
	}
	$(":checkbox").click(function(){
//		window.alert($(this).attr('id'));
		/*var itemSum = function(){
console.log("mtav")
			var inputs = $(".item"),
			     total = 0;
			$.each( inputs, function( key, value ) {
			  	var item = $(".item").eq(key).find("input[type='text']");
				var count = item.eq(0).val();
			  	var price = item.eq(1).val();
				sum = Number(count) * Number(price);

				total = total + sum
			  	item.eq(2).val(sum);
			});
			$("#totalKhimchq").val(total);
		}
		$(":text").on("keyup", function(){
console.log("keyup")
			setTimeout(itemSum(), 2000);
		});
		$("select").change(function(){
			setTimeout(itemSum(), 2000);
		});
		$("input").change(function(){
console.log("input")
			setTimeout(itemSum(), 2000);
		});*/
		
		switch($(this).attr('id'))
		{
			
			case "Oxi":
					//window.alert("Switch");
				if ($("#Oxi").is(":checked"))
				{
					$("#drOxi").val('2700');
					$("#hatOxi").prop('disabled', false); 
					$("#drOxi").prop('disabled',false);

					$("#hatOxi").val(Math.round(0.5 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) )));
 					
					$("#firstSpice").change(function(){

						$("#hatOxi").val(Math.round(0.5 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) )));		 				 
						var x = $("#firstSpice").val();
						switch(x)
						{
							case "Nemiroff":
						     	     $("#drOxi").val('2700'); 
							break;
							case "RusskiyMed":
						     	     $("#drOxi").val('1850');	 
							break;
							case "Artsakh":
						             $("#drOxi").val('800'); 
							break;
							case "Putinka":
						             $("#drOxi").val('1400'); 
							break;
							default: 
						             $("#hatOxi").val("");
						             $("#drOxi").val("");
							break;
						}
						$("#OxiPrice").val(Number($("#hatOxi").val()) * Number($("#drOxi").val()));
					})

				} 
				else 
				{
					$("#hatOxi").val('0'); 
					$("#drOxi").val('0'); 
					$("#hatOxi").prop('disabled',true); 
					$("#drOxi").prop('disabled',true);  
				}
			$("#OxiPrice").val(Number($("#hatOxi").val()) * Number($("#drOxi").val()));
			break;
		case "Gini":
					//window.alert("Switch");
				if ($("#Gini").is(":checked"))
				{
					
					$("#drGini").val('1720');
					$("#hatGini").prop('disabled', false); 
					$("#drGini").prop('disabled',false);

					$("#hatGini").val(Math.round(0.25 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) )));
 					
 					
					$("#secondSpice").change(function(){

					$("#hatGini").val(Math.round(0.25 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) )));
 						
						var x = $("#secondSpice").val();
						switch(x)
						{
							case "Armenia":
						     	     	$("#drGini").val('1720'); 
								break;
							case "Areni":
						     	     	$("#drGini").val('1600');	 
								break;
							case "Kagor":
						             	$("#drGini").val('1700'); 
								break;
							case "Amaras":
						             	$("#drGini").val('1450'); 
								break;
							case "Shushi":
						             	$("#drGini").val('1750'); 
								break;
							default: 
						             	$("#hatGini").val("");
						             	$("#drGini").val("");
								break;
						}
						$("#GiniPrice").val(Number($("#hatGini").val()) * Number($("#drGini").val()));
					})

				} 
				else 
				{
					$("#hatGini").val('0'); 
					$("#drGini").val('0'); 
					$("#hatGini").prop('disabled',true); 
					$("#drGini").prop('disabled',true);  
				}
				$("#GiniPrice").val(Number($("#hatGini").val()) * Number($("#drGini").val()));
				break;

			case "Garejur":
					//window.alert("Switch");
				if ($("#Garejur").is(":checked"))
				{
					
					$("#drGarejur").val('430');
					$("#hatGarejur").prop('disabled', false); 
					$("#drGarejur").prop('disabled',false);

					$("#hatGarejur").val(Math.round((Number($("#inputMenl3").val()*1)+ Number($("#inputWomen3").val()) )));
 					
 					
					$("#thirdSpice").change(function(){	

					$("#hatGarejur").val(Math.round((Number($("#inputMenl3").val()*1)+ Number($("#inputWomen3").val()) )));
 					
						var x = $("#thirdSpice").val();
						switch(x)
						{
							case "Gyumri":
						     	     	$("#drGarejur").val('430'); 
								break;
							case "Baltika":
						     	     	$("#drGarejur").val('440');	 
								break;
							case "Kilikia":
						             	$("#drGarejur").val('370'); 
								break;
							case "Kotayk":
						             	$("#drGarejur").val('360'); 
								break;
							case "Ararat":
						             	$("#drGarejur").val('370'); 
								break;
							default: 
						             	$("#hatGarejur").val("");
						             	$("#drGarejur").val("");
								break;
						}
						$("#GarejurPrice").val(Number($("#hatGarejur").val()) * Number($("#drGarejur").val()));
					})

				} 
				else 
				{
					$("#hatGarejur").val('0'); 
					$("#drGarejur").val('0'); 
					$("#hatGarejur").prop('disabled',true); 
					$("#drGarejur").prop('disabled',true);  
				}
			$("#GarejurPrice").val(Number($("#hatGarejur").val()) * Number($("#drGarejur").val()));
			break;
			
			case "BnakanHyut":
					//window.alert("Switch");
				if ($("#BnakanHyut").is(":checked"))
				{
					
					$("#drBnakanHyut").val('450');
					$("#hatBnakanHyut").prop('disabled', false); 
					$("#drBnakanHyut").prop('disabled',false);

					$("#hatBnakanHyut").val(Math.round(0.5 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) )));
 					
 					
					$("#fourthSpice").change(function(){

					$("#hatBnakanHyut").val(Math.round(0.5 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) )));
 						
						var x = $("#fourthSpice").val();
						switch(x)
						{
							case "Menq":
						     	     	$("#drBnakanHyut").val('450'); 
								break;
							case "Noy":
						     	     	$("#drBnakanHyut").val('720');	 
								break;
							case "Ararat":
						             	$("#drBnakanHyut").val('620'); 
								break;
							case "Sis":
						             	$("#drBnakanHyut").val('460'); 
								break;
							case "J7":
						             	$("#drBnakanHyut").val('850'); 
								break;
							default: 
						             	$("#hatBnakanHyut").val("");
						             	$("#drBnakanHyut").val("");
								break;
						}
						$("#BnakanHyutPrice").val(Number($("#hatBnakanHyut").val()) * Number($("#drBnakanHyut").val()));
					})

				} 
				else 
				{
					$("#hatBnakanHyut").val('0'); 
					$("#drBnakanHyut").val('0'); 
					$("#hatBnakanHyut").prop('disabled',true); 
					$("#drBnakanHyut").prop('disabled',true);  
				}
				$("#BnakanHyutPrice").val(Number($("#hatBnakanHyut").val()) * Number($("#drBnakanHyut").val()));
				break;
			
			case "GazayinHyut":
					//window.alert("Switch");
				if ($("#GazayinHyut").is(":checked"))
				{
					
					$("#drGazayinHyut").val('390');
					$("#hatGazayinHyut").prop('disabled', false); 
					$("#drGazayinHyut").prop('disabled',false);

					$("#hatGazayinHyut").val(Math.round(0.5 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) )));
 					
 					
					$("#fifthSpice").change(function(){

					$("#hatGazayinHyut").val(Math.round(0.5 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) )));
 						
						var x = $("#fifthSpice").val();
						switch(x)
						{
							case "CocaCola":
						     	     	$("#drGazayinHyut").val('390'); 
								break;
							case "Fanta":
						     	     	$("#drGazayinHyut").val('390');	 
								break;
							case "Sprite":
						             	$("#drGazayinHyut").val('390'); 
								break;
							case "PapaKarlo":
						             	$("#drGazayinHyut").val('230'); 
								break;
							case "Tnjri":
						             	$("#drGazayinHyut").val('190'); 
								break;
							default: 
						             	$("#hatGazayinHyut").val("");
						             	$("#drGazayinHyut").val("");
								break;
						}
						$("#GazayinHyutPrice").val(Number($("#hatGazayinHyut").val()) * Number($("#drGazayinHyut").val()));
					})

				} 
				else 
				{
					$("#hatGazayinHyut").val('0'); 
					$("#drGazayinHyut").val('0'); 
					$("#hatGazayinHyut").prop('disabled',true); 
					$("#drGazayinHyut").prop('disabled',true);  
				}
				$("#GazayinHyutPrice").val(Number($("#hatGazayinHyut").val()) * Number($("#drGazayinHyut").val()));
				break;
		case "Jur":
					//window.alert("Switch");
				if ($("#Jur").is(":checked"))
				{
					
					$("#drJur").val('250');
					$("#hatJur").prop('disabled', false); 
					$("#drJur").prop('disabled',false);

					$("#hatJur").val(Math.round(0.25 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) )));
 					
 					
					$("#SixthSpice").change(function(){	

					$("#hatJur").val(Math.round(0.25 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) )));
 					
						var x = $("#SixthSpice").val();
						switch(x)
						{
							case "Jermuk":
						     	     	$("#drJur").val('250'); 
								break;
							case "Bjni":
						     	     	$("#drJur").val('170');	 
								break;
							case "Byuregh":
						             	$("#drJur").val('150'); 
								break;
							case "Noy":
						             	$("#drJur").val('230'); 
								break;
							case "Arzni":
						             	$("#drJur").val('170'); 
								break;
							default: 
						             	$("#hatJur").val("");
						             	$("#drJur").val("");
								break;
						}
						$("#JurPrice").val(Number($("#hatJur").val()) * Number($("#drJur").val()));
					})

				} 
				else 
				{
					$("#hatJur").val('0'); 
					$("#drJur").val('0'); 
					$("#hatJur").prop('disabled',true); 
					$("#drJur").prop('disabled',true);  
				}
				$("#JurPrice").val(Number($("#hatJur").val()) * Number($("#drJur").val()));
				break;
		case "Tan":
                	if ($("#Tan").is(":checked"))
                	{
                    		
                    		$("#drTan").val('180'); 
                    		$("#hatTan").prop('disabled', false); 
                    		$("#drTan").prop('disabled',false);

					$("#hatTan").val(Math.round(0.5 *(Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) )));
 					
                	} 
                	else 
                	{
                    		$("#hatTan").val('0'); 
                    		$("#drTan").val('0'); 
                    		$("#hatTan").prop('disabled',true); 
                    		$("#drTan").prop('disabled',true);  
                	}
            		$("#TanPrice").val(Number($("#hatTan").val()) * Number($("#drTan").val()));
            		break;
			case "etcXmichq":
                		if ($("#etcXmichq").is(":checked")) 
                		{
                    			$("#EtcNameXmichq").prop("disabled", false);
                    			$("#hatEtcXmichq").prop("disabled",false);
                    			$("#drEtcXmichq").prop("disabled",false);
                		}
                		else 
                		{
                    			$("#hatEtcXmichq").val('0');
                    			$("#drEtcXmichq").val('0');
                    			$("#EtcNameXmichq").prop("disabled", true);
                    			$("#hatEtcXmichq").prop("disabled",true);
                    			$("#drEtcXmichq").prop("disabled",true);
                		}
                		$("#EtcXmichqPrice").val(Number($("#hatEtcXmichq").val()) * Number($("#drEtcXmichq").val()));
                		break;
		
			};
	$("#totalKhimchq").val(Number($("#OxiPrice").val()) + Number($("#TanPrice").val()) + Number($("#GiniPrice").val()) + Number($("#GarejurPrice").val()) + Number($("#BnakanHyutPrice").val()) + Number($("#GazayinHyutPrice").val()) + Number($("#JurPrice").val()) + Number($("#EtcXmichqPrice").val()));

	});
	$(":text").blur(function(){

		switch($(this).attr('id'))
		{
		
			case "hatOxi":
			case "drOxi":
					$("#OxiPrice").val(Number($("#hatOxi").val()) * Number($("#drOxi").val()));
				break;
			case "hatGini":
			case "drGini":
					$("#GiniPrice").val(Number($("#hatGini").val()) * Number($("#drGini").val()));
				break;
            case "hatTan":
            case "drTan":
              		$("#TanPrice").val(Number($("#hatTan").val()) * Number($("#drTan").val()));
            	break;
            case "hatGarejur":
			case "drGarejur":
					$("#GarejurPrice").val(Number($("#hatGarejur").val()) * Number($("#drGarejur").val()));
				break;
			case "hatBnakanHyut":
			case "drBnakanHyut":
					$("#BnakanHyutPrice").val(Number($("#hatBnakanHyut").val()) * Number($("#drBnakanHyut").val()));
				break;
			case "hatGazayinHyut":
			case "drGazayinHyut":
					$("#GazayinHyutPrice").val(Number($("#hatGazayinHyut").val()) * Number($("#drGazayinHyut").val()));
				break;
			case "hatJur":
			case "drJur":
					$("#JurPrice").val(Number($("#hatJur").val()) * Number($("#drJur").val()));
				break;
	    	case "hatEtcXmichq":
       		case "drEtcXmichq":
                	$("#EtcXmichqPrice").val(Number($("#hatEtcXmichq").val()) * Number($("#drEtcXmichq").val()));
            			break;
		}

		$("#totalKhimchq").val(Number($("#OxiPrice").val()) + Number($("#TanPrice").val()) + Number($("#GiniPrice").val()) + Number($("#GarejurPrice").val()) + Number($("#BnakanHyutPrice").val()) + Number($("#GazayinHyutPrice").val())  + Number($("#JurPrice").val()) +  Number($("#EtcXmichqPrice").val()));
	});

});

