import "./AplicacionArcGIS.css";


function AplicacionArcGIS({ titulo, descripcion, enlace,direccionEnlace }) {
  return (
    <div className="aplicacion-arcgis">
      <div className="logo">
        <img src="https://placehold.co/100x100" alt="Imagen de prueba" />
      </div>
      <div className="texto">
        <h1>APLICACION</h1>
        <p>{titulo}</p>
        <p>{descripcion}</p>
        <a href={direccionEnlace}>{enlace}</a>
      </div>
    </div>
  );
}


export default AplicacionArcGIS