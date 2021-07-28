//https://www.npmjs.com/package/md5
//https://bluuweb.github.io/react-udemy/04-formularios/

import md5 from 'md5';

import React, {useRef, useState} from 'react';

const Formulario = () => {
  const ts = 1;
  const dif = '&hash=';
  const urlBaseComics =
    'https://gateway.marvel.com:443/v1/public/comics?ts=1&limit=50&offset=0&apikey=';
  const urlBaseCharacters =
    'https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=50&offset=0&apikey=';
  const [privateKey, setprivateKey] = useState ('');
  const [publickey, setpublickey] = useState ('');
  const [urlMarvelcomics, setUrlMarvelcomics] = useState ('');
  const [urlMarvelcharacters, seturlMarvelcharacters] = useState ('');

  const guardarDatos = e => {
    e.preventDefault ();

    if (!privateKey.trim ()) {
      console.log ('esta vacio Private-Key');
      return;
    }

    if (!publickey.trim ()) {
      console.log ('esta vacio Public-Key');
      return;
    }

    console.log ('procesando datos...' + privateKey + publickey);
    const result = md5 (`${ts}${privateKey}${publickey}`);
    const urlMarvelcomics = `${urlBaseComics}${publickey}${dif}${result}`;
    const urlMarvelcharacters = `${urlBaseCharacters}${publickey}${dif}${result}`;

    setUrlMarvelcomics (urlMarvelcomics);
    seturlMarvelcharacters (urlMarvelcharacters);

    e.target.reset ();
    setprivateKey ('');
    setpublickey ('');
  };

  return (
    <div className="p-3 mb-2 bg-primary text-white">
      <h2>Formulario</h2>
      <form onSubmit={guardarDatos}>

        <input
          type="text"
          placeholder="Ingrese Public-Key"
          className="form-control mb-2"
          onChange={e => setpublickey (e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese Private-Key"
          className="form-control mb-2"
          onChange={e => setprivateKey (e.target.value)}
        />
        <button className="text-light bg-dark" type="submit">
          Generar Url de Marvel
        </button>
        <div />
      </form>

      <div className="form-group purple-border">
        <label for="exampleFormControlTextarea4">Url Comics</label>
        <textarea
          className="form-control mb-2"
          id="exampleFormControlTextarea4"
          value={urlMarvelcomics}
          rows="2"
        />
        <a
          href={urlMarvelcomics}
          target="_blank"
          className="btn btn-info"
          role="button"
        >
          Ejecutar el link de la Url: Marvelcomics
        </a>
      </div>

      <div className="form-group green-border-focus">
        <label for="exampleFormControlTextarea5">Url Characteres</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea5"
          rows="2"
          value={urlMarvelcharacters}
        />
        <a
          href={urlMarvelcharacters}
          target="_blank"
          className="btn btn-info"
          role="button"
        >
           Ejecutar el link de la Url: Marvelcharacters
        </a>
      </div>

    </div>
  );
};

export default Formulario;
