jQuery(document).ready(function($){
	$(":checkbox").click(function(){
//		window.alert($(this).attr('id'));
		
		switch($(this).attr('id'))
		{
			case "Xoz":
				if ($("#Xoz").is(":checked"))
				{
					$("#kgXoz").val('1'); 
					$("#drXoz").val('3800'); 
					$("#kgXoz").prop('disabled', false); 
					$("#drXoz").prop('disabled',false);
				} 
				else 
				{
					$("#kgXoz").val('0'); 
					$("#drXoz").val('0'); 
					$("#kgXoz").prop('disabled',true); 
					$("#drXoz").prop('disabled',true);  
				}
			$("#XozPrice").val(Number($("#kgXoz").val()) * Number($("#drXoz").val()));
			break;
 
			case "Gar":
				if ($("#Gar").is(":checked"))
				{
					$("#kgGar").val('1'); 
					$("#drGar").val('3000');  
					$("#kgGar").prop('disabled', false); 
					$("#drGar").prop('disabled',false);
				} 
				else 
				{
					$("#kgGar").val('0'); 
					$("#drGar").val('0');  
					$("#kgGar").prop('disabled',true); 
			$("#drGar").prop('disabled',true);
				} 
			$("#GarPrice").val(Number($("#kgGar").val()) * Number($("#drGar").val()));
			break; 
			case "Ayc":
				if ($("#Ayc").is(":checked"))
				{
					$("#kgAyc").val('1'); 
					$("#drAyc").val('3500'); 
					$("#kgAyc").prop('disabled',false); 
					$("#drAyc").prop('disabled',false);
				} 
				else 
				{
					$("#kgAyc").val('0'); 
					$("#drAyc").val('0');  
					$("#kgAyc").prop('disabled',true); 
					$("#drAyc").prop('disabled',true);
				}
			$("#AycPrice").val(Number($("#kgAyc").val()) * Number($("#drAyc").val()));
			break;

			case "Hav":
				if ($("#Hav").is(":checked"))
				{
					$("#kgHav").val('1'); 
					$("#drHav").val('1600'); 
					$("#kgHav").prop('disabled',false); 
					$("#drHav").prop('disabled',false);
				} 
				else 
				{
					$("#kgHav").val('0'); 
					$("#drHav").val('0');  
					$("#kgHav").prop('disabled',true); 
					$("#drHav").prop('disabled',true);
				}
			$("#HavPrice").val(Number($("#kgHav").val()) * Number($("#drHav").val()));
			break;


			case "Tev":
				if ($("#Tev").is(":checked"))
				{
					$("#kgTev").val('1'); 
					$("#drTev").val('1600'); 
					$("#kgTev").prop('disabled',false); 
					$("#drTev").prop('disabled',false);
				} 
				else 
				{
					$("#kgTev").val('0'); 
					$("#drTev").val('0');  
					$("#kgTev").prop('disabled',true); 
					$("#drTev").prop('disabled',true);
				}
			$("#TevPrice").val(Number($("#kgTev").val()) * Number($("#drTev").val()));
			break;

			case "Bud":
				if ($("#Bud").is(":checked"))
				{
					$("#kgBud").val('1'); 
					$("#drBud").val('1200'); 
					$("#kgBud").prop('disabled',false); 
					$("#drBud").prop('disabled',false);
				} 
				else 
				{
					$("#kgBud").val('0'); 
					$("#drBud").val('0');  
					$("#kgBud").prop('disabled',true); 
					$("#drBud").prop('disabled',true);
				}
			$("#BudPrice").val(Number($("#kgBud").val()) * Number($("#drBud").val()));
			break;

			case "Ershik":
				if ($("#Ershik").is(":checked"))
				{
					$("#kgErshik").val('1'); 
					$("#drErshik").val('1700'); 
					$("#kgErshik").prop('disabled',false); 
					$("#drErshik").prop('disabled',false);
				} 
				else 
				{
					$("#kgErshik").val('0'); 
					$("#drErshik").val('0');  
					$("#kgErshik").prop('disabled',true); 
					$("#drErshik").prop('disabled',true);
				}
			$("#ErshikPrice").val(Number($("#kgErshik").val()) * Number($("#drErshik").val()));
			break;

			case "Nrbershik":
				if ($("#Nrbershik").is(":checked"))
				{
					$("#kgNrbershik").val('1'); 
					$("#drNrbershik").val('1200'); 
					$("#kgNrbershik").prop('disabled',false); 
					$("#drNrbershik").prop('disabled',false);
				} 
				else 
				{
					$("#kgNrbershik").val('0'); 
					$("#drNrbershik").val('0');  
					$("#kgNrbershik").prop('disabled',true); 
					$("#drNrbershik").prop('disabled',true);
				}
			$("#NrbershikPrice").val(Number($("#kgNrbershik").val()) * Number($("#drNrbershik").val()));
			break;

			case "Sal":
				if ($("#Sal").is(":checked"))
				{
					$("#kgSal").val('1'); 
					$("#drSal").val('1000'); 
					$("#kgSal").prop('disabled',false); 
					$("#drSal").prop('disabled',false);
				} 
				else 
				{
					$("#kgSal").val('0'); 
					$("#drSal").val('0');  
					$("#kgSal").prop('disabled',true); 
					$("#drSal").prop('disabled',true);
				}
			$("#SalPrice").val(Number($("#kgSal").val()) * Number($("#drSal").val()));
			break;

			case "Xorotik":
				if ($("#Xorotik").is(":checked"))
				{
					$("#kgXorotik").val('1'); 
					$("#drXorotik").val('1000'); 
					$("#kgXorotik").prop('disabled',false); 
					$("#drXorotik").prop('disabled',false);
				} 
				else 
				{
					$("#kgXorotik").val('0'); 
					$("#drXorotik").val('0');  
					$("#kgXorotik").prop('disabled',true); 
					$("#drXorotik").prop('disabled',true);
				}
			$("#XorotikPrice").val(Number($("#kgXorotik").val()) * Number($("#drXorotik").val()));
			break;

			case "Etc":
				if ($("#Etc").is(":checked")) 
				{
					$("#EtcName").prop("disabled", false);
					$("#kgEtc").prop("disabled",false);
					$("#drEtc").prop("disabled",false);
				}
				else 
				{
					$("#kgEtc").val('0');
					$("#drEtc").val('0');
					$("#EtcName").prop("disabled", true);
					$("#kgEtc").prop("disabled",true);
					$("#drEtc").prop("disabled",true);
				}
				$("#EtcPrice").val(Number($("#kgEtc").val()) * Number($("#drEtc").val()));
				break;
		};
		$("#totalMsamterq").val(Number($("#XozPrice").val()) + Number($("#GarPrice").val()) + Number($("#AycPrice").val()) + Number($("#HavPrice").val()) + Number($("#TevPrice").val()) + Number($("#BudPrice").val()) + Number($("#ErshikPrice").val()) + Number($("#NrbershikPrice").val()) + Number($("#SalPrice").val()) + Number($("#XorotikPrice").val()) + Number($("#EtcPrice").val()));
	});
	
	$(":text").blur(function(){

		switch($(this).attr('id'))
		{
			
			case "kgXoz":
			case "drXoz":
				$("#XozPrice").val(Number($("#kgXoz").val()) * Number($("#drXoz").val()));
			break; 
			
			case "kgGar":
			case "drGar":
				$("#GarPrice").val(Number($("#kgGar").val()) * Number($("#drGar").val()));
			break;
			
			case "kgAyc":
			case "drAyc":
				$("#AycPrice").val(Number($("#kgAyc").val()) * Number($("#drAyc").val()));
			break;

            case "kgHav":
			case "drHav":
				$("#HavPrice").val(Number($("#kgHav").val()) * Number($("#drHav").val()));
			break;
			
			case "kgTev":
			case "drTev":
				$("#TevPrice").val(Number($("#kgTev").val()) * Number($("#drTev").val()));
			break;

			case "kgBud":
			case "drBud":
				$("#BudPrice").val(Number($("#kgBud").val()) * Number($("#drBud").val()));
			break;

			case "kgErshik":
			case "drErshik":
				$("#ErshikPrice").val(Number($("#kgErshik").val()) * Number($("#drErshik").val()));
			break;	
			
			case "kgNrbershik":
			case "drNrbershik":
				$("#NrbershikPrice").val(Number($("#kgNrbershik").val()) * Number($("#drNrbershik").val()));
			break;

			case "kgSal":
			case "drSal":
				$("#SalPrice").val(Number($("#kgSal").val()) * Number($("#drSal").val()));
			break;

			case "kgXorotik":
			case "drXorotik":
				$("#XorotikPrice").val(Number($("#kgXorotik").val()) * Number($("#drXorotik").val()));
			break;

			case "kgEtc":
			case "drEtc":
				$("#EtcPrice").val(Number($("#kgEtc").val()) * Number($("#drEtc").val()));
			break;
		}

		$("#totalMsamterq").val(Number($("#XozPrice").val()) + Number($("#GarPrice").val()) + Number($("#AycPrice").val()) + Number($("#HavPrice").val()) + Number($("#TevPrice").val()) + Number($("#BudPrice").val()) + Number($("#ErshikPrice").val()) + Number($("#NrbershikPrice").val()) + Number($("#SalPrice").val()) + Number($("#XorotikPrice").val()) + Number($("#EtcPrice").val()));
	});

})


