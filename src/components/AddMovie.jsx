import React from 'react';
import PropTypes from 'prop-types';

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

    this.handleStateChange = this.handleStateChange.bind(this);
    this.buttonAddMovie = this.buttonAddMovie.bind(this);
  }

  handleStateChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  buttonAddMovie() {
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
        <form form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">Título
            <input
              name="title"
              type="text"
              data-testid="title-input"
              value={this.state.title}
              onChange={this.handleStateChange}
            />
          </label>

          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">Subtítulo
            <input
              type="text"
              name="subtitle"
              data-testid="subtitle-input"
              value={this.state.subtitle}
              onChange={this.handleStateChange}
            />
          </label>

          <label htmlFor="image-input" data-testid="image-input-label">Imagem
            <input
              type="text"
              name="imagePath"
              data-testid="image-input"
              value={this.state.imagePath}
              onChange={this.handleStateChange}
            />
          </label>

          <label htmlFor="storyline-input" data-testid="storyline-input-label">Sinopse
            <textarea
              name="storyline"
              data-testid="storyline-input"
              value={this.state.storyline}
              onChange={this.handleStateChange}
            />
          </label>

          <label htmlFor="rating-input" data-testid="rating-input-label">Avaliação
            <input
              name="rating"
              type="number"
              data-testid="rating-input"
              value={this.state.rating}
              onChange={this.handleStateChange}
            />
          </label>
          <label htmlFor="genre-input" data-testid="genre-input-label">Gênero
            <select
              name="genre"
              id="genre-input"
              data-testid="genre-input"
              value={this.state.genre}
              onChange={this.handleStateChange}
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
        </form>
        <button
          data-testid="send-button"
          onClick={this.buttonAddMovie}
        >Adicionar filme
        </button>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func }.isRequired;

export default AddMovie;
