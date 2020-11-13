// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.changeStateValue = this.changeStateValue.bind(this);
    this.addMovieForm = this.addMovieForm.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeStateValue({ target }) {
    const { name, value } = target;

    if (name === 'rating') {
      this.setState({ [name]: Number(value) });
    } else {
      this.setState({ [name]: value });
    }
  }

  addMovieForm() {
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
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">Título</label>
        <input
          id="title"
          name="title"
          onChange={this.changeStateValue}
          data-testid="title-input"
          value={this.state.title}
        />
        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          id="subtitle"
          name="subtitle"
          onChange={this.changeStateValue}
          data-testid="subtitle-input"
          value={this.state.subtitle}
        />
        <label htmlFor="imagePath" data-testid="image-input-label">Imagem</label>
        <input
          id="imagePath"
          name="imagePath"
          data-testid="image-input"
          onChange={this.changeStateValue}
          value={this.state.imagePath}
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
        <textarea
          id="storyline"
          data-testid="storyline-input"
          name="storyline"
          onChange={this.changeStateValue}
          value={this.state.storyline}
        />
        <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
        <input
          id="rating"
          data-testid="rating-input"
          onChange={this.changeStateValue}
          name="rating"
          type="number"
          value={this.state.rating}
        />
        <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
        <select
          id="genre"
          name="genre"
          data-testid="genre-input"
          value={this.state.genre}
          onChange={this.changeStateValue}
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
        <button onClick={this.addMovieForm} data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
