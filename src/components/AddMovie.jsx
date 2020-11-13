import React, { Component } from 'react';
import propTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(() => {
      if (name === 'rating') return { [name]: Number(value) };
      return { [name]: value };
    });
  }

  handleSubmit(callback) {
    const reset = this.initialState;
    callback(this.state);
    this.setState(reset);
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form className="add-movie-form" data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            type="text"
            name="title"
            id="title-input"
            data-testid="title-input"
            value={title}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle-input"
            data-testid="subtitle-input"
            value={subtitle}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="image-input"
            data-testid="image-input"
            value={imagePath}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            name="storyline"
            id="storyline-input"
            data-testid="storyline-input"
            value={storyline}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating-input"
            data-testid="rating-input"
            value={rating}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            id="genre-input"
            value={genre}
            onChange={this.handleChange}
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
          type="submit"
          data-testid="send-button"
          onClick={(event) => {
            this.handleSubmit(onClick);
            event.preventDefault();
          }}
        >
        Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: propTypes.func.isRequired };
