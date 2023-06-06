import React from "react";
import "./Proyects.css";

function Proyects(props) {
  const { imageLink, title, description, buttonLink } = props;

  return (
    <div className="proyects-container">
      <div className="row">
        <div className="column left">
          <img src={imageLink} alt="Imagen" className="imagenCard" height='140' width='140'/>
        </div>
        <div className="column middle">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="column right">
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <button>Ver en GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
