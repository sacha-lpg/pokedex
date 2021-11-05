import classes from "./PokemonCard.module.css";
import Backdrop from "./Backdrop";
import PokemonDetails from "./PokemonDetails";
import { useState } from "react";
import useStore from "../../Store";

function PokemonCard(props) {
  const [detailsIsOpen, setDetailsIsOpen] = useState(false);
  const connected = useStore((state) => state.connected);
  const addPokemon = useStore(state => state.addToTeam);
  const team = useStore(state => state.team);
  const pokemonActu = {
    name:props.name,
    url:props.url
  }

  function detailsHandler() {
    setDetailsIsOpen(true);
  }

  function closeDetailsHandler() {
    setDetailsIsOpen(false);
  }
 
   
  if (connected) {
    return (
      <div className={classes.card}>
        <div className={classes.info}>
          <span className={classes.id}>{"#" + props.id}</span>
          <button className={classes.add} onClick={() => addPokemon(pokemonActu) }>➕</button>
        </div>
        <div className={classes.cardHeader}>
          <img src={props.image} alt="pokeImg" />
        </div>
        <div className={classes.cardBody}>
          <h4 className={classes.name}>{props.name}</h4>
        </div>
        <div className={classes.detail}>
          <button className={classes.boutton} onClick={detailsHandler}>
            🔎
          </button>
        </div>
        {detailsIsOpen && (
          <PokemonDetails
            onClose={closeDetailsHandler}
            url={props.url}
            name={props.name}
          />
        )}
        {detailsIsOpen && <Backdrop onClick={closeDetailsHandler} />}
      </div>
    );
  } else {
    return (
      <div className={classes.card}>
        <div className={classes.info}>
          <span className={classes.id}>{"#" + props.id}</span>
        </div>
        <div className={classes.cardHeader}>
          <img src={props.image} alt="pokeImg" />
        </div>
        <div className={classes.cardBody}>
          <h4 className={classes.name}>{props.name}</h4>
        </div>
        <div className={classes.detail}>
          <button className={classes.boutton} onClick={detailsHandler}>
            🔎
          </button>
        </div>
        {detailsIsOpen && (
          <PokemonDetails
            onClose={closeDetailsHandler}
            url={props.url}
            name={props.name}
          />
        )}
        {detailsIsOpen && <Backdrop onClick={closeDetailsHandler} />}
      </div>
    );
  }
}

export default PokemonCard;
