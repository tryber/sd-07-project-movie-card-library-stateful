import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.onTitleChange = this.onTitleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onSubmit() {
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

  eventHandler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            id="title"
            name="title"
            data-testid="title-input"
            type="text"
            value={this.state.title}
            onChange={this.eventHandler}
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            name="subtitle"
            data-testid="subtitle-input"
            value={this.state.subtitle}
            type="text"
            onChange={this.eventHandler}
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            id="imagePath"
            name="imagePath"
            data-testid="image-input"
            value={this.state.imagePath}
            type="text"
            onChange={this.eventHandler}
          />
        </label>

        <label data-testeid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            id="storyline"
            name="storyline"
            value={this.state.storyline}
            data-testid="storyline-input"
          />
        </label>

        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            id="rating"
            type="number"
            data-testid="rating-input"
            value={this.state.rating}
            onChange={this.eventHandler}
          />
        </label>

        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            id="genre"
            name="genre"
            data-testid="genre-input"
            value={this.state.genre}
            onChange={this.eventHandler}
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
        <button type="submit" onClick={this.onSubmit}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
