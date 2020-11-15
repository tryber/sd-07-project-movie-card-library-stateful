// implement AddMovie component here

import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super()

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }

  AddTitle = ({target}) => {
    this.setState({
      title: target.value
    })
  }

  render() {
    const { onClick } = this.props;
    return(
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título</label>
        <input data-testid="title-input" onChange={ this.AddTitle } value={ this.state.value } />
      </form>
    )
  }
}

export default AddMovie;
