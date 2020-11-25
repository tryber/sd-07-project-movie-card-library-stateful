import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    const {
      handleChange,
      subtitle,
      title,
      imagePath,
      genre,
      rating,
      storyline,
      onClick,
    } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
          </label>
          <input
            id="title-input"
            value={title}
            data-testid="title-input"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
          </label>
          <input
            id="subtitle-input"
            value={subtitle}
            data-testid="subtitle-input"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
          </label>
          <input
            type="text"
            id="image-input"
            alt="moive-cover"
            data-testid="image-input"
            src={imagePath}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="storyline-label" data-testid="storyline-input-label">
            Sinopse
          </label>
          <input
            type="textarea"
            id="storyline-label"
            data-testid="storyline-input"
            onChange={storyline}
          />
        </div>
        <div>
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
          </label>
          <input
            type="number"
            id="rating-input"
            data-testid="rating-input"
            onChange={rating}
          />
        </div>
        <div>
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
          </label>
          <select
            id="genre-input"
            value={genre}
            data-testid="genre-input"
            onChange={handleChange}
          >
            <option value="action" data-testid="genre-option">
              Ação
            </option>
            <option value="comedy" data-testid="genre-option">
              Comédia
            </option>
            <option value="thriller" data-testid="genre-option">
              Suspense
            </option>
          </select>
        </div>
        <div>
          <button data-testid="send-button" onClick={() => onClick}>
            Adicionar filme
          </button>
        </div>
      </form>
    );
  }
}

AddMovie.defaultProps = {
  handleChange: PropTypes.func,
  title: '',
  subtitle: '',
  imagePath: '',
  genre: 'action',
  rating: 0,
  storyline: '',
  onClick: PropTypes.func,
};

AddMovie.propTypes = {
  handleChange: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  genre: PropTypes.string,
  rating: PropTypes.number,
  storyline: PropTypes.string,
  onClick: PropTypes.func,
};

export default AddMovie;
