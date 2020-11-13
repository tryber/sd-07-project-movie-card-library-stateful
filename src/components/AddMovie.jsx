// implement AddMovie component here
import React from 'react';

class Addmovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <form data-testid="add-movie-form" >
        <label htmlFor="title" data-testid="title-input-label">
          Título<br />
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.handleChange}
          />
        </label><br />
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo<br />
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            value={this.state.subtitle}
            data-testid="subtitle-input"
            onChange={this.handleChange}
          />
        </label><br />
        <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem<br />
          <input
            type="text"
            name="imagePath"
            id="imagePath"
            value={this.state.imagePath}
            data-testid="image-input"
            onChange={this.handleChange}
          />
        </label><br />
        <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse<br />
          <textarea
            type="text"
            name="storyline"
            data-testid="storyline-input"
            value={this.state.storyline}
            onChange={this.handleChange}
          />
        </label><br />
        <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação<br />
          <input
            type="number"
            name="rating"
            id="rating"
            value={this.state.rating}
            data-testid="rating-input"
            onChange={this.handleChange}
          />
        </label><br />
        <label htmlFor="genre" data-testid="genre-input-label">
        Gênero<br />
          <select
            name="genre"
            id="genre"
            value={this.state.genre}
            onChange={this.handleChange}
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option" >Ação</option>
            <option value="comedy" data-testid="genre-option" >Comédia</option>
            <option value="thriller" data-testid="genre-option" >Suspense</option>
          </select>
        </label><br />
        <button type="submit" data-testid="send-button" >Adicionar filme</button>
      </form>
    );
  }
}

export default Addmovie;
