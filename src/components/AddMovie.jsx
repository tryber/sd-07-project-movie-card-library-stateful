import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.changeHandler = this.changeHandler.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: '',
    };
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addNewMovie() {
    this.props.onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: '',
    });
  }

  render() {
    return (
      <div className="add-movie">
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <br />
            <input
              data-testid="title-input"
              className="inputs"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.changeHandler}
            />
          </label>
          <br />
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <br />
            <input
              data-testid="subtitle-input"
              className="inputs"
              type="text"
              name="subtitle"
              value={this.state.subtitle}
              onChange={this.changeHandler}
            />
          </label>
          <br />
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <br />
            <input
              data-testid="image-input"
              className="inputs"
              type="text"
              name="imagePath"
              value={this.state.imagePath}
              onChange={this.changeHandler}
            />
          </label>
          <br />
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <br />
            <textarea
              data-testid="storyline-input"
              className="textarea"
              name="storyline"
              value={this.state.storyline}
              onChange={this.changeHandler}
              placeholder="Escreva um breve resumo"
              maxLength="120"
            />
          </label>
          <br />
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <br />
            <input
              data-testid="rating-input"
              className="inputs"
              type="number"
              name="rating"
              max="5"
              step="0.1"
              value={this.state.rating}
              onChange={this.changeHandler}
            />
          </label>
          <br />
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <br />
            <select
              data-testid="genre-input"
              name="genre"
              className="inputs"
              value={this.state.genre}
              onChange={this.changeHandler}
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
        <button
          data-testid="send-button"
          className="button"
          onClick={this.addNewMovie}
        >Adicionar filme</button>
      </div>

    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
