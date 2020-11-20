import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
    this.handleImagePathChange = this.handleImagePathChange.bind(this);
    this.handleStorylineChange = this.handleStorylineChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubtitleChange(event) {
    this.setState({ subtitle: event.target.value });
  }
  handleImagePathChange(event) {
    this.setState({ imagePath: event.target.value });
  }
  handleStorylineChange(event) {
    this.setState({ storyline: event.target.value });
  }
  handleRatingChange(event) {
    if (event.target.value === '') {
      this.setState({ rating: 0 });
    } else {
      this.setState({ rating: event.target.value });
    }
  }
  handleGenreChange(event) {
    this.setState({ genre: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="title" data-testid="title-input-label">
            Título
          </label>
          <input
            name="title"
            type="text"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.handleTitleChange}
          />

          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
          </label>
          <input
            name="subtitle"
            type="text"
            value={this.state.subtitle}
            data-testid="subtitle-input"
            onChange={this.handleSubtitleChange}
          />

          <label htmlFor="path" data-testid="image-input-label">
            Imagem
          </label>
          <input
            name="path"
            type="text"
            value={this.state.imagePath}
            data-testid="image-input"
            onChange={this.handleImagePathChange}
          />

          <label htmlFor="sino" data-testid="storyline-input-label">
            Sinopse
          </label>
          <textarea
            name="sino"
            data-testid="storyline-input"
            onChange={this.handleStorylineChange}
            value={this.state.storyline}
          />

          <label htmlFor="rate" data-testid="rating-input-label">
            Avaliação
          </label>
          <input
            name="rate"
            type="number"
            value={this.state.rating}
            data-testid="rating-input"
            onChange={this.handleRatingChange}
          />

          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
          </label>
          <select
            name="genre"
            value={this.state.genre}
            data-testid="genre-input"
            onChange={this.handleGenreChange}
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>

          <button
            data-testid="send-button"
            onClick={this.props.addMovieForm}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { addMovieForm: PropTypes.func };

AddMovie.defaultProps = { addMovieForm: PropTypes.func };
