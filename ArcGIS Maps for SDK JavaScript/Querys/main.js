const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);

const Query = await $arcgis.import("@arcgis/core/rest/support/Query.js");
const SimpleMarkerSymbol = await $arcgis.import(
  "@arcgis/core/symbols/SimpleMarkerSymbol.js",
);
const GraphicsLayer = await $arcgis.import(
  "@arcgis/core/layers/GraphicsLayer.js",
);
const arcgisMap = document.querySelector("arcgis-map");

arcgisMap.addEventListener("arcgisViewReadyChange", (eventoViewReadyChange) => {
  // Este evento se ejecuta cuando se carga la vista del Mapa

  const hospitalesFL = new FeatureLayer({
    url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0",
  });

  // Carga la capa cuando la vista esté READY
  //   arcgisMap.map.add(hospitalesFL)
  arcgisMap.view.goTo([-4, 40]);
  arcgisMap.view.zoom = 6;

  const peticionQuery = new Query({
    where: "Provincia = 'Segovia'",
    returnGeometry: true,
    outFields: ["*"],
  });


  // OJOO RESULTADO ES UNA PROMESA !!!!!!!!!!!!!!!!!!

  const resultadoQuery = hospitalesFL.queryFeatures(peticionQuery);

  resultadoQuery.then((resultadoFeatureSet) => {
    const entidades = resultadoFeatureSet.features;

    const simbologiaPunto = new SimpleMarkerSymbol({
      angle: 0,
      color: [255, 255, 255, 0.25],
      outline: {
        cap: "round",
        color: [0, 122, 194, 1],
        join: "round",
        miterLimit: 1,
        style: "solid",
        width: 1,
      },
      path: "undefined",
      size: 12,
      style: "circle",
      xoffset: 0,
      yoffset: 0,
    });

    const entidadesConSimbologia = entidades.map((grafico) => {
      grafico.symbol = simbologiaPunto
      return grafico;
    });

    const capaGraficaGL = new GraphicsLayer()
    capaGraficaGL.addMany(entidadesConSimbologia)
    arcgisMap.map.add(capaGraficaGL)
  });

  console.log(resultadoQuery);
});
