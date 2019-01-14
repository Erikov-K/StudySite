// Initialize and add the map
function initMap() {
    var company = {lat: 54.980047, lng: 82.897847};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 14, center: company});
    var marker = new google.maps.Marker({position: company, map: map});
}
