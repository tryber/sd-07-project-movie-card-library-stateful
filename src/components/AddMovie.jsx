import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  chanceStateAddMovie({ target }) {
    const { name, value } = target;
    this.setState = { [name]: value };
  }

  clearAndAddMovieState() {
    const { onClick } = this.props;
    onClick([this.state]);
    this.setState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    return (
      <form>

        <label htmlFor={this.state.title} data-testid="title-input-label">
          Titulo
          <input
            data-testid="title-input"
            type="text"
            value={this.state.title}
            onChange={this.chanceStateAddMovie}
          />
        </label>

        <label htmlFor={this.state.subtitle} data-testid="subtitle-input-label">
          Subtitulo
          <input
            data-testid="subtitle-input"
            type="text"
            value={this.state.subtitle}
            onChange={this.chanceStateAddMovie}
          />
        </label>

        <label htmlFor={this.state.imagePath} data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            value={this.state.imagePath}
            onChange={this.chanceStateAddMovie}
          />
        </label>

        <label htmlFor={this.state.storyLine} data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            value={this.state.storyLine}
            onChange={this.chanceStateAddMovie}
          />
        </label>

        <label htmlFor={this.state.rating} data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            value={this.state.rating}
            onChange={this.chanceStateAddMovie}
          />
        </label>

        <label htmlFor={this.state.genre} data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            value={this.state.genre} onChange={this.chanceStateAddMovie}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>

        <button data-testid="send-button" type="button" onClick={this.clearAndAddMovieState}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
