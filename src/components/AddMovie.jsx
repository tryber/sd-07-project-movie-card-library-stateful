import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChangeHandler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  handleOnSubmit() {
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
    return (
      <div>
        <form className="form" data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              type="text"
              value={this.state.title}
              id="title-input-label"
              onChange={this.onChangeHandler}
              data-testid="title-input"
              name="title"
            />
          </label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              value={this.state.subtitle}
              id="subtitle-input-label"
              name="subtitle"
              onChange={this.onChangeHandler}
              data-testid="subtitle-input"
            />
          </label>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              value={this.state.imagePath}
              id="image-input-label"
              name="imagePath"
              onChange={this.onChangeHandler}
              data-testid="image-input"
            />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              value={this.state.storyline}
              id="storyline-input-label"
              name="storyline"
              cols="30"
              rows="5"
              onChange={this.onChangeHandler}
              data-testid="storyline-input"
            />
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              min="0"
              max="5"
              step="0.1"
              value={this.state.rating}
              id="rating-input-label"
              name="rating"
              onChange={this.onChangeHandler}
              data-testid="rating-input"
            />
          </label>
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              id="genre-input-label"
              name="genre"
              value={this.state.genre}
              onChange={this.onChangeHandler}
              data-testid="genre-input"
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
        </form>
        <button onClick={() => this.handleOnSubmit()} data-testid="send-button" type="submit">
          Adicionar filme
        </button>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func }.isRequired;

export default AddMovie;
