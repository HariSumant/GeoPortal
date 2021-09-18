//osm base map
var map = L.map('map').setView([20.5937, 78.9629], 4.8);
map.zoomControl.setPosition('topright')

//osm tilelayer

var WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);


var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var st = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});


//main marker
var mainpin = L.marker([20.5937, 78.9629])
    .bindPopup('Main Pin')
    .openPopup();

//scale
L.control.scale().addTo(map)



//map coordinate display
map.on('mousemove',function(e){
    console.log(e)
    $('.coordinate').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
})


//leaflet layer control
var basemaps = {
    'Staellite':WorldImagery,
    'OSM':osm,
    'Stamen Toner':st

}

var overlayMaps = {
    'Main Pin':mainpin
}

L.control.layers(basemaps,overlayMaps,{ collapsed: false, position: 'topleft' }).addTo(map);


