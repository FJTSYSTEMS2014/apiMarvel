import React from 'react'

import {useState,useEffect} from 'react';
import axios from "axios";

const App = (_) => {
  const [name, setName] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/ditto`)
      .then((res) =>{ console.log(res.data.abilities[0].ability.name)
        setName(res.data.abilities[0].ability.name);}
      
      )
  }, []);

  return <div>{name}</div>;
};
export default App;