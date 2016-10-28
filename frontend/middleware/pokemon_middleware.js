import { fetchAllPokemon, fetchOnePokemon, createNewPokemon }
  from '../util/api_util';
import { REQUEST_ALL_POKEMON, receiveAllPokemon, REQUEST_ONE_POKEMON,
  receiveOnePokemon, CREATE_NEW_POKEMON, receiveNewPokemon }
  from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receiveOnePokemonSuccess = data => dispatch(receiveOnePokemon(data));
  const createNewPokemonSuccess = data => dispatch(receiveNewPokemon(data));

  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_ONE_POKEMON:
      fetchOnePokemon(action.id, receiveOnePokemonSuccess);
      return next(action);
    case CREATE_NEW_POKEMON:
      createNewPokemon(action.data, createNewPokemonSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
