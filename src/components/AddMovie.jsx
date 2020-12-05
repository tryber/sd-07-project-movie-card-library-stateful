import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      sotryLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleSubmit(e) {
    const { handleAddMovie } = this.props;
    handleAddMovie(this.state);
    this.handleResetForm();
    e.preventDefault();
  }

  render() {
    // const { onClick } = this.props;
    return (
      <form>
        <label htmlFor="titulo" data-testid="title-input-label">
          Título
        </label>
        <input
          type="text"
          name="titulo"
          data-testid="title-input"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label htmlFor="subtitulo" data-testid="subtitle-input-label">
          Subtítulo
        </label>
        <input
          type="text"
          name="subtitulo"
          data-testid="title-input"
          value={this.state.subtitle}
          onChange={(event) => this.setState({ subtitle: event.target.value })}
        />
        <label htmlFor="imagem" data-testid="image-input-label">
          Imagem
        </label>
        <input
          type="text"
          name="imagem"
          value={this.state.imagePath}
          data-testid="image-input"
          onChange={(event) => this.setState({ imagePath: event.target.value })}
        />
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
        </label>
        <textarea
          name="sinopse"
          data-testid="storyline-input"
          value={this.state.sotryLine}
          onChange={(event) => this.setState({ storyline: event.target.value })}
        />
        <label htmlFor="nota" data-testid="rating-input-label">
          Avaliação
        </label>
        <input
          type="number"
          name="nota"
          data-testid="rating-input"
          value={this.state.rating}
          onChange={(event) => this.setState({ rating: event.target.value })}
        />
        <label htmlFor="genero" data-testid="genre-input-label">
          Gênero
        </label>
        <select
          name="genero"
          value={this.state.genre}
          data-testid="genre-input"
          onChange={(event) => this.setState({ genre: event.target.value })}
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
        <button data-testid="send-button" onCLick={this.handleSubmit}>Adicionar filme</button>
      </form>
    );
  }
}

// AddMovie.propTypes = { onCLick: PropTypes.func }.isRequired;
AddMovie.propTypes = { handleSubmit: PropTypes.func}.isRequired;

export default AddMovie;
