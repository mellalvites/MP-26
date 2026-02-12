// Importamos las librerías
const Map = await $arcgis.import("@arcgis/core/Map.js");
const MapView = await $arcgis.import("@arcgis/core/views/MapView.js");
const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js",);

// Creo el mapa
const miMapa = new Map({
  basemap: "topo-vector",
});

// Creo la vista del mapa
const vistaMapa = new MapView({
  map: miMapa,
  container: "viewDiv",
});

// miMapa.add(hospitalesFL);
// Creo la capa
const hospitalesFL = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0",
});

const hospitalesPortalItemFL = new FeatureLayer({
    portalItem: {
        id: '68745a7fb7a348b6b0d722c8517790af'
    }
})


miMapa.add(hospitalesPortalItemFL)