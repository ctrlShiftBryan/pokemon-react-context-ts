import React, { useContext } from "react";
import { PokemonContext } from "./PokemonContext";

export interface IPokemon {
  id: number;
  name: string;
}

export default function CapturedPokemons() {
  // const [pokemons] = useState<IPokemon[]>([]);

  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons,
  } = useContext(PokemonContext);

  const releasePokemon = (releasedPokemon: IPokemon) =>
    capturedPokemons &&
    capturedPokemons.filter((pokemon) => pokemon !== releasedPokemon);

  const release = (pokemon: IPokemon) => () => {
    setCapturedPokemons && setCapturedPokemons(releasePokemon(pokemon));
    setPokemons && setPokemons([...(pokemons || []), pokemon]);
  };

  return (
    <div className="pokedex">
      <h2>Captured Pokemons</h2>

      {capturedPokemons &&
        capturedPokemons.map((pokemon) => (
          <div key={`${pokemon.id}-${pokemon.name}`}>
            <span>{pokemon.name}</span>
            <button onClick={release(pokemon)}>-</button>
          </div>
        ))}
    </div>
  );
}
