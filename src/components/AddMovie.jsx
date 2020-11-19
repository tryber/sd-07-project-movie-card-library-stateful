import React, { Component } from 'react';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.addMovieFunction = this.addMovieFunction.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addMovieFunction() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
                Título
            <input
              name="title"
              value={title}
              data-testid="title-input"
              id="title-input"
              onChange={this.handleChange}
              type="text"
            />
          </label>
          <label
            htmlFor="subtitle-input"
            data-testid="subtitle-input-label"
          >
          Subtítulo
            <input
              name="subtitle"
              id="subtitle-input"
              value={subtitle}
              data-testid="subtitle-input"
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <label
            htmlFor="image-input"
            data-testid="image-input-label"
          >
          Imagem
            <input
              name="imagePath"
              id="image-input"
              value={imagePath}
              data-testid="image-input"
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <label
            htmlFor="storyline-input"
            data-testid="storyline-input-label"
          >
          Sinopse
            <textarea
              name="storyline"
              id="storyline-input"
              value={storyline}
              data-testid="storyline-input"
              onChange={this.handleChange}
            />
          </label>
          <label
            htmlFor="rating-input"
            data-testid="rating-input-label"
          >
          Avaliação
            <input
              name="rating"
              id="rating-input"
              value={rating}
              data-testid="rating-input"
              type="number"
              onChange={this.handleChange}
            />
          </label>
          <label
            htmlFor="genre-input"
            data-testid="genre-input-label"
          >
            Gênero
            <select
              name="genre"
              id="genre-input"
              data-testid="genre-input"
              value={genre}
              onChange={this.handleChange}
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button
            type="button"
            data-testid="send-button"
            onClick={this.addMovieFunction}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
