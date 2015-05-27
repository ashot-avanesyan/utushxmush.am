jQuery(document).ready(function($){

	$("input").click(function(){  
		calculator();
	});

	$("input").blur(function(){  
		calculator();
	});

	$("input").change(function(){  
		calculator();
	});
      
	$("#inputDistance3").blur(function(){ 
		totalTransport(); 
	}); 
	$("#inputSuccess").blur(function(){ 
		totalTransport(); 
	}); 

	function calculator() {
				
		$("#total").val(Number($("#totalAccessories").val()) + 
			Number($("#totalOvernight").val()) + Number($("#totalDesert").val()) + 
			Number($("#totalVegetable").val()) +  Number($("#totalKhimchq").val()) + 
			Number($("#totalMsamterq").val())  + Number($("#totalCost").val()));
		var count = Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()) + Number($("#inputChildren3").val());
		if (count != 0) {
		 	$("#totalForOne").val(Math.ceil((Number($("#total").val()) / (Number($("#inputMenl3").val()) + Number($("#inputWomen3").val()))) / 10)*10);
		} else {
			$("#totalForOne").val(0); 
		}
	}
	//totalTransport()
	function totalTransport ()
	 {
	     document.getElementById("totalCost").value = Number(document.getElementById("inputDistance3").value) * Number(document.getElementById("inputSuccess").value);
	     calculator();
	 }

// Input field let only numbers	
  $("input").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        
               return false;
    }
   });

});
//check amount of participants and display tooltip
function myFunction(e) {
    
    if (document.getElementById("inputMenl3").value < 1 && document.getElementById("inputWomen3").value < 1) {
    	alert("Մուտքագրեք մասնակիցնրի քանակը");
    //	return e.preventDefault()
    }
}



$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
}) 


