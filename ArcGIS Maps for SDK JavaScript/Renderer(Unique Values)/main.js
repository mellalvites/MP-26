const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const UniqueValueRenderer = await $arcgis.import(
  "@arcgis/core/renderers/UniqueValueRenderer.js",
);
const Query = await $arcgis.import("@arcgis/core/rest/support/Query.js");
const arcgisMap = document.querySelector("arcgis-map");

const rendererRedNatura = new UniqueValueRenderer({
  field: "TIPO_NUEVO",
  uniqueValueInfos: [
    {
      value: "LIC",
      symbol: {
        type: "simple-fill",
        color: "red",
      },
    },
    {
      value: "LIC/ZEPA",
      symbol: {
        type: "simple-fill",
        color: "blue",
      },
    },
    {
      value: "ZEPA",
      symbol: {
        type: "simple-fill",
        color: "green",
      },
    },
  ],
});

const redNaturaFL = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Red_Natura_2000/FeatureServer/0",
  renderer: rendererRedNatura,
});

arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  const peticionQuery = new Query({
    returnGeometry: true,
    outFields: ["*"],
    where: "1=1",
    num: 1,
  });
  const resultadoQuery = redNaturaFL.queryFeatures(peticionQuery);

  resultadoQuery.then((resultadoFeatureSet) => {
    console.log(resultadoFeatureSet);
    const nombreCampos = resultadoFeatureSet.fields.map((field) => field.name);
    console.log(nombreCampos);
  });

  arcgisMap.map.add(redNaturaFL);
});
