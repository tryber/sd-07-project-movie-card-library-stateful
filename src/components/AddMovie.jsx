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
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onClick(this.state);
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
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            id="title"
            type="text"
            name="title"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            id="subtitle"
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            data-testid="subtitle-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            id="imagePath"
            type="text"
            name="imagePath"
            value={this.state.imagePath}
            data-testid="image-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyLine">
          Sinopse
          <textarea
            id="storyLine"
            name="storyline"
            value={this.state.storyline}
            data-testid="storyline-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            id="rating"
            type="number"
            name="rating"
            value={this.state.rating}
            data-testid="rating-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            id="genre"
            name="genre"
            value={this.state.genre}
            data-testid="genre-input"
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
        <button
          onClick={this.handleClick}
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
