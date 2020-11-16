import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.state = this.initialState;

    this.changeHandler = this.changeHandler.bind(this);
    this.submitNewMovie = this.submitNewMovie.bind(this);
  }

  changeHandler({ target: { name, value } }) {
    this.setState(() => {
      if (name === 'rating') {
        return { [name]: parseFloat(value) };
      }
      return { [name]: value };
    });
  }

  submitNewMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.initialState);
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
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="title-input"
            data-testid="title-input"
            value={title}
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle-input"
            data-testid="subtitle-input"
            value={subtitle}
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="image-input"
            data-testid="image-input"
            value={imagePath}
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="storyline-input"
            data-testid="storyline-input"
            value={storyline}
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating-input"
            data-testid="rating-input"
            value={rating}
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre-input"
            data-testid="genre-input"
            value={genre}
            onChange={this.changeHandler}
          >
            <option data-testid="genre-option" value="action">
              Ação
            </option>
            <option data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option data-testid="genre-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={this.submitNewMovie}
        >
        Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
