import { connect } from 'react-redux';
import NewPokemonForm from './new_pokemon_form';
import { createNewPokemon } from '../../actions/pokemon_actions';


const mapDispatchToProps = dispatch => ({
  createPokemon: data => dispatch(createNewPokemon(data))
});

export default connect(
  null,
  mapDispatchToProps
)(NewPokemonForm);
