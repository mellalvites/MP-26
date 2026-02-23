// Ejercicio: Al hacer click en el punto en España, que se haga un buffer (buscar en query) para que salgan los hospitales dentro del círculo
const SimpleMarkerSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleMarkerSymbol.js");
const Query = await $arcgis.import("@arcgis/core/rest/support/Query.js");

const GraphicsLayer = await $arcgis.import(
  "@arcgis/core/layers/GraphicsLayer.js",
);
const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const hospitalesFL = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0",
});

const capaGraficaResultados = new GraphicsLayer();
const capaGraficaHOspitalesResultados = new GraphicsLayer ();
const sketch = document.querySelector("arcgis-sketch");
const arcgisMap = document.querySelector("arcgis-map");


const simbologiaPunto = new SimpleMarkerSymbol({
  angle: 0,
  color: [255,255,255,0.25],
  outline: {
    cap: "round",
    color: [0,122,194,1],
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


sketch.addEventListener("arcgisReady", () => {
  sketch.layer = capaGraficaResultados;
});
arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  arcgisMap.map.add(capaGraficaResultados);
  arcgisMap.map.add(capaGraficaHOspitalesResultados)
});
sketch.addEventListener("arcgisCreate", (customEvent) => {
  console.log(customEvent);

  if (
    customEvent.detail.state === "complete" &&
    customEvent.detail.tool === "point"
  ) {
    // Limpiamos la capa

    capaGraficaHOspitalesResultados.removeAll()

    // Hago cosas con el point
    const geometriaPunto = customEvent.detail.graphic.geometry;
    const query = new Query({
      geometry: geometriaPunto,
      distance: 50,
      units: "kilometers",
      spatialRelationship: "intersects",
      returnGeometry: true,
      outFields: ["*"],
    });
    const resultadoQuery = hospitalesFL.queryFeatures(query); // resultadoQuery es una Promesa siempre.
    resultadoQuery.then((resultadoFeatureSet)=>{
        const entidades = resultadoFeatureSet.features
        const entidadesConSimbologia = entidades.map((hospital)=>{
            hospital.symbol = simbologiaPunto;
            return hospital
        })

        capaGraficaHOspitalesResultados.addMany(entidadesConSimbologia)

    })

  }
});
