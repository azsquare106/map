// Initialize and add the map
function initMap() {
    // The location
    var pos = {lat: 34.779, lng: -98.808};

    // The map, centered at Uluru
    var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 4, center: pos});

    // The marker, positioned at Dallas
    //var marker = new google.maps.Marker({position: pos, map: map});

}
