import "./App.css";
import AplicacionArcGIS from "./components/AplicacionArcGIS/AplicacionArcGIS";

function App() {
  return (
    <>
      <AplicacionArcGIS
        titulo={"Experience Builder"}
        descripcion={"Descripcion de Experience Builder"}
        enlace={"Enlace a Experience Builder"}
        direccionEnlace={
          "https://www.npmjs.com/package/@arcgis/core?activeTab=code"
        }></AplicacionArcGIS>
      <AplicacionArcGIS
        titulo={"Story Maps"}
        descripcion={"Descripcion de Story Maps"}
        enlace={"Enlace a Story Maps"}
        direccionEnlace={"undefined"}></AplicacionArcGIS>

    </>
  );
}

export default App;
