import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory} from 'react-router';
import { requestAllPokemon, requestOnePokemon } from '../actions/pokemon_actions';
import PokemonDetailContainer
  from './pokemon_detail/pokemon_detail_container';

const Root = ({ store }) => {
  const requestOnEnter = () => {
    store.dispatch(requestAllPokemon());
  };
  const requestOnePokemonOnEnter = (nextState) => {
    let id = nextState.params.id;
    store.dispatch(requestOnePokemon(id));
  };
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={PokemonIndexContainer} onEnter={requestOnEnter}>
          <Route path="pokemon/:id" component={PokemonDetailContainer} onEnter={requestOnePokemonOnEnter}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
