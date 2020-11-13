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

        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            name="title-input"
            type="text"
            value={title}
            onChange={this.handleChange}
            data-testid="title-input"
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="title-input">
          Subtítulo
          <input
            name="subtitle-input"
            type="text"
            value={subtitle}
            onChange={this.handleChange}
            data-testid="subtitle-input"
          />
        </label>

        <label data-testid="image-input-label" htmlFor="image-input">
          Subtítulo
          <input
            name="image-input"
            type="text"
            value={imagePath}
            onChange={this.handleChange}
            data-testid="image-input"
          />
        </label>

        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            name="storyline-input"
            value={storyline}
            onChange={this.handleChange}
            data-testid="stpryline-input"
          />
        </label>

        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            name="rating-input"
            type="number"
            value={rating}
            onChange={this.handleChange}
            data-testid="rating-input"
          />
        </label>

        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            name="genre-input"
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
