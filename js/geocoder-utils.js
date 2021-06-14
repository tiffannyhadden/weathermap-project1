let geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'country,region,place,postcode,locality,neighborhood'
});

geocoder.addTo('#geocoder');

// Get the geocoder results container.
let results = document.getElementById('result');

// Add geocoder result to container.
geocoder.on('result', function (e) {
    results.innerText = JSON.stringify(e.result, null, 2);
});

// Clear results container when search is cleared.
geocoder.on('clear', function () {
    results.innerText = '';
});