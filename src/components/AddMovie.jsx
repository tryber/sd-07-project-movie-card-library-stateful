// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.addMovieHandler = this.addMovieHandler.bind(this);
    this.addMovieButton = this.addMovieButton.bind(this);
  }
// ------------------------------------------------------------------------
  addMovieHandler(event) {
    const state = event.target.name;
    const newValue = state === 'rating' ? Number(event.target.value) : event.target.value;
    this.setState({ [state]: newValue });
  }

  addMovieButton(callback) {
    callback(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }
// ------------------------------------------------------------------------
  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="new-movie-title" data-testid="title-input-label">Título</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          data-testid="title-input"
          onChange={this.addMovieHandler}
        />

        <label htmlFor="new-movie-subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          type="text"
          name="subtitle"
          value={this.state.subtitle}
          data-testid="subtitle-input"
          onChange={this.addMovieHandler}
        />

        <label htmlFor="new-movie-image" data-testid="image-input-label">Imagem</label>
        <input
          type="text"
          name="imagePath"
          value={this.state.imagePath}
          data-testid="image-input"
          onChange={this.addMovieHandler}
        />

        <label htmlFor="new-movie-storyline" data-testid="storyline-input-label">Sinopse</label>
        <input
          type="text"
          name="storyline"
          data-testid="storyline-input"
          value={this.state.storyline}
          onChange={this.addMovieHandler}
        />

        <label htmlFor="new-movie-rating" data-testid="rating-input-label">Avaliação</label>
        <input
          type="number"
          name="rating"
          value={this.state.rating}
          data-testid="rating-input"
          onChange={this.addMovieHandler}
        />

        <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
        <select
          name="genre"
          id="genre"
          value={this.state.genre}
          data-testid="genre-input"
          onChange={this.addMovieHandler}
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>

        <button
          data-testid="send-button"
          onClick={() => this.addMovieButton(onClick)}
        >Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
