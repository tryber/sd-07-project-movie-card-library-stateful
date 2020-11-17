// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleSearchValue = this.handleSearchValue.bind(this);
  }

  handleSearchValue({ target }) {
    this.setState({ [target.id]: target.value });
  }

  render() {
    return (
      <form className="cadastrar-filme" data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título

          <input
            type="text"
            name="title"
            id="title"
            data-testid="title-input"
            value={this.state.title}
            onChange={this.handleSearchValue}
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo

          <input
            type="text"
            name="subtitle"
            id="subtitle"
            data-testid="subtitle-input"
            value={this.state.subtitle}
            onChange={this.handleSearchValue}
          />
        </label>

        <label htmlFor="image" data-testid="image-input-label">
          Imagem

          <input
            type="text"
            name="image"
            id="imagePath"
            data-testid="image-input"
            value={this.state.imagePath}
            onChange={this.handleSearchValue}
          />
        </label>

        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse

          <input
            type="textarea"
            name="sinopse"
            id="storyline"
            data-testid="storyline-input"
            value={this.state.storyline}
            onChange={this.handleSearchValue}
          />
        </label>

        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação

          <input
            type="number"
            name="rating"
            id="rating"
            data-testid="rating-input"
            value={this.state.rating}
            onChange={this.handleSearchValue}
          />
        </label>
                
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero

          <select
            id="genre"
            data-testid="genre-input"
            value={this.state.genre}
            onChange={this.handleSearchValue}
          >

            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>

          </select>
        </label>
      </form>
    );
  }
}


export default AddMovie;
