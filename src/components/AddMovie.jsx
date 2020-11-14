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

  initialState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.initialState();
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="add-movie-form" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            type="text"
            value={this.state.subtitle}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="image-input-label" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            name="imagePath"
            type="text"
            value={this.state.imagePath}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            type="text"
            value={this.state.storyline}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="rating-input-label" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            name="rating"
            type="number"
            value={this.state.rating}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="genre-input-label" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={this.state.genre}
            onChange={this.handleChange}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={this.handleClick}>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
