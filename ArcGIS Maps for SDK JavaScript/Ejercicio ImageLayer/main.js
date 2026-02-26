const ImageryTileLayer = await $arcgis.import(
  "@arcgis/core/layers/ImageryTileLayer.js",
);

let incendiosITL = new ImageryTileLayer({
  url: "https://tiledimageservices1.arcgis.com/MPSkeshhtFz9vjCL/arcgis/rest/services/Imagen_Incendio_Canarias___Sentinel_2/ImageServer",
  bandIds: [3, 2, 0],
  effect: "brightness(400%) contrast(1)",
});

let incendiosITL2 = new ImageryTileLayer({
  url: "https://tiledimageservices1.arcgis.com/MPSkeshhtFz9vjCL/arcgis/rest/services/Imagen_Incendio_Canarias___Sentinel_2/ImageServer",
  bandIds: [11, 10, 1],
  effect: "brightness(400%) contrast(1)",
});

const arcgisMap = document.querySelector("arcgis-map");
const arcgisSwipe = document.querySelector("arcgis-swipe");
arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  arcgisSwipe.startLayers.add(incendiosITL);
  arcgisSwipe.endLayers.add(incendiosITL2);
  arcgisMap.map.add(incendiosITL);
  arcgisMap.map.add(incendiosITL2);
});

const botonColorNatural = document.getElementById("natural");
const botonGeologia = document.getElementById("geologia");
const botonCambio = document.getElementById("cambio");



let condicion = true
botonCambio.addEventListener("click", () => {
//   if ((incendiosITL2.bandIds = [11, 10, 1])) {
//     incendiosITL2.bandIds = [8, 4, 3];
//   } else {
//     incendiosITL2.bandIds = [11, 10, 1];
//   }
//   incendiosITL2.bandIds = condicion ? [8, 4, 3] : [11, 10, 1];
//   condicion = !condicion;

  if (condicion) {
    incendiosITL2.bandIds = [8, 4, 3]
  } else {
    incendiosITL2.bandIds = [11, 10, 1]
  }
  condicion = !condicion
});


// VERSION CON IF SIN CARGAR DOS CAPAS

botonColorNatural.addEventListener("click", () => {
  if ((incendiosITL.bandIds = [11, 10, 1])) {
    incendiosITL.bandIds = [3, 2, 0];
  }
});

botonGeologia.addEventListener("click", () => {
  incendiosITL.bandIds = [11, 10, 1];
});

// VERSION CUTRE JEJE

// botonColorNatural.addEventListener('click',()=>{
//     arcgisMap.map.remove(incendiosITL2)
// })

// botonGeologia.addEventListener('click',()=>{
//     arcgisMap.map.add(incendiosITL2)
// })

