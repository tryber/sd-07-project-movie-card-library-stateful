import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
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

  render() {
    // const { onClick } = this.props;

    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">Título</label>
          <input
            type="text"
            data-testid="title-input"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">Subtítulo</label>
          <input
            type="text"
            data-testid="subtitle-input"
            onChange={this.handleChange}
            value={this.state.subtitle}
          />
          <label htmlFor="image-input" data-testid="image-input-label">Imagem</label>
          <input
            type="text"
            data-testid="image-input"
            onChange={this.handleChange}
            value={this.state.imagePath}
          />
          <label htmlFor="storyline-input" data-testid="storyline-input-label">Sinopse</label>
          <textarea
            data-testid="storyline-input"
            onChange={this.handleChange}
            value={this.state.storyline}
          />
          <label htmlFor="rating-input" data-testid="rating-input-label">Avaliação</label>
          <input
            type="number"
            data-testid="rating-input"
            onChange={this.handleChange}
            value={this.state.rating}
          />
          <label htmlFor="genre-input" data-testid="genre-input-label">Gênero</label>
          <select
            data-testid="genre-input"
            onChange={this.handleChange}
            value={this.state.genre}
          >
            <option
              data-testid="genre-option"
              value="action"
            >
            Ação
            </option>
            <option
              data-testid="genre-option"
              value="comedy"
            >
            Comédia
            </option>
            <option
              data-testid="genre-option"
              value="thriller"
            >
            Suspense
            </option>
          </select>
        </form>
      </div>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
