import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.changeAddMovieState = this.changeAddMovieState.bind(this);
    this.resetAddMovieState = this.resetAddMovieState.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeAddMovieState({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  resetAddMovieState() {
    const { onClick } = this.props;
    onClick([this.state]);
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
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            value={title}
            name="title"
            onChange={this.changeAddMovieState}
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            value={subtitle}
            name="subtitle"
            onChange={this.changeAddMovieState}
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={imagePath}
            onChange={this.changeAddMovieState}
            name="imagePath"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <input
            type="text"
            data-testid="storyline-input"
            value={storyline}
            name="storyline"
            onChange={this.changeAddMovieState}
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            value={rating}
            name="rating"
            onChange={this.changeAddMovieState}
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            value={genre}
            name="genre"
            onChange={this.changeAddMovieState}
          >
            <option data-testid="genre-option" value="action">
              Ação
            </option>
            <option data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option data-testid="genre-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={this.resetAddMovieState}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
