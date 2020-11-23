import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.chanceStateAddMovie = this.chanceStateAddMovie.bind(this);
    this.clearAndAddMovieState = this.clearAndAddMovieState.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  chanceStateAddMovie(event) {
    const state = event.target.name;
    const newValue = state === 'rating' ? Number(event.target.value) : event.target.value;
    this.setState({ [state]: newValue });
  }

  clearAndAddMovieState(callback) {
    callback(this.state);
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
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">

        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.chanceStateAddMovie}
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.chanceStateAddMovie}
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={this.state.imagePath}
            onChange={this.chanceStateAddMovie}
          />
        </label>

        <label htmlFor="storyLine" data-testid="storyline-input-label">
          Sinopse
        </label>
        <input
          data-testid="storyline-input"
          type="text"
          name="storyLine"
          value={this.state.storyLine}
          onChange={this.chanceStateAddMovie}
        />

        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={this.state.rating}
            onChange={this.chanceStateAddMovie}
          />
        </label>

        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input" name="genre"
            value={this.state.genre} onChange={this.chanceStateAddMovie}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>

        <button
          data-testid="send-button"
          type="button"
          onClick={() => this.clearAndAddMovieState(onClick)}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
