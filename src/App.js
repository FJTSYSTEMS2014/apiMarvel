import React from 'react'

import {useState,useEffect} from 'react';

const App = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=bd0722d5750b6362d5ba0212ca36726b') // hacemos la petición get
    .then(res => res.json()) // cuando hayamos terminado (then) e texto plano lo parseamos a json la respuesta de la petición
    .then(res => setName(res.data.results[10].modified)); // cuando hayamos terminado (then) actualizamos el estado nombre
  }, []); //Debemos usar los [] para que la petición sólo se ejecute cuando el componente se monte. De lo contrario se ejecutaría en cada render. Si ponemos una variable de estado dentro de los [], la petición se ejecutárá cada vez que esa variable cambie.
  return <p>modified:{name}</p>;

}

export default App;


