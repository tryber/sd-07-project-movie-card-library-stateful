import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleResetState = this.handleResetState.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  handleResetState() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    });
  }


  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="label-title">
            Título
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              data-testid="title-input"
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="label-subtitle">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={this.state.subtitle}
              onChange={this.handleChange}
              data-testid="subtitle-input"
            />
          </label>
          <label data-testid="image-input-label" htmlFor="imagePath">
            Imagem
            <input
              type="text"
              name="imagePath"
              value={this.state.imagePath}
              onChange={this.handleChange}
              data-testid="image-input"
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline">
            Sinopse
            <textarea
              name="storyline"
              value={this.state.storyline}
              onChange={this.handleChange}
              data-testid="storyline-input"
            />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating">
            Avaliação
            <input
              type="number"
              name="rating"
              value={this.state.rating}
              onChange={this.handleChange}
              data-testid="rating-input"
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero
            <select
              name="genre"
              value={this.state.genre}
              onChange={this.handleChange}
              data-testid="genre-input"
            >
              <option value="action" data-testid="genre-option">
                Ação
              </option>
              <option value="comedy" data-testid="genre-option">
                Comédia
              </option>
              <option
                value="thriller"
                data-testid="genre-option"
              >
                Suspense
              </option>
            </select>
          </label>
        </form>
        <button
          type="button"
          data-testid="send-button"
          onClick={this.handleResetState}
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func }.isRequired;

export default AddMovie;
