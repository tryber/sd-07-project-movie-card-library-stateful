import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.getHandler = this.getHandler.bind(this);
    this.addMovie = this.addMovie.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      bookmarked: false,
      genre: 'action',
    };
  }
  getHandler({ target }) {
    const { name, value } = target;
    this.setState(() => {
      if (name === 'rating') return ({ [name]: Number(value) });
      return ({ [name]: value });
    });
  }

  async addMovie(event) {
    event.preventDefault();
    const { onClick } = this.props;

    this.setState((previousState) => {
      onClick(previousState);
      return ({
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        bookmarked: false,
        genre: 'action',
      });
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form className="form-add-movie" data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={title}
          onChange={this.getHandler}
        />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            value={subtitle}
            onChange={this.getHandler}
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            value={imagePath}
            onChange={this.getHandler}
          />
        </label>

        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <input
            type="text"
            name="storyline"
            data-testid="storyline-input"
            value={storyline}
            onChange={this.getHandler}
          />
        </label>

        <label htmlFor="rating" data-testid="rating-input-label" >
          Avaliação
          <input
            step="0.1"
            max="10.0"
            min="0.00"
            name="rating"
            type="number"
            value={rating}
            data-testid="rating-input"
            onChange={this.getHandler}
          />
        </label>

        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select name="genre" value={genre} data-testid="genre-input" onChange={this.getHandler}>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>

        <button data-testid="send-button" onClick={this.addMovie}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
