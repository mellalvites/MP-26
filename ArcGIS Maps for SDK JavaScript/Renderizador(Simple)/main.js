const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const arcgisMap = document.querySelector("arcgis-map");

const SimpleMarkerSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleMarkerSymbol.js");

const simbologiaHospitales = new SimpleMarkerSymbol({
  angle: 0,
  color: [0,132,255,1],
  outline: {
    cap: "round",
    color: [13,13,13,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1
  },
  path: "undefined",
  size: 12,
  style: "circle",
  xoffset: 0,
  yoffset: 0
});


const rendererHospitales = {
    type: 'simple',
    symbol: simbologiaHospitales
}


const hospitalesFL = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0",
  renderer: rendererHospitales
});



arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  arcgisMap.map.add(hospitalesFL);
});
