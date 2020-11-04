//Cria o mapa e seleciona a região inicial do mapa através da latidude e longitude
const map = L.map('mapid').setView([-12.9015883, -38.4901455], 15);

//Adiciona o mapa com a camada de renderização(tile layer) padrão
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//cria o icone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Cria popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="chosse-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

//Cria e Adiciona a marcação no mapa
L.marker([-12.9015883, -38.4901455], { icon })
.addTo(map)
.bindPopup(popup)