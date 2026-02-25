const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const SimpleRenderer = await $arcgis.import(
  "@arcgis/core/renderers/SimpleRenderer.js",
);
const arcgisMap = document.querySelector("arcgis-map");

const nivelestudiosRenderer = new SimpleRenderer({
  symbol: {
    type: "picture-marker",
    angle: 0,
    height: 100,
    url: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    width: 100,
    xoffset: 0,
    yoffset: 0,
  },
  visualVariables: [
    {
      type: "size",
      field: "Poblacion",
      minDataValue: 63000,
      maxDataValue: 7075000,
      minSize: 10,
      maxSize: 50,
    },
  ],
});

const nivelestudiosFL = new FeatureLayer({
  url: "https://services1.arcgis.com/YFraetVkEAF1lMag/ArcGIS/rest/services/Nivel_estudios_y_poblaci%c3%b3n_por_CCAA_2021/FeatureServer/1",
  renderer: nivelestudiosRenderer,
});

arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  arcgisMap.map.add(nivelestudiosFL);
});
