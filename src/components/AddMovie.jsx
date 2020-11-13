import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleState = this.handleState.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  saveMovie() {
    this.props.onClick(this.state);
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
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input">
            Título
          </label>
          <input
            name="title"
            type="text"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.handleState}
          />

          <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo</label>
          <input
            type="text"
            value={this.state.subtitle}
            name="subtitle"
            data-testid="subtitle-input"
            onChange={this.handleState}
          />

          <label data-testid="image-input-label" htmlFor="image-input">Imagem</label>
          <input
            type="text"
            data-testid="image-input"
            value={this.state.imagePath}
            name="imagePath"
            onChange={this.handleState}
          />

          <label data-testid="storyline-input-label" htmlFor="storyline-input">Sinopse</label>
          <textarea
            value={this.state.storyline}
            data-testid="storyline-input"
            name="storyline"
            onChange={this.handleState}
          />

          <label data-testid="rating-input-label" htmlFor="rating-input">Avaliação</label>
          <input
            type="number"
            value={this.state.rating}
            data-testid="rating-input"
            onChange={this.handleState}
            name="rating"
          />

          <label data-testid="rating-input" htmlFor="rating-input">Gênero</label>
          <select
            value={this.state.genre}
            data-testid="genre-input"
            onChange={this.handleState}
            name="genre"
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

          <button data-testid="send-button" onClick={this.saveMovie}>
            Adicionar Filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
export default AddMovie;
