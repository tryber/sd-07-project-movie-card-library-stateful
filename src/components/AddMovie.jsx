import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class AddMovie extends Component {
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

    this.updatePropsState = this.updatePropsState.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  updatePropsState(event) {
    const { name, value } = event.target;
    this.setState(
      { [name]: value },
    );
  }

  clearState() {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            data-testid="title-input"
            type="text"
            onChange={this.updatePropsState}
            value={title}
          />
          </label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            type="text" value={subtitle}
            onChange={this.updatePropsState}
          />
          </label>
          <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            name="imagePath" type="text"
            value={imagePath}
            onChange={this.updatePropsState}
          />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            type="text"
            value={storyline}
            onChange={this.updatePropsState}
          />
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            name="rating"
            type="number"
            value={rating}
            onChange={this.updatePropsState}
          />
          </label>
          <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={genre}
            onChange={this.updatePropsState}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          </label>
          <button
            data-testid="send-button"
            type="submit"
            onClick={this.clearState}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
