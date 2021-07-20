import axios from 'axios';
import LogoImage from '../src/img/marvelbg.jpg';
import Header from './componentes/Header';

import React, {useEffect, useState} from 'react';
const url =
  'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=0f7ec6e9620a0aea41af082d03d7a88d&hash=';
const hash = '804f04417964946af208ca3ab2546bb9';
const url1 = `${url}${hash}`;
const url2 = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=bd0722d5750b6362d5ba0212ca36726b`;

function App () {
  const [items, setItems] = useState ([]);
  const [isLoading, setLoading] = useState (true);

  useEffect (() => {
    const fetch = async () => {
      const result = await axios (`${url1}`);
      console.log (result.data);
      setItems (result.data);
      setLoading (false);
    };
    fetch ();
  }, []);

  let sectionStyle = {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundImage: `url(${LogoImage})`,
  };

  return (
    <div style={sectionStyle} className="d-flex justify-content-center">
      <Header />

    </div>
  );
}

export default App;
