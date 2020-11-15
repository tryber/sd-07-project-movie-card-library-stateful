// implement AddMovie component here

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.changeStateValue = this.changeStateValue.bind(this);
    this.addMovieForm = this.addMovieForm.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeStateValue(target) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addMovieForm() {
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    // const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título</label>
        <input
          name="title"
          data-testid="title-input"
          onChange={this.changeStateValue}
          value={this.state.title}
        />

        <label data-testid="subtitle-input-label">Subtítulo</label>
        <input
          name="subtitle"
          data-testid="subtitle-input"
          value={this.state.subtitle}
          onChange={this.changeStateValue}
        />

        <label data-testid="image-input-label">Imagem</label>
        <input
          name="imagePath"
          data-testid="image-input"
          onChange={this.changeStateValue}
          value={this.state.imagePath}
        />

        <label data-testid="storyline-input-label">Sinopse</label>
        <textarea
          name="storyline"
          data-testid="storyline-input"
          onChange={this.changeStateValue}
          value={this.state.storyline}
        />


        <label data-testid="rating-input-label">Avaliação</label>
        <input
          name='rating'
          value={this.state.rating}
          data-testid="rating-input"
          onChange={this.changeStateValue}
          type="number"
        />

        <label data-testid="genre-input-label">Gênero</label>
        <select
          name='genre'
          value={this.state.genre}
          data-testid="genre-input"
          onChange={this.changeStateValue}
        >
          <option data-testid="genre-option" value='action'>Ação</option>
          <option data-testid="genre-option" value='comedy'>Comédia</option>
          <option data-testid="genre-option" value='thriller'>Suspense</option>
        </select>

        <button data-testid="send-button" onClick={this.addMovieForm} >Adicionar filme</button>
      </form>
    )
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
