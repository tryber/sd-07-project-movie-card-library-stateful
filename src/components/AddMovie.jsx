import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleState = this.handleState.bind(this);
    this.saveState = this.saveState.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  handleState({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }
  saveState() {
    this.props.onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }
  render() {
    /* const { onClick } = this.props; */
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.handleState}
          />
          <label data-testid="subtitle-input-label" htmlFor="subtitle">Subtítulo</label>
          <input
            type="text"
            value={this.state.subtitle}
            name="subtitle" data-testid="subtitle-input"
            onChange={this.handleState}
          />
          <label data-testid="image-input-label" htmlFor="imagePath">Imagem</label>
          <input
            type="text"
            data-testid="image-input"
            value={this.state.imagePath}
            name="imagePath"
            onChange={this.handleState}
          />
          <label data-testid="storyline-input-label" htmlFor="storyline">Sinopse</label>
          <textarea
            value={this.state.storyline}
            data-testid="storyline-input"
            name="storyline"
            onChange={this.handleState}
          />
          <label data-testid="rating-input-label" htmlFor="rating">Avaliação</label>
          <input
            type="number"
            data-testid="rating-input"
            value={this.state.rating}
            onChange={this.handleState}
            name="rating"
          />
          <label data-testid="genre-input-label" htmlFor="genre">Gênero</label>
          <select
            value={this.state.genre}
            data-testid="genre-input"
            onChange={this.handleState}
            name="genre"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
          <button data-testid="send-button" onClick={this.saveState}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
