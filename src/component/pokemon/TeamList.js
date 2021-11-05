import PokemonCard from "./PokemonCard";
import classes from "./PokemonList.module.css";

function Teamlist(props) {
  if (props.pokemons === undefined) {
    return null;
  } else {
    return (
      <div className={classes.list}>
        {props.pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.url.split("/")[6]}
            id={pokemon.url.split("/")[6]}
            image={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
              pokemon.url.split("/")[6] +
              ".png"
            }
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>
    );
  }
}

export default Teamlist;
