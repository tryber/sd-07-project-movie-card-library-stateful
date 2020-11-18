// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.onHandleNewMovie = this.onHandleNewMovie.bind(this);
    this.resetState = this.resetState.bind(this);
    this.sendNewMovie = this.sendNewMovie.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.baseState = this.state;
  }

  onHandleNewMovie({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  sendNewMovie(event) {
    event.preventDefault();
    const { subtitle, title, imagePath, storyline, genre } = this.state;
    let { rating } = this.state;
    rating = parseInt(rating, 10);
    const movie = { title, subtitle, imagePath, storyline, rating, genre };
    this.resetState();
    return this.props.onClick(movie);
  }

  resetState() {
    this.setState(this.baseState);
  }

  render() {
    return (
      <form data-testid="add-movie-form" className="form">
        <label className="label" htmlFor="title" data-testid="title-input-label" >
          Título
        </label>
        <input
          className="input"
          name="title"
          type="text"
          placeholder="Insira o título do filme"
          data-testid="title-input"
          value={this.state.title}
          onChange={this.onHandleNewMovie}
        />
        <label className="label" htmlFor="subtitle" data-testid="subtitle-input-label" >
          Subtítulo
        </label>
        <input
          className="input"
          name="subtitle"
          type="text"
          placeholder="Insira o subtítulo do filme"
          data-testid="subtitle-input"
          value={this.state.subtitle}
          onChange={this.onHandleNewMovie}
        />
        <label className="label" htmlFor="imagePath" data-testid="image-input-label" >
          Imagem
        </label>
        <input
          className="input"
          name="imagePath"
          type="text"
          placeholder="Insira o caminho para imagem do novo filme"
          data-testid="image-input"
          value={this.state.imagePath}
          onChange={this.onHandleNewMovie}
        />
        <label className="label" htmlFor="storyline" data-testid="storyline-input-label" >
          Sinopse
        </label>
        <textarea
          className="input"
          name="storyline"
          placeholder="Insira o caminho para imagem do novo filme"
          data-testid="storyline-input"
          value={this.state.storyline}
          onChange={this.onHandleNewMovie}
        >
        </textarea>
        <label className="label" htmlFor="rating" data-testid="rating-input-label">
          Avaliação
        </label>
        <input
          className="input"
          name="rating"
          type="number"
          data-testid="rating-input"
          value={this.state.rating}
          onChange={this.onHandleNewMovie}
        />
        <label className="label" htmlFor="genre" data-testid="genre-input-label" >
          Gênero:
        </label>
        <div className="select is-primary">
          <select
            data-testid="genre-input"
            name="genre"
            value={this.state.genre}
            onChange={this.onHandleNewMovie}
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </div>
        <div className="buttons">
          <button
            className="button is-primary"
            data-testid="send-button"
            type="button"
            onClick={this.sendNewMovie}
          >
            Adicionar filme
          </button>
        </div>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
