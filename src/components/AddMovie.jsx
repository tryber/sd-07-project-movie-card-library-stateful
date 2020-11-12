import React, { Component } from 'react';

class AddMovie extends Component {
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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onClick } = this.props;
    onClick();
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
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.handleInputChange}
          />
        </label>

        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            value={this.state.subtitle}
            data-testid="subtitle-input"
            onChange={this.handleInputChange}
          />
        </label>

        <label data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            value={this.state.imagePath}
            data-testid="image-input"
            onChange={this.handleInputChange}
          />
        </label>

        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={this.state.storyline}
            data-testid="storyline-input"
            onChange={this.handleInputChange}></textarea>
        </label>

        <label data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            value={this.state.rating}
            data-testid="rating-input"
            onChange={this.handleInputChange}
          />
        </label>

        <label data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={this.state.genre}
            data-testid="genre-input"
            onChange={this.handleInputChange}>
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

        <button data-testid="send-button" onClick={this.handleSubmit}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
