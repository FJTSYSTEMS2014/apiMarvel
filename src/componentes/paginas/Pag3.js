import React, {useState, useEffect} from 'react';

import foto1 from '../../../src/img/animated-page-load-1.gif';

function Pag3 () {
  const [mostrarLista, setMostrarLista] = useState (true);

  console.log (mostrarLista);
  return (
    <div className=" justify-content-center">

      <h1 className="row justify-content-center"> ◘ Esta es la página 3  ◘ </h1>
      <div class="text-center">
   

          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={() => {
              setMostrarLista (false);
          
             
            }}
          >
            {' '} Quitar Imagen{' '}
          </button>
        
        <span className="badge badge-secondary">
          <button
            className="btn btn-warning btn-lg btn-block"
            onClick={() => {
              setMostrarLista (true);
             
            }}
          >
            {' '}Ver imagen
          </button>   </span>
 
      </div>
  
      {mostrarLista &&  <img src={foto1} width="100%" className="rounded mx-auto d-block" />} 
     

    </div>
  );
}

export default Pag3;
/*
<div class="btn-group-vertical">
  ...
</div> */