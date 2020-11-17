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
          <label htmlFor="addTitle" data-testid="subtitle-input-label">
            Subtítulo
          </label>
          <input
            type="text"
            name=""
            id="addTitle"
            data-testid="subtitle-input"
          />
          <label htmlFor="addTitle" data-testid="image-input-label">
            Imagem
          </label>
          <input type="text" name="" id="addTitle" data-testid="image-input" />
          <label htmlFor="addTitle" data-testid="storyline-input-label">
            Sinopse
          </label>
          <textarea name=""
            id="addTitle"
            data-testid="storyline-input" 
            cols="30" 
            rows="10">
            </textarea>
          <label htmlFor="addTitle" data-testid="rating-input-label">
            Avaliação
          </label>
          <input type="text" name="" id="addTitle" data-testid="rating-input" />
          <label htmlFor="addTitle" data-testid="genre-input-label">
            Gênero
          </label>
          <select name="" id="addTitle" data-testid="genre-option">
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}
