// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.changeInput = this.changeInput.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeInput(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }))
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input">Título</label>
          <input
            data-testid="title-input"
            id="title-input"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.changeInput}>
          </input>

          <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo</label>
          <input
            data-testid="subtitle-input"
            id="subtitle-input"
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.changeInput}>
          </input>

          <label data-testid="image-input-label" htmlFor="image-input">Imagem</label>
          <input
            data-testid="image-input"
            id="image-input"
            type="text"
            name="imagePath"
            value={this.state.imagePath}
            onChange={this.changeInput}>
          </input>

          <label data-testid="storyline-input-label" htmlFor="storyline-input">Sinopse</label>
          <textarea
            data-testid="storyline-input"
            id="storyline-input"
            name="storyline"
            value={this.state.storyline}
            onChange={this.changeInput}
            rows="4" cols="50">
          </textarea>

          <label data-testid="rating-input-label" htmlFor="rating-input">Avaliação</label>
          <input
            data-testid="rating-input"
            id="rating-input"
            type="number"
            name="rating"
            value={this.state.rating}
            onChange={this.changeInput}>
          </input>

          <label data-testid="genre-input-label" htmlFor="genre-input">Gênero</label>
          <select
            data-testid="genre-input"
            id="genre-input"
            type="text"
            name="genre"
            value={this.state.genre}
            onChange={this.changeInput}>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>

          <button
            data-testid="send-button"
            id="send-button"
            type="button"
            onClick={this.handleClick}>Adicionar filme</button>

        </form>
      </div>
    );
  }
}

export default AddMovie;
