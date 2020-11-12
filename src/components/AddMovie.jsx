import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addMovie(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form>
        <label htmlFor="title" data-testid="title-input-label">
          Título:
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            type="text"
            name="subtitle"
            value={subtitle}
            onChange={this.handleChange}
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem:
          <input
            type="text"
            name="imagePath"
            value={imagePath}
            onChange={this.handleChange}
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            type="text"
            name="storyline"
            value={storyline}
            onChange={this.handleChange}
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação:
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={this.handleChange}
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero:
          <select
            name="genre"
            value={genre}
            onChange={this.handleChange}
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={this.addMovie}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
