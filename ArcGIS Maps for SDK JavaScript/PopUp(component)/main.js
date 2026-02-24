const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);
const PopupTemplate = await $arcgis.import("@arcgis/core/PopupTemplate.js");
const arcgisMap = document.querySelector("arcgis-map");

const plantillaPopup = new PopupTemplate({
  title: "{Nombre}",
  outFields: ["*"],
  content: [
    {
      type: "fields", // Autocasts as new FieldsContent()
      // Autocasts as new FieldInfo[]
      fieldInfos: [
        {
          fieldName: "Direccion",
          label: "Dirección",
        },
        {
          fieldName: "Telefono",
          label: "Teléfono",
        },
        {
          fieldName: "Municipio",
          label: "Municipio",
        },
      ],
    },
  ], // content Puede ser un array perfectamente
});

const hospitalesFL = new FeatureLayer({
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0",
  popupTemplate: plantillaPopup,
});

arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  arcgisMap.map.add(hospitalesFL);
});
