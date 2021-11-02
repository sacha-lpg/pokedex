import classes from "./PokemonDetails.module.css";
import { useState, useEffect } from "react";
import { TYPE_COLORS } from "../CONST/TYPE_COLORS";

const axios = require("axios");


function PokemonDetails(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPokemon, setLoadedPokemon] = useState({});

  useEffect(() => {
    setIsLoading(true);
    axios.get("" + props.url + "").then((resp) => {
      resp = resp.data;

      setLoadedPokemon(resp);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p> Loading ...</p>
      </section>
    );
  }

  function getTypes() {
    let types = "";
    for (let i = 0; i < loadedPokemon.types.length; i++) {
      types += loadedPokemon.types[i].type.name + " ";
    }
    return types;
  }

  function closeHandler() {
    props.onClose();
  }

  return (
    <div className={classes.modal}>
      <div
        className={classes.carte}
        style={{
          backgroundColor: `#${TYPE_COLORS[loadedPokemon.types[0].type.name]}`,
        }}
      >
        <div className={classes.top}>
          <div>{loadedPokemon.name} </div>
          <div>{loadedPokemon.stats[0].base_stat + " HP"} </div>
        </div>
        <div className={classes.sep}></div>
        <div className={classes.logo}>
          <img src={loadedPokemon.sprites.front_default} alt="img poke" />
        </div>
        <div className={classes.sep}></div>
        <div className={classes.bar}>
          {"N°" +
            loadedPokemon.id +
            " Height : " +
            loadedPokemon.height +
            " Weight : " +
            loadedPokemon.weight}
        </div>
        <div className={classes.mid}>
          <div>Type : {getTypes()}</div>
          <div className={classes.stats}>
            <div>Attack : {loadedPokemon.stats[1].base_stat}</div>
            <div> Defense : {loadedPokemon.stats[2].base_stat}</div>
          </div>
        </div>
        <div className={classes.bot}>
          <button onClick={closeHandler}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
