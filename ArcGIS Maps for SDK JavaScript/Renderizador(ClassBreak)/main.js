const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);

const SimpleFillSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleFillSymbol.js");

const arcgisMap = document.querySelector("arcgis-map");


// Guardamos en variables las diferentes simbologías del parámetro symbol dentro del parámetro classBreakInfos del renderer.

const sym1 = new SimpleFillSymbol({
  color: [190,230,254,1],
  outline: {
    cap: "round",
    color: [0,122,194,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 0
  },
  style: "solid"
});

const sym2 = new SimpleFillSymbol({
  color: [73,184,248,1],
  outline: {
    cap: "round",
    color: [0,122,194,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 0
  },
  style: "solid"
});


const sym3 = new SimpleFillSymbol({
  color: [4,141,220,1],
  outline: {
    cap: "round",
    color: [0,122,194,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 0
  },
  style: "solid"
});

const sym4 = new SimpleFillSymbol({
  color: [0,82,133,1],
  outline: {
    cap: "round",
    color: [0,122,194,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 0
  },
  style: "solid"
});


const zonasBasicasRenderer = {
    type: 'class-breaks',
    field: 'F_POBLACION__Población',
    classBreakInfos: [
    {
      minValue: 0,  
      maxValue: 20000,  
      symbol: sym1,  
      label: "menos de 20000"
    }, {
      minValue: 20001, 
      maxValue: 30000,  
      symbol: sym2,  
      label: "20000 - 50000"
    }, {
      minValue: 30001,  
      maxValue: 50000,  
      symbol: sym3,  
      label: "30000 - 50000"
    }, {
        minValue: 50001,
        maxValue: 9999999,
        symbol: sym4,
        label: "más de 50000"
    }
  ]
}



const zonasBasicasSalud = new FeatureLayer({
    url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/ZONAS_BASICAS_SALUD_MADRID/FeatureServer/0',
    renderer: zonasBasicasRenderer
})


arcgisMap.addEventListener('arcgisViewReadyChange',()=>{
    console.log(zonasBasicasRenderer)
    arcgisMap.map.add(zonasBasicasSalud)
})