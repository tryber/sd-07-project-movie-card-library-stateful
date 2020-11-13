import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
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

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick([this.state]);
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

        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            name="title"
            type="text"
            value={title}
            onChange={this.handleChange}
            data-testid="title-input"
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            value={subtitle}
            onChange={this.handleChange}
            data-testid="subtitle-input"
          />
        </label>

        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            name="imagePath"
            type="text"
            value={imagePath}
            onChange={this.handleChange}
            data-testid="image-input"
          />
        </label>

        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            name="storyline"
            value={storyline}
            onChange={this.handleChange}
            data-testid="storyline-input"
          />
        </label>

        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            name="rating"
            type="number"
            value={rating}
            onChange={this.handleChange}
            data-testid="rating-input"
          />
        </label>

        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            name="genre"
            value={genre}
            onChange={this.handleChange}
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>

        <button
          type="button"
          data-testid="send-button"
          onClick={this.handleClick}
        > Adicionar filme
        </button>

      </form>
    );
  }

}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
