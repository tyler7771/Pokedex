import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = (props) => (
  <section className="pokedex">
    <ul>
      {props.pokemon.map(poke => (
            <PokemonIndexItem key={poke.id} pokemon={poke} />
        ))}
      {props.children}
    </ul>
  </section>
);

export default PokemonIndex;
