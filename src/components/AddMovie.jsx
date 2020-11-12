import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super()
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
  handleState({target}) {
    const { name, value } = target;
    this.setState({[name]: value});
  }
  saveState() {
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
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">Título</label>
          <input type="text" name="title" value={this.state.title} data-testid="title-input" onChange={this.handleState}></input>
          <label data-testid="subtitle-input-label">Subtítulo</label>
          <input type="text" value={this.state.subtitle} name="subtitle" data-testid="subtitle-input" onChange={this.handleState}></input>
          <label data-testid="image-input-label">Imagem</label>
          <input type="text" data-testid="image-input" value={this.state.imagePath} name="imagePath" onChange={this.handleState}></input>
          <label data-testid="storyline-input-label">Sinopse</label>
          <textarea value={this.state.storyline} data-testid="storyline-input" name="storyline" onChange={this.handleState}></textarea>
          <label data-testid="rating-input-label">Avaliação</label>
          <input type="number" data-testid="rating-input" value={this.state.rating} onChange={this.handleState} name="rating"></input>
          <label data-testid="genre-input-label">Gênero</label>
          <select value={this.state.genre} data-testid="genre-input" onChange={this.handleState} name="genre">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
          <button data-testid="send-button" onClick={this.saveState}>Adicionar filme</button>
        </form>
      </div>
    )
  }
}

export default AddMovie;
