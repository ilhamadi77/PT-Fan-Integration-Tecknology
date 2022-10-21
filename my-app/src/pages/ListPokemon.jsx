import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components";

function ListPokemon() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  useEffect(() => {
    pokeFun();
  }, [url]);
  return (
    <>
      <div className="flex justify-center items-center h-[15vh] bg-amber-600">
        <h1 className="text-3xl font-extrabold ">POKEMON LIST</h1>
      </div>
      <div>
        <input type="text" />
      </div>
      <div className="container">
        <div className="left-content flex justify-center flex-wrap gap-5">
          <Card
            pokemon={pokeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          />
        </div>
        <div className="btn-group flex justify-center">
          {prevUrl && (
            <button
              onClick={() => {
                setPokeData([]);
                setUrl(prevUrl);
              }}
            >
              Previous
            </button>
          )}

          {nextUrl && (
            <button
              onClick={() => {
                setPokeData([]);
                setUrl(nextUrl);
              }}
            >
              Next
            </button>
          )}
        </div>
        {/* <div className="right-content">
          <Pokeinfo data={pokeDex} />
        </div> */}
      </div>
    </>
  );
}

export default ListPokemon;