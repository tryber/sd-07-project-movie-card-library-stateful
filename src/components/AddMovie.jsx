import PropTypes from 'prop-types';
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.addMovie = this.addMovie.bind(this);
    this.onChangeAddTitle = this.onChangeAddTitle.bind(this);
    this.onChangeAddSubtitle = this.onChangeAddSubtitle.bind(this);
    this.onChangeAddImage = this.onChangeAddImage.bind(this);
    this.onChangeAddStoryline = this.onChangeAddStoryline.bind(this);
    this.onChangeAddRating = this.onChangeAddRating.bind(this);
    this.onChangeAddGenre = this.onChangeAddGenre.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChangeAddTitle(event) {
    this.setState({ title: event.target.value });
  }

  onChangeAddSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  onChangeAddImage(event) {
    this.setState({ imagePath: event.target.value });
  }

  onChangeAddStoryline(event) {
    this.setState({ storyline: event.target.value });
  }

  onChangeAddRating(event) {
    this.setState({ rating: event.target.value });
  }

  onChangeAddGenre(event) {
    this.setState({ genre: event.target.value });
  }

  addMovie(event) {
    event.preventDefault();
    const { onClick } = this.props;


    this.setState((previousState) => {
      onClick(previousState);
      return ({
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        bookmarked: false,
        genre: 'action',
      });
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">Título</label>
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={this.state.title}
          onChange={this.onChangeAddTitle}
        />
        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={this.state.subtitle}
          onChange={this.onChangeAddSubtitle}
        />
        <label htmlFor="image" data-testid="image-input-label">Imagem</label>
        <input
          name="image"
          type="text"
          data-testid="image-input"
          value={this.state.imagePath}
          onChange={this.onChangeAddImage}
        />
        <label htmlFor="storyLine" data-testid="storyline-input-label">
        Sinopse
          <textarea
            name="storyline"
            type="text"
            data-testid="storyline-input"
            value={this.state.storyline}
            onChange={this.onChangeAddStoryline}
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">Avaliação</label>
        <input
          name="rating-input"
          type="number"
          data-testid="rating-input"
          value={this.state.rating}
          onChange={this.onChangeAddRating}
        />
        <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
        <select
          name="genre"
          data-testid="genre-input"
          value={this.state.genre}
          onChange={this.onChangeAddGenre}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        <button
          type="submit"
          id="send-button"
          data-testid="send-button"
          onClick={this.addMovie}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}
AddMovie.propTypes = ({ onClick: PropTypes.func }).isRequired;

export default AddMovie;
