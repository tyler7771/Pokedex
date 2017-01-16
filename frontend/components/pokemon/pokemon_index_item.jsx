import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = (props) => {
  const handleClick = url => e => props.router.push(url);

  return (
    <li className="pokemon-index-item"
        onClick={handleClick(`/pokemon/${props.pokemon.id}`)}>
        <p>{props.pokemon.name}</p>
        <img src={props.pokemon.image_url}></img>
    </li>);
};
export default withRouter(PokemonIndexItem);
