import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.eventChange = this.eventChange.bind(this);

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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={title}
            onChange={this.eventChange}
            name="title"
            data-testid="title-input"
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
          />
        </label>

        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={storyline}
            onChange={this.eventChange}
            name="storyline"
            data-testid="storyline-input"
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
          />
        </label>

        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            value={genre}
            onChange={this.eventChange}
            name="genre"
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
          type="button"
          onClick={this.handleClick}
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
