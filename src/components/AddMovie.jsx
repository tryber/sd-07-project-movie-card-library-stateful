// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  // constructor(props) {
  //   super(props);
    // this.onHandlerChange = this.onHandlerChange.bind(this);
    // this.sendNewMovie = this.sendNewMovie.bind(this);
  // }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
      onHandleNewMovie,
      onClick
    } = this.props;

    return (
      <form data-testid="add-movie-form" className="form">
        <label className="label" htmlFor="title" data-testid="title-input-label" >
          Título
        </label>
        <input
          className="input"
          name="title"
          type="text"
          placeholder="Insira o título do filme"
          data-testid="title-input"
          value={title}
          onChange={onHandleNewMovie}
        />
        <label className="label" htmlFor="subtitle" data-testid="subtitle-input-label" >
          Subtítulo
        </label>
        <input
          className="input"
          name="subtitle"
          type="text"
          placeholder="Insira o subtítulo do filme"
          data-testid="subtitle-input"
          value={subtitle}
          onChange={onHandleNewMovie}
        />
        <label
          className="label"
          htmlFor="imagePath"
          data-testid="image-input-label"
        > Imagem
        </label>
        <input
          className="input"
          name="imagePath"
          type="text"
          placeholder="Insira o caminho para imagem do novo filme"
          data-testid="image-input"
          value={imagePath}
          onChange={onHandleNewMovie}
        />
        <label
          className="label"
          htmlFor="storyline"
          data-testid="storyline-input-label"
        > Sinopse
        </label>
        <input
          className="input"
          name="storyline"
          type="textarea"
          placeholder="Insira o caminho para imagem do novo filme"
          data-testid="storyline-input"
          value={storyline}
          onChange={onHandleNewMovie}
        />
        <label className="label" htmlFor="rating" data-testid="rating-input-label">
          Avaliação
        </label>
        <input
          className="input"
          name="rating"
          type="number"
          data-testid="rating-input"
          value={rating}
          onChange={onHandleNewMovie}
        />
        <label
          className="label"
          htmlFor="genre"
          data-testid="genre-input-label"
        > Gênero:
        </label>
        <div className="select is-primary">
          <select
            data-testid="genre-input"
            name="genre"
            value={genre}
            onChange={onHandleNewMovie}
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </div>
        <div className="buttons">
          <button
            className="button is-primary"
            data-testid="send-button"
            type="button"
            onClick={onClick}
          >
            Adicionar filme
          </button>
        </div>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  onHandleNewMovie: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
