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

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  handleClick(event) {
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
  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-title" data-testid="title-input-label">
          Título
          <input
            name="title"
            id="input-title"
            type="text"
            data-testid="title-input"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            id="input-subtitle"
            type="text"
            data-testid="subtitle-input"
            value={this.state.subtitle}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="input-image" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            id="input-image"
            type="text"
            data-testid="image-input"
            value={this.state.imagePath}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="input-storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="input-storyline"
            data-testid="storyline-input"
            value={this.state.storyline}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="input-rating" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            id="input-rating"
            data-testid="rating-input"
            value={this.state.rating}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre-input"
            value={this.state.genre}
            onChange={this.handleChange}
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          onClick={this.handleClick}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
