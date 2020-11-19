import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubTitleChange = this.handleSubTitleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleStoryChange = this.handleStoryChange.bind(this);
    this.HandleRatingChange = this.HandleRatingChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.onClicAddMovie = this.onClicAddMovie.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '',
      genre: 0,
    };
  }

  onClicAddMovie(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }
  resetState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubTitleChange(event) {
    this.setState({ subtitle: event.target.value });
  }
  handleImageChange(event) {
    this.setState({ imagePath: event.target.value });
  }
  handleStoryChange(event) {
    this.setState({ storyline: event.target.value });
  }
  HandleRatingChange(event) {
    this.setState({ rating: event.target.value });
  }
  handleGenreChange(event) {
    this.setState({ genre: event.target.value });
  }

  render() {
    return (
      <div className="myForm">
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="addMovieInput">
            Título
            <input
              type="text"
              name="addMovieInput"
              data-testid="title-input"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="addSubTitulo">
           Subtítulo
            <input
              data-testid="subtitle-input"
              type="text" value={this.state.subtitle}
              onChange={this.handleSubTitleChange}
              name="addSubTitulo"
            />
          </label>
          <label data-testid="image-input-label" htmlFor="addMovieImagem">
           Imagem
            <input
              data-testid="image-input"
              name="addMovieImagem"
              value={this.state.imagePath}
              onChange={this.handleImageChange}
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="addMovieTextarea">
          Sinopse
            <textarea
              data-testid="storyline-input"
              value={this.state.storyline}
              onChange={this.handleStoryChange}
              name="addMovieTextarea"
            />
          </label>
          <label data-testid="rating-input-label" htmlFor="addMovieRating">
          Avaliação
            <input
              data-testid="rating-input"
              name="addMovieRating"
              value={this.state.rating}
              onChange={this.HandleRatingChange}
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="addMovieSelect">
          Gênero
            <select
              data-testid="genre-input"
              name="addMovieSelect"
              value={this.state.genre}
              onChange={this.handleGenreChange}
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" selected value="thriller">Suspense</option>
            </select>
          </label>
          <label htmlFor="addMovieButton">
            <button
              data-testid="send-button"
              onClick={(event) => this.onClicAddMovie(event)}
              name="addMovieButton"
            >
                Adicionar filme
              </button>
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
