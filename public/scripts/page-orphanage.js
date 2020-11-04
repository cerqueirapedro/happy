const options = {
    dragging: false,
    touchZoom: false,
    doubleclickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Cria o mapa e seleciona a região inicial do mapa através da latidude e longitude
const map = L.map('mapid', options).setView([-12.9015883, -38.4901455], 15);

//Adiciona o mapa com a camada de renderização(tile layer) padrão
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//cria o icone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//Cria e Adiciona a marcação no mapa
L.marker([-12.9015883, -38.4901455], { icon })
.addTo(map)


/*Image Gallery*/

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll('.images button')
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de image
    imageContainer.src = image.src

    // adicionar a classe .active para este botao
    button.classList.add('active')

}