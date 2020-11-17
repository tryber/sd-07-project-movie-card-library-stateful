import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.getHandler = this.getHandler.bind(this);
    this.addMovie = this.addMovie.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  getHandler({ target }) {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }));
  }

  addMovie(event) {
    event.preventDefault();
    const { onClick } = this.props;


    this.setState((previousState) => {
      onClick(previousState);
      return ({
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      });
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={title}
          onChange={this.getHandler}
        />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle">Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={subtitle}
          onChange={this.getHandler}
        />
        </label>

        <label data-testid="image-input-label" htmlFor="imagePath">Imagem
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={imagePath}
          onChange={this.getHandler}
        />
        </label>

        <label data-testid="storyline-input-label" htmlFor="storyline">Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={storyline}
          onChange={this.getHandler}
        />
        </label>

        <label data-testid="rating-input-label" htmlFor="rating">Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={rating}
          onChange={this.getHandler}
        />
        </label>

        <label data-testid="genre-input-label" htmlFor="genre">Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={genre}
          onChange={this.getHandler}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        </label>

        <div className="button-addMovie">
          <button data-testid="send-button" onClick={this.addMovie}>
            Adicionar filme
        </button>
        </div>

      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
export default AddMovie;
