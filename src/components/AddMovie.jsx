import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle:'',
      title:'',
      imagePath:'',
      storyline:'',
      rating:0,
      genre:'action',
    };

    this.updatePropsState = this.updatePropsState.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  updatePropsState(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  clearState() {
    this.setState({
      subtitle:'',
      title:'',
      imagePath:'',
      storyline:'',
      rating:0,
      genre:'action',
    });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            data-testid="title-input"
            type="text"
            onChange={this.updatePropsState}
          />
          </label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            data-testid="subtitle-input"
            type="text"
            onChange={this.updatePropsState}
          />
          </label>
          <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            data-testid="image-input"
            type="text"
            onChange={this.updatePropsState}
          />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            onChange={this.updatePropsState}
          />
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            data-testid="rating-input"
            type="number"
            onChange={this.updatePropsState}
            value={this.state.rating}
          />
          </label>
          <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={this.state.genre}
            onChange={this.updatePropsState}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          </label>
          <button onClick={this.clearState} data-testid="send-button">Adicionar filme</button>
        </form>
      </div>
    )
  }
}