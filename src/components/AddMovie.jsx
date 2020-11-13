import React from 'react';

class AddMovie extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   };
  // }

  render() {
    // const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div className="movie-list">
        <form>
          <div>
            <label htmlFor="title-text" data-testid="title-input-label">
              Título
              <input
                name="title-text"
                data-testid="title-input"
                // value={title}
              />
            </label>
          </div>
          <div>
            <label htmlFor="subtitle-text" data-testid="subtitle-input-label">
              Subtítulo
              <input
                name="subtitle-text"
                data-testid="subtitle-input"
                // value={subtitle}
              />
            </label>
          </div>
          <div>
            <label htmlFor="image-url" data-testid="image-input-label">
              Imagem
              <input
                name="image-url"
                data-testid="image-input"
                // value={imagePath}
              />
            </label>
          </div>
          <div>
            <label htmlFor="storyline-text" data-testid="storyline-input-label">
              Sinopse
              <textarea
                name="storyline-text"
                data-testid="storyline-input"
                // value={storyline}
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
                // value={rating}
              />
            </label>
          </div>
          <div>
            <label htmlFor="genre-select" data-testid="genre-input-label">
              Gênero
              <select
                name="genre-select"
                data-testid="genre-input"
                // value={genre}
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
            <button
              type="submit"
              name="sendButton"
              data-testid="send-button"
            >
              Adicionar filme
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMovie;
