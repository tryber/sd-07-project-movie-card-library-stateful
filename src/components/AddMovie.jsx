// implement AddMovie component here
import React from 'react'

class AddMovie extends React.Component {
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

  changeStateValue = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  sendMovie = () => {
    const { onClick } = this.props
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    })
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">Título
          <input
            type="text"
            data-testid="title-input"
            value={this.state.title}
            name='title'
            onChange={this.changeStateValue}>
          </input>
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">Subtítulo
          <input
            data-testid="subtitle-input"
            value={this.state.subtitle}
            name='subtitle'
            onChange={this.changeStateValue}>
          </input>
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">Imagem
          <input
            data-testid="image-input"
            type="text"
            value={this.state.imagePath}
            name='imagePath'
            onChange={this.changeStateValue}></input>
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">Sinopse
          <textarea
            data-testid="storyline-input"
            value={this.state.storyline}
            name='storyline'
            onChange={this.changeStateValue}></textarea>
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">Avaliação
          <input
            type="number"
            data-testid="rating-input"
            value={this.state.rating}
            name='rating'
            onChange={this.changeStateValue}></input>
        </label>
        <label htmlFor="" data-testid="genre-input-label">Gênero
          <select
            data-testid="genre-input"
            name='genre'
            value={this.state.genre}
            onChange={this.changeStateValue}>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={this.sendMovie}>Adicionar filme</button>
      </form>
    )
  }
}

export default AddMovie;
