const ImageryTileLayer = await $arcgis.import(
  "@arcgis/core/layers/ImageryTileLayer.js",
);
const RasterFunction = await $arcgis.import(
  "@arcgis/core/layers/support/RasterFunction.js",
);
const rasterFunctionUtils = await $arcgis.import("@arcgis/core/layers/support/rasterFunctionUtils.js");
const arcgisMap = document.querySelector("arcgis-map");


const ndvi = rasterFunctionUtils.bandArithmeticNDVI({
  nirBandId: 7,
  redBandId: 3,
  scientificOutput: false
});

 const colormap = rasterFunctionUtils.colormap({
  colorRampName: "NDVI2",
  raster: ndvi
});

const incendiosITL = new ImageryTileLayer({
  url: "https://tiledimageservices1.arcgis.com/MPSkeshhtFz9vjCL/arcgis/rest/services/Imagen_Incendio_Canarias___Sentinel_2/ImageServer",
  rasterFunction: colormap
});

arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  arcgisMap.map.add(incendiosITL);
});
