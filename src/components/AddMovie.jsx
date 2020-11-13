import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.eventChange = this.eventChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  eventChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick([this.state]);
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form className="add-movie" data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={title}
            onChange={this.eventChange}
            name="title"
            data-testid="title-input"
            className="input-text-search-bar"
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={subtitle}
            onChange={this.eventChange}
            name="subtitle"
            data-testid="subtitle-input"
            className="input-text-search-bar"
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={imagePath}
            onChange={this.eventChange}
            name="imagePath"
            data-testid="image-input"
            className="input-text-search-bar"
          />
        </label>

        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={storyline}
            onChange={this.eventChange}
            name="storyline"
            data-testid="storyline-input"
            className="input-text-search-bar"
          />
        </label>

        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            value={rating}
            onChange={this.eventChange}
            name="rating"
            data-testid="rating-input"
            className="input-text-search-bar"
          />
        </label>

        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            value={genre}
            onChange={this.eventChange}
            name="genre"
            data-testid="genre-input"
            className="select-search-bar"
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
          type="button"
          onClick={this.handleClick}
          data-testid="send-button"
          className="button-add"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
