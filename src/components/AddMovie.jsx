import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

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
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  addMovie() {
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
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input type="text" name="title" data-testid="title-input" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input type="text" name="subtitle" data-testid="subtitle-input" value={this.state.subtitle} onChange={this.handleChange} />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input type="text" name="imagePath" data-testid="image-input" value={this.state.imagePath} onChange={this.handleChange} />
          </label>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea type="text" name="storyline" data-testid="storyline-input" value={this.state.storyline} onChange={this.handleChange} />
          </label>
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <input type="number" name="rating" data-testid="rating-input" value={this.state.rating} onChange={this.handleChange} />
          </label>
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <select name="genre" data-testid="genre-input" value={this.state.genre} onChange={this.handleChange}>
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
        </form>
        <button type="submit" data-testid="send-button" onClick={this.addMovie}>
          Adicionar filme
        </button>
      </div>
    );
  }
}

export default AddMovie;
