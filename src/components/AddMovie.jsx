import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }
  handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
  }
  render() {
    return (
    <form data-testid="add-movie-form">
      <label data-testid="title-input-label">Título
        <input
          name='title' 
          type="text" 
          value={this.state.title} 
          data-testid="title-input"
          onChange={this.handleChange}
        />
      </label>
      <label data-testid="subtitle-input-label">Subtítulo
        <input
          name='subtitle' 
          type="text" 
          value={this.state.subtitle}
          data-testid="subtitle-input"
          onChange={this.handleChange}
        />
      </label>
      <label data-testid="image-input-label">Imagem
      <input
        name='imagePath' 
        type="text" 
        value={this.state.imagePath} 
        data-testid="image-input"
        onChange={this.handleChange}
      />
      </label>
      <label data-testid="storyline-input-label">Sinopse
        <textarea
          name='storyline' 
          value={this.state.storyline} 
          data-testid="storyline-input">
          onChange={this.handleChange}
        </textarea>
      </label>
      <label data-testid="rating-input-label">Avaliação
        <input
          name="rating" 
          type='number' 
          value={this.state.rating}
          data-testid="rating-input"
          onChange={this.handleChange}
        />
      </label>
      <label data-testid="genre-input-label">Gênero
        <select
        name='genre' 
        value={this.state.genre}
        data-testid="genre-input"
        onChange={this.handleChange}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
      <button data-testid="send-button" >Adicionar filme</button>
    </form>
    )
  }
}

export default AddMovie;