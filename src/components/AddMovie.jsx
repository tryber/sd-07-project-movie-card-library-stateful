// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.buttonAddMovie = this.buttonAddMovie.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  // Explicação do vídeo do conteúdo do dia 12.2

  changeHandler({ target }) {
    const { name } = target;
    const value = target.type === 'option' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  buttonAddMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
            value={title}
            type="text"
            id="title-input"
            data-testid="title-input"
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            value={subtitle}
            type="text"
            id="subtitle-input"
            data-testid="subtitle-input"
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            value={imagePath}
            type="text"
            id="image-input"
            data-testid="image-input"
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={storyline}
            type="text"
            id="storyline-input"
            data-testid="storyline-input"
            onChange={this.changeHandler}
            cols="30"
            rows="10"
          >
            storyline
          </textarea>
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
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
            onChange={this.changeHandler}
            value={genre}
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
          id="send-button"
          type="button"
          onClick={this.buttonAddMovie}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
