import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState({ title: event.target.value });
    this.setState({ subtitle: event.target.value });
    this.setState({ imagePath: event.target.value });
    this.setState({ storyline: event.target.value });
    this.setState({ rating: event.target.value });
    this.setState({ genre: event.target.value });
  }
  render() {
    return (
      <form>
        <label htmlFor="title" data-testid="title-input-label">
          Título
        </label>
        <input
          id="title"
          data-testid="title-input"
          value={this.title}
          type="text"
          onChange={this.onClick}
        />
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
        </label>
        <input
          id="subtitle"
          data-testid="subtitle-input"
          value={this.subtitle}
          type="text"
          onChange={this.onClick}
        />
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
        </label>
        <input
          id="imagePath"
          data-testid="image-input"
          value={this.imagePath}
          type="text"
          onChange={this.onClick}
        />
        <label htmlFor="imagePath" data-testid="storyline-input-label">
          Sinopse
        </label>
        <input
          id="storyline"
          data-testid="storyline-input"
          value={this.storyline}
          type="textarea"
          onChange={this.onClick}
        />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
        </label>
        <input
          id="rating"
          data-testid="rating-input"
          value={this.rating}
          type="number"
          onChange={this.onClick}
        />
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
        </label>
        <select
          value={this.genre}
          data-testid="select-input"
          id="genre"
          type="text"
          onChange={this.onClick}
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
        <button onClick={this.onClick} data-testid="send-button" type="submit">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
