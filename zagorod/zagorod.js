<!--Ashot_Erik-->
rc="http://maps.googleapis.com/maps/api/js">
 function initialize() 
        {
       var mapProp = {
                     center:new google.maps.LatLng(39.8272818, 46.7625134),
                          zoom:9,
                       mapTypeId:google.maps.MapTypeId.ROADMAP
                     };
         var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
        }
         google.maps.event.addDomListener(window, 'load', initialize);
