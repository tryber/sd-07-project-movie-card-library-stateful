import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

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
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  handleClick() {
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
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label
          htmlFor="titulo"
          data-testid="title-input-label"
        >
          Título
        </label>
        <input
          name="title"
          data-testid="title-input"
          type="text"
          value={title}
          onChange={this.handleChange}
        />

        <label
          htmlFor="subtitulo"
          data-testid="subtitle-input-label"
        >
            Subtítulo
        </label>
        <input
          name="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={subtitle}
          onChange={this.handleChange}
        />

        <label htmlFor="imagem" data-testid="image-input-label">Imagem</label>
        <input
          name="imagePath"
          data-testid="image-input"
          type="text"
          value={imagePath}
          onChange={this.handleChange}
        />

        <label htmlFor="sinopse" data-testid="storyline-input-label">Sinopse</label>
        <input
          name="storyline"
          data-testid="storyline-input"
          type="textarea"
          value={storyline}
          onChange={this.handleChange}
        />

        <label
          htmlFor="avaliacao"
          data-testid="rating-input-label"
        >
            Avaliação
        </label>
        <input
          name="rating"
          data-testid="rating-input"
          type="number"
          value={rating}
          onChange={this.handleChange}
        />

        <label htmlFor="genero" data-testid="genre-input-label">Gênero</label>
        <select name="genre" data-testid="genre-input" value={genre} onChange={this.handleChange}>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>

        <button
          type="button"
          data-testid="send-button"
          onClick={this.handleClick}
        >
            Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
}.isRequired;

export default AddMovie;
