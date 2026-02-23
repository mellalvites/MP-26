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
const Polygon = await $arcgis.import("@arcgis/core/geometry/Polygon.js");
const SimpleFillSymbol = await $arcgis.import(
  "@arcgis/core/symbols/SimpleFillSymbol.js",
);

// Seleccionamos el mapa

const arcgisMap = document.querySelector("arcgis-map");
const hospitalesFL = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0",
});

// Construimos nuestro polígono
const geometriaPoligono = new Polygon({
  rings: [
    [
      [-4.070717, 40.942047],
      [-4.047284, 40.941501],
      [-4.044361, 40.921625],
      [-4.072148, 40.926942],
    ],
  ],
});
// Aplicamos simbología al poligono
const simbologiaPoligono = new SimpleFillSymbol({
  color: [187, 255, 0, 1],
  outline: {
    cap: "round",
    color: [255, 0, 0, 1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1,
  },
  style: "backward-diagonal",
});
// Unimos sus partes en un gráfico
const graficoPoligono = new Graphic({
  geometry: geometriaPoligono,
  symbol: simbologiaPoligono,
});

// Creamos el GL para agregar el gráfico
const poligonoGL = new GraphicsLayer({
  graphics: [graficoPoligono],
  title: "Capa gráfica de Polígono",
});

// Creamos el evento:
arcgisMap.addEventListener("arcgisViewReadyChange", (eventoViewReadyChange) => {
  // Este evento se ejecuta cuando se carga la vista del Mapa
  arcgisMap.map.add(poligonoGL);
  arcgisMap.map.reorder(poligonoGL, 0);

  // Creamos la query/consulta/petición
  const peticionQuery = new Query({
    where: "Provincia = 'Segovia'", // condición o filtro de consulta
    geometry: geometriaPoligono, // la geometría de relación
    returnGeometry: true, // necesario para que nos devuelva la geometría
    outFields: ["*"], // los campos
    spatialRelationship:'intersects'
  });

  // Ejecutamos la petición de consulta
  // OJOO RESULTADO ES UNA PROMESA !!!!!!!!!!!!!!!!!!

  const resultadoQuery = hospitalesFL.queryFeatures(peticionQuery); // aplica la query al servicio. Es un método de la CAPA
  console.log(resultadoQuery); // Promesa
  // Si la query sale bien...
  resultadoQuery.then((resultadoFeatureSet) => {
    // Entramos a las features o entidades del FL
    console.log(resultadoFeatureSet); // u (contiene un Array en la propiedad features)
    const entidades = resultadoFeatureSet.features;

    // Le aplicamos una nueva simbología
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

    // Como es un array trabajamos con iterador
    const entidadesConSimbologia = entidades.map((grafico) => {
      grafico.symbol = simbologiaPunto;
      return grafico;
    });
    // Tenemos un nuevo array con las simbologías cambiadas

    // Creamos una nueva GL para nuestro nuevo gráfico de Hospitales
    const capaGraficaGL = new GraphicsLayer({
        title: "Capa gráfica de Hospitales"
    });
    capaGraficaGL.addMany(entidadesConSimbologia);
    arcgisMap.map.add(capaGraficaGL);
  });

  // Si sale mal
  resultadoQuery.catch((error) => {
    console.log(error)
  })
});
