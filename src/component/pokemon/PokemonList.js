import PokemonCard from "./PokemonCard";
import classes from "./PokemonList.module.css";

function PokemonList(props) {
  
  return (
    <div className={classes.list}>
      {props.pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.url.split("/")[6]}
          id={pokemon.url.split("/")[6]}
          image={
            "https://img.pokemondb.net/artwork/large/" + pokemon.name + ".jpg"
          }
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </div>
  );
}

export default PokemonList;
