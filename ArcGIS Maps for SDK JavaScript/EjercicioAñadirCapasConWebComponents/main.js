const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");

const arcgisMap = document.querySelector('arcgis-map');

arcgisMap.addEventListener('arcgisViewReadyChange', (eventoViewReadyChange) => {
  // Este evento se ejecuta cuando se carga la vista del Mapa

  const hospitalesFL = new FeatureLayer({
    url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0',
  });

  // Carga la capa cuando la vista esté READY 
  arcgisMap.map.add(hospitalesFL)

});
