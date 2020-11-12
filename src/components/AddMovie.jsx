// implement AddMovie component here
import React, { Component } from 'react';
import Proptypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onThisClick = this.onThisClick.bind(this);
  }

  onThisClick(onClick) {
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

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <fieldset>
            <label htmlFor="name" data-testid="title-input-label">
              Título
              <input
                id="name"
                name="title"
                value={title}
                data-testid="title-input"
                onChange={this.handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <label htmlFor="subtitle" data-testid="subtitle-input-label">
              Subtítulo
              <input
                id="subtitle"
                name="subtitle"
                value={subtitle}
                data-testid="subtitle-input"
                onChange={this.handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <label htmlFor="imagePath" data-testid="image-input-label">
              Imagem
              <input
                id="imagePath"
                name="imagePath"
                value={imagePath}
                data-testid="image-input"
                onChange={this.handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <label htmlFor="storyline" data-testid="storyline-input-label">
              Sinopse
              <textarea
                id="storyline"
                name="storyline"
                value={storyline}
                data-testid="storyline-input"
                onChange={this.handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <label htmlFor="rating" data-testid="rating-input-label">
              Avaliação
              <input
                id="rating"
                type="number"
                name="rating"
                value={rating}
                data-testid="rating-input"
                onChange={this.handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <label htmlFor="genre" data-testid="genre-input-label">
              Gênero
              <select
                id="genre"
                name="genre"
                data-testid="genre-input"
                value={genre}
                onChange={this.handleChange}
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
          </fieldset>

          <button
            data-testid="send-button"
            onClick={() => this.onThisClick(onClick)}
            type="submit"
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: Proptypes.func.isRequired };

export default AddMovie;
