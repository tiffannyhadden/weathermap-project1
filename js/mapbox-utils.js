mapboxgl.accessToken = MAPBOX_TOKEN;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-98.49272, 29.42527],
    zoom: 8.7
});

map.addControl(new mapboxgl.NavigationControl());



var popup = new mapboxgl.Popup()
    .setHTML("<h5>San Antonio, Texas, United States</h5>")
    .setMaxWidth("200px");

var marker = new mapboxgl.Marker({
    color: '#1795d4'
})
    .setLngLat([-98.49272, 29.42527])
    .setDraggable(true)
    .setPopup(popup)
    .addTo(map);

marker.on('dragend', function (){
    let coords = marker.getLngLat().toArray().reverse();
    fetchForecast(coords);
});

let geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'country,region,place,postcode,locality,neighborhood',
    mapboxgl: mapboxgl,
    marker: false

});
geocoder.onAdd(map);
geocoder.addTo('#geocoder');


// Get the geocoder results container.
let results = document.getElementById('result');

// Add geocoder result to container.
geocoder.on('result', function (e) {
    results.innerText = e.result.place_name;
    marker.setLngLat(e.result.geometry.coordinates) // helped me get search bar working completely
});



