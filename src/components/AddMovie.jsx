// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChanges = this.handleChanges.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChanges({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            name="title"
            data-testid="title-input"
            type="text"
            value={this.state.title}
            onChange={this.handleChanges}
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            data-testid="subtitle-input"
            type="text"
            value={this.state.subtitle}
            onChange={this.handleChanges}
          />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            data-testid="image-input"
            type="text"
            value={this.state.imagePath}
            onChange={this.handleChanges}
          />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <input
            name="storyline"
            data-testid="storyline-input"
            type="textarea"
            value={this.state.storyline}
            onChange={this.handleChanges}
          />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            data-testid="rating-input"
            type="number"
            value={this.state.rating}
            onChange={this.handleChanges}
          />
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={this.genre}
            onChange={this.handleChanges}
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">
              Ação
            </option>
            <option value="comedy" data-testid="genre-option">
              Comédia
            </option>
            <option value="thriller" data-testid="genre-option">
              Suspense
            </option>
          </select>
        </label>
        <button data-testid="send-button" onClick={() => onClick(this.state)}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
