import "./CardEjemplo.css";

interface CardEjemploProps {
  imagenEjemplo: string;
  tituloEjemplo: string;
  textoEjemplo: string;
  botonEjemplo: string;
}

function CardEjemplo(props: CardEjemploProps) {
  return (
    <div className="card-ejemplo">
        <img src={props.imagenEjemplo} alt="Imagen Ejemplo" />
        <h2>{props.tituloEjemplo}</h2>
        <p>{props.textoEjemplo}</p>
        <a href="">{props.botonEjemplo}</a>
    </div>
  );
}

export default CardEjemplo;
