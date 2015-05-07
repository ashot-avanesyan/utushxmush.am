jQuery(document).ready(function($){
	$(":checkbox").click(function(){
//		window.alert($(this).attr('id'));
		
		switch($(this).attr('id'))
		{
			case "Hyuranoc":
				if ($("#Hyuranoc").is(":checked"))
				{
					$("#HyuranocHamar").val('1'); 
					$("#HyuranocDr").val('2000'); 
					$("#HyuranocHamar").prop('disabled', false); 
					$("#HyuranocDr").prop('disabled',false);
				} 
				else 
				{
					$("#HyuranocHamar").val('0'); 
					$("#HyuranocDr").val('0'); 
					$("#HyuranocHamar").prop('disabled',true); 
					$("#HyuranocDr").prop('disabled',true);  
				}
			$("#HyuranocPrice").val(Number($("#HyuranocHamar").val()) * Number($("#HyuranocDr").val()));
			break;
 
			case "Vran":
				if ($("#Vran").is(":checked"))
				{
					$("#VranHat").val('1'); 
					$("#VranDr").val('2000');  
					$("#VranHat").prop('disabled', false); 
					$("#VranDr").prop('disabled',false);
				} 
				else 
				{
					$("#VranHat").val('0'); 
					$("#VranDr").val('0');  
					$("#VranHat").prop('disabled',true); 
					$("#VranDr").prop('disabled',true);
				} 
			$("#VranPrice").val(Number($("#VranHat").val()) * Number($("#VranDr").val()));
			break; 
			case "Taxavar":
				if ($("#Taxavar").is(":checked"))
				{
					$("#TaxavarHat").val('1'); 
					$("#TaxavarDr").val('5000'); 
					$("#TaxavarHat").prop('disabled',false); 
					$("#TaxavarDr").prop('disabled',false);
				} 
				else 
				{
					$("#TaxavarHat").val('0'); 
					$("#TaxavarDr").val('0');  
					$("#TaxavarHat").prop('disabled',true); 
					$("#TaxavarDr").prop('disabled',true);
				}
			$("#TaxavarPrice").val(Number($("#TaxavarHat").val()) * Number($("#TaxavarDr").val()));
			break;

			case "EtcGisherakac":
				if ($("#EtcGisherakac").is(":checked")) 
				{
					$("#EtcGisherakacName").prop("disabled", false);
					$("#EtcGisherakacHat").prop("disabled",false);
					$("#EtcGisherakacDr").prop("disabled",false);
				}
				else 
				{
					$("#EtcGisherakacHat").val('0');
					$("#EtcGisherakacDr").val('0');
					$("#EtcGisherakacName").prop("disabled", true);
					$("#EtcGisherakacHat").prop("disabled",true);
					$("#EtcGisherakacDr").prop("disabled",true);
				}
				$("#EtcGisherakacPrice").val(Number($("#EtcGisherakacHat").val()) * Number($("#EtcGisherakacDr").val()));
				break;
		};
		$("#totalOvernight").val(Number($("#HyuranocPrice").val()) + Number($("#VranPrice").val()) + Number($("#TaxavarPrice").val()) + Number($("#EtcGisherakacPrice").val()));

	});
	
	$(":text").blur(function(){

		switch($(this).attr('id'))
		{
			
			case "HyuranocHamar":
			case "HyuranocDr":
				$("#HyuranocPrice").val(Number($("#HyuranocHamar").val()) * Number($("#HyuranocDr").val()));
			break; 
			
			case "VranHat":
			case "VranDr":
				$("#VranPrice").val(Number($("#VranHat").val()) * Number($("#VranDr").val()));
			break;
			
			case "TaxavarHat":
			case "TaxavarDr":
				$("#TaxavarPrice").val(Number($("#TaxavarHat").val()) * Number($("#TaxavarDr").val()));
			break;
			
			case "EtcGisherakacHat":
			case "EtcGisherakacDr":
				$("#EtcGisherakacPrice").val(Number($("#EtcGisherakacHat").val()) * Number($("#EtcGisherakacDr").val()));
			break;
		}

		$("#totalOvernight").val(Number($("#HyuranocPrice").val()) + Number($("#VranPrice").val()) + Number($("#TaxavarPrice").val()) + Number($("#EtcGisherakacPrice").val()));
	});

})


