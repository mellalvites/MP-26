// Importamos FL, Query, GL, SimbologíaPunto, Graphic, Polígono, SimbologíaPolígono

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
const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");
const SimpleFillSymbol = await $arcgis.import(
  "@arcgis/core/symbols/SimpleFillSymbol.js",
);

const arcgisMap = document.querySelector("arcgis-map");

const paisesFL = new FeatureLayer({
  url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Countries/FeatureServer/0",
});

const modisFL = new FeatureLayer({
  url: "https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/MODIS_Thermal_v1/FeatureServer/1",
});

const capaGraficaIncendiosGL = new GraphicsLayer({
    title:'Incendios'
})

// Creamos el evento
arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  // Hacemos la primera Query
  const peticionQueryPaises = new Query({
    where: "ISO_CC = 'ESP'",
    returnGeometry: true,
  });
  const simbologiaPaises = new SimpleFillSymbol({
    color: [0, 122, 194, 1],
    outline: {
      cap: "round",
      color: [0, 122, 194, 1],
      join: "round",
      miterLimit: 1,
      style: "solid",
      width: 1,
    },
    style: "solid",
  });
  const simbologiaModis = new SimpleMarkerSymbol({
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
  // Enviamos la petición al servicio
  const resultadoQueryPaises = paisesFL.queryFeatures(peticionQueryPaises);
  resultadoQueryPaises.then((resultadoFeatureSetPaises) => {
    // console.log(resultadoFeatureSetPaises);
    const entidadesPaises = resultadoFeatureSetPaises.features;
    // Le aplicamos nueva simbología porque su simbología es NULL y no podemos trabajar con ello
    const entidadesPaisesConSimbologia = entidadesPaises.map((grafico) => {
      entidadesPaises.symbol = simbologiaPaises;
      return grafico;
    });

    const paisesGL = new GraphicsLayer({
      title: "España",
    });
    paisesGL.addMany(entidadesPaisesConSimbologia);
    arcgisMap.map.add(paisesGL);

    entidadesPaises.map((grafico) => {
      const geometriaPoligono = grafico.geometry;
      //   console.log(geometriaPoligono);

      // Hacemos la Segunda Query

      const incendiosQuery = new Query({
        geometry: geometriaPoligono,
        returnGeometry: true,
        spatialRelationship: "intersects",
      });

      const resultadoQueryModis = modisFL.queryFeatures(incendiosQuery);
      resultadoQueryModis.then((resultadoFeatureSetModis) => {
        const entidadesModis = resultadoFeatureSetModis.features;

        const modisConSimbologia = entidadesModis.map((incendioGrafico) => {
          incendioGrafico.symbol = simbologiaModis;
          return incendioGrafico;
        });
        capaGraficaIncendiosGL.addMany(modisConSimbologia)
      });
    });
    arcgisMap.map.add(capaGraficaIncendiosGL)
  });
});
