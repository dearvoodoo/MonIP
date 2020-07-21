﻿$(document).ready( function() {
    $.getJSON( "https://ipv4.geojs.io/v1/ip.json", function(ipv4){
        $.getJSON( "https://ipv6.geojs.io/v1/ip.json", function(ipv6){
            $.getJSON( "https://get.geojs.io/v1/ip/geo.json", function(geo){
                $("#ipv4").text(ipv4.ip)
                $("#ipv6").text(ipv6.ip);
                $("#FAI").text("FAI: "+ geo.organization_name);
                $("#Localisation").text("Localisation: " + geo.city + "(Lon:" + geo.longitude + ", Lat: " + geo.latitude + ") " + geo.region + " [" + geo.country_code + "] " + geo.country + " " + geo.continent_code);
            });
        });
    });
});