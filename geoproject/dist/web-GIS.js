//full screen
var mapID = document.getElementById('map');
function fullScreenView(){

    if (document.fullscreenElement) {
        document.exitFullscreen()
    } else {
        mapID.requestFullscreen();
    }
}

//browser print
L.control.browserPrint({position:'topright'}).addTo(map);

//measure
L.control.measure({
    primaryLengthUnit: 'kilometers',
    secondaryLengthUnit: 'meter',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: undefined

}).addTo(map);

//search
L.Control.geocoder().addTo(map);

//zoom to layer
$('.zoom-to-layer').click(function () {
    map.setView([20.5937, 78.9629], 4.8)
})