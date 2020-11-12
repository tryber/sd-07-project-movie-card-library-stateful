// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.sendNewMovie = this.sendNewMovie.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  sendNewMovie() {
    const { onClick } = this.props;
    onClick(this.state);
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="a">
          Título
          <input
            value={title}
            data-testid="title-input"
            onChange={this.handleChange}
            name="title"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="b">
          Subtítulo
          <input
            value={subtitle}
            data-testid="subtitle-input"
            onChange={this.handleChange}
            name="subtitle"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="c">
          Imagem
          <input
            value={imagePath}
            data-testid="image-input"
            onChange={this.handleChange}
            name="imagePath"
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="d">
          Sinopse
          <input
            value={storyline}
            data-testid="storyline-input"
            onChange={this.handleChange}
            name="storyline"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="e">
          Avaliação
          <input
            type="number"
            value={rating}
            data-testid="rating-input"
            onChange={this.handleChange}
            name="rating"
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="f">
          Gênero
          <select
            value={genre}
            data-testid="genre-input"
            onChange={this.handleChange}
            name="genre"
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
        <button
          type="button"
          data-testid="send-button"
          onClick={this.sendNewMovie}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
