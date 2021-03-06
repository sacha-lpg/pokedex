import { useState, useEffect } from "react";
import classes from "./AllPokemon.module.css";

import PokemonList from "../component/pokemon/PokemonList";

const axios = require("axios");

function AllPokemonPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPokemons, setLoadedPokemons] = useState([]);
  const [filteredList, setFilteredList] = useState([]);


  const handleSearchTerm = (e) => {
    let val = e.target.value;
    console.log(val);
    if(val === ""){
      setFilteredList(loadedPokemons);
    }

    else {
    setFilteredList(loadedPokemons.filter((poke) => poke.name.includes(val)));
  };
  }

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((resp) => {
        setIsLoading(false);
        setLoadedPokemons(resp.data.results);
        setFilteredList(resp.data.results);
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
      <PokemonList pokemons={filteredList} />
    </div>
  );
}

export default AllPokemonPage;
