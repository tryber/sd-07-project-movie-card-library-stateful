// precisa ter estado
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
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
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  // preventdefault() = https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault

  handleButton(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <div>
            <label htmlFor="title" data-testid="title-input-label">
              Título
              <input
                id="title"
                data-testid="title-input"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="subtitle" data-testid="subtitle-input-label">
              Subtítulo
              <input
                id="subtitle"
                data-testid="subtitle-input"
                type="text"
                name="subtitle"
                value={this.state.subtitle}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="imagem" data-testid="image-input-label">
              Imagem
              <input
                id="imagem"
                data-testid="image-input"
                type="text"
                name="imagePath"
                value={this.state.imagePath}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="storyline" data-testid="storyline-input-label">
              Sinopse
              <textarea
                id="storyline"
                data-testid="storyline-input"
                name="storyline"
                value={this.state.storyline}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="rating" data-testid="rating-input-label">
              Avaliação
              <input
                id="rating"
                data-testid="rating-input"
                type="number"
                name="rating"
                value={this.state.rating}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="genre" data-testid="genre-input-label">
              Gênero
              <select
                id="genre"
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
          </div>

          <div>
            <button
              type="submit"
              data-testid="send-button"
              onClick={this.handleButton}
            >
              Adicionar filme
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
