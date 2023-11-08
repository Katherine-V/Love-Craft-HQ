L.control.maptilerGeocoding({ apiKey: key }).addTo(map);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([35.784908, -78.647333], {draggable: true}).addTo(map);
var listLength = 2;

