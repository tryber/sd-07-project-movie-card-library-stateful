import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleState = this.handleState.bind(this);
    this.filme = this.filme.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  filme() {
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
          name="title"
          type="text"
          onChange={this.handleState}
          data-testid="title-input"
          value={this.state.title}
        ></input>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          name="subtitle"
          type="text"
          onChange={this.handleState}
          data-testid="subtitle-input"
          value={this.state.subtitle}
        ></input>

        <label htmlFor="imagePath" data-testid="image-input-label">Imagem</label>
        <input
          onChange={this.handleState}
          name="imagePath"
          data-testid="image-input"
          type="text"
          value={this.state.imagePath}
        ></input>

        <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={this.state.storyline}
          onChange={this.handleState}
        ></textarea>

        <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
        <input
          onChange={this.handleState}
          name="rating"
          data-testid="rating-input"
          type="number"
          value={this.state.rating}
        ></input>

        <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
        <select
          onChange={this.handleState}
          name="genre"
          data-testid="genre-input"
          type="number"
          value={this.state.genre}
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
        <button type="button" onClick={this.filme} data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
