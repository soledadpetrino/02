import React from "react";
import '../hojas-de-estilo/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
      className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' } //asignacion de clases de forma dinamica
      onClick={ manejarClic }>
      { texto }
    </button>
  );
}

export default Boton;