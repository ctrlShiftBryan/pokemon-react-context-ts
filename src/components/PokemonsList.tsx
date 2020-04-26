import React, { useContext } from "react";
import { PokemonContext } from "./PokemonContext";

export default function PokemonsList() {
 const { pokemons, capture } = useContext(PokemonContext);


  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>

      {pokemons &&
        pokemons.map((pokemon) => (
          <div key={`${pokemon.id}-${pokemon.name}`}>
            <span>{pokemon.name}</span>
            <button onClick={capture && capture(pokemon)}>+</button>
          </div>
        ))}
    </div>
  );
}
