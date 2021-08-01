import React, {useState, useEffect} from 'react';

import PersonajesMarvel from '../Get_Marvel/PersonajesMarvel';
import ComicsMarvel from '../Get_Marvel/ComicsMarvel';


function Pag5 () {
  const [mostrarLista, setMostrarLista] = useState (false);
  const [mostrarLista1, setMostrarLista1] = useState (false);

  console.log (mostrarLista);
  return (
    <div className=" justify-content-center navbar navbar-light bg-dark ">

      <h1 className="row justify-content-center"> </h1>
      <div className="text-center">
        <div>

          <span className="badge badge-secondary">
            <button
              className="btn btn-primary btn-lg btn-block"
              onClick={() => {
                setMostrarLista1 (true);
              }}
            >
              {' '}Iniciar Componente: Comics de Marvel
            </button>
          </span>

          <span className="badge ">

            <button
              className="btn btn-primary btn-lg btn-warning"
              onClick={() => {
                setMostrarLista1 (false);
              }}
            >
              {' '}Desmontar:Comics de Marvel{' '}
            </button>
          </span>

          <span className="badge badge-secondary">
            <button
              className="btn btn-dark btn-lg"
              onClick={() => {
                setMostrarLista (true);
              }}
            >
              {' '}Iniciar Componente: Personajes de Marvel
            </button> {' '}
          </span>
          <span className="badge ">

            <button
              className="btn btn-primary btn-lg btn-warning"
              onClick={() => {
                setMostrarLista (false);
              }}
            >
              {' '}Desmontar: Personajes de Marvel{' '}
            </button>
          </span>
        </div>

      </div>
    
      {mostrarLista && <PersonajesMarvel />}
      {mostrarLista1 && <ComicsMarvel />}

    </div>
  );
}

export default Pag5;
/*
<div class="btn-group-vertical">
  ...
</div> */