import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label
          htmlFor="title-input"
          data-testid="title-input-label"
        >
          Título
          <input
            id="title-input"
            name="title"
            data-testid="title-input"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <label
          htmlFor="subtitle-input"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            id="subtitle-input"
            name="subtitle"
            data-testid="subtitle-input"
            type="text"
            value={this.state.subtitle}
            onChange={this.handleChange}
          />
        </label>
        <label
          htmlFor="image-input"
          data-testid="image-input-label"
        >
          Imagem
          <input
            id="image-input"
            name="imagePath"
            data-testid="image-input"
            type="text"
            value={this.state.imagePath}
            onChange={this.handleChange}
          />
        </label>
        <label
          htmlFor="storyline-input"
          data-testid="storyline-input-label"
        >
          Sinopse
          <input
            id="storyline-input"
            name="storyline"
            data-testid="storyline-input"
            type="text"
            value={this.state.storyline}
            onChange={this.handleChange}
          />
        </label>
        <label
          htmlFor="rating-input"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            id="rating-input"
            name="rating"
            data-testid="rating-input"
            type="number"
            value={this.state.rating}
            onChange={this.handleChange}
          />
        </label>
        <label
          htmlFor="genre-input"
          data-testid="genre-input-label"
        >
          Gênero
          <select
            id="genre-input"
            htmlFor="genre-input"
            name="genre"
            data-testid="genre-input"
            value={this.state.genre}
            onChange={this.handleChange}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={this.handleClick}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
