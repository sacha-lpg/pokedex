import { useState, useEffect } from "react";
import classes from "./AllPokemon.module.css";

import PokemonList from "../component/pokemon/PokemonList";

const axios = require("axios");

function AllPokemonPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPokemons, setLoadedPokemons] = useState([]);
  const [searchTerm, setSurchTerm] = useState("");

  const handleSearchTerm = (e) => {
    setLoadedPokemons(loadedPokemons);
    let val = e.target.value;

    // if (val.length > 2) {
    setSurchTerm(val);
    const updatepoke = loadedPokemons.filter((poke) =>
      poke.name.includes(searchTerm)
    );
    console.log(updatepoke);
    setLoadedPokemons(updatepoke);
    // }
  };

  

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((resp) => {
        resp = resp.data;
        resp = resp.results;
        setIsLoading(false);
        setLoadedPokemons(resp);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p> Loading ...</p>
      </section>
    );
  }

  return (
    <div>
      <div className={classes.search}>
        <input
          type="search"
          placeholder="Search a Pokemon"
          id="site-search"
          name="q"
          onChange={handleSearchTerm}
        />
      </div>
      <PokemonList pokemons={loadedPokemons} />
    </div>
  );
}

export default AllPokemonPage;
