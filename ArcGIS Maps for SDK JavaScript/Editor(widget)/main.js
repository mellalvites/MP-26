const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);

const capaEditableFL = new FeatureLayer({
    url:'https://services1.arcgis.com/MPSkeshhtFz9vjCL/arcgis/rest/services/Capa_Editable_/FeatureServer/0'
})

const arcgisMap = document.querySelector('arcgis-map')
arcgisMap.addEventListener("arcgisViewReadyChange",()=>{
    arcgisMap.map.add(capaEditableFL)
})