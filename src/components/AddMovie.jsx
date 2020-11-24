// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  onTextChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  newMovie(event) {
    const { onClick } = this.props;
    event.preventDefault();
    this.setState((prevState) => {
      onClick(prevState);
      return {
        title: '',
        subtitle: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      };
    });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <div>
            <label htmlFor="title" data-testid="title-input-label">Título</label>
            <div>
              <input
                type="text"
                name="title"
                id="title"
                value={this.state.title}
                data-testid="title-input"
                onChange={this.onTextChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="subtitle" data-testid="subtitle-input-label">
              Subtítulo
            </label>
            <div>
              <input
                type="text"
                name="subtitle"
                id="subtitle"
                value={this.state.subtitle}
                data-testid="subtitle-input"
                onChange={this.onTextChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="imagePath" data-testid="image-input-label">Imagem</label>
            <div>
              <input
                type="text"
                name="imagePath"
                id="imagePath"
                value={this.state.imagePath}
                data-testid="image-input"
                onChange={this.onTextChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
            <div>
              <textarea
                name="storyline"
                id="storyline"
                value={this.state.storyline}
                data-testid="storyline-input"
                onChange={this.onTextChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
            <div>
              <input
                max="5"
                min="0"
                value={this.state.rating}
                type="number"
                name="rating"
                id="rating"
                data-testid="rating-input"
                onChange={this.onTextChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="selectaddMovieCardedGenre" data-testid="genre-input-label">
              Gênero
            </label>
            <div>
              <select
                name="genre"
                id="genre"
                data-testid="genre-input"
                value={this.state.genre}
                onChange={this.onTextChange}
              >
                <option value="action" data-testid="genre-option">Ação</option>
                <option value="comedy" data-testid="genre-option">Comédia</option>
                <option value="thriller" data-testid="genre-option">Suspense</option>
              </select>
            </div>
          </div>
          <div>
            <button data-testid="send-button" onClick={this.newMovie}>Adicionar filme</button>
          </div>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
