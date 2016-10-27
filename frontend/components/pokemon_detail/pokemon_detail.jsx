import React from 'react';

const PokemonDetail = ({pokemon}) => {
  debugger
  return (
    <div >
    <img scr={pokemon.image_url}></img>
    <h2>{pokemon.name}</h2>
    <ul>
      <li>Type: {pokemon.type}</li>
      <li>Attack: {pokemon.attack}</li>
      <li>Defense: {pokemon.defense}</li>

    </ul>
    <h4>Items</h4>
    <ul>
      {pokemon.items.map(item => <li ><img src={item.image_url}></img></li>)}
    </ul>
    </div>
  );
};
export default PokemonDetail;
