import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = initialState;
  }

  handleChange({ target }) {
    const { name } = target;
    const value = name === 'rating' ? Number(target.value) : target.value;
    this.setState({ [name]: value });
  }

  addNewMovie(callback) {
    callback(this.state);
    this.setState(initialState);
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <div>
          <label htmlFor="title" data-testid="title-input-label">Título</label>
          <input
            id="title"
            name="title"
            type="text"
            data-testid="title-input"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
          <input
            id="subtitle"
            name="subtitle"
            type="text"
            data-testid="subtitle-input"
            value={this.state.subtitle}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="image" data-testid="image-input-label">Imagem</label>
          <input
            htmlFor="image"
            name="imagePath"
            type="text"
            data-testid="image-input"
            value={this.state.imagePath}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="story" data-testid="storyline-input-label">Sinopse</label>
          <textarea
            id="story"
            name="storyline"
            data-testid="storyline-input"
            onChange={this.handleChange}
            value={this.state.storyline}
          />
        </div>
        <div>
          <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
          <input
            id="rating"
            name="rating"
            type="number"
            data-testid="rating-input"
            value={this.state.rating}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
          <select
            id="genre"
            name="genre"
            value={this.state.genre}
            onChange={this.handleChange}
            data-testid="genre-input"
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
        </div>
        <div>
          <button
            type="sumbmit"
            data-testid="send-button"
            onClick={(e) => {
              e.preventDefault();
              this.addNewMovie(onClick);
            }}
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
