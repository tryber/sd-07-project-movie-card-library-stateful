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

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  }

  render() {
    const { onClick } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="title" data-testid="title-input-label">Título</label>
          <input
            type="text"
            value={this.state.title}
            id="title" onChange={this.onChangeHandler}
            data-testid="title-input"
          />

          <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
          <input
            type="text"
            value={this.state.subtitle}
            id="subtitle"
            onChange={this.onChangeHandler}
            data-testid="subtitle-input"
          />

          <label htmlFor="imagePath" data-testid="image-input-label">Imagem</label>
          <input
            type="text"
            value={this.state.imagePath}
            id="imagePath"
            onChange={this.onChangeHandler}
            data-testid="image-input"
          />

          <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
          <textarea
            value={this.state.storyline}
            id="storyline"
            cols="30"
            rows="5"
            onChange={this.onChangeHandler}
            data-testid="storyline-input"
          />

          <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
          <input
            type="number"
            min="0"
            max="5"
            step="0.1"
            value={this.state.rating}
            id="rating"
            onChange={this.onChangeHandler}
            data-testid="rating-input"
          />

          <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
          <select
            id="genre"
            value={this.state.genre}
            onChange={this.onChangeHandler}
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </form>

        <button onClick={onClick} data-testid="send-button">Adicionar Filme</button>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func }.isRequired;

export default AddMovie;
