import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    // const { onClick } = this.props;
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form>
        <label
          htmlFor="titulo"
          data-testid="title-input-label"
          onChange={this.onChange}
        >
          Título
        </label>
        <input data-testid="title-input" type="text" value={title} />
        <label htmlFor="subtitulo" data-testid="subtitle-input-label">Subtítulo</label>
        <input data-testid="subtitle-input" type="text" value={subtitle} />

        <label htmlFor="imagem" data-testid="image-input-label">Imagem</label>
        <input data-testid="image-input" type="text" value={imagePath} />

        <label htmlFor="sinopse" data-testid="storyline-input-label">Sinopse</label>
        <input data-testid="storyline-input" type="textarea" value={storyline} />

        <label htmlFor="avaliacao" data-testid="rating-input-label">Avaliação</label>
        <input data-testid="rating-input" type="number" value={rating} />

        <label htmlFor="genero" data-testid="genre-input-label">Gênero</label>
        <select data-testid="genre-input" value={genre}>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        <button data-testid="send-button">Adicionar filme</button>
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
