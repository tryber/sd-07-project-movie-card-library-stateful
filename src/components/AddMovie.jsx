import React from 'react';
import Proptypes from 'prop-types';

class AddMovie extends React.Component {
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

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({target}) {
    const {id, value} = target;
    this.setState({
      [id]: value
    });
  }

  handleClick(onClick) {
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
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
          type="text"
          id="title"
          value={this.state.title}
          onChange={this.handleChange}
          data-testid="title-input"
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
          type="text"
          id="subtitle"
          value={this.state.subtitle}
          onChange={this.handleChange}
          data-testid="subtitle-input"
          />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input
          type="text"
          id="imagePath"
          value={this.state.imagePath}
          onChange={this.handleChange}
          data-testid="image-input"
          />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
          type="text"
          id="storyline"
          value={this.state.storyline}
          onChange={this.handleChange}
          data-testid="storyline-input"
          />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input
          type="number"
          id="rating"
          value={this.state.rating}
          onChange={this.handleChange}
          data-testid="rating-input"
          />
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select value={this.state.genre}
          id="genre"
          onChange={this.handleChange}
          data-testid="genre-input"
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
        <button
          data-testid="send-button"
          onClick={() => this.handleClick(onClick)}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: Proptypes.func.isRequired
};

export default AddMovie;
