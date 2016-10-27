import { fetchAllPokemon, fetchOnePokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON, receiveAllPokemon, REQUEST_ONE_POKEMON, receiveOnePokemon  }
  from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receiveOnePokemonSuccess = data => {

    dispatch(receiveOnePokemon(data));
  };

  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_ONE_POKEMON:
      console.log("fetch one pokemon");
      fetchOnePokemon(action.id, receiveOnePokemonSuccess);

      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
