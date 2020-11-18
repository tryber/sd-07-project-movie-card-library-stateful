import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = name === 'rating' ? parseFloat(target.value) : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div className="movie-list">
        <form>
          <div>
            <label htmlFor="title" data-testid="title-input-label">
              Título
              <input
                name="title"
                data-testid="title-input"
                value={title}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="subtitle" data-testid="subtitle-input-label">
              Subtítulo
              <input
                name="subtitle"
                data-testid="subtitle-input"
                value={subtitle}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="imagePath" data-testid="image-input-label">
              Imagem
              <input
                name="imagePath"
                data-testid="image-input"
                value={imagePath}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="storyline" data-testid="storyline-input-label">
              Sinopse
              <textarea
                name="storyline"
                data-testid="storyline-input"
                value={storyline}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="rating" data-testid="rating-input-label">
              Avaliação
              <input
                name="rating"
                data-testid="rating-input"
                type="number"
                step="0.1"
                value={rating}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="genre" data-testid="genre-input-label">
              Gênero
              <select
                name="genre"
                data-testid="genre-input"
                value={genre}
                onChange={this.handleChange}
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
