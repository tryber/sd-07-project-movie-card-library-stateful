import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.hendleClickChange = this.hendleClickChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleTitleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  hendleClickChange(callbackClick) {
    callbackClick(this.state);

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
    const click = this.props.onClick;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">Título</label>
        <input
          type="text"
          data-testid="title-input"
          value={this.state.title}
          id="title"
          onChange={this.handleTitleChange}
          name="title"
        />

        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          type="text"
          data-testid="subtitle-input"
          value={this.state.subtitle}
          id="subtitle"
          onChange={this.handleTitleChange}
          name="subtitle"
        />

        <label htmlFor="imagePath" data-testid="image-input-label">Imagem</label>
        <input
          type="text"
          data-testid="image-input"
          value={this.state.imagePath}
          id="imagePath"
          onChange={this.handleTitleChange}
          name="imagePath"
        />

        <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
        <textarea
          type="text"
          data-testid="storyline-input"
          value={this.state.storyline}
          id="storyline"
          onChange={this.handleTitleChange}
          name="storyline"
        />

        <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
        <input
          type="number"
          data-testid="rating-input"
          value={this.state.rating}
          id="rating"
          onChange={this.handleTitleChange}
          name="rating"
        />

        <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
        <select
          type="text"
          data-testid="genre-input"
          value={this.state.genre}
          id="genre"
          onChange={this.handleTitleChange}
          name="genre"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>

        <button 
          data-testid="send-button" 
          onClick={() => this.hendleClickChange(click)}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
