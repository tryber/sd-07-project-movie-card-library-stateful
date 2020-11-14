import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleEvent = this.handleEvent.bind(this);
    this.handleClickEvent = this.handleClickEvent.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  resetAddMovieState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleClickEvent() {
    const { onClick } = this.props;
    onClick(this.state);
    this.resetAddMovieState();
  }

  handleEvent({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { handleEvent, handleClickEvent } = this;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              data-testid="title-input" type="text" name="title"
              value={title} onChange={handleEvent}
            />
          </label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text" name="subtitle" data-testid="subtitle-input"
              value={subtitle} onChange={handleEvent}
            />
          </label>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input
              type="text" name="imagePath" data-testid="image-input"
              value={imagePath} onChange={handleEvent}
            />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline" data-testid="storyline-input"
              value={storyline} onChange={handleEvent}
            />
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              type="number" name="rating" data-testid="rating-input"
              value={rating} onChange={handleEvent}
            />
          </label>
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              name="genre" data-testid="genre-input"
              value={genre} onChange={handleEvent}
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button type="button" data-testid="send-button" onClick={handleClickEvent}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
