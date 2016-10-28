import React from 'react';

class NewPokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "",
      attack: "",
      defense: "",
      moves: []
    };
  }


  update(property) {
    return e => this.setState({[property]: e.target.value});
  }


  render () {
    return (
      <form>
        <label>Name<input onChange={this.update("name")} type="text" value={this.state.name}></input></label>
        <label>Image Url<input onChange={this.update("image_url")} type="text" value={this.state.image_url}></input></label>
        <label>Type
          <select onChange={this.update("poke_type")} value={this.state.poke_type}>
            <option value="fire">fire</option>
            <option value="electric">electric</option>
            <option value="normal">normal</option>
            <option value="ghost">ghost</option>
            <option value="psychic">psychic</option>
            <option value="water">water</option>
            <option value="bug">bug</option>
            <option value="dragon">dragon</option>
            <option value="grass">grass</option>
            <option value="fighting">fighting</option>
            <option value="ice">ice</option>
            <option value="flying">flying</option>
            <option value="poison">poison</option>
            <option value="ground">ground</option>
            <option value="rock">rock</option>
            <option value="steel">steel</option>
          </select>
        </label>
        <label>Attack<input onChange={this.update("attack")} type="text" value={this.state.attack}></input></label>
        <label>Defense<input onChange={this.update("defense")} type="text" value={this.state.defense}>Defense</input></label>
        <label>Moves 1<input onChange={this.update("moves")} type="text" value={this.state.defense}></input></label>
        <label>Moves 2<input onChange={this.update("moves")} type="text" value={this.state.defense}></input></label>
      </form>
    );
  }
}

export default NewPokemonForm;
