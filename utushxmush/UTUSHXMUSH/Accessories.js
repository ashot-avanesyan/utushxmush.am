  jQuery(document).ready(function($){
	$(":checkbox").click(function(){
//		window.alert($(this).attr('id'));
		
		switch($(this).attr('id'))
		{
			case "Ax":
				if ($("#Ax").is(":checked"))
				{
					$("#AxTup").val('1'); 
					$("#AxDr").val('200'); 
					$("#AxTup").prop('disabled', false); 
					$("#AxDr").prop('disabled',false);
				} 
				else 
				{
					$("#AxTup").val('0'); 
					$("#AxDr").val('0'); 
					$("#AxTup").prop('disabled',true); 
					$("#AxDr").prop('disabled',true);  
				}
			$("#AxPrice").val(Number($("#AxTup").val()) * Number($("#AxDr").val()));
			break;
			case "Pxpex":
				if ($("#Pxpex").is(":checked"))
				{
					$("#PxpexTup").val('1'); 
					$("#PxpexDr").val('150'); 
					$("#PxpexTup").prop('disabled', false); 
					$("#PxpexDr").prop('disabled',false);
				} 
				else 
				{
					$("#PxpexTup").val('0'); 
					$("#PxpexDr").val('0'); 
					$("#PxpexTup").prop('disabled',true); 
					$("#PxpexDr").prop('disabled',true);  
				}
			$("#PxpexPrice").val(Number($("#PxpexTup").val()) * Number($("#PxpexDr").val()));
			break;
			
			break; 
			case "Spasq":
				if ($("#Spasq").is(":checked"))
				{
					$("#SpasqHat").val('1'); 
					$("#SpasqDr").val('5000'); 
					$("#SpasqHat").prop('disabled',false); 
					$("#SpasqDr").prop('disabled',false);
				} 
				else 
				{
					$("#SpasqHat").val('0'); 
					$("#SpasqDr").val('0');  
					$("#SpasqHat").prop('disabled',true); 
					$("#SpasqDr").prop('disabled',true);
				}
			$("#SpasqPrice").val(Number($("#SpasqHat").val()) * Number($("#SpasqDr").val()));
			break;

			case "Shampur":
				if ($("#Shampur").is(":checked"))
				{
					$("#ShampurQanak").val('1'); 
					$("#ShampurDr").val('0'); 
					$("#ShampurQanak").prop('disabled', false); 
					$("#ShampurDr").prop('disabled',false);
				} 
				else 
				{
					$("#ShampurQanak").val('0'); 
					$("#ShampurDr").val('0'); 
					$("#ShampurQanak").prop('disabled',true); 
					$("#ShampurDr").prop('disabled',true);  
				}
			$("#ShampurPrice").val(Number($("#ShampurQanak").val()) * Number($("#ShampurDr").val()));
			break;

			
				case "Toprak":
				if ($("#Toprak").is(":checked"))
				{
					$("#ToprakQanak").val('1'); 
					$("#ToprakDr").val('100'); 
					$("#ToprakQanak").prop('disabled', false); 
					$("#ToprakDr").prop('disabled',false);
				} 
				else 
				{
					$("#ToprakQanak").val('0'); 
					$("#ToprakDr").val('0'); 
					$("#ToprakQanak").prop('disabled',true); 
					$("#ToprakDr").prop('disabled',true);  
				}
			$("#ToprakPrice").val(Number($("#ToprakQanak").val()) * Number($("#ToprakDr").val()));
			break;
				case "EtcP":
				if ($("#EtcP").is(":checked")) 
				{
					$("#EtcPName").prop("disabled", false);
					$("#qanakEtcP").prop("disabled",false);
					$("#drEtcP").prop("disabled",false);
				}
				else 
				{
					$("#qanakEtcP").val('0');
					$("#drEtcP").val('0');
					$("#EtcPName").prop("disabled", true);
					$("#qanakEtcP").prop("disabled",true);
					$("#drEtcP").prop("disabled",true);
				}
				$("#EtcPPrice").val(Number($("#qanakEtcP").val()) * Number($("#drEtcP").val()));
				break;

				
		};
		$("#totalAccessories").val(Number($("#AxPrice").val()) + Number($("#PxpexPrice").val()) + Number($("#SpasqPrice").val()) + Number($("#ShampurPrice").val()) + Number($("#ToprakPrice").val())+ Number($("#EtcPPrice").val()));

	});
	
	$(":text").blur(function(){

		switch($(this).attr('id'))
		{
			
			case "AxTup":
			case "AxDr":
				$("#AxPrice").val(Number($("#AxTup").val()) * Number($("#AxDr").val()));
			break; 
			
			case "PxpexTup":
			case "PxpexDr":
				$("#PxpexPrice").val(Number($("#PxpexTup").val()) * Number($("#PxpexDr").val()));
			break;
			
			case "SpasqHat":
			case "SpasqDr":
				$("#SpasqPrice").val(Number($("#SpasqHat").val()) * Number($("#SpasqDr").val()));
			break;
			
			case "ShampurQanak":
			case "ShampurDr":
				$("#ShampurPrice").val(Number($("#ShampurQanak").val()) * Number($("#ShampurDr").val()));
			break; 
			
			case "ToprakQanak":
			case "ToprakDr":
				$("#ToprakPrice").val(Number($("#ToprakQanak").val()) * Number($("#ToprakDr").val()));
			break; 
			
			case "qanakEtcP":
			case "drEtcP":
				$("#EtcPPrice").val(Number($("#qanakEtcP").val()) * Number($("#drEtcP").val()));
			break;
		}
$("#totalAccessories").val(Number($("#AxPrice").val()) + Number($("#PxpexPrice").val()) + Number($("#SpasqPrice").val()) + Number($("#ShampurPrice").val()) + Number($("#ToprakPrice").val())+ Number($("#EtcPPrice").val()));

	});
})




	
