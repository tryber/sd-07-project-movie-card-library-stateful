import React from 'react';
import PropTypes from 'prop-types';

const newMovieCard = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = newMovieCard;
  }

  handleChange({ target }) {
    const { name } = target;
    const value = name === 'rating' ? Number(target.value) : target.value;
    this.setState({ [name]: value });
  }

  putNewMovie(goback) {
    goback(this.state);
    this.setState(newMovieCard);
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <div>
          <label htmlFor="title" data-testid="title-input-label">Título</label>
          <input
            type="text" id="title" name="title" data-testid="title-input"
            value={this.state.title} onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
          <input
            id="subtitle" name="subtitle" type="text" data-testid="subtitle-input"
            value={this.state.subtitle} onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="image" data-testid="image-input-label">Imagem</label>
          <input
            htmlFor="image" type="text" id="image" data-testid="image-input"
            name="imagePath" value={this.state.imagePath} onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="abstract" data-testid="storyline-input-label">Sinopse</label>
          <textarea
            id="abstract" data-testid="storyline-input" name="storyline"
            value={this.state.storyline} onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="avaliacao" data-testid="rating-input-label">Avaliação</label>
          <input
            type="number" id="avaliacao" data-testid="rating-input" name="rating"
            value={this.state.rating} onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="select" data-testid="genre-input-label">Gênero</label>
          <select
            id="genero" data-testid="genre-input" name="genre"
            value={this.state.genre} onChange={this.handleChange}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </div>
        <div>
          <button
            type="submit" data-testid="send-button"
            onClick={(event) => {
              event.preventDefault();
              this.putNewMovie(onClick);
            }}
          >
          Adicionar filmes
          </button>
        </div>
      </form>
    );
  }
}
AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
