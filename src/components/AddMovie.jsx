import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.onClicAddMovie = this.onClicAddMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onClicAddMovie(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(() => {
      if (name === 'rating') return { [name]: Number(value) };
      return { [name]: value };
    });
  }

  resetState() {
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
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="addMovieInput">
            Título
            <input
              type="text"
              name="addMovieInput"
              data-testid="title-input"
              value={this.state.title}
              onChange={this.handleChange}
            />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="addSubTitulo">
           Subtítulo
            <input
              data-testid="subtitle-input"
              type="text" value={this.state.subtitle}
              onChange={this.handleChange}
              name="addSubTitulo"
            />
        </label>
        <label data-testid="image-input-label" htmlFor="addMovieImagem">
           Imagem
            <input
              data-testid="image-input"
              name="addMovieImagem"
              value={this.state.imagePath}
              onChange={this.handleChange}
            />
        </label>
        <label data-testid="storyline-input-label" htmlFor="addMovieTextarea">
          Sinopse
            <textarea
              data-testid="storyline-input"
              value={this.state.storyline}
              onChange={this.handleChange}
              name="addMovieTextarea"
            />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
            <input
              data-testid="rating-input"
              name="rating"
              value={this.state.rating}
              onChange={this.handleChange}
            />
        </label>
        <label data-testid="genre-input-label" htmlFor="addMovieSelect">
          Gênero
            <select
              data-testid="genre-input"
              name="addMovieSelect"
              value={this.state.genre}
              onChange={this.handleChange}
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
        </label>

        <button
          type="submit"
          data-testid="send-button"
          onClick={(event) => this.onClicAddMovie(event)}
        >
                Adicionar filme
        </button>

      </form>
    );
  }
}

AddMovie.protoTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
