import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const PokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      Object.keys(action.pokemon).forEach((idx) => {
        newState[idx] = action.pokemon[idx];
      });
      return newState;
    default:
      return state;
  }
};

export default PokemonReducer;
