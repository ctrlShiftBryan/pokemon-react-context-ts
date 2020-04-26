import React, { useContext } from "react";
import { IPokemon } from "./CapturedPokemons";
import { PokemonContext } from "./PokemonContext";
export default function PokemonsList() {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons,
  } = useContext(PokemonContext);

  const removePokemonFromList = (removedPokemon: IPokemon) =>
    pokemons && pokemons.filter((pokemon) => pokemon !== removedPokemon);

  const capture = (pokemon: IPokemon) => () => {
    setCapturedPokemons &&
      setCapturedPokemons([...(capturedPokemons || []), pokemon]);
    setPokemons && setPokemons(removePokemonFromList(pokemon));
  };

  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>

      {pokemons &&
        pokemons.map((pokemon) => (
          <div key={`${pokemon.id}-${pokemon.name}`}>
            <span>{pokemon.name}</span>
            <button onClick={capture(pokemon)}>+</button>
          </div>
        ))}
    </div>
  );
}
