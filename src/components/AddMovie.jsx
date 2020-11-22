import PropTypes from 'prop-types';
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
    this.sendMovie = this.sendMovie.bind(this);
  }

  sendMovie(event) {
    event.preventDefault();
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

  handleInputChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">

          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              id="title"
              type="text"
              data-testid="title-input"
              onChange={this.handleInputChange}
              value={this.state.title}
              name="title"
            />
          </label>

          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="subtitle"
              type="text"
              data-testid="subtitle-input"
              onChange={this.handleInputChange}
              value={this.state.subtitle}
              name="subtitle"
            />
          </label>

          <label htmlFor="image" data-testid="image-input-label">
            Imagem
            <input
              id="image"
              type="text"
              data-testid="image-input"
              onChange={this.handleInputChange}
              value={this.state.imagePath}
              name="imagePath"
            />
          </label>

          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              id="storyline"
              value={this.state.storyline}
              onChange={this.handleInputChange}
              data-testid="storyline-input"
              name="storyline"
            />
          </label>

          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              id="rating"
              type="number"
              data-testid="rating-input"
              onChange={this.handleInputChange}
              value={this.state.rating}
              name="rating"
            />
          </label>

          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              id="genre"
              data-testid="genre-input"
              value={this.state.genre}
              onChange={this.handleInputChange}
              name="genre"
            >
              <option data-testid="genre-option" value="action">
                Ação
              </option>
              <option data-testid="genre-option" value="comedy">
                Comédia
              </option>
              <option data-testid="genre-option" value="thriller">
                Suspense
              </option>
            </select>
          </label>

          <button type="submit" data-testid="send-button" onClick={this.sendMovie}>
            Adicionar filme
          </button>

        </form>
      </div>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.element.isRequired };
