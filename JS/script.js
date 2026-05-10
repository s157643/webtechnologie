let map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Maak één marker aan en voeg de gewenste tekst toe
let marker = L.marker([51.21898, 4.46073]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>gemeente Deurne.").openPopup();
