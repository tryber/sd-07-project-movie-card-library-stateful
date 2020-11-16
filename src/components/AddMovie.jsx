import React from 'react';
import PropTypes from 'prop-types';


class AddMovie extends React.Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  updateState({ target }) {
    const value = target.name === 'rating' ? Number(target.value) : target.value;
    this.setState({ [target.name]: value });
  }

  addMovie(callbackFunc) {
    callbackFunc(this.state);
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
        <label
          htmlFor="title"
          data-testid="title-input-label"
        >
          Título
        </label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          data-testid="title-input"
          onChange={this.updateState}
        />

        <label
          htmlFor="subtitle"
          data-testid="subtitle-input-label"
        >
          Subtítulo
        </label>
        <input
          type="text"
          name="subtitle"
          value={this.state.subtitle}
          data-testid="subtitle-input"
          onChange={this.updateState}
        />

        <label
          htmlFor="imagePath"
          data-testid="image-input-label"
        >
          Imagem
        </label>
        <input
          type="text"
          name="imagePath"
          value={this.state.imagePath}
          data-testid="image-input"
          onChange={this.updateState}
        />

        <label
          htmlFor="storyline"
          data-testid="storyline-input-label"
        >
          Sinopse
        </label>
        <textarea
          type="text"
          name="storyline"
          value={this.state.storyline}
          data-testid="storyline-input"
          onChange={this.updateState}
        />

        <label
          htmlFor="rating"
          data-testid="rating-input-label"
        >
          Avaliação
        </label>
        <input
          type="number"
          name="rating"
          value={this.state.rating}
          data-testid="rating-input"
          onChange={this.updateState}
        />

        <label
          htmlFor="genre"
          data-testid="genre-input-label"
        >
          Gênero
        </label>
        <select
          name="genre"
          data-testid="genre-input"
          value={this.state.genre}
          onChange={this.updateState}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>

        <button
          data-testid="send-button"
          onClick={(event) => {
            event.preventDefault();
            this.addMovie(this.props.onClick);
          }}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
