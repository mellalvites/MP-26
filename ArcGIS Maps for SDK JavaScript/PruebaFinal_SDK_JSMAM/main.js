// Imports

const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const UniqueValueRenderer = await $arcgis.import(
  "@arcgis/core/renderers/UniqueValueRenderer.js",
);
const PopupTemplate = await $arcgis.import("@arcgis/core/PopupTemplate.js");

// Imports para Apartado 4
const PictureMarkerSymbol = await $arcgis.import(
  "@arcgis/core/symbols/PictureMarkerSymbol.js",
);
const Query = await $arcgis.import("@arcgis/core/rest/support/Query.js");
const SimpleMarkerSymbol = await $arcgis.import(
  "@arcgis/core/symbols/SimpleMarkerSymbol.js",
);
const GraphicsLayer = await $arcgis.import(
  "@arcgis/core/layers/GraphicsLayer.js",
);

// Imports para Apartado 6
const SimpleLineSymbol = await $arcgis.import(
  "@arcgis/core/symbols/SimpleLineSymbol.js",
);
const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");
const Polyline = await $arcgis.import("@arcgis/core/geometry/Polyline.js");
const Point = await $arcgis.import("@arcgis/core/geometry/Point.js");

// Llamamos al mapa
const arcgisMap = document.querySelector("arcgis-map");

// Renderer por empresa (unique values). Hemos hecho autocast de la simbología
const rendererEmpresa = new UniqueValueRenderer({
  field: "ETIQUETA",
  uniqueValueInfos: [
    {
      value: "Carrefour",
      symbol: {
        type: "simple-marker",
        color: [41,191,255,1],
        style:'square'
      },
    },
    {
      value: "Alcampo",
      symbol: {
        type: "simple-marker",
        color: "red",
        style:'square'
      },
    },
    {
      value: "Hipercor",
      symbol: {
        type: "simple-marker",
        color: "darkblue",
        style:'square'
      },
    },
    {
      value: "E-Leclerc",
      symbol: {
        type: "simple-marker",
        color: "orange",
        style:'square'
      },
    },
    {
      value: "Costco",
      symbol: {
        type: "simple-marker",
        color: "green",
        style:'square'
      },
    },
  ],
});

const simbologiaMercado = new SimpleMarkerSymbol({
    color:[255,71,240,1],
    outline: {
    cap: "round",
    color: [255,255,255,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1
  }
})

const rendererMercados = ({
    type:'simple',
    symbol: simbologiaMercado
})

// Pop Up de Mercados

const mercadosPopup = new PopupTemplate({
  title: "{DESCR}",
  content: [
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "DIRECCION",
          label: "Dirección",
        },
        {
          fieldName: "MUNICIPIO",
          label: "Municipio",
        },
      ],
    },
  ],
});



// LLamada de capas
const hipermercadosFL = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Comercios_de_la_Comunidad_de_Madrid_WFL1/FeatureServer/3",
  renderer: rendererEmpresa,
  effect: "bloom(1.5,0.5px,0)",
});

const mercadosFL = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Comercios_de_la_Comunidad_de_Madrid_WFL1/FeatureServer/5",
  popupTemplate: mercadosPopup,
  renderer:rendererMercados
});

const mercadillosFL = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Comercios_de_la_Comunidad_de_Madrid_WFL1/FeatureServer/4",
});

const capaGraficoPunto = new GraphicsLayer({
  title: "Capa para guardar el punto clicado por el usuario",
});
const capaGraficoLinea = new GraphicsLayer({
  title: "Capa de líneas a los mercados",
});



// Apartado 6

// Simbología del evento Click
const simbologiaPuntoCliclado = new SimpleMarkerSymbol({
  angle: 0,
  color: [254,98,98,1],
  outline: {
    cap: "round",
    color: [194, 0, 0, 1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1,
  },
  path: "undefined",
  size: 20,
  style: "diamond",
  xoffset: 0,
  yoffset: 0,
});

const simpbologiaLineasClick = new SimpleLineSymbol({
  cap: "round",
  color: [254,98,98,1],
  join: "round",
  miterLimit: 1,
  style: "solid",
  width: 3,
});

// Evento del apartado 6
arcgisMap.addEventListener("arcgisViewClick", (eventoClick) => {
  const puntoClicado = eventoClick.detail.mapPoint;
  //   console.log(puntoClicado)
  const graficoPuntoClicado = new Graphic({
    geometry: puntoClicado,
    symbol: simbologiaPuntoCliclado,
  });
  capaGraficoPunto.add(graficoPuntoClicado);

  const clickQuery = new Query({
    geometry: puntoClicado,
    distance: 2,
    units: "kilometers",
    spatialRelationship: "intersects",
    returnGeometry: true,
  });

  const resultadoClickQuery = mercadosFL.queryFeatures(clickQuery);
  resultadoClickQuery.then((resultadoClickFeatureSet) => {
    const mercados2Km = resultadoClickFeatureSet.features;
    // console.log(mercados2Km);
    const coordsClick = mercados2Km.map((mercadoClick) => {
      const latitudClick = mercadoClick.geometry.latitude;
      const longitudClick = mercadoClick.geometry.longitude;
      const arrayCoords = [longitudClick, latitudClick]; // Coordenadas de cada mercado
      return arrayCoords;
    });
    // Bucle for para el path
    for (let step = 0; step < coordsClick.length; step++) {
      const lineasClick = new Polyline({
        paths: [
          coordsClick[step],
          [puntoClicado.longitude, puntoClicado.latitude],
        ],
      });
      const graficoPolilineaClick = new Graphic({
        geometry: lineasClick,
        symbol: simpbologiaLineasClick,
      });
      capaGraficoLinea.add(graficoPolilineaClick);
      capaGraficoLinea.effect = "bloom(1.5,0.5px,0)"
    }

  });
});

arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  arcgisMap.map.add(hipermercadosFL);
  arcgisMap.map.add(mercadosFL);
  // Apartado 5. Consulta al servicio Mercadillo
  // Creamos la query
  const peticionQuery = new Query({
    where: "MUNICIPIO = 'Madrid'",
    returnGeometry: true,
    outFields: ["*"],
  });
  const mercadillosGL = new GraphicsLayer({
    title: "Mercadillos de Madrid",
  });
  const resultadoQuery = mercadillosFL.queryFeatures(peticionQuery);
  resultadoQuery.then((resultadoFeatureSet) => {
    // console.log(resultadoFeatureSet)
    const mercadillos = resultadoFeatureSet.features;
    //   console.log(mercadillos)
    const simbologiaMercadillo = new PictureMarkerSymbol({
      angle: 0,
      height: 20,
      url: "https://img.icons8.com/?size=100&id=RI9xvgehXoQb&format=png&color=020000",
      width: 20,
      xoffset: 0,
      yoffset: 0,
      color: 'white'
    });
    const mercadillosConSimbologia = mercadillos.map((mercadillo) => {
      mercadillo.symbol = simbologiaMercadillo;
      return mercadillo;
    });
    //   console.log(mercadillosConSimbologia)

    mercadillosGL.addMany(mercadillosConSimbologia);
    arcgisMap.map.add(mercadillosGL);
    arcgisMap.map.add(capaGraficoPunto);
  });
  arcgisMap.map.add(capaGraficoLinea);
});


// Botón para borrar el evento click
const botonBorrar = document.querySelector('calcite-button')

botonBorrar.addEventListener('click',()=>{
    capaGraficoLinea.removeAll()
    capaGraficoPunto.removeAll()
}
)