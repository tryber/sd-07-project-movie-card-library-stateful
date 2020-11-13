import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.addMovie = this.addMovie.bind(this);
    this.handlerEvent = this.handlerEvent.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handlerEvent(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addMovie() {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" className="addMovie-field">

        <label data-testid="title-input-label" htmlFor="title">
                Título
          <input
            data-testid="title-input"
            name="title"
            type="text" value={title}
            onChange={this.handlerEvent}
            className="addMovie-item"
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle">
                Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            type="text" value={subtitle}
            onChange={this.handlerEvent}
            className="addMovie-item"
          />
        </label>

        <label data-testid="image-input-label" htmlFor="image">
                Imagem
          <input
            data-testid="image-input"
            name="imagePath" type="text"
            value={imagePath}
            onChange={this.handlerEvent}
            className="addMovie-item"
          />
        </label>

        <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            type="text"
            value={storyline}
            onChange={this.handlerEvent}
            className="addMovie-item"
          />
        </label>

        <label data-testid="rating-input-label" htmlFor="rating">
         Avaliação
          <input
            data-testid="rating-input"
            name="rating"
            type="number"
            value={rating}
            onChange={this.handlerEvent}
            className="addMovie-item"
          />
        </label>

        <label data-testid="genre-input-label" htmlFor="genre">
            Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={genre}
            onChange={this.handlerEvent}
            className="addMovie-item"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          type="submit"
          onClick={this.addMovie}
          className="addMovie-button"
        >
          Adicionar filme
        </button>


      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
