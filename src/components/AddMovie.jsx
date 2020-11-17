// implement AddMovie component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
      rating: 0.00,
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
        rating: 0.00,
        bookmarked: false,
        genre: 'action',
      });
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form className="form-addMovie" data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            value={title}
            data-testid="title-input"
            onChange={this.getHandler}
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            value={subtitle}
            data-testid="subtitle-input"
            onChange={this.getHandler}
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            value={imagePath}
            data-testid="image-input"
            onChange={this.getHandler}
          />
        </label>

        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            type="text"
            value={storyline}
            data-testid="storyline-input"
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

        <div className="button-addMovie">
          <button data-testid="send-button" onClick={this.addMovie}>
            Adicionar filme
          </button>
        </div>

      </form>
    );
  }
}

AddMovie.propTypes = ({ onClick: PropTypes.func }).isRequired;

export default AddMovie;
