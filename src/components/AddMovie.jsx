import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.btnAddMovie = this.btnAddMovie.bind(this);
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

  btnAddMovie() {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              type="text"
              value={title}
              data-testid="title-input"
              onChange={this.handleChange}
              name="title"
            />
          </label>

          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              value={subtitle}
              data-testid="subtitle-input"
              onChange={this.handleChange}
              name="subtitle"
            />
          </label>

          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              value={imagePath}
              data-testid="image-input"
              onChange={this.handleChange}
              name="imagePath"
            />
          </label>

          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              value={storyline}
              data-testid="storyline-input"
              onChange={this.handleChange}
              name="storyline"
            />
          </label>

          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              value={rating}
              data-testid="rating-input"
              onChange={this.handleChange}
              name="rating"
            />
          </label>

          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              value={genre}
              data-testid="genre-input"
              onChange={this.handleChange}
              name="genre"
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
          </label>

          <button type="button" data-testid="send-button" onClick={this.btnAddMovie}>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
