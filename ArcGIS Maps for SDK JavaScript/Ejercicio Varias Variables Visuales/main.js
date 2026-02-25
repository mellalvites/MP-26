const FeatureLayer = await $arcgis.import(
  "@arcgis/core/layers/FeatureLayer.js",
);

const arcgisMap = document.querySelector("arcgis-map");

const rendererVientos = {
  type: "simple",
  symbol: {
    type: "simple-marker",
    angle: 0,
    color: "yellow",
    path: "M14.5,29 23.5,0 14.5,9 5.5,0z",
  },
  visualVariables: [
    {
      type: "size",
      field: "WIND_SPEED",
      minDataValue: 0,
      maxDataValue: 100,
      minSize: 8,
      maxSize: 50,
    },
    {
      type: "rotation",
      field: "WIND_DIRECT",
      rotationType: "geographic",
    },
  ],
};

// const rendererTemperatura = {
//   type: "class-breaks",

//   symbol: {
//     type: "color",
//     angle: 0,
//     color: [241, 245, 0, 1],
//     outline: {
//       cap: "square",
//       color: [0, 122, 194, 1],
//       join: "round",
//       miterLimit: 1,
//       style: "solid",
//       width: 0,
//     },
//     path: "undefined",
//     size: 12,
//     style: "triangle",
//     xoffset: 0,
//     yoffset: 0,
//   },

//   visualVariables: [
//     {
//       type: "color",
//       field: "WIND_DIRECT",
//       rotationType: "geographic",
//     },
//   ],
// };

const vientosFL = new FeatureLayer({
  url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/weather_stations_010417/FeatureServer/0",
  renderer: rendererVientos,
});

// const temperaturaFL = new FeatureLayer({
//   url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/weather_stations_010417/FeatureServer/0",
//   renderer: rendererTemperatura,
// });

arcgisMap.addEventListener("arcgisViewReadyChange", () => {
  arcgisMap.map.add(vientosFL);
});
