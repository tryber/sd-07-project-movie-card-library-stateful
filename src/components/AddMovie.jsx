import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.changeState = this.changeState.bind(this);
    this.resetForm = this.resetForm.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeState({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  resetForm() {
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
        <label htmlFor="title" data-testid="title-input-label">
          Título
        </label>
        <input
          type="text"
          name="title"
          id="title"
          data-testid="title-input"
          value={this.state.title}
          onChange={this.changeState}
        />

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
        </label>
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          data-testid="subtitle-input"
          value={this.state.subtitle}
          onChange={this.changeState}
        />

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
        </label>
        <input
          type="text"
          name="imagePath"
          id="imagePath"
          data-testid="image-input"
          value={this.state.imagePath}
          onChange={this.changeState}
        />

        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
        </label>
        <textarea
          name="storyline"
          id="storyline"
          data-testid="storyline-input"
          value={this.state.storyline}
          onChange={this.changeState}
        />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
        </label>
        <input
          type="number"
          name="rating"
          id="rating"
          data-testid="rating-input"
          value={this.state.rating}
          onChange={this.changeState}
        />

        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
        </label>
        <select
          name="genre"
          id="genre"
          data-testid="genre-input"
          value={this.state.genre}
          onChange={this.changeState}
        >
          <option value="action" data-testid="genre-option">
            Ação
          </option>
          <option value="comedy" data-testid="genre-option">
            Comédia
          </option>
          <option value="thriller" data-testid="genre-option">
            Suspense
          </option>
        </select>

        <button data-testid="send-button" onClick={this.resetForm}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

AddMovie.defaultProps = { onClick: '' };

export default AddMovie;
