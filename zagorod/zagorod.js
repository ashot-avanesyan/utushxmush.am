/* Ashot_Erik */
 function initialize() 
        {
       var mapProp = {
                     center:new google.maps.LatLng(39.8272818, 46.7625134),
                          zoom:9,
                       mapTypeId:google.maps.MapTypeId.ROADMAP
                     };
         var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
       
         google.maps.event.addDomListener(window, 'load', initialize);
        }
         google.maps.event.addDomListener(window, 'load', initialize);

  //Arman
	function hide1() {
		document.getElementById("d2").style.display = "none";
		document.getElementById("d3").style.display = "none";
		document.getElementById("d4").style.display = "none";
		document.getElementById("d1").style.display = "block";
	}

	function hide2() {
		document.getElementById("d1").style.display = "none";
		document.getElementById("d3").style.display = "none";
 	 	document.getElementById("d4").style.display = "none";
		document.getElementById("d2").style.display = "block";
	}

	function hide3() {
		document.getElementById("d1").style.display = "none";
		document.getElementById("d2").style.display = "none";
                document.getElementById("d4").style.display = "none";
		document.getElementById("d3").style.display = "block";
	}
	function hide4() {
                document.getElementById("d1").style.display = "none";
                document.getElementById("d2").style.display = "none";
                document.getElementById("d3").style.display = "none";
                document.getElementById("d4").style.display = "block";
        }



//Author: Erik change hide 1_2 
	function hide10_2() {
                document.getElementById("d2_2").style.display = "none";
                document.getElementById("d2_3").style.display = "none";
                document.getElementById("d2_4").style.display = "none";
                document.getElementById("d2_5").style.display = "none";
                document.getElementById("d2_1").style.display = "block";
	}

//Author: Erik change hide20_2 
        function hide20_2() {
                document.getElementById("d2_1").style.display = "none";
                document.getElementById("d2_3").style.display = "none";
                document.getElementById("d2_4").style.display = "none";
                document.getElementById("d2_5").style.display = "none";
                document.getElementById("d2_2").style.display = "block";
	}

//Author: Erik change hide30_2 
        function hide30_2() {
                document.getElementById("d2_1").style.display = "none";
                document.getElementById("d2_2").style.display = "none";
                document.getElementById("d2_4").style.display = "none";
                document.getElementById("d2_5").style.display = "none";
                document.getElementById("d2_3").style.display = "block";
	}

//Author: Erik change hide40_2 
        function hide40_2() {
                document.getElementById("d2_1").style.display = "none";
                document.getElementById("d2_2").style.display = "none";
                document.getElementById("d2_3").style.display = "none";
                document.getElementById("d2_5").style.display = "none";
                document.getElementById("d2_4").style.display = "block";
	}

//Author: Erik change hide50_2 
        function hide50_2() {
                document.getElementById("d2_1").style.display = "none";
                document.getElementById("d2_2").style.display = "none";
                document.getElementById("d2_3").style.display = "none";
                document.getElementById("d2_4").style.display = "none";
                document.getElementById("d2_5").style.display = "block";
	}

//Author: Ashot change hide10_3 20_3
	function hide10_3() {
		document.getElementById("d2_2_2").style.display = "none";
		document.getElementById("d2_2_1").style.display = "block";
	}

	function hide20_3() {
		document.getElementById("d2_2_1").style.display = "none";
		document.getElementById("d2_2_2").style.display = "block";

	}
	function hide10_4() {
                document.getElementById("d2_2_1_2").style.display = "none";
                document.getElementById("d2_2_1_3").style.display = "none";
                document.getElementById("d2_2_1_4").style.display = "none";
                document.getElementById("d2_2_1_1").style.display = "block";
	}
        function hide20_4() {
                document.getElementById("d2_2_1_1").style.display = "none";
                document.getElementById("d2_2_1_3").style.display = "none";
                document.getElementById("d2_2_1_4").style.display = "none";
                document.getElementById("d2_2_1_2").style.display = "block";
	}
	function hide30_4() {
                document.getElementById("d2_2_1_1").style.display = "none";
                document.getElementById("d2_2_1_2").style.display = "none";
                document.getElementById("d2_2_1_4").style.display = "none";
                document.getElementById("d2_2_1_3").style.display = "block";
	}
	function hide40_4() {
                document.getElementById("d2_2_1_1").style.display = "none";
                document.getElementById("d2_2_1_2").style.display = "none";
                document.getElementById("d2_2_1_3").style.display = "none";
                document.getElementById("d2_2_1_4").style.display = "block";
	}
 
 
       function hide10_5() {
                document.getElementById("d2_2_2_2").style.display = "none";
                document.getElementById("d2_2_2_3").style.display = "none";
                document.getElementById("d2_2_2_1").style.display = "block";
	}
        function hide20_5() {
                document.getElementById("d2_2_2_1").style.display = "none";
                document.getElementById("d2_2_2_3").style.display = "none";
                document.getElementById("d2_2_2_2").style.display = "block";
	}
        function hide30_5() {
                document.getElementById("d2_2_2_1").style.display = "none";
                document.getElementById("d2_2_2_2").style.display = "none";
                document.getElementById("d2_2_2_3").style.display = "block";
	}





        function hide1_6() {
                document.getElementById("b").style.display = "none";
                document.getElementById("c").style.display = "none";
                document.getElementById("d").style.display = "none";
                document.getElementById("a").style.display = "block";
	}
        function hide2_6() {
                document.getElementById("a").style.display = "none";
                document.getElementById("c").style.display = "none";
                document.getElementById("d").style.display = "none";
                document.getElementById("b").style.display = "block";
	}
        function hide3_6() {
                document.getElementById("a").style.display = "none";
                document.getElementById("b").style.display = "none";
                document.getElementById("d").style.display = "none";
                document.getElementById("c").style.display = "block";
	}
        function hide4_6() {
                document.getElementById("a").style.display = "none";
                document.getElementById("b").style.display = "none";
                document.getElementById("c").style.display = "none";
                document.getElementById("d").style.display = "block";
        }

