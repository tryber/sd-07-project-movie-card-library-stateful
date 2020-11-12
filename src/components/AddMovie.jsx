// implement AddMovie component here
import React from 'react'

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.addMovieBtn = this.addMovieBtn.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  addMovieBtn(e) {
    e.preventDefault();
    this.props.onClick(this.state)
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    })
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título</label>
        <input data-testid="title-input" value={this.state.title}
          name="title" onChange={this.handleChange} />

        <label data-testid="subtitle-input-label">Subtítulo</label>
        <input data-testid="subtitle-input" value={this.state.subtitle}
          name="subtitle" onChange={this.handleChange} />

        <label data-testid="image-input-label">Imagem</label>
        <input data-testid="image-input" value={this.state.imagePath}
          name="imagePath" onChange={this.handleChange} />

        <label data-testid="storyline-input-label">Sinopse</label>
        <textarea data-testid="storyline-input" value={this.state.storyline}
          name="storyline" onChange={this.handleChange} />

        <label data-testid="rating-input-label">Avaliação</label>
        <input type="number" data-testid="rating-input" value={this.state.rating}
          name="rating" onChange={this.handleChange} />

        <label data-testid="genre-input-label">Gênero</label>
        <select data-testid="genre-input" value={this.state.genre} name='genre' onChange={this.handleChange}>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>

        <button data-testid="send-button" onClick={this.addMovieBtn}>Adicionar filme</button>
      </form>
    )
  }
}

export default AddMovie