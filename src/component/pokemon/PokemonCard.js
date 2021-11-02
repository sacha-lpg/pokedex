import classes from "./PokemonCard.module.css";
import Backdrop from "./Backdrop";
import PokemonDetails from "./PokemonDetails";
import { useState } from "react";

function PokemonCard(props) {
  const [detailsIsOpen, setDetailsIsOpen] = useState(false);

  function detailsHandler() {
    setDetailsIsOpen(true);
  }

  function closeDetailsHandler() {
    setDetailsIsOpen(false);
  }

  return (
    <div className={classes.card}>
      <div className={classes.info}>
        <span className={classes.id}>{"#" + props.id}</span>
      </div>
      <div className={classes.cardHeader}>
        <img
          src={props.image} // mettre l'img de l'api
          alt="pokeImg"
        />
      </div>
      <div className={classes.cardBody}>
        <h4 className={classes.name}>{props.name}</h4>
      </div>
      <div className={classes.detail}>
        <button className={classes.boutton} onClick={detailsHandler}>
          Details
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

export default PokemonCard;
