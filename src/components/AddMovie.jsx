import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.updateStateAddMovie = this.updateStateAddMovie.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
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

  updateStateAddMovie({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            name="title"
            id="title"
            type="text"
            onChange={this.updateStateAddMovie}
            data-testid="title-input"
            value={title}
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            name="subtitle"
            id="subtitle"
            type="text"
            onChange={this.updateStateAddMovie}
            data-testid="subtitle-input"
            value={subtitle}
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            name="imagePath"
            id="imagePath"
            type="text"
            onChange={this.updateStateAddMovie}
            data-testid="image-input"
            value={imagePath}
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            name="storyline"
            id="storyline"
            type="text"
            onChange={this.updateStateAddMovie}
            data-testid="storyline-input"
            value={storyline}
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            name="rating"
            id="rating"
            type="number"
            onChange={this.updateStateAddMovie}
            data-testid="rating-input"
            value={rating}
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            name="genre"
            id="genre"
            onChange={this.updateStateAddMovie}
            data-testid="genre-input"
            value={genre}
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
          onClick={this.resetState}
          type="button"
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
