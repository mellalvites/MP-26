// Import 

const Point = await $arcgis.import("@arcgis/core/geometry/Point.js");
const SimpleMarkerSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleMarkerSymbol.js");
const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");
const GraphicsLayer = await $arcgis.import("@arcgis/core/layers/GraphicsLayer.js");

// Añadir puntos al mapa 

// Geometría 

const geometriaPunto = new Point({
    latitude: -4,
    longitude: 41.4
})

console.log('Geometría',geometriaPunto)

// Simbología 

const simbologiaPunto = new SimpleMarkerSymbol({
  angle: 0,
  color: [52,194,0,1],
  outline: {
    cap: "square",
    color: [52,194,0,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1
  },
  path: "undefined",
  size: 20,
  style: "triangle",
  xoffset: 0,
  yoffset: 0
});


// Unimos Geometría y Simbología 

const graficoPunto = new Graphic({
    geometry: geometriaPunto,
    symbol: simbologiaPunto,

})


// Creo una capa gráfica para los gráficos que creo

const capaGraficaGL = new GraphicsLayer()

capaGraficaGL.add(graficoPunto)

// Accedemos al Mapa

const arcgisMap = document.querySelector('arcgis-map')

arcgisMap.addEventListener('arcgisViewReadyChange',()=>{
    arcgisMap.map.add(capaGraficaGL)
})



