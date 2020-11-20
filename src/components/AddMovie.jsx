import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChange(event) {
    const { name } = event.target;
    this.setState({ title: name });
  }

  render() {
    // const { onClick } = this.props;

    return (
      <form>
        <label htmlFor="titulo" data-testid="title-input-label">Título</label>
        <input data-testid="title-input" type="text" value={this.state.title} />
        <label htmlFor="subtitulo" data-testid="subtitle-input-label">Subtítulo</label>
        <input data-testid="subtitle-input" type="text" value={this.state.subtitle} />

        <label htmlFor="imagem" data-testid="image-input-label">Imagem</label>
        <input data-testid="image-input" type="text" value={this.state.imagePath} />

        <label htmlFor="sinopse" data-testid="storyline-input-label">Sinopse</label>
        <input data-testid="storyline-input" type="textarea" value={this.state.storyline} />

        <label htmlFor="avaliacao" data-testid="rating-input-label">Avaliação</label>
        <input data-testid="rating-input" type="number" value={this.state.rating} />

        <label htmlFor="genero" data-testid="genre-input-label">Gênero</label>
        <select value={this.state.genre}>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        <button data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
