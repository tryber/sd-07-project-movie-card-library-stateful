// implement AddMovie component here
import React, { Component } from 'react';

export default class AddMovie extends Component {
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
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
        </label>
        <input data-testid="title-input" id="title-input" />

        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
        </label>
        <input data-testid="subtitle-input" id="subtitle-input" />

        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
        </label>
        <input data-testid="image-input" id="image-input" />

        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
        </label>
        <input data-testid="storyline-input" id="storyline-input" />

        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
        </label>
        <input
          data-testid="rating-input"
          id="rating-input"
          value={this.state.rating}
          type="number"
        />

        <label data-testid="genre-input-label" htmlFor="selected-genre-input">
          Gênero
          <select onChange={''} id="selected-genre-input">
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
        </label>
        <input data-testid="genre-input" value={this.state.genre} />

        <button data-testid="send-button">Adicionar filme</button>
      </form>
    );
    // console.log(this.state.genre)
  }
}
