// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.updateState = this.updateState.bind(this);
    this.callbackButton = this.callbackButton.bind(this);
  }

  updateState({ target }) {
    const { name } = target;
    const value = target.name === 'rating' ? Number(target.value) : target.value;
    this.setState(() => ({ [name]: value }));
  }

  callbackButton() {
    const { onClick } = this.props;
    const { state } = this;
    onClick(state);
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { updateState, callbackButton } = this;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
        </label>
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={title}
          onChange={updateState}
        />

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
        </label>
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={subtitle}
          onChange={updateState}
        />

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
        </label>
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={imagePath}
          onChange={updateState}
        />

        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
        </label>
        <input
          data-testid="storyline-input"
          type="text"
          name="storyline"
          value={storyline}
          onChange={updateState}
        />

        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
        </label>
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={rating}
          onChange={updateState}
        />

        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
        </label>
        <select
          data-testid="genre-input"
          name="genre"
          value={genre}
          onChange={updateState}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>

        <button
          data-testid="send-button"
          type="button"
          onClick={callbackButton}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
