const SceneLayer = await $arcgis.import("@arcgis/core/layers/SceneLayer.js");
const SnowyWeather = await $arcgis.import(
  "@arcgis/core/views/3d/environment/SnowyWeather.js",
);
const arcgisScene = document.querySelector("arcgis-scene");

arcgisScene.addEventListener(
  "arcgisViewReadyChange",
  (eventoViewReadyChange) => {
    const edificiosSL = new SceneLayer({
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/Open3D_Buildings_v1/SceneServer",
      // portalItem {
      // id: 'c444b24b184c4523a5dc96248bfea4e1'}
      
    });
    arcgisScene.map.add(edificiosSL);
    arcgisScene.environment.weather = new SnowyWeather()
  },
);

const botonGranVia = document.getElementById("gran-via");
const botonPlaza = document.getElementById("plaza-españa");
const botonCibeles = document.getElementById("cibeles");
const botonRetiro = document.getElementById("retiro");

botonGranVia.addEventListener("click", () => {
  arcgisScene.view.goTo([-3.7039276, 40.420179]);
  arcgisScene.view.zoom = 18;
});

botonPlaza.addEventListener("click", () => {
  arcgisScene.view.goTo([-3.713393, 40.422279]);
});
botonCibeles.addEventListener("click", () => {
  arcgisScene.view.goTo([-3.691667, 40.41933585]);
});
botonRetiro.addEventListener("click", () => {
  arcgisScene.view.goTo([-3.68307, 40.41317]);
});
