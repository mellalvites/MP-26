// Importamos geomterías y grafico

const Point = await $arcgis.import("@arcgis/core/geometry/Point.js");
const Polyline = await $arcgis.import("@arcgis/core/geometry/Polyline.js");
const Polygon = await $arcgis.import("@arcgis/core/geometry/Polygon.js");
const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");


// Importamos simbologías 

const SimpleLineSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleLineSymbol.js");
const SimpleMarkerSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleMarkerSymbol.js");
const SimpleFillSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleFillSymbol.js");

const GraphicsLayer = await $arcgis.import(
  "@arcgis/core/layers/GraphicsLayer.js",
);


// Añadir puntos al mapa

// Geometría

const geometriaPunto = new Point({
  latitude:40.422279, 
  longitude:-3.713393,
});
const geometriaPolilinea = new Polyline({
  paths: [[
    [-3.713393,40.422279],
    [-3.813393,40.522279],
    [-3.913393,40.622279]]],
});
const geometriaPoligono = new Polygon({
  curveRings: [[
    [-97.06138, 33.837],
    [-100.06133, 35.836],
    [-102.06124, 37.834],
  ]]
});


// Simbologías

const simbologiaPolilinea = new SimpleLineSymbol({
  cap: "round",
  color: [194,0,178,1],
  join: "round",
  miterLimit: 1,
  style: "dash",
  width: 2
});


const simbologiaPunto = new SimpleMarkerSymbol({
  angle: 0,
  color: [165,117,255,1],
  outline: {
    cap: "round",
    color: [194,0,0,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1
  },
  path: "undefined",
  size: 20,
  style: "diamond",
  xoffset: 0,
  yoffset: 0
});


const simbologiaPoligono = new SimpleFillSymbol({
  color: [187,255,0,1],
  outline: {
    cap: "round",
    color: [255,0,0,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1
  },
  style: "solid"
});


// Unimos Geometría y Simbología 

const graficoPunto = new Graphic({
    geometry: geometriaPunto,
    symbol: simbologiaPunto,

})

const graficoPolilinea = new Graphic({
    geometry: geometriaPolilinea,
    symbol: simbologiaPolilinea,

})

const graficoPoligono = new Graphic({
    geometry: geometriaPoligono,
    symbol: simbologiaPoligono,

})


// Creo una capa gráfica para los gráficos que creo

const capaGraficaPunto = new GraphicsLayer()
const capaGraficaPolilinea = new GraphicsLayer()
const capaGraficaPoligono = new GraphicsLayer()

capaGraficaPunto.add(graficoPunto)
capaGraficaPolilinea.add(graficoPolilinea)
capaGraficaPoligono.add(graficoPoligono)

// Accedemos al Mapa

const arcgisMap = document.querySelector('arcgis-map')

arcgisMap.addEventListener('arcgisViewReadyChange',()=>{
    arcgisMap.map.add(capaGraficaPunto)
    arcgisMap.map.add(capaGraficaPolilinea)
    arcgisMap.map.add(capaGraficaPoligono)
    arcgisMap.view.goTo(geometriaPunto)
})
