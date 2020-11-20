import React, { Component } from 'react';

class AddMovie extends Component {
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
    const { onClick } = this.props;
    return (
      <div>
        <form>

          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              id="title"
              type="text"
              data-testid="title-input"
              onChange={this.state.title}
              value={this.state.title}
            />
          </label>

          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="subtitle"
              type="text"
              data-testid="subtitle-input"
              onChange={this.state.subtitle}
              value={this.state.subtitle}
            />
          </label>

          <label htmlFor="image" data-testid="image-input-label">
            Imagem
            <input
              id="image"
              type="text"
              data-testid="image-input"
              onChange={this.state.imagePath}
              value={this.state.imagePath}
            />
          </label>

          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              id="storyline"
              value={this.state.storyline}
              onChange={this.state.storyline}
              data-testid="storyline-input"
            />
          </label>

          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              id="rating"
              type="number"
              data-testid="rating-input"
              onChange={this.state.rating}
              value={this.state.rating}
            />
          </label>

          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              id="genre"
              data-testid="genre-input"
              value={this.props.genre}
              onChange={this.props.genre}
            >
              <option data-testid="genre-option" selected value="action">
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

          <button type="button" data-testid="send-button">
            Adicionar filme
          </button>

        </form>
      </div>
    );
  }
}

export default AddMovie;
