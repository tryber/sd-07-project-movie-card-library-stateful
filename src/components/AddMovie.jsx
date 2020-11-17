import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleState = this.handleState.bind(this);
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

  handleState({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleClick() {
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
        <label htmlFor="title" data-testid="title-input-label">Título
          <input
            type="text"
            data-testid="title-input"
            name="title"
            id="title"
            value={title}
            onChange={this.handleState}
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            name="subtitle"
            id="subtitle"
            value={subtitle}
            onChange={this.handleState}
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">Imagem
          <input
            type="text"
            data-testid="image-input"
            name="imagePath"
            id="imagePath"
            value={imagePath}
            onChange={this.handleState}
          />
        </label>

        <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            id="storyline"
            value={storyline}
            onChange={this.handleState}
          />
        </label>

        <label htmlFor="rating" data-testid="rating-input-label">Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          id="rating"
          value={rating}
          onChange={this.handleState}
        />
        </label>

        <label htmlFor="genre" data-testid="genre-input-label">Gênero
        <select
          data-testid="genre-input"
          name="genre"
          id="genre"
          value={genre}
          onChange={this.handleState}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        </label>

        <button type="button" data-testid="send-button" onClick={this.handleClick}>Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
