// implement AddMovie component here
import React from 'react';

export default class AddMovie extends React.Component {
  constructor() {
    super();

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
      <div>
        <form action="">
          <label htmlFor="addTitle" data-testid="title-input-label">
            Título
          </label>
          <input type="text" name="" id="addTitle" data-testid="title-input" />
          <label htmlFor="addSubtitle" data-testid="subtitle-input-label">
            Subtítulo
          </label>
          <input
            type="text"
            name=""
            id="addSubtitle"
            data-testid="subtitle-input"
          />
          <label htmlFor="addImage" data-testid="image-input-label">
            Imagem
          </label>
          <input type="text" name="" id="addImage" data-testid="image-input" />
          <label htmlFor="addStoryline" data-testid="storyline-input-label">
            Sinopse
          </label>
          <textarea
            name=""
            id="addStoryline"
            data-testid="storyline-input"
            cols="30"
            rows="10"
          />
          <label htmlFor="addRating" data-testid="rating-input-label">
            Avaliação
          </label>
          <input type="number" name="" id="addRating" data-testid="rating-input" />
          <label htmlFor="addGender" data-testid="genre-input-label">
            Gênero
          </label>
          <select name="" id="addGender" data-testid="genre-option">
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button data-testid="send-button" onClick={this.handleMovie}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}
