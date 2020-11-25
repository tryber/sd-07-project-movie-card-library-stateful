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

  changingInputsState({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  buttonOnclick() {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor data-testid="title-input-label">
          Título
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.changingInputsState}
            data-testid="title-input"
          />
        </label>
        <br />
        <label htmlFor data-testid="subtitle-input-label">
          Subtítulo
          <br />
          <input
            type="text"
            name="subtitle"
            value={subtitle}
            onChange={this.changingInputsState}
            data-testid="subtitle-input"
          />
        </label>
        <br />
        <label htmlFor data-testid="image-input-label">
          Imagem
          <br />
          <input
            type="text"
            name="imagePath"
            value={imagePath}
            onChange={this.changingInputsState}
            data-testid="image-input"
          />
        </label>
        <br />
        <label htmlFor data-testid="storyline-input-label">
          Sinopse
          <br />
          <textarea
            name="storyline"
            value={storyline}
            onChange={this.changingInputsState}
            data-testid="storyline-input"
          />
        </label>
        <br />
        <label htmlFor data-testid="rating-input-label">
          Avaliação
          <br />
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            name="rating"
            value={rating}
            onChange={this.changingInputsState}
            data-testid="rating-input"
          />
        </label>
        <br />
        <label htmlFor data-testid="genre-input-label">
          Gênero
          <br />
          <select
            name="genre"
            value={genre}
            onChange={this.changingInputsState}
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <br />
        <button
          type="button"
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