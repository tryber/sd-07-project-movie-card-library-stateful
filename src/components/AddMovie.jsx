import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.sendMovie = this.sendMovie.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  sendMovie(currentState, onClick) {
    onClick(currentState);
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
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <div>
          <label data-testid="title-input-label" htmlFor="title-input">
            Título
            <input
              name="title"
              type="text"
              data-testid="title-input"
              value={title}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
            <input
              name="subtitle"
              type="text"
              data-testid="subtitle-input"
              value={subtitle}
              onChange={this.handleChange}
            />
            Subtítulo
          </label>
        </div>
        <div>
          <label data-testid="image-input-label" htmlFor="image-input">
            Imagem
            <input
              name="imagePath"
              type="text"
              data-testid="image-input"
              value={imagePath}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label data-testid="storyline-input-label" htmlFor="storyline-input">
            Sinopse
            <textarea
              name="storyline"
              type="textarea"
              data-testid="storyline-input"
              value={storyline}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label data-testid="rating-input-label" htmlFor="rating-input">
            Avaliação
            <input
              name="rating"
              type="number"
              data-testid="rating-input"
              value={rating}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label data-testid="genre-input-label" htmlFor="genre-input">
            Gênero
            <select
              name="genre"
              data-testid="genre-input"
              value={genre}
              onChange={this.handleChange}
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </div>
        <div>
          <button
            type="button"
            onClick={() => this.sendMovie(this.state, onClick)}
            data-testid="send-button"
          >
            Adicionar filme
          </button>
        </div>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
