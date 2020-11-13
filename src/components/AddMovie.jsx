import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.state = this.initialState;
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  onFormSubmit() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.initialState);
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'select' ? target.selectedOption : target.value;
    const { name } = target;
    this.setState({ [name]: value });
  }


  title() {
    const { title } = this.state;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          data-testid="title-input"
          type="text"
          value={title}
          onChange={this.handleInputChange}
        />
      </label>
    );
  }

  subtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={subtitle}
          onChange={this.handleInputChange}
        />
      </label>
    );
  }

  imagePath() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          data-testid="image-input"
          type="text"
          value={imagePath}
          onChange={this.handleInputChange}
        />
      </label>
    );
  }

  storyline() {
    const { storyline } = this.state;
    return (
      <label
        htmlFor="storyline"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={storyline}
          onChange={this.handleInputChange}
        />
      </label>
    );
  }

  rating() {
    const { rating } = this.state;
    return (
      <label
        htmlFor="rating"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          name="rating"
          data-testid="rating-input"
          type="number"
          value={rating}
          onChange={this.handleInputChange}
        />
      </label>
    );
  }

  genre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={genre}
          onChange={this.handleInputChange}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  button() {
    return (
      <button
        data-testid="send-button"
        type="submit"
        onClick={this.onFormSubmit}
      >
Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          {this.title()}
          {this.subtitle()}
          {this.imagePath()}
          {this.storyline()}
          {this.rating()}
          {this.genre()}
          {this.button()}
        </form>
      </div>
    );
  }
}
AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
export default AddMovie;
