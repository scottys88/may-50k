<div id="map" style="width: 100%; height: 640px; border: 1px solid;"></div>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js">// <![CDATA[

// ]]></script><script type="text/javascript" src="https://maps.google.com/maps/api/js?key=AIzaSyB39Rv85T6WKO5RjInokxyqivbzoPGPXao&amp;sensor=false"></script><script src="https://cdn.shopify.com/s/files/1/2700/0060/t/2/assets/loadgpx.js"></script><script type="text/javascript">// <![CDATA[
function loadGPXFileIntoGoogleMap(map, filename) {
                $.ajax({url: filename,
                    dataType: "xml",
                    success: function(data) {
                      var parser = new GPXParser(data, map);
                      parser.setTrackColour("#e87f3e");     // Set the track line colour
                      parser.setTrackWidth(5);          // Set the track line width
                      parser.setMinTrackPointDelta(0.0001);      // Set the minimum distance between track points
                      parser.centerAndZoom(data);
                      parser.addTrackpointsToMap();         // Add the trackpoints
                      parser.addRoutepointsToMap();         // Add the routepoints
                      parser.addWaypointsToMap();           // Add the waypoints
                    }
                });
            }

            $(document).ready(function() {
                var mapOptions = {
                   zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(-34.997369, 138.682321),

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
               
                };
                var map = new google.maps.Map(document.getElementById("map"),
                    mapOptions);
                loadGPXFileIntoGoogleMap(map, "https://cdn.shopify.com/s/files/1/2700/0060/t/2/assets/Belair_to_lofty.xml");
            });
// ]]></script>
<div></div>