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

/* Arman_Armine */
/* make a Calculator */
function Calculator()
{
	var totalXmichq = 0; 
	var c1 = document.getElementById('c1');

	if ( c1.checked )
		totalXmichq += 5000;
}


/*print function */ 

