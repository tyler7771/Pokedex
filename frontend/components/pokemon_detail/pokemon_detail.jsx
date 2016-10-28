import React from 'react';
import { withRouter } from 'react-router';

const PokemonDetail = ({ pokemon, router, children}) => {
  const handleClick = url => e => router.push(url);
  return (
    <div >
    <img src={pokemon.image_url}></img>
    <h2>{pokemon.name}</h2>
    <ul>
      <li>Type: {pokemon.type}</li>
      <li>Attack: {pokemon.attack}</li>
      <li>Defense: {pokemon.defense}</li>
      <li key={pokemon.id}>Moves: {pokemon.moves.join(", ")}</li>

    </ul>
    <h4>Items</h4>
    <ul>
      {pokemon.items.map(item => <li key={item.id} onClick={handleClick(`/pokemon/${pokemon.id}/item/${item.id}`)}>
        <img src={item.image_url}></img>
        </li>)}
      {children}
    </ul>
    </div>
  );
};
export default withRouter(PokemonDetail);
