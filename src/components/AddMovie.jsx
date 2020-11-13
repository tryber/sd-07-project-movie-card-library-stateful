// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleInputChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form" onSubmit={onClick}>

        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            id="title-input"
            data-testid="title-input"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            id="subtitle-input"
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.handleInputChange}
          />
        </label>

        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            id="image-input"
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={this.state.imagePath}
            onChange={this.handleInputChange}
          />
        </label>

        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            id="storyline-input"
            data-testid="storyline-input"
            name="storyline"
            value={this.state.storyline}
            onChange={this.handleInputChange}
          />
        </label>

        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            id="rating-input"
            data-testid="rating-input"
            type="number"
            name="rating"
            value={this.state.rating}
            onChange={this.handleInputChange}
          />
        </label>

        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            id="genre-input"
            name="genre"
            data-testid="genre-input"
            onChange={this.handleInputChange}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>

        <button type="submit" data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
