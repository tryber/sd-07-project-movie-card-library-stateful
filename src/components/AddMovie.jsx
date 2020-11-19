//  feito com auxilio de Mauro junqueira T07
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.computedInputsAddMovie = this.computedInputsAddMovie.bind(this);
    this.computedMovie = this.computedMovie.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      bookmarked: false,
    };
  }
  cleanState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      bookmarked: false,
    });
  }

  computedInputsAddMovie({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  computedMovie(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.cleanState();
  }

  subtitle() {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={this.state.subtitle}
          onChange={this.computedInputsAddMovie}
        />
      </label>
    );
  }
  title() {
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={this.state.title}
          onChange={this.computedInputsAddMovie}
        />
      </label>
    );
  }
  image() {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          value={this.state.imagePath}
          onChange={this.computedInputsAddMovie}
        />
      </label>
    );
  }

  storyline() {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={this.state.storyline}
          onChange={this.computedInputsAddMovie}
        />
      </label>
    );
  }

  rating() {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          step="0.1"
          data-testid="rating-input"
          value={this.state.rating}
          onChange={this.computedInputsAddMovie}
        />
      </label>
    );
  }

  genre() {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={this.state.genre}
          onChange={this.computedInputsAddMovie}
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
    );
  }

  button() {
    return (
      <button
        type="submit"
        name="sendButton"
        data-testid="send-button"
        onClick={this.computedMovie}
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          {this.title()}
          {this.subtitle()}
          {this.image()}
          {this.storyline()}
          {this.rating()}
          {this.genre()}
          {this.button()}
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
