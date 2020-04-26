import React, { useContext } from "react";
import { PokemonContext } from "./PokemonContext";

export interface IPokemon {
  id: number;
  name: string;
}
export default function CapturedPokemons() {
  const { capturedPokemons, release } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <h2>Captured Pokemons</h2>

      {capturedPokemons &&
        capturedPokemons.map((pokemon) => (
          <div key={`${pokemon.id}-${pokemon.name}`}>
            <span>{pokemon.name}</span>
            <button onClick={release && release(pokemon)}>-</button>
          </div>
        ))}
    </div>
  );
}
