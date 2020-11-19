import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.changingInputsState = this.changingInputsState.bind(this);
    this.buttonOnclick = this.buttonOnclick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changingInputsState(event) {
    const { name, valeu } = event.target;
    this.setState({ [name]: valeu });
  }

  buttonOnclick() {
    this.changingInputsState();
  }

  render() {
    return (
      <form>
        <label htmlFor="titleText" data-testid="title-input-label">
          Título
          <input
            name="titleText"
            type="text"
            value={this.title}
            data-testid="title-input"
            onChange={this.changingInputsState}
          />
        </label>
        <label htmlFor="subtitleText" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitleText"
            type="text"
            value={this.subtitle}
            data-testid="subtitle-input"
            onChange={this.changingInputsState}
          />
        </label>
        <label htmlFor="img" data-testid="image-input-label">
          Imagem
          <input
            name="img"
            type="text"
            value={this.imagePath}
            data-testid="image-input"
            onChange={this.changingInputsState}
          />
        </label>
        <label htmlFor="storylineTxt" ddata-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storylineTxt"
            value={this.storyline}
            data-testid="storyline-input"
            onChange={this.changingInputsState}
          />
        </label>
        <label htmlFor="grade" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="grade"
            value={this.rating}
            data-testid="rating-input"
            onChange={this.changingInputsState}
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={this.genre}
            onChange={this.handleChange}
            data-testid="genre-input"
          >
            <option
              data-testid="genre-option"
              value="action"
            >
              Ação
            </option>
            <option
              data-testid="genre-option"
              value="comedy"
            >
              Comédia
            </option>
            <option
              data-testid="genre-option"
              value="thriller"
            >
              Suspense
            </option>
          </select>
        </label>
        <button
          data-testid="send-button"
          onClick={this.buttonOnclick}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
