import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();

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
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleId" data-testid="title-input-label">
          Título
          <input
            id="titleId" data-testid="title-input" type="text" name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="subtitleId" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitleId" data-testid="subtitle-input" type="text" name="subtitle"
            value={this.state.subtitle}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="imageId" data-testid="image-input-label">
          Imagem
          <input
            id="imageId" data-testid="image-input" type="text" name="imagePath"
            value={this.state.imagePath}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="storylineId" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storylineId" data-testid="storyline-input" name="storyline"
            value={this.state.storyline}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="ratingId" data-testid="rating-input-label">
          Avaliação
          <input
            id="ratingId" data-testid="rating-input" type="number" name="rating"
            value={this.state.rating}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="genreId" data-testid="genre-input-label">
          Gênero
          <select
            id="genreId" data-testid="genre-input" name="genre"
            value={this.state.genre}
            onChange={this.handleChange}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          onClick={this.handleClick}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
