import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.inputTitle = this.inputTitle.bind(this);
    this.inputSubtitle = this.inputSubtitle.bind(this);
    this.inputImagePath = this.inputImagePath.bind(this);
    this.inputSinopse = this.inputSinopse.bind(this);
    this.inputRating = this.inputRating.bind(this);
    this.inputGenre = this.inputGenre.bind(this);
    this.inputButton = this.inputButton.bind(this);
    this.eventHandleChange = this.eventHandleChange.bind(this);
    this.submitEvent = this.submitEvent.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      bookmarked: false,
    };
  }

  eventHandleChange({ target: { name, value } }) {
    if (name === 'rating') {
      this.setState({ [name]: parseFloat(value) });
    } else {
      this.setState({ [name]: value });
    }
  }

  inputTitle() {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          name="title"
          value={this.state.title}
          data-testid="title-input"
          onChange={this.eventHandleChange}
        />
      </label>
    );
  }

  inputSubtitle() {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={this.state.subtitle}
          data-testid="subtitle-input"
          onChange={this.eventHandleChange}
        />
      </label>
    );
  }

  inputImagePath() {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={this.state.imagePath}
          data-testid="image-input"
          onChange={this.eventHandleChange}
        />
      </label>
    );
  }

  inputSinopse() {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          name="storyline"
          value={this.state.storyline}
          data-testid="storyline-input"
          onChange={this.eventHandleChange}
        />
      </label>
    );
  }

  inputRating() {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          name="rating"
          min="0"
          max="5"
          step="0.1"
          value={this.state.rating}
          data-testid="rating-input"
          onChange={this.eventHandleChange}
        />
      </label>
    );
  }

  inputGenre() {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          name="genre"
          value={this.state.genre}
          onChange={this.eventHandleChange}
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  inputButton() {
    return (
      <button
        data-testid="send-button"
        onClick={this.submitEvent}
      >
        Adicionar filme
      </button>
    );
  }

  submitEvent(event) {
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
        {this.inputTitle()}
        {this.inputSubtitle()}
        {this.inputImagePath()}
        {this.inputSinopse()}
        {this.inputRating()}
        {this.inputGenre()}
        {this.inputButton()}
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func };
AddMovie.defaultProps = { onClick: () => {} };
