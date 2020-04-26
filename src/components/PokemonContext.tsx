import React, { createContext, useState } from 'react';

export interface IProviderPokemon {
  children: any[] | any;
}

export interface IPokemon {
  id: number;
  name: string;
}

export interface IPokemonProvider {
  pokemons: IPokemon[],
  setPokemons: Function,
  capturedPokemons: IPokemon[],
  setCapturedPokemons: Function,
}
export const PokemonContext = createContext<Partial<IPokemonProvider>>({});

export const PokemonProvider = (props: IProviderPokemon) => {
  const [pokemons, setPokemons] = useState([
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Charmander' },
    { id: 3, name: 'Squirtle' }
  ]);

  const [capturedPokemons, setCapturedPokemons] = useState<IPokemon[]>([]);

  const providerValue = {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  )
};

