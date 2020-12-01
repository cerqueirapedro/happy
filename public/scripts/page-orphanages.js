//Cria o mapa e seleciona a região inicial do mapa através da latidude e longitude
const map = L.map('mapid').setView([-12.9015883, -38.4901455], 15);

//Adiciona o mapa com a camada de renderização(tile layer) padrão
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//cria o icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}) {

 // Cria popup overlay
const popup = L.popup({ 
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`${name} <a href="/orphanage?id=${id}"><img src= "/images/arrow-white.svg"></a>`)

//Cria e Adiciona a marcação no mapa
L
.marker([lat, lng], { icon })
.addTo(map)
.bindPopup(popup)

}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})