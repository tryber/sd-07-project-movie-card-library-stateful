// implement AddMovie component here
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

    this.changeValue = this.changeValue.bind(this);
    this.createFilm = this.createFilm.bind(this);
  }

  changeValue({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  createFilm(addNewMovie) {
    addNewMovie(this.state);
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
    const { addNewMovie } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            data-testid="title-input"
            type="text"
            value={title}
            id="title"
            onChange={this.changeValue}
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            name="subtitle"
            type="text"
            value={subtitle}
            data-testid="subtitle-input"
            onChange={this.changeValue}
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            id="imagePath"
            type="text"
            value={imagePath}
            data-testid="image-input"
            onChange={this.changeValue}
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline"
            type="text"
            name="storyline"
            value={storyline}
            data-testid="storyline-input"
            onChange={this.changeValue}
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={rating}
            data-testid="rating-input"
            onChange={this.changeValue}
            id="rating"
          />
        </label>
        <label htmlFor="gender" data-testid="genre-input-label">
          Gênero
          <select
            id="gender"
            onChange={this.changeValue}
            name="genre"
            value={genre}
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={() => this.createFilm(addNewMovie)}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { addNewMovie: PropTypes.func.isRequired };

export default AddMovie;
