import { useState } from "react";
import "./AplicacionArcGIS.css";
import CardEjemplo from "./CardEjemplo/CardEjemplo";

interface AplicacionArcGISProps {
  titulo: string;
  descripcion: string;
  enlace: string;
  direccionEnlace: string;
}

function AplicacionArcGIS(props: AplicacionArcGISProps) {
  // Función de estado
  let [estadoBoton, setEstadoBoton] = useState(false);
  let ejemplosRenderizados;

  if (props.titulo === "Experience Builder" && estadoBoton) {
    ejemplosRenderizados = (
      <>
        <CardEjemplo
          imagenEjemplo={"https://placehold.co/100x100"}
          tituloEjemplo={"Ejemplo 1"}
          textoEjemplo={"hola"}
          botonEjemplo={"enlace"}></CardEjemplo>
        <CardEjemplo
          imagenEjemplo={"https://placehold.co/100x100"}
          tituloEjemplo={"Ejemplo 1"}
          textoEjemplo={"hola"}
          botonEjemplo={"enlace"}></CardEjemplo>
        <CardEjemplo
          imagenEjemplo={"https://placehold.co/100x100"}
          tituloEjemplo={"Ejemplo 1"}
          textoEjemplo={"hola"}
          botonEjemplo={"enlace"}></CardEjemplo>
      </>
    );
  }
  if (props.titulo === "Story Maps" && estadoBoton) {
    ejemplosRenderizados = (
      <>
        <CardEjemplo
          imagenEjemplo={"https://placehold.co/100x100"}
          tituloEjemplo={"Experience Builder 2"}
          textoEjemplo={"hola"}
          botonEjemplo={"enlace"}></CardEjemplo>
        <CardEjemplo
          imagenEjemplo={"https://placehold.co/100x100"}
          tituloEjemplo={"Story Maps 2"}
          textoEjemplo={"hola"}
          botonEjemplo={"enlace"}></CardEjemplo>
        <CardEjemplo
          imagenEjemplo={"https://placehold.co/100x100"}
          tituloEjemplo={"Ejemplo 2"}
          textoEjemplo={"hola"}
          botonEjemplo={"enlace"}></CardEjemplo>
      </>
    );
  }

  function buttonHandler() {
    if (estadoBoton) {
      setEstadoBoton(false);
    }
    if (estadoBoton == false) {
      setEstadoBoton(true);
    }
  }

  return (
    <div className="aplicacion-arcgis">
      <div className="informacion-aplicacion">
        <div className="logo">
          <img src="https://placehold.co/100x100" alt="Imagen de prueba" />
        </div>
        <div className="texto">
          <h1>{props.titulo}</h1>
          <p>{props.descripcion}</p>
          <a href={props.direccionEnlace}>{props.enlace}</a>
          <button onClick={buttonHandler}>Ver Ejemplos</button>
        </div>
      </div>
      <div className="cartas">{ejemplosRenderizados}</div>
    </div>
  );
}

export default AplicacionArcGIS;
