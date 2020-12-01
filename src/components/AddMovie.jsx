import React, { Component } from 'react';
// import PropTypes from 'prop-types';

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
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">Título</label>
          <input
            value={title}
            id="title"
            name="title"
            data-testid="title-input"
            onChange={this.handleChange}
          />
          <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
          <input
            value={subtitle}
            id="subtitle"
            name="subtitle"
            data-testid="subtitle-input"
            onChange={this.handleChange}
          />
          <label htmlFor="imagePath" data-testid="image-input-label">Imagem</label>
          <input
            value={imagePath}
            id="imagePath"
            name="imagePath"
            data-testid="image-input"
            onChange={this.handleChange}
          />
          <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
          <input
            value={storyline}
            id="storyline"
            name="storyline"
            data-testid="storyline-input"
            onChange={this.handleChange}
          />
          <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
          <input
            type="number"
            value={rating}
            id="rating"
            name="rating"
            data-testid="rating-input"
            onChange={this.handleChange}
          />
          <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
          <select
            name="genre"
            id="genre"
            onChange={this.handleChange}
            value={genre}
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

export default AddMovie;
