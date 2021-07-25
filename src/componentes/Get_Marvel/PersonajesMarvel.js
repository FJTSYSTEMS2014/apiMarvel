import React from 'react';
import {useState, useEffect} from 'react';
//https://laurenashpole.github.io/react-inner-image-zoom/
import InnerImageZoom from 'react-inner-image-zoom'
const url3='http://gateway.marvel.com/v1/public/stories?ts=1&limit=10&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=bd0722d5750b6362d5ba0212ca36726b'
const url2='http://gateway.marvel.com/v1/public/comics?ts=1&limit=10&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=bd0722d5750b6362d5ba0212ca36726b'
const url =
  'http://gateway.marvel.com/v1/public/characters?ts=1&limit=50&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=bd0722d5750b6362d5ba0212ca36726b';
function Get_Marvel2 () {
  const [personajes, setPersonajes] = useState ([]);

  // apenas inicie el componente usamos useEffect
  useEffect (() => {
    fetch (url) // hacemos la petición get
      .then (res => res.json ()) // cuando hayamos terminado (then) e texto plano lo parseamos a json la respuesta de la petición
      .then (res => setPersonajes (res.data.results)) // cuando hayamos terminado (then) actualizamos el estado nombre
      .catch (error => {
        console.log (error);
      });
  }, []); //Debemos usar los [] para que la petición sólo se ejecute cuando el componente se monte. De lo contrario se ejecutaría en cada render. Si ponemos una variable de estado dentro de los [], la petición se ejecutárá cada vez que esa variable cambie.

  console.log (personajes);

  return (
    <div className=" row row-cols-1 row-cols-md-4 g-3">

      {personajes.map (per => (
        <div className="row-2 shadow-lg p-1 mb-1 bg-dark rounded">
          < InnerImageZoom img
            src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
            className="card-img-top mx-auto d-block"
            style={{width: '15rem', height: '15rem'}}
            key={per.id}
          />
          <div className="card-body">

            <ul className="row-2 shadow-lg p-1 mb-1 bg-dark rounded">
              <li className="list-group-item fw-bold">Name:{per.name}</li>
              <li className="list-group-item">ID:{per.id}</li>
              <li className="list-group-item">Description:{per.description}</li>
              <li className="list-group-item">Modified:{per.modified}</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>

          </div>

        </div>
      ))}
    </div>
  );
}

export default Get_Marvel2;
