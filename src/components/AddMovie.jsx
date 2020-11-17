import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.resetButton = this.resetButton.bind(this);
    this.changes = this.changes.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  resetButton() {
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

  changes({ target: { id, value } }) {
    this.setState({ [id]: value });
  }
  // Feito pelo Pablo Pessanha.

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            type="text"
            data-testid="title-input"
            id="title"
            onChange={this.changes}
            value={this.state.title}
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            id="subtitle"
            onChange={this.changes}
            value={this.state.subtitle}
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            id="imagePath"
            onChange={this.changes}
            value={this.state.imagePath}
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            type="textarea"
            data-testid="storyline-input"
            id="storyline"
            onChange={this.changes}
            value={this.state.storyline}
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            type="number"
            value={this.state.rating}
            data-testid="rating-input"
            id="rating"
            onChange={this.changes}
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            type="select"
            data-testid="genre-input"
            id="genre"
            value={this.state.genre}
            onChange={this.changes}
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
        </label>
        <div>
          <button data-testid="send-button" onClick={this.resetButton}>
            Adicionar filme
          </button>
        </div>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
