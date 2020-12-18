import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      title: '',
      imagePath: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(callback) {
    callback(this.state);
    this.setState({
      title: '',
      imagePath: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input-label">
          Título
          <input
            className="movie-card-title"
            name="title"
            data-testid="title-input"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input-label">
            Subtítulo
          <input
            className="movie-card-subtitle"
            name="subtitle"
            data-testid="subtitle-input"
            type="text"
            value={this.state.subtitle}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input-label">
          Imagem
          <input
            className="movie-card-image"
            name="imagePath"
            data-testid="image-input"
            type="text"
            value={this.state.imagePath}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input-label">
          Sinopse
          <textarea
            className="movie-card-storyline"
            name="storyline"
            data-testid="storyline-input"
            type="text"
            value={this.state.storyline}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input-label">
          Avaliação
          <input
            className="movie-card-rating"
            name="rating"
            data-testid="rating-input"
            type="number"
            value={this.state.rating}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            type="text"
            value={this.state.genre}
            onChange={this.handleChange}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          type="submit"
          onClick={() => this.handleClick(onClick)}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };


export default AddMovie;
