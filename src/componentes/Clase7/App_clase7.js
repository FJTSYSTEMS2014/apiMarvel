import React, { useState, useEffect } from "react";

import DetalleDeHeroe from "./components/DetalleDeHeroe";
import ListaHeroes from "./components/ListaDeHeroes";
import { getHeroes } from "./services/marvel";
import img1 from "../../img/coco.jpg"
import InnerImageZoom from 'react-inner-image-zoom'
const img=`${img1}`;

// Cocos ver
export default function App() {
  // Lista de heroes
  //const [heroes, setHeroes] = useState(charactersInfo.data);
  const [heroes, setHeroes] = useState([]);

  // El heroe seleccionado
  const [selectedHeroe, setSelectedHero] = useState(0);

  const [first, setFirst] = useState(0);
  const [coco, setCoco] = useState(false);
  const [coco1, setCoco1] = useState(false);

  // El theme actual
  const [selectedTheme, setSelectedTheme] = useState("light");

  // isLoading
  const [isLoading, setLoading] = useState(false);

  // estado para buqueda
  const [busquedaActual, setBusquedaActual] = useState("");

  let color = "lightblue";
  if (selectedTheme === "dark") {
    color = "darkblue";
  }
  const selectedHeroeData = heroes ? heroes[selectedHeroe] : undefined;

  useEffect(() => {
    if (isLoading) {
      async function loadHeroes() {
        const res = await getHeroes(first, 20, busquedaActual);
        setLoading(false);
        const newHeroList = [...heroes, ...res.data.results];
        setHeroes(newHeroList);
        setFirst(first + 20);
      }
      loadHeroes();
    }
  }, [isLoading, first, busquedaActual, heroes]);

  return (
    <div className="row justify-content-md-center text-light bg-dark">
      <div className="card-header p-4 mb-8">
        <span></span>
        <h2 style={{ color: color }}>Caracteres de Marvel</h2>
        <input
          onChange={(e) => {
            setBusquedaActual(e.target.value);
          }}
          type="text"
          value={busquedaActual}
        />
        {'  '}
        <button
          onClick={() => {
            if(busquedaActual=="coco"
            ||busquedaActual=="coc"
            ||busquedaActual=="Coc"
            ||busquedaActual=="cOc"
            ||busquedaActual=="coC"
            ||busquedaActual=="coc"
            ||busquedaActual=="COC"
            ||busquedaActual=="CoCo"
            ||busquedaActual=="cOcO"
            ||busquedaActual=="cOCO"
            ||busquedaActual=="COcO"
            ||busquedaActual=="COCO"){
              console.log("search " + busquedaActual);
              setCoco(true);
           
              setLoading(false);
            }
            
            else{
              console.log("search " + busquedaActual);
              setHeroes([]);
              setSelectedHero(0);
              setFirst(0);
              setLoading(true);
              setCoco(false);
            }

          }}
          type="button"
          className="btn btn-primary"
        > 
<h5>Buscar</h5>
        </button>
        <button
          onClick={() => {
            if (selectedTheme === "light") {
              setSelectedTheme("dark");
            } else {
              setSelectedTheme("light");
            }
          }}
          type="button"
          className="btn btn-secundary"
        >
          Cambiar Theme
        </button>
      </div>
      <div className="col-6 text-center">
        <>
          <div className="overflow-auto" style={{ height: "300px" }}>
            <ListaHeroes
              heroes={heroes}
              selectedHeroe={selectedHeroe}
              setSelectedHero={setSelectedHero}
            />
          </div>
        </>
        {isLoading && (
          <>
            <div class="spinner-border" role="status">
              <span class="sr-only">...</span>
            </div>
          </>
        )}
        {!isLoading && (
          <button
            onClick={() => {
              // load heroes
              setLoading(!isLoading);
            }}
            type="button"
            className="btn btn-primary"
          >
            Cargar Heroes
          </button>
        )}
      </div>

      <div className="col-6">
      {coco  && < InnerImageZoom className="card-img-top mx-auto d-block" img src={img} />}
        {!coco&& !isLoading  && ( <DetalleDeHeroe color={color} heroe={selectedHeroeData} /> )}
        {isLoading && <>Loading ...</>}
       
      </div>
    </div>
  );
}
