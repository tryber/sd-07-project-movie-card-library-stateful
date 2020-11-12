import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
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
      <form data-testid="add-movie-form" className="form">
        <label data-testid="title-input-label" htmlFor="title" className="form-block">
          Título
          <input
            id="title"
            name="title"
            type="text"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.handleInputChange}
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle" className="form-block">
          Subtítulo
          <input
            id="subtitle"
            name="subtitle"
            type="text"
            value={this.state.subtitle}
            data-testid="subtitle-input"
            onChange={this.handleInputChange}
          />
        </label>

        <label data-testid="image-input-label" htmlFor="imagePath" className="form-block">
          Imagem
          <input
            id="imagePath"
            name="imagePath"
            type="text"
            value={this.state.imagePath}
            data-testid="image-input"
            onChange={this.handleInputChange}
          />
        </label>

        <label data-testid="storyline-input-label" htmlFor="storyline" className="form-block">
          Sinopse
          <textarea
            id="storyline"
            name="storyline"
            value={this.state.storyline}
            data-testid="storyline-input"
            onChange={this.handleInputChange}
          />
        </label>

        <label data-testid="rating-input-label" htmlFor="rating" className="form-block">
          Avaliação
          <input
            id="rating"
            name="rating"
            type="number"
            value={this.state.rating}
            min={0}
            max={5}
            step={0.1}
            data-testid="rating-input"
            onChange={this.handleInputChange}
          />
        </label>

        <label data-testid="genre-input-label" htmlFor="genre" className="form-block">
          Gênero
          <select
            id="genre"
            name="genre"
            value={this.state.genre}
            data-testid="genre-input"
            onChange={this.handleInputChange}
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

        <button data-testid="send-button" onClick={this.handleSubmit} className="form-submit">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
