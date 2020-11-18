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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
                Título
          </label>
          <input
            value={title}
            data-testid="title-input"
            id="title-input"
            onChange={this.handleChangeTitle}
            type="text"
          />
          <label
            htmlFor="subtitle-input"
            data-testid="subtitle-input-label"
          >
          Subtítulo
          </label>
          <input
            id="subtitle-input"
            value={subtitle}
            data-testid="subtitle-input"
            type="text"
            onChange={this.handleChangeSubtitle}
          />
          <label
            htmlFor="image-input"
            data-testid="image-input-label"
          >
          Imagem
          </label>
          <input
            id="image-input"
            value={imagePath}
            data-testid="image-input"
            type="text"
            onChange={this.handleChangeImagePath}
          />
          <label
            htmlFor="storyline-input"
            data-testid="storyline-input-label"
          >
          Sinopse
          </label>
          <textarea
            id="storyline-input"
            value={storyline}
            data-testid="storyline-input"
            onChange={this.handleChangeStoryline}
          />
          <label
            htmlFor="rating-input"
            data-testid="rating-input-label"
          >
          Avaliação
          </label>
          <input
            id="rating-input"
            value={rating}
            data-testid="rating-input"
            type="number"
            onChange={this.handleChangeRating}
          />
          <label
            htmlFor="genre-input"
            data-testid="genre-input-label"
          >
            Gênero
          </label>
          <select
            id="genre-input"
            data-testid="genre-input"
            value={genre}
            onChange={this.handleChangeSelected}
          >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
          <button
            type="button"
            data-testid="send-button"
            onClick={() => this.onClick(this.resetState)}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}
