import React from 'react';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
      rating: event.target.value,
      genre: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          data-testid="title-input"
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
          type="text"
          value={this.state.subtitle}
          onChange={this.handleChange}
          data-testid="subtitle-input"
          />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input
          type="text"
          value={this.state.imagePath}
          onChange={this.handleChange}
          data-testid="image-input"
          />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
          type="text"
          value={this.state.storyline}
          onChange={this.handleChange}
          data-testid="storyline-input"
          />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input
          type="number"
          value={this.state.rating}
          onChange={this.handleChange}
          data-testid="rating-input"
          />
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select value={this.state.genre}
          onChange={this.handleChange}
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
      </form>
    );
  }
}

export default AddMovie;
