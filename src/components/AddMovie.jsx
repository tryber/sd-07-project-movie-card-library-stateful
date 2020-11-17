import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      genre: 'action',
      rating: 0,
      imageInput: '',
    };
    this.handlerChanges = this.handlerChanges.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerChanges({ target }) {
    const { checked, name, type, value } = target;
    const getValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: getValue });
  }

  // Função baseada na solução de Vanessa Bidinotto:
  handlerClick() {
    // Capturo o estado atual na propriedade onClick:
    this.props.onClick(this.state);
    this.setState({ // Defino um novo estado
      title: '',
      subtitle: '',
      storyline: '',
      genre: 'action',
      rating: 0,
      imageInput: '',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <fieldset>
          <label
            htmlFor="title-input"
            data-testid="title-input-label"
          >Título
          </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.handlerChanges}
          />
        </fieldset>

        <fieldset>
          <label
            htmlFor="subtitle-input"
            data-testid="subtitle-input-label"
          >Subtítulo</label>
          <input
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            data-testid="subtitle-input"
            onChange={this.handlerChanges}
          />
        </fieldset>

        <fieldset>
          <label
            htmlFor="image-input"
            data-testid="image-input-label"
          >Imagem</label>
          <input
            type="text"
            name="image-path"
            value={this.state.imagePath}
            data-testid="image-input"
            onChange={this.handlerChanges}
          />
        </fieldset>

        <fieldset>
          <label
            htmlFor="storyline-input"
            data-testid="storyline-input-label"
          >Sinopse</label>
          <textarea
            type="text"
            name="storyline"
            value={this.state.storyline}
            data-testid="storyline-input"
            onChange={this.handlerChanges}
          />
        </fieldset>

        <fieldset>
          <label
            htmlFor="rating-input"
            data-testid="rating-input-label"
          >Avaliação</label>
          <input
            name="rating"
            type="number"
            value={this.state.rating}
            data-testid="rating-input"
            onChange={this.handlerChanges}
          />
        </fieldset>

        <fieldset>
          <label
            htmlFor="genre-input"
            data-testid="genre-input-label"
          >Gênero</label>
          <select
            name="genre"
            value={this.state.genre}
            data-testid="genre-input"
            onChange={this.handlerChanges}
          >
            <option
              value="action"
              data-testid="genre-option"
            >Ação</option>
            <option
              value="comedy"
              data-testid="genre-option"
            >Comédia</option>
            <option
              value="thriller"
              data-testid="genre-option"
            >Suspense</option>
          </select>
        </fieldset>

        <button
          data-testid="send-button"
          onClick={this.handlerClick}
        >Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
