// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {

  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.callbackOnClickProps = this.callbackOnClickProps.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState(() => {
      if (name === 'rating') return { [name]: Number(value) };
      return { [name]: value };
    });
  }
  resetState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  callbackOnClickProps(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }
  render() {
    return (
      <div>
        <form data-testid="add-movie-form">

          <label htmlFor="input-title" data-testid="title-input-label">
            Título
            <input
              id="input-title"
              name="title" type="text"
              value={this.state.title}
              onChange={this.handleInputChange}
              data-testid="title-input"
            />
          </label>

          <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="input-subtitle"
              name="subtitle" type="text"
              value={this.state.subtitle}
              data-testid="subtitle-input"
              onChange={this.handleInputChange}
            />
          </label>

          <label htmlFor="input-image" data-testid="image-input-label">
            Imagem
            <input
              id="input-image"
              name="imagePath" type="text"
              value={this.state.imagePath}
              data-testid="image-input"
              onChange={this.handleInputChange}
            />
          </label>

          <label htmlFor="input-storyline" data-testid="storyline-input-label">
            Sinopse
          <textarea
            id="input-storyline"
            name="storyline"
            value={this.state.storyline}
            data-testid="storyline-input"
            onChange={this.handleInputChange}
          />
          </label>

          <label htmlFor="input-rating" data-testid="rating-input-label">
            Avaliação
            <input
              id="input-rating"
              name="rating" type="number"
              value={this.state.rating}
              data-testid="rating-input"
              onChange={this.handleInputChange}
            />
          </label>

          <label htmlFor="input-genre" data-testid="genre-input-label">
            Gênero
            <select
              id="input-genre"
              name="genre" type="text"
              value={this.state.genre}
              data-testid="genre-input"
              onChange={this.handleInputChange}
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>

          <button
            type="submit"
            data-testid="send-button"
            onClick={(event) => this.callbackOnClickProps(event)}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
