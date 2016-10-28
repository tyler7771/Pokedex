import {combineReducers} from 'redux';

import PokemonReducer from './pokemon_reducer';
import PokemonDetailReducer from './pokemon_detail_reducer';
import NewPokemonReducer from './new_pokemon_reducer';

const RootReducer = combineReducers({
  pokemon: PokemonReducer,
  pokemonDetail: PokemonDetailReducer,
  newPokemon: NewPokemonReducer
});

export default RootReducer;
