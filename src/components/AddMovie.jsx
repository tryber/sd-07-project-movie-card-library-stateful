import React from 'react';
import PropTypes from 'prop-types';

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
    this.handleEventAddMovie = this.handleEventAddMovie.bind(this);
    this.submitButton = this.submitButton.bind(this);
  }

  handleEventAddMovie({ target }) {
    const MovieKey = target.name;

    const MovieValue = MovieKey === 'rating' ? Number(target.value) : target.value;

    this.setState({ [MovieKey]: MovieValue });
  }

  submitButton(functionCall) {
    const originState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    functionCall(this.state);
    this.setState(originState);
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form" onSubmit={() => {}}>
        <fieldset>
          <label data-testid="title-input-label" htmlFor="title">
            Título
            <input
              id="title"
              name="title"
              value={this.state.title}
              data-testid="title-input"
              onChange={this.handleEventAddMovie}
              type="text"
            />
          </label>
        </fieldset>
        <fieldset>
          <label data-testid="subtitle-input-label" htmlFor="subtitle">
            Subtítulo
            <input
              id="subtitle"
              name="subtitle"
              value={this.state.subtitle}
              data-testid="subtitle-input"
              onChange={this.handleEventAddMovie}
            />
          </label>
        </fieldset>
        <fieldset>
          <label data-testid="image-input-label" htmlFor="image-input-label">
            Imagem
            <input
              id="image-input-label"
              name="imagePath"
              value={this.state.imagePath}
              data-testid="image-input"
              onChange={this.handleEventAddMovie}
              type="text"
            />
          </label>
        </fieldset>
        <fieldset>
          <label data-testid="storyline-input-label" htmlFor="storyline-input-label">
            Sinopse
            <textarea
              id="storyline-input-label"
              onChange={this.handleEventAddMovie}
              name="storyline"
              value={this.state.storyline}
              data-testid="storyline-input"
            />
          </label>
        </fieldset>
        <fieldset>
          <label data-testid="rating-input-label" htmlFor="rating">
            Avaliação
            <input
              id="rating"
              name="rating"
              value={this.state.rating}
              data-testid="rating-input"
              onChange={this.handleEventAddMovie}
              type="number"
            />
          </label>
        </fieldset>
        <fieldset>
          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero
            <select
              id="genre"
              name="genre"
              value={this.state.genre}
              onChange={this.handleEventAddMovie}
              data-testid="genre-input"
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
          type="submit"
          data-testid="send-button"
          onClick={(event) => {
            this.submitButton(onClick);
            event.preventDefault();
          }}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
