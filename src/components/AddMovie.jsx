import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState(() => {
      if (name === 'rating') {
        return { [name]: parseFloat(value) };
      }
      return { [name]: value };
    });
  }

  render() {
    const { onClick } = this.props;
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form>
        <label htmlFor="search-title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="search-title"
            id="search-title"
            value={title}
            onChange={this.changeHandler}
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle-input"
            id="subtitle-input"
            data-testid="subtitle-input"
            value={subtitle}
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="image-input"
            id="image-input"
            data-testid="image-input"
            value={imagePath}
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline-input"
            id="storyline-input"
            data-testid="storyline-input"
            value={storyline}
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating-input"
            id="rating-input"
            data-testid="rating-input"
            value={rating}
            onChange={this.changeHandler}
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre-input"
            id="genre-input"
            data-testid="genre-input"
            value={genre}
            onChange={this.changeHandler}
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
        <button
          type="submit"
          data-testid="send-button"
          onClick={onClick}
        >
        Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
