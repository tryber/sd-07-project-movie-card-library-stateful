// implement AddMovie component here
import React from 'react';

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

    this.initialState = Object.assign(this.state);

    this.newMovieHandler = this.newMovieHandler.bind(this);
    this.newMovieSubtitleHandler = this.newMovieSubtitleHandler.bind(this);
    this.newMovieImageHandler = this.newMovieImageHandler.bind(this);
    this.newMovieStorylineHandler = this.newMovieStorylineHandler.bind(this);
    this.newMovieRatingHandler = this.newMovieRatingHandler.bind(this);
    this.newMovieGenreHandler = this.newMovieGenreHandler.bind(this);
    this.onClick = this.onClick.bind(this);
  }
// ------------------------------------------------------------------------
  newMovieHandler(event) {
    this.setState({ title: event.target.value });
  }

  newMovieSubtitleHandler(event) {
    this.setState({ subtitle: event.target.value });
  }

  newMovieImageHandler(event) {
    this.setState({ imagePath: event.target.value });
  }

  newMovieStorylineHandler(event) {
    this.setState({ storyline: event.target.value });
  }

  newMovieRatingHandler(event) {
    this.setState({ rating: event.target.value });
  }

  newMovieGenreHandler(event) {
    this.setState({ genre: event.target.value });
  }

  onClick(state) {
    // const actualState = state
    this.setState(this.initialState);
  }
// ------------------------------------------------------------------------  
  render () {
    const { onClick } = this.props;
    return (
      <form action="">
        <label htmlFor="new-movie-title" data-testid="title-input-label">Título</label>
        <input 
          type="text"
          value={this.state.title}
          data-testid="title-input"
          onChange={this.newMovieHandler}
        />

        <label htmlFor="new-movie-subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input 
          type="text"
          value={this.state.subtitle}
          data-testid="subtitle-input"
          onChange={this.newMovieSubtitleHandler}
        />

        <label htmlFor="new-movie-image" data-testid="image-input-label">Imagem</label>
        <input 
          type="text"
          value={this.state.imagePath}
          data-testid="image-input"
          onChange={this.newMovieImageHandler}
        />

        <label htmlFor="new-movie-storyline" data-testid="storyline-input-label">Sinopse</label>
        <input 
          type="text"
          data-testid="storyline-input"
          value={this.state.storyline}
          onChange={this.newMovieStorylineHandler}
        />

        <label htmlFor="new-movie-rating" data-testid="rating-input-label">Avaliação</label>
        <input 
          type="number"
          value={this.state.rating}
          data-testid="rating-input"
          onChange={this.newMovieRatingHandler}
        />

        <label htmlFor="new-movie-genre" data-testid="genre-input-label">Gênero</label>
        <select 
          name="new-movie-genre" 
          id="new-movie-genre"
          value={this.state.genre}
          data-testid="genre-input"
          onChange={this.newMovieGenreHandler}
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>

        <button data-testid="send-button" onClick={() => onClick(this.state)}>Adicionar filme</button>
      </form>
    )
  }
}

export default AddMovie;