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

    this.handleChange = this.handleChange.bind(this);
    this.buttonChange = this.buttonChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  buttonChange() {
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
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="form-input-title" data-testid="title-input-label">
            Título
            <input
              type="text"
              id="form-input-title"
              name="title"
              value={title}
              data-testid="title-input"
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="form-input-subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              id="form-input-subtitle"
              name="subtitle"
              value={subtitle}
              data-testid="subtitle-input"
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="form-input-image" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              id="form-input-image"
              name="imagePath"
              value={imagePath}
              data-testid="image-input"
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="form-input-storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              id="form-input-storyline"
              name="storyline"
              value={storyline}
              data-testid="storyline-input"
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="form-input-rating" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              id="form-input-rating"
              name="rating"
              value={rating}
              data-testid="rating-input"
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="form-select-genre" data-testid="genre-input-label">
            Gênero
            <select
              id="form-select-genre"
              name="genre"
              value={genre}
              data-testid="genre-input"
              onChange={this.handleChange}
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>

          <button
            type="button"
            data-testid="send-button"
            onClick={this.buttonChange}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
