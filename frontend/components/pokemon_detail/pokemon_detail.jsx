import React from 'react';
import { withRouter } from 'react-router';

const PokemonDetail = ({ pokemon, router, children}) => {
  const handleClick = url => e => router.push(url);
  return (
    <div className="pokemon-detail">
      <div className="pokemon-info">
        <img src={pokemon.image_url}></img>
        <div className="pokemon-details">
          <h2>{pokemon.name}</h2>
          <ul className="pokemon-stats">
            <li>Type: {pokemon.type}</li>
            <li>Attack: {pokemon.attack}</li>
            <li>Defense: {pokemon.defense}</li>
            <li key={pokemon.id}>Moves: {pokemon.moves.join(", ")}</li>
          </ul>
        </div>
      </div>
      <div className="item-container">
        <h4>Items</h4>
        <ul className="pokemon-items">
          {pokemon.items.map(item => <li key={item.id} onClick={handleClick(`/pokemon/${pokemon.id}/item/${item.id}`)}>
          <img className="item-image" src={item.image_url}></img>
        </li>)}
      </ul>
      {children}
      </div>
    </div>
  );
};
export default withRouter(PokemonDetail);
