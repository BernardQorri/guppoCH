var map = L.map('map').setView([41.8902, 12.4922], 14);

L.tileLayer('https://tile.openstreetmap.org{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map); 

L.marker([41.8902, 12.4922]).addTo(map)
    .bindPopup('<b>Colosseo</b><br>L\'anfiteatro più grande del mondo.');

L.marker([41.8986, 12.4769]).addTo(map)
    .bindPopup('<b>Pantheon</b><br>Antico tempio romano.');

L.marker([41.9009, 12.4833]).addTo(map)
    .bindPopup('<b>Fontana di Trevi</b><br>Non dimenticare di lanciare la monetina!');

L.marker([41.8989, 12.4731]).addTo(map)
    .bindPopup('<b>Piazza Navona</b><br>Celebre per la Fontana dei Quattro Fiumi.');

L.marker([41.9022, 12.4539]).addTo(map)
    .bindPopup('<b>Basilica di San Pietro</b><br>Il cuore del Vaticano.');
    