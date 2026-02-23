const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const hospitalesFL = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0",
});

const LayerSearchSource = await $arcgis.import(
  "@arcgis/core/widgets/Search/LayerSearchSource.js",
);

const arcgisMap = document.querySelector("arcgis-map");
const search = document.querySelector("arcgis-search");

search.addEventListener("arcgisReady", () => {
  // arcgisMap.map.add(hospitalesFL)
    search.sources = [
    {
      layer: hospitalesFL,
      searchFields: ["Nombre", "Direccion", "Municipio", "Provincia"],
      displayField: "Nombre",
      exactMatch: false,
      outFields: ["*"],
      name: "Hospitales de España",
      suggestionTemplate: "{Nombre}, {Municipio}",
      placeholder: "ejemplo: Madrid",
      zoomScale: 500000,
      
    }
  ];

});
