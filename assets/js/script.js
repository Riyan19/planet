var map = L.map('map').setView([-6.181621, 106.850672], 20);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-6.181621, 106.850672]).addTo(map)
  .bindPopup('Jakarta, Johar Baru.')
  .openPopup();
  

map.on('click', function(e) {
  var coordinates = e.latlng;
  document.getElementById('coordinates').innerHTML = 'Coordinates: ' + coordinates.lat.toFixed(6) + ', ' + coordinates.lng.toFixed(6);
});