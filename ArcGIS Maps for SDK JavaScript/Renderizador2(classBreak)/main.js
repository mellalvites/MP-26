const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const ClassBreaksRenderer = await $arcgis.import("@arcgis/core/renderers/ClassBreaksRenderer.js");


const arcgisMap = document.querySelector("arcgis-map");


const rendererPorClases = new ClassBreaksRenderer({
    field:"F_POBLACION__Población",

})

rendererPorClases.addClassBreakInfo({ // copio y pego esto para los demás rangos de valores
    minValue:0,
    maxValue:10000,
    symbol:{
        type: 'simple-fill',
        color: 'red',
    }
})

rendererPorClases.addClassBreakInfo({
    minValue:10001,
    maxValue:20000,
    symbol:{
        type: 'simple-fill',
        color: 'orange',
    }
})

rendererPorClases.addClassBreakInfo({
    minValue:20001,
    maxValue:1000000,
    symbol:{
        type: 'simple-fill',
        color: 'yellow',
    }
})





const zonasBasicasSalud = new FeatureLayer({
    url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/ZONAS_BASICAS_SALUD_MADRID/FeatureServer/0',
    renderer: rendererPorClases
})

arcgisMap.addEventListener('arcgisViewReadyChange',()=>{
    arcgisMap.map.add(zonasBasicasSalud)
})