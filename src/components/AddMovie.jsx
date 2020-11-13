import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <div className="movie-list">
        <form>
          <div>
            <label htmlFor="title-text" data-testid="title-input-label">
              Título
              <input
                name="title-text"
                data-testid="title-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="subtitle-text" data-testid="subtitle-input-label">
              Subtítulo
              <input
                name="subtitle-text"
                data-testid="subtitle-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="image-url" data-testid="image-input-label">
              Imagem
              <input
                name="image-url"
                data-testid="image-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="storyline-text" data-testid="storyline-input-label">
              Sinopse
              <textarea
                name="storyline-text"
                data-testid="storyline-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="rating-text" data-testid="rating-input-label">
              Avaliação
              <input
                name="rating-text"
                data-testid="rating-input"
                type="number"
                step="0.1"
              />
            </label>
          </div>
          <div>
            <label htmlFor="genre-select" data-testid="genre-input-label">
              Gênero
              <select
                name="genre-select"
                data-testid="genre-input"
              >
                <option value="action" data-testid="genre-option">
                    Ação
                </option>
                <option value="comedy" data-testid="genre-option">
                    Comédia
                </option>
                <option value="thriller" data-testid="genre-option">
                    Suspense
                </option>
              </select>
            </label>
          </div>
          <div>
            <button type="submit" name="sendButton" data-testid="send-button">
              Adicionar filme
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMovie;
