const arcgisMap = document.querySelector('arcgis-map');


arcgisMap.addEventListener("arcgisViewReadyChange", (eventoViewReadyChange) => {
  // Este evento se ejecuta cuando se carga la vista del Mapa
  const div = document.createElement('div')
  div.id = 'capa-listado'
  // Carga la capa cuando la vista esté READY
    for (const i in arcgisMap.map.allLayers.items){
        console.log(arcgisMap.map.allLayers.items[i].title)
        const parrafoNuevo = document.createElement('p')
        parrafoNuevo.innerHTML = arcgisMap.map.allLayers.items[i].title
        div.appendChild(parrafoNuevo)
        
    }
    document.body.appendChild(div)
});




